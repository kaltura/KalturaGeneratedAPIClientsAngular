
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSso } from './KalturaSso';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoGetActionArgs  extends KalturaRequestArgs {
    ssoId : number;
}

/**
 * Build request payload for service 'sso' action 'get'.
 *
 * Usage: Retrieves sso object
 *
 * Server response type:         KalturaSso
 * Server failure response type: KalturaAPIException
 */
export class SsoGetAction extends KalturaRequest<KalturaSso> {

    ssoId : number;

    constructor(data : SsoGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSso', responseConstructor : KalturaSso  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'sso_sso' },
				action : { type : 'c', default : 'get' },
				ssoId : { type : 'n' }
            }
        );
        return result;
    }
}

