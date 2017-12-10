

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCaptionFieldName extends KalturaObjectBase {
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

    static captionContent = new KalturaESearchCaptionFieldName('caption_assets.lines.content');
	static captionEndTime = new KalturaESearchCaptionFieldName('caption_assets.lines.end_time');
	static captionStartTime = new KalturaESearchCaptionFieldName('caption_assets.lines.start_time');
}
KalturaTypesFactory.registerType('KalturaESearchCaptionFieldName',KalturaESearchCaptionFieldName);