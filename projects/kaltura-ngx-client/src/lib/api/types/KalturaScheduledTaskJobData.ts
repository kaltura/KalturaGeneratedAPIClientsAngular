
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDryRunFileType } from './KalturaDryRunFileType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaScheduledTaskJobDataArgs  extends KalturaJobDataArgs {
    maxResults? : number;
	totalCount? : number;
	fileFormat? : KalturaDryRunFileType;
	resultsFilePath? : string;
	referenceTime? : Date;
}


export class KalturaScheduledTaskJobData extends KalturaJobData {

    maxResults : number;
	totalCount : number;
	fileFormat : KalturaDryRunFileType;
	resultsFilePath : string;
	referenceTime : Date;

    constructor(data? : KalturaScheduledTaskJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledTaskJobData' },
				maxResults : { type : 'n' },
				totalCount : { type : 'n' },
				fileFormat : { type : 'en', subTypeConstructor : KalturaDryRunFileType, subType : 'KalturaDryRunFileType' },
				resultsFilePath : { type : 's' },
				referenceTime : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScheduledTaskJobData'] = KalturaScheduledTaskJobData;