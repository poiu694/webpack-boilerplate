import { css } from '@emotion/css';

export const fonts = {
  bold32: css`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 1.5;
  `,
  bold16: css`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.5;
  `,
} as const;

export type FontTheme = typeof fonts;
