
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryVendorTaskFilter } from './KalturaEntryVendorTaskFilter';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaEntryVendorTaskCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    filter? : KalturaEntryVendorTaskFilter;
}


export class KalturaEntryVendorTaskCsvJobData extends KalturaExportCsvJobData {

    filter : KalturaEntryVendorTaskFilter;

    constructor(data? : KalturaEntryVendorTaskCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaEntryVendorTaskFilter, subType : 'KalturaEntryVendorTaskFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryVendorTaskCsvJobData'] = KalturaEntryVendorTaskCsvJobData;