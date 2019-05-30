
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultScheduleEventArgs  extends KalturaBulkUploadResultArgs {
    referenceId? : string;
	templateEntryId? : string;
	eventType? : KalturaScheduleEventType;
	title? : string;
	description? : string;
	tags? : string;
	categoryIds? : string;
	resourceId? : string;
	startTime? : Date;
	duration? : number;
	endTime? : Date;
	recurrence? : string;
	coEditors? : string;
	coPublishers? : string;
	eventOrganizerId? : string;
	contentOwnerId? : string;
	templateEntryType? : string;
}


export class KalturaBulkUploadResultScheduleEvent extends KalturaBulkUploadResult {

    referenceId : string;
	templateEntryId : string;
	eventType : KalturaScheduleEventType;
	title : string;
	description : string;
	tags : string;
	categoryIds : string;
	resourceId : string;
	startTime : Date;
	duration : number;
	endTime : Date;
	recurrence : string;
	coEditors : string;
	coPublishers : string;
	eventOrganizerId : string;
	contentOwnerId : string;
	templateEntryType : string;

    constructor(data? : KalturaBulkUploadResultScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultScheduleEvent' },
				referenceId : { type : 's' },
				templateEntryId : { type : 's' },
				eventType : { type : 'en', subTypeConstructor : KalturaScheduleEventType, subType : 'KalturaScheduleEventType' },
				title : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				categoryIds : { type : 's' },
				resourceId : { type : 's' },
				startTime : { type : 'd' },
				duration : { type : 'n' },
				endTime : { type : 'd' },
				recurrence : { type : 's' },
				coEditors : { type : 's' },
				coPublishers : { type : 's' },
				eventOrganizerId : { type : 's' },
				contentOwnerId : { type : 's' },
				templateEntryType : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadResultScheduleEvent'] = KalturaBulkUploadResultScheduleEvent;