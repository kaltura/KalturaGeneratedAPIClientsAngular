
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaJobData } from './KalturaJobData';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBatchHistoryData } from './KalturaBatchHistoryData';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBatchJobArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	entryName? : string;
	jobSubType? : number;
	data? : KalturaJobData;
	status? : KalturaBatchJobStatus;
	abort? : number;
	checkAgainTimeout? : number;
	message? : string;
	description? : string;
	priority? : number;
	history? : KalturaBatchHistoryData[];
	bulkJobId? : number;
	batchVersion? : number;
	parentJobId? : number;
	rootJobId? : number;
	queueTime? : number;
	finishTime? : number;
	errType? : KalturaBatchJobErrorTypes;
	errNumber? : number;
	estimatedEffort? : number;
	urgency? : number;
	schedulerId? : number;
	workerId? : number;
	batchIndex? : number;
	lastSchedulerId? : number;
	lastWorkerId? : number;
	dc? : number;
	jobObjectId? : string;
	jobObjectType? : number;
}


export class KalturaBatchJob extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly deletedAt : Date;
	readonly lockExpiration : number;
	readonly executionAttempts : number;
	readonly lockVersion : number;
	entryId : string;
	entryName : string;
	readonly jobType : KalturaBatchJobType;
	jobSubType : number;
	data : KalturaJobData;
	status : KalturaBatchJobStatus;
	abort : number;
	checkAgainTimeout : number;
	message : string;
	description : string;
	priority : number;
	history : KalturaBatchHistoryData[];
	bulkJobId : number;
	batchVersion : number;
	parentJobId : number;
	rootJobId : number;
	queueTime : number;
	finishTime : number;
	errType : KalturaBatchJobErrorTypes;
	errNumber : number;
	estimatedEffort : number;
	urgency : number;
	schedulerId : number;
	workerId : number;
	batchIndex : number;
	lastSchedulerId : number;
	lastWorkerId : number;
	dc : number;
	jobObjectId : string;
	jobObjectType : number;

    constructor(data? : KalturaBatchJobArgs)
    {
        super(data);
        if (typeof this.history === 'undefined') this.history = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchJob' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				deletedAt : { type : 'd', readOnly : true },
				lockExpiration : { type : 'n', readOnly : true },
				executionAttempts : { type : 'n', readOnly : true },
				lockVersion : { type : 'n', readOnly : true },
				entryId : { type : 's' },
				entryName : { type : 's' },
				jobType : { type : 'es', readOnly : true, subTypeConstructor : KalturaBatchJobType, subType : 'KalturaBatchJobType' },
				jobSubType : { type : 'n' },
				data : { type : 'o', subTypeConstructor : KalturaJobData, subType : 'KalturaJobData' },
				status : { type : 'en', subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' },
				abort : { type : 'n' },
				checkAgainTimeout : { type : 'n' },
				message : { type : 's' },
				description : { type : 's' },
				priority : { type : 'n' },
				history : { type : 'a', subTypeConstructor : KalturaBatchHistoryData, subType : 'KalturaBatchHistoryData' },
				bulkJobId : { type : 'n' },
				batchVersion : { type : 'n' },
				parentJobId : { type : 'n' },
				rootJobId : { type : 'n' },
				queueTime : { type : 'n' },
				finishTime : { type : 'n' },
				errType : { type : 'en', subTypeConstructor : KalturaBatchJobErrorTypes, subType : 'KalturaBatchJobErrorTypes' },
				errNumber : { type : 'n' },
				estimatedEffort : { type : 'n' },
				urgency : { type : 'n' },
				schedulerId : { type : 'n' },
				workerId : { type : 'n' },
				batchIndex : { type : 'n' },
				lastSchedulerId : { type : 'n' },
				lastWorkerId : { type : 'n' },
				dc : { type : 'n' },
				jobObjectId : { type : 's' },
				jobObjectType : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchJob',KalturaBatchJob);
