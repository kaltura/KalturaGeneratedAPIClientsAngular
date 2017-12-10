
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleUpdateActionArgs  extends KalturaRequestArgs {
    userRoleId : number;
	userRole : KalturaUserRole;
}

/**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Updates an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserRoleUpdateAction extends KalturaRequest<KalturaUserRole> {

    userRoleId : number;
	userRole : KalturaUserRole;

    constructor(data : UserRoleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'update' },
				userRoleId : { type : 'n' },
				userRole : { type : 'o', subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

