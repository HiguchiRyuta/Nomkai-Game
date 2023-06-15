export const BREAK_POINT_LEVEL = {
  xs: 0, //extra-small
  sm: 600, //small
  md: 960, //medium
  lg: 1280, //large
  xl: 1920, //extra-large
};
export type BreakPointContextType = keyof typeof BREAK_POINT_LEVEL;
