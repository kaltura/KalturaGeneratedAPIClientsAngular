

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSourceType extends KalturaObjectBase {
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

    static akamaiLive = new KalturaSourceType('29');
	static akamaiUniversalLive = new KalturaSourceType('31');
	static clip = new KalturaSourceType('35');
	static file = new KalturaSourceType('1');
	static kalturaRecordedLive = new KalturaSourceType('36');
	static lectureCapture = new KalturaSourceType('37');
	static limelightLive = new KalturaSourceType('limeLight.LIVE_STREAM');
	static liveChannel = new KalturaSourceType('33');
	static liveStream = new KalturaSourceType('32');
	static liveStreamOntextdataCaptions = new KalturaSourceType('42');
	static manualLiveStream = new KalturaSourceType('30');
	static recordedLive = new KalturaSourceType('34');
	static searchProvider = new KalturaSourceType('6');
	static url = new KalturaSourceType('5');
	static velocixLive = new KalturaSourceType('velocix.VELOCIX_LIVE');
	static webcam = new KalturaSourceType('2');
}
KalturaTypesFactory.registerType('KalturaSourceType',KalturaSourceType);