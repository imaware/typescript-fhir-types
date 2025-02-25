import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_instant} from '../Scalar/RTTI_instant';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {IDomainResource} from './IDomainResource';

export interface IMedia extends IDomainResource {
  /**
   * This is a Media resource
   */
  resourceType: 'Media';

  /**
   * The actual content of the media - inline or by direct reference to the media source file.
   */
  content: IAttachment;

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
   */
  identifier?: IIdentifier[];

  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: IReference[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: IReference[];

  /**
   * The current state of the {{title}}.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: ICodeableConcept;

  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: ICodeableConcept;

  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: ICodeableConcept;

  /**
   * Who/What this Media is a record of.
   */
  subject?: IReference;

  /**
   * The encounter that establishes the context for this media.
   */
  encounter?: IReference;

  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: string;

  /**
   * Extensions for createdDateTime
   */
  _createdDateTime?: IElement;

  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: IPeriod;

  /**
   * The date and time this version of the media was made available to providers, typically after having been reviewed.
   */
  issued?: string;

  /**
   * Extensions for issued
   */
  _issued?: IElement;

  /**
   * The person who administered the collection of the image.
   */
  operator?: IReference;

  /**
   * Describes why the event occurred in coded or textual form.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates the site on the subject's body where the observation was made (i.e. the target site).
   */
  bodySite?: ICodeableConcept;

  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: string;

  /**
   * Extensions for deviceName
   */
  _deviceName?: IElement;

  /**
   * The device used to collect the media.
   */
  device?: IReference;

  /**
   * Height of the image in pixels (photo/video).
   */
  height?: number;

  /**
   * Extensions for height
   */
  _height?: IElement;

  /**
   * Width of the image in pixels (photo/video).
   */
  width?: number;

  /**
   * Extensions for width
   */
  _width?: IElement;

  /**
   * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
   */
  frames?: number;

  /**
   * Extensions for frames
   */
  _frames?: IElement;

  /**
   * The duration of the recording in seconds - for audio and video.
   */
  duration?: number;

  /**
   * Extensions for duration
   */
  _duration?: IElement;

  /**
   * Comments made about the media by the performer, subject or other participants.
   */
  note?: IAnnotation[];
}

export const RTTI_Media: t.Type<IMedia> = t.recursion('IMedia', () =>
  t.intersection([
    t.type({
      resourceType: t.literal('Media'),
      content: RTTI_Attachment,
    }),
    t.partial({
      id: RTTI_id,
      meta: RTTI_Meta,
      implicitRules: RTTI_uri,
      _implicitRules: RTTI_Element,
      language: RTTI_code,
      _language: RTTI_Element,
      text: RTTI_Narrative,
      contained: t.array(RTTI_ResourceList),
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: t.array(RTTI_Identifier),
      basedOn: t.array(RTTI_Reference),
      partOf: t.array(RTTI_Reference),
      status: RTTI_code,
      _status: RTTI_Element,
      type: RTTI_CodeableConcept,
      modality: RTTI_CodeableConcept,
      view: RTTI_CodeableConcept,
      subject: RTTI_Reference,
      encounter: RTTI_Reference,
      createdDateTime: t.string,
      _createdDateTime: RTTI_Element,
      createdPeriod: RTTI_Period,
      issued: RTTI_instant,
      _issued: RTTI_Element,
      operator: RTTI_Reference,
      reasonCode: t.array(RTTI_CodeableConcept),
      bodySite: RTTI_CodeableConcept,
      deviceName: t.string,
      _deviceName: RTTI_Element,
      device: RTTI_Reference,
      height: RTTI_positiveInt,
      _height: RTTI_Element,
      width: RTTI_positiveInt,
      _width: RTTI_Element,
      frames: RTTI_positiveInt,
      _frames: RTTI_Element,
      duration: RTTI_decimal,
      _duration: RTTI_Element,
      note: t.array(RTTI_Annotation),
    }),
  ]),
);
