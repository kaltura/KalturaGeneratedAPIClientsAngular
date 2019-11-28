
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfMapsGetCacheVersionIdActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'confMaps' action 'getCacheVersionId'.
 *
 * Usage: Get configuration map cache key
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class ConfMapsGetCacheVersionIdAction extends KalturaRequest<string> {

    

    constructor(data? : ConfMapsGetCacheVersionIdActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'confmaps_confmaps' },
				action : { type : 'c', default : 'getCacheVersionId' }
            }
        );
        return result;
    }
}

