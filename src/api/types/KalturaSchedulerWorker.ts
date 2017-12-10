
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaBatchJob } from './KalturaBatchJob';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSchedulerWorkerArgs  extends KalturaObjectBaseArgs {
    configuredId? : number;
	schedulerId? : number;
	schedulerConfiguredId? : number;
	type? : KalturaBatchJobType;
	typeName? : string;
	name? : string;
	statuses? : KalturaSchedulerStatus[];
	configs? : KalturaSchedulerConfig[];
	lockedJobs? : KalturaBatchJob[];
	avgWait? : number;
	avgWork? : number;
	lastStatus? : number;
	lastStatusStr? : string;
}


export class KalturaSchedulerWorker extends KalturaObjectBase {

    readonly id : number;
	configuredId : number;
	schedulerId : number;
	schedulerConfiguredId : number;
	type : KalturaBatchJobType;
	typeName : string;
	name : string;
	statuses : KalturaSchedulerStatus[];
	configs : KalturaSchedulerConfig[];
	lockedJobs : KalturaBatchJob[];
	avgWait : number;
	avgWork : number;
	lastStatus : number;
	lastStatusStr : string;

    constructor(data? : KalturaSchedulerWorkerArgs)
    {
        super(data);
        if (typeof this.statuses === 'undefined') this.statuses = [];
		if (typeof this.configs === 'undefined') this.configs = [];
		if (typeof this.lockedJobs === 'undefined') this.lockedJobs = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSchedulerWorker' },
				id : { type : 'n', readOnly : true },
				configuredId : { type : 'n' },
				schedulerId : { type : 'n' },
				schedulerConfiguredId : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaBatchJobType, subType : 'KalturaBatchJobType' },
				typeName : { type : 's' },
				name : { type : 's' },
				statuses : { type : 'a', subTypeConstructor : KalturaSchedulerStatus, subType : 'KalturaSchedulerStatus' },
				configs : { type : 'a', subTypeConstructor : KalturaSchedulerConfig, subType : 'KalturaSchedulerConfig' },
				lockedJobs : { type : 'a', subTypeConstructor : KalturaBatchJob, subType : 'KalturaBatchJob' },
				avgWait : { type : 'n' },
				avgWork : { type : 'n' },
				lastStatus : { type : 'n' },
				lastStatusStr : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSchedulerWorker',KalturaSchedulerWorker);
