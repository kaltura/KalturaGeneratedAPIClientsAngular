

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaStorageProfileProtocol extends KalturaObjectBase {
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

    static ftp = new KalturaStorageProfileProtocol('1');
	static kalturaDc = new KalturaStorageProfileProtocol('0');
	static kontiki = new KalturaStorageProfileProtocol('kontiki.KONTIKI');
	static local = new KalturaStorageProfileProtocol('7');
	static s3 = new KalturaStorageProfileProtocol('6');
	static scp = new KalturaStorageProfileProtocol('2');
	static sftp = new KalturaStorageProfileProtocol('3');
}
KalturaTypesFactory.registerType('KalturaStorageProfileProtocol',KalturaStorageProfileProtocol);