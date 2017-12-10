

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaYouTubeDistributionFeedSpecVersion extends KalturaObjectBase {
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

    static version1 = new KalturaYouTubeDistributionFeedSpecVersion('1');
	static version2 = new KalturaYouTubeDistributionFeedSpecVersion('2');
}
KalturaTypesFactory.registerType('KalturaYouTubeDistributionFeedSpecVersion',KalturaYouTubeDistributionFeedSpecVersion);