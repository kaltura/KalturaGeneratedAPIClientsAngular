

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEntryType extends KalturaObjectBase {
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

    static automatic = new KalturaEntryType('-1');
	static data = new KalturaEntryType('6');
	static document = new KalturaEntryType('10');
	static externalMedia = new KalturaEntryType('externalMedia.externalMedia');
	static liveChannel = new KalturaEntryType('8');
	static liveStream = new KalturaEntryType('7');
	static mediaClip = new KalturaEntryType('1');
	static mix = new KalturaEntryType('2');
	static playlist = new KalturaEntryType('5');
}
KalturaTypesFactory.registerType('KalturaEntryType',KalturaEntryType);