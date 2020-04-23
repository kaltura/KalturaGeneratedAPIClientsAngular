
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';

export interface KalturaSipServerNodeBaseFilterArgs  extends KalturaServerNodeFilterArgs {
    
}


export class KalturaSipServerNodeBaseFilter extends KalturaServerNodeFilter {

    

    constructor(data? : KalturaSipServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSipServerNodeBaseFilter'] = KalturaSipServerNodeBaseFilter;