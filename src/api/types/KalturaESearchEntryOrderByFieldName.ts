

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchEntryOrderByFieldName extends KalturaObjectBase {
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

    static createdAt = new KalturaESearchEntryOrderByFieldName('created_at');
	static endDate = new KalturaESearchEntryOrderByFieldName('end_date');
	static _name = new KalturaESearchEntryOrderByFieldName('name');
	static startDate = new KalturaESearchEntryOrderByFieldName('start_date');
	static updatedAt = new KalturaESearchEntryOrderByFieldName('updated_at');
	static views = new KalturaESearchEntryOrderByFieldName('views');
	static votes = new KalturaESearchEntryOrderByFieldName('votes');
}
KalturaTypesFactory.registerType('KalturaESearchEntryOrderByFieldName',KalturaESearchEntryOrderByFieldName);