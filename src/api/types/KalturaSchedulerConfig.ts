
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSchedulerConfigArgs  extends KalturaObjectBaseArgs {
    createdBy? : string;
	updatedBy? : string;
	commandId? : string;
	commandStatus? : string;
	schedulerId? : number;
	schedulerConfiguredId? : number;
	schedulerName? : string;
	workerId? : number;
	workerConfiguredId? : number;
	workerName? : string;
	variable? : string;
	variablePart? : string;
	value? : string;
}


export class KalturaSchedulerConfig extends KalturaObjectBase {

    readonly id : number;
	createdBy : string;
	updatedBy : string;
	commandId : string;
	commandStatus : string;
	schedulerId : number;
	schedulerConfiguredId : number;
	schedulerName : string;
	workerId : number;
	workerConfiguredId : number;
	workerName : string;
	variable : string;
	variablePart : string;
	value : string;

    constructor(data? : KalturaSchedulerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSchedulerConfig' },
				id : { type : 'n', readOnly : true },
				createdBy : { type : 's' },
				updatedBy : { type : 's' },
				commandId : { type : 's' },
				commandStatus : { type : 's' },
				schedulerId : { type : 'n' },
				schedulerConfiguredId : { type : 'n' },
				schedulerName : { type : 's' },
				workerId : { type : 'n' },
				workerConfiguredId : { type : 'n' },
				workerName : { type : 's' },
				variable : { type : 's' },
				variablePart : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSchedulerConfig',KalturaSchedulerConfig);
