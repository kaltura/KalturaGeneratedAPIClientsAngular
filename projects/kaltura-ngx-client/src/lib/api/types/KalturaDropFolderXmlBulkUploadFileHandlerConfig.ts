
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';

export interface KalturaDropFolderXmlBulkUploadFileHandlerConfigArgs  extends KalturaDropFolderFileHandlerConfigArgs {
    
}


export class KalturaDropFolderXmlBulkUploadFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {

    

    constructor(data? : KalturaDropFolderXmlBulkUploadFileHandlerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderXmlBulkUploadFileHandlerConfig' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDropFolderXmlBulkUploadFileHandlerConfig'] = KalturaDropFolderXmlBulkUploadFileHandlerConfig;