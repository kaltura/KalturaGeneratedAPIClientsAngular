
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileGenericRtmpBaseFilter, KalturaDeliveryProfileGenericRtmpBaseFilterArgs } from './KalturaDeliveryProfileGenericRtmpBaseFilter';

export interface KalturaDeliveryProfileGenericRtmpFilterArgs  extends KalturaDeliveryProfileGenericRtmpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileGenericRtmpFilter extends KalturaDeliveryProfileGenericRtmpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericRtmpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericRtmpFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericRtmpFilter',KalturaDeliveryProfileGenericRtmpFilter);
