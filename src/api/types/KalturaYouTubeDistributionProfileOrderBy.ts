

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYouTubeDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaYouTubeDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaYouTubeDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaYouTubeDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaYouTubeDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaYouTubeDistributionProfileOrderBy',KalturaYouTubeDistributionProfileOrderBy);