
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionListResponse } from './KalturaPermissionListResponse';

import { KalturaPermissionFilter } from './KalturaPermissionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPermissionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'permission' action 'list'.
 *
 * Usage: Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them
 *
 * Server response type:         KalturaPermissionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionListAction extends KalturaRequest<KalturaPermissionListResponse> {

    filter : KalturaPermissionFilter;
	pager : KalturaFilterPager;

    constructor(data? : PermissionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermissionListResponse', responseConstructor : KalturaPermissionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPermissionFilter, subType : 'KalturaPermissionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

