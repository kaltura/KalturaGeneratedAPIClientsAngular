
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserDeleteActionArgs  extends KalturaRequestArgs {
    userId : string;
	groupId : string;
}

/**
 * Build request payload for service 'groupUser' action 'delete'.
 *
 * Usage: delete by userId and groupId
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GroupUserDeleteAction extends KalturaRequest<void> {

    userId : string;
	groupId : string;

    constructor(data : GroupUserDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'groupuser' },
				action : { type : 'c', default : 'delete' },
				userId : { type : 's' },
				groupId : { type : 's' }
            }
        );
        return result;
    }
}

