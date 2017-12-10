

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAvnDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAvnDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaAvnDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaAvnDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAvnDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAvnDistributionProfileOrderBy',KalturaAvnDistributionProfileOrderBy);