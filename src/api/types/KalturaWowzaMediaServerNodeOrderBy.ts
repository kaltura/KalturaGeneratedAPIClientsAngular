

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaWowzaMediaServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaWowzaMediaServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaWowzaMediaServerNodeOrderBy('-createdAt');
	static heartbeatTimeAsc = new KalturaWowzaMediaServerNodeOrderBy('+heartbeatTime');
	static heartbeatTimeDesc = new KalturaWowzaMediaServerNodeOrderBy('-heartbeatTime');
	static updatedAtAsc = new KalturaWowzaMediaServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaWowzaMediaServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaWowzaMediaServerNodeOrderBy',KalturaWowzaMediaServerNodeOrderBy);