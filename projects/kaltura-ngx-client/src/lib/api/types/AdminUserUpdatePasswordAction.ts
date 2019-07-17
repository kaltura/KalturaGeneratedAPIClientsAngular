
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdminUser } from './KalturaAdminUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AdminUserUpdatePasswordActionArgs  extends KalturaRequestArgs {
    email : string;
	password : string;
	newEmail? : string;
	newPassword? : string;
	otp? : string;
}

/**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
export class AdminUserUpdatePasswordAction extends KalturaRequest<KalturaAdminUser> {

    email : string;
	password : string;
	newEmail : string;
	newPassword : string;
	otp : string;

    constructor(data : AdminUserUpdatePasswordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAdminUser', responseConstructor : KalturaAdminUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'adminuser' },
				action : { type : 'c', default : 'updatePassword' },
				email : { type : 's' },
				password : { type : 's' },
				newEmail : { type : 's' },
				newPassword : { type : 's' },
				otp : { type : 's' }
            }
        );
        return result;
    }
}

