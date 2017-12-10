
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemDeleteActionArgs  extends KalturaRequestArgs {
    permissionItemId : number;
}

/**
 * Build request payload for service 'permissionItem' action 'delete'.
 *
 * Usage: Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionItemDeleteAction extends KalturaRequest<KalturaPermissionItem> {

    permissionItemId : number;

    constructor(data : PermissionItemDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				permissionItemId : { type : 'n' }
            }
        );
        return result;
    }
}

