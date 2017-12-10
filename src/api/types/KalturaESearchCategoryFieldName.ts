

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchCategoryFieldName extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static categoryContributionPolicy = new KalturaESearchCategoryFieldName('contribution_policy');
	static categoryCreatedAt = new KalturaESearchCategoryFieldName('created_at');
	static categoryDepth = new KalturaESearchCategoryFieldName('depth');
	static categoryDescription = new KalturaESearchCategoryFieldName('description');
	static categoryDirectEntriesCount = new KalturaESearchCategoryFieldName('direct_entries_count');
	static categoryDirectSubCategoriesCount = new KalturaESearchCategoryFieldName('direct_sub_categories_count');
	static categoryDisplayInSearch = new KalturaESearchCategoryFieldName('display_in_search');
	static categoryEntriesCount = new KalturaESearchCategoryFieldName('entries_count');
	static categoryFullIds = new KalturaESearchCategoryFieldName('full_ids');
	static categoryFullName = new KalturaESearchCategoryFieldName('full_name');
	static categoryInheritanceType = new KalturaESearchCategoryFieldName('inheritance_type');
	static categoryInheritedParentId = new KalturaESearchCategoryFieldName('inherited_parent_id');
	static categoryKuserId = new KalturaESearchCategoryFieldName('kuser_id');
	static categoryKuserIds = new KalturaESearchCategoryFieldName('kuser_ids');
	static categoryMembersCount = new KalturaESearchCategoryFieldName('members_count');
	static categoryModeration = new KalturaESearchCategoryFieldName('moderation');
	static categoryName = new KalturaESearchCategoryFieldName('name');
	static categoryParentId = new KalturaESearchCategoryFieldName('parent_id');
	static categoryPendingEntriesCount = new KalturaESearchCategoryFieldName('pending_entries_count');
	static categoryPendingMembersCount = new KalturaESearchCategoryFieldName('pending_members_count');
	static categoryPrivacy = new KalturaESearchCategoryFieldName('privacy');
	static categoryPrivacyContext = new KalturaESearchCategoryFieldName('privacy_context');
	static categoryPrivacyContexts = new KalturaESearchCategoryFieldName('privacy_contexts');
	static categoryReferenceId = new KalturaESearchCategoryFieldName('reference_id');
	static categoryTags = new KalturaESearchCategoryFieldName('tags');
	static categoryUpdatedAt = new KalturaESearchCategoryFieldName('updated_at');
}
KalturaTypesFactory.registerType('KalturaESearchCategoryFieldName',KalturaESearchCategoryFieldName);