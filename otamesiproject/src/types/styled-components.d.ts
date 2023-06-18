import { ThemeConsts } from "@another_works/react-landscape";

export interface Theme extends ThemeConsts.ColorSchema {}

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
