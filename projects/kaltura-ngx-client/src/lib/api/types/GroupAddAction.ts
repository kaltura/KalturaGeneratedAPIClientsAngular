
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroup } from './KalturaGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupAddActionArgs  extends KalturaRequestArgs {
    group : KalturaGroup;
}

/**
 * Build request payload for service 'group' action 'add'.
 *
 * Usage: Adds a new group (user of type group)
 *
 * Server response type:         KalturaGroup
 * Server failure response type: KalturaAPIException
 */
export class GroupAddAction extends KalturaRequest<KalturaGroup> {

    group : KalturaGroup;

    constructor(data : GroupAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				group : { type : 'o', subTypeConstructor : KalturaGroup, subType : 'KalturaGroup' }
            }
        );
        return result;
    }
}

