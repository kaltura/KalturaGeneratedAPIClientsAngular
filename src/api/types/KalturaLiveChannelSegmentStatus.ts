

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelSegmentStatus extends KalturaObjectBase {
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

    static active = new KalturaLiveChannelSegmentStatus('2');
	static deleted = new KalturaLiveChannelSegmentStatus('3');
}
KalturaTypesFactory.registerType('KalturaLiveChannelSegmentStatus',KalturaLiveChannelSegmentStatus);