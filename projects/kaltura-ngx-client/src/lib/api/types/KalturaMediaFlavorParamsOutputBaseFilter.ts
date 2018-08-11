
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';

export interface KalturaMediaFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsOutputFilterArgs {
    
}


export class KalturaMediaFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {

    

    constructor(data? : KalturaMediaFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFlavorParamsOutputBaseFilter'] = KalturaMediaFlavorParamsOutputBaseFilter;