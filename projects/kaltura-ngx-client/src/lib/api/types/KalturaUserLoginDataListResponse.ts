
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserLoginData } from './KalturaUserLoginData';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserLoginDataListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUserLoginDataListResponse extends KalturaListResponse {

    readonly objects : KalturaUserLoginData[];

    constructor(data? : KalturaUserLoginDataListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserLoginDataListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUserLoginData, subType : 'KalturaUserLoginData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserLoginDataListResponse'] = KalturaUserLoginDataListResponse;