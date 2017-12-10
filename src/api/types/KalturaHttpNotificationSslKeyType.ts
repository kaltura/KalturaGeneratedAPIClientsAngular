

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHttpNotificationSslKeyType extends KalturaObjectBase {
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

    static der = new KalturaHttpNotificationSslKeyType('DER');
	static eng = new KalturaHttpNotificationSslKeyType('ENG');
	static pem = new KalturaHttpNotificationSslKeyType('PEM');
}
KalturaTypesFactory.registerType('KalturaHttpNotificationSslKeyType',KalturaHttpNotificationSslKeyType);