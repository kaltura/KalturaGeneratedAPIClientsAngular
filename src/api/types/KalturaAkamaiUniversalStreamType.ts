

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAkamaiUniversalStreamType extends KalturaObjectBase {
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

    static hdIphoneIpadLive = new KalturaAkamaiUniversalStreamType('HD iPhone/iPad Live');
	static universalStreamingLive = new KalturaAkamaiUniversalStreamType('Universal Streaming Live');
}
KalturaTypesFactory.registerType('KalturaAkamaiUniversalStreamType',KalturaAkamaiUniversalStreamType);