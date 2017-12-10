

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYahooSyndicationFeedAdultValues extends KalturaObjectBase {
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

    static adult = new KalturaYahooSyndicationFeedAdultValues('adult');
	static nonAdult = new KalturaYahooSyndicationFeedAdultValues('nonadult');
}
KalturaTypesFactory.registerType('KalturaYahooSyndicationFeedAdultValues',KalturaYahooSyndicationFeedAdultValues);