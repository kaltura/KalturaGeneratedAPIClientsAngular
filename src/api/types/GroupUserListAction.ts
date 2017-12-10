
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserListResponse } from './KalturaGroupUserListResponse';

import { KalturaGroupUserFilter } from './KalturaGroupUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGroupUserFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'groupUser' action 'list'.
 *
 * Usage: List all GroupUsers
 *
 * Server response type:         KalturaGroupUserListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GroupUserListAction extends KalturaRequest<KalturaGroupUserListResponse> {

    filter : KalturaGroupUserFilter;
	pager : KalturaFilterPager;

    constructor(data? : GroupUserListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGroupUserListResponse', responseConstructor : KalturaGroupUserListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'groupuser' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaGroupUserFilter, subType : 'KalturaGroupUserFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

