

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaQuizUserEntryOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaQuizUserEntryOrderBy('+createdAt');
	static createdAtDesc = new KalturaQuizUserEntryOrderBy('-createdAt');
	static updatedAtAsc = new KalturaQuizUserEntryOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaQuizUserEntryOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaQuizUserEntryOrderBy',KalturaQuizUserEntryOrderBy);