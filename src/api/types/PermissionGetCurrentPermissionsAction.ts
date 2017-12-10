
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionGetCurrentPermissionsActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'permission' action 'getCurrentPermissions'.
 *
 * Usage: Retrieves a list of permissions that apply to the current KS
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionGetCurrentPermissionsAction extends KalturaRequest<string> {

    

    constructor(data? : PermissionGetCurrentPermissionsActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'getCurrentPermissions' }
            }
        );
        return result;
    }
}

