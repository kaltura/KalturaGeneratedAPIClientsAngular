

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHttpNotificationCertificateType extends KalturaObjectBase {
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

    static der = new KalturaHttpNotificationCertificateType('DER');
	static eng = new KalturaHttpNotificationCertificateType('ENG');
	static pem = new KalturaHttpNotificationCertificateType('PEM');
}
KalturaTypesFactory.registerType('KalturaHttpNotificationCertificateType',KalturaHttpNotificationCertificateType);