import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPhoneBookContactLForm from './forms/i-i-s-phone-book-contact-l';
import IISPhoneBookContactTypeLForm from './forms/i-i-s-phone-book-contact-type-l';
import IISPhoneBookContactEForm from './forms/i-i-s-phone-book-contact-e';
import IISPhoneBookContactTypeEForm from './forms/i-i-s-phone-book-contact-type-e';
import IISPhoneBookContactTypeModel from './models/i-i-s-phone-book-contact-type';
import IISPhoneBookContactModel from './models/i-i-s-phone-book-contact';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-phone-book-contact-type': IISPhoneBookContactTypeModel,
    'i-i-s-phone-book-contact': IISPhoneBookContactModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'phone-book': {
          caption: 'phone-book',
          title: 'phone-book',
          'i-i-s-phone-book-contact-type-l': {
            caption: 'i-i-s-phone-book-contact-type-l',
            title: 'i-i-s-phone-book-contact-type-l'
          },
          'i-i-s-phone-book-contact-l': {
            caption: 'i-i-s-phone-book-contact-l',
            title: 'i-i-s-phone-book-contact-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-phone-book-contact-l': IISPhoneBookContactLForm,
    'i-i-s-phone-book-contact-type-l': IISPhoneBookContactTypeLForm,
    'i-i-s-phone-book-contact-e': IISPhoneBookContactEForm,
    'i-i-s-phone-book-contact-type-e': IISPhoneBookContactTypeEForm
  },

});

export default translations;
