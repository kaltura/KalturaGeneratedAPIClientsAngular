
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaMediaFlavorParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaMediaFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaMediaFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFlavorParamsBaseFilter'] = KalturaMediaFlavorParamsBaseFilter;