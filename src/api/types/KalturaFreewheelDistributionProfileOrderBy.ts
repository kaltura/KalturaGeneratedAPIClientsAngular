

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFreewheelDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFreewheelDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaFreewheelDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaFreewheelDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFreewheelDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFreewheelDistributionProfileOrderBy',KalturaFreewheelDistributionProfileOrderBy);