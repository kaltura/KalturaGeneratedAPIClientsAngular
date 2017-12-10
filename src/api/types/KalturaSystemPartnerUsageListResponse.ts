
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSystemPartnerUsageItem } from './KalturaSystemPartnerUsageItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSystemPartnerUsageListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSystemPartnerUsageItem[];
}


export class KalturaSystemPartnerUsageListResponse extends KalturaListResponse {

    objects : KalturaSystemPartnerUsageItem[];

    constructor(data? : KalturaSystemPartnerUsageListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSystemPartnerUsageListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSystemPartnerUsageItem, subType : 'KalturaSystemPartnerUsageItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSystemPartnerUsageListResponse',KalturaSystemPartnerUsageListResponse);
