
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmpFilter, KalturaDeliveryProfileRtmpFilterArgs } from './KalturaDeliveryProfileRtmpFilter';

export interface KalturaDeliveryProfileGenericRtmpBaseFilterArgs  extends KalturaDeliveryProfileRtmpFilterArgs {
    
}


export class KalturaDeliveryProfileGenericRtmpBaseFilter extends KalturaDeliveryProfileRtmpFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericRtmpBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericRtmpBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericRtmpBaseFilter'] = KalturaDeliveryProfileGenericRtmpBaseFilter;