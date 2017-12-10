
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLimitFlavorsRestrictionType } from './KalturaLimitFlavorsRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaLimitFlavorsRestrictionArgs  extends KalturaBaseRestrictionArgs {
    limitFlavorsRestrictionType? : KalturaLimitFlavorsRestrictionType;
	flavorParamsIds? : string;
}


export class KalturaLimitFlavorsRestriction extends KalturaBaseRestriction {

    limitFlavorsRestrictionType : KalturaLimitFlavorsRestrictionType;
	flavorParamsIds : string;

    constructor(data? : KalturaLimitFlavorsRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLimitFlavorsRestriction' },
				limitFlavorsRestrictionType : { type : 'en', subTypeConstructor : KalturaLimitFlavorsRestrictionType, subType : 'KalturaLimitFlavorsRestrictionType' },
				flavorParamsIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLimitFlavorsRestriction',KalturaLimitFlavorsRestriction);
