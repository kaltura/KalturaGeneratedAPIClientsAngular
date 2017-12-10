

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaIntegrationProviderType extends KalturaObjectBase {
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

    static cielo24 = new KalturaIntegrationProviderType('cielo24.Cielo24');
	static voicebase = new KalturaIntegrationProviderType('voicebase.Voicebase');
}
KalturaTypesFactory.registerType('KalturaIntegrationProviderType',KalturaIntegrationProviderType);