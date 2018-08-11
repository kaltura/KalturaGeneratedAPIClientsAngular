
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericSilverLightBaseFilter, KalturaDeliveryProfileGenericSilverLightBaseFilterArgs } from './KalturaDeliveryProfileGenericSilverLightBaseFilter';

export interface KalturaDeliveryProfileGenericSilverLightFilterArgs  extends KalturaDeliveryProfileGenericSilverLightBaseFilterArgs {
    
}


export class KalturaDeliveryProfileGenericSilverLightFilter extends KalturaDeliveryProfileGenericSilverLightBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericSilverLightFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericSilverLightFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericSilverLightFilter'] = KalturaDeliveryProfileGenericSilverLightFilter;