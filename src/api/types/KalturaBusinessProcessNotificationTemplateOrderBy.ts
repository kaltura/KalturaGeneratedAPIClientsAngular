

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBusinessProcessNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaBusinessProcessNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaBusinessProcessNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaBusinessProcessNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaBusinessProcessNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBusinessProcessNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessNotificationTemplateOrderBy',KalturaBusinessProcessNotificationTemplateOrderBy);