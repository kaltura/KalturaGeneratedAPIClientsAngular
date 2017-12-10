
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaLiveToVodJobDataArgs  extends KalturaJobDataArgs {
    vodEntryId? : string;
	liveEntryId? : string;
	totalVodDuration? : number;
	lastSegmentDuration? : number;
	amfArray? : string;
	lastCuePointSyncTime? : Date;
	lastSegmentDrift? : number;
}


export class KalturaLiveToVodJobData extends KalturaJobData {

    vodEntryId : string;
	liveEntryId : string;
	totalVodDuration : number;
	lastSegmentDuration : number;
	amfArray : string;
	lastCuePointSyncTime : Date;
	lastSegmentDrift : number;

    constructor(data? : KalturaLiveToVodJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveToVodJobData' },
				vodEntryId : { type : 's' },
				liveEntryId : { type : 's' },
				totalVodDuration : { type : 'n' },
				lastSegmentDuration : { type : 'n' },
				amfArray : { type : 's' },
				lastCuePointSyncTime : { type : 'd' },
				lastSegmentDrift : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveToVodJobData',KalturaLiveToVodJobData);
