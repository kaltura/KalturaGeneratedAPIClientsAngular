

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaMetadataObjectType extends KalturaObjectBase {
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

    static adCuePoint = new KalturaMetadataObjectType('adCuePointMetadata.AdCuePoint');
	static annotation = new KalturaMetadataObjectType('annotationMetadata.Annotation');
	static answerCuePoint = new KalturaMetadataObjectType('quiz.AnswerCuePoint');
	static category = new KalturaMetadataObjectType('2');
	static codeCuePoint = new KalturaMetadataObjectType('codeCuePointMetadata.CodeCuePoint');
	static dynamicObject = new KalturaMetadataObjectType('5');
	static entry = new KalturaMetadataObjectType('1');
	static partner = new KalturaMetadataObjectType('4');
	static questionCuePoint = new KalturaMetadataObjectType('quiz.QuestionCuePoint');
	static thumbCuePoint = new KalturaMetadataObjectType('thumbCuePointMetadata.thumbCuePoint');
	static user = new KalturaMetadataObjectType('3');
}
KalturaTypesFactory.registerType('KalturaMetadataObjectType',KalturaMetadataObjectType);