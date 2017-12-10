

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBusinessProcessProvider extends KalturaObjectBase {
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

    static activiti = new KalturaBusinessProcessProvider('activitiBusinessProcessNotification.Activiti');
}
KalturaTypesFactory.registerType('KalturaBusinessProcessProvider',KalturaBusinessProcessProvider);