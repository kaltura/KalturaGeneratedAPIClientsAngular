
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionAddActionArgs  extends KalturaRequestArgs {
    permission : KalturaPermission;
}

/**
 * Build request payload for service 'permission' action 'add'.
 *
 * Usage: Adds a new permission object to the account
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionAddAction extends KalturaRequest<KalturaPermission> {

    permission : KalturaPermission;

    constructor(data : PermissionAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				permission : { type : 'o', subTypeConstructor : KalturaPermission, subType : 'KalturaPermission' }
            }
        );
        return result;
    }
}

