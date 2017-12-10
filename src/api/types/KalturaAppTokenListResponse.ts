
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAppTokenListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaAppTokenListResponse extends KalturaListResponse {

    readonly objects : KalturaAppToken[];

    constructor(data? : KalturaAppTokenListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAppTokenListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaAppToken, subType : 'KalturaAppToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAppTokenListResponse',KalturaAppTokenListResponse);
