

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDistributionProfileOrderBy',KalturaDistributionProfileOrderBy);