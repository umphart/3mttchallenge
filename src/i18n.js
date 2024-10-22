import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome": "Welcome",
          "ThreatAlerts": "Real-time Threat Alerts"
        }
      },
      ha: {
        translation: {
          "Welcome": "Barka da zuwa",
          "ThreatAlerts": "Faɗakarwar Barazana na Gaskiya"
        }
      },
      // Add Yoruba, Igbo
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;