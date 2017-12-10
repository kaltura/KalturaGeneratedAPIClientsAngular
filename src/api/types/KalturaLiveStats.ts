
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStatsArgs  extends KalturaObjectBaseArgs {
    audience? : number;
	dvrAudience? : number;
	avgBitrate? : number;
	bufferTime? : number;
	plays? : number;
	secondsViewed? : number;
	startEvent? : number;
	timestamp? : Date;
}


export class KalturaLiveStats extends KalturaObjectBase {

    audience : number;
	dvrAudience : number;
	avgBitrate : number;
	bufferTime : number;
	plays : number;
	secondsViewed : number;
	startEvent : number;
	timestamp : Date;

    constructor(data? : KalturaLiveStatsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStats' },
				audience : { type : 'n' },
				dvrAudience : { type : 'n' },
				avgBitrate : { type : 'n' },
				bufferTime : { type : 'n' },
				plays : { type : 'n' },
				secondsViewed : { type : 'n' },
				startEvent : { type : 'n' },
				timestamp : { type : 'd' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStats',KalturaLiveStats);
