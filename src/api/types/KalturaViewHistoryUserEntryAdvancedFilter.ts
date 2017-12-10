
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaViewHistoryUserEntryAdvancedFilterArgs  extends KalturaSearchItemArgs {
    idEqual? : string;
	idIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	updatedAtGreaterThanOrEqual? : string;
	updatedAtLessThanOrEqual? : string;
	extendedStatusEqual? : KalturaUserEntryExtendedStatus;
	extendedStatusIn? : string;
}


export class KalturaViewHistoryUserEntryAdvancedFilter extends KalturaSearchItem {

    idEqual : string;
	idIn : string;
	userIdEqual : string;
	userIdIn : string;
	updatedAtGreaterThanOrEqual : string;
	updatedAtLessThanOrEqual : string;
	extendedStatusEqual : KalturaUserEntryExtendedStatus;
	extendedStatusIn : string;

    constructor(data? : KalturaViewHistoryUserEntryAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewHistoryUserEntryAdvancedFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				updatedAtGreaterThanOrEqual : { type : 's' },
				updatedAtLessThanOrEqual : { type : 's' },
				extendedStatusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' },
				extendedStatusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewHistoryUserEntryAdvancedFilter',KalturaViewHistoryUserEntryAdvancedFilter);
