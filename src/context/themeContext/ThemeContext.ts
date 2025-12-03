import { createContext } from 'react';
import type { ThemeContextType } from './ThemeContextType.ts';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
