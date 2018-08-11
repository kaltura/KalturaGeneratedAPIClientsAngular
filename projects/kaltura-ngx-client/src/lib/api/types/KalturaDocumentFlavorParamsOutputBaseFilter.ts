
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';

export interface KalturaDocumentFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsOutputFilterArgs {
    
}


export class KalturaDocumentFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {

    

    constructor(data? : KalturaDocumentFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParamsOutputBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentFlavorParamsOutputBaseFilter'] = KalturaDocumentFlavorParamsOutputBaseFilter;