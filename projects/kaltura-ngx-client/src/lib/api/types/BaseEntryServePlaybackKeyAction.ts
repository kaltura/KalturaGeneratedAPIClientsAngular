
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface BaseEntryServePlaybackKeyActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'baseEntry' action 'servePlaybackKey'.
 *
 * Usage: This action serves HLS encrypted key if access control is validated
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryServePlaybackKeyAction extends KalturaFileRequest {

    entryId : string;

    constructor(data : BaseEntryServePlaybackKeyActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'servePlaybackKey' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

