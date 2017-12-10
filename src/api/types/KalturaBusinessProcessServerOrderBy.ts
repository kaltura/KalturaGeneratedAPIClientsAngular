

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessServerOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBusinessProcessServerOrderBy('+createdAt');
	static createdAtDesc = new KalturaBusinessProcessServerOrderBy('-createdAt');
	static updatedAtAsc = new KalturaBusinessProcessServerOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBusinessProcessServerOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessServerOrderBy',KalturaBusinessProcessServerOrderBy);