
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';

export interface KalturaImageFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsOutputFilterArgs {
    
}


export class KalturaImageFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {

    

    constructor(data? : KalturaImageFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaImageFlavorParamsOutputBaseFilter'] = KalturaImageFlavorParamsOutputBaseFilter;