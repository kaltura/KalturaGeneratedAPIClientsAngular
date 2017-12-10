
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';

import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemListActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
	captionAssetItemFilter? : KalturaCaptionAssetItemFilter;
	captionAssetItemPager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetItemListAction extends KalturaRequest<KalturaCaptionAssetItemListResponse> {

    captionAssetId : string;
	captionAssetItemFilter : KalturaCaptionAssetItemFilter;
	captionAssetItemPager : KalturaFilterPager;

    constructor(data : CaptionAssetItemListActionArgs)
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
				action : { type : 'c', default : 'list' },
				captionAssetId : { type : 's' },
				captionAssetItemFilter : { type : 'o', subTypeConstructor : KalturaCaptionAssetItemFilter, subType : 'KalturaCaptionAssetItemFilter' },
				captionAssetItemPager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

