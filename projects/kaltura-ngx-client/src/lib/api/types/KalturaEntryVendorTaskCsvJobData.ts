
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryVendorTaskFilter } from './KalturaEntryVendorTaskFilter';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaEntryVendorTaskCsvJobDataArgs  extends KalturaJobDataArgs {
    filter? : KalturaEntryVendorTaskFilter;
	userName? : string;
	userMail? : string;
	outputPath? : string;
}


export class KalturaEntryVendorTaskCsvJobData extends KalturaJobData {

    filter : KalturaEntryVendorTaskFilter;
	userName : string;
	userMail : string;
	outputPath : string;

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
				filter : { type : 'o', subTypeConstructor : KalturaEntryVendorTaskFilter, subType : 'KalturaEntryVendorTaskFilter' },
				userName : { type : 's' },
				userMail : { type : 's' },
				outputPath : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryVendorTaskCsvJobData'] = KalturaEntryVendorTaskCsvJobData;