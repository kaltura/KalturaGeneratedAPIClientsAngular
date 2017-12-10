

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSearchConditionComparison extends KalturaObjectBase {
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

    static equal = new KalturaSearchConditionComparison('1');
	static greaterThan = new KalturaSearchConditionComparison('2');
	static greaterThanOrEqual = new KalturaSearchConditionComparison('3');
	static lessThan = new KalturaSearchConditionComparison('4');
	static lessThanOrEqual = new KalturaSearchConditionComparison('5');
	static notEqual = new KalturaSearchConditionComparison('6');
}
KalturaTypesFactory.registerType('KalturaSearchConditionComparison',KalturaSearchConditionComparison);