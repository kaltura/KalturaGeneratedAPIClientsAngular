
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemotePath } from './KalturaRemotePath';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRemotePathListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaRemotePathListResponse extends KalturaListResponse {

    readonly objects : KalturaRemotePath[];

    constructor(data? : KalturaRemotePathListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRemotePathListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaRemotePath, subType : 'KalturaRemotePath' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRemotePathListResponse',KalturaRemotePathListResponse);
