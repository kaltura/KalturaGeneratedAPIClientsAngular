
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaImageFlavorParamsBaseFilter, KalturaImageFlavorParamsBaseFilterArgs } from './KalturaImageFlavorParamsBaseFilter';

export interface KalturaImageFlavorParamsFilterArgs  extends KalturaImageFlavorParamsBaseFilterArgs {
    
}


export class KalturaImageFlavorParamsFilter extends KalturaImageFlavorParamsBaseFilter {

    

    constructor(data? : KalturaImageFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaImageFlavorParamsFilter'] = KalturaImageFlavorParamsFilter;