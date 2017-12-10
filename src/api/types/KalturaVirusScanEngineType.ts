

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaVirusScanEngineType extends KalturaObjectBase {
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

    static clamavScanEngine = new KalturaVirusScanEngineType('clamAVScanEngine.ClamAV');
	static symantecScanDirectEngine = new KalturaVirusScanEngineType('symantecScanEngine.SymantecScanDirectEngine');
	static symantecScanEngine = new KalturaVirusScanEngineType('symantecScanEngine.SymantecScanEngine');
	static symantecScanJavaEngine = new KalturaVirusScanEngineType('symantecScanEngine.SymantecScanJavaEngine');
}
KalturaTypesFactory.registerType('KalturaVirusScanEngineType',KalturaVirusScanEngineType);