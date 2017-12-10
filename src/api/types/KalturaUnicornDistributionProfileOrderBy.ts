

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUnicornDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaUnicornDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaUnicornDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaUnicornDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaUnicornDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaUnicornDistributionProfileOrderBy',KalturaUnicornDistributionProfileOrderBy);