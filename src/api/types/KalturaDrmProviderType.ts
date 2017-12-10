

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDrmProviderType extends KalturaObjectBase {
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

    static cenc = new KalturaDrmProviderType('1');
	static fairplay = new KalturaDrmProviderType('fairplay.FAIRPLAY');
	static playReady = new KalturaDrmProviderType('playReady.PLAY_READY');
	static widevine = new KalturaDrmProviderType('widevine.WIDEVINE');
}
KalturaTypesFactory.registerType('KalturaDrmProviderType',KalturaDrmProviderType);