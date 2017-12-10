
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemAddActionArgs  extends KalturaRequestArgs {
    permissionItem : KalturaPermissionItem;
}

/**
 * Build request payload for service 'permissionItem' action 'add'.
 *
 * Usage: Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionItemAddAction extends KalturaRequest<KalturaPermissionItem> {

    permissionItem : KalturaPermissionItem;

    constructor(data : PermissionItemAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				permissionItem : { type : 'o', subTypeConstructor : KalturaPermissionItem, subType : 'KalturaPermissionItem' }
            }
        );
        return result;
    }
}

