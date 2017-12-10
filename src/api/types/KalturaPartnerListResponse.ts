
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartner } from './KalturaPartner';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPartnerListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaPartnerListResponse extends KalturaListResponse {

    readonly objects : KalturaPartner[];

    constructor(data? : KalturaPartnerListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPartnerListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaPartner, subType : 'KalturaPartner' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerListResponse',KalturaPartnerListResponse);
