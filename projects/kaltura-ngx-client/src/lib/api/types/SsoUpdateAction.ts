
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSso } from './KalturaSso';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoUpdateActionArgs  extends KalturaRequestArgs {
    ssoId : number;
	sso : KalturaSso;
}

/**
 * Build request payload for service 'sso' action 'update'.
 *
 * Usage: Update sso by ID
 *
 * Server response type:         KalturaSso
 * Server failure response type: KalturaAPIException
 */
export class SsoUpdateAction extends KalturaRequest<KalturaSso> {

    ssoId : number;
	sso : KalturaSso;

    constructor(data : SsoUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				ssoId : { type : 'n' },
				sso : { type : 'o', subTypeConstructor : KalturaSso, subType : 'KalturaSso' }
            }
        );
        return result;
    }
}

