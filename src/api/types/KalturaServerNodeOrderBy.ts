

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaServerNodeOrderBy('-createdAt');
	static heartbeatTimeAsc = new KalturaServerNodeOrderBy('+heartbeatTime');
	static heartbeatTimeDesc = new KalturaServerNodeOrderBy('-heartbeatTime');
	static updatedAtAsc = new KalturaServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaServerNodeOrderBy',KalturaServerNodeOrderBy);