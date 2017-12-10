

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEdgeServerNodeOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaEdgeServerNodeOrderBy('+createdAt');
	static createdAtDesc = new KalturaEdgeServerNodeOrderBy('-createdAt');
	static heartbeatTimeAsc = new KalturaEdgeServerNodeOrderBy('+heartbeatTime');
	static heartbeatTimeDesc = new KalturaEdgeServerNodeOrderBy('-heartbeatTime');
	static updatedAtAsc = new KalturaEdgeServerNodeOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaEdgeServerNodeOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaEdgeServerNodeOrderBy',KalturaEdgeServerNodeOrderBy);