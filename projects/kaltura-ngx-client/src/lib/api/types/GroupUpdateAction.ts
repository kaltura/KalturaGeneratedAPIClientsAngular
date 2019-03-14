
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUpdateActionArgs  extends KalturaRequestArgs {
    groupId : string;
	group : KalturaGroup;
}

/**
 * Build request payload for service 'group' action 'update'.
 *
 * Usage: Update group by ID
 *
 * Server response type:         KalturaGroup
 * Server failure response type: KalturaAPIException
 */
export class GroupUpdateAction extends KalturaRequest<KalturaGroup> {

    groupId : string;
	group : KalturaGroup;

    constructor(data : GroupUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				groupId : { type : 's' },
				group : { type : 'o', subTypeConstructor : KalturaGroup, subType : 'KalturaGroup' }
            }
        );
        return result;
    }
}

