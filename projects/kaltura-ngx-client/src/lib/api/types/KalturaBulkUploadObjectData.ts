
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadObjectDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUploadObjectData extends KalturaObjectBase {

    

    constructor(data? : KalturaBulkUploadObjectDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadObjectData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadObjectData'] = KalturaBulkUploadObjectData;