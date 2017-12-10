

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYahooDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaYahooDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaYahooDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaYahooDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaYahooDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaYahooDistributionProfileOrderBy',KalturaYahooDistributionProfileOrderBy);