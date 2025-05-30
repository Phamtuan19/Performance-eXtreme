export type ColorShades = {
   50: string;
   100: string;
   200: string;
   300: string;
   400: string;
   500: string;
   600: string;
   700: string;
   800: string;
   900: string;
   950: string;
};

export type PaletteColor = {
   main: string;
   light: string;
   dark: string;
   contrastText: string;
};

export type TextColors = {
   primary: string;
   secondary: string;
   disabled: string;
   icon: string;
   hint: string;
   link: string;
   error: string;
   info: string;
   success: string;
   warning: string;
};

export type Palette = {
   mode: 'light' | 'dark';
   common: {
      black: string;
      white: string;
      icon: string;
      hint: string;
      link: string;
      error: string;
      info: string;
      success: string;
      warning: string;
   };
   disabled: {
      backgroundColor: string;
      color: string;
      borderColor: string;
   };
   primary: PaletteColor;
   secondary: PaletteColor;
   error: PaletteColor;
   warning: PaletteColor;
   success: PaletteColor;
   info: PaletteColor;

   red: ColorShades;
   orange: ColorShades;
   amber: ColorShades;
   yellow: ColorShades;
   lime: ColorShades;
   green: ColorShades;
   emerald: ColorShades;
   teal: ColorShades;
   cyan: ColorShades;
   sky: ColorShades;
   blue: ColorShades;
   indigo: ColorShades;
   violet: ColorShades;
   purple: ColorShades;
   fuchsia: ColorShades;
   pink: ColorShades;
   rose: ColorShades;
   slate: ColorShades;
   zinc: ColorShades;
   neutral: ColorShades;
   gray: ColorShades;
   stone: ColorShades;
};

export type ThemeColor = keyof Pick<Palette, 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'>;
