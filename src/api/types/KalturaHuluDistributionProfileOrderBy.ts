

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHuluDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaHuluDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaHuluDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaHuluDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaHuluDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaHuluDistributionProfileOrderBy',KalturaHuluDistributionProfileOrderBy);