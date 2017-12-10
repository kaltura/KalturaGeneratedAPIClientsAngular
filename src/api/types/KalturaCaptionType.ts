

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCaptionType extends KalturaObjectBase {
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

    static cap = new KalturaCaptionType('4');
	static dfxp = new KalturaCaptionType('2');
	static srt = new KalturaCaptionType('1');
	static webvtt = new KalturaCaptionType('3');
}
KalturaTypesFactory.registerType('KalturaCaptionType',KalturaCaptionType);