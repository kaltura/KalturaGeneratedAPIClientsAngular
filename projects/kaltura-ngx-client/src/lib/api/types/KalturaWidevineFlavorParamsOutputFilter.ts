
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaWidevineFlavorParamsOutputBaseFilter, KalturaWidevineFlavorParamsOutputBaseFilterArgs } from './KalturaWidevineFlavorParamsOutputBaseFilter';

export interface KalturaWidevineFlavorParamsOutputFilterArgs  extends KalturaWidevineFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaWidevineFlavorParamsOutputFilter extends KalturaWidevineFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaWidevineFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParamsOutputFilter'] = KalturaWidevineFlavorParamsOutputFilter;