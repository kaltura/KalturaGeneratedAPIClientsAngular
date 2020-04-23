
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSipEntryServerNodeBaseFilter, KalturaSipEntryServerNodeBaseFilterArgs } from './KalturaSipEntryServerNodeBaseFilter';

export interface KalturaSipEntryServerNodeFilterArgs  extends KalturaSipEntryServerNodeBaseFilterArgs {
    
}


export class KalturaSipEntryServerNodeFilter extends KalturaSipEntryServerNodeBaseFilter {

    

    constructor(data? : KalturaSipEntryServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipEntryServerNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSipEntryServerNodeFilter'] = KalturaSipEntryServerNodeFilter;