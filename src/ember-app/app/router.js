import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-phone-book-contact-l');
  this.route('i-i-s-phone-book-contact-e',
  { path: 'i-i-s-phone-book-contact-e/:id' });
  this.route('i-i-s-phone-book-contact-e.new',
  { path: 'i-i-s-phone-book-contact-e/new' });
  this.route('i-i-s-phone-book-contact-type-l');
  this.route('i-i-s-phone-book-contact-type-e',
  { path: 'i-i-s-phone-book-contact-type-e/:id' });
  this.route('i-i-s-phone-book-contact-type-e.new',
  { path: 'i-i-s-phone-book-contact-type-e/new' });
});

export default Router;
