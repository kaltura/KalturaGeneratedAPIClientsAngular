
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	appToken : KalturaAppToken;
}

/**
 * Build request payload for service 'appToken' action 'update'.
 *
 * Usage: Update application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppTokenUpdateAction extends KalturaRequest<KalturaAppToken> {

    id : string;
	appToken : KalturaAppToken;

    constructor(data : AppTokenUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				appToken : { type : 'o', subTypeConstructor : KalturaAppToken, subType : 'KalturaAppToken' }
            }
        );
        return result;
    }
}

