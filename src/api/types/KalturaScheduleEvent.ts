
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventClassificationType } from './KalturaScheduleEventClassificationType';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaScheduleEventRecurrence } from './KalturaScheduleEventRecurrence';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduleEventArgs  extends KalturaObjectBaseArgs {
    summary? : string;
	description? : string;
	startDate? : Date;
	endDate? : Date;
	referenceId? : string;
	classificationType? : KalturaScheduleEventClassificationType;
	geoLatitude? : number;
	geoLongitude? : number;
	location? : string;
	organizer? : string;
	ownerId? : string;
	priority? : number;
	sequence? : number;
	recurrenceType? : KalturaScheduleEventRecurrenceType;
	duration? : number;
	contact? : string;
	comment? : string;
	tags? : string;
	recurrence? : KalturaScheduleEventRecurrence;
}


export class KalturaScheduleEvent extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly parentId : number;
	summary : string;
	description : string;
	readonly status : KalturaScheduleEventStatus;
	startDate : Date;
	endDate : Date;
	referenceId : string;
	classificationType : KalturaScheduleEventClassificationType;
	geoLatitude : number;
	geoLongitude : number;
	location : string;
	organizer : string;
	ownerId : string;
	priority : number;
	sequence : number;
	recurrenceType : KalturaScheduleEventRecurrenceType;
	duration : number;
	contact : string;
	comment : string;
	tags : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	recurrence : KalturaScheduleEventRecurrence;

    constructor(data? : KalturaScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEvent' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				parentId : { type : 'n', readOnly : true },
				summary : { type : 's' },
				description : { type : 's' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaScheduleEventStatus, subType : 'KalturaScheduleEventStatus' },
				startDate : { type : 'd' },
				endDate : { type : 'd' },
				referenceId : { type : 's' },
				classificationType : { type : 'en', subTypeConstructor : KalturaScheduleEventClassificationType, subType : 'KalturaScheduleEventClassificationType' },
				geoLatitude : { type : 'n' },
				geoLongitude : { type : 'n' },
				location : { type : 's' },
				organizer : { type : 's' },
				ownerId : { type : 's' },
				priority : { type : 'n' },
				sequence : { type : 'n' },
				recurrenceType : { type : 'en', subTypeConstructor : KalturaScheduleEventRecurrenceType, subType : 'KalturaScheduleEventRecurrenceType' },
				duration : { type : 'n' },
				contact : { type : 's' },
				comment : { type : 's' },
				tags : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				recurrence : { type : 'o', subTypeConstructor : KalturaScheduleEventRecurrence, subType : 'KalturaScheduleEventRecurrence' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEvent',KalturaScheduleEvent);
