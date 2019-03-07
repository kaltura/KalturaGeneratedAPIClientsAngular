
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryVendorTask } from './KalturaEntryVendorTask';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEntryVendorTaskListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaEntryVendorTaskListResponse extends KalturaListResponse {

    readonly objects : KalturaEntryVendorTask[];

    constructor(data? : KalturaEntryVendorTaskListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryVendorTaskListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaEntryVendorTask, subType : 'KalturaEntryVendorTask' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryVendorTaskListResponse'] = KalturaEntryVendorTaskListResponse;