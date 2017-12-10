

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCloneComponentSelectorType extends KalturaObjectBase {
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

    static excludeComponent = new KalturaCloneComponentSelectorType('1');
	static includeComponent = new KalturaCloneComponentSelectorType('0');
}
KalturaTypesFactory.registerType('KalturaCloneComponentSelectorType',KalturaCloneComponentSelectorType);