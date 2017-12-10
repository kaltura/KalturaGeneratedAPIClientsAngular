
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryContextDataParams, KalturaEntryContextDataParamsArgs } from './KalturaEntryContextDataParams';

export interface KalturaPlaybackContextOptionsArgs  extends KalturaEntryContextDataParamsArgs {
    
}


export class KalturaPlaybackContextOptions extends KalturaEntryContextDataParams {

    

    constructor(data? : KalturaPlaybackContextOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContextOptions' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackContextOptions',KalturaPlaybackContextOptions);
