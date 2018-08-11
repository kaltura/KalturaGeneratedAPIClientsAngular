
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileLiveAppleHttpBaseFilter, KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs } from './KalturaDeliveryProfileLiveAppleHttpBaseFilter';

export interface KalturaDeliveryProfileLiveAppleHttpFilterArgs  extends KalturaDeliveryProfileLiveAppleHttpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileLiveAppleHttpFilter extends KalturaDeliveryProfileLiveAppleHttpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileLiveAppleHttpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileLiveAppleHttpFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileLiveAppleHttpFilter'] = KalturaDeliveryProfileLiveAppleHttpFilter;