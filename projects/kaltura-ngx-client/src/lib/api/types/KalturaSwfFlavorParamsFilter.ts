
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSwfFlavorParamsBaseFilter, KalturaSwfFlavorParamsBaseFilterArgs } from './KalturaSwfFlavorParamsBaseFilter';

export interface KalturaSwfFlavorParamsFilterArgs  extends KalturaSwfFlavorParamsBaseFilterArgs {
    
}


export class KalturaSwfFlavorParamsFilter extends KalturaSwfFlavorParamsBaseFilter {

    

    constructor(data? : KalturaSwfFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSwfFlavorParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSwfFlavorParamsFilter'] = KalturaSwfFlavorParamsFilter;