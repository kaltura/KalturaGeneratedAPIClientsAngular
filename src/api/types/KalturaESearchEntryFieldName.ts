

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

    static accessControlId = new KalturaESearchEntryFieldName('access_control_id');
	static adminTags = new KalturaESearchEntryFieldName('admin_tags');
	static categories = new KalturaESearchEntryFieldName('categories');
	static categoryIds = new KalturaESearchEntryFieldName('category_ids');
	static categoryName = new KalturaESearchEntryFieldName('category_name');
	static conversionProfileId = new KalturaESearchEntryFieldName('conversion_profile_id');
	static createdAt = new KalturaESearchEntryFieldName('created_at');
	static creatorId = new KalturaESearchEntryFieldName('creator_kuser_id');
	static credit = new KalturaESearchEntryFieldName('credit');
	static description = new KalturaESearchEntryFieldName('description');
	static endDate = new KalturaESearchEntryFieldName('end_date');
	static entitledUserEdit = new KalturaESearchEntryFieldName('entitled_kusers_edit');
	static entitledUserPublish = new KalturaESearchEntryFieldName('entitled_kusers_publish');
	static entryType = new KalturaESearchEntryFieldName('entry_type');
	static externalSourceType = new KalturaESearchEntryFieldName('external_source_type');
	static id = new KalturaESearchEntryFieldName('id');
	static isLive = new KalturaESearchEntryFieldName('is_live');
	static isQuiz = new KalturaESearchEntryFieldName('is_quiz');
	static lengthInMsecs = new KalturaESearchEntryFieldName('length_in_msecs');
	static mediaType = new KalturaESearchEntryFieldName('media_type');
	static moderationStatus = new KalturaESearchEntryFieldName('moderation_status');
	static _name = new KalturaESearchEntryFieldName('name');
	static parentEntryId = new KalturaESearchEntryFieldName('parent_id');
	static pushPublish = new KalturaESearchEntryFieldName('push_publish');
	static recordedEntryId = new KalturaESearchEntryFieldName('recorded_entry_id');
	static redirectEntryId = new KalturaESearchEntryFieldName('redirect_entry_id');
	static referenceId = new KalturaESearchEntryFieldName('reference_id');
	static siteUrl = new KalturaESearchEntryFieldName('site_url');
	static sourceType = new KalturaESearchEntryFieldName('source_type');
	static startDate = new KalturaESearchEntryFieldName('start_date');
	static tags = new KalturaESearchEntryFieldName('tags');
	static templateEntryId = new KalturaESearchEntryFieldName('template_entry_id');
	static updatedAt = new KalturaESearchEntryFieldName('updated_at');
	static userId = new KalturaESearchEntryFieldName('kuser_id');
	static views = new KalturaESearchEntryFieldName('views');
	static votes = new KalturaESearchEntryFieldName('votes');
}
KalturaTypesFactory.registerType('KalturaESearchEntryFieldName',KalturaESearchEntryFieldName);