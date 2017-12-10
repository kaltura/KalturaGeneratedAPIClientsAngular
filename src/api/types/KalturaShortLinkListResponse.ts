
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaShortLinkListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaShortLinkListResponse extends KalturaListResponse {

    readonly objects : KalturaShortLink[];

    constructor(data? : KalturaShortLinkListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaShortLinkListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaShortLink, subType : 'KalturaShortLink' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaShortLinkListResponse',KalturaShortLinkListResponse);
