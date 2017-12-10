
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	cuePoint : KalturaCuePoint;
}

/**
 * Build request payload for service 'cuePoint' action 'update'.
 *
 * Usage: Update cue point by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointUpdateAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	cuePoint : KalturaCuePoint;

    constructor(data : CuePointUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				cuePoint : { type : 'o', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

