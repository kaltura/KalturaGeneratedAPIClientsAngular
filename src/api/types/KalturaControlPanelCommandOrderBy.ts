

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaControlPanelCommandOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaControlPanelCommandOrderBy('+createdAt');
	static createdAtDesc = new KalturaControlPanelCommandOrderBy('-createdAt');
	static updatedAtAsc = new KalturaControlPanelCommandOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaControlPanelCommandOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaControlPanelCommandOrderBy',KalturaControlPanelCommandOrderBy);