
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
}

/**
 * Build request payload for service 'cuePoint' action 'count'.
 *
 * Usage: count cue point objects by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointCountAction extends KalturaRequest<number> {

    filter : KalturaCuePointFilter;

    constructor(data? : CuePointCountActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'count' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' }
            }
        );
        return result;
    }
}

