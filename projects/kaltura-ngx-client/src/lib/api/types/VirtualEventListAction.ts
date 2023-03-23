
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirtualEventListResponse } from './KalturaVirtualEventListResponse';

import { KalturaVirtualEventFilter } from './KalturaVirtualEventFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VirtualEventListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaVirtualEventFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'virtualEvent' action 'list'.
 *
 * Usage: List virtual events
 *
 * Server response type:         KalturaVirtualEventListResponse
 * Server failure response type: KalturaAPIException
 */
export class VirtualEventListAction extends KalturaRequest<KalturaVirtualEventListResponse> {

    filter : KalturaVirtualEventFilter;
	pager : KalturaFilterPager;

    constructor(data? : VirtualEventListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVirtualEventListResponse', responseConstructor : KalturaVirtualEventListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'virtualevent_virtualevent' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaVirtualEventFilter, subType : 'KalturaVirtualEventFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

