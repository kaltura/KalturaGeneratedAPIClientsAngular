
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryEntryData } from './KalturaBulkUploadCategoryEntryData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface CategoryEntryUpdateStatusFromBulkActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadCategoryEntryData? : KalturaBulkUploadCategoryEntryData;
}

/**
 * Build request payload for service 'categoryEntry' action 'updateStatusFromBulk'.
 *
 * 
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class CategoryEntryUpdateStatusFromBulkAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadCategoryEntryData : KalturaBulkUploadCategoryEntryData;

    constructor(data : CategoryEntryUpdateStatusFromBulkActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'updateStatusFromBulk' },
				fileData : { type : 'f' },
				bulkUploadData : { type : 'o', subTypeConstructor : KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData' },
				bulkUploadCategoryEntryData : { type : 'o', subTypeConstructor : KalturaBulkUploadCategoryEntryData, subType : 'KalturaBulkUploadCategoryEntryData' }
            }
        );
        return result;
    }
}

