
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSiteRestrictionType } from './KalturaSiteRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaSiteRestrictionArgs  extends KalturaBaseRestrictionArgs {
    siteRestrictionType? : KalturaSiteRestrictionType;
	siteList? : string;
}


export class KalturaSiteRestriction extends KalturaBaseRestriction {

    siteRestrictionType : KalturaSiteRestrictionType;
	siteList : string;

    constructor(data? : KalturaSiteRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSiteRestriction' },
				siteRestrictionType : { type : 'en', subTypeConstructor : KalturaSiteRestrictionType, subType : 'KalturaSiteRestrictionType' },
				siteList : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSiteRestriction',KalturaSiteRestriction);
