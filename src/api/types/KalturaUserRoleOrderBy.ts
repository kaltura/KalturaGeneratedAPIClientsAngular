

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserRoleOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUserRoleOrderBy('+createdAt');
	static createdAtDesc = new KalturaUserRoleOrderBy('-createdAt');
	static idAsc = new KalturaUserRoleOrderBy('+id');
	static idDesc = new KalturaUserRoleOrderBy('-id');
	static nameAsc = new KalturaUserRoleOrderBy('+name');
	static nameDesc = new KalturaUserRoleOrderBy('-name');
	static updatedAtAsc = new KalturaUserRoleOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUserRoleOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUserRoleOrderBy',KalturaUserRoleOrderBy);