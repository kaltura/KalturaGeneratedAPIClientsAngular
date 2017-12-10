

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDoubleClickDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDoubleClickDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaDoubleClickDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDoubleClickDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDoubleClickDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDoubleClickDistributionProfileOrderBy',KalturaDoubleClickDistributionProfileOrderBy);