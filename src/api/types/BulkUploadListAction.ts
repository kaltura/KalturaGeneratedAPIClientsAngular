
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';

import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadListActionArgs  extends KalturaRequestArgs {
    pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'bulkUpload' action 'list'.
 *
 * Usage: List bulk upload batch jobs
 *
 * Server response type:         KalturaBulkUploadListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkUploadListAction extends KalturaRequest<KalturaBulkUploadListResponse> {

    pager : KalturaFilterPager;

    constructor(data? : BulkUploadListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUploadListResponse', responseConstructor : KalturaBulkUploadListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload' },
				action : { type : 'c', default : 'list' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

