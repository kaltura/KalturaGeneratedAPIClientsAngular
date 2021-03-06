
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';

import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelUnregisterMediaServerActionArgs  extends KalturaRequestArgs {
    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;
}

/**
 * Build request payload for service 'liveChannel' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveChannelUnregisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {

    entryId : string;
	hostname : string;
	mediaServerIndex : KalturaEntryServerNodeType;

    constructor(data : LiveChannelUnregisterMediaServerActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveEntry', responseConstructor : KalturaLiveEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'unregisterMediaServer' },
				entryId : { type : 's' },
				hostname : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' }
            }
        );
        return result;
    }
}

