
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlAddActionArgs  extends KalturaRequestArgs {
    accessControl : KalturaAccessControl;
}

/**
 * Build request payload for service 'accessControl' action 'add'.
 *
 * Usage: Add new Access Control Profile
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AccessControlAddAction extends KalturaRequest<KalturaAccessControl> {

    accessControl : KalturaAccessControl;

    constructor(data : AccessControlAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControl', responseConstructor : KalturaAccessControl  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'accesscontrol' },
				action : { type : 'c', default : 'add' },
				accessControl : { type : 'o', subTypeConstructor : KalturaAccessControl, subType : 'KalturaAccessControl' }
            }
        );
        return result;
    }
}

