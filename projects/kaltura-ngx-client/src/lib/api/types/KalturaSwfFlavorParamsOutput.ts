
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaSwfFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    flashVersion? : number;
	poly2Bitmap? : boolean;
}


export class KalturaSwfFlavorParamsOutput extends KalturaFlavorParamsOutput {

    flashVersion : number;
	poly2Bitmap : boolean;

    constructor(data? : KalturaSwfFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSwfFlavorParamsOutput' },
				flashVersion : { type : 'n' },
				poly2Bitmap : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSwfFlavorParamsOutput'] = KalturaSwfFlavorParamsOutput;