import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';

export interface IClaimResponse_Payment {
  /**
   * Whether this represents partial or complete payment of the benefits payable.
   */
  type: ICodeableConcept;

  /**
   * Benefits payable less any payment adjustment.
   */
  amount: IMoney;

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
   * Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication.
   */
  adjustment?: IMoney;

  /**
   * Reason for the payment adjustment.
   */
  adjustmentReason?: ICodeableConcept;

  /**
   * Estimated date the payment will be issued or the actual issue date of payment.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * Issuer's unique identifier for the payment instrument.
   */
  identifier?: IIdentifier;
}

export const RTTI_ClaimResponse_Payment: t.Type<IClaimResponse_Payment> = t.recursion(
  'IClaimResponse_Payment',
  () =>
    t.intersection([
      t.type({
        type: RTTI_CodeableConcept,
        amount: RTTI_Money,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        adjustment: RTTI_Money,
        adjustmentReason: RTTI_CodeableConcept,
        date: RTTI_date,
        _date: RTTI_Element,
        identifier: RTTI_Identifier,
      }),
    ]),
);
