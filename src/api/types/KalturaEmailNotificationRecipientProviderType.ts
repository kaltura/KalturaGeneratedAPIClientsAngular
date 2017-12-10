

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEmailNotificationRecipientProviderType extends KalturaObjectBase {
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

    static category = new KalturaEmailNotificationRecipientProviderType('2');
	static staticList = new KalturaEmailNotificationRecipientProviderType('1');
	static user = new KalturaEmailNotificationRecipientProviderType('3');
}
KalturaTypesFactory.registerType('KalturaEmailNotificationRecipientProviderType',KalturaEmailNotificationRecipientProviderType);