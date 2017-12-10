

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessAbortNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBusinessProcessAbortNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessAbortNotificationTemplateOrderBy',KalturaBusinessProcessAbortNotificationTemplateOrderBy);