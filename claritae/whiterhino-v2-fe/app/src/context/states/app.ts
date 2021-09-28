export const initApp: State.App = {
  toast: null,
  loading: false,
  secondLoading: false,
  appErrors: [
    {
      type: "Network",
      message: [],
    },
    {
      type: "Maintenance",
      message: [],
    },
  ],
  nodeVersion: "",
  appWidth: window.innerWidth,
  appHeight: window.innerHeight,
  language: navigator.language.includes("zh") ? "zh" : "en",
};

export default initApp;
