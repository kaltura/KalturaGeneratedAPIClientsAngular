

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMediaServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMediaServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaMediaServerNodeOrderBy('-createdAt');
	static heartbeatTimeAsc = new KalturaMediaServerNodeOrderBy('+heartbeatTime');
	static heartbeatTimeDesc = new KalturaMediaServerNodeOrderBy('-heartbeatTime');
	static updatedAtAsc = new KalturaMediaServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMediaServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaMediaServerNodeOrderBy',KalturaMediaServerNodeOrderBy);