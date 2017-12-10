
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStatsEventType } from './KalturaLiveStatsEventType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStatsEventArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	entryId? : string;
	eventType? : KalturaLiveStatsEventType;
	sessionId? : string;
	eventIndex? : number;
	bufferTime? : number;
	bitrate? : number;
	referrer? : string;
	isLive? : boolean;
	startTime? : string;
	deliveryType? : KalturaPlaybackProtocol;
}


export class KalturaLiveStatsEvent extends KalturaObjectBase {

    partnerId : number;
	entryId : string;
	eventType : KalturaLiveStatsEventType;
	sessionId : string;
	eventIndex : number;
	bufferTime : number;
	bitrate : number;
	referrer : string;
	isLive : boolean;
	startTime : string;
	deliveryType : KalturaPlaybackProtocol;

    constructor(data? : KalturaLiveStatsEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStatsEvent' },
				partnerId : { type : 'n' },
				entryId : { type : 's' },
				eventType : { type : 'en', subTypeConstructor : KalturaLiveStatsEventType, subType : 'KalturaLiveStatsEventType' },
				sessionId : { type : 's' },
				eventIndex : { type : 'n' },
				bufferTime : { type : 'n' },
				bitrate : { type : 'n' },
				referrer : { type : 's' },
				isLive : { type : 'b' },
				startTime : { type : 's' },
				deliveryType : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStatsEvent',KalturaLiveStatsEvent);
