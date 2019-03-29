
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportExportItem } from './KalturaReportExportItem';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaReportExportJobDataArgs  extends KalturaJobDataArgs {
    recipientEmail? : string;
	reportItems? : KalturaReportExportItem[];
	filePaths? : string;
}


export class KalturaReportExportJobData extends KalturaJobData {

    recipientEmail : string;
	reportItems : KalturaReportExportItem[];
	filePaths : string;

    constructor(data? : KalturaReportExportJobDataArgs)
    {
        super(data);
        if (typeof this.reportItems === 'undefined') this.reportItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportExportJobData' },
				recipientEmail : { type : 's' },
				reportItems : { type : 'a', subTypeConstructor : KalturaReportExportItem, subType : 'KalturaReportExportItem' },
				filePaths : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportExportJobData'] = KalturaReportExportJobData;