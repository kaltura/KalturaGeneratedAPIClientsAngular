
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaDocumentFlavorParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaDocumentFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaDocumentFlavorParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParamsBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentFlavorParamsBaseFilter'] = KalturaDocumentFlavorParamsBaseFilter;