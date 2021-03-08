import {Type, success, failure, identity} from 'io-ts';

/**
 * A URI that is a reference to a canonical URL on a FHIR resource
 */
export class RTTI_canonicalType extends Type<string> {
  private static regexExp = /^\S*$/;

  // readonly _tag: 'RTTI_canonicalType' = 'RTTI_canonicalType';

  constructor() {
    super(
      /** a unique name for this codec */

      'RTTI_canonicalType',
      /** a custom type guard */

      (m): m is string =>
        typeof m === 'string' && RTTI_canonicalType.regexExp.test(m.toString()),
      /** succeeds if a value of type I can be decoded to a value of type A */

      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      /** converts a value of type A to a value of type O */
      identity,
    );
  }
}

export const RTTI_canonical = new RTTI_canonicalType();
