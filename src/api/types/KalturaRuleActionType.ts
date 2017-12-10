

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaRuleActionType extends KalturaObjectBase {
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

    static addToStorage = new KalturaRuleActionType('4');
	static block = new KalturaRuleActionType('1');
	static drmPolicy = new KalturaRuleActionType('drm.DRM_POLICY');
	static limitDeliveryProfiles = new KalturaRuleActionType('5');
	static limitFlavors = new KalturaRuleActionType('3');
	static limitThumbnailCapture = new KalturaRuleActionType('8');
	static preview = new KalturaRuleActionType('2');
	static requestHostRegex = new KalturaRuleActionType('7');
	static serveFromRemoteServer = new KalturaRuleActionType('6');
}
KalturaTypesFactory.registerType('KalturaRuleActionType',KalturaRuleActionType);