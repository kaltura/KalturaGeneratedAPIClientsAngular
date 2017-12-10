

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventNotificationTemplateType extends KalturaObjectBase {
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

    static bpmAbort = new KalturaEventNotificationTemplateType('businessProcessNotification.BusinessProcessAbort');
	static bpmSignal = new KalturaEventNotificationTemplateType('businessProcessNotification.BusinessProcessSignal');
	static bpmStart = new KalturaEventNotificationTemplateType('businessProcessNotification.BusinessProcessStart');
	static email = new KalturaEventNotificationTemplateType('emailNotification.Email');
	static http = new KalturaEventNotificationTemplateType('httpNotification.Http');
	static push = new KalturaEventNotificationTemplateType('pushNotification.Push');
}
KalturaTypesFactory.registerType('KalturaEventNotificationTemplateType',KalturaEventNotificationTemplateType);