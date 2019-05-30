
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadCsvVersion } from './KalturaBulkUploadCsvVersion';
import { KalturaString } from './KalturaString';
import { KalturaBulkUploadScheduleEventJobData, KalturaBulkUploadScheduleEventJobDataArgs } from './KalturaBulkUploadScheduleEventJobData';

export interface KalturaBulkUploadScheduleEventCsvJobDataArgs  extends KalturaBulkUploadScheduleEventJobDataArgs {
    columns? : KalturaString[];
}


export class KalturaBulkUploadScheduleEventCsvJobData extends KalturaBulkUploadScheduleEventJobData {

    readonly csvVersion : KalturaBulkUploadCsvVersion;
	columns : KalturaString[];

    constructor(data? : KalturaBulkUploadScheduleEventCsvJobDataArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkUploadScheduleEventCsvJobData' },
				csvVersion : { type : 'en', readOnly : true, subTypeConstructor : KalturaBulkUploadCsvVersion, subType : 'KalturaBulkUploadCsvVersion' },
				columns : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadScheduleEventCsvJobData'] = KalturaBulkUploadScheduleEventCsvJobData;