// Menu types
export type MenuState = {
  menu: {
    [key: string]: any;
    colors: boolean;
    filter: boolean;
  };
};

// Filter click state types
export interface FilterClickState {
  bw: boolean;
  cool: boolean;
  warm: boolean;
  modern: boolean;
  asesthict: boolean;
  urban: boolean;
} 