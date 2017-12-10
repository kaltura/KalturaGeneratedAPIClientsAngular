

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessSignalNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBusinessProcessSignalNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessSignalNotificationTemplateOrderBy',KalturaBusinessProcessSignalNotificationTemplateOrderBy);