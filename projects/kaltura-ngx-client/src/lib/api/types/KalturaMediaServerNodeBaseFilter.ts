
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaMediaServerNodeBaseFilter'] = KalturaMediaServerNodeBaseFilter;