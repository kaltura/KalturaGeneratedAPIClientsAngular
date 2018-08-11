
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointUpdateCuePointsTimesActionArgs  extends KalturaRequestArgs {
    id : string;
	startTime : number;
	endTime? : number;
}

/**
 * Build request payload for service 'cuePoint' action 'updateCuePointsTimes'.
 *
 * 
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export class CuePointUpdateCuePointsTimesAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	startTime : number;
	endTime : number;

    constructor(data : CuePointUpdateCuePointsTimesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCuePoint', responseConstructor : KalturaCuePoint  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'updateCuePointsTimes' },
				id : { type : 's' },
				startTime : { type : 'n' },
				endTime : { type : 'n' }
            }
        );
        return result;
    }
}

