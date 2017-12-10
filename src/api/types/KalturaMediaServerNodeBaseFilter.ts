
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryServerNodeFilter, KalturaDeliveryServerNodeFilterArgs } from './KalturaDeliveryServerNodeFilter';

export interface KalturaMediaServerNodeBaseFilterArgs  extends KalturaDeliveryServerNodeFilterArgs {
    
}


export class KalturaMediaServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {

    

    constructor(data? : KalturaMediaServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaServerNodeBaseFilter',KalturaMediaServerNodeBaseFilter);
