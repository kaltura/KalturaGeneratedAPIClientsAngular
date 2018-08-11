
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPdfFlavorParamsOutputBaseFilter, KalturaPdfFlavorParamsOutputBaseFilterArgs } from './KalturaPdfFlavorParamsOutputBaseFilter';

export interface KalturaPdfFlavorParamsOutputFilterArgs  extends KalturaPdfFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaPdfFlavorParamsOutputFilter extends KalturaPdfFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaPdfFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPdfFlavorParamsOutputFilter'] = KalturaPdfFlavorParamsOutputFilter;