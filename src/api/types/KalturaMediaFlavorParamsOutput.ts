
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaMediaFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    
}


export class KalturaMediaFlavorParamsOutput extends KalturaFlavorParamsOutput {

    

    constructor(data? : KalturaMediaFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFlavorParamsOutput' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaFlavorParamsOutput',KalturaMediaFlavorParamsOutput);
