

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBaseEntryCloneOptions extends KalturaObjectBase {
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

    static accessControl = new KalturaBaseEntryCloneOptions('4');
	static adCuePoints = new KalturaBaseEntryCloneOptions('adCuePoint.AD_CUE_POINTS');
	static annotationCuePoints = new KalturaBaseEntryCloneOptions('annotation.ANNOTATION_CUE_POINTS');
	static captions = new KalturaBaseEntryCloneOptions('7');
	static categories = new KalturaBaseEntryCloneOptions('2');
	static childEntries = new KalturaBaseEntryCloneOptions('3');
	static codeCuePoints = new KalturaBaseEntryCloneOptions('codeCuePoint.CODE_CUE_POINTS');
	static flavors = new KalturaBaseEntryCloneOptions('6');
	static metadata = new KalturaBaseEntryCloneOptions('5');
	static thumbCuePoints = new KalturaBaseEntryCloneOptions('thumbCuePoint.THUMB_CUE_POINTS');
	static users = new KalturaBaseEntryCloneOptions('1');
}
KalturaTypesFactory.registerType('KalturaBaseEntryCloneOptions',KalturaBaseEntryCloneOptions);