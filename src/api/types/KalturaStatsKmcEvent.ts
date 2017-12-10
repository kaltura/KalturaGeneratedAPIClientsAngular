
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStatsKmcEventType } from './KalturaStatsKmcEventType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaStatsKmcEventArgs  extends KalturaObjectBaseArgs {
    clientVer? : string;
	kmcEventActionPath? : string;
	kmcEventType? : KalturaStatsKmcEventType;
	eventTimestamp? : number;
	sessionId? : string;
	partnerId? : number;
	entryId? : string;
	widgetId? : string;
	uiconfId? : number;
	userId? : string;
}


export class KalturaStatsKmcEvent extends KalturaObjectBase {

    clientVer : string;
	kmcEventActionPath : string;
	kmcEventType : KalturaStatsKmcEventType;
	eventTimestamp : number;
	sessionId : string;
	partnerId : number;
	entryId : string;
	widgetId : string;
	uiconfId : number;
	userId : string;
	readonly userIp : string;

    constructor(data? : KalturaStatsKmcEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStatsKmcEvent' },
				clientVer : { type : 's' },
				kmcEventActionPath : { type : 's' },
				kmcEventType : { type : 'en', subTypeConstructor : KalturaStatsKmcEventType, subType : 'KalturaStatsKmcEventType' },
				eventTimestamp : { type : 'n' },
				sessionId : { type : 's' },
				partnerId : { type : 'n' },
				entryId : { type : 's' },
				widgetId : { type : 's' },
				uiconfId : { type : 'n' },
				userId : { type : 's' },
				userIp : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStatsKmcEvent',KalturaStatsKmcEvent);
