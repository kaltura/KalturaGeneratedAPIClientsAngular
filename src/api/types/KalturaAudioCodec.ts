

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAudioCodec extends KalturaObjectBase {
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

    static aac = new KalturaAudioCodec('aac');
	static aache = new KalturaAudioCodec('aache');
	static ac3 = new KalturaAudioCodec('ac3');
	static amrnb = new KalturaAudioCodec('amrnb');
	static copy = new KalturaAudioCodec('copy');
	static eac3 = new KalturaAudioCodec('eac3');
	static mp3 = new KalturaAudioCodec('mp3');
	static mpeg2 = new KalturaAudioCodec('mpeg2');
	static none = new KalturaAudioCodec('');
	static pcm = new KalturaAudioCodec('pcm');
	static vorbis = new KalturaAudioCodec('vorbis');
	static wma = new KalturaAudioCodec('wma');
	static wmapro = new KalturaAudioCodec('wmapro');
}
KalturaTypesFactory.registerType('KalturaAudioCodec',KalturaAudioCodec);