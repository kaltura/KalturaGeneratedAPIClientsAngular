
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCoordinate } from './KalturaCoordinate';
import { KalturaEntryLiveStats, KalturaEntryLiveStatsArgs } from './KalturaEntryLiveStats';

export interface KalturaGeoTimeLiveStatsArgs  extends KalturaEntryLiveStatsArgs {
    city? : KalturaCoordinate;
	country? : KalturaCoordinate;
}


export class KalturaGeoTimeLiveStats extends KalturaEntryLiveStats {

    city : KalturaCoordinate;
	country : KalturaCoordinate;

    constructor(data? : KalturaGeoTimeLiveStatsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeoTimeLiveStats' },
				city : { type : 'o', subTypeConstructor : KalturaCoordinate, subType : 'KalturaCoordinate' },
				country : { type : 'o', subTypeConstructor : KalturaCoordinate, subType : 'KalturaCoordinate' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGeoTimeLiveStats',KalturaGeoTimeLiveStats);
