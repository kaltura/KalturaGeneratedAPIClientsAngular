

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAdminUserOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAdminUserOrderBy('+createdAt');
	static createdAtDesc = new KalturaAdminUserOrderBy('-createdAt');
	static idAsc = new KalturaAdminUserOrderBy('+id');
	static idDesc = new KalturaAdminUserOrderBy('-id');
}
KalturaTypesFactory.registerType('KalturaAdminUserOrderBy',KalturaAdminUserOrderBy);