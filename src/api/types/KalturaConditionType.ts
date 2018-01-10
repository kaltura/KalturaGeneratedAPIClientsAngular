

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaConditionType extends KalturaObjectBase {
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

    static activeEdgeValidate = new KalturaConditionType('14');
	static anonymousIp = new KalturaConditionType('15');
	static assetPropertiesCompare = new KalturaConditionType('8');
	static assetType = new KalturaConditionType('16');
	static authenticated = new KalturaConditionType('1');
	static country = new KalturaConditionType('2');
	static deliveryProfile = new KalturaConditionType('13');
	static eventNotificationField = new KalturaConditionType('eventNotification.BooleanField');
	static eventNotificationObjectChanged = new KalturaConditionType('eventNotification.ObjectChanged');
	static fieldCompare = new KalturaConditionType('7');
	static fieldMatch = new KalturaConditionType('6');
	static geoDistance = new KalturaConditionType('10');
	static hash = new KalturaConditionType('12');
	static ipAddress = new KalturaConditionType('3');
	static metadataFieldChanged = new KalturaConditionType('metadata.FieldChanged');
	static metadataFieldCompare = new KalturaConditionType('metadata.FieldCompare');
	static metadataFieldMatch = new KalturaConditionType('metadata.FieldMatch');
	static orOperator = new KalturaConditionType('11');
	static site = new KalturaConditionType('4');
	static userAgent = new KalturaConditionType('5');
	static userRole = new KalturaConditionType('9');
}
KalturaTypesFactory.registerType('KalturaConditionType',KalturaConditionType);