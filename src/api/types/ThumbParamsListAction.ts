
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsListResponse } from './KalturaThumbParamsListResponse';

import { KalturaThumbParamsFilter } from './KalturaThumbParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaThumbParamsFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'thumbParams' action 'list'.
 *
 * Usage: List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaThumbParamsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbParamsListAction extends KalturaRequest<KalturaThumbParamsListResponse> {

    filter : KalturaThumbParamsFilter;
	pager : KalturaFilterPager;

    constructor(data? : ThumbParamsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParamsListResponse', responseConstructor : KalturaThumbParamsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbparams' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaThumbParamsFilter, subType : 'KalturaThumbParamsFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

