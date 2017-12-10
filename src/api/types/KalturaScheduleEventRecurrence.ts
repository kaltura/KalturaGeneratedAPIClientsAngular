
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventRecurrenceFrequency } from './KalturaScheduleEventRecurrenceFrequency';
import { KalturaScheduleEventRecurrenceDay } from './KalturaScheduleEventRecurrenceDay';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduleEventRecurrenceArgs  extends KalturaObjectBaseArgs {
    name? : string;
	frequency? : KalturaScheduleEventRecurrenceFrequency;
	until? : Date;
	timeZone? : string;
	count? : number;
	interval? : number;
	bySecond? : string;
	byMinute? : string;
	byHour? : string;
	byDay? : string;
	byMonthDay? : string;
	byYearDay? : string;
	byWeekNumber? : string;
	byMonth? : string;
	byOffset? : string;
	weekStartDay? : KalturaScheduleEventRecurrenceDay;
}


export class KalturaScheduleEventRecurrence extends KalturaObjectBase {

    name : string;
	frequency : KalturaScheduleEventRecurrenceFrequency;
	until : Date;
	timeZone : string;
	count : number;
	interval : number;
	bySecond : string;
	byMinute : string;
	byHour : string;
	byDay : string;
	byMonthDay : string;
	byYearDay : string;
	byWeekNumber : string;
	byMonth : string;
	byOffset : string;
	weekStartDay : KalturaScheduleEventRecurrenceDay;

    constructor(data? : KalturaScheduleEventRecurrenceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEventRecurrence' },
				name : { type : 's' },
				frequency : { type : 'es', subTypeConstructor : KalturaScheduleEventRecurrenceFrequency, subType : 'KalturaScheduleEventRecurrenceFrequency' },
				until : { type : 'd' },
				timeZone : { type : 's' },
				count : { type : 'n' },
				interval : { type : 'n' },
				bySecond : { type : 's' },
				byMinute : { type : 's' },
				byHour : { type : 's' },
				byDay : { type : 's' },
				byMonthDay : { type : 's' },
				byYearDay : { type : 's' },
				byWeekNumber : { type : 's' },
				byMonth : { type : 's' },
				byOffset : { type : 's' },
				weekStartDay : { type : 'es', subTypeConstructor : KalturaScheduleEventRecurrenceDay, subType : 'KalturaScheduleEventRecurrenceDay' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventRecurrence',KalturaScheduleEventRecurrence);
