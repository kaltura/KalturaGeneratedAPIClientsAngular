
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaZoomIntegrationSettingResponse } from './KalturaZoomIntegrationSettingResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ZoomVendorListActionArgs  extends KalturaRequestArgs {
    pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'zoomVendor' action 'list'.
 *
 * Usage: List KalturaZoomIntegrationSetting objects
 *
 * Server response type:         KalturaZoomIntegrationSettingResponse
 * Server failure response type: KalturaAPIException
 */
export class ZoomVendorListAction extends KalturaRequest<KalturaZoomIntegrationSettingResponse> {

    pager : KalturaFilterPager;

    constructor(data? : ZoomVendorListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaZoomIntegrationSettingResponse', responseConstructor : KalturaZoomIntegrationSettingResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'vendor_zoomvendor' },
				action : { type : 'c', default : 'list' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

