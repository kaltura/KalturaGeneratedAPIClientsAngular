
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistributionListResponse } from './KalturaEntryDistributionListResponse';

import { KalturaEntryDistributionFilter } from './KalturaEntryDistributionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEntryDistributionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'entryDistribution' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaEntryDistributionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntryDistributionListAction extends KalturaRequest<KalturaEntryDistributionListResponse> {

    filter : KalturaEntryDistributionFilter;
	pager : KalturaFilterPager;

    constructor(data? : EntryDistributionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryDistributionListResponse', responseConstructor : KalturaEntryDistributionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaEntryDistributionFilter, subType : 'KalturaEntryDistributionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

