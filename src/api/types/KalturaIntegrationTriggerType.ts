

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaIntegrationTriggerType extends KalturaObjectBase {
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

    static bpmEventNotification = new KalturaIntegrationTriggerType('bpmEventNotificationIntegration.BpmEventNotification');
	static manual = new KalturaIntegrationTriggerType('1');
}
KalturaTypesFactory.registerType('KalturaIntegrationTriggerType',KalturaIntegrationTriggerType);