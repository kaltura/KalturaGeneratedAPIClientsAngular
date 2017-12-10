
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemListResponse } from './KalturaPermissionItemListResponse';

import { KalturaPermissionItemFilter } from './KalturaPermissionItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPermissionItemFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'permissionItem' action 'list'.
 *
 * Usage: Lists permission item objects that are associated with an account
 *
 * Server response type:         KalturaPermissionItemListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionItemListAction extends KalturaRequest<KalturaPermissionItemListResponse> {

    filter : KalturaPermissionItemFilter;
	pager : KalturaFilterPager;

    constructor(data? : PermissionItemListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermissionItemListResponse', responseConstructor : KalturaPermissionItemListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permissionitem' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPermissionItemFilter, subType : 'KalturaPermissionItemFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

