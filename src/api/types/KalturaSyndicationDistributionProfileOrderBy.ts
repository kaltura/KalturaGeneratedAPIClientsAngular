

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSyndicationDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaSyndicationDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaSyndicationDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaSyndicationDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaSyndicationDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaSyndicationDistributionProfileOrderBy',KalturaSyndicationDistributionProfileOrderBy);