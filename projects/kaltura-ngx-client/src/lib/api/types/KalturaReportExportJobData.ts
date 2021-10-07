
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportExportItem } from './KalturaReportExportItem';
import { KalturaReportExportFile } from './KalturaReportExportFile';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaReportExportJobDataArgs  extends KalturaJobDataArgs {
    recipientEmail? : string;
	reportItems? : KalturaReportExportItem[];
	filePaths? : string;
	reportsGroup? : string;
	files? : KalturaReportExportFile[];
	baseUrl? : string;
}


export class KalturaReportExportJobData extends KalturaJobData {

    recipientEmail : string;
	reportItems : KalturaReportExportItem[];
	filePaths : string;
	reportsGroup : string;
	files : KalturaReportExportFile[];
	baseUrl : string;

    constructor(data? : KalturaReportExportJobDataArgs)
    {
        super(data);
        if (typeof this.reportItems === 'undefined') this.reportItems = [];
		if (typeof this.files === 'undefined') this.files = [];
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
				filePaths : { type : 's' },
				reportsGroup : { type : 's' },
				files : { type : 'a', subTypeConstructor : KalturaReportExportFile, subType : 'KalturaReportExportFile' },
				baseUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportExportJobData'] = KalturaReportExportJobData;