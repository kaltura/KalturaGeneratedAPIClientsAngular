
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'cuePoint' action 'get'.
 *
 * Usage: Retrieve an CuePoint object by id
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointGetAction extends KalturaRequest<KalturaCuePoint> {

    id : string;

    constructor(data : CuePointGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

