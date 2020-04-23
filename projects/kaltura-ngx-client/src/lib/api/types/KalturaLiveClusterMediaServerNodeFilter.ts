
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveClusterMediaServerNodeBaseFilter, KalturaLiveClusterMediaServerNodeBaseFilterArgs } from './KalturaLiveClusterMediaServerNodeBaseFilter';

export interface KalturaLiveClusterMediaServerNodeFilterArgs  extends KalturaLiveClusterMediaServerNodeBaseFilterArgs {
    
}


export class KalturaLiveClusterMediaServerNodeFilter extends KalturaLiveClusterMediaServerNodeBaseFilter {

    

    constructor(data? : KalturaLiveClusterMediaServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveClusterMediaServerNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveClusterMediaServerNodeFilter'] = KalturaLiveClusterMediaServerNodeFilter;