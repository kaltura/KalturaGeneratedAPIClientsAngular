

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaApiActionPermissionItemOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaApiActionPermissionItemOrderBy('+createdAt');
	static createdAtDesc = new KalturaApiActionPermissionItemOrderBy('-createdAt');
	static idAsc = new KalturaApiActionPermissionItemOrderBy('+id');
	static idDesc = new KalturaApiActionPermissionItemOrderBy('-id');
	static updatedAtAsc = new KalturaApiActionPermissionItemOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaApiActionPermissionItemOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaApiActionPermissionItemOrderBy',KalturaApiActionPermissionItemOrderBy);