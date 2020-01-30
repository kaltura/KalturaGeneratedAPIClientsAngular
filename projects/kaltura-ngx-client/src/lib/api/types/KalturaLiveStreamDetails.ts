
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaViewMode } from './KalturaViewMode';
import { KalturaLiveStreamBroadcastStatus } from './KalturaLiveStreamBroadcastStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamDetailsArgs  extends KalturaObjectBaseArgs {
    primaryStreamStatus? : KalturaEntryServerNodeStatus;
	secondaryStreamStatus? : KalturaEntryServerNodeStatus;
	viewMode? : KalturaViewMode;
	wasBroadcast? : boolean;
	broadcastStatus? : KalturaLiveStreamBroadcastStatus;
}


export class KalturaLiveStreamDetails extends KalturaObjectBase {

    primaryStreamStatus : KalturaEntryServerNodeStatus;
	secondaryStreamStatus : KalturaEntryServerNodeStatus;
	viewMode : KalturaViewMode;
	wasBroadcast : boolean;
	broadcastStatus : KalturaLiveStreamBroadcastStatus;

    constructor(data? : KalturaLiveStreamDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamDetails' },
				primaryStreamStatus : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				secondaryStreamStatus : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				viewMode : { type : 'en', subTypeConstructor : KalturaViewMode, subType : 'KalturaViewMode' },
				wasBroadcast : { type : 'b' },
				broadcastStatus : { type : 'en', subTypeConstructor : KalturaLiveStreamBroadcastStatus, subType : 'KalturaLiveStreamBroadcastStatus' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamDetails'] = KalturaLiveStreamDetails;