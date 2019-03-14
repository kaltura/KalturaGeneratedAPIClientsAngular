
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupListResponse } from './KalturaGroupListResponse';

import { KalturaGroupFilter } from './KalturaGroupFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGroupFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'group' action 'list'.
 *
 * Usage: Lists group  objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaGroupListResponse
 * Server failure response type: KalturaAPIException
 */
export class GroupListAction extends KalturaRequest<KalturaGroupListResponse> {

    filter : KalturaGroupFilter;
	pager : KalturaFilterPager;

    constructor(data? : GroupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGroupListResponse', responseConstructor : KalturaGroupListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'group_group' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaGroupFilter, subType : 'KalturaGroupFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

