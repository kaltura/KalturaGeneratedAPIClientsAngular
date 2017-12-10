

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAmazonS3StorageProfileFilesPermissionLevel extends KalturaObjectBase {
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

    static aclAuthenticatedRead = new KalturaAmazonS3StorageProfileFilesPermissionLevel('authenticated-read');
	static aclPrivate = new KalturaAmazonS3StorageProfileFilesPermissionLevel('private');
	static aclPublicRead = new KalturaAmazonS3StorageProfileFilesPermissionLevel('public-read');
	static aclPublicReadWrite = new KalturaAmazonS3StorageProfileFilesPermissionLevel('public-read-write');
}
KalturaTypesFactory.registerType('KalturaAmazonS3StorageProfileFilesPermissionLevel',KalturaAmazonS3StorageProfileFilesPermissionLevel);