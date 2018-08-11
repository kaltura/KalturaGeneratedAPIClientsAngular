
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericHdsBaseFilter, KalturaDeliveryProfileGenericHdsBaseFilterArgs } from './KalturaDeliveryProfileGenericHdsBaseFilter';

export interface KalturaDeliveryProfileGenericHdsFilterArgs  extends KalturaDeliveryProfileGenericHdsBaseFilterArgs {
    
}


export class KalturaDeliveryProfileGenericHdsFilter extends KalturaDeliveryProfileGenericHdsBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericHdsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHdsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericHdsFilter'] = KalturaDeliveryProfileGenericHdsFilter;