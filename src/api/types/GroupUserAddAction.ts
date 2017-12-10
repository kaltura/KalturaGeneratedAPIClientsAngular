
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUser } from './KalturaGroupUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserAddActionArgs  extends KalturaRequestArgs {
    groupUser : KalturaGroupUser;
}

/**
 * Build request payload for service 'groupUser' action 'add'.
 *
 * Usage: Add new GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GroupUserAddAction extends KalturaRequest<KalturaGroupUser> {

    groupUser : KalturaGroupUser;

    constructor(data : GroupUserAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGroupUser', responseConstructor : KalturaGroupUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'groupuser' },
				action : { type : 'c', default : 'add' },
				groupUser : { type : 'o', subTypeConstructor : KalturaGroupUser, subType : 'KalturaGroupUser' }
            }
        );
        return result;
    }
}

