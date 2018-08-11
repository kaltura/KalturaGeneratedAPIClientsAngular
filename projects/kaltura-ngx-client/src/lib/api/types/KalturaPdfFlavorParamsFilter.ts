
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPdfFlavorParamsBaseFilter, KalturaPdfFlavorParamsBaseFilterArgs } from './KalturaPdfFlavorParamsBaseFilter';

export interface KalturaPdfFlavorParamsFilterArgs  extends KalturaPdfFlavorParamsBaseFilterArgs {
    
}


export class KalturaPdfFlavorParamsFilter extends KalturaPdfFlavorParamsBaseFilter {

    

    constructor(data? : KalturaPdfFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPdfFlavorParamsFilter'] = KalturaPdfFlavorParamsFilter;