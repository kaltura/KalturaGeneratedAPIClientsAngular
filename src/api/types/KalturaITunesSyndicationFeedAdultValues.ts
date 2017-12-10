

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaITunesSyndicationFeedAdultValues extends KalturaObjectBase {
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

    static clean = new KalturaITunesSyndicationFeedAdultValues('clean');
	static no = new KalturaITunesSyndicationFeedAdultValues('no');
	static yes = new KalturaITunesSyndicationFeedAdultValues('yes');
}
KalturaTypesFactory.registerType('KalturaITunesSyndicationFeedAdultValues',KalturaITunesSyndicationFeedAdultValues);