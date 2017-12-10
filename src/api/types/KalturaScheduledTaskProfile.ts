
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaObjectFilterEngineType } from './KalturaObjectFilterEngineType';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectTask } from './KalturaObjectTask';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduledTaskProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	status? : KalturaScheduledTaskProfileStatus;
	objectFilterEngineType? : KalturaObjectFilterEngineType;
	objectFilter? : KalturaFilter;
	objectTasks? : KalturaObjectTask[];
	lastExecutionStartedAt? : Date;
	maxTotalCountAllowed? : number;
}


export class KalturaScheduledTaskProfile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	status : KalturaScheduledTaskProfileStatus;
	objectFilterEngineType : KalturaObjectFilterEngineType;
	objectFilter : KalturaFilter;
	objectTasks : KalturaObjectTask[];
	readonly createdAt : Date;
	readonly updatedAt : Date;
	lastExecutionStartedAt : Date;
	maxTotalCountAllowed : number;

    constructor(data? : KalturaScheduledTaskProfileArgs)
    {
        super(data);
        if (typeof this.objectTasks === 'undefined') this.objectTasks = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledTaskProfile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaScheduledTaskProfileStatus, subType : 'KalturaScheduledTaskProfileStatus' },
				objectFilterEngineType : { type : 'es', subTypeConstructor : KalturaObjectFilterEngineType, subType : 'KalturaObjectFilterEngineType' },
				objectFilter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' },
				objectTasks : { type : 'a', subTypeConstructor : KalturaObjectTask, subType : 'KalturaObjectTask' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				lastExecutionStartedAt : { type : 'd' },
				maxTotalCountAllowed : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskProfile',KalturaScheduledTaskProfile);
