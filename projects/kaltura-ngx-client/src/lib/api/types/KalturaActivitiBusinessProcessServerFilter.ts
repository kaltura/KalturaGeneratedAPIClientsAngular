
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaActivitiBusinessProcessServerBaseFilter, KalturaActivitiBusinessProcessServerBaseFilterArgs } from './KalturaActivitiBusinessProcessServerBaseFilter';

export interface KalturaActivitiBusinessProcessServerFilterArgs  extends KalturaActivitiBusinessProcessServerBaseFilterArgs {
    
}


export class KalturaActivitiBusinessProcessServerFilter extends KalturaActivitiBusinessProcessServerBaseFilter {

    

    constructor(data? : KalturaActivitiBusinessProcessServerFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActivitiBusinessProcessServerFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaActivitiBusinessProcessServerFilter'] = KalturaActivitiBusinessProcessServerFilter;