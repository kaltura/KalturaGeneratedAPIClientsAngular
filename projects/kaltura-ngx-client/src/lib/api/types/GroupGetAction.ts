
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupGetActionArgs  extends KalturaRequestArgs {
    groupId : string;
}

/**
 * Build request payload for service 'group' action 'get'.
 *
 * Usage: Retrieves a group object for a specified group ID
 *
 * Server response type:         KalturaGroup
 * Server failure response type: KalturaAPIException
 */
export class GroupGetAction extends KalturaRequest<KalturaGroup> {

    groupId : string;

    constructor(data : GroupGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				groupId : { type : 's' }
            }
        );
        return result;
    }
}

