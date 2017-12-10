
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserUpdateActionArgs  extends KalturaRequestArgs {
    userId : string;
	user : KalturaUser;
}

/**
 * Build request payload for service 'user' action 'update'.
 *
 * Usage: Updates an existing user object.
 * You can also use this action to update the userId
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserUpdateAction extends KalturaRequest<KalturaUser> {

    userId : string;
	user : KalturaUser;

    constructor(data : UserUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				userId : { type : 's' },
				user : { type : 'o', subTypeConstructor : KalturaUser, subType : 'KalturaUser' }
            }
        );
        return result;
    }
}

