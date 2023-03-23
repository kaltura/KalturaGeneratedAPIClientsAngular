
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirtualEventBaseFilter, KalturaVirtualEventBaseFilterArgs } from './KalturaVirtualEventBaseFilter';

export interface KalturaVirtualEventFilterArgs  extends KalturaVirtualEventBaseFilterArgs {
    
}


export class KalturaVirtualEventFilter extends KalturaVirtualEventBaseFilter {

    

    constructor(data? : KalturaVirtualEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualEventFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualEventFilter'] = KalturaVirtualEventFilter;