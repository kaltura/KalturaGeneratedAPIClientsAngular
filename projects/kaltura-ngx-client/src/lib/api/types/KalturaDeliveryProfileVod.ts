
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileVodArgs  extends KalturaDeliveryProfileArgs {
    simuliveSupport? : boolean;
}


export class KalturaDeliveryProfileVod extends KalturaDeliveryProfile {

    simuliveSupport : boolean;

    constructor(data? : KalturaDeliveryProfileVodArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileVod' },
				simuliveSupport : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileVod'] = KalturaDeliveryProfileVod;