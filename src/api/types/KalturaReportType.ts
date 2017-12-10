

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaReportType extends KalturaObjectBase {
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

    static applications = new KalturaReportType('16');
	static browsers = new KalturaReportType('23');
	static contentContributions = new KalturaReportType('7');
	static contentDropoff = new KalturaReportType('2');
	static contentInteractions = new KalturaReportType('3');
	static live = new KalturaReportType('24');
	static mapOverlay = new KalturaReportType('4');
	static operatingSystem = new KalturaReportType('22');
	static partnerUsage = new KalturaReportType('201');
	static platforms = new KalturaReportType('21');
	static quiz = new KalturaReportType('quiz.QUIZ');
	static quizAggregateByQuestion = new KalturaReportType('quiz.QUIZ_AGGREGATE_BY_QUESTION');
	static quizUserAggregateByQuestion = new KalturaReportType('quiz.QUIZ_USER_AGGREGATE_BY_QUESTION');
	static quizUserPercentage = new KalturaReportType('quiz.QUIZ_USER_PERCENTAGE');
	static specificUserEngagement = new KalturaReportType('12');
	static specificUserUsage = new KalturaReportType('18');
	static topContent = new KalturaReportType('1');
	static topContributors = new KalturaReportType('5');
	static topCreators = new KalturaReportType('20');
	static topPlaybackContext = new KalturaReportType('25');
	static topSyndication = new KalturaReportType('6');
	static userContentDropoff = new KalturaReportType('14');
	static userContentInteractions = new KalturaReportType('15');
	static userEngagement = new KalturaReportType('11');
	static userTopContent = new KalturaReportType('13');
	static userUsage = new KalturaReportType('17');
	static varUsage = new KalturaReportType('19');
	static vpaasUsage = new KalturaReportType('26');
}
KalturaTypesFactory.registerType('KalturaReportType',KalturaReportType);