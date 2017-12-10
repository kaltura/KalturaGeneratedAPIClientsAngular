
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaPartnerGroupType } from './KalturaPartnerGroupType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPartnerBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	nameLike? : string;
	nameMultiLikeOr? : string;
	nameMultiLikeAnd? : string;
	nameEqual? : string;
	statusEqual? : KalturaPartnerStatus;
	statusIn? : string;
	partnerPackageEqual? : number;
	partnerPackageGreaterThanOrEqual? : number;
	partnerPackageLessThanOrEqual? : number;
	partnerPackageIn? : string;
	partnerGroupTypeEqual? : KalturaPartnerGroupType;
	partnerNameDescriptionWebsiteAdminNameAdminEmailLike? : string;
}


export class KalturaPartnerBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	nameLike : string;
	nameMultiLikeOr : string;
	nameMultiLikeAnd : string;
	nameEqual : string;
	statusEqual : KalturaPartnerStatus;
	statusIn : string;
	partnerPackageEqual : number;
	partnerPackageGreaterThanOrEqual : number;
	partnerPackageLessThanOrEqual : number;
	partnerPackageIn : string;
	partnerGroupTypeEqual : KalturaPartnerGroupType;
	partnerNameDescriptionWebsiteAdminNameAdminEmailLike : string;

    constructor(data? : KalturaPartnerBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				nameLike : { type : 's' },
				nameMultiLikeOr : { type : 's' },
				nameMultiLikeAnd : { type : 's' },
				nameEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaPartnerStatus, subType : 'KalturaPartnerStatus' },
				statusIn : { type : 's' },
				partnerPackageEqual : { type : 'n' },
				partnerPackageGreaterThanOrEqual : { type : 'n' },
				partnerPackageLessThanOrEqual : { type : 'n' },
				partnerPackageIn : { type : 's' },
				partnerGroupTypeEqual : { type : 'en', subTypeConstructor : KalturaPartnerGroupType, subType : 'KalturaPartnerGroupType' },
				partnerNameDescriptionWebsiteAdminNameAdminEmailLike : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerBaseFilter',KalturaPartnerBaseFilter);
