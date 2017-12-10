

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAttachmentAssetOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAttachmentAssetOrderBy('+createdAt');
	static createdAtDesc = new KalturaAttachmentAssetOrderBy('-createdAt');
	static deletedAtAsc = new KalturaAttachmentAssetOrderBy('+deletedAt');
	static deletedAtDesc = new KalturaAttachmentAssetOrderBy('-deletedAt');
	static sizeAsc = new KalturaAttachmentAssetOrderBy('+size');
	static sizeDesc = new KalturaAttachmentAssetOrderBy('-size');
	static updatedAtAsc = new KalturaAttachmentAssetOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAttachmentAssetOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAttachmentAssetOrderBy',KalturaAttachmentAssetOrderBy);