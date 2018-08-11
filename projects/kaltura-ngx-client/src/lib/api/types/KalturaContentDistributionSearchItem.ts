
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaContentDistributionSearchItemArgs  extends KalturaSearchItemArgs {
    noDistributionProfiles? : boolean;
	distributionProfileId? : number;
	distributionSunStatus? : KalturaEntryDistributionSunStatus;
	entryDistributionFlag? : KalturaEntryDistributionFlag;
	entryDistributionStatus? : KalturaEntryDistributionStatus;
	hasEntryDistributionValidationErrors? : boolean;
	entryDistributionValidationErrors? : string;
}


export class KalturaContentDistributionSearchItem extends KalturaSearchItem {

    noDistributionProfiles : boolean;
	distributionProfileId : number;
	distributionSunStatus : KalturaEntryDistributionSunStatus;
	entryDistributionFlag : KalturaEntryDistributionFlag;
	entryDistributionStatus : KalturaEntryDistributionStatus;
	hasEntryDistributionValidationErrors : boolean;
	entryDistributionValidationErrors : string;

    constructor(data? : KalturaContentDistributionSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentDistributionSearchItem' },
				noDistributionProfiles : { type : 'b' },
				distributionProfileId : { type : 'n' },
				distributionSunStatus : { type : 'en', subTypeConstructor : KalturaEntryDistributionSunStatus, subType : 'KalturaEntryDistributionSunStatus' },
				entryDistributionFlag : { type : 'en', subTypeConstructor : KalturaEntryDistributionFlag, subType : 'KalturaEntryDistributionFlag' },
				entryDistributionStatus : { type : 'en', subTypeConstructor : KalturaEntryDistributionStatus, subType : 'KalturaEntryDistributionStatus' },
				hasEntryDistributionValidationErrors : { type : 'b' },
				entryDistributionValidationErrors : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContentDistributionSearchItem'] = KalturaContentDistributionSearchItem;