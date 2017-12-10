
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileVodPackagerPlayServerArgs  extends KalturaDeliveryProfileArgs {
    adStitchingEnabled? : boolean;
}


export class KalturaDeliveryProfileVodPackagerPlayServer extends KalturaDeliveryProfile {

    adStitchingEnabled : boolean;

    constructor(data? : KalturaDeliveryProfileVodPackagerPlayServerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileVodPackagerPlayServer' },
				adStitchingEnabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileVodPackagerPlayServer',KalturaDeliveryProfileVodPackagerPlayServer);
