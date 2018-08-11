
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericAppleHttpBaseFilter, KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs } from './KalturaDeliveryProfileGenericAppleHttpBaseFilter';

export interface KalturaDeliveryProfileGenericAppleHttpFilterArgs  extends KalturaDeliveryProfileGenericAppleHttpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileGenericAppleHttpFilter extends KalturaDeliveryProfileGenericAppleHttpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericAppleHttpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericAppleHttpFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericAppleHttpFilter'] = KalturaDeliveryProfileGenericAppleHttpFilter;