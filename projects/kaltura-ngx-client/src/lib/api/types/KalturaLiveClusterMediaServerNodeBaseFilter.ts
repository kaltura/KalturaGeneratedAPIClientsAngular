
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaServerNodeFilter, KalturaMediaServerNodeFilterArgs } from './KalturaMediaServerNodeFilter';

export interface KalturaLiveClusterMediaServerNodeBaseFilterArgs  extends KalturaMediaServerNodeFilterArgs {
    
}


export class KalturaLiveClusterMediaServerNodeBaseFilter extends KalturaMediaServerNodeFilter {

    

    constructor(data? : KalturaLiveClusterMediaServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveClusterMediaServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveClusterMediaServerNodeBaseFilter'] = KalturaLiveClusterMediaServerNodeBaseFilter;