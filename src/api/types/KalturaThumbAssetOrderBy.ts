

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaThumbAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaThumbAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaThumbAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaThumbAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaThumbAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaThumbAssetOrderBy('+size');
	static sizeDesc = new KalturaThumbAssetOrderBy('-size');
	static updatedAtAsc = new KalturaThumbAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaThumbAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaThumbAssetOrderBy',KalturaThumbAssetOrderBy);