
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMailType } from './KalturaMailType';
import { KalturaMailJobStatus } from './KalturaMailJobStatus';
import { KalturaDynamicEmailContents } from './KalturaDynamicEmailContents';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaMailJobDataArgs  extends KalturaJobDataArgs {
    mailType? : KalturaMailType;
	mailPriority? : number;
	status? : KalturaMailJobStatus;
	recipientName? : string;
	recipientEmail? : string;
	recipientId? : number;
	fromName? : string;
	fromEmail? : string;
	bodyParams? : string;
	subjectParams? : string;
	dynamicEmailContents? : KalturaDynamicEmailContents;
	templatePath? : string;
	language? : KalturaLanguageCode;
	campaignId? : number;
	minSendDate? : number;
	isHtml? : boolean;
	separator? : string;
}


export class KalturaMailJobData extends KalturaJobData {

    mailType : KalturaMailType;
	mailPriority : number;
	status : KalturaMailJobStatus;
	recipientName : string;
	recipientEmail : string;
	recipientId : number;
	fromName : string;
	fromEmail : string;
	bodyParams : string;
	subjectParams : string;
	dynamicEmailContents : KalturaDynamicEmailContents;
	templatePath : string;
	language : KalturaLanguageCode;
	campaignId : number;
	minSendDate : number;
	isHtml : boolean;
	separator : string;

    constructor(data? : KalturaMailJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMailJobData' },
				mailType : { type : 'es', subTypeConstructor : KalturaMailType, subType : 'KalturaMailType' },
				mailPriority : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaMailJobStatus, subType : 'KalturaMailJobStatus' },
				recipientName : { type : 's' },
				recipientEmail : { type : 's' },
				recipientId : { type : 'n' },
				fromName : { type : 's' },
				fromEmail : { type : 's' },
				bodyParams : { type : 's' },
				subjectParams : { type : 's' },
				dynamicEmailContents : { type : 'o', subTypeConstructor : KalturaDynamicEmailContents, subType : 'KalturaDynamicEmailContents' },
				templatePath : { type : 's' },
				language : { type : 'es', subTypeConstructor : KalturaLanguageCode, subType : 'KalturaLanguageCode' },
				campaignId : { type : 'n' },
				minSendDate : { type : 'n' },
				isHtml : { type : 'b' },
				separator : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMailJobData'] = KalturaMailJobData;