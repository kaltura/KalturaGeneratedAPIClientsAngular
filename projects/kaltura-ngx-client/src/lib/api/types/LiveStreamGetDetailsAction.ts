
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamDetails } from './KalturaLiveStreamDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamGetDetailsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'liveStream' action 'getDetails'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         KalturaLiveStreamDetails
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamGetDetailsAction extends KalturaRequest<KalturaLiveStreamDetails> {

    id : string;

    constructor(data : LiveStreamGetDetailsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveStreamDetails', responseConstructor : KalturaLiveStreamDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'getDetails' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

