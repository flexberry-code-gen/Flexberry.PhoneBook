import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Phone book',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Phone book',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Phone book',
          title: 'Phone book'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'phone-book': {
          caption: 'PhoneBook',
          title: 'PhoneBook',
          'i-i-s-phone-book-contact-type-l': {
            caption: 'Contact type',
            title: ''
          },
          'i-i-s-phone-book-contact-l': {
            caption: 'Contact',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-phone-book-contact-l': IISPhoneBookContactLForm,
    'i-i-s-phone-book-contact-type-l': IISPhoneBookContactTypeLForm,
    'i-i-s-phone-book-contact-e': IISPhoneBookContactEForm,
    'i-i-s-phone-book-contact-type-e': IISPhoneBookContactTypeEForm
  },

});

export default translations;
