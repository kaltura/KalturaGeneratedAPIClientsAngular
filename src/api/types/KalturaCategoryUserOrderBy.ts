

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCategoryUserOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCategoryUserOrderBy('+createdAt');
	static createdAtDesc = new KalturaCategoryUserOrderBy('-createdAt');
	static updatedAtAsc = new KalturaCategoryUserOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCategoryUserOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCategoryUserOrderBy',KalturaCategoryUserOrderBy);