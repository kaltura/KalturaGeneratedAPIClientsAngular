
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserSyncActionArgs  extends KalturaRequestArgs {
    userId : string;
	groupIds : string;
	removeFromExistingGroups? : boolean;
	createNewGroups? : boolean;
}

/**
 * Build request payload for service 'groupUser' action 'sync'.
 *
 * Usage: sync by userId and groupIds
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class GroupUserSyncAction extends KalturaRequest<KalturaBulkUpload> {

    userId : string;
	groupIds : string;
	removeFromExistingGroups : boolean;
	createNewGroups : boolean;

    constructor(data : GroupUserSyncActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
        if (typeof this.removeFromExistingGroups === 'undefined') this.removeFromExistingGroups = true;
		if (typeof this.createNewGroups === 'undefined') this.createNewGroups = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'groupuser' },
				action : { type : 'c', default : 'sync' },
				userId : { type : 's' },
				groupIds : { type : 's' },
				removeFromExistingGroups : { type : 'b' },
				createNewGroups : { type : 'b' }
            }
        );
        return result;
    }
}

