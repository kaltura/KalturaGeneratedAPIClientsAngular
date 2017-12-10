

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryStatus extends KalturaObjectBase {
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

    static blocked = new KalturaEntryStatus('6');
	static deleted = new KalturaEntryStatus('3');
	static errorConverting = new KalturaEntryStatus('-1');
	static errorImporting = new KalturaEntryStatus('-2');
	static import = new KalturaEntryStatus('0');
	static infected = new KalturaEntryStatus('virusScan.Infected');
	static moderate = new KalturaEntryStatus('5');
	static noContent = new KalturaEntryStatus('7');
	static pending = new KalturaEntryStatus('4');
	static preconvert = new KalturaEntryStatus('1');
	static ready = new KalturaEntryStatus('2');
	static scanFailure = new KalturaEntryStatus('virusScan.ScanFailure');
}
KalturaTypesFactory.registerType('KalturaEntryStatus',KalturaEntryStatus);