
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';

import { KalturaBeaconFilter } from './KalturaBeaconFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BeaconListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBeaconFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'beacon' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BeaconListAction extends KalturaRequest<KalturaBeaconListResponse> {

    filter : KalturaBeaconFilter;
	pager : KalturaFilterPager;

    constructor(data? : BeaconListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBeaconListResponse', responseConstructor : KalturaBeaconListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'beacon_beacon' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBeaconFilter, subType : 'KalturaBeaconFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

