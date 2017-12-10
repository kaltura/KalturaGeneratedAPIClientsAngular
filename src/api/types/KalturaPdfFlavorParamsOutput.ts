
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaPdfFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    readonly? : boolean;
}


export class KalturaPdfFlavorParamsOutput extends KalturaFlavorParamsOutput {

    readonly : boolean;

    constructor(data? : KalturaPdfFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsOutput' },
				readonly : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPdfFlavorParamsOutput',KalturaPdfFlavorParamsOutput);
