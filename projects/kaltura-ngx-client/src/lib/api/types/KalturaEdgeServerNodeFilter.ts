
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEdgeServerNodeBaseFilter, KalturaEdgeServerNodeBaseFilterArgs } from './KalturaEdgeServerNodeBaseFilter';

export interface KalturaEdgeServerNodeFilterArgs  extends KalturaEdgeServerNodeBaseFilterArgs {
    
}


export class KalturaEdgeServerNodeFilter extends KalturaEdgeServerNodeBaseFilter {

    

    constructor(data? : KalturaEdgeServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEdgeServerNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEdgeServerNodeFilter'] = KalturaEdgeServerNodeFilter;