
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerStatistics } from './KalturaPartnerStatistics';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerGetStatisticsActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partner' action 'getStatistics'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 *
 * Server response type:         KalturaPartnerStatistics
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerGetStatisticsAction extends KalturaRequest<KalturaPartnerStatistics> {

    

    constructor(data? : PartnerGetStatisticsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerStatistics', responseConstructor : KalturaPartnerStatistics  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'getStatistics' }
            }
        );
        return result;
    }
}

