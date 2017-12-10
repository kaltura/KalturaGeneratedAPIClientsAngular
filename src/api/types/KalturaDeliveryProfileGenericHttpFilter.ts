
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfileGenericHttpBaseFilter, KalturaDeliveryProfileGenericHttpBaseFilterArgs } from './KalturaDeliveryProfileGenericHttpBaseFilter';

export interface KalturaDeliveryProfileGenericHttpFilterArgs  extends KalturaDeliveryProfileGenericHttpBaseFilterArgs {
    
}


export class KalturaDeliveryProfileGenericHttpFilter extends KalturaDeliveryProfileGenericHttpBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileGenericHttpFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHttpFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericHttpFilter',KalturaDeliveryProfileGenericHttpFilter);
