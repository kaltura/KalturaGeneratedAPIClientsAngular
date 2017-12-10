

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaVideoCodec extends KalturaObjectBase {
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

    static apch = new KalturaVideoCodec('apch');
	static apcn = new KalturaVideoCodec('apcn');
	static apco = new KalturaVideoCodec('apco');
	static apcs = new KalturaVideoCodec('apcs');
	static copy = new KalturaVideoCodec('copy');
	static dnxhd = new KalturaVideoCodec('dnxhd');
	static dv = new KalturaVideoCodec('dv');
	static flv = new KalturaVideoCodec('flv');
	static h263 = new KalturaVideoCodec('h263');
	static h264 = new KalturaVideoCodec('h264');
	static h264b = new KalturaVideoCodec('h264b');
	static h264h = new KalturaVideoCodec('h264h');
	static h264m = new KalturaVideoCodec('h264m');
	static h265 = new KalturaVideoCodec('h265');
	static mpeg2 = new KalturaVideoCodec('mpeg2');
	static mpeg4 = new KalturaVideoCodec('mpeg4');
	static none = new KalturaVideoCodec('');
	static theora = new KalturaVideoCodec('theora');
	static vp6 = new KalturaVideoCodec('vp6');
	static vp8 = new KalturaVideoCodec('vp8');
	static vp9 = new KalturaVideoCodec('vp9');
	static wmv2 = new KalturaVideoCodec('wmv2');
	static wmv3 = new KalturaVideoCodec('wmv3');
	static wvc1a = new KalturaVideoCodec('wvc1a');
}
KalturaTypesFactory.registerType('KalturaVideoCodec',KalturaVideoCodec);