import { createContext } from 'react';
import type { SafetyContextType } from './SafetyContextType.ts';

export const SafetyContext = createContext<SafetyContextType | undefined>(undefined);
