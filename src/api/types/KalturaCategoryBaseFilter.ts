
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppearInListType } from './KalturaAppearInListType';
import { KalturaPrivacyType } from './KalturaPrivacyType';
import { KalturaInheritanceType } from './KalturaInheritanceType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaContributionPolicyType } from './KalturaContributionPolicyType';
import { KalturaCategoryStatus } from './KalturaCategoryStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaCategoryBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	parentIdEqual? : number;
	parentIdIn? : string;
	depthEqual? : number;
	fullNameEqual? : string;
	fullNameStartsWith? : string;
	fullNameIn? : string;
	fullIdsEqual? : string;
	fullIdsStartsWith? : string;
	fullIdsMatchOr? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	appearInListEqual? : KalturaAppearInListType;
	privacyEqual? : KalturaPrivacyType;
	privacyIn? : string;
	inheritanceTypeEqual? : KalturaInheritanceType;
	inheritanceTypeIn? : string;
	referenceIdEqual? : string;
	referenceIdEmpty? : KalturaNullableBoolean;
	contributionPolicyEqual? : KalturaContributionPolicyType;
	membersCountGreaterThanOrEqual? : number;
	membersCountLessThanOrEqual? : number;
	pendingMembersCountGreaterThanOrEqual? : number;
	pendingMembersCountLessThanOrEqual? : number;
	privacyContextEqual? : string;
	statusEqual? : KalturaCategoryStatus;
	statusIn? : string;
	inheritedParentIdEqual? : number;
	inheritedParentIdIn? : string;
	partnerSortValueGreaterThanOrEqual? : number;
	partnerSortValueLessThanOrEqual? : number;
	aggregationCategoriesMultiLikeOr? : string;
	aggregationCategoriesMultiLikeAnd? : string;
}


export class KalturaCategoryBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	parentIdEqual : number;
	parentIdIn : string;
	depthEqual : number;
	fullNameEqual : string;
	fullNameStartsWith : string;
	fullNameIn : string;
	fullIdsEqual : string;
	fullIdsStartsWith : string;
	fullIdsMatchOr : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	appearInListEqual : KalturaAppearInListType;
	privacyEqual : KalturaPrivacyType;
	privacyIn : string;
	inheritanceTypeEqual : KalturaInheritanceType;
	inheritanceTypeIn : string;
	referenceIdEqual : string;
	referenceIdEmpty : KalturaNullableBoolean;
	contributionPolicyEqual : KalturaContributionPolicyType;
	membersCountGreaterThanOrEqual : number;
	membersCountLessThanOrEqual : number;
	pendingMembersCountGreaterThanOrEqual : number;
	pendingMembersCountLessThanOrEqual : number;
	privacyContextEqual : string;
	statusEqual : KalturaCategoryStatus;
	statusIn : string;
	inheritedParentIdEqual : number;
	inheritedParentIdIn : string;
	partnerSortValueGreaterThanOrEqual : number;
	partnerSortValueLessThanOrEqual : number;
	aggregationCategoriesMultiLikeOr : string;
	aggregationCategoriesMultiLikeAnd : string;

    constructor(data? : KalturaCategoryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				parentIdEqual : { type : 'n' },
				parentIdIn : { type : 's' },
				depthEqual : { type : 'n' },
				fullNameEqual : { type : 's' },
				fullNameStartsWith : { type : 's' },
				fullNameIn : { type : 's' },
				fullIdsEqual : { type : 's' },
				fullIdsStartsWith : { type : 's' },
				fullIdsMatchOr : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				tagsLike : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				appearInListEqual : { type : 'en', subTypeConstructor : KalturaAppearInListType, subType : 'KalturaAppearInListType' },
				privacyEqual : { type : 'en', subTypeConstructor : KalturaPrivacyType, subType : 'KalturaPrivacyType' },
				privacyIn : { type : 's' },
				inheritanceTypeEqual : { type : 'en', subTypeConstructor : KalturaInheritanceType, subType : 'KalturaInheritanceType' },
				inheritanceTypeIn : { type : 's' },
				referenceIdEqual : { type : 's' },
				referenceIdEmpty : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				contributionPolicyEqual : { type : 'en', subTypeConstructor : KalturaContributionPolicyType, subType : 'KalturaContributionPolicyType' },
				membersCountGreaterThanOrEqual : { type : 'n' },
				membersCountLessThanOrEqual : { type : 'n' },
				pendingMembersCountGreaterThanOrEqual : { type : 'n' },
				pendingMembersCountLessThanOrEqual : { type : 'n' },
				privacyContextEqual : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaCategoryStatus, subType : 'KalturaCategoryStatus' },
				statusIn : { type : 's' },
				inheritedParentIdEqual : { type : 'n' },
				inheritedParentIdIn : { type : 's' },
				partnerSortValueGreaterThanOrEqual : { type : 'n' },
				partnerSortValueLessThanOrEqual : { type : 'n' },
				aggregationCategoriesMultiLikeOr : { type : 's' },
				aggregationCategoriesMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryBaseFilter',KalturaCategoryBaseFilter);
