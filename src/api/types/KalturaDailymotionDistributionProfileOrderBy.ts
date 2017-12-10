

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDailymotionDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDailymotionDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaDailymotionDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDailymotionDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDailymotionDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDailymotionDistributionProfileOrderBy',KalturaDailymotionDistributionProfileOrderBy);