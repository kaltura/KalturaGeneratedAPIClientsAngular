
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserType } from './KalturaUserType';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaUserBaseFilterArgs  extends KalturaRelatedFilterArgs {
    partnerIdEqual? : number;
	typeEqual? : KalturaUserType;
	typeIn? : string;
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
	firstNameStartsWith? : string;
	lastNameStartsWith? : string;
	isAdminEqual? : KalturaNullableBoolean;
}


export class KalturaUserBaseFilter extends KalturaRelatedFilter {

    partnerIdEqual : number;
	typeEqual : KalturaUserType;
	typeIn : string;
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
	firstNameStartsWith : string;
	lastNameStartsWith : string;
	isAdminEqual : KalturaNullableBoolean;

    constructor(data? : KalturaUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserBaseFilter' },
				partnerIdEqual : { type : 'n' },
				typeEqual : { type : 'en', subTypeConstructor : KalturaUserType, subType : 'KalturaUserType' },
				typeIn : { type : 's' },
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
				firstNameStartsWith : { type : 's' },
				lastNameStartsWith : { type : 's' },
				isAdminEqual : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserBaseFilter',KalturaUserBaseFilter);
