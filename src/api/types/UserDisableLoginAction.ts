
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserDisableLoginActionArgs  extends KalturaRequestArgs {
    userId? : string;
	loginId? : string;
}

/**
 * Build request payload for service 'user' action 'disableLogin'.
 *
 * Usage: Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserDisableLoginAction extends KalturaRequest<KalturaUser> {

    userId : string;
	loginId : string;

    constructor(data? : UserDisableLoginActionArgs)
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
				action : { type : 'c', default : 'disableLogin' },
				userId : { type : 's' },
				loginId : { type : 's' }
            }
        );
        return result;
    }
}

