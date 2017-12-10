

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryDistributionOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEntryDistributionOrderBy('+createdAt');
	static createdAtDesc = new KalturaEntryDistributionOrderBy('-createdAt');
	static submittedAtAsc = new KalturaEntryDistributionOrderBy('+submittedAt');
	static submittedAtDesc = new KalturaEntryDistributionOrderBy('-submittedAt');
	static sunriseAsc = new KalturaEntryDistributionOrderBy('+sunrise');
	static sunriseDesc = new KalturaEntryDistributionOrderBy('-sunrise');
	static sunsetAsc = new KalturaEntryDistributionOrderBy('+sunset');
	static sunsetDesc = new KalturaEntryDistributionOrderBy('-sunset');
	static updatedAtAsc = new KalturaEntryDistributionOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEntryDistributionOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEntryDistributionOrderBy',KalturaEntryDistributionOrderBy);