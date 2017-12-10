

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTimedThumbAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaTimedThumbAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaTimedThumbAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaTimedThumbAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaTimedThumbAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaTimedThumbAssetOrderBy('+size');
	static sizeDesc = new KalturaTimedThumbAssetOrderBy('-size');
	static updatedAtAsc = new KalturaTimedThumbAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaTimedThumbAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaTimedThumbAssetOrderBy',KalturaTimedThumbAssetOrderBy);