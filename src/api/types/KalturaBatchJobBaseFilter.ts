
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBatchJobBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idGreaterThanOrEqual? : number;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	partnerIdNotIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	executionAttemptsGreaterThanOrEqual? : number;
	executionAttemptsLessThanOrEqual? : number;
	lockVersionGreaterThanOrEqual? : number;
	lockVersionLessThanOrEqual? : number;
	entryIdEqual? : string;
	jobTypeEqual? : KalturaBatchJobType;
	jobTypeIn? : string;
	jobTypeNotIn? : string;
	jobSubTypeEqual? : number;
	jobSubTypeIn? : string;
	jobSubTypeNotIn? : string;
	statusEqual? : KalturaBatchJobStatus;
	statusIn? : string;
	statusNotIn? : string;
	priorityGreaterThanOrEqual? : number;
	priorityLessThanOrEqual? : number;
	priorityEqual? : number;
	priorityIn? : string;
	priorityNotIn? : string;
	batchVersionGreaterThanOrEqual? : number;
	batchVersionLessThanOrEqual? : number;
	batchVersionEqual? : number;
	queueTimeGreaterThanOrEqual? : number;
	queueTimeLessThanOrEqual? : number;
	finishTimeGreaterThanOrEqual? : number;
	finishTimeLessThanOrEqual? : number;
	errTypeEqual? : KalturaBatchJobErrorTypes;
	errTypeIn? : string;
	errTypeNotIn? : string;
	errNumberEqual? : number;
	errNumberIn? : string;
	errNumberNotIn? : string;
	estimatedEffortLessThan? : number;
	estimatedEffortGreaterThan? : number;
	urgencyLessThanOrEqual? : number;
	urgencyGreaterThanOrEqual? : number;
}


export class KalturaBatchJobBaseFilter extends KalturaFilter {

    idEqual : number;
	idGreaterThanOrEqual : number;
	partnerIdEqual : number;
	partnerIdIn : string;
	partnerIdNotIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	executionAttemptsGreaterThanOrEqual : number;
	executionAttemptsLessThanOrEqual : number;
	lockVersionGreaterThanOrEqual : number;
	lockVersionLessThanOrEqual : number;
	entryIdEqual : string;
	jobTypeEqual : KalturaBatchJobType;
	jobTypeIn : string;
	jobTypeNotIn : string;
	jobSubTypeEqual : number;
	jobSubTypeIn : string;
	jobSubTypeNotIn : string;
	statusEqual : KalturaBatchJobStatus;
	statusIn : string;
	statusNotIn : string;
	priorityGreaterThanOrEqual : number;
	priorityLessThanOrEqual : number;
	priorityEqual : number;
	priorityIn : string;
	priorityNotIn : string;
	batchVersionGreaterThanOrEqual : number;
	batchVersionLessThanOrEqual : number;
	batchVersionEqual : number;
	queueTimeGreaterThanOrEqual : number;
	queueTimeLessThanOrEqual : number;
	finishTimeGreaterThanOrEqual : number;
	finishTimeLessThanOrEqual : number;
	errTypeEqual : KalturaBatchJobErrorTypes;
	errTypeIn : string;
	errTypeNotIn : string;
	errNumberEqual : number;
	errNumberIn : string;
	errNumberNotIn : string;
	estimatedEffortLessThan : number;
	estimatedEffortGreaterThan : number;
	urgencyLessThanOrEqual : number;
	urgencyGreaterThanOrEqual : number;

    constructor(data? : KalturaBatchJobBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchJobBaseFilter' },
				idEqual : { type : 'n' },
				idGreaterThanOrEqual : { type : 'n' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				partnerIdNotIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				executionAttemptsGreaterThanOrEqual : { type : 'n' },
				executionAttemptsLessThanOrEqual : { type : 'n' },
				lockVersionGreaterThanOrEqual : { type : 'n' },
				lockVersionLessThanOrEqual : { type : 'n' },
				entryIdEqual : { type : 's' },
				jobTypeEqual : { type : 'es', subTypeConstructor : KalturaBatchJobType, subType : 'KalturaBatchJobType' },
				jobTypeIn : { type : 's' },
				jobTypeNotIn : { type : 's' },
				jobSubTypeEqual : { type : 'n' },
				jobSubTypeIn : { type : 's' },
				jobSubTypeNotIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' },
				priorityGreaterThanOrEqual : { type : 'n' },
				priorityLessThanOrEqual : { type : 'n' },
				priorityEqual : { type : 'n' },
				priorityIn : { type : 's' },
				priorityNotIn : { type : 's' },
				batchVersionGreaterThanOrEqual : { type : 'n' },
				batchVersionLessThanOrEqual : { type : 'n' },
				batchVersionEqual : { type : 'n' },
				queueTimeGreaterThanOrEqual : { type : 'n' },
				queueTimeLessThanOrEqual : { type : 'n' },
				finishTimeGreaterThanOrEqual : { type : 'n' },
				finishTimeLessThanOrEqual : { type : 'n' },
				errTypeEqual : { type : 'en', subTypeConstructor : KalturaBatchJobErrorTypes, subType : 'KalturaBatchJobErrorTypes' },
				errTypeIn : { type : 's' },
				errTypeNotIn : { type : 's' },
				errNumberEqual : { type : 'n' },
				errNumberIn : { type : 's' },
				errNumberNotIn : { type : 's' },
				estimatedEffortLessThan : { type : 'n' },
				estimatedEffortGreaterThan : { type : 'n' },
				urgencyLessThanOrEqual : { type : 'n' },
				urgencyGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchJobBaseFilter',KalturaBatchJobBaseFilter);
