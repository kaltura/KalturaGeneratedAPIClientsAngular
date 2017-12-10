

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGenericDistributionProviderOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGenericDistributionProviderOrderBy('+createdAt');
	static createdAtDesc = new KalturaGenericDistributionProviderOrderBy('-createdAt');
	static updatedAtAsc = new KalturaGenericDistributionProviderOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGenericDistributionProviderOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGenericDistributionProviderOrderBy',KalturaGenericDistributionProviderOrderBy);