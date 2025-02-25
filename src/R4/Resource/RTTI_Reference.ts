import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';

export interface IReference {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
   * A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
   */
  reference?: string;

  /**
   * Extensions for reference
   */
  _reference?: IElement;

  /**
                     * The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent.

The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).
                     */
  type?: string;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
   */
  identifier?: IIdentifier;

  /**
   * Plain text narrative that identifies the resource in addition to the resource reference.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;
}

export const RTTI_Reference: t.Type<IReference> = t.recursion(
  'IReference',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      reference: t.string,
      _reference: RTTI_Element,
      type: RTTI_uri,
      _type: RTTI_Element,
      identifier: RTTI_Identifier,
      display: t.string,
      _display: RTTI_Element,
    }),
);
