
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadCsvVersion } from './KalturaBulkUploadCsvVersion';
import { KalturaString } from './KalturaString';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadCsvJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    columns? : KalturaString[];
}


export class KalturaBulkUploadCsvJobData extends KalturaBulkUploadJobData {

    readonly csvVersion : KalturaBulkUploadCsvVersion;
	columns : KalturaString[];

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
				columns : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadCsvJobData',KalturaBulkUploadCsvJobData);
