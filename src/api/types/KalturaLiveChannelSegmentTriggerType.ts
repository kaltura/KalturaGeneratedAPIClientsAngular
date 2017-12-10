

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelSegmentTriggerType extends KalturaObjectBase {
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

    static absoluteTime = new KalturaLiveChannelSegmentTriggerType('2');
	static channelRelative = new KalturaLiveChannelSegmentTriggerType('1');
	static segmentEndRelative = new KalturaLiveChannelSegmentTriggerType('4');
	static segmentStartRelative = new KalturaLiveChannelSegmentTriggerType('3');
}
KalturaTypesFactory.registerType('KalturaLiveChannelSegmentTriggerType',KalturaLiveChannelSegmentTriggerType);