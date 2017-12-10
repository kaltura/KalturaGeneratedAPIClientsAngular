
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatusType } from './KalturaSchedulerStatusType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSchedulerStatusArgs  extends KalturaObjectBaseArgs {
    schedulerConfiguredId? : number;
	workerConfiguredId? : number;
	workerType? : KalturaBatchJobType;
	type? : KalturaSchedulerStatusType;
	value? : number;
}


export class KalturaSchedulerStatus extends KalturaObjectBase {

    readonly id : number;
	schedulerConfiguredId : number;
	workerConfiguredId : number;
	workerType : KalturaBatchJobType;
	type : KalturaSchedulerStatusType;
	value : number;
	readonly schedulerId : number;
	readonly workerId : number;

    constructor(data? : KalturaSchedulerStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSchedulerStatus' },
				id : { type : 'n', readOnly : true },
				schedulerConfiguredId : { type : 'n' },
				workerConfiguredId : { type : 'n' },
				workerType : { type : 'es', subTypeConstructor : KalturaBatchJobType, subType : 'KalturaBatchJobType' },
				type : { type : 'en', subTypeConstructor : KalturaSchedulerStatusType, subType : 'KalturaSchedulerStatusType' },
				value : { type : 'n' },
				schedulerId : { type : 'n', readOnly : true },
				workerId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSchedulerStatus',KalturaSchedulerStatus);
