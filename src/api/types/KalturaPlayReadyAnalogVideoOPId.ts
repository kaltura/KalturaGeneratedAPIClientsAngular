

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayReadyAnalogVideoOPId extends KalturaObjectBase {
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

    static agcAndColorStripe = new KalturaPlayReadyAnalogVideoOPId('C3FD11C6-F8B7-4D20-B008-1DB17D61F2DA');
	static bestEffortExplicitAnalogTv = new KalturaPlayReadyAnalogVideoOPId('225CD36F-F132-49EF-BA8C-C91EA28E4369');
	static explicitAnalogTv = new KalturaPlayReadyAnalogVideoOPId('2098DE8D-7DDD-4BAB-96C6-32EBB6FABEA3');
	static imageConstraintMonitor = new KalturaPlayReadyAnalogVideoOPId('D783A191-E083-4BAF-B2DA-E69F910B3772');
	static imageConstraintVideo = new KalturaPlayReadyAnalogVideoOPId('811C5110-46C8-4C6E-8163-C0482A15D47E');
}
KalturaTypesFactory.registerType('KalturaPlayReadyAnalogVideoOPId',KalturaPlayReadyAnalogVideoOPId);