
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaLiveReportExportJobDataArgs  extends KalturaJobDataArgs {
    timeReference? : Date;
	timeZoneOffset? : number;
	entryIds? : string;
	outputPath? : string;
	recipientEmail? : string;
}


export class KalturaLiveReportExportJobData extends KalturaJobData {

    timeReference : Date;
	timeZoneOffset : number;
	entryIds : string;
	outputPath : string;
	recipientEmail : string;

    constructor(data? : KalturaLiveReportExportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveReportExportJobData' },
				timeReference : { type : 'd' },
				timeZoneOffset : { type : 'n' },
				entryIds : { type : 's' },
				outputPath : { type : 's' },
				recipientEmail : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveReportExportJobData',KalturaLiveReportExportJobData);
