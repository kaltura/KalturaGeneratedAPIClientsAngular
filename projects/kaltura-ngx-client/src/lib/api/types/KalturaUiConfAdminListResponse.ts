
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfAdmin } from './KalturaUiConfAdmin';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUiConfAdminListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUiConfAdminListResponse extends KalturaListResponse {

    readonly objects : KalturaUiConfAdmin[];

    constructor(data? : KalturaUiConfAdminListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUiConfAdminListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUiConfAdmin, subType : 'KalturaUiConfAdmin' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUiConfAdminListResponse'] = KalturaUiConfAdminListResponse;