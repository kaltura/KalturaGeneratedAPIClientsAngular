
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidgetListResponse } from './KalturaWidgetListResponse';

import { KalturaWidgetFilter } from './KalturaWidgetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaWidgetFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'widget' action 'list'.
 *
 * Usage: Retrieve a list of available widget depends on the filter given
 *
 * Server response type:         KalturaWidgetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WidgetListAction extends KalturaRequest<KalturaWidgetListResponse> {

    filter : KalturaWidgetFilter;
	pager : KalturaFilterPager;

    constructor(data? : WidgetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWidgetListResponse', responseConstructor : KalturaWidgetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'widget' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaWidgetFilter, subType : 'KalturaWidgetFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

