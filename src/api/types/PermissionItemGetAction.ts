
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemGetActionArgs  extends KalturaRequestArgs {
    permissionItemId : number;
}

/**
 * Build request payload for service 'permissionItem' action 'get'.
 *
 * Usage: Retrieves a permission item object using its ID
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionItemGetAction extends KalturaRequest<KalturaPermissionItem> {

    permissionItemId : number;

    constructor(data : PermissionItemGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermissionItem', responseConstructor : KalturaPermissionItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permissionitem' },
				action : { type : 'c', default : 'get' },
				permissionItemId : { type : 'n' }
            }
        );
        return result;
    }
}

