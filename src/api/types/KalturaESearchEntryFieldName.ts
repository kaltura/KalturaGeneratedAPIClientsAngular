

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchEntryFieldName extends KalturaObjectBase {
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

    static entryAccessControlId = new KalturaESearchEntryFieldName('access_control_id');
	static entryAdminTags = new KalturaESearchEntryFieldName('admin_tags');
	static entryCategories = new KalturaESearchEntryFieldName('categories');
	static entryCategoryIds = new KalturaESearchEntryFieldName('category_ids');
	static entryCategoryName = new KalturaESearchEntryFieldName('categories.name');
	static entryConversionProfileId = new KalturaESearchEntryFieldName('conversion_profile_id');
	static entryCreatedAt = new KalturaESearchEntryFieldName('created_at');
	static entryCreatorId = new KalturaESearchEntryFieldName('creator_kuser_id');
	static entryCredit = new KalturaESearchEntryFieldName('credit');
	static entryDescription = new KalturaESearchEntryFieldName('description');
	static entryEndDate = new KalturaESearchEntryFieldName('end_date');
	static entryEntitledUserEdit = new KalturaESearchEntryFieldName('entitled_kusers_edit');
	static entryEntitledUserPublish = new KalturaESearchEntryFieldName('entitled_kusers_publish');
	static entryExternalSourceType = new KalturaESearchEntryFieldName('external_source_type');
	static entryId = new KalturaESearchEntryFieldName('_id');
	static entryLengthInMsecs = new KalturaESearchEntryFieldName('length_in_msecs');
	static entryMediaType = new KalturaESearchEntryFieldName('media_type');
	static entryModerationStatus = new KalturaESearchEntryFieldName('moderation_status');
	static entryName = new KalturaESearchEntryFieldName('name');
	static entryParentEntryId = new KalturaESearchEntryFieldName('parent_id');
	static entryPushPublish = new KalturaESearchEntryFieldName('push_publish');
	static entryRecordedEntryId = new KalturaESearchEntryFieldName('recorded_entry_id');
	static entryRedirectEntryId = new KalturaESearchEntryFieldName('redirect_entry_id');
	static entryReferenceId = new KalturaESearchEntryFieldName('reference_id');
	static entrySiteUrl = new KalturaESearchEntryFieldName('site_url');
	static entrySourceType = new KalturaESearchEntryFieldName('source_type');
	static entryStartDate = new KalturaESearchEntryFieldName('start_date');
	static entryTags = new KalturaESearchEntryFieldName('tags');
	static entryTemplateEntryId = new KalturaESearchEntryFieldName('template_entry_id');
	static entryType = new KalturaESearchEntryFieldName('entry_type');
	static entryUpdatedAt = new KalturaESearchEntryFieldName('updated_at');
	static entryUserId = new KalturaESearchEntryFieldName('kuser_id');
	static entryViews = new KalturaESearchEntryFieldName('views');
	static entryVotes = new KalturaESearchEntryFieldName('votes');
}
KalturaTypesFactory.registerType('KalturaESearchEntryFieldName',KalturaESearchEntryFieldName);