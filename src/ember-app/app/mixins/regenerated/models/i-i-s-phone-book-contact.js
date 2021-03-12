import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  contactType: DS.belongsTo('i-i-s-phone-book-contact-type', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-phone-book-contact.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.i-i-s-phone-book-contact.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contactType: {
    descriptionKey: 'models.i-i-s-phone-book-contact.validations.contactType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContactE', 'i-i-s-phone-book-contact', {
    name: attr('Name', { index: 0 }),
    phone: attr('Phone', { index: 1 }),
    contactType: belongsTo('i-i-s-phone-book-contact-type', 'Contact type', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ContactL', 'i-i-s-phone-book-contact', {
    name: attr('Name', { index: 0 }),
    phone: attr('Phone', { index: 1 }),
    contactType: belongsTo('i-i-s-phone-book-contact-type', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
