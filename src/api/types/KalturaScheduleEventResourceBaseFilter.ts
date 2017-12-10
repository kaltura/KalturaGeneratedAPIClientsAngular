
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaScheduleEventResourceBaseFilterArgs  extends KalturaRelatedFilterArgs {
    eventIdEqual? : number;
	eventIdIn? : string;
	resourceIdEqual? : number;
	resourceIdIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaScheduleEventResourceBaseFilter extends KalturaRelatedFilter {

    eventIdEqual : number;
	eventIdIn : string;
	resourceIdEqual : number;
	resourceIdIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaScheduleEventResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEventResourceBaseFilter' },
				eventIdEqual : { type : 'n' },
				eventIdIn : { type : 's' },
				resourceIdEqual : { type : 'n' },
				resourceIdIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventResourceBaseFilter',KalturaScheduleEventResourceBaseFilter);
