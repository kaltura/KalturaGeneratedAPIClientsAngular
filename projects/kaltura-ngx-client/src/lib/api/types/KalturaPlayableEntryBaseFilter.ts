
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';

export interface KalturaPlayableEntryBaseFilterArgs  extends KalturaBaseEntryFilterArgs {
    lastPlayedAtGreaterThanOrEqual? : Date;
	lastPlayedAtLessThanOrEqual? : Date;
	lastPlayedAtLessThanOrEqualOrNull? : Date;
	durationLessThan? : number;
	durationGreaterThan? : number;
	durationLessThanOrEqual? : number;
	durationGreaterThanOrEqual? : number;
	durationTypeMatchOr? : string;
}


export class KalturaPlayableEntryBaseFilter extends KalturaBaseEntryFilter {

    lastPlayedAtGreaterThanOrEqual : Date;
	lastPlayedAtLessThanOrEqual : Date;
	lastPlayedAtLessThanOrEqualOrNull : Date;
	durationLessThan : number;
	durationGreaterThan : number;
	durationLessThanOrEqual : number;
	durationGreaterThanOrEqual : number;
	durationTypeMatchOr : string;

    constructor(data? : KalturaPlayableEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntryBaseFilter' },
				lastPlayedAtGreaterThanOrEqual : { type : 'd' },
				lastPlayedAtLessThanOrEqual : { type : 'd' },
				lastPlayedAtLessThanOrEqualOrNull : { type : 'd' },
				durationLessThan : { type : 'n' },
				durationGreaterThan : { type : 'n' },
				durationLessThanOrEqual : { type : 'n' },
				durationGreaterThanOrEqual : { type : 'n' },
				durationTypeMatchOr : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayableEntryBaseFilter'] = KalturaPlayableEntryBaseFilter;