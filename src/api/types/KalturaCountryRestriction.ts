
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCountryRestrictionType } from './KalturaCountryRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaCountryRestrictionArgs  extends KalturaBaseRestrictionArgs {
    countryRestrictionType? : KalturaCountryRestrictionType;
	countryList? : string;
}


export class KalturaCountryRestriction extends KalturaBaseRestriction {

    countryRestrictionType : KalturaCountryRestrictionType;
	countryList : string;

    constructor(data? : KalturaCountryRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountryRestriction' },
				countryRestrictionType : { type : 'en', subTypeConstructor : KalturaCountryRestrictionType, subType : 'KalturaCountryRestrictionType' },
				countryList : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountryRestriction',KalturaCountryRestriction);
