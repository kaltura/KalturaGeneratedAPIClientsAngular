
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRegenerateStreamTokenActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'liveStream' action 'regenerateStreamToken'.
 *
 * Usage: Regenerate new secure token for liveStream
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamRegenerateStreamTokenAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;

    constructor(data : LiveStreamRegenerateStreamTokenActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'regenerateStreamToken' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

