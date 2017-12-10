

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAppTokenOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAppTokenOrderBy('+createdAt');
	static createdAtDesc = new KalturaAppTokenOrderBy('-createdAt');
	static updatedAtAsc = new KalturaAppTokenOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAppTokenOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAppTokenOrderBy',KalturaAppTokenOrderBy);