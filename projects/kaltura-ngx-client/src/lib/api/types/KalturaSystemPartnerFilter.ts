
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerFilter, KalturaPartnerFilterArgs } from './KalturaPartnerFilter';

export interface KalturaSystemPartnerFilterArgs  extends KalturaPartnerFilterArgs {
    partnerParentIdEqual? : number;
	partnerParentIdIn? : string;
	adminEmailEqual? : string;
}


export class KalturaSystemPartnerFilter extends KalturaPartnerFilter {

    partnerParentIdEqual : number;
	partnerParentIdIn : string;
	adminEmailEqual : string;

    constructor(data? : KalturaSystemPartnerFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSystemPartnerFilter' },
				partnerParentIdEqual : { type : 'n' },
				partnerParentIdIn : { type : 's' },
				adminEmailEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSystemPartnerFilter'] = KalturaSystemPartnerFilter;