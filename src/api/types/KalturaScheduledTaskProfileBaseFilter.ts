
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaScheduledTaskProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	statusEqual? : KalturaScheduledTaskProfileStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	lastExecutionStartedAtGreaterThanOrEqual? : Date;
	lastExecutionStartedAtLessThanOrEqual? : Date;
}


export class KalturaScheduledTaskProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	statusEqual : KalturaScheduledTaskProfileStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	lastExecutionStartedAtGreaterThanOrEqual : Date;
	lastExecutionStartedAtLessThanOrEqual : Date;

    constructor(data? : KalturaScheduledTaskProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledTaskProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaScheduledTaskProfileStatus, subType : 'KalturaScheduledTaskProfileStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				lastExecutionStartedAtGreaterThanOrEqual : { type : 'd' },
				lastExecutionStartedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskProfileBaseFilter',KalturaScheduledTaskProfileBaseFilter);
