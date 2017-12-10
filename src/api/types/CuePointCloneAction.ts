
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	entryId : string;
}

/**
 * Build request payload for service 'cuePoint' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointCloneAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	entryId : string;

    constructor(data : CuePointCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				id : { type : 's' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

