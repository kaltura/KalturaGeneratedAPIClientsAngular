
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';

import { KalturaBeaconEnhanceFilter } from './KalturaBeaconEnhanceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BeaconEnhanceSearchActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBeaconEnhanceFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'beacon' action 'enhanceSearch'.
 *
 * 
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BeaconEnhanceSearchAction extends KalturaRequest<KalturaBeaconListResponse> {

    filter : KalturaBeaconEnhanceFilter;
	pager : KalturaFilterPager;

    constructor(data? : BeaconEnhanceSearchActionArgs)
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
				action : { type : 'c', default : 'enhanceSearch' },
				filter : { type : 'o', subTypeConstructor : KalturaBeaconEnhanceFilter, subType : 'KalturaBeaconEnhanceFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

