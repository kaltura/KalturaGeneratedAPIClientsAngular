
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : string;
	status : KalturaCuePointStatus;
}

/**
 * Build request payload for service 'cuePoint' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CuePointUpdateStatusAction extends KalturaRequest<void> {

    id : string;
	status : KalturaCuePointStatus;

    constructor(data : CuePointUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cuepoint_cuepoint' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaCuePointStatus, subType : 'KalturaCuePointStatus' }
            }
        );
        return result;
    }
}

