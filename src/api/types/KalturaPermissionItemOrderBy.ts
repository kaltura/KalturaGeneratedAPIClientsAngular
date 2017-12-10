

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPermissionItemOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPermissionItemOrderBy('+createdAt');
	static createdAtDesc = new KalturaPermissionItemOrderBy('-createdAt');
	static idAsc = new KalturaPermissionItemOrderBy('+id');
	static idDesc = new KalturaPermissionItemOrderBy('-id');
	static updatedAtAsc = new KalturaPermissionItemOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPermissionItemOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaPermissionItemOrderBy',KalturaPermissionItemOrderBy);