

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaDeliveryProfileType extends KalturaObjectBase {
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

    static akamaiHd = new KalturaDeliveryProfileType('12');
	static akamaiHds = new KalturaDeliveryProfileType('13');
	static akamaiHlsDirect = new KalturaDeliveryProfileType('10');
	static akamaiHlsManifest = new KalturaDeliveryProfileType('11');
	static akamaiHttp = new KalturaDeliveryProfileType('14');
	static akamaiRtmp = new KalturaDeliveryProfileType('15');
	static akamaiRtsp = new KalturaDeliveryProfileType('16');
	static akamaiSs = new KalturaDeliveryProfileType('17');
	static appleHttp = new KalturaDeliveryProfileType('1');
	static edgeCastHttp = new KalturaDeliveryProfileType('edgeCast.EDGE_CAST_HTTP');
	static edgeCastRtmp = new KalturaDeliveryProfileType('edgeCast.EDGE_CAST_RTMP');
	static genericHds = new KalturaDeliveryProfileType('23');
	static genericHdsManifest = new KalturaDeliveryProfileType('26');
	static genericHls = new KalturaDeliveryProfileType('21');
	static genericHlsManifest = new KalturaDeliveryProfileType('25');
	static genericHttp = new KalturaDeliveryProfileType('24');
	static genericRtmp = new KalturaDeliveryProfileType('28');
	static genericSs = new KalturaDeliveryProfileType('27');
	static hds = new KalturaDeliveryProfileType('3');
	static http = new KalturaDeliveryProfileType('4');
	static kontikiHttp = new KalturaDeliveryProfileType('kontiki.KONTIKI_HTTP');
	static level3Hls = new KalturaDeliveryProfileType('31');
	static level3Http = new KalturaDeliveryProfileType('34');
	static level3Rtmp = new KalturaDeliveryProfileType('35');
	static limelightHttp = new KalturaDeliveryProfileType('44');
	static limelightRtmp = new KalturaDeliveryProfileType('45');
	static liveAkamaiHds = new KalturaDeliveryProfileType('1013');
	static liveDash = new KalturaDeliveryProfileType('1003');
	static liveHds = new KalturaDeliveryProfileType('1002');
	static liveHls = new KalturaDeliveryProfileType('1001');
	static liveHlsToMulticast = new KalturaDeliveryProfileType('1006');
	static livePackagerDash = new KalturaDeliveryProfileType('1009');
	static livePackagerHds = new KalturaDeliveryProfileType('1008');
	static livePackagerHls = new KalturaDeliveryProfileType('1007');
	static livePackagerMss = new KalturaDeliveryProfileType('1010');
	static liveRtmp = new KalturaDeliveryProfileType('1005');
	static localPathAppleHttp = new KalturaDeliveryProfileType('51');
	static localPathHds = new KalturaDeliveryProfileType('53');
	static localPathHttp = new KalturaDeliveryProfileType('54');
	static localPathRtmp = new KalturaDeliveryProfileType('55');
	static rtmp = new KalturaDeliveryProfileType('5');
	static rtsp = new KalturaDeliveryProfileType('6');
	static silverLight = new KalturaDeliveryProfileType('7');
	static velocixHds = new KalturaDeliveryProfileType('velocix.VELOCIX_HDS');
	static velocixHls = new KalturaDeliveryProfileType('velocix.VELOCIX_HLS');
	static vodPackagerDash = new KalturaDeliveryProfileType('68');
	static vodPackagerHds = new KalturaDeliveryProfileType('63');
	static vodPackagerHls = new KalturaDeliveryProfileType('61');
	static vodPackagerHlsManifest = new KalturaDeliveryProfileType('69');
	static vodPackagerMss = new KalturaDeliveryProfileType('67');
}
KalturaTypesFactory.registerType('KalturaDeliveryProfileType',KalturaDeliveryProfileType);