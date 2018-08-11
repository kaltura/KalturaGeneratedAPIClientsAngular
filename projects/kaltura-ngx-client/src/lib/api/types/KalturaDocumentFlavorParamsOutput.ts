
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaDocumentFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    
}


export class KalturaDocumentFlavorParamsOutput extends KalturaFlavorParamsOutput {

    

    constructor(data? : KalturaDocumentFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentFlavorParamsOutput' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDocumentFlavorParamsOutput'] = KalturaDocumentFlavorParamsOutput;