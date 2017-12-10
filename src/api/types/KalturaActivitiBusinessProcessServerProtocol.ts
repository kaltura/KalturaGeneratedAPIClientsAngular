

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaActivitiBusinessProcessServerProtocol extends KalturaObjectBase {
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

    static http = new KalturaActivitiBusinessProcessServerProtocol('http');
	static https = new KalturaActivitiBusinessProcessServerProtocol('https');
}
KalturaTypesFactory.registerType('KalturaActivitiBusinessProcessServerProtocol',KalturaActivitiBusinessProcessServerProtocol);