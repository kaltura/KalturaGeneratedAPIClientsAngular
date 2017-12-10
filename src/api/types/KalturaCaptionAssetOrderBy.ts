

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCaptionAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaCaptionAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaCaptionAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaCaptionAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaCaptionAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaCaptionAssetOrderBy('+size');
	static sizeDesc = new KalturaCaptionAssetOrderBy('-size');
	static updatedAtAsc = new KalturaCaptionAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaCaptionAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaCaptionAssetOrderBy',KalturaCaptionAssetOrderBy);