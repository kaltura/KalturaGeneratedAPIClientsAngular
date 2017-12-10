
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';

import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'cuePoint' action 'list'.
 *
 * Usage: List cue point objects by filter and pager
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointListAction extends KalturaRequest<KalturaCuePointListResponse> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : CuePointListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePointListResponse', responseConstructor : KalturaCuePointListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCuePointFilter, subType : 'KalturaCuePointFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

