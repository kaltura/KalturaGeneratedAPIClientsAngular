
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';

import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : KalturaResponseProfileStatus;
}

/**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ResponseProfileUpdateStatusAction extends KalturaRequest<KalturaResponseProfile> {

    id : number;
	status : KalturaResponseProfileStatus;

    constructor(data : ResponseProfileUpdateStatusActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResponseProfile', responseConstructor : KalturaResponseProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'responseprofile' },
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'en', subTypeConstructor : KalturaResponseProfileStatus, subType : 'KalturaResponseProfileStatus' }
            }
        );
        return result;
    }
}

