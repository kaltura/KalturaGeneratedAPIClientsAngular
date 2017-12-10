
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileListResponse } from './KalturaConversionProfileListResponse';

import { KalturaConversionProfileFilter } from './KalturaConversionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaConversionProfileFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'conversionProfile' action 'list'.
 *
 * Usage: List Conversion Profiles by filter with paging support
 *
 * Server response type:         KalturaConversionProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConversionProfileListAction extends KalturaRequest<KalturaConversionProfileListResponse> {

    filter : KalturaConversionProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : ConversionProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConversionProfileListResponse', responseConstructor : KalturaConversionProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'conversionprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaConversionProfileFilter, subType : 'KalturaConversionProfileFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

