
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginByLoginIdActionArgs  extends KalturaRequestArgs {
    loginId : string;
	password : string;
	partnerId? : number;
	expiry? : number;
	privileges? : string;
	otp? : string;
}

/**
 * Build request payload for service 'user' action 'loginByLoginId'.
 *
 * Usage: Logs a user into a partner account with a user login ID and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserLoginByLoginIdAction extends KalturaRequest<string> {

    loginId : string;
	password : string;
	partnerId : number;
	expiry : number;
	privileges : string;
	otp : string;

    constructor(data : UserLoginByLoginIdActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.expiry === 'undefined') this.expiry = 86400;
		if (typeof this.privileges === 'undefined') this.privileges = "*";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'loginByLoginId' },
				loginId : { type : 's' },
				password : { type : 's' },
				partnerId : { type : 'n' },
				expiry : { type : 'n' },
				privileges : { type : 's' },
				otp : { type : 's' }
            }
        );
        return result;
    }
}

