

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTranscriptAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaTranscriptAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaTranscriptAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaTranscriptAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaTranscriptAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaTranscriptAssetOrderBy('+size');
	static sizeDesc = new KalturaTranscriptAssetOrderBy('-size');
	static updatedAtAsc = new KalturaTranscriptAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaTranscriptAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaTranscriptAssetOrderBy',KalturaTranscriptAssetOrderBy);