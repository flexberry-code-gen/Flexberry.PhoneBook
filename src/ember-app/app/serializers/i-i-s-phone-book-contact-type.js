import { Serializer as ContactTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-phone-book-contact-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ContactTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
