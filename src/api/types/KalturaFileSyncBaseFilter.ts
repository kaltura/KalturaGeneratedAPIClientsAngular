
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileSyncObjectType } from './KalturaFileSyncObjectType';
import { KalturaFileSyncStatus } from './KalturaFileSyncStatus';
import { KalturaFileSyncType } from './KalturaFileSyncType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaFileSyncBaseFilterArgs  extends KalturaFilterArgs {
    partnerIdEqual? : number;
	fileObjectTypeEqual? : KalturaFileSyncObjectType;
	fileObjectTypeIn? : string;
	objectIdEqual? : string;
	objectIdIn? : string;
	versionEqual? : string;
	versionIn? : string;
	objectSubTypeEqual? : number;
	objectSubTypeIn? : string;
	dcEqual? : string;
	dcIn? : string;
	originalEqual? : number;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	readyAtGreaterThanOrEqual? : number;
	readyAtLessThanOrEqual? : number;
	syncTimeGreaterThanOrEqual? : number;
	syncTimeLessThanOrEqual? : number;
	statusEqual? : KalturaFileSyncStatus;
	statusIn? : string;
	fileTypeEqual? : KalturaFileSyncType;
	fileTypeIn? : string;
	linkedIdEqual? : number;
	linkCountGreaterThanOrEqual? : number;
	linkCountLessThanOrEqual? : number;
	fileSizeGreaterThanOrEqual? : number;
	fileSizeLessThanOrEqual? : number;
}


export class KalturaFileSyncBaseFilter extends KalturaFilter {

    partnerIdEqual : number;
	fileObjectTypeEqual : KalturaFileSyncObjectType;
	fileObjectTypeIn : string;
	objectIdEqual : string;
	objectIdIn : string;
	versionEqual : string;
	versionIn : string;
	objectSubTypeEqual : number;
	objectSubTypeIn : string;
	dcEqual : string;
	dcIn : string;
	originalEqual : number;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	readyAtGreaterThanOrEqual : number;
	readyAtLessThanOrEqual : number;
	syncTimeGreaterThanOrEqual : number;
	syncTimeLessThanOrEqual : number;
	statusEqual : KalturaFileSyncStatus;
	statusIn : string;
	fileTypeEqual : KalturaFileSyncType;
	fileTypeIn : string;
	linkedIdEqual : number;
	linkCountGreaterThanOrEqual : number;
	linkCountLessThanOrEqual : number;
	fileSizeGreaterThanOrEqual : number;
	fileSizeLessThanOrEqual : number;

    constructor(data? : KalturaFileSyncBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileSyncBaseFilter' },
				partnerIdEqual : { type : 'n' },
				fileObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaFileSyncObjectType, subType : 'KalturaFileSyncObjectType' },
				fileObjectTypeIn : { type : 's' },
				objectIdEqual : { type : 's' },
				objectIdIn : { type : 's' },
				versionEqual : { type : 's' },
				versionIn : { type : 's' },
				objectSubTypeEqual : { type : 'n' },
				objectSubTypeIn : { type : 's' },
				dcEqual : { type : 's' },
				dcIn : { type : 's' },
				originalEqual : { type : 'n' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				readyAtGreaterThanOrEqual : { type : 'n' },
				readyAtLessThanOrEqual : { type : 'n' },
				syncTimeGreaterThanOrEqual : { type : 'n' },
				syncTimeLessThanOrEqual : { type : 'n' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaFileSyncStatus, subType : 'KalturaFileSyncStatus' },
				statusIn : { type : 's' },
				fileTypeEqual : { type : 'en', subTypeConstructor : KalturaFileSyncType, subType : 'KalturaFileSyncType' },
				fileTypeIn : { type : 's' },
				linkedIdEqual : { type : 'n' },
				linkCountGreaterThanOrEqual : { type : 'n' },
				linkCountLessThanOrEqual : { type : 'n' },
				fileSizeGreaterThanOrEqual : { type : 'n' },
				fileSizeLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileSyncBaseFilter',KalturaFileSyncBaseFilter);
