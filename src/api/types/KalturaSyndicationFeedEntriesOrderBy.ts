

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaSyndicationFeedEntriesOrderBy extends KalturaObjectBase {
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

    static createdAtDesc = new KalturaSyndicationFeedEntriesOrderBy('-createdAt');
	static recent = new KalturaSyndicationFeedEntriesOrderBy('recent');
}
KalturaTypesFactory.registerType('KalturaSyndicationFeedEntriesOrderBy',KalturaSyndicationFeedEntriesOrderBy);