

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDrmLicenseType extends KalturaObjectBase {
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

    static nonPersistent = new KalturaDrmLicenseType('playReady.NON_PERSISTENT');
	static persistent = new KalturaDrmLicenseType('playReady.PERSISTENT');
}
KalturaTypesFactory.registerType('KalturaDrmLicenseType',KalturaDrmLicenseType);