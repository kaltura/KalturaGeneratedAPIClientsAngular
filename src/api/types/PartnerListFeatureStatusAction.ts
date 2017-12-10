
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeatureStatusListResponse } from './KalturaFeatureStatusListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListFeatureStatusActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partner' action 'listFeatureStatus'.
 *
 * Usage: List partner's current processes' statuses
 *
 * Server response type:         KalturaFeatureStatusListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerListFeatureStatusAction extends KalturaRequest<KalturaFeatureStatusListResponse> {

    

    constructor(data? : PartnerListFeatureStatusActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFeatureStatusListResponse', responseConstructor : KalturaFeatureStatusListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'listFeatureStatus' }
            }
        );
        return result;
    }
}

