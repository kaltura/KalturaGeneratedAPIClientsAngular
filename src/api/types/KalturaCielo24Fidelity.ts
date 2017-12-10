

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCielo24Fidelity extends KalturaObjectBase {
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

    static mechanical = new KalturaCielo24Fidelity('MECHANICAL');
	static premium = new KalturaCielo24Fidelity('PREMIUM');
	static professional = new KalturaCielo24Fidelity('PROFESSIONAL');
}
KalturaTypesFactory.registerType('KalturaCielo24Fidelity',KalturaCielo24Fidelity);