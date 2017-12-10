

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlaybackProtocol extends KalturaObjectBase {
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

    static akamaiHd = new KalturaPlaybackProtocol('hdnetwork');
	static akamaiHds = new KalturaPlaybackProtocol('hdnetworkmanifest');
	static appleHttp = new KalturaPlaybackProtocol('applehttp');
	static appleHttpToMc = new KalturaPlaybackProtocol('applehttp_to_mc');
	static auto = new KalturaPlaybackProtocol('auto');
	static hds = new KalturaPlaybackProtocol('hds');
	static hls = new KalturaPlaybackProtocol('hls');
	static http = new KalturaPlaybackProtocol('http');
	static mpegDash = new KalturaPlaybackProtocol('mpegdash');
	static multicastSl = new KalturaPlaybackProtocol('multicast_silverlight');
	static rtmp = new KalturaPlaybackProtocol('rtmp');
	static rtsp = new KalturaPlaybackProtocol('rtsp');
	static silverLight = new KalturaPlaybackProtocol('sl');
	static url = new KalturaPlaybackProtocol('url');
}
KalturaTypesFactory.registerType('KalturaPlaybackProtocol',KalturaPlaybackProtocol);