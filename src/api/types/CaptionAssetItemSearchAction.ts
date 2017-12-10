
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';

import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemSearchActionArgs  extends KalturaRequestArgs {
    entryFilter? : KalturaBaseEntryFilter;
	captionAssetItemFilter? : KalturaCaptionAssetItemFilter;
	captionAssetItemPager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetItemSearchAction extends KalturaRequest<KalturaCaptionAssetItemListResponse> {

    entryFilter : KalturaBaseEntryFilter;
	captionAssetItemFilter : KalturaCaptionAssetItemFilter;
	captionAssetItemPager : KalturaFilterPager;

    constructor(data? : CaptionAssetItemSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionAssetItemListResponse', responseConstructor : KalturaCaptionAssetItemListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'captionsearch_captionassetitem' },
				action : { type : 'c', default : 'search' },
				entryFilter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' },
				captionAssetItemFilter : { type : 'o', subTypeConstructor : KalturaCaptionAssetItemFilter, subType : 'KalturaCaptionAssetItemFilter' },
				captionAssetItemPager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

