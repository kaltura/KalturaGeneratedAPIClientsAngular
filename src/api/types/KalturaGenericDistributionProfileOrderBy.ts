

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGenericDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGenericDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaGenericDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaGenericDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGenericDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGenericDistributionProfileOrderBy',KalturaGenericDistributionProfileOrderBy);