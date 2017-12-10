
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelIsLiveActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'liveChannel' action 'isLive'.
 *
 * Usage: Delivering the status of a live channel (on-air/offline)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelIsLiveAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : LiveChannelIsLiveActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannel' },
				action : { type : 'c', default : 'isLive' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

