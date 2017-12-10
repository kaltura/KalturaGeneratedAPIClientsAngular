

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaApiParameterPermissionItemAction extends KalturaObjectBase {
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

    static insert = new KalturaApiParameterPermissionItemAction('insert');
	static read = new KalturaApiParameterPermissionItemAction('read');
	static update = new KalturaApiParameterPermissionItemAction('update');
	static usage = new KalturaApiParameterPermissionItemAction('all');
}
KalturaTypesFactory.registerType('KalturaApiParameterPermissionItemAction',KalturaApiParameterPermissionItemAction);