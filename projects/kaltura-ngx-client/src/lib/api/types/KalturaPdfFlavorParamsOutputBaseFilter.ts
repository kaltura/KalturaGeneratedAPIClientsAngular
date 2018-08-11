
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';

export interface KalturaPdfFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsOutputFilterArgs {
    
}


export class KalturaPdfFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {

    

    constructor(data? : KalturaPdfFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPdfFlavorParamsOutputBaseFilter'] = KalturaPdfFlavorParamsOutputBaseFilter;