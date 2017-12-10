
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultCategoryEntryArgs  extends KalturaBulkUploadResultArgs {
    categoryId? : number;
	entryId? : string;
}


export class KalturaBulkUploadResultCategoryEntry extends KalturaBulkUploadResult {

    categoryId : number;
	entryId : string;

    constructor(data? : KalturaBulkUploadResultCategoryEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultCategoryEntry' },
				categoryId : { type : 'n' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultCategoryEntry',KalturaBulkUploadResultCategoryEntry);
