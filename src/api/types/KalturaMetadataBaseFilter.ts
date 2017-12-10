
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaMetadataBaseFilterArgs  extends KalturaRelatedFilterArgs {
    partnerIdEqual? : number;
	metadataProfileIdEqual? : number;
	metadataProfileIdIn? : string;
	metadataProfileVersionEqual? : number;
	metadataProfileVersionGreaterThanOrEqual? : number;
	metadataProfileVersionLessThanOrEqual? : number;
	metadataObjectTypeEqual? : KalturaMetadataObjectType;
	objectIdEqual? : string;
	objectIdIn? : string;
	versionEqual? : number;
	versionGreaterThanOrEqual? : number;
	versionLessThanOrEqual? : number;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaMetadataStatus;
	statusIn? : string;
}


export class KalturaMetadataBaseFilter extends KalturaRelatedFilter {

    partnerIdEqual : number;
	metadataProfileIdEqual : number;
	metadataProfileIdIn : string;
	metadataProfileVersionEqual : number;
	metadataProfileVersionGreaterThanOrEqual : number;
	metadataProfileVersionLessThanOrEqual : number;
	metadataObjectTypeEqual : KalturaMetadataObjectType;
	objectIdEqual : string;
	objectIdIn : string;
	versionEqual : number;
	versionGreaterThanOrEqual : number;
	versionLessThanOrEqual : number;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaMetadataStatus;
	statusIn : string;

    constructor(data? : KalturaMetadataBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataBaseFilter' },
				partnerIdEqual : { type : 'n' },
				metadataProfileIdEqual : { type : 'n' },
				metadataProfileIdIn : { type : 's' },
				metadataProfileVersionEqual : { type : 'n' },
				metadataProfileVersionGreaterThanOrEqual : { type : 'n' },
				metadataProfileVersionLessThanOrEqual : { type : 'n' },
				metadataObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaMetadataObjectType, subType : 'KalturaMetadataObjectType' },
				objectIdEqual : { type : 's' },
				objectIdIn : { type : 's' },
				versionEqual : { type : 'n' },
				versionGreaterThanOrEqual : { type : 'n' },
				versionLessThanOrEqual : { type : 'n' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaMetadataStatus, subType : 'KalturaMetadataStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataBaseFilter',KalturaMetadataBaseFilter);
