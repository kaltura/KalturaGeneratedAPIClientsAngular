

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetroPcsDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaMetroPcsDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaMetroPcsDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaMetroPcsDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaMetroPcsDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaMetroPcsDistributionProfileOrderBy',KalturaMetroPcsDistributionProfileOrderBy);