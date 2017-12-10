

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessStartNotificationTemplateOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('+createdAt');
	static createdAtDesc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('-createdAt');
	static idAsc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('+id');
	static idDesc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('-id');
	static updatedAtAsc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBusinessProcessStartNotificationTemplateOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessStartNotificationTemplateOrderBy',KalturaBusinessProcessStartNotificationTemplateOrderBy);