
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeFilter, KalturaEntryServerNodeFilterArgs } from './KalturaEntryServerNodeFilter';

export interface KalturaSipEntryServerNodeBaseFilterArgs  extends KalturaEntryServerNodeFilterArgs {
    
}


export class KalturaSipEntryServerNodeBaseFilter extends KalturaEntryServerNodeFilter {

    

    constructor(data? : KalturaSipEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSipEntryServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSipEntryServerNodeBaseFilter'] = KalturaSipEntryServerNodeBaseFilter;