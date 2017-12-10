
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionUpdateActionArgs  extends KalturaRequestArgs {
    permissionName : string;
	permission : KalturaPermission;
}

/**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Updates an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionUpdateAction extends KalturaRequest<KalturaPermission> {

    permissionName : string;
	permission : KalturaPermission;

    constructor(data : PermissionUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				permissionName : { type : 's' },
				permission : { type : 'o', subTypeConstructor : KalturaPermission, subType : 'KalturaPermission' }
            }
        );
        return result;
    }
}

