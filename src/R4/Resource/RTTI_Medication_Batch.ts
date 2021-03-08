import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';

export interface IMedication_Batch {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * The assigned lot number of a batch of the specified product.
   */
  lotNumber?: string;

  /**
   * Extensions for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * When this specific batch of product will expire.
   */
  expirationDate?: string;

  /**
   * Extensions for expirationDate
   */
  _expirationDate?: IElement;
}

export const RTTI_Medication_Batch: t.Type<IMedication_Batch> = t.recursion(
  'IMedication_Batch',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      lotNumber: t.string,
      _lotNumber: RTTI_Element,
      expirationDate: RTTI_dateTime,
      _expirationDate: RTTI_Element,
    }),
);
