
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ShortLinkGotoActionArgs  extends KalturaFileRequestArgs {
    id : string;
	proxy? : boolean;
}

/**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ShortLinkGotoAction extends KalturaFileRequest {

    id : string;
	proxy : boolean;

    constructor(data : ShortLinkGotoActionArgs)
    {
        super(data);
        if (typeof this.proxy === 'undefined') this.proxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'shortlink_shortlink' },
				action : { type : 'c', default : 'goto' },
				id : { type : 's' },
				proxy : { type : 'b' }
            }
        );
        return result;
    }
}

