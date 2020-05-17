
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLockFileSyncsResponse } from './KalturaLockFileSyncsResponse';

import { KalturaFileSyncFilter } from './KalturaFileSyncFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileLockPendingFileSyncsActionArgs  extends KalturaRequestArgs {
    filter : KalturaFileSyncFilter;
	workerId : number;
	storageProfileId : number;
	maxCount : number;
	maxSize? : number;
}

/**
 * Build request payload for service 'storageProfile' action 'lockPendingFileSyncs'.
 *
 * Usage: storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker
 *
 * Server response type:         KalturaLockFileSyncsResponse
 * Server failure response type: KalturaAPIException
 */
export class StorageProfileLockPendingFileSyncsAction extends KalturaRequest<KalturaLockFileSyncsResponse> {

    filter : KalturaFileSyncFilter;
	workerId : number;
	storageProfileId : number;
	maxCount : number;
	maxSize : number;

    constructor(data : StorageProfileLockPendingFileSyncsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLockFileSyncsResponse', responseConstructor : KalturaLockFileSyncsResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'storageprofile' },
				action : { type : 'c', default : 'lockPendingFileSyncs' },
				filter : { type : 'o', subTypeConstructor : KalturaFileSyncFilter, subType : 'KalturaFileSyncFilter' },
				workerId : { type : 'n' },
				storageProfileId : { type : 'n' },
				maxCount : { type : 'n' },
				maxSize : { type : 'n' }
            }
        );
        return result;
    }
}

