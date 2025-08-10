// src/plugins/mainPagePlugin.js
import { usePageType } from "@/composables/usePageType";

export default {
  install(app) {
    app.config.globalProperties.$usePageType = usePageType;
  },
};
