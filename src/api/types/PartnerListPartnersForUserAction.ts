
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListPartnersForUserActionArgs  extends KalturaRequestArgs {
    partnerFilter? : KalturaPartnerFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'partner' action 'listPartnersForUser'.
 *
 * Usage: Retrieve a list of partner objects which the current user is allowed to access
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerListPartnersForUserAction extends KalturaRequest<KalturaPartnerListResponse> {

    partnerFilter : KalturaPartnerFilter;
	pager : KalturaFilterPager;

    constructor(data? : PartnerListPartnersForUserActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerListResponse', responseConstructor : KalturaPartnerListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'listPartnersForUser' },
				partnerFilter : { type : 'o', subTypeConstructor : KalturaPartnerFilter, subType : 'KalturaPartnerFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

