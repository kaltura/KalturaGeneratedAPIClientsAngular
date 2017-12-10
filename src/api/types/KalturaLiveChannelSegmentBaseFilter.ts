
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaLiveChannelSegmentBaseFilterArgs  extends KalturaRelatedFilterArgs {
    createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaLiveChannelSegmentStatus;
	statusIn? : string;
	channelIdEqual? : string;
	channelIdIn? : string;
	startTimeGreaterThanOrEqual? : number;
	startTimeLessThanOrEqual? : number;
}


export class KalturaLiveChannelSegmentBaseFilter extends KalturaRelatedFilter {

    createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaLiveChannelSegmentStatus;
	statusIn : string;
	channelIdEqual : string;
	channelIdIn : string;
	startTimeGreaterThanOrEqual : number;
	startTimeLessThanOrEqual : number;

    constructor(data? : KalturaLiveChannelSegmentBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelSegmentBaseFilter' },
				createdAtGreaterThanOrEqual : { type : 'n' },
				createdAtLessThanOrEqual : { type : 'n' },
				updatedAtGreaterThanOrEqual : { type : 'n' },
				updatedAtLessThanOrEqual : { type : 'n' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaLiveChannelSegmentStatus, subType : 'KalturaLiveChannelSegmentStatus' },
				statusIn : { type : 's' },
				channelIdEqual : { type : 's' },
				channelIdIn : { type : 's' },
				startTimeGreaterThanOrEqual : { type : 'n' },
				startTimeLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveChannelSegmentBaseFilter',KalturaLiveChannelSegmentBaseFilter);
