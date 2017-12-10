

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFacebookDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFacebookDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaFacebookDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaFacebookDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFacebookDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFacebookDistributionProfileOrderBy',KalturaFacebookDistributionProfileOrderBy);