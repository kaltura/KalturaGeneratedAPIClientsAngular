
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';

export interface KalturaLiveParamsArgs  extends KalturaFlavorParamsArgs {
    streamSuffix? : string;
}


export class KalturaLiveParams extends KalturaFlavorParams {

    streamSuffix : string;

    constructor(data? : KalturaLiveParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveParams' },
				streamSuffix : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveParams',KalturaLiveParams);
