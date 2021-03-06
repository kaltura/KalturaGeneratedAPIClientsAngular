
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';

export interface KalturaDeliveryServerNodeBaseFilterArgs  extends KalturaServerNodeFilterArgs {
    
}


export class KalturaDeliveryServerNodeBaseFilter extends KalturaServerNodeFilter {

    

    constructor(data? : KalturaDeliveryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryServerNodeBaseFilter'] = KalturaDeliveryServerNodeBaseFilter;