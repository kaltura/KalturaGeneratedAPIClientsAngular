
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaSwfFlavorParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaSwfFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaSwfFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSwfFlavorParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSwfFlavorParamsBaseFilter'] = KalturaSwfFlavorParamsBaseFilter;