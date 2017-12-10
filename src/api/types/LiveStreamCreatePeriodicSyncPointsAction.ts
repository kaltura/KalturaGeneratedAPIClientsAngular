
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStreamCreatePeriodicSyncPointsActionArgs  extends KalturaRequestArgs {
    entryId : string;
	interval : number;
	duration : number;
}

/**
 * Build request payload for service 'liveStream' action 'createPeriodicSyncPoints'.
 *
 * Usage: Creates perioding metadata sync-point events on a live stream
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStreamCreatePeriodicSyncPointsAction extends KalturaRequest<void> {

    entryId : string;
	interval : number;
	duration : number;

    constructor(data : LiveStreamCreatePeriodicSyncPointsActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestream' },
				action : { type : 'c', default : 'createPeriodicSyncPoints' },
				entryId : { type : 's' },
				interval : { type : 'n' },
				duration : { type : 'n' }
            }
        );
        return result;
    }
}

