
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamRegisterMediaServerActionArgs  extends KalturaRequestArgs {
    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	applicationName? : string;
	liveEntryStatus? : KalturaEntryServerNodeStatus;
	shouldCreateRecordedEntry? : boolean;
}

/**
 * Build request payload for service 'liveStream' action 'registerMediaServer'.
 *
 * Usage: Register media server to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamRegisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	applicationName : string;
	liveEntryStatus : KalturaEntryServerNodeStatus;
	shouldCreateRecordedEntry : boolean;

    constructor(data : LiveStreamRegisterMediaServerActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
        if (typeof this.liveEntryStatus === 'undefined') this.liveEntryStatus = 1;
		if (typeof this.shouldCreateRecordedEntry === 'undefined') this.shouldCreateRecordedEntry = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'registerMediaServer' },
				entryId : { type : 's' },
				hostname : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				applicationName : { type : 's' },
				liveEntryStatus : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				shouldCreateRecordedEntry : { type : 'b' }
            }
        );
        return result;
    }
}

