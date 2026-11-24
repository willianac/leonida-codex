import { useCallback, useEffect, useState } from 'react';
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

function loadInitialState(): UserAtlasState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
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

export function useAtlasProgress() {
  const [state, setState] = useState<UserAtlasState>(loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors in private browsing
    }
  }, [state]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  const toggleFound = useCallback((entryId: string) => {
    setState((prev) => {
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
    setState((prev) => {
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
    setState((prev) => {
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
    setState((prev) => ({
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
    setState((prev) => ({ ...prev, spoilerShield: !prev.spoilerShield }));
  }, []);

  const toggleTheme = useCallback(() => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState((prev) => ({
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
