
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLiveChannelSegmentListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaLiveChannelSegmentListResponse extends KalturaListResponse {

    readonly objects : KalturaLiveChannelSegment[];

    constructor(data? : KalturaLiveChannelSegmentListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelSegmentListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaLiveChannelSegment, subType : 'KalturaLiveChannelSegment' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelSegmentListResponse',KalturaLiveChannelSegmentListResponse);
