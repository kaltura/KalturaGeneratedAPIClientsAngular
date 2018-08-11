
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface MediaGetVolumeMapActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'media' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class MediaGetVolumeMapAction extends KalturaFileRequest {

    entryId : string;

    constructor(data : MediaGetVolumeMapActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'getVolumeMap' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

