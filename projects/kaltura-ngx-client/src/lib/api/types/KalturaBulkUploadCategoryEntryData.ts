
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadCategoryEntryDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}


export class KalturaBulkUploadCategoryEntryData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadCategoryEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadCategoryEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadCategoryEntryData'] = KalturaBulkUploadCategoryEntryData;