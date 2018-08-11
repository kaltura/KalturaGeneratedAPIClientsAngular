
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaLiveParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaLiveParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaLiveParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveParamsBaseFilter'] = KalturaLiveParamsBaseFilter;