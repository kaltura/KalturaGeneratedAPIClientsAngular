
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';

export interface KalturaWidevineFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsOutputFilterArgs {
    
}


export class KalturaWidevineFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {

    

    constructor(data? : KalturaWidevineFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParamsOutputBaseFilter'] = KalturaWidevineFlavorParamsOutputBaseFilter;