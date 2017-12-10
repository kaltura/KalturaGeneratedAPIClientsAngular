

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDropFolderType extends KalturaObjectBase {
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

    static feed = new KalturaDropFolderType('FeedDropFolder.FEED');
	static ftp = new KalturaDropFolderType('2');
	static local = new KalturaDropFolderType('1');
	static s3 = new KalturaDropFolderType('6');
	static scp = new KalturaDropFolderType('3');
	static sftp = new KalturaDropFolderType('4');
	static webex = new KalturaDropFolderType('WebexDropFolder.WEBEX');
}
KalturaTypesFactory.registerType('KalturaDropFolderType',KalturaDropFolderType);