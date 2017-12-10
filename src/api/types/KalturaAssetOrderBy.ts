

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaAssetOrderBy('+size');
	static sizeDesc = new KalturaAssetOrderBy('-size');
	static updatedAtAsc = new KalturaAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAssetOrderBy',KalturaAssetOrderBy);