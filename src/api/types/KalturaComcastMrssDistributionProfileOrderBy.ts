

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaComcastMrssDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaComcastMrssDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaComcastMrssDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaComcastMrssDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaComcastMrssDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaComcastMrssDistributionProfileOrderBy',KalturaComcastMrssDistributionProfileOrderBy);