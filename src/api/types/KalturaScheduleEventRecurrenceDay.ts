

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduleEventRecurrenceDay extends KalturaObjectBase {
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

    static friday = new KalturaScheduleEventRecurrenceDay('FR');
	static monday = new KalturaScheduleEventRecurrenceDay('MO');
	static saturday = new KalturaScheduleEventRecurrenceDay('SA');
	static sunday = new KalturaScheduleEventRecurrenceDay('SU');
	static thursday = new KalturaScheduleEventRecurrenceDay('TH');
	static tuesday = new KalturaScheduleEventRecurrenceDay('TU');
	static wednesday = new KalturaScheduleEventRecurrenceDay('WE');
}
KalturaTypesFactory.registerType('KalturaScheduleEventRecurrenceDay',KalturaScheduleEventRecurrenceDay);