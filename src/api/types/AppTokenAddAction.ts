
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppToken } from './KalturaAppToken';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenAddActionArgs  extends KalturaRequestArgs {
    appToken : KalturaAppToken;
}

/**
 * Build request payload for service 'appToken' action 'add'.
 *
 * Usage: Add new application authentication token
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppTokenAddAction extends KalturaRequest<KalturaAppToken> {

    appToken : KalturaAppToken;

    constructor(data : AppTokenAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				appToken : { type : 'o', subTypeConstructor : KalturaAppToken, subType : 'KalturaAppToken' }
            }
        );
        return result;
    }
}

