
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentAddActionArgs  extends KalturaRequestArgs {
    liveChannelSegment : KalturaLiveChannelSegment;
}

/**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveChannelSegmentAddAction extends KalturaRequest<KalturaLiveChannelSegment> {

    liveChannelSegment : KalturaLiveChannelSegment;

    constructor(data : LiveChannelSegmentAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveChannelSegment', responseConstructor : KalturaLiveChannelSegment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livechannelsegment' },
				action : { type : 'c', default : 'add' },
				liveChannelSegment : { type : 'o', subTypeConstructor : KalturaLiveChannelSegment, subType : 'KalturaLiveChannelSegment' }
            }
        );
        return result;
    }
}

