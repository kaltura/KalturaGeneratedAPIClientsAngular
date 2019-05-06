
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupCloneActionArgs  extends KalturaRequestArgs {
    originalGroupId : string;
	newGroupId : string;
	newGroupName? : string;
}

/**
 * Build request payload for service 'group' action 'clone'.
 *
 * Usage: clone the group (groupId), and set group id with the neeGroupName
 *
 * Server response type:         KalturaGroup
 * Server failure response type: KalturaAPIException
 */
export class GroupCloneAction extends KalturaRequest<KalturaGroup> {

    originalGroupId : string;
	newGroupId : string;
	newGroupName : string;

    constructor(data : GroupCloneActionArgs)
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
				action : { type : 'c', default : 'clone' },
				originalGroupId : { type : 's' },
				newGroupId : { type : 's' },
				newGroupName : { type : 's' }
            }
        );
        return result;
    }
}

