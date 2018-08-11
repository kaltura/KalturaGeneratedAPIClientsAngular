
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentFlavorParamsOutputBaseFilter, KalturaDocumentFlavorParamsOutputBaseFilterArgs } from './KalturaDocumentFlavorParamsOutputBaseFilter';

export interface KalturaDocumentFlavorParamsOutputFilterArgs  extends KalturaDocumentFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaDocumentFlavorParamsOutputFilter extends KalturaDocumentFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaDocumentFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentFlavorParamsOutputFilter'] = KalturaDocumentFlavorParamsOutputFilter;