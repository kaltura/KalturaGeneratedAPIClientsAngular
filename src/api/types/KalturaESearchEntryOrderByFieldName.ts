

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

    static entryCreatedAt = new KalturaESearchEntryOrderByFieldName('created_at');
	static entryEndDate = new KalturaESearchEntryOrderByFieldName('end_date');
	static entryName = new KalturaESearchEntryOrderByFieldName('name.keyword');
	static entryStartDate = new KalturaESearchEntryOrderByFieldName('start_date');
	static entryUpdatedAt = new KalturaESearchEntryOrderByFieldName('updated_at');
	static entryViews = new KalturaESearchEntryOrderByFieldName('views');
	static entryVotes = new KalturaESearchEntryOrderByFieldName('votes');
}
KalturaTypesFactory.registerType('KalturaESearchEntryOrderByFieldName',KalturaESearchEntryOrderByFieldName);