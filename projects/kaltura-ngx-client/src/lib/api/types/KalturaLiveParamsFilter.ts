
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveParamsBaseFilter, KalturaLiveParamsBaseFilterArgs } from './KalturaLiveParamsBaseFilter';

export interface KalturaLiveParamsFilterArgs  extends KalturaLiveParamsBaseFilterArgs {
    
}


export class KalturaLiveParamsFilter extends KalturaLiveParamsBaseFilter {

    

    constructor(data? : KalturaLiveParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveParamsFilter'] = KalturaLiveParamsFilter;