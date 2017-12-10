

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEmailNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEmailNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaEmailNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaEmailNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaEmailNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaEmailNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEmailNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEmailNotificationTemplateOrderBy',KalturaEmailNotificationTemplateOrderBy);