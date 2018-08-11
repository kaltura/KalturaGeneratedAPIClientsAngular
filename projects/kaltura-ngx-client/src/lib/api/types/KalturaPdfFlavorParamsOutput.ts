
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaPdfFlavorParamsOutput'] = KalturaPdfFlavorParamsOutput;