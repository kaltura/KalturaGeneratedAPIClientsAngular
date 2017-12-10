
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBulkUploadBaseFilterArgs  extends KalturaFilterArgs {
    uploadedOnGreaterThanOrEqual? : Date;
	uploadedOnLessThanOrEqual? : Date;
	uploadedOnEqual? : Date;
	statusIn? : string;
	statusEqual? : KalturaBatchJobStatus;
	bulkUploadObjectTypeEqual? : KalturaBulkUploadObjectType;
	bulkUploadObjectTypeIn? : string;
}


export class KalturaBulkUploadBaseFilter extends KalturaFilter {

    uploadedOnGreaterThanOrEqual : Date;
	uploadedOnLessThanOrEqual : Date;
	uploadedOnEqual : Date;
	statusIn : string;
	statusEqual : KalturaBatchJobStatus;
	bulkUploadObjectTypeEqual : KalturaBulkUploadObjectType;
	bulkUploadObjectTypeIn : string;

    constructor(data? : KalturaBulkUploadBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadBaseFilter' },
				uploadedOnGreaterThanOrEqual : { type : 'd' },
				uploadedOnLessThanOrEqual : { type : 'd' },
				uploadedOnEqual : { type : 'd' },
				statusIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' },
				bulkUploadObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaBulkUploadObjectType, subType : 'KalturaBulkUploadObjectType' },
				bulkUploadObjectTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadBaseFilter',KalturaBulkUploadBaseFilter);
