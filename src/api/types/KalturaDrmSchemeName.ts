

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDrmSchemeName extends KalturaObjectBase {
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

    static fairplay = new KalturaDrmSchemeName('fairplay.FAIRPLAY');
	static playready = new KalturaDrmSchemeName('playReady.PLAYREADY');
	static playreadyCenc = new KalturaDrmSchemeName('drm.PLAYREADY_CENC');
	static widevine = new KalturaDrmSchemeName('widevine.WIDEVINE');
	static widevineCenc = new KalturaDrmSchemeName('drm.WIDEVINE_CENC');
}
KalturaTypesFactory.registerType('KalturaDrmSchemeName',KalturaDrmSchemeName);