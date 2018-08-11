
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadICalJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    eventsType? : KalturaScheduleEventType;
}


export class KalturaBulkUploadICalJobData extends KalturaBulkUploadJobData {

    eventsType : KalturaScheduleEventType;

    constructor(data? : KalturaBulkUploadICalJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadICalJobData' },
				eventsType : { type : 'en', subTypeConstructor : KalturaScheduleEventType, subType : 'KalturaScheduleEventType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadICalJobData'] = KalturaBulkUploadICalJobData;