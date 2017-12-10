

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaIdeticDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaIdeticDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaIdeticDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaIdeticDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaIdeticDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaIdeticDistributionProfileOrderBy',KalturaIdeticDistributionProfileOrderBy);