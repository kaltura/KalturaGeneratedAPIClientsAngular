
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem } from './KalturaVarPartnerUsageItem';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPartnerUsageListResponseArgs  extends KalturaListResponseArgs {
    total? : KalturaVarPartnerUsageItem;
	objects? : KalturaVarPartnerUsageItem[];
}


export class KalturaPartnerUsageListResponse extends KalturaListResponse {

    total : KalturaVarPartnerUsageItem;
	objects : KalturaVarPartnerUsageItem[];

    constructor(data? : KalturaPartnerUsageListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPartnerUsageListResponse' },
				total : { type : 'o', subTypeConstructor : KalturaVarPartnerUsageItem, subType : 'KalturaVarPartnerUsageItem' },
				objects : { type : 'a', subTypeConstructor : KalturaVarPartnerUsageItem, subType : 'KalturaVarPartnerUsageItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPartnerUsageListResponse'] = KalturaPartnerUsageListResponse;