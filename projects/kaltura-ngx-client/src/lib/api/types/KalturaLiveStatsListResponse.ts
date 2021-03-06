
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStats } from './KalturaLiveStats';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLiveStatsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaLiveStats;
}


export class KalturaLiveStatsListResponse extends KalturaListResponse {

    objects : KalturaLiveStats;

    constructor(data? : KalturaLiveStatsListResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStatsListResponse' },
				objects : { type : 'o', subTypeConstructor : KalturaLiveStats, subType : 'KalturaLiveStats' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStatsListResponse'] = KalturaLiveStatsListResponse;