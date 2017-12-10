
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaDocumentFlavorParamsOutputFilter',KalturaDocumentFlavorParamsOutputFilter);
