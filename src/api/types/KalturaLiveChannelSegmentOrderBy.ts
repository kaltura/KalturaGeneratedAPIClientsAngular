

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaLiveChannelSegmentOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaLiveChannelSegmentOrderBy('+createdAt');
	static createdAtDesc = new KalturaLiveChannelSegmentOrderBy('-createdAt');
	static startTimeAsc = new KalturaLiveChannelSegmentOrderBy('+startTime');
	static startTimeDesc = new KalturaLiveChannelSegmentOrderBy('-startTime');
	static updatedAtAsc = new KalturaLiveChannelSegmentOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaLiveChannelSegmentOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaLiveChannelSegmentOrderBy',KalturaLiveChannelSegmentOrderBy);