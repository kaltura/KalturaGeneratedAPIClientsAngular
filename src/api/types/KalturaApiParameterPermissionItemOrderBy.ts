

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaApiParameterPermissionItemOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaApiParameterPermissionItemOrderBy('+createdAt');
	static createdAtDesc = new KalturaApiParameterPermissionItemOrderBy('-createdAt');
	static idAsc = new KalturaApiParameterPermissionItemOrderBy('+id');
	static idDesc = new KalturaApiParameterPermissionItemOrderBy('-id');
	static updatedAtAsc = new KalturaApiParameterPermissionItemOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaApiParameterPermissionItemOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaApiParameterPermissionItemOrderBy',KalturaApiParameterPermissionItemOrderBy);