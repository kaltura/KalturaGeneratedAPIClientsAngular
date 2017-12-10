

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayReadyPlayEnablerType extends KalturaObjectBase {
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

    static airplay = new KalturaPlayReadyPlayEnablerType('5ABF0F0D-DC29-4B82-9982-FD8E57525BFC');
	static dtcp = new KalturaPlayReadyPlayEnablerType('D685030B-0F4F-43A6-BBAD-356F1EA0049A');
	static hdcpMiracast = new KalturaPlayReadyPlayEnablerType('A340C256-0941-4D4C-AD1D-0B6735C0CB24');
	static hdcpWivu = new KalturaPlayReadyPlayEnablerType('1B4542E3-B5CF-4C99-B3BA-829AF46C92F8');
	static helix = new KalturaPlayReadyPlayEnablerType('002F9772-38A0-43E5-9F79-0F6361DCC62A');
	static unknown = new KalturaPlayReadyPlayEnablerType('786627D8-C2A6-44BE-8F88-08AE255B01A');
	static unknown520 = new KalturaPlayReadyPlayEnablerType('B621D91F-EDCC-4035-8D4B-DC71760D43E9');
}
KalturaTypesFactory.registerType('KalturaPlayReadyPlayEnablerType',KalturaPlayReadyPlayEnablerType);