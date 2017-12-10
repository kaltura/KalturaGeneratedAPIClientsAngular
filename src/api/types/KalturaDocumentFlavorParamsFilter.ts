
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentFlavorParamsBaseFilter, KalturaDocumentFlavorParamsBaseFilterArgs } from './KalturaDocumentFlavorParamsBaseFilter';

export interface KalturaDocumentFlavorParamsFilterArgs  extends KalturaDocumentFlavorParamsBaseFilterArgs {
    
}


export class KalturaDocumentFlavorParamsFilter extends KalturaDocumentFlavorParamsBaseFilter {

    

    constructor(data? : KalturaDocumentFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentFlavorParamsFilter',KalturaDocumentFlavorParamsFilter);
