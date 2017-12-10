
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaEntryStatus } from './KalturaEntryStatus';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaEntryReplacementStatus } from './KalturaEntryReplacementStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaBaseEntryBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : string;
	idIn? : string;
	idNotIn? : string;
	nameLike? : string;
	nameMultiLikeOr? : string;
	nameMultiLikeAnd? : string;
	nameEqual? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	userIdNotIn? : string;
	creatorIdEqual? : string;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	adminTagsLike? : string;
	adminTagsMultiLikeOr? : string;
	adminTagsMultiLikeAnd? : string;
	categoriesMatchAnd? : string;
	categoriesMatchOr? : string;
	categoriesNotContains? : string;
	categoriesIdsMatchAnd? : string;
	categoriesIdsMatchOr? : string;
	categoriesIdsNotContains? : string;
	categoriesIdsEmpty? : KalturaNullableBoolean;
	statusEqual? : KalturaEntryStatus;
	statusNotEqual? : KalturaEntryStatus;
	statusIn? : string;
	statusNotIn? : string;
	moderationStatusEqual? : KalturaEntryModerationStatus;
	moderationStatusNotEqual? : KalturaEntryModerationStatus;
	moderationStatusIn? : string;
	moderationStatusNotIn? : string;
	typeEqual? : KalturaEntryType;
	typeIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	totalRankLessThanOrEqual? : number;
	totalRankGreaterThanOrEqual? : number;
	groupIdEqual? : number;
	searchTextMatchAnd? : string;
	searchTextMatchOr? : string;
	accessControlIdEqual? : number;
	accessControlIdIn? : string;
	startDateGreaterThanOrEqual? : Date;
	startDateLessThanOrEqual? : Date;
	startDateGreaterThanOrEqualOrNull? : Date;
	startDateLessThanOrEqualOrNull? : Date;
	endDateGreaterThanOrEqual? : Date;
	endDateLessThanOrEqual? : Date;
	endDateGreaterThanOrEqualOrNull? : Date;
	endDateLessThanOrEqualOrNull? : Date;
	referenceIdEqual? : string;
	referenceIdIn? : string;
	replacingEntryIdEqual? : string;
	replacingEntryIdIn? : string;
	replacedEntryIdEqual? : string;
	replacedEntryIdIn? : string;
	replacementStatusEqual? : KalturaEntryReplacementStatus;
	replacementStatusIn? : string;
	partnerSortValueGreaterThanOrEqual? : number;
	partnerSortValueLessThanOrEqual? : number;
	rootEntryIdEqual? : string;
	rootEntryIdIn? : string;
	parentEntryIdEqual? : string;
	entitledUsersEditMatchAnd? : string;
	entitledUsersEditMatchOr? : string;
	entitledUsersPublishMatchAnd? : string;
	entitledUsersPublishMatchOr? : string;
	entitledUsersViewMatchAnd? : string;
	entitledUsersViewMatchOr? : string;
	tagsNameMultiLikeOr? : string;
	tagsAdminTagsMultiLikeOr? : string;
	tagsAdminTagsNameMultiLikeOr? : string;
	tagsNameMultiLikeAnd? : string;
	tagsAdminTagsMultiLikeAnd? : string;
	tagsAdminTagsNameMultiLikeAnd? : string;
}


export class KalturaBaseEntryBaseFilter extends KalturaRelatedFilter {

    idEqual : string;
	idIn : string;
	idNotIn : string;
	nameLike : string;
	nameMultiLikeOr : string;
	nameMultiLikeAnd : string;
	nameEqual : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	userIdEqual : string;
	userIdIn : string;
	userIdNotIn : string;
	creatorIdEqual : string;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	adminTagsLike : string;
	adminTagsMultiLikeOr : string;
	adminTagsMultiLikeAnd : string;
	categoriesMatchAnd : string;
	categoriesMatchOr : string;
	categoriesNotContains : string;
	categoriesIdsMatchAnd : string;
	categoriesIdsMatchOr : string;
	categoriesIdsNotContains : string;
	categoriesIdsEmpty : KalturaNullableBoolean;
	statusEqual : KalturaEntryStatus;
	statusNotEqual : KalturaEntryStatus;
	statusIn : string;
	statusNotIn : string;
	moderationStatusEqual : KalturaEntryModerationStatus;
	moderationStatusNotEqual : KalturaEntryModerationStatus;
	moderationStatusIn : string;
	moderationStatusNotIn : string;
	typeEqual : KalturaEntryType;
	typeIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	totalRankLessThanOrEqual : number;
	totalRankGreaterThanOrEqual : number;
	groupIdEqual : number;
	searchTextMatchAnd : string;
	searchTextMatchOr : string;
	accessControlIdEqual : number;
	accessControlIdIn : string;
	startDateGreaterThanOrEqual : Date;
	startDateLessThanOrEqual : Date;
	startDateGreaterThanOrEqualOrNull : Date;
	startDateLessThanOrEqualOrNull : Date;
	endDateGreaterThanOrEqual : Date;
	endDateLessThanOrEqual : Date;
	endDateGreaterThanOrEqualOrNull : Date;
	endDateLessThanOrEqualOrNull : Date;
	referenceIdEqual : string;
	referenceIdIn : string;
	replacingEntryIdEqual : string;
	replacingEntryIdIn : string;
	replacedEntryIdEqual : string;
	replacedEntryIdIn : string;
	replacementStatusEqual : KalturaEntryReplacementStatus;
	replacementStatusIn : string;
	partnerSortValueGreaterThanOrEqual : number;
	partnerSortValueLessThanOrEqual : number;
	rootEntryIdEqual : string;
	rootEntryIdIn : string;
	parentEntryIdEqual : string;
	entitledUsersEditMatchAnd : string;
	entitledUsersEditMatchOr : string;
	entitledUsersPublishMatchAnd : string;
	entitledUsersPublishMatchOr : string;
	entitledUsersViewMatchAnd : string;
	entitledUsersViewMatchOr : string;
	tagsNameMultiLikeOr : string;
	tagsAdminTagsMultiLikeOr : string;
	tagsAdminTagsNameMultiLikeOr : string;
	tagsNameMultiLikeAnd : string;
	tagsAdminTagsMultiLikeAnd : string;
	tagsAdminTagsNameMultiLikeAnd : string;

