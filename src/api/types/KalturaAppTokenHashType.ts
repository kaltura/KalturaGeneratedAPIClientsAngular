

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAppTokenHashType extends KalturaObjectBase {
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

    static md5 = new KalturaAppTokenHashType('MD5');
	static sha1 = new KalturaAppTokenHashType('SHA1');
	static sha256 = new KalturaAppTokenHashType('SHA256');
	static sha512 = new KalturaAppTokenHashType('SHA512');
}
KalturaTypesFactory.registerType('KalturaAppTokenHashType',KalturaAppTokenHashType);