
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserAgentRestrictionType } from './KalturaUserAgentRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaUserAgentRestrictionArgs  extends KalturaBaseRestrictionArgs {
    userAgentRestrictionType? : KalturaUserAgentRestrictionType;
	userAgentRegexList? : string;
}


export class KalturaUserAgentRestriction extends KalturaBaseRestriction {

    userAgentRestrictionType : KalturaUserAgentRestrictionType;
	userAgentRegexList : string;

    constructor(data? : KalturaUserAgentRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAgentRestriction' },
				userAgentRestrictionType : { type : 'en', subTypeConstructor : KalturaUserAgentRestrictionType, subType : 'KalturaUserAgentRestrictionType' },
				userAgentRegexList : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAgentRestriction',KalturaUserAgentRestriction);
