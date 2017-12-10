
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileListResponse } from './KalturaDrmProfileListResponse';

import { KalturaDrmProfileFilter } from './KalturaDrmProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDrmProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'drmProfile' action 'list'.
 *
 * Usage: List KalturaDrmProfile objects
 *
 * Server response type:         KalturaDrmProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmProfileListAction extends KalturaRequest<KalturaDrmProfileListResponse> {

    filter : KalturaDrmProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DrmProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfileListResponse', responseConstructor : KalturaDrmProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDrmProfileFilter, subType : 'KalturaDrmProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

