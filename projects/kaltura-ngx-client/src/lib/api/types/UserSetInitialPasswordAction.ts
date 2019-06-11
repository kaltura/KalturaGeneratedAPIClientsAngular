
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuthentication } from './KalturaAuthentication';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSetInitialPasswordActionArgs  extends KalturaRequestArgs {
    hashKey : string;
	newPassword : string;
}

/**
 * Build request payload for service 'user' action 'setInitialPassword'.
 *
 * Usage: Set initial user password
 *
 * Server response type:         KalturaAuthentication
 * Server failure response type: KalturaAPIException
 */
export class UserSetInitialPasswordAction extends KalturaRequest<KalturaAuthentication> {

    hashKey : string;
	newPassword : string;

    constructor(data : UserSetInitialPasswordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAuthentication', responseConstructor : KalturaAuthentication  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'setInitialPassword' },
				hashKey : { type : 's' },
				newPassword : { type : 's' }
            }
        );
        return result;
    }
}

