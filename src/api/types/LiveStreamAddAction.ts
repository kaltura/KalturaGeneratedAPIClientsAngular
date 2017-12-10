
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaSourceType } from './KalturaSourceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAddActionArgs  extends KalturaRequestArgs {
    liveStreamEntry : KalturaLiveStreamEntry;
	sourceType? : KalturaSourceType;
}

/**
 * Build request payload for service 'liveStream' action 'add'.
 *
 * Usage: Adds new live stream entry.
 * The entry will be queued for provision
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamAddAction extends KalturaRequest<KalturaLiveStreamEntry> {

    liveStreamEntry : KalturaLiveStreamEntry;
	sourceType : KalturaSourceType;

    constructor(data : LiveStreamAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				liveStreamEntry : { type : 'o', subTypeConstructor : KalturaLiveStreamEntry, subType : 'KalturaLiveStreamEntry' },
				sourceType : { type : 'es', subTypeConstructor : KalturaSourceType, subType : 'KalturaSourceType' }
            }
        );
        return result;
    }
}

