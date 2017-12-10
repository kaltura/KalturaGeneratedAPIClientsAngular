

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUserEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaUserEntryOrderBy('-createdAt');
	static updatedAtAsc = new KalturaUserEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUserEntryOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUserEntryOrderBy',KalturaUserEntryOrderBy);