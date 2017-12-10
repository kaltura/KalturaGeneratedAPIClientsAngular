

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventNotificationEventType extends KalturaObjectBase {
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

    static batchJobStatus = new KalturaEventNotificationEventType('1');
	static integrationJobClosed = new KalturaEventNotificationEventType('integrationEventNotifications.INTEGRATION_JOB_CLOSED');
	static objectAdded = new KalturaEventNotificationEventType('2');
	static objectChanged = new KalturaEventNotificationEventType('3');
	static objectCopied = new KalturaEventNotificationEventType('4');
	static objectCreated = new KalturaEventNotificationEventType('5');
	static objectDataChanged = new KalturaEventNotificationEventType('6');
	static objectDeleted = new KalturaEventNotificationEventType('7');
	static objectErased = new KalturaEventNotificationEventType('8');
	static objectReadyForIndex = new KalturaEventNotificationEventType('13');
	static objectReadyForReplacment = new KalturaEventNotificationEventType('9');
	static objectReplaced = new KalturaEventNotificationEventType('12');
	static objectSaved = new KalturaEventNotificationEventType('10');
	static objectUpdated = new KalturaEventNotificationEventType('11');
}
KalturaTypesFactory.registerType('KalturaEventNotificationEventType',KalturaEventNotificationEventType);