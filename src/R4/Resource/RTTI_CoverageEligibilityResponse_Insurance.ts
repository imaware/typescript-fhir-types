import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {
  RTTI_CoverageEligibilityResponse_Item,
  ICoverageEligibilityResponse_Item,
} from './RTTI_CoverageEligibilityResponse_Item';

export interface ICoverageEligibilityResponse_Insurance {
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: IReference;

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
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: boolean;

  /**
   * Extensions for inforce
   */
  _inforce?: IElement;

  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: IPeriod;

  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: ICoverageEligibilityResponse_Item[];
}

export const RTTI_CoverageEligibilityResponse_Insurance: t.Type<ICoverageEligibilityResponse_Insurance> =
  t.recursion('ICoverageEligibilityResponse_Insurance', () =>
    t.intersection([
      t.type({
        coverage: RTTI_Reference,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        inforce: t.boolean,
        _inforce: RTTI_Element,
        benefitPeriod: RTTI_Period,
        item: t.array(RTTI_CoverageEligibilityResponse_Item),
      }),
    ]),
  );
