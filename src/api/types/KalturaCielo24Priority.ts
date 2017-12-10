

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCielo24Priority extends KalturaObjectBase {
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

    static priority = new KalturaCielo24Priority('PRIORITY');
	static standard = new KalturaCielo24Priority('STANDARD');
}
KalturaTypesFactory.registerType('KalturaCielo24Priority',KalturaCielo24Priority);