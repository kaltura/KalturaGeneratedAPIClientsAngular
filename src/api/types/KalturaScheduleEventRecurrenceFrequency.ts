

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduleEventRecurrenceFrequency extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static daily = new KalturaScheduleEventRecurrenceFrequency('days');
	static hourly = new KalturaScheduleEventRecurrenceFrequency('hours');
	static minutely = new KalturaScheduleEventRecurrenceFrequency('minutes');
	static monthly = new KalturaScheduleEventRecurrenceFrequency('months');
	static secondly = new KalturaScheduleEventRecurrenceFrequency('seconds');
	static weekly = new KalturaScheduleEventRecurrenceFrequency('weeks');
	static yearly = new KalturaScheduleEventRecurrenceFrequency('years');
}
KalturaTypesFactory.registerType('KalturaScheduleEventRecurrenceFrequency',KalturaScheduleEventRecurrenceFrequency);