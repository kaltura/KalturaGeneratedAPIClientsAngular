
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserUpdateLoginDataActionArgs  extends KalturaRequestArgs {
    oldLoginId : string;
	password : string;
	newLoginId? : string;
	newPassword? : string;
	newFirstName? : string;
	newLastName? : string;
}

/**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserUpdateLoginDataAction extends KalturaRequest<void> {

    oldLoginId : string;
	password : string;
	newLoginId : string;
	newPassword : string;
	newFirstName : string;
	newLastName : string;

    constructor(data : UserUpdateLoginDataActionArgs)
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
				action : { type : 'c', default : 'updateLoginData' },
				oldLoginId : { type : 's' },
				password : { type : 's' },
				newLoginId : { type : 's' },
				newPassword : { type : 's' },
				newFirstName : { type : 's' },
				newLastName : { type : 's' }
            }
        );
        return result;
    }
}

