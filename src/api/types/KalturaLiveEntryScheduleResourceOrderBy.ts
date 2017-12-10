

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveEntryScheduleResourceOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveEntryScheduleResourceOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveEntryScheduleResourceOrderBy('-createdAt');
	static updatedAtAsc = new KalturaLiveEntryScheduleResourceOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveEntryScheduleResourceOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLiveEntryScheduleResourceOrderBy',KalturaLiveEntryScheduleResourceOrderBy);