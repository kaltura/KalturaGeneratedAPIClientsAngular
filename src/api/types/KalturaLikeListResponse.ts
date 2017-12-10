
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLike } from './KalturaLike';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaLikeListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaLikeListResponse extends KalturaListResponse {

    readonly objects : KalturaLike[];

    constructor(data? : KalturaLikeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaLikeListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaLike, subType : 'KalturaLike' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLikeListResponse',KalturaLikeListResponse);
