

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFreewheelGenericDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFreewheelGenericDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaFreewheelGenericDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaFreewheelGenericDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFreewheelGenericDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFreewheelGenericDistributionProfileOrderBy',KalturaFreewheelGenericDistributionProfileOrderBy);