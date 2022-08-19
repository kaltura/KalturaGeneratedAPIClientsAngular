
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginDataResetPasswordActionArgs  extends KalturaRequestArgs {
    loginDataId : string;
	newPassword : string;
}

/**
 * Build request payload for service 'user' action 'loginDataResetPassword'.
 *
 * Usage: Resets user login password
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export class UserLoginDataResetPasswordAction extends KalturaRequest<KalturaUser> {

    loginDataId : string;
	newPassword : string;

    constructor(data : UserLoginDataResetPasswordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUser', responseConstructor : KalturaUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'loginDataResetPassword' },
				loginDataId : { type : 's' },
				newPassword : { type : 's' }
            }
        );
        return result;
    }
}

