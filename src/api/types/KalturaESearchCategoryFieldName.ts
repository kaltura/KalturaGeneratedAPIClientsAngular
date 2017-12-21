

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

    static contributionPolicy = new KalturaESearchCategoryFieldName('contribution_policy');
	static createdAt = new KalturaESearchCategoryFieldName('created_at');
	static depth = new KalturaESearchCategoryFieldName('depth');
	static description = new KalturaESearchCategoryFieldName('description');
	static directEntriesCount = new KalturaESearchCategoryFieldName('direct_entries_count');
	static directSubCategoriesCount = new KalturaESearchCategoryFieldName('direct_sub_categories_count');
	static displayInSearch = new KalturaESearchCategoryFieldName('display_in_search');
	static entriesCount = new KalturaESearchCategoryFieldName('entries_count');
	static fullIds = new KalturaESearchCategoryFieldName('full_ids');
	static fullName = new KalturaESearchCategoryFieldName('full_name');
	static inheritanceType = new KalturaESearchCategoryFieldName('inheritance_type');
	static inheritedParentId = new KalturaESearchCategoryFieldName('inherited_parent_id');
	static membersCount = new KalturaESearchCategoryFieldName('members_count');
	static moderation = new KalturaESearchCategoryFieldName('moderation');
	static _name = new KalturaESearchCategoryFieldName('name');
	static parentId = new KalturaESearchCategoryFieldName('parent_id');
	static pendingEntriesCount = new KalturaESearchCategoryFieldName('pending_entries_count');
	static pendingMembersCount = new KalturaESearchCategoryFieldName('pending_members_count');
	static privacy = new KalturaESearchCategoryFieldName('privacy');
	static privacyContext = new KalturaESearchCategoryFieldName('privacy_context');
	static privacyContexts = new KalturaESearchCategoryFieldName('privacy_contexts');
	static referenceId = new KalturaESearchCategoryFieldName('reference_id');
	static tags = new KalturaESearchCategoryFieldName('tags');
	static updatedAt = new KalturaESearchCategoryFieldName('updated_at');
	static userId = new KalturaESearchCategoryFieldName('user_id');
	static userIds = new KalturaESearchCategoryFieldName('user_ids');
}
KalturaTypesFactory.registerType('KalturaESearchCategoryFieldName',KalturaESearchCategoryFieldName);