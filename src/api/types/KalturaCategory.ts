
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAppearInListType } from './KalturaAppearInListType';
import { KalturaPrivacyType } from './KalturaPrivacyType';
import { KalturaInheritanceType } from './KalturaInheritanceType';
import { KalturaUserJoinPolicyType } from './KalturaUserJoinPolicyType';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaContributionPolicyType } from './KalturaContributionPolicyType';
import { KalturaCategoryStatus } from './KalturaCategoryStatus';
import { KalturaCategoryOrderBy } from './KalturaCategoryOrderBy';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCategoryArgs  extends KalturaObjectBaseArgs {
    parentId? : number;
	name? : string;
	description? : string;
	tags? : string;
	appearInList? : KalturaAppearInListType;
	privacy? : KalturaPrivacyType;
	inheritanceType? : KalturaInheritanceType;
	defaultPermissionLevel? : KalturaCategoryUserPermissionLevel;
	owner? : string;
	referenceId? : string;
	contributionPolicy? : KalturaContributionPolicyType;
	privacyContext? : string;
	partnerSortValue? : number;
	partnerData? : string;
	defaultOrderBy? : KalturaCategoryOrderBy;
	moderation? : KalturaNullableBoolean;
	isAggregationCategory? : KalturaNullableBoolean;
	aggregationCategories? : string;
}


export class KalturaCategory extends KalturaObjectBase {

    readonly id : number;
	parentId : number;
	readonly depth : number;
	readonly partnerId : number;
	name : string;
	readonly fullName : string;
	readonly fullIds : string;
	readonly entriesCount : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	description : string;
	tags : string;
	appearInList : KalturaAppearInListType;
	privacy : KalturaPrivacyType;
	inheritanceType : KalturaInheritanceType;
	readonly userJoinPolicy : KalturaUserJoinPolicyType;
	defaultPermissionLevel : KalturaCategoryUserPermissionLevel;
	owner : string;
	readonly directEntriesCount : number;
	referenceId : string;
	contributionPolicy : KalturaContributionPolicyType;
	readonly membersCount : number;
	readonly pendingMembersCount : number;
	privacyContext : string;
	readonly privacyContexts : string;
	readonly status : KalturaCategoryStatus;
	readonly inheritedParentId : number;
	partnerSortValue : number;
	partnerData : string;
	defaultOrderBy : KalturaCategoryOrderBy;
	readonly directSubCategoriesCount : number;
	moderation : KalturaNullableBoolean;
	readonly pendingEntriesCount : number;
	isAggregationCategory : KalturaNullableBoolean;
	aggregationCategories : string;

    constructor(data? : KalturaCategoryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategory' },
				id : { type : 'n', readOnly : true },
				parentId : { type : 'n' },
				depth : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				fullName : { type : 's', readOnly : true },
				fullIds : { type : 's', readOnly : true },
				entriesCount : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				description : { type : 's' },
				tags : { type : 's' },
				appearInList : { type : 'en', subTypeConstructor : KalturaAppearInListType, subType : 'KalturaAppearInListType' },
				privacy : { type : 'en', subTypeConstructor : KalturaPrivacyType, subType : 'KalturaPrivacyType' },
				inheritanceType : { type : 'en', subTypeConstructor : KalturaInheritanceType, subType : 'KalturaInheritanceType' },
				userJoinPolicy : { type : 'en', readOnly : true, subTypeConstructor : KalturaUserJoinPolicyType, subType : 'KalturaUserJoinPolicyType' },
				defaultPermissionLevel : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				owner : { type : 's' },
				directEntriesCount : { type : 'n', readOnly : true },
				referenceId : { type : 's' },
				contributionPolicy : { type : 'en', subTypeConstructor : KalturaContributionPolicyType, subType : 'KalturaContributionPolicyType' },
				membersCount : { type : 'n', readOnly : true },
				pendingMembersCount : { type : 'n', readOnly : true },
				privacyContext : { type : 's' },
				privacyContexts : { type : 's', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaCategoryStatus, subType : 'KalturaCategoryStatus' },
				inheritedParentId : { type : 'n', readOnly : true },
				partnerSortValue : { type : 'n' },
				partnerData : { type : 's' },
				defaultOrderBy : { type : 'es', subTypeConstructor : KalturaCategoryOrderBy, subType : 'KalturaCategoryOrderBy' },
				directSubCategoriesCount : { type : 'n', readOnly : true },
				moderation : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				pendingEntriesCount : { type : 'n', readOnly : true },
				isAggregationCategory : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				aggregationCategories : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategory',KalturaCategory);
