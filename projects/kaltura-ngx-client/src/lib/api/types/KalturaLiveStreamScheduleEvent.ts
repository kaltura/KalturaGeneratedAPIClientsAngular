
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveFeature } from './KalturaLiveFeature';
import { KalturaBaseLiveScheduleEvent, KalturaBaseLiveScheduleEventArgs } from './KalturaBaseLiveScheduleEvent';

export interface KalturaLiveStreamScheduleEventArgs  extends KalturaBaseLiveScheduleEventArgs {
    sourceEntryId? : string;
	projectedAudience? : number;
	preStartTime? : number;
	postEndTime? : number;
	preStartEntryId? : string;
	postEndEntryId? : string;
	isContentInterruptible? : boolean;
	liveFeatures? : KalturaLiveFeature[];
}


export class KalturaLiveStreamScheduleEvent extends KalturaBaseLiveScheduleEvent {

    sourceEntryId : string;
	projectedAudience : number;
	preStartTime : number;
	postEndTime : number;
	preStartEntryId : string;
	postEndEntryId : string;
	isContentInterruptible : boolean;
	liveFeatures : KalturaLiveFeature[];

    constructor(data? : KalturaLiveStreamScheduleEventArgs)
    {
        super(data);
        if (typeof this.liveFeatures === 'undefined') this.liveFeatures = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamScheduleEvent' },
				sourceEntryId : { type : 's' },
				projectedAudience : { type : 'n' },
				preStartTime : { type : 'n' },
				postEndTime : { type : 'n' },
				preStartEntryId : { type : 's' },
				postEndEntryId : { type : 's' },
				isContentInterruptible : { type : 'b' },
				liveFeatures : { type : 'a', subTypeConstructor : KalturaLiveFeature, subType : 'KalturaLiveFeature' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamScheduleEvent'] = KalturaLiveStreamScheduleEvent;