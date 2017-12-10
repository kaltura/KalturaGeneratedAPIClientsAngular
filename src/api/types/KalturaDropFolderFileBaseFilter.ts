
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDropFolderFileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	dropFolderIdEqual? : number;
	dropFolderIdIn? : string;
	fileNameEqual? : string;
	fileNameIn? : string;
	fileNameLike? : string;
	statusEqual? : KalturaDropFolderFileStatus;
	statusIn? : string;
	statusNotIn? : string;
	parsedSlugEqual? : string;
	parsedSlugIn? : string;
	parsedSlugLike? : string;
	parsedFlavorEqual? : string;
	parsedFlavorIn? : string;
	parsedFlavorLike? : string;
	leadDropFolderFileIdEqual? : number;
	deletedDropFolderFileIdEqual? : number;
	entryIdEqual? : string;
	errorCodeEqual? : KalturaDropFolderFileErrorCode;
	errorCodeIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaDropFolderFileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	dropFolderIdEqual : number;
	dropFolderIdIn : string;
	fileNameEqual : string;
	fileNameIn : string;
	fileNameLike : string;
	statusEqual : KalturaDropFolderFileStatus;
	statusIn : string;
	statusNotIn : string;
	parsedSlugEqual : string;
	parsedSlugIn : string;
	parsedSlugLike : string;
	parsedFlavorEqual : string;
	parsedFlavorIn : string;
	parsedFlavorLike : string;
	leadDropFolderFileIdEqual : number;
	deletedDropFolderFileIdEqual : number;
	entryIdEqual : string;
	errorCodeEqual : KalturaDropFolderFileErrorCode;
	errorCodeIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaDropFolderFileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderFileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				dropFolderIdEqual : { type : 'n' },
				dropFolderIdIn : { type : 's' },
				fileNameEqual : { type : 's' },
				fileNameIn : { type : 's' },
				fileNameLike : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaDropFolderFileStatus, subType : 'KalturaDropFolderFileStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' },
				parsedSlugEqual : { type : 's' },
				parsedSlugIn : { type : 's' },
				parsedSlugLike : { type : 's' },
				parsedFlavorEqual : { type : 's' },
				parsedFlavorIn : { type : 's' },
				parsedFlavorLike : { type : 's' },
				leadDropFolderFileIdEqual : { type : 'n' },
				deletedDropFolderFileIdEqual : { type : 'n' },
				entryIdEqual : { type : 's' },
				errorCodeEqual : { type : 'es', subTypeConstructor : KalturaDropFolderFileErrorCode, subType : 'KalturaDropFolderFileErrorCode' },
				errorCodeIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderFileBaseFilter',KalturaDropFolderFileBaseFilter);
