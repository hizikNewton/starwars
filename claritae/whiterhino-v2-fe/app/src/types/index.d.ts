declare namespace State {
  export interface App {
    toast: ToastMessage | null;
    loading: boolean;
    secondLoading: boolean;
    appErrors: Array<AppError>;
    nodeVersion: string;
    appWidth: number;
    appHeight: number;
    language: "en" | "zh";
  }

  export interface AppError {
    type: "Network" | "Maintenance";
    message: string[];
  }
  export interface ToastMessage {
    message: string;
    type: "success" | "warning" | "danger";
    duration?: number;
    id: number;
  }
  export interface AppPayload extends App, ToastMessage {
    appError: AppError;
  }

  export interface Components {
    searchBarEditable: boolean;
    filterNoResult: boolean;
    mobileMenuVisible: boolean;
    headerSearchBarVisible: boolean;
    maintenanceAlertVisible: boolean;
  }
  export interface AppState {
    app: App;
    components: Components;
  }
}
