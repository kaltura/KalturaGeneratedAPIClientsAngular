
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	liveChannel : KalturaLiveChannel;
}

/**
 * Build request payload for service 'liveChannel' action 'update'.
 *
 * Usage: Update live channel. Only the properties that were set will be updated
 *
 * Server response type:         KalturaLiveChannel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelUpdateAction extends KalturaRequest<KalturaLiveChannel> {

    id : string;
	liveChannel : KalturaLiveChannel;

    constructor(data : LiveChannelUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannel', responseConstructor : KalturaLiveChannel  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				liveChannel : { type : 'o', subTypeConstructor : KalturaLiveChannel, subType : 'KalturaLiveChannel' }
            }
        );
        return result;
    }
}

