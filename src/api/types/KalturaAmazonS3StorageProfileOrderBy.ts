

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAmazonS3StorageProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaAmazonS3StorageProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaAmazonS3StorageProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaAmazonS3StorageProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaAmazonS3StorageProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaAmazonS3StorageProfileOrderBy',KalturaAmazonS3StorageProfileOrderBy);