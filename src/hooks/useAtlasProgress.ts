import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { BRAND } from '../config/brand';

export interface UserAtlasState {
  foundIds: string[];
  bookmarkedIds: string[];
  completedSteps: Record<string, number[]>;
  spoilerShield: boolean;
  theme: 'dark' | 'light';
}

const STORAGE_KEY = `${BRAND.storageKeyPrefix}_state`;

const DEFAULT_STATE: UserAtlasState = {
  foundIds: [],
  bookmarkedIds: [],
  completedSteps: {},
  spoilerShield: true,
  theme: 'dark',
};

let cachedRaw: string | null = null;
let cachedState: UserAtlasState = DEFAULT_STATE;
const listeners = new Set<() => void>();

function parseStoredState(raw: string | null): UserAtlasState {
  if (!raw) return DEFAULT_STATE;
  try {
    const parsed = JSON.parse(raw) as Partial<UserAtlasState>;
    return {
      foundIds: Array.isArray(parsed.foundIds) ? parsed.foundIds : [],
      bookmarkedIds: Array.isArray(parsed.bookmarkedIds) ? parsed.bookmarkedIds : [],
      completedSteps:
        parsed.completedSteps && typeof parsed.completedSteps === 'object'
          ? parsed.completedSteps
          : {},
      spoilerShield:
        typeof parsed.spoilerShield === 'boolean' ? parsed.spoilerShield : true,
      theme: parsed.theme === 'light' ? 'light' : 'dark',
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function getClientSnapshot(): UserAtlasState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedState = parseStoredState(raw);
    }
    return cachedState;
  } catch {
    return DEFAULT_STATE;
  }
}

function getServerSnapshot(): UserAtlasState {
  return DEFAULT_STATE;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage);
  }
  return () => {
    listeners.delete(listener);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage);
    }
  };
}

function updateStoredState(updater: (prev: UserAtlasState) => UserAtlasState) {
  const next = updater(getClientSnapshot());
  const nextRaw = JSON.stringify(next);
  cachedRaw = nextRaw;
  cachedState = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, nextRaw);
  } catch {
    // Ignore storage quota errors in private browsing
  }
  for (const fn of listeners) fn();
}

export function useAtlasProgress() {
  const state = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  const toggleFound = useCallback((entryId: string) => {
    updateStoredState((prev) => {
      const exists = prev.foundIds.includes(entryId);
      return {
        ...prev,
        foundIds: exists
          ? prev.foundIds.filter((id) => id !== entryId)
          : [...prev.foundIds, entryId],
      };
    });
  }, []);

  const toggleBookmark = useCallback((entryId: string) => {
    updateStoredState((prev) => {
      const exists = prev.bookmarkedIds.includes(entryId);
      return {
        ...prev,
        bookmarkedIds: exists
          ? prev.bookmarkedIds.filter((id) => id !== entryId)
          : [...prev.bookmarkedIds, entryId],
      };
    });
  }, []);

  const toggleStepCompleted = useCallback((entryId: string, stepNumber: number) => {
    updateStoredState((prev) => {
      const current = prev.completedSteps[entryId] ?? [];
      const exists = current.includes(stepNumber);
      const nextSteps = exists
        ? current.filter((n) => n !== stepNumber)
        : [...current, stepNumber].sort((a, b) => a - b);

      return {
        ...prev,
        completedSteps: {
          ...prev.completedSteps,
          [entryId]: nextSteps,
        },
      };
    });
  }, []);

  const markAllStepsAndFound = useCallback((entryId: string, totalSteps: number) => {
    const allStepNums = Array.from({ length: totalSteps }, (_, idx) => idx + 1);
    updateStoredState((prev) => ({
      ...prev,
      foundIds: prev.foundIds.includes(entryId)
        ? prev.foundIds
        : [...prev.foundIds, entryId],
      completedSteps: {
        ...prev.completedSteps,
        [entryId]: allStepNums,
      },
    }));
  }, []);

  const toggleSpoilerShield = useCallback(() => {
    updateStoredState((prev) => ({ ...prev, spoilerShield: !prev.spoilerShield }));
  }, []);

  const toggleTheme = useCallback(() => {
    updateStoredState((prev) => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  const resetProgress = useCallback(() => {
    updateStoredState((prev) => ({
      ...prev,
      foundIds: [],
      bookmarkedIds: [],
      completedSteps: {},
    }));
  }, []);

  return {
    state,
    toggleFound,
    toggleBookmark,
    toggleStepCompleted,
    markAllStepsAndFound,
    toggleSpoilerShield,
    toggleTheme,
    resetProgress,
  };
}
