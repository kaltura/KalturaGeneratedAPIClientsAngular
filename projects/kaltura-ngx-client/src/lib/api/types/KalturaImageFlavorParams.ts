
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaImageFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    densityWidth? : number;
	densityHeight? : number;
	sizeWidth? : number;
	sizeHeight? : number;
	depth? : number;
}


export class KalturaImageFlavorParams extends KalturaFlavorParams {

    densityWidth : number;
	densityHeight : number;
	sizeWidth : number;
	sizeHeight : number;
	depth : number;

    constructor(data? : KalturaImageFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParams' },
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

typesMappingStorage['KalturaImageFlavorParams'] = KalturaImageFlavorParams;