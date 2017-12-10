

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMediaParserType extends KalturaObjectBase {
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

    static ffmpeg = new KalturaMediaParserType('1');
	static mediainfo = new KalturaMediaParserType('0');
}
KalturaTypesFactory.registerType('KalturaMediaParserType',KalturaMediaParserType);