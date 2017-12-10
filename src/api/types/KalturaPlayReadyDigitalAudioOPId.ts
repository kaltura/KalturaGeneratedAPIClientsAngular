

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPlayReadyDigitalAudioOPId extends KalturaObjectBase {
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

    static scms = new KalturaPlayReadyDigitalAudioOPId('6D5CFA59-C250-4426-930E-FAC72C8FCFA6');
}
KalturaTypesFactory.registerType('KalturaPlayReadyDigitalAudioOPId',KalturaPlayReadyDigitalAudioOPId);