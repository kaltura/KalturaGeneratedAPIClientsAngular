

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFtpDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFtpDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaFtpDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaFtpDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFtpDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFtpDistributionProfileOrderBy',KalturaFtpDistributionProfileOrderBy);