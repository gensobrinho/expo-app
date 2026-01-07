import '@emotion/react';
import { ThemeType } from './ThemeType';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
