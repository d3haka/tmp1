"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="light"
    // enableSystem
    disableTransitionOnChange
  >
    {children}
  </NextThemesProvider>
);
