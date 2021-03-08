import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';

export interface ITestScript_Origin {
  /**
   * The type of origin profile the test system supports.
   */
  profile: ICoding;

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
   * Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1.
   */
  index?: number;

  /**
   * Extensions for index
   */
  _index?: IElement;
}

export const RTTI_TestScript_Origin: t.Type<ITestScript_Origin> = t.recursion(
  'ITestScript_Origin',
  () =>
    t.intersection([
      t.type({
        profile: RTTI_Coding,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        index: RTTI_integer,
        _index: RTTI_Element,
      }),
    ]),
);
