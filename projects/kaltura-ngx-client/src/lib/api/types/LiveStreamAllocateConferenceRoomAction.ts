
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRoomDetails } from './KalturaRoomDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamAllocateConferenceRoomActionArgs  extends KalturaRequestArgs {
    entryId : string;
	env? : string;
}

/**
 * Build request payload for service 'liveStream' action 'allocateConferenceRoom'.
 *
 * Usage: Allocates a conference room or returns ones that has already been allocated
 *
 * Server response type:         KalturaRoomDetails
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamAllocateConferenceRoomAction extends KalturaRequest<KalturaRoomDetails> {

    entryId : string;
	env : string;

    constructor(data : LiveStreamAllocateConferenceRoomActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRoomDetails', responseConstructor : KalturaRoomDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'allocateConferenceRoom' },
				entryId : { type : 's' },
				env : { type : 's' }
            }
        );
        return result;
    }
}

