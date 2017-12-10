

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaObjectTaskType extends KalturaObjectBase {
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

    static convertEntryFlavors = new KalturaObjectTaskType('4');
	static deleteEntry = new KalturaObjectTaskType('1');
	static deleteEntryFlavors = new KalturaObjectTaskType('3');
	static deleteLocalContent = new KalturaObjectTaskType('5');
	static dispatchEventNotification = new KalturaObjectTaskType('scheduledTaskEventNotification.DispatchEventNotification');
	static distribute = new KalturaObjectTaskType('scheduledTaskContentDistribution.Distribute');
	static executeMetadataXslt = new KalturaObjectTaskType('scheduledTaskMetadata.ExecuteMetadataXslt');
	static mailNotification = new KalturaObjectTaskType('8');
	static modifyCategories = new KalturaObjectTaskType('2');
	static modifyEntry = new KalturaObjectTaskType('7');
	static storageExport = new KalturaObjectTaskType('6');
}
KalturaTypesFactory.registerType('KalturaObjectTaskType',KalturaObjectTaskType);