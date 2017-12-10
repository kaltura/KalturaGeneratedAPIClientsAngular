
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIpAddressRestrictionType } from './KalturaIpAddressRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaIpAddressRestrictionArgs  extends KalturaBaseRestrictionArgs {
    ipAddressRestrictionType? : KalturaIpAddressRestrictionType;
	ipAddressList? : string;
}


export class KalturaIpAddressRestriction extends KalturaBaseRestriction {

    ipAddressRestrictionType : KalturaIpAddressRestrictionType;
	ipAddressList : string;

    constructor(data? : KalturaIpAddressRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIpAddressRestriction' },
				ipAddressRestrictionType : { type : 'en', subTypeConstructor : KalturaIpAddressRestrictionType, subType : 'KalturaIpAddressRestrictionType' },
				ipAddressList : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIpAddressRestriction',KalturaIpAddressRestriction);
