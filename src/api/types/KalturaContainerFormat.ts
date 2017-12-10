

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaContainerFormat extends KalturaObjectBase {
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

    static applehttp = new KalturaContainerFormat('applehttp');
	static avi = new KalturaContainerFormat('avi');
	static bmp = new KalturaContainerFormat('bmp');
	static copy = new KalturaContainerFormat('copy');
	static flv = new KalturaContainerFormat('flv');
	static hls = new KalturaContainerFormat('hls');
	static isma = new KalturaContainerFormat('isma');
	static ismv = new KalturaContainerFormat('ismv');
	static jpg = new KalturaContainerFormat('jpg');
	static m2ts = new KalturaContainerFormat('m2ts');
	static m4v = new KalturaContainerFormat('m4v');
	static mkv = new KalturaContainerFormat('mkv');
	static mov = new KalturaContainerFormat('mov');
	static mp3 = new KalturaContainerFormat('mp3');
	static mp4 = new KalturaContainerFormat('mp4');
	static mpeg = new KalturaContainerFormat('mpeg');
	static mpegts = new KalturaContainerFormat('mpegts');
	static mxf = new KalturaContainerFormat('mxf');
	static ogg = new KalturaContainerFormat('ogg');
	static ogv = new KalturaContainerFormat('ogv');
	static pdf = new KalturaContainerFormat('pdf');
	static png = new KalturaContainerFormat('png');
	static swf = new KalturaContainerFormat('swf');
	static wav = new KalturaContainerFormat('wav');
	static webm = new KalturaContainerFormat('webm');
	static wma = new KalturaContainerFormat('wma');
	static wmv = new KalturaContainerFormat('wmv');
	static wvm = new KalturaContainerFormat('wvm');
	static _3gp = new KalturaContainerFormat('3gp');
}
KalturaTypesFactory.registerType('KalturaContainerFormat',KalturaContainerFormat);