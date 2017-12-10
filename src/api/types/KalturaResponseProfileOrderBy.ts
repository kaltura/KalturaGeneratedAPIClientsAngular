

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaResponseProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaResponseProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaResponseProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaResponseProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaResponseProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaResponseProfileOrderBy',KalturaResponseProfileOrderBy);