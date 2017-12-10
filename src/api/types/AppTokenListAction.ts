
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenListResponse } from './KalturaAppTokenListResponse';

import { KalturaAppTokenFilter } from './KalturaAppTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAppTokenFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'appToken' action 'list'.
 *
 * Usage: List application authentication tokens by filter and pager
 *
 * Server response type:         KalturaAppTokenListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppTokenListAction extends KalturaRequest<KalturaAppTokenListResponse> {

    filter : KalturaAppTokenFilter;
	pager : KalturaFilterPager;

    constructor(data? : AppTokenListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAppTokenListResponse', responseConstructor : KalturaAppTokenListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'apptoken' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAppTokenFilter, subType : 'KalturaAppTokenFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

