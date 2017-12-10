

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaLiveAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaLiveAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaLiveAssetOrderBy('+size');
	static sizeDesc = new KalturaLiveAssetOrderBy('-size');
	static updatedAtAsc = new KalturaLiveAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLiveAssetOrderBy',KalturaLiveAssetOrderBy);