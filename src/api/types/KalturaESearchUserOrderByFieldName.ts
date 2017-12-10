

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchUserOrderByFieldName extends KalturaObjectBase {
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

    static userCreatedAt = new KalturaESearchUserOrderByFieldName('created_at');
	static userUpdatedAt = new KalturaESearchUserOrderByFieldName('updated_at');
}
KalturaTypesFactory.registerType('KalturaESearchUserOrderByFieldName',KalturaESearchUserOrderByFieldName);