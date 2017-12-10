
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputListResponse } from './KalturaFlavorParamsOutputListResponse';

import { KalturaFlavorParamsOutputFilter } from './KalturaFlavorParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsOutputListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaFlavorParamsOutputFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'flavorParamsOutput' action 'list'.
 *
 * Usage: List flavor params output objects by filter and pager
 *
 * Server response type:         KalturaFlavorParamsOutputListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FlavorParamsOutputListAction extends KalturaRequest<KalturaFlavorParamsOutputListResponse> {

    filter : KalturaFlavorParamsOutputFilter;
	pager : KalturaFilterPager;

    constructor(data? : FlavorParamsOutputListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorParamsOutputListResponse', responseConstructor : KalturaFlavorParamsOutputListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorparamsoutput' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaFlavorParamsOutputFilter, subType : 'KalturaFlavorParamsOutputFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

