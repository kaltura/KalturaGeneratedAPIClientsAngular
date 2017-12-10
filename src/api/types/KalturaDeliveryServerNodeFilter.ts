
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryServerNodeBaseFilter, KalturaDeliveryServerNodeBaseFilterArgs } from './KalturaDeliveryServerNodeBaseFilter';

export interface KalturaDeliveryServerNodeFilterArgs  extends KalturaDeliveryServerNodeBaseFilterArgs {
    
}


export class KalturaDeliveryServerNodeFilter extends KalturaDeliveryServerNodeBaseFilter {

    

    constructor(data? : KalturaDeliveryServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryServerNodeFilter',KalturaDeliveryServerNodeFilter);
