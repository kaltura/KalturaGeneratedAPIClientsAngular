
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	accessControl : KalturaAccessControl;
}

/**
 * Build request payload for service 'accessControl' action 'update'.
 *
 * Usage: Update Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AccessControlUpdateAction extends KalturaRequest<KalturaAccessControl> {

    id : number;
	accessControl : KalturaAccessControl;

    constructor(data : AccessControlUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				accessControl : { type : 'o', subTypeConstructor : KalturaAccessControl, subType : 'KalturaAccessControl' }
            }
        );
        return result;
    }
}

