
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserEntryBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	entryIdEqual? : string;
	entryIdIn? : string;
	entryIdNotIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	userIdNotIn? : string;
	statusEqual? : KalturaUserEntryStatus;
	createdAtLessThanOrEqual? : Date;
	createdAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	typeEqual? : KalturaUserEntryType;
	extendedStatusEqual? : KalturaUserEntryExtendedStatus;
	extendedStatusIn? : string;
	extendedStatusNotIn? : string;
}


export class KalturaUserEntryBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	entryIdEqual : string;
	entryIdIn : string;
	entryIdNotIn : string;
	userIdEqual : string;
	userIdIn : string;
	userIdNotIn : string;
	statusEqual : KalturaUserEntryStatus;
	createdAtLessThanOrEqual : Date;
	createdAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	typeEqual : KalturaUserEntryType;
	extendedStatusEqual : KalturaUserEntryExtendedStatus;
	extendedStatusIn : string;
	extendedStatusNotIn : string;

    constructor(data? : KalturaUserEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserEntryBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				entryIdNotIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				userIdNotIn : { type : 's' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryStatus, subType : 'KalturaUserEntryStatus' },
				createdAtLessThanOrEqual : { type : 'd' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaUserEntryType, subType : 'KalturaUserEntryType' },
				extendedStatusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' },
				extendedStatusIn : { type : 's' },
				extendedStatusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserEntryBaseFilter',KalturaUserEntryBaseFilter);
