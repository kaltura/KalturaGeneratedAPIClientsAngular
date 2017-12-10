
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaPdfFlavorParamsArgs  extends KalturaFlavorParamsArgs {
    readonly? : boolean;
}


export class KalturaPdfFlavorParams extends KalturaFlavorParams {

    readonly : boolean;

    constructor(data? : KalturaPdfFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParams' },
				readonly : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPdfFlavorParams',KalturaPdfFlavorParams);
