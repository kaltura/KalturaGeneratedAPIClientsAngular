
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'appToken' action 'get'.
 *
 * Usage: Get application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppTokenGetAction extends KalturaRequest<KalturaAppToken> {

    id : string;

    constructor(data : AppTokenGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAppToken', responseConstructor : KalturaAppToken  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'apptoken' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

