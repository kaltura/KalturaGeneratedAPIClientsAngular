
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';

export interface KalturaImageFlavorParamsOutputArgs  extends KalturaFlavorParamsOutputArgs {
    densityWidth? : number;
	densityHeight? : number;
	sizeWidth? : number;
	sizeHeight? : number;
	depth? : number;
}


export class KalturaImageFlavorParamsOutput extends KalturaFlavorParamsOutput {

    densityWidth : number;
	densityHeight : number;
	sizeWidth : number;
	sizeHeight : number;
	depth : number;

    constructor(data? : KalturaImageFlavorParamsOutputArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParamsOutput' },
				densityWidth : { type : 'n' },
				densityHeight : { type : 'n' },
				sizeWidth : { type : 'n' },
				sizeHeight : { type : 'n' },
				depth : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageFlavorParamsOutput',KalturaImageFlavorParamsOutput);
