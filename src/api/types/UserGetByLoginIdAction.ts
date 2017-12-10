
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserGetByLoginIdActionArgs  extends KalturaRequestArgs {
    loginId : string;
}

/**
 * Build request payload for service 'user' action 'getByLoginId'.
 *
 * Usage: Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserGetByLoginIdAction extends KalturaRequest<KalturaUser> {

    loginId : string;

    constructor(data : UserGetByLoginIdActionArgs)
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
				action : { type : 'c', default : 'getByLoginId' },
				loginId : { type : 's' }
            }
        );
        return result;
    }
}

