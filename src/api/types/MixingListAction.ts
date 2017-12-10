
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixListResponse } from './KalturaMixListResponse';

import { KalturaMixEntryFilter } from './KalturaMixEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMixEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'mixing' action 'list'.
 *
 * Usage: List entries by filter with paging support.
 * Return parameter is an array of mix entries
 *
 * Server response type:         KalturaMixListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingListAction extends KalturaRequest<KalturaMixListResponse> {

    filter : KalturaMixEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : MixingListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMixListResponse', responseConstructor : KalturaMixListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMixEntryFilter, subType : 'KalturaMixEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

