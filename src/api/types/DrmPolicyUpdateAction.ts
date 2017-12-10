
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyUpdateActionArgs  extends KalturaRequestArgs {
    drmPolicyId : number;
	drmPolicy : KalturaDrmPolicy;
}

/**
 * Build request payload for service 'drmPolicy' action 'update'.
 *
 * Usage: Update an existing KalturaDrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmPolicyUpdateAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicyId : number;
	drmPolicy : KalturaDrmPolicy;

    constructor(data : DrmPolicyUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmPolicy', responseConstructor : KalturaDrmPolicy  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drm_drmpolicy' },
				action : { type : 'c', default : 'update' },
				drmPolicyId : { type : 'n' },
				drmPolicy : { type : 'o', subTypeConstructor : KalturaDrmPolicy, subType : 'KalturaDrmPolicy' }
            }
        );
        return result;
    }
}

