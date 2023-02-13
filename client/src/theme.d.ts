import { ThemeOptions } from '@mui/material/styles';
import React from 'react';
import { type PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PlaletteColor
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }

  interface PaletteColor {
    darker?: string
  }
}
