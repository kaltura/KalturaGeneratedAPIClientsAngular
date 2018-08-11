
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadUserDataArgs  extends KalturaBulkUploadObjectDataArgs {
    
}


export class KalturaBulkUploadUserData extends KalturaBulkUploadObjectData {

    

    constructor(data? : KalturaBulkUploadUserDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadUserData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadUserData'] = KalturaBulkUploadUserData;