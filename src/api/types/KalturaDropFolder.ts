
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderStatus } from './KalturaDropFolderStatus';
import { KalturaDropFolderFileDeletePolicy } from './KalturaDropFolderFileDeletePolicy';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
import { KalturaDropFolderErrorCode } from './KalturaDropFolderErrorCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDropFolderArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	name? : string;
	description? : string;
	type? : KalturaDropFolderType;
	status? : KalturaDropFolderStatus;
	conversionProfileId? : number;
	dc? : number;
	path? : string;
	fileSizeCheckInterval? : number;
	fileDeletePolicy? : KalturaDropFolderFileDeletePolicy;
	autoFileDeleteDays? : number;
	fileHandlerType? : KalturaDropFolderFileHandlerType;
	fileNamePatterns? : string;
	fileHandlerConfig? : KalturaDropFolderFileHandlerConfig;
	tags? : string;
	errorCode? : KalturaDropFolderErrorCode;
	errorDescription? : string;
	ignoreFileNamePatterns? : string;
	lastAccessedAt? : number;
	incremental? : boolean;
	lastFileTimestamp? : number;
	metadataProfileId? : number;
	categoriesMetadataFieldName? : string;
	enforceEntitlement? : boolean;
	shouldValidateKS? : boolean;
}


export class KalturaDropFolder extends KalturaObjectBase {

    readonly id : number;
	partnerId : number;
	name : string;
	description : string;
	type : KalturaDropFolderType;
	status : KalturaDropFolderStatus;
	conversionProfileId : number;
	dc : number;
	path : string;
	fileSizeCheckInterval : number;
	fileDeletePolicy : KalturaDropFolderFileDeletePolicy;
	autoFileDeleteDays : number;
	fileHandlerType : KalturaDropFolderFileHandlerType;
	fileNamePatterns : string;
	fileHandlerConfig : KalturaDropFolderFileHandlerConfig;
	tags : string;
	errorCode : KalturaDropFolderErrorCode;
	errorDescription : string;
	ignoreFileNamePatterns : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	lastAccessedAt : number;
	incremental : boolean;
	lastFileTimestamp : number;
	metadataProfileId : number;
	categoriesMetadataFieldName : string;
	enforceEntitlement : boolean;
	shouldValidateKS : boolean;

    constructor(data? : KalturaDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolder' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n' },
				name : { type : 's' },
				description : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaDropFolderType, subType : 'KalturaDropFolderType' },
				status : { type : 'en', subTypeConstructor : KalturaDropFolderStatus, subType : 'KalturaDropFolderStatus' },
				conversionProfileId : { type : 'n' },
				dc : { type : 'n' },
				path : { type : 's' },
				fileSizeCheckInterval : { type : 'n' },
				fileDeletePolicy : { type : 'en', subTypeConstructor : KalturaDropFolderFileDeletePolicy, subType : 'KalturaDropFolderFileDeletePolicy' },
				autoFileDeleteDays : { type : 'n' },
				fileHandlerType : { type : 'es', subTypeConstructor : KalturaDropFolderFileHandlerType, subType : 'KalturaDropFolderFileHandlerType' },
				fileNamePatterns : { type : 's' },
				fileHandlerConfig : { type : 'o', subTypeConstructor : KalturaDropFolderFileHandlerConfig, subType : 'KalturaDropFolderFileHandlerConfig' },
				tags : { type : 's' },
				errorCode : { type : 'es', subTypeConstructor : KalturaDropFolderErrorCode, subType : 'KalturaDropFolderErrorCode' },
				errorDescription : { type : 's' },
				ignoreFileNamePatterns : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				lastAccessedAt : { type : 'n' },
				incremental : { type : 'b' },
				lastFileTimestamp : { type : 'n' },
				metadataProfileId : { type : 'n' },
				categoriesMetadataFieldName : { type : 's' },
				enforceEntitlement : { type : 'b' },
				shouldValidateKS : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolder',KalturaDropFolder);
