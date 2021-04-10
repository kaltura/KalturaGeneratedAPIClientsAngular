
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSso } from './KalturaSso';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SsoAddActionArgs  extends KalturaRequestArgs {
    sso : KalturaSso;
}

/**
 * Build request payload for service 'sso' action 'add'.
 *
 * Usage: Adds a new sso configuration
 *
 * Server response type:         KalturaSso
 * Server failure response type: KalturaAPIException
 */
export class SsoAddAction extends KalturaRequest<KalturaSso> {

    sso : KalturaSso;

    constructor(data : SsoAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				sso : { type : 'o', subTypeConstructor : KalturaSso, subType : 'KalturaSso' }
            }
        );
        return result;
    }
}

