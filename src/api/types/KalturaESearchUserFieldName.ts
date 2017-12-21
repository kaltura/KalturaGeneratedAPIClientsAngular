

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchUserFieldName extends KalturaObjectBase {
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

    static createdAt = new KalturaESearchUserFieldName('created_at');
	static email = new KalturaESearchUserFieldName('email');
	static firstName = new KalturaESearchUserFieldName('first_name');
	static groupIds = new KalturaESearchUserFieldName('group_ids');
	static lastName = new KalturaESearchUserFieldName('last_name');
	static permissionNames = new KalturaESearchUserFieldName('permission_names');
	static roleIds = new KalturaESearchUserFieldName('role_ids');
	static screenName = new KalturaESearchUserFieldName('screen_name');
	static tags = new KalturaESearchUserFieldName('tags');
	static type = new KalturaESearchUserFieldName('user_type');
	static updatedAt = new KalturaESearchUserFieldName('updated_at');
}
KalturaTypesFactory.registerType('KalturaESearchUserFieldName',KalturaESearchUserFieldName);