
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleListResponse } from './KalturaUserRoleListResponse';

import { KalturaUserRoleFilter } from './KalturaUserRoleFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserRoleFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserRoleListAction extends KalturaRequest<KalturaUserRoleListResponse> {

    filter : KalturaUserRoleFilter;
	pager : KalturaFilterPager;

    constructor(data? : UserRoleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRoleListResponse', responseConstructor : KalturaUserRoleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserRoleFilter, subType : 'KalturaUserRoleFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

