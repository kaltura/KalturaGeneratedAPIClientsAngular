

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCategoryEntryFieldName extends KalturaObjectBase {
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

    static ancestorId = new KalturaESearchCategoryEntryFieldName('ancestor_id');
	static ancestorName = new KalturaESearchCategoryEntryFieldName('ancestor_name');
	static fullIds = new KalturaESearchCategoryEntryFieldName('full_ids');
	static id = new KalturaESearchCategoryEntryFieldName('id');
	static _name = new KalturaESearchCategoryEntryFieldName('name');
}
KalturaTypesFactory.registerType('KalturaESearchCategoryEntryFieldName',KalturaESearchCategoryEntryFieldName);