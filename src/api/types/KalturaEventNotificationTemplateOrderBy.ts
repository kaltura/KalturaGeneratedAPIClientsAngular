

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEventNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaEventNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaEventNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaEventNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaEventNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEventNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEventNotificationTemplateOrderBy',KalturaEventNotificationTemplateOrderBy);