    constructor(data? : KalturaBaseEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				nameLike : { type : 's' },
				nameMultiLikeOr : { type : 's' },
				nameMultiLikeAnd : { type : 's' },
				nameEqual : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				userIdNotIn : { type : 's' },
				creatorIdEqual : { type : 's' },
				tagsLike : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				adminTagsLike : { type : 's' },
				adminTagsMultiLikeOr : { type : 's' },
				adminTagsMultiLikeAnd : { type : 's' },
				categoriesMatchAnd : { type : 's' },
				categoriesMatchOr : { type : 's' },
				categoriesNotContains : { type : 's' },
				categoriesIdsMatchAnd : { type : 's' },
				categoriesIdsMatchOr : { type : 's' },
				categoriesIdsNotContains : { type : 's' },
				categoriesIdsEmpty : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaEntryStatus, subType : 'KalturaEntryStatus' },
				statusNotEqual : { type : 'es', subTypeConstructor : KalturaEntryStatus, subType : 'KalturaEntryStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' },
				moderationStatusEqual : { type : 'en', subTypeConstructor : KalturaEntryModerationStatus, subType : 'KalturaEntryModerationStatus' },
				moderationStatusNotEqual : { type : 'en', subTypeConstructor : KalturaEntryModerationStatus, subType : 'KalturaEntryModerationStatus' },
				moderationStatusIn : { type : 's' },
				moderationStatusNotIn : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaEntryType, subType : 'KalturaEntryType' },
				typeIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				totalRankLessThanOrEqual : { type : 'n' },
				totalRankGreaterThanOrEqual : { type : 'n' },
				groupIdEqual : { type : 'n' },
				searchTextMatchAnd : { type : 's' },
				searchTextMatchOr : { type : 's' },
				accessControlIdEqual : { type : 'n' },
				accessControlIdIn : { type : 's' },
				startDateGreaterThanOrEqual : { type : 'd' },
				startDateLessThanOrEqual : { type : 'd' },
				startDateGreaterThanOrEqualOrNull : { type : 'd' },
				startDateLessThanOrEqualOrNull : { type : 'd' },
				endDateGreaterThanOrEqual : { type : 'd' },
				endDateLessThanOrEqual : { type : 'd' },
				endDateGreaterThanOrEqualOrNull : { type : 'd' },
				endDateLessThanOrEqualOrNull : { type : 'd' },
				referenceIdEqual : { type : 's' },
				referenceIdIn : { type : 's' },
				replacingEntryIdEqual : { type : 's' },
				replacingEntryIdIn : { type : 's' },
				replacedEntryIdEqual : { type : 's' },
				replacedEntryIdIn : { type : 's' },
				replacementStatusEqual : { type : 'es', subTypeConstructor : KalturaEntryReplacementStatus, subType : 'KalturaEntryReplacementStatus' },
				replacementStatusIn : { type : 's' },
				partnerSortValueGreaterThanOrEqual : { type : 'n' },
				partnerSortValueLessThanOrEqual : { type : 'n' },
				rootEntryIdEqual : { type : 's' },
				rootEntryIdIn : { type : 's' },
				parentEntryIdEqual : { type : 's' },
				entitledUsersEditMatchAnd : { type : 's' },
				entitledUsersEditMatchOr : { type : 's' },
				entitledUsersPublishMatchAnd : { type : 's' },
				entitledUsersPublishMatchOr : { type : 's' },
				entitledUsersViewMatchAnd : { type : 's' },
				entitledUsersViewMatchOr : { type : 's' },
				tagsNameMultiLikeOr : { type : 's' },
				tagsAdminTagsMultiLikeOr : { type : 's' },
				tagsAdminTagsNameMultiLikeOr : { type : 's' },
				tagsNameMultiLikeAnd : { type : 's' },
				tagsAdminTagsMultiLikeAnd : { type : 's' },
				tagsAdminTagsNameMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryBaseFilter',KalturaBaseEntryBaseFilter);
