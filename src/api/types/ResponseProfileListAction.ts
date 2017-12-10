
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileListResponse } from './KalturaResponseProfileListResponse';

import { KalturaResponseProfileFilter } from './KalturaResponseProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaResponseProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'responseProfile' action 'list'.
 *
 * Usage: List response profiles by filter and pager
 *
 * Server response type:         KalturaResponseProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ResponseProfileListAction extends KalturaRequest<KalturaResponseProfileListResponse> {

    filter : KalturaResponseProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ResponseProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResponseProfileListResponse', responseConstructor : KalturaResponseProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'responseprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaResponseProfileFilter, subType : 'KalturaResponseProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

