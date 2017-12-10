
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaLiveStatsEvent } from './KalturaLiveStatsEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveStatsCollectActionArgs  extends KalturaRequestArgs {
    event : KalturaLiveStatsEvent;
}

/**
 * Build request payload for service 'liveStats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveStatsCollectAction extends KalturaRequest<boolean> {

    event : KalturaLiveStatsEvent;

    constructor(data : LiveStatsCollectActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livestats' },
				action : { type : 'c', default : 'collect' },
				event : { type : 'o', subTypeConstructor : KalturaLiveStatsEvent, subType : 'KalturaLiveStatsEvent' }
            }
        );
        return result;
    }
}

