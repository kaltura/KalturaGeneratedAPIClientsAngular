
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageExportJobData, KalturaStorageExportJobDataArgs } from './KalturaStorageExportJobData';

export interface KalturaAmazonS3StorageExportJobDataArgs  extends KalturaStorageExportJobDataArgs {
    filesPermissionInS3? : KalturaAmazonS3StorageProfileFilesPermissionLevel;
	s3Region? : string;
	sseType? : string;
	sseKmsKeyId? : string;
	signatureType? : string;
	endPoint? : string;
	storageClass? : string;
}


export class KalturaAmazonS3StorageExportJobData extends KalturaStorageExportJobData {

    filesPermissionInS3 : KalturaAmazonS3StorageProfileFilesPermissionLevel;
	s3Region : string;
	sseType : string;
	sseKmsKeyId : string;
	signatureType : string;
	endPoint : string;
	storageClass : string;

    constructor(data? : KalturaAmazonS3StorageExportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAmazonS3StorageExportJobData' },
				filesPermissionInS3 : { type : 'es', subTypeConstructor : KalturaAmazonS3StorageProfileFilesPermissionLevel, subType : 'KalturaAmazonS3StorageProfileFilesPermissionLevel' },
				s3Region : { type : 's' },
				sseType : { type : 's' },
				sseKmsKeyId : { type : 's' },
				signatureType : { type : 's' },
				endPoint : { type : 's' },
				storageClass : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAmazonS3StorageExportJobData'] = KalturaAmazonS3StorageExportJobData;