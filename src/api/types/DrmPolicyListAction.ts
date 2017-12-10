
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicyListResponse } from './KalturaDrmPolicyListResponse';

import { KalturaDrmPolicyFilter } from './KalturaDrmPolicyFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDrmPolicyFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'drmPolicy' action 'list'.
 *
 * Usage: List KalturaDrmPolicy objects
 *
 * Server response type:         KalturaDrmPolicyListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmPolicyListAction extends KalturaRequest<KalturaDrmPolicyListResponse> {

    filter : KalturaDrmPolicyFilter;
	pager : KalturaFilterPager;

    constructor(data? : DrmPolicyListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmPolicyListResponse', responseConstructor : KalturaDrmPolicyListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmpolicy' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDrmPolicyFilter, subType : 'KalturaDrmPolicyFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

