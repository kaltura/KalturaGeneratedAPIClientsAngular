
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStatsEventType } from './KalturaStatsEventType';
import { KalturaStatsFeatureType } from './KalturaStatsFeatureType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStatsEventArgs  extends KalturaObjectBaseArgs {
    clientVer? : string;
	eventType? : KalturaStatsEventType;
	eventTimestamp? : number;
	sessionId? : string;
	partnerId? : number;
	entryId? : string;
	uniqueViewer? : string;
	widgetId? : string;
	uiconfId? : number;
	userId? : string;
	currentPoint? : number;
	duration? : number;
	processDuration? : number;
	controlId? : string;
	seek? : boolean;
	newPoint? : number;
	referrer? : string;
	isFirstInSession? : boolean;
	applicationId? : string;
	contextId? : number;
	featureType? : KalturaStatsFeatureType;
}


export class KalturaStatsEvent extends KalturaObjectBase {

    clientVer : string;
	eventType : KalturaStatsEventType;
	eventTimestamp : number;
	sessionId : string;
	partnerId : number;
	entryId : string;
	uniqueViewer : string;
	widgetId : string;
	uiconfId : number;
	userId : string;
	currentPoint : number;
	duration : number;
	readonly userIp : string;
	processDuration : number;
	controlId : string;
	seek : boolean;
	newPoint : number;
	referrer : string;
	isFirstInSession : boolean;
	applicationId : string;
	contextId : number;
	featureType : KalturaStatsFeatureType;

    constructor(data? : KalturaStatsEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStatsEvent' },
				clientVer : { type : 's' },
				eventType : { type : 'en', subTypeConstructor : KalturaStatsEventType, subType : 'KalturaStatsEventType' },
				eventTimestamp : { type : 'n' },
				sessionId : { type : 's' },
				partnerId : { type : 'n' },
				entryId : { type : 's' },
				uniqueViewer : { type : 's' },
				widgetId : { type : 's' },
				uiconfId : { type : 'n' },
				userId : { type : 's' },
				currentPoint : { type : 'n' },
				duration : { type : 'n' },
				userIp : { type : 's', readOnly : true },
				processDuration : { type : 'n' },
				controlId : { type : 's' },
				seek : { type : 'b' },
				newPoint : { type : 'n' },
				referrer : { type : 's' },
				isFirstInSession : { type : 'b' },
				applicationId : { type : 's' },
				contextId : { type : 'n' },
				featureType : { type : 'en', subTypeConstructor : KalturaStatsFeatureType, subType : 'KalturaStatsFeatureType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStatsEvent',KalturaStatsEvent);
