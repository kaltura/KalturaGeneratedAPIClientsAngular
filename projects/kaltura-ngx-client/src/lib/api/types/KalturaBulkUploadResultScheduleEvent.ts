
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultScheduleEventArgs  extends KalturaBulkUploadResultArgs {
    referenceId? : string;
}


export class KalturaBulkUploadResultScheduleEvent extends KalturaBulkUploadResult {

    referenceId : string;

    constructor(data? : KalturaBulkUploadResultScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultScheduleEvent' },
				referenceId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadResultScheduleEvent'] = KalturaBulkUploadResultScheduleEvent;