
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmPolicyDeleteActionArgs  extends KalturaRequestArgs {
    drmPolicyId : number;
}

/**
 * Build request payload for service 'drmPolicy' action 'delete'.
 *
 * Usage: Mark the KalturaDrmPolicy object as deleted
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmPolicyDeleteAction extends KalturaRequest<KalturaDrmPolicy> {

    drmPolicyId : number;

    constructor(data : DrmPolicyDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				drmPolicyId : { type : 'n' }
            }
        );
        return result;
    }
}

