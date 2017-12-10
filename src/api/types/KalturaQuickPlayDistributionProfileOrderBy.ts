

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaQuickPlayDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaQuickPlayDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaQuickPlayDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaQuickPlayDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaQuickPlayDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaQuickPlayDistributionProfileOrderBy',KalturaQuickPlayDistributionProfileOrderBy);