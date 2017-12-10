

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileGenericSilverLightOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileGenericSilverLightOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileGenericSilverLightOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileGenericSilverLightOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileGenericSilverLightOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileGenericSilverLightOrderBy',KalturaDeliveryProfileGenericSilverLightOrderBy);