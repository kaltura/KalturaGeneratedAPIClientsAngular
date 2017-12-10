

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPermissionOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPermissionOrderBy('+createdAt');
	static createdAtDesc = new KalturaPermissionOrderBy('-createdAt');
	static idAsc = new KalturaPermissionOrderBy('+id');
	static idDesc = new KalturaPermissionOrderBy('-id');
	static nameAsc = new KalturaPermissionOrderBy('+name');
	static nameDesc = new KalturaPermissionOrderBy('-name');
	static updatedAtAsc = new KalturaPermissionOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPermissionOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaPermissionOrderBy',KalturaPermissionOrderBy);