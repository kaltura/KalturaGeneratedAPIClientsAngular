
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaStatsKmcEvent } from './KalturaStatsKmcEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StatsKmcCollectActionArgs  extends KalturaRequestArgs {
    kmcEvent : KalturaStatsKmcEvent;
}

/**
 * Build request payload for service 'stats' action 'kmcCollect'.
 *
 * Usage: Will collect the kmcEvent sent form the KMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StatsKmcCollectAction extends KalturaRequest<void> {

    kmcEvent : KalturaStatsKmcEvent;

    constructor(data : StatsKmcCollectActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'stats' },
				action : { type : 'c', default : 'kmcCollect' },
				kmcEvent : { type : 'o', subTypeConstructor : KalturaStatsKmcEvent, subType : 'KalturaStatsKmcEvent' }
            }
        );
        return result;
    }
}

