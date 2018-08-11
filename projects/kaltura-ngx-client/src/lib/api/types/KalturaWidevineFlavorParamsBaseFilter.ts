
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaWidevineFlavorParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaWidevineFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaWidevineFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParamsBaseFilter'] = KalturaWidevineFlavorParamsBaseFilter;