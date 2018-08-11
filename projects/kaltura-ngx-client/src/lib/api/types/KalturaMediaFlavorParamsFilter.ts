
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaFlavorParamsBaseFilter, KalturaMediaFlavorParamsBaseFilterArgs } from './KalturaMediaFlavorParamsBaseFilter';

export interface KalturaMediaFlavorParamsFilterArgs  extends KalturaMediaFlavorParamsBaseFilterArgs {
    
}


export class KalturaMediaFlavorParamsFilter extends KalturaMediaFlavorParamsBaseFilter {

    

    constructor(data? : KalturaMediaFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFlavorParamsFilter'] = KalturaMediaFlavorParamsFilter;