
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaDocumentFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    
}


export class KalturaDocumentFlavorParams extends KalturaFlavorParams {

    

    constructor(data? : KalturaDocumentFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParams' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentFlavorParams'] = KalturaDocumentFlavorParams;