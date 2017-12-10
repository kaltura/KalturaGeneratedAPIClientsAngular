

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaCategoryIdentifierField extends KalturaObjectBase {
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

    static fullName = new KalturaCategoryIdentifierField('fullName');
	static id = new KalturaCategoryIdentifierField('id');
	static referenceId = new KalturaCategoryIdentifierField('referenceId');
}
KalturaTypesFactory.registerType('KalturaCategoryIdentifierField',KalturaCategoryIdentifierField);