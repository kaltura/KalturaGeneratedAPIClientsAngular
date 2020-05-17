
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadVendorCatalogItemData } from './KalturaBulkUploadVendorCatalogItemData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface VendorCatalogItemAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadJobData;
	bulkUploadVendorCatalogItemData? : KalturaBulkUploadVendorCatalogItemData;
}

/**
 * Build request payload for service 'vendorCatalogItem' action 'addFromBulkUpload'.
 *
 * 
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class VendorCatalogItemAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadJobData;
	bulkUploadVendorCatalogItemData : KalturaBulkUploadVendorCatalogItemData;

    constructor(data : VendorCatalogItemAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_vendorcatalogitem' },
				action : { type : 'c', default : 'addFromBulkUpload' },
				fileData : { type : 'f' },
				bulkUploadData : { type : 'o', subTypeConstructor : KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData' },
				bulkUploadVendorCatalogItemData : { type : 'o', subTypeConstructor : KalturaBulkUploadVendorCatalogItemData, subType : 'KalturaBulkUploadVendorCatalogItemData' }
            }
        );
        return result;
    }
}

