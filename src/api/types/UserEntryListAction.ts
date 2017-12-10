
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryListResponse } from './KalturaUserEntryListResponse';

import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userEntry' action 'list'.
 *
 * 
 *
 * Server response type:         KalturaUserEntryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserEntryListAction extends KalturaRequest<KalturaUserEntryListResponse> {

    filter : KalturaUserEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : UserEntryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserEntryListResponse', responseConstructor : KalturaUserEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userentry' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserEntryFilter, subType : 'KalturaUserEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

