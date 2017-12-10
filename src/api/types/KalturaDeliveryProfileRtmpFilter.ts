
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileRtmpBaseFilter, KalturaDeliveryProfileRtmpBaseFilterArgs } from './KalturaDeliveryProfileRtmpBaseFilter';

export interface KalturaDeliveryProfileRtmpFilterArgs  extends KalturaDeliveryProfileRtmpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileRtmpFilter extends KalturaDeliveryProfileRtmpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileRtmpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileRtmpFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileRtmpFilter',KalturaDeliveryProfileRtmpFilter);
