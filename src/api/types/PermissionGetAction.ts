
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionGetActionArgs  extends KalturaRequestArgs {
    permissionName : string;
}

/**
 * Build request payload for service 'permission' action 'get'.
 *
 * Usage: Retrieves a permission object using its ID
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionGetAction extends KalturaRequest<KalturaPermission> {

    permissionName : string;

    constructor(data : PermissionGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermission', responseConstructor : KalturaPermission  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'get' },
				permissionName : { type : 's' }
            }
        );
        return result;
    }
}

