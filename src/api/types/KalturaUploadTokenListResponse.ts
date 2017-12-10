
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUploadTokenListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaUploadTokenListResponse extends KalturaListResponse {

    readonly objects : KalturaUploadToken[];

    constructor(data? : KalturaUploadTokenListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUploadTokenListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaUploadToken, subType : 'KalturaUploadToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadTokenListResponse',KalturaUploadTokenListResponse);
