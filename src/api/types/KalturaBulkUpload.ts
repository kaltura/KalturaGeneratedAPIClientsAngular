
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadArgs  extends KalturaObjectBaseArgs {
    id? : number;
	uploadedBy? : string;
	uploadedByUserId? : string;
	uploadedOn? : Date;
	numOfEntries? : number;
	status? : KalturaBatchJobStatus;
	logFileUrl? : string;
	csvFileUrl? : string;
	bulkFileUrl? : string;
	bulkUploadType? : KalturaBulkUploadType;
	results? : KalturaBulkUploadResult[];
	error? : string;
	errorType? : KalturaBatchJobErrorTypes;
	errorNumber? : number;
	fileName? : string;
	description? : string;
	numOfObjects? : number;
	bulkUploadObjectType? : KalturaBulkUploadObjectType;
}


export class KalturaBulkUpload extends KalturaObjectBase {

    id : number;
	uploadedBy : string;
	uploadedByUserId : string;
	uploadedOn : Date;
	numOfEntries : number;
	status : KalturaBatchJobStatus;
	logFileUrl : string;
	csvFileUrl : string;
	bulkFileUrl : string;
	bulkUploadType : KalturaBulkUploadType;
	results : KalturaBulkUploadResult[];
	error : string;
	errorType : KalturaBatchJobErrorTypes;
	errorNumber : number;
	fileName : string;
	description : string;
	numOfObjects : number;
	bulkUploadObjectType : KalturaBulkUploadObjectType;

    constructor(data? : KalturaBulkUploadArgs)
    {
        super(data);
        if (typeof this.results === 'undefined') this.results = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUpload' },
				id : { type : 'n' },
				uploadedBy : { type : 's' },
				uploadedByUserId : { type : 's' },
				uploadedOn : { type : 'd' },
				numOfEntries : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' },
				logFileUrl : { type : 's' },
				csvFileUrl : { type : 's' },
				bulkFileUrl : { type : 's' },
				bulkUploadType : { type : 'es', subTypeConstructor : KalturaBulkUploadType, subType : 'KalturaBulkUploadType' },
				results : { type : 'a', subTypeConstructor : KalturaBulkUploadResult, subType : 'KalturaBulkUploadResult' },
				error : { type : 's' },
				errorType : { type : 'en', subTypeConstructor : KalturaBatchJobErrorTypes, subType : 'KalturaBatchJobErrorTypes' },
				errorNumber : { type : 'n' },
				fileName : { type : 's' },
				description : { type : 's' },
				numOfObjects : { type : 'n' },
				bulkUploadObjectType : { type : 'es', subTypeConstructor : KalturaBulkUploadObjectType, subType : 'KalturaBulkUploadObjectType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUpload',KalturaBulkUpload);
