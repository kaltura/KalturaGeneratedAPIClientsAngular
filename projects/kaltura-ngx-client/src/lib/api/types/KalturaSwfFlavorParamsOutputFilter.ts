
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSwfFlavorParamsOutputBaseFilter, KalturaSwfFlavorParamsOutputBaseFilterArgs } from './KalturaSwfFlavorParamsOutputBaseFilter';

export interface KalturaSwfFlavorParamsOutputFilterArgs  extends KalturaSwfFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaSwfFlavorParamsOutputFilter extends KalturaSwfFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaSwfFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSwfFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSwfFlavorParamsOutputFilter'] = KalturaSwfFlavorParamsOutputFilter;