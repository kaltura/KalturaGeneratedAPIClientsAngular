
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadScheduleEventJobData } from './KalturaBulkUploadScheduleEventJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface ScheduleEventAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadData? : KalturaBulkUploadScheduleEventJobData;
}

/**
 * Build request payload for service 'scheduleEvent' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class ScheduleEventAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadData : KalturaBulkUploadScheduleEventJobData;

    constructor(data : ScheduleEventAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'addFromBulkUpload' },
				fileData : { type : 'f' },
				bulkUploadData : { type : 'o', subTypeConstructor : KalturaBulkUploadScheduleEventJobData, subType : 'KalturaBulkUploadScheduleEventJobData' }
            }
        );
        return result;
    }
}

