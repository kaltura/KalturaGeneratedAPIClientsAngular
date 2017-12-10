
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderStatus } from './KalturaDropFolderStatus';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaDropFolderErrorCode } from './KalturaDropFolderErrorCode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDropFolderBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	nameLike? : string;
	typeEqual? : KalturaDropFolderType;
	typeIn? : string;
	statusEqual? : KalturaDropFolderStatus;
	statusIn? : string;
	conversionProfileIdEqual? : number;
	conversionProfileIdIn? : string;
	dcEqual? : number;
	dcIn? : string;
	pathEqual? : string;
	pathLike? : string;
	fileHandlerTypeEqual? : KalturaDropFolderFileHandlerType;
	fileHandlerTypeIn? : string;
	fileNamePatternsLike? : string;
	fileNamePatternsMultiLikeOr? : string;
	fileNamePatternsMultiLikeAnd? : string;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	errorCodeEqual? : KalturaDropFolderErrorCode;
	errorCodeIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaDropFolderBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	nameLike : string;
	typeEqual : KalturaDropFolderType;
	typeIn : string;
	statusEqual : KalturaDropFolderStatus;
	statusIn : string;
	conversionProfileIdEqual : number;
	conversionProfileIdIn : string;
	dcEqual : number;
	dcIn : string;
	pathEqual : string;
	pathLike : string;
	fileHandlerTypeEqual : KalturaDropFolderFileHandlerType;
	fileHandlerTypeIn : string;
	fileNamePatternsLike : string;
	fileNamePatternsMultiLikeOr : string;
	fileNamePatternsMultiLikeAnd : string;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	errorCodeEqual : KalturaDropFolderErrorCode;
	errorCodeIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaDropFolderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				nameLike : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaDropFolderType, subType : 'KalturaDropFolderType' },
				typeIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaDropFolderStatus, subType : 'KalturaDropFolderStatus' },
				statusIn : { type : 's' },
				conversionProfileIdEqual : { type : 'n' },
				conversionProfileIdIn : { type : 's' },
				dcEqual : { type : 'n' },
				dcIn : { type : 's' },
				pathEqual : { type : 's' },
				pathLike : { type : 's' },
				fileHandlerTypeEqual : { type : 'es', subTypeConstructor : KalturaDropFolderFileHandlerType, subType : 'KalturaDropFolderFileHandlerType' },
				fileHandlerTypeIn : { type : 's' },
				fileNamePatternsLike : { type : 's' },
				fileNamePatternsMultiLikeOr : { type : 's' },
				fileNamePatternsMultiLikeAnd : { type : 's' },
				tagsLike : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				errorCodeEqual : { type : 'es', subTypeConstructor : KalturaDropFolderErrorCode, subType : 'KalturaDropFolderErrorCode' },
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

KalturaTypesFactory.registerType('KalturaDropFolderBaseFilter',KalturaDropFolderBaseFilter);
