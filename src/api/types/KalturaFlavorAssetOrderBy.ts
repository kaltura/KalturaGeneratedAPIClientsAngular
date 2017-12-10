

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFlavorAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFlavorAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaFlavorAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaFlavorAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaFlavorAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaFlavorAssetOrderBy('+size');
	static sizeDesc = new KalturaFlavorAssetOrderBy('-size');
	static updatedAtAsc = new KalturaFlavorAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFlavorAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFlavorAssetOrderBy',KalturaFlavorAssetOrderBy);