
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionResponse } from './KalturaSessionResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginByKsActionArgs  extends KalturaRequestArgs {
    requestedPartnerId : number;
}

/**
 * Build request payload for service 'user' action 'loginByKs'.
 *
 * Usage: Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches
 *
 * Server response type:         KalturaSessionResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserLoginByKsAction extends KalturaRequest<KalturaSessionResponse> {

    requestedPartnerId : number;

    constructor(data : UserLoginByKsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionResponse', responseConstructor : KalturaSessionResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'loginByKs' },
				requestedPartnerId : { type : 'n' }
            }
        );
        return result;
    }
}

