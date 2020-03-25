
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaWatchLaterUserEntryAdvancedFilterArgs  extends KalturaSearchItemArgs {
    idEqual? : number;
	idIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	extendedStatusEqual? : KalturaUserEntryExtendedStatus;
	extendedStatusIn? : string;
}


export class KalturaWatchLaterUserEntryAdvancedFilter extends KalturaSearchItem {

    idEqual : number;
	idIn : string;
	userIdEqual : string;
	userIdIn : string;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	extendedStatusEqual : KalturaUserEntryExtendedStatus;
	extendedStatusIn : string;

    constructor(data? : KalturaWatchLaterUserEntryAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchLaterUserEntryAdvancedFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				extendedStatusEqual : { type : 'es', subTypeConstructor : KalturaUserEntryExtendedStatus, subType : 'KalturaUserEntryExtendedStatus' },
				extendedStatusIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWatchLaterUserEntryAdvancedFilter'] = KalturaWatchLaterUserEntryAdvancedFilter;