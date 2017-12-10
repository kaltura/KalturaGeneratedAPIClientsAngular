
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	accessControlProfile : KalturaAccessControlProfile;
}

/**
 * Build request payload for service 'accessControlProfile' action 'update'.
 *
 * Usage: Update access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AccessControlProfileUpdateAction extends KalturaRequest<KalturaAccessControlProfile> {

    id : number;
	accessControlProfile : KalturaAccessControlProfile;

    constructor(data : AccessControlProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControlProfile', responseConstructor : KalturaAccessControlProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'accesscontrolprofile' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				accessControlProfile : { type : 'o', subTypeConstructor : KalturaAccessControlProfile, subType : 'KalturaAccessControlProfile' }
            }
        );
        return result;
    }
}

