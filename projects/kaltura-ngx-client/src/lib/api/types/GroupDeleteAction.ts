
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupDeleteActionArgs  extends KalturaRequestArgs {
    groupId : string;
}

/**
 * Build request payload for service 'group' action 'delete'.
 *
 * Usage: Delete group by ID
 *
 * Server response type:         KalturaGroup
 * Server failure response type: KalturaAPIException
 */
export class GroupDeleteAction extends KalturaRequest<KalturaGroup> {

    groupId : string;

    constructor(data : GroupDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGroup', responseConstructor : KalturaGroup  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'group_group' },
				action : { type : 'c', default : 'delete' },
				groupId : { type : 's' }
            }
        );
        return result;
    }
}

