
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';

import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemSearchEntriesActionArgs  extends KalturaRequestArgs {
    entryFilter? : KalturaBaseEntryFilter;
	captionAssetItemFilter? : KalturaCaptionAssetItemFilter;
	captionAssetItemPager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CaptionAssetItemSearchEntriesAction extends KalturaRequest<KalturaBaseEntryListResponse> {

    entryFilter : KalturaBaseEntryFilter;
	captionAssetItemFilter : KalturaCaptionAssetItemFilter;
	captionAssetItemPager : KalturaFilterPager;

    constructor(data? : CaptionAssetItemSearchEntriesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntryListResponse', responseConstructor : KalturaBaseEntryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'captionsearch_captionassetitem' },
				action : { type : 'c', default : 'searchEntries' },
				entryFilter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' },
				captionAssetItemFilter : { type : 'o', subTypeConstructor : KalturaCaptionAssetItemFilter, subType : 'KalturaCaptionAssetItemFilter' },
				captionAssetItemPager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

