
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';

export interface KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs  extends KalturaDeliveryProfileFilterArgs {
    
}


export class KalturaDeliveryProfileGenericAppleHttpBaseFilter extends KalturaDeliveryProfileFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericAppleHttpBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericAppleHttpBaseFilter'] = KalturaDeliveryProfileGenericAppleHttpBaseFilter;