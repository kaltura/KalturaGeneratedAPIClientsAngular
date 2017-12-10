
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaEntryDistributionBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	submittedAtGreaterThanOrEqual? : Date;
	submittedAtLessThanOrEqual? : Date;
	entryIdEqual? : string;
	entryIdIn? : string;
	distributionProfileIdEqual? : number;
	distributionProfileIdIn? : string;
	statusEqual? : KalturaEntryDistributionStatus;
	statusIn? : string;
	dirtyStatusEqual? : KalturaEntryDistributionFlag;
	dirtyStatusIn? : string;
	sunriseGreaterThanOrEqual? : Date;
	sunriseLessThanOrEqual? : Date;
	sunsetGreaterThanOrEqual? : Date;
	sunsetLessThanOrEqual? : Date;
}


export class KalturaEntryDistributionBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	submittedAtGreaterThanOrEqual : Date;
	submittedAtLessThanOrEqual : Date;
	entryIdEqual : string;
	entryIdIn : string;
	distributionProfileIdEqual : number;
	distributionProfileIdIn : string;
	statusEqual : KalturaEntryDistributionStatus;
	statusIn : string;
	dirtyStatusEqual : KalturaEntryDistributionFlag;
	dirtyStatusIn : string;
	sunriseGreaterThanOrEqual : Date;
	sunriseLessThanOrEqual : Date;
	sunsetGreaterThanOrEqual : Date;
	sunsetLessThanOrEqual : Date;

    constructor(data? : KalturaEntryDistributionBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryDistributionBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				submittedAtGreaterThanOrEqual : { type : 'd' },
				submittedAtLessThanOrEqual : { type : 'd' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				distributionProfileIdEqual : { type : 'n' },
				distributionProfileIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaEntryDistributionStatus, subType : 'KalturaEntryDistributionStatus' },
				statusIn : { type : 's' },
				dirtyStatusEqual : { type : 'en', subTypeConstructor : KalturaEntryDistributionFlag, subType : 'KalturaEntryDistributionFlag' },
				dirtyStatusIn : { type : 's' },
				sunriseGreaterThanOrEqual : { type : 'd' },
				sunriseLessThanOrEqual : { type : 'd' },
				sunsetGreaterThanOrEqual : { type : 'd' },
				sunsetLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryDistributionBaseFilter',KalturaEntryDistributionBaseFilter);
