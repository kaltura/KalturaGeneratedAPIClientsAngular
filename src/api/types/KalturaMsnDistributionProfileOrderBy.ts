

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMsnDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMsnDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaMsnDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaMsnDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMsnDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaMsnDistributionProfileOrderBy',KalturaMsnDistributionProfileOrderBy);