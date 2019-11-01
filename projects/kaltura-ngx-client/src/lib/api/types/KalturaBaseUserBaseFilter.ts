
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaBaseUserBaseFilterArgs  extends KalturaRelatedFilterArgs {
    partnerIdEqual? : number;
	screenNameLike? : string;
	screenNameStartsWith? : string;
	emailLike? : string;
	emailStartsWith? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	statusEqual? : KalturaUserStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
}


export class KalturaBaseUserBaseFilter extends KalturaRelatedFilter {

    partnerIdEqual : number;
	screenNameLike : string;
	screenNameStartsWith : string;
	emailLike : string;
	emailStartsWith : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	statusEqual : KalturaUserStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;

    constructor(data? : KalturaBaseUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseUserBaseFilter' },
				partnerIdEqual : { type : 'n' },
				screenNameLike : { type : 's' },
				screenNameStartsWith : { type : 's' },
				emailLike : { type : 's' },
				emailStartsWith : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaUserStatus, subType : 'KalturaUserStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseUserBaseFilter'] = KalturaBaseUserBaseFilter;