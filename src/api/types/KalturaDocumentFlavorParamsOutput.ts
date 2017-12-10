
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaDocumentFlavorParamsOutput',KalturaDocumentFlavorParamsOutput);
