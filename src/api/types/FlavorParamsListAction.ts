
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsListResponse } from './KalturaFlavorParamsListResponse';

import { KalturaFlavorParamsFilter } from './KalturaFlavorParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaFlavorParamsFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'flavorParams' action 'list'.
 *
 * Usage: List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaFlavorParamsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsListAction extends KalturaRequest<KalturaFlavorParamsListResponse> {

    filter : KalturaFlavorParamsFilter;
	pager : KalturaFilterPager;

    constructor(data? : FlavorParamsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorParamsListResponse', responseConstructor : KalturaFlavorParamsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorparams' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaFlavorParamsFilter, subType : 'KalturaFlavorParamsFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

