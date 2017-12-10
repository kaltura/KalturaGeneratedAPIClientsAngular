
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryLiveStats, KalturaEntryLiveStatsArgs } from './KalturaEntryLiveStats';

export interface KalturaEntryReferrerLiveStatsArgs  extends KalturaEntryLiveStatsArgs {
    referrer? : string;
}


export class KalturaEntryReferrerLiveStats extends KalturaEntryLiveStats {

    referrer : string;

    constructor(data? : KalturaEntryReferrerLiveStatsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryReferrerLiveStats' },
				referrer : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryReferrerLiveStats',KalturaEntryReferrerLiveStats);
