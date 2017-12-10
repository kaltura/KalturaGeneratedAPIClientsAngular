
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDropFolderFileArgs  extends KalturaObjectBaseArgs {
    dropFolderId? : number;
	fileName? : string;
	fileSize? : number;
	parsedSlug? : string;
	parsedFlavor? : string;
	parsedUserId? : string;
	leadDropFolderFileId? : number;
	deletedDropFolderFileId? : number;
	entryId? : string;
	errorCode? : KalturaDropFolderFileErrorCode;
	errorDescription? : string;
	lastModificationTime? : string;
	uploadStartDetectedAt? : Date;
	uploadEndDetectedAt? : Date;
	importStartedAt? : Date;
	importEndedAt? : Date;
}


export class KalturaDropFolderFile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	dropFolderId : number;
	fileName : string;
	fileSize : number;
	readonly fileSizeLastSetAt : Date;
	readonly status : KalturaDropFolderFileStatus;
	readonly type : KalturaDropFolderType;
	parsedSlug : string;
	parsedFlavor : string;
	parsedUserId : string;
	leadDropFolderFileId : number;
	deletedDropFolderFileId : number;
	entryId : string;
	errorCode : KalturaDropFolderFileErrorCode;
	errorDescription : string;
	lastModificationTime : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	uploadStartDetectedAt : Date;
	uploadEndDetectedAt : Date;
	importStartedAt : Date;
	importEndedAt : Date;
	readonly batchJobId : number;

    constructor(data? : KalturaDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				dropFolderId : { type : 'n' },
				fileName : { type : 's' },
				fileSize : { type : 'n' },
				fileSizeLastSetAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaDropFolderFileStatus, subType : 'KalturaDropFolderFileStatus' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaDropFolderType, subType : 'KalturaDropFolderType' },
				parsedSlug : { type : 's' },
				parsedFlavor : { type : 's' },
				parsedUserId : { type : 's' },
				leadDropFolderFileId : { type : 'n' },
				deletedDropFolderFileId : { type : 'n' },
				entryId : { type : 's' },
				errorCode : { type : 'es', subTypeConstructor : KalturaDropFolderFileErrorCode, subType : 'KalturaDropFolderFileErrorCode' },
				errorDescription : { type : 's' },
				lastModificationTime : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				uploadStartDetectedAt : { type : 'd' },
				uploadEndDetectedAt : { type : 'd' },
				importStartedAt : { type : 'd' },
				importEndedAt : { type : 'd' },
				batchJobId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFile',KalturaDropFolderFile);
