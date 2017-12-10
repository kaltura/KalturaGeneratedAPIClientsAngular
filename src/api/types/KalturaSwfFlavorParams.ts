
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaSwfFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    flashVersion? : number;
	poly2Bitmap? : boolean;
}


export class KalturaSwfFlavorParams extends KalturaFlavorParams {

    flashVersion : number;
	poly2Bitmap : boolean;

    constructor(data? : KalturaSwfFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSwfFlavorParams' },
				flashVersion : { type : 'n' },
				poly2Bitmap : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSwfFlavorParams',KalturaSwfFlavorParams);
