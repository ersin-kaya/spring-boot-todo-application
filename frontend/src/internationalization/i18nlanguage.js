import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        id: "ID",
        task: "Task",
        description: "Description",
        create: "Create",
        update: "Update",
        delete: "Delete",
        list: "List",
      },
    },
    tr: {
      translations: {
        id: "ID",
        task: "Görev",
        description: "Açıklama",
        create: "Ekle",
        update: "Güncelle",
        delete: "Sil",
        list: "Listele",
      },
    },
  },
  fallbackLng: "tr", //fallbackLng: 'en', fall back function
  ns: ["translations"], //kelimeleri nerede alsın
  defaultNS: "translations",
  keySeparator: false,
  interpolation: { escapeValue: false, formatSeparator: "," },
  react: {
    wait: true,
  },
});
export default i18n;
