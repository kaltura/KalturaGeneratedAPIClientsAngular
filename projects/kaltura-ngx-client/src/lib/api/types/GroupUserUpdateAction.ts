
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUser } from './KalturaGroupUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserUpdateActionArgs  extends KalturaRequestArgs {
    groupUserId : string;
	groupUser : KalturaGroupUser;
}

/**
 * Build request payload for service 'groupUser' action 'update'.
 *
 * Usage: update GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 */
export class GroupUserUpdateAction extends KalturaRequest<KalturaGroupUser> {

    groupUserId : string;
	groupUser : KalturaGroupUser;

    constructor(data : GroupUserUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				groupUserId : { type : 's' },
				groupUser : { type : 'o', subTypeConstructor : KalturaGroupUser, subType : 'KalturaGroupUser' }
            }
        );
        return result;
    }
}

