
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkServiceData } from './KalturaBulkServiceData';
import { KalturaBulkUploadCategoryEntryData } from './KalturaBulkUploadCategoryEntryData';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryAddFromBulkUploadActionArgs  extends KalturaRequestArgs {
    bulkUploadData : KalturaBulkServiceData;
	bulkUploadCategoryEntryData? : KalturaBulkUploadCategoryEntryData;
}

/**
 * Build request payload for service 'categoryEntry' action 'addFromBulkUpload'.
 *
 * 
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryEntryAddFromBulkUploadAction extends KalturaRequest<KalturaBulkUpload> {

    bulkUploadData : KalturaBulkServiceData;
	bulkUploadCategoryEntryData : KalturaBulkUploadCategoryEntryData;

    constructor(data : CategoryEntryAddFromBulkUploadActionArgs)
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
				action : { type : 'c', default : 'addFromBulkUpload' },
				bulkUploadData : { type : 'o', subTypeConstructor : KalturaBulkServiceData, subType : 'KalturaBulkServiceData' },
				bulkUploadCategoryEntryData : { type : 'o', subTypeConstructor : KalturaBulkUploadCategoryEntryData, subType : 'KalturaBulkUploadCategoryEntryData' }
            }
        );
        return result;
    }
}

