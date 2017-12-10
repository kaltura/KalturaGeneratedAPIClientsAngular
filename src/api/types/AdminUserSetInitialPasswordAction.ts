
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AdminUserSetInitialPasswordActionArgs  extends KalturaRequestArgs {
    hashKey : string;
	newPassword : string;
}

/**
 * Build request payload for service 'adminUser' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AdminUserSetInitialPasswordAction extends KalturaRequest<void> {

    hashKey : string;
	newPassword : string;

    constructor(data : AdminUserSetInitialPasswordActionArgs)
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
				action : { type : 'c', default : 'setInitialPassword' },
				hashKey : { type : 's' },
				newPassword : { type : 's' }
            }
        );
        return result;
    }
}

