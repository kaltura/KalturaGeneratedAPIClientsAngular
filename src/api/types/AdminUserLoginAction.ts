
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AdminUserLoginActionArgs  extends KalturaRequestArgs {
    email : string;
	password : string;
	partnerId? : number;
}

/**
 * Build request payload for service 'adminUser' action 'login'.
 *
 * Usage: Get an admin session using admin email and password (Used for login to the KMC application)
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AdminUserLoginAction extends KalturaRequest<string> {

    email : string;
	password : string;
	partnerId : number;

    constructor(data : AdminUserLoginActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'adminuser' },
				action : { type : 'c', default : 'login' },
				email : { type : 's' },
				password : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

