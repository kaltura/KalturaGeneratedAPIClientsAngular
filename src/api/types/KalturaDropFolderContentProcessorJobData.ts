
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaDropFolderContentProcessorJobDataArgs  extends KalturaJobDataArgs {
    dropFolderId? : number;
	dropFolderFileIds? : string;
	parsedSlug? : string;
	contentMatchPolicy? : KalturaDropFolderContentFileHandlerMatchPolicy;
	conversionProfileId? : number;
	parsedUserId? : string;
}


export class KalturaDropFolderContentProcessorJobData extends KalturaJobData {

    dropFolderId : number;
	dropFolderFileIds : string;
	parsedSlug : string;
	contentMatchPolicy : KalturaDropFolderContentFileHandlerMatchPolicy;
	conversionProfileId : number;
	parsedUserId : string;

    constructor(data? : KalturaDropFolderContentProcessorJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderContentProcessorJobData' },
				dropFolderId : { type : 'n' },
				dropFolderFileIds : { type : 's' },
				parsedSlug : { type : 's' },
				contentMatchPolicy : { type : 'en', subTypeConstructor : KalturaDropFolderContentFileHandlerMatchPolicy, subType : 'KalturaDropFolderContentFileHandlerMatchPolicy' },
				conversionProfileId : { type : 'n' },
				parsedUserId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderContentProcessorJobData',KalturaDropFolderContentProcessorJobData);
