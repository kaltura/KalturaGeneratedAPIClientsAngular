

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaGenericDistributionProviderActionOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaGenericDistributionProviderActionOrderBy('+createdAt');
	static createdAtDesc = new KalturaGenericDistributionProviderActionOrderBy('-createdAt');
	static updatedAtAsc = new KalturaGenericDistributionProviderActionOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaGenericDistributionProviderActionOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaGenericDistributionProviderActionOrderBy',KalturaGenericDistributionProviderActionOrderBy);