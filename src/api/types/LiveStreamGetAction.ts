
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/**
 * Build request payload for service 'liveStream' action 'get'.
 *
 * Usage: Get live stream entry by ID
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamGetAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	version : number;

    constructor(data : LiveStreamGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamEntry', responseConstructor : KalturaLiveStreamEntry  });
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}

