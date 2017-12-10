

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaTranscriptProviderType extends KalturaObjectBase {
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

    static cielo24 = new KalturaTranscriptProviderType('cielo24.Cielo24');
	static voicebase = new KalturaTranscriptProviderType('voicebase.Voicebase');
}
KalturaTypesFactory.registerType('KalturaTranscriptProviderType',KalturaTranscriptProviderType);