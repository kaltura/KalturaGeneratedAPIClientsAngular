
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuthentication } from './KalturaAuthentication';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserValidateHashKeyActionArgs  extends KalturaRequestArgs {
    hashKey : string;
}

/**
 * Build request payload for service 'user' action 'validateHashKey'.
 *
 * Usage: Validate hash key
 *
 * Server response type:         KalturaAuthentication
 * Server failure response type: KalturaAPIException
 */
export class UserValidateHashKeyAction extends KalturaRequest<KalturaAuthentication> {

    hashKey : string;

    constructor(data : UserValidateHashKeyActionArgs)
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
				action : { type : 'c', default : 'validateHashKey' },
				hashKey : { type : 's' }
            }
        );
        return result;
    }
}

