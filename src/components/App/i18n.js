import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import LocizeEditor from 'locize-editor';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';


i18n
  .use(LocizeBackend)
  .use(LocizeEditor)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    appendNamespaceToCIMode: true,
    saveMissing: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,
    keySeparator: '### not used ###', // we use content as keys
    nsSeparator: '### not used ###', // we use content as keys

    backend: {
      projectId: '193c815e-315f-45be-81dd-fb684a038b43', // <-- replace with your projectId
      apiKey: '72a34fb5-3a3b-45b9-9fa5-c1c5c6009b46',
      referenceLng: 'en'
    },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    },

    react: {
      wait: true
    },

    editor: {
      // trigger a reload on editor save
      onEditorSaved: function(lng, ns) {
        i18n.reloadResources(lng, ns);
      }
    }
  });


export default i18n;