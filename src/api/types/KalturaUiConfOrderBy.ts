

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUiConfOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUiConfOrderBy('+createdAt');
	static createdAtDesc = new KalturaUiConfOrderBy('-createdAt');
	static updatedAtAsc = new KalturaUiConfOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUiConfOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUiConfOrderBy',KalturaUiConfOrderBy);