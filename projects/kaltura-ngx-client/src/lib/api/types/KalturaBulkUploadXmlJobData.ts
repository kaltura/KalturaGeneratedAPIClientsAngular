
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadXmlJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    
}


export class KalturaBulkUploadXmlJobData extends KalturaBulkUploadJobData {

    

    constructor(data? : KalturaBulkUploadXmlJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadXmlJobData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadXmlJobData'] = KalturaBulkUploadXmlJobData;