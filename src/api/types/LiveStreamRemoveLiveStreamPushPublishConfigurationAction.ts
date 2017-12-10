
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs  extends KalturaRequestArgs {
    entryId : string;
	protocol : KalturaPlaybackProtocol;
}

/**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamRemoveLiveStreamPushPublishConfigurationAction extends KalturaRequest<KalturaLiveStreamEntry> {

    entryId : string;
	protocol : KalturaPlaybackProtocol;

    constructor(data : LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamEntry', responseConstructor : KalturaLiveStreamEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'removeLiveStreamPushPublishConfiguration' },
				entryId : { type : 's' },
				protocol : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' }
            }
        );
        return result;
    }
}

