
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageProfile, KalturaStorageProfileArgs } from './KalturaStorageProfile';

export interface KalturaAmazonS3StorageProfileArgs  extends KalturaStorageProfileArgs {
    filesPermissionInS3? : KalturaAmazonS3StorageProfileFilesPermissionLevel;
	s3Region? : string;
	sseType? : string;
	sseKmsKeyId? : string;
	signatureType? : string;
	endPoint? : string;
}


export class KalturaAmazonS3StorageProfile extends KalturaStorageProfile {

    filesPermissionInS3 : KalturaAmazonS3StorageProfileFilesPermissionLevel;
	s3Region : string;
	sseType : string;
	sseKmsKeyId : string;
	signatureType : string;
	endPoint : string;

    constructor(data? : KalturaAmazonS3StorageProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAmazonS3StorageProfile' },
				filesPermissionInS3 : { type : 'es', subTypeConstructor : KalturaAmazonS3StorageProfileFilesPermissionLevel, subType : 'KalturaAmazonS3StorageProfileFilesPermissionLevel' },
				s3Region : { type : 's' },
				sseType : { type : 's' },
				sseKmsKeyId : { type : 's' },
				signatureType : { type : 's' },
				endPoint : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAmazonS3StorageProfile',KalturaAmazonS3StorageProfile);
