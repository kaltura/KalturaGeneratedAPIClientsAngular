

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCuePointFieldName extends KalturaObjectBase {
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

    static cuePointAnswers = new KalturaESearchCuePointFieldName('cue_points.cue_point_answers');
	static cuePointEndTime = new KalturaESearchCuePointFieldName('cue_points.cue_point_end_time');
	static cuePointExplanation = new KalturaESearchCuePointFieldName('cue_points.cue_point_explanation');
	static cuePointHint = new KalturaESearchCuePointFieldName('cue_points.cue_point_hint');
	static cuePointId = new KalturaESearchCuePointFieldName('cue_points.cue_point_id');
	static cuePointName = new KalturaESearchCuePointFieldName('cue_points.cue_point_name');
	static cuePointQuestion = new KalturaESearchCuePointFieldName('cue_points.cue_point_question');
	static cuePointStartTime = new KalturaESearchCuePointFieldName('cue_points.cue_point_start_time');
	static cuePointSubType = new KalturaESearchCuePointFieldName('cue_points.cue_point_sub_type');
	static cuePointTags = new KalturaESearchCuePointFieldName('cue_points.cue_point_tags');
	static cuePointText = new KalturaESearchCuePointFieldName('cue_points.cue_point_text');
}
KalturaTypesFactory.registerType('KalturaESearchCuePointFieldName',KalturaESearchCuePointFieldName);