
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaFlavorParamsOutputBaseFilter, KalturaMediaFlavorParamsOutputBaseFilterArgs } from './KalturaMediaFlavorParamsOutputBaseFilter';

export interface KalturaMediaFlavorParamsOutputFilterArgs  extends KalturaMediaFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaMediaFlavorParamsOutputFilter extends KalturaMediaFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaMediaFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFlavorParamsOutputFilter'] = KalturaMediaFlavorParamsOutputFilter;