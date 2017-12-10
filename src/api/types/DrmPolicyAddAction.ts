
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyAddActionArgs  extends KalturaRequestArgs {
    drmPolicy : KalturaDrmPolicy;
}

/**
 * Build request payload for service 'drmPolicy' action 'add'.
 *
 * Usage: Allows you to add a new DrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmPolicyAddAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicy : KalturaDrmPolicy;

    constructor(data : DrmPolicyAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				drmPolicy : { type : 'o', subTypeConstructor : KalturaDrmPolicy, subType : 'KalturaDrmPolicy' }
            }
        );
        return result;
    }
}

