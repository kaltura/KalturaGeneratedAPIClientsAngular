

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaPushNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaPushNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaPushNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaPushNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaPushNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaPushNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaPushNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaPushNotificationTemplateOrderBy',KalturaPushNotificationTemplateOrderBy);