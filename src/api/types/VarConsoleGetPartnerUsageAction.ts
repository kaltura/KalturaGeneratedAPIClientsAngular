
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerUsageListResponse } from './KalturaPartnerUsageListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface VarConsoleGetPartnerUsageActionArgs  extends KalturaRequestArgs {
    partnerFilter? : KalturaPartnerFilter;
	usageFilter? : KalturaReportInputFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'varConsole' action 'getPartnerUsage'.
 *
 * Usage: Function which calulates partner usage of a group of a VAR's sub-publishers
 *
 * Server response type:         KalturaPartnerUsageListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class VarConsoleGetPartnerUsageAction extends KalturaRequest<KalturaPartnerUsageListResponse> {

    partnerFilter : KalturaPartnerFilter;
	usageFilter : KalturaReportInputFilter;
	pager : KalturaFilterPager;

    constructor(data? : VarConsoleGetPartnerUsageActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerUsageListResponse', responseConstructor : KalturaPartnerUsageListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'varconsole_varconsole' },
				action : { type : 'c', default : 'getPartnerUsage' },
				partnerFilter : { type : 'o', subTypeConstructor : KalturaPartnerFilter, subType : 'KalturaPartnerFilter' },
				usageFilter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

