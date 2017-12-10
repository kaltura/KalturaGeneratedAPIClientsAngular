
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileLiveAppleHttpArgs  extends KalturaDeliveryProfileArgs {
    disableExtraAttributes? : boolean;
	forceProxy? : boolean;
}


export class KalturaDeliveryProfileLiveAppleHttp extends KalturaDeliveryProfile {

    disableExtraAttributes : boolean;
	forceProxy : boolean;

    constructor(data? : KalturaDeliveryProfileLiveAppleHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileLiveAppleHttp' },
				disableExtraAttributes : { type : 'b' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileLiveAppleHttp',KalturaDeliveryProfileLiveAppleHttp);
