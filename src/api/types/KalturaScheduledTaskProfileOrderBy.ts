

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaScheduledTaskProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaScheduledTaskProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaScheduledTaskProfileOrderBy('-createdAt');
	static idAsc = new KalturaScheduledTaskProfileOrderBy('+id');
	static idDesc = new KalturaScheduledTaskProfileOrderBy('-id');
	static lastExecutionStartedAtAsc = new KalturaScheduledTaskProfileOrderBy('+lastExecutionStartedAt');
	static lastExecutionStartedAtDesc = new KalturaScheduledTaskProfileOrderBy('-lastExecutionStartedAt');
	static updatedAtAsc = new KalturaScheduledTaskProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaScheduledTaskProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaScheduledTaskProfileOrderBy',KalturaScheduledTaskProfileOrderBy);