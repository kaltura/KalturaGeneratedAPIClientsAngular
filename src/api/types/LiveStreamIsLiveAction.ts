
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamIsLiveActionArgs  extends KalturaRequestArgs {
    id : string;
	protocol : KalturaPlaybackProtocol;
}

/**
 * Build request payload for service 'liveStream' action 'isLive'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamIsLiveAction extends KalturaRequest<boolean> {

    id : string;
	protocol : KalturaPlaybackProtocol;

    constructor(data : LiveStreamIsLiveActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'isLive' },
				id : { type : 's' },
				protocol : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' }
            }
        );
        return result;
    }
}

