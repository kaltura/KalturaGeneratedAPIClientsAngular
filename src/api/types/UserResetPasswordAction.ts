
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserResetPasswordActionArgs  extends KalturaRequestArgs {
    email : string;
}

/**
 * Build request payload for service 'user' action 'resetPassword'.
 *
 * Usage: Reset user's password and send the user an email to generate a new one
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserResetPasswordAction extends KalturaRequest<void> {

    email : string;

    constructor(data : UserResetPasswordActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'resetPassword' },
				email : { type : 's' }
            }
        );
        return result;
    }
}

