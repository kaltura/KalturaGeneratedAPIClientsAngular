
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaPlaybackContextOptions'] = KalturaPlaybackContextOptions;