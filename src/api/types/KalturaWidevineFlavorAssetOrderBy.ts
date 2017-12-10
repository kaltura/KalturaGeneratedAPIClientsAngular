

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaWidevineFlavorAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaWidevineFlavorAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaWidevineFlavorAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaWidevineFlavorAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaWidevineFlavorAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaWidevineFlavorAssetOrderBy('+size');
	static sizeDesc = new KalturaWidevineFlavorAssetOrderBy('-size');
	static updatedAtAsc = new KalturaWidevineFlavorAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaWidevineFlavorAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaWidevineFlavorAssetOrderBy',KalturaWidevineFlavorAssetOrderBy);