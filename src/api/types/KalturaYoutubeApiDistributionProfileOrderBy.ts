

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYoutubeApiDistributionProfileOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaYoutubeApiDistributionProfileOrderBy('+createdAt');
	static createdAtDesc = new KalturaYoutubeApiDistributionProfileOrderBy('-createdAt');
	static updatedAtAsc = new KalturaYoutubeApiDistributionProfileOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaYoutubeApiDistributionProfileOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionProfileOrderBy',KalturaYoutubeApiDistributionProfileOrderBy);