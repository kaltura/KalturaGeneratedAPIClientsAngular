
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AdminUserResetPasswordActionArgs  extends KalturaRequestArgs {
    email : string;
}

/**
 * Build request payload for service 'adminUser' action 'resetPassword'.
 *
 * Usage: Reset admin user password and send it to the users email address
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AdminUserResetPasswordAction extends KalturaRequest<void> {

    email : string;

    constructor(data : AdminUserResetPasswordActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'adminuser' },
				action : { type : 'c', default : 'resetPassword' },
				email : { type : 's' }
            }
        );
        return result;
    }
}

