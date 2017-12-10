
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadObjectData } from './KalturaBulkUploadObjectData';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaBulkUploadJobDataArgs  extends KalturaJobDataArgs {
    fileName? : string;
	emailRecipients? : string;
	numOfErrorObjects? : number;
}


export class KalturaBulkUploadJobData extends KalturaJobData {

    readonly userId : string;
	readonly uploadedBy : string;
	readonly conversionProfileId : number;
	readonly resultsFileLocalPath : string;
	readonly resultsFileUrl : string;
	readonly numOfEntries : number;
	readonly numOfObjects : number;
	readonly filePath : string;
	readonly bulkUploadObjectType : KalturaBulkUploadObjectType;
	fileName : string;
	readonly objectData : KalturaBulkUploadObjectData;
	readonly type : KalturaBulkUploadType;
	emailRecipients : string;
	numOfErrorObjects : number;

    constructor(data? : KalturaBulkUploadJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadJobData' },
				userId : { type : 's', readOnly : true },
				uploadedBy : { type : 's', readOnly : true },
				conversionProfileId : { type : 'n', readOnly : true },
				resultsFileLocalPath : { type : 's', readOnly : true },
				resultsFileUrl : { type : 's', readOnly : true },
				numOfEntries : { type : 'n', readOnly : true },
				numOfObjects : { type : 'n', readOnly : true },
				filePath : { type : 's', readOnly : true },
				bulkUploadObjectType : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadObjectType, subType : 'KalturaBulkUploadObjectType' },
				fileName : { type : 's' },
				objectData : { type : 'o', readOnly : true, subTypeConstructor : KalturaBulkUploadObjectData, subType : 'KalturaBulkUploadObjectData' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadType, subType : 'KalturaBulkUploadType' },
				emailRecipients : { type : 's' },
				numOfErrorObjects : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadJobData',KalturaBulkUploadJobData);
