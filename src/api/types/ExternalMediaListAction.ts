
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryListResponse } from './KalturaExternalMediaEntryListResponse';

import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaExternalMediaEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'externalMedia' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaExternalMediaEntryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalMediaListAction extends KalturaRequest<KalturaExternalMediaEntryListResponse> {

    filter : KalturaExternalMediaEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : ExternalMediaListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExternalMediaEntryListResponse', responseConstructor : KalturaExternalMediaEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalmedia_externalmedia' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaExternalMediaEntryFilter, subType : 'KalturaExternalMediaEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

