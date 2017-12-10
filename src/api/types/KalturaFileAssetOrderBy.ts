

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFileAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaFileAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaFileAssetOrderBy('-createdAt');
	static updatedAtAsc = new KalturaFileAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaFileAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaFileAssetOrderBy',KalturaFileAssetOrderBy);