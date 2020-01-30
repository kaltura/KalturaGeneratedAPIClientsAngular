
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamBitrate } from './KalturaLiveStreamBitrate';
import { KalturaLiveEntry, KalturaLiveEntryArgs } from './KalturaLiveEntry';

export interface KalturaLiveStreamEntryArgs  extends KalturaLiveEntryArgs {
    bitrates? : KalturaLiveStreamBitrate[];
	primaryBroadcastingUrl? : string;
	secondaryBroadcastingUrl? : string;
	primarySecuredBroadcastingUrl? : string;
	secondarySecuredBroadcastingUrl? : string;
	primaryRtspBroadcastingUrl? : string;
	secondaryRtspBroadcastingUrl? : string;
	streamName? : string;
	streamUrl? : string;
	hlsStreamUrl? : string;
	urlManager? : string;
	encodingIP1? : string;
	encodingIP2? : string;
	streamPassword? : string;
}


export class KalturaLiveStreamEntry extends KalturaLiveEntry {

    readonly streamRemoteId : string;
	readonly streamRemoteBackupId : string;
	bitrates : KalturaLiveStreamBitrate[];
	primaryBroadcastingUrl : string;
	secondaryBroadcastingUrl : string;
	primarySecuredBroadcastingUrl : string;
	secondarySecuredBroadcastingUrl : string;
	primaryRtspBroadcastingUrl : string;
	secondaryRtspBroadcastingUrl : string;
	streamName : string;
	streamUrl : string;
	hlsStreamUrl : string;
	urlManager : string;
	encodingIP1 : string;
	encodingIP2 : string;
	streamPassword : string;
	readonly streamUsername : string;
	readonly primaryServerNodeId : number;
	readonly sipToken : string;

    constructor(data? : KalturaLiveStreamEntryArgs)
    {
        super(data);
        if (typeof this.bitrates === 'undefined') this.bitrates = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntry' },
				streamRemoteId : { type : 's', readOnly : true },
				streamRemoteBackupId : { type : 's', readOnly : true },
				bitrates : { type : 'a', subTypeConstructor : KalturaLiveStreamBitrate, subType : 'KalturaLiveStreamBitrate' },
				primaryBroadcastingUrl : { type : 's' },
				secondaryBroadcastingUrl : { type : 's' },
				primarySecuredBroadcastingUrl : { type : 's' },
				secondarySecuredBroadcastingUrl : { type : 's' },
				primaryRtspBroadcastingUrl : { type : 's' },
				secondaryRtspBroadcastingUrl : { type : 's' },
				streamName : { type : 's' },
				streamUrl : { type : 's' },
				hlsStreamUrl : { type : 's' },
				urlManager : { type : 's' },
				encodingIP1 : { type : 's' },
				encodingIP2 : { type : 's' },
				streamPassword : { type : 's' },
				streamUsername : { type : 's', readOnly : true },
				primaryServerNodeId : { type : 'n', readOnly : true },
				sipToken : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamEntry'] = KalturaLiveStreamEntry;