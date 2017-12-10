

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

    static userCreatedAt = new KalturaESearchUserFieldName('created_at');
	static userEmail = new KalturaESearchUserFieldName('email');
	static userFirstName = new KalturaESearchUserFieldName('first_name');
	static userGroupIds = new KalturaESearchUserFieldName('group_ids');
	static userLastName = new KalturaESearchUserFieldName('last_name');
	static userPermissionNames = new KalturaESearchUserFieldName('permission_names');
	static userRoleIds = new KalturaESearchUserFieldName('role_ids');
	static userScreenName = new KalturaESearchUserFieldName('screen_name');
	static userTags = new KalturaESearchUserFieldName('tags');
	static userType = new KalturaESearchUserFieldName('kuser_type');
	static userUpdatedAt = new KalturaESearchUserFieldName('updated_at');
}
KalturaTypesFactory.registerType('KalturaESearchUserFieldName',KalturaESearchUserFieldName);