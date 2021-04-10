
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoLoginActionArgs  extends KalturaRequestArgs {
    userId : string;
	applicationType : string;
	partnerId? : number;
}

/**
 * Build request payload for service 'sso' action 'login'.
 *
 * Usage: Login with SSO, getting redirect url according to application type and partner Id
 * or according to application type and domain
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class SsoLoginAction extends KalturaRequest<string> {

    userId : string;
	applicationType : string;
	partnerId : number;

    constructor(data : SsoLoginActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sso_sso' },
				action : { type : 'c', default : 'login' },
				userId : { type : 's' },
				applicationType : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

