

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEntryServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaEntryServerNodeOrderBy('-createdAt');
	static updatedAtAsc = new KalturaEntryServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEntryServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEntryServerNodeOrderBy',KalturaEntryServerNodeOrderBy);