

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFileAssetStatus extends KalturaObjectBase {
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

    static deleted = new KalturaFileAssetStatus('3');
	static error = new KalturaFileAssetStatus('4');
	static pending = new KalturaFileAssetStatus('0');
	static ready = new KalturaFileAssetStatus('2');
	static uploading = new KalturaFileAssetStatus('1');
}
KalturaTypesFactory.registerType('KalturaFileAssetStatus',KalturaFileAssetStatus);