

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBatchJobOrderBy extends KalturaObjectBase {
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

    static createdAtAsc = new KalturaBatchJobOrderBy('+createdAt');
	static createdAtDesc = new KalturaBatchJobOrderBy('-createdAt');
	static estimatedEffortAsc = new KalturaBatchJobOrderBy('+estimatedEffort');
	static estimatedEffortDesc = new KalturaBatchJobOrderBy('-estimatedEffort');
	static executionAttemptsAsc = new KalturaBatchJobOrderBy('+executionAttempts');
	static executionAttemptsDesc = new KalturaBatchJobOrderBy('-executionAttempts');
	static finishTimeAsc = new KalturaBatchJobOrderBy('+finishTime');
	static finishTimeDesc = new KalturaBatchJobOrderBy('-finishTime');
	static lockVersionAsc = new KalturaBatchJobOrderBy('+lockVersion');
	static lockVersionDesc = new KalturaBatchJobOrderBy('-lockVersion');
	static priorityAsc = new KalturaBatchJobOrderBy('+priority');
	static priorityDesc = new KalturaBatchJobOrderBy('-priority');
	static queueTimeAsc = new KalturaBatchJobOrderBy('+queueTime');
	static queueTimeDesc = new KalturaBatchJobOrderBy('-queueTime');
	static statusAsc = new KalturaBatchJobOrderBy('+status');
	static statusDesc = new KalturaBatchJobOrderBy('-status');
	static updatedAtAsc = new KalturaBatchJobOrderBy('+updatedAt');
	static updatedAtDesc = new KalturaBatchJobOrderBy('-updatedAt');
}
KalturaTypesFactory.registerType('KalturaBatchJobOrderBy',KalturaBatchJobOrderBy);