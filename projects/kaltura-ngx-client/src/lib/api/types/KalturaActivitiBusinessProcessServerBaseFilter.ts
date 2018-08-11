
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServerFilter, KalturaBusinessProcessServerFilterArgs } from './KalturaBusinessProcessServerFilter';

export interface KalturaActivitiBusinessProcessServerBaseFilterArgs  extends KalturaBusinessProcessServerFilterArgs {
    
}


export class KalturaActivitiBusinessProcessServerBaseFilter extends KalturaBusinessProcessServerFilter {

    

    constructor(data? : KalturaActivitiBusinessProcessServerBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActivitiBusinessProcessServerBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaActivitiBusinessProcessServerBaseFilter'] = KalturaActivitiBusinessProcessServerBaseFilter;