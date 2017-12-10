

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy('+createdAt');
	static createdAtDesc = new KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy('-createdAt');
	static updatedAtAsc = new KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy',KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy);