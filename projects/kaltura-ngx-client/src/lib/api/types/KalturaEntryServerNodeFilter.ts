
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeBaseFilter, KalturaEntryServerNodeBaseFilterArgs } from './KalturaEntryServerNodeBaseFilter';

export interface KalturaEntryServerNodeFilterArgs  extends KalturaEntryServerNodeBaseFilterArgs {
    
}


export class KalturaEntryServerNodeFilter extends KalturaEntryServerNodeBaseFilter {

    

    constructor(data? : KalturaEntryServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryServerNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryServerNodeFilter'] = KalturaEntryServerNodeFilter;