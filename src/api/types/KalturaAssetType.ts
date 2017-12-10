

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAssetType extends KalturaObjectBase {
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

    static attachment = new KalturaAssetType('attachment.Attachment');
	static caption = new KalturaAssetType('caption.Caption');
	static document = new KalturaAssetType('document.Document');
	static flavor = new KalturaAssetType('1');
	static image = new KalturaAssetType('document.Image');
	static live = new KalturaAssetType('3');
	static pdf = new KalturaAssetType('document.PDF');
	static swf = new KalturaAssetType('document.SWF');
	static thumbnail = new KalturaAssetType('2');
	static timedThumbAsset = new KalturaAssetType('thumbCuePoint.timedThumb');
	static transcript = new KalturaAssetType('transcript.Transcript');
	static widevineFlavor = new KalturaAssetType('widevine.WidevineFlavor');
}
KalturaTypesFactory.registerType('KalturaAssetType',KalturaAssetType);