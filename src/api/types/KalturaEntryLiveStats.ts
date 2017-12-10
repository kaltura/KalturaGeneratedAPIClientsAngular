
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStats, KalturaLiveStatsArgs } from './KalturaLiveStats';

export interface KalturaEntryLiveStatsArgs  extends KalturaLiveStatsArgs {
    entryId? : string;
	peakAudience? : number;
	peakDvrAudience? : number;
}


export class KalturaEntryLiveStats extends KalturaLiveStats {

    entryId : string;
	peakAudience : number;
	peakDvrAudience : number;

    constructor(data? : KalturaEntryLiveStatsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryLiveStats' },
				entryId : { type : 's' },
				peakAudience : { type : 'n' },
				peakDvrAudience : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryLiveStats',KalturaEntryLiveStats);
