
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';

export interface KalturaDeliveryProfileGenericHttpBaseFilterArgs  extends KalturaDeliveryProfileFilterArgs {
    
}


export class KalturaDeliveryProfileGenericHttpBaseFilter extends KalturaDeliveryProfileFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericHttpBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHttpBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericHttpBaseFilter'] = KalturaDeliveryProfileGenericHttpBaseFilter;