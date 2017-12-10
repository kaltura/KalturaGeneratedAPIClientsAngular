

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaUserEntryExtendedStatus extends KalturaObjectBase {
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

    static playbackComplete = new KalturaUserEntryExtendedStatus('viewHistory.PLAYBACK_COMPLETE');
	static playbackStarted = new KalturaUserEntryExtendedStatus('viewHistory.PLAYBACK_STARTED');
	static viewed = new KalturaUserEntryExtendedStatus('viewHistory.VIEWED');
}
KalturaTypesFactory.registerType('KalturaUserEntryExtendedStatus',KalturaUserEntryExtendedStatus);