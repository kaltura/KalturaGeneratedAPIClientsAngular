
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';

export interface KalturaDeliveryProfileRtmpBaseFilterArgs  extends KalturaDeliveryProfileFilterArgs {
    
}


export class KalturaDeliveryProfileRtmpBaseFilter extends KalturaDeliveryProfileFilter {

    

    constructor(data? : KalturaDeliveryProfileRtmpBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileRtmpBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileRtmpBaseFilter'] = KalturaDeliveryProfileRtmpBaseFilter;