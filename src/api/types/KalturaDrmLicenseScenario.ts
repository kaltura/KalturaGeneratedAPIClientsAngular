

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDrmLicenseScenario extends KalturaObjectBase {
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

    static protection = new KalturaDrmLicenseScenario('playReady.PROTECTION');
	static purchase = new KalturaDrmLicenseScenario('playReady.PURCHASE');
	static rental = new KalturaDrmLicenseScenario('playReady.RENTAL');
	static subscription = new KalturaDrmLicenseScenario('playReady.SUBSCRIPTION');
}
KalturaTypesFactory.registerType('KalturaDrmLicenseScenario',KalturaDrmLicenseScenario);