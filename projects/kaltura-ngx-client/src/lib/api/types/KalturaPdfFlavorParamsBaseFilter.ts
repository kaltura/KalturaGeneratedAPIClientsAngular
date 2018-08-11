
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaPdfFlavorParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaPdfFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaPdfFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPdfFlavorParamsBaseFilter'] = KalturaPdfFlavorParamsBaseFilter;