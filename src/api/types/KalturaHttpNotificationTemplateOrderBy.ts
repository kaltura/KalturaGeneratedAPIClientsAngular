

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaHttpNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaHttpNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaHttpNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaHttpNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaHttpNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaHttpNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaHttpNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaHttpNotificationTemplateOrderBy',KalturaHttpNotificationTemplateOrderBy);