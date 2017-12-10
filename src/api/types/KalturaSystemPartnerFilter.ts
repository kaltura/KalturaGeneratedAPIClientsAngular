
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerFilter, KalturaPartnerFilterArgs } from './KalturaPartnerFilter';

export interface KalturaSystemPartnerFilterArgs  extends KalturaPartnerFilterArgs {
    partnerParentIdEqual? : number;
	partnerParentIdIn? : string;
}


export class KalturaSystemPartnerFilter extends KalturaPartnerFilter {

    partnerParentIdEqual : number;
	partnerParentIdIn : string;

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
				partnerParentIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSystemPartnerFilter',KalturaSystemPartnerFilter);
