declare namespace State {
  export interface layoutState {
    isSidebarOpened: boolean;
  }
}

declare module "@mui/material/core/styles" {
  interface Theme {
    customShadows: {
      widget: string;
      widgetDark: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customShadows?: {
      widget?: string;
      widgetDark?: string;
    };
  }
}
