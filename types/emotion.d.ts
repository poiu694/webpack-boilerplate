import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fonts: import('@/styles').FontTheme;
  }
}
