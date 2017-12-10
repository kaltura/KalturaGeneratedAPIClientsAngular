

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaConfigurableDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaConfigurableDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaConfigurableDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaConfigurableDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaConfigurableDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaConfigurableDistributionProfileOrderBy',KalturaConfigurableDistributionProfileOrderBy);