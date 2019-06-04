
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadCsvVersion } from './KalturaBulkUploadCsvVersion';
import { KalturaString } from './KalturaString';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadCsvJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    columns? : KalturaString[];
	processObjectId? : string;
	processObjectType? : string;
}


export class KalturaBulkUploadCsvJobData extends KalturaBulkUploadJobData {

    readonly csvVersion : KalturaBulkUploadCsvVersion;
	columns : KalturaString[];
	processObjectId : string;
	processObjectType : string;

    constructor(data? : KalturaBulkUploadCsvJobDataArgs)
    {
        super(data);
        if (typeof this.columns === 'undefined') this.columns = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadCsvJobData' },
				csvVersion : { type : 'en', readOnly : true, subTypeConstructor : KalturaBulkUploadCsvVersion, subType : 'KalturaBulkUploadCsvVersion' },
				columns : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				processObjectId : { type : 's' },
				processObjectType : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadCsvJobData'] = KalturaBulkUploadCsvJobData;