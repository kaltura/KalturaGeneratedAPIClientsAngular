
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadCategoryDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}


export class KalturaBulkUploadCategoryData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadCategoryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadCategoryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadCategoryData'] = KalturaBulkUploadCategoryData;