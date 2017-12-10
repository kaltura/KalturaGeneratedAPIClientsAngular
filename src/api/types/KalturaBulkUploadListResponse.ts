
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBulkUploadListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBulkUploadListResponse extends KalturaListResponse {

    readonly objects : KalturaBulkUpload[];

    constructor(data? : KalturaBulkUploadListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkUploadListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBulkUpload, subType : 'KalturaBulkUpload' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadListResponse',KalturaBulkUploadListResponse);
