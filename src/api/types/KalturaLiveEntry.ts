
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordStatus } from './KalturaRecordStatus';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaLivePublishStatus } from './KalturaLivePublishStatus';
import { KalturaLiveStreamPushPublishConfiguration } from './KalturaLiveStreamPushPublishConfiguration';
import { KalturaLiveEntryRecordingOptions } from './KalturaLiveEntryRecordingOptions';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaViewMode } from './KalturaViewMode';
import { KalturaRecordingStatus } from './KalturaRecordingStatus';
import { KalturaMediaEntry, KalturaMediaEntryArgs } from './KalturaMediaEntry';

export interface KalturaLiveEntryArgs  extends KalturaMediaEntryArgs {
    offlineMessage? : string;
	recordStatus? : KalturaRecordStatus;
	dvrStatus? : KalturaDVRStatus;
	dvrWindow? : number;
	lastElapsedRecordingTime? : number;
	liveStreamConfigurations? : KalturaLiveStreamConfiguration[];
	recordedEntryId? : string;
	pushPublishEnabled? : KalturaLivePublishStatus;
	publishConfigurations? : KalturaLiveStreamPushPublishConfiguration[];
	currentBroadcastStartTime? : number;
	recordingOptions? : KalturaLiveEntryRecordingOptions;
	segmentDuration? : number;
	explicitLive? : KalturaNullableBoolean;
	viewMode? : KalturaViewMode;
	recordingStatus? : KalturaRecordingStatus;
}


export class KalturaLiveEntry extends KalturaMediaEntry {

    offlineMessage : string;
	recordStatus : KalturaRecordStatus;
	dvrStatus : KalturaDVRStatus;
	dvrWindow : number;
	lastElapsedRecordingTime : number;
	liveStreamConfigurations : KalturaLiveStreamConfiguration[];
	recordedEntryId : string;
	pushPublishEnabled : KalturaLivePublishStatus;
	publishConfigurations : KalturaLiveStreamPushPublishConfiguration[];
	readonly firstBroadcast : number;
	readonly lastBroadcast : number;
	currentBroadcastStartTime : number;
	recordingOptions : KalturaLiveEntryRecordingOptions;
	readonly liveStatus : KalturaEntryServerNodeStatus;
	segmentDuration : number;
	explicitLive : KalturaNullableBoolean;
	viewMode : KalturaViewMode;
	recordingStatus : KalturaRecordingStatus;

    constructor(data? : KalturaLiveEntryArgs)
    {
        super(data);
        if (typeof this.liveStreamConfigurations === 'undefined') this.liveStreamConfigurations = [];
		if (typeof this.publishConfigurations === 'undefined') this.publishConfigurations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntry' },
				offlineMessage : { type : 's' },
				recordStatus : { type : 'en', subTypeConstructor : KalturaRecordStatus, subType : 'KalturaRecordStatus' },
				dvrStatus : { type : 'en', subTypeConstructor : KalturaDVRStatus, subType : 'KalturaDVRStatus' },
				dvrWindow : { type : 'n' },
				lastElapsedRecordingTime : { type : 'n' },
				liveStreamConfigurations : { type : 'a', subTypeConstructor : KalturaLiveStreamConfiguration, subType : 'KalturaLiveStreamConfiguration' },
				recordedEntryId : { type : 's' },
				pushPublishEnabled : { type : 'en', subTypeConstructor : KalturaLivePublishStatus, subType : 'KalturaLivePublishStatus' },
				publishConfigurations : { type : 'a', subTypeConstructor : KalturaLiveStreamPushPublishConfiguration, subType : 'KalturaLiveStreamPushPublishConfiguration' },
				firstBroadcast : { type : 'n', readOnly : true },
				lastBroadcast : { type : 'n', readOnly : true },
				currentBroadcastStartTime : { type : 'n' },
				recordingOptions : { type : 'o', subTypeConstructor : KalturaLiveEntryRecordingOptions, subType : 'KalturaLiveEntryRecordingOptions' },
				liveStatus : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				segmentDuration : { type : 'n' },
				explicitLive : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				viewMode : { type : 'en', subTypeConstructor : KalturaViewMode, subType : 'KalturaViewMode' },
				recordingStatus : { type : 'en', subTypeConstructor : KalturaRecordingStatus, subType : 'KalturaRecordingStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntry',KalturaLiveEntry);
