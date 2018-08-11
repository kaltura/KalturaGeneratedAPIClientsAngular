
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadCategoryUserDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}


export class KalturaBulkUploadCategoryUserData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadCategoryUserDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadCategoryUserData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadCategoryUserData'] = KalturaBulkUploadCategoryUserData;