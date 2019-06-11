
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuthentication } from './KalturaAuthentication';

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
 * Server response type:         KalturaAuthentication
 * Server failure response type: KalturaAPIException
 */
export class AdminUserSetInitialPasswordAction extends KalturaRequest<KalturaAuthentication> {

    hashKey : string;
	newPassword : string;

    constructor(data : AdminUserSetInitialPasswordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAuthentication', responseConstructor : KalturaAuthentication  });
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

