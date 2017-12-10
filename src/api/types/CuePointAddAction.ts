
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointAddActionArgs  extends KalturaRequestArgs {
    cuePoint : KalturaCuePoint;
}

/**
 * Build request payload for service 'cuePoint' action 'add'.
 *
 * Usage: Allows you to add an cue point object associated with an entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointAddAction extends KalturaRequest<KalturaCuePoint> {

    cuePoint : KalturaCuePoint;

    constructor(data : CuePointAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				cuePoint : { type : 'o', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

