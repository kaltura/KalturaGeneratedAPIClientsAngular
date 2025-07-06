// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platforms allow them to do with
// text.
//
// Copyright (C) 2006-2023  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================
/**
 * @param	totalCount	int		 (readOnly).
 */
function KalturaListResponse(){
	this.totalCount = null;
}
KalturaListResponse.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseRestriction(){
}
KalturaBaseRestriction.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Access Control Profile (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Access Control Profile.
 * @param	systemName	string		System name of the Access Control Profile.
 * @param	description	string		The description of the Access Control Profile.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	isDefault	int		True if this Conversion Profile is the default.
 * @param	restrictions	array		Array of Access Control Restrictions.
 * @param	containsUnsuportedRestrictions	bool		Indicates that the access control profile is new and should be handled using KalturaAccessControlProfile object and accessControlProfile service (readOnly).
 */
function KalturaAccessControl(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isDefault = null;
	this.restrictions = null;
	this.containsUnsuportedRestrictions = null;
}
KalturaAccessControl.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the condition context.
 */
function KalturaContextTypeHolder(){
	this.type = null;
}
KalturaContextTypeHolder.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaAccessControlContextTypeHolder(){
}
KalturaAccessControlContextTypeHolder.inheritsFrom (KalturaContextTypeHolder);


/**
 * @param	message	string		.
 * @param	code	string		.
 */
function KalturaAccessControlMessage(){
	this.message = null;
	this.code = null;
}
KalturaAccessControlMessage.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the action (readOnly).
 */
function KalturaRuleAction(){
	this.type = null;
}
KalturaRuleAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the access control condition (readOnly).
 * @param	description	string		.
 * @param	not	bool		.
 */
function KalturaCondition(){
	this.type = null;
	this.description = null;
	this.not = null;
}
KalturaCondition.inheritsFrom (KalturaObjectBase);


/**
 * @param	description	string		Short Rule Description.
 * @param	ruleData	string		Rule Custom Data to allow saving rule specific information.
 * @param	message	string		Message to be thrown to the player in case the rule is fulfilled.
 * @param	code	string		Code to be thrown to the player in case the rule is fulfilled.
 * @param	actions	array		Actions to be performed by the player in case the rule is fulfilled.
 * @param	conditions	array		Conditions to validate the rule.
 * @param	contexts	array		Indicates what contexts should be tested by this rule.
 * @param	stopProcessing	bool		Indicates that this rule is enough and no need to continue checking the rest of the rules.
 * @param	forceAdminValidation	int		Indicates if we should force ks validation for admin ks users as well.
 */
function KalturaRule(){
	this.description = null;
	this.ruleData = null;
	this.message = null;
	this.code = null;
	this.actions = null;
	this.conditions = null;
	this.contexts = null;
	this.stopProcessing = null;
	this.forceAdminValidation = null;
}
KalturaRule.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Access Control Profile (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Access Control Profile.
 * @param	systemName	string		System name of the Access Control Profile.
 * @param	description	string		The description of the Access Control Profile.
 * @param	createdAt	int		Creation time as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Update time as Unix timestamp (In seconds) (readOnly).
 * @param	isDefault	int		True if this access control profile is the partner default.
 * @param	rules	array		Array of access control rules.
 */
function KalturaAccessControlProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.isDefault = null;
	this.rules = null;
}
KalturaAccessControlProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	key	string		.
 * @param	value	string		.
 */
function KalturaKeyValue(){
	this.key = null;
	this.value = null;
}
KalturaKeyValue.inheritsFrom (KalturaObjectBase);


/**
 * @param	referrer	string		URL to be used to test domain conditions..
 * @param	ip	string		IP to be used to test geographic location conditions..
 * @param	ks	string		Kaltura session to be used to test session and user conditions..
 * @param	userAgent	string		Browser or client application to be used to test agent conditions..
 * @param	time	int		Unix timestamp (In seconds) to be used to test entry scheduling, keep null to use now..
 * @param	contexts	array		Indicates what contexts should be tested. No contexts means any context..
 * @param	hashes	array		Array of hashes to pass to the access control profile scope.
 */
function KalturaAccessControlScope(){
	this.referrer = null;
	this.ip = null;
	this.ks = null;
	this.userAgent = null;
	this.time = null;
	this.contexts = null;
	this.hashes = null;
}
KalturaAccessControlScope.inheritsFrom (KalturaObjectBase);


/**
 * @param	dimension	string		The dimension whose values should be filtered.
 * @param	values	string		The (comma separated) values to include in the filter.
 */
function KalturaReportFilter(){
	this.dimension = null;
	this.values = null;
}
KalturaReportFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	from_time	string		Query start time (in local time) MM/dd/yyyy HH:mi.
 * @param	to_time	string		Query end time (in local time) MM/dd/yyyy HH:mi.
 * @param	metrics	string		Comma separated metrics list.
 * @param	utcOffset	float		Timezone offset from UTC (in minutes).
 * @param	dimensions	string		Comma separated dimensions list.
 * @param	filters	array		Array of filters.
 * @param	orderBy	string		Query order by metric/dimension.
 */
function KalturaAnalyticsFilter(){
	this.from_time = null;
	this.to_time = null;
	this.metrics = null;
	this.utcOffset = null;
	this.dimensions = null;
	this.filters = null;
	this.orderBy = null;
}
KalturaAnalyticsFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	intId	int		 (readOnly).
 * @param	cuePointType	string		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	triggeredAt	int		.
 * @param	tags	string		.
 * @param	startTime	int		Start time in milliseconds.
 * @param	userId	string		.
 * @param	partnerData	string		.
 * @param	partnerSortValue	int		.
 * @param	forceStop	int		.
 * @param	thumbOffset	int		.
 * @param	systemName	string		.
 * @param	isMomentary	bool		 (readOnly).
 * @param	copiedFrom	string		 (readOnly).
 */
function KalturaCuePoint(){
	this.id = null;
	this.intId = null;
	this.cuePointType = null;
	this.status = null;
	this.entryId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.triggeredAt = null;
	this.tags = null;
	this.startTime = null;
	this.userId = null;
	this.partnerData = null;
	this.partnerSortValue = null;
	this.forceStop = null;
	this.thumbOffset = null;
	this.systemName = null;
	this.isMomentary = null;
	this.copiedFrom = null;
}
KalturaCuePoint.inheritsFrom (KalturaObjectBase);


/**
 * @param	parentId	string		 (insertOnly).
 * @param	text	string		.
 * @param	endTime	int		End time in milliseconds.
 * @param	duration	int		Duration in milliseconds (readOnly).
 * @param	depth	int		Depth in the tree (readOnly).
 * @param	childrenCount	int		Number of all descendants (readOnly).
 * @param	directChildrenCount	int		Number of children, first generation only. (readOnly).
 * @param	isPublic	int		Is the annotation public..
 * @param	searchableOnEntry	int		Should the cue point get indexed on the entry..
 */
function KalturaAnnotation(){
	this.parentId = null;
	this.text = null;
	this.endTime = null;
	this.duration = null;
	this.depth = null;
	this.childrenCount = null;
	this.directChildrenCount = null;
	this.isPublic = null;
	this.searchableOnEntry = null;
}
KalturaAnnotation.inheritsFrom (KalturaCuePoint);


/**
 * @param	name	string		.
 * @param	value	string		.
 */
function KalturaApiExceptionArg(){
	this.name = null;
	this.value = null;
}
KalturaApiExceptionArg.inheritsFrom (KalturaObjectBase);


/**
 * @param	appGuid	string		 (insertOnly).
 * @param	userRoleId	int		.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry updated date as Unix timestamp (In seconds) (readOnly).
 */
function KalturaAppRole(){
	this.appGuid = null;
	this.userRoleId = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaAppRole.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		The id of the application token (readOnly).
 * @param	token	string		The application token (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		Creation time as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Update time as Unix timestamp (In seconds) (readOnly).
 * @param	status	int		Application token status (readOnly).
 * @param	expiry	int		Expiry time of current token (unix timestamp in seconds).
 * @param	sessionType	int		Type of KS (Kaltura Session) that created using the current token.
 * @param	sessionUserId	string		User id of KS (Kaltura Session) that created using the current token.
 * @param	sessionDuration	int		Expiry duration of KS (Kaltura Session) that created using the current token (in seconds).
 * @param	sessionPrivileges	string		Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token.
 * @param	hashType	string		.
 * @param	description	string		.
 */
function KalturaAppToken(){
	this.id = null;
	this.token = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.expiry = null;
	this.sessionType = null;
	this.sessionUserId = null;
	this.sessionDuration = null;
	this.sessionPrivileges = null;
	this.hashType = null;
	this.description = null;
}
KalturaAppToken.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		The ID of the Flavor Asset (readOnly).
 * @param	entryId	string		The entry ID of the Flavor Asset (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	version	int		The version of the Flavor Asset (readOnly).
 * @param	size	int		The size (in KBytes) of the Flavor Asset (readOnly).
 * @param	tags	string		Tags used to identify the Flavor Asset in various scenarios.
 * @param	fileExt	string		The file extension (insertOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	description	string		System description, error message, warnings and failure cause. (readOnly).
 * @param	partnerData	string		Partner private data.
 * @param	partnerDescription	string		Partner friendly description.
 * @param	actualSourceAssetParamsIds	string		Comma separated list of source flavor params ids.
 * @param	sizeInBytes	int		The size (in Bytes) of the asset (readOnly).
 */
function KalturaAsset(){
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.version = null;
	this.size = null;
	this.tags = null;
	this.fileExt = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.description = null;
	this.partnerData = null;
	this.partnerDescription = null;
	this.actualSourceAssetParamsIds = null;
	this.sizeInBytes = null;
}
KalturaAsset.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaAssetDistributionCondition(){
}
KalturaAssetDistributionCondition.inheritsFrom (KalturaObjectBase);


/**
 * @param	validationError	string		The validation error description that will be set on the "data" property on KalturaDistributionValidationErrorMissingAsset if rule was not fulfilled.
 * @param	assetDistributionConditions	array		An array of asset distribution conditions.
 */
function KalturaAssetDistributionRule(){
	this.validationError = null;
	this.assetDistributionConditions = null;
}
KalturaAssetDistributionRule.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	string		.
 */
function KalturaString(){
	this.value = null;
}
KalturaString.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Flavor Params (readOnly).
 * @param	partnerId	int		.
 * @param	name	string		The name of the Flavor Params.
 * @param	systemName	string		System name of the Flavor Params.
 * @param	description	string		The description of the Flavor Params.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	isSystemDefault	int		True if those Flavor Params are part of system defaults (readOnly).
 * @param	tags	string		The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile).
 * @param	requiredPermissions	array		Array of partner permisison names that required for using this asset params.
 * @param	sourceRemoteStorageProfileId	int		Id of remote storage profile that used to get the source, zero indicates Kaltura data center.
 * @param	remoteStorageProfileIds	int		Comma seperated ids of remote storage profiles that the flavor distributed to, the distribution done by the conversion engine.
 * @param	mediaParserType	string		Media parser type to be used for post-conversion validation.
 * @param	sourceAssetParamsIds	string		Comma seperated ids of source flavor params this flavor is created from.
 */
function KalturaAssetParams(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isSystemDefault = null;
	this.tags = null;
	this.requiredPermissions = null;
	this.sourceRemoteStorageProfileId = null;
	this.remoteStorageProfileIds = null;
	this.mediaParserType = null;
	this.sourceAssetParamsIds = null;
}
KalturaAssetParams.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaResource(){
}
KalturaResource.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaContentResource(){
}
KalturaContentResource.inheritsFrom (KalturaResource);


/**
 * @param	resource	KalturaContentResource		The content resource to associate with asset params.
 * @param	assetParamsId	int		The asset params to associate with the reaource.
 */
function KalturaAssetParamsResourceContainer(){
	this.resource = null;
	this.assetParamsId = null;
}
KalturaAssetParamsResourceContainer.inheritsFrom (KalturaResource);


/**
 * @param	download	bool		.
 * @param	referrer	string		.
 */
function KalturaAssetServeOptions(){
	this.download = null;
	this.referrer = null;
}
KalturaAssetServeOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	remoteFilename	string		.
 * @param	localFilePath	string		.
 * @param	assetType	string		.
 * @param	assetId	string		.
 */
function KalturaAttUverseDistributionFile(){
	this.remoteFilename = null;
	this.localFilePath = null;
	this.assetType = null;
	this.assetId = null;
}
KalturaAttUverseDistributionFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	filename	string		The filename of the attachment asset content.
 * @param	title	string		Attachment asset title.
 * @param	format	string		The attachment format.
 * @param	status	int		The status of the asset (readOnly).
 */
function KalturaAttachmentAsset(){
	this.filename = null;
	this.title = null;
	this.format = null;
	this.status = null;
}
KalturaAttachmentAsset.inheritsFrom (KalturaAsset);


/**
 */
function KalturaAuditTrailInfo(){
}
KalturaAuditTrailInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	parsedAt	int		Indicates when the data was parsed (readOnly).
 * @param	status	int		 (readOnly).
 * @param	auditObjectType	string		.
 * @param	objectId	string		.
 * @param	relatedObjectId	string		.
 * @param	relatedObjectType	string		.
 * @param	entryId	string		.
 * @param	masterPartnerId	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	requestId	string		 (readOnly).
 * @param	userId	string		.
 * @param	action	string		.
 * @param	data	KalturaAuditTrailInfo		.
 * @param	ks	string		 (readOnly).
 * @param	context	int		 (readOnly).
 * @param	entryPoint	string		The API service and action that called and caused this audit (readOnly).
 * @param	serverName	string		 (readOnly).
 * @param	ipAddress	string		 (readOnly).
 * @param	userAgent	string		 (readOnly).
 * @param	clientTag	string		.
 * @param	description	string		.
 * @param	errorDescription	string		 (readOnly).
 */
function KalturaAuditTrail(){
	this.id = null;
	this.createdAt = null;
	this.parsedAt = null;
	this.status = null;
	this.auditObjectType = null;
	this.objectId = null;
	this.relatedObjectId = null;
	this.relatedObjectType = null;
	this.entryId = null;
	this.masterPartnerId = null;
	this.partnerId = null;
	this.requestId = null;
	this.userId = null;
	this.action = null;
	this.data = null;
	this.ks = null;
	this.context = null;
	this.entryPoint = null;
	this.serverName = null;
	this.ipAddress = null;
	this.userAgent = null;
	this.clientTag = null;
	this.description = null;
	this.errorDescription = null;
}
KalturaAuditTrail.inheritsFrom (KalturaObjectBase);


/**
 * @param	descriptor	string		.
 * @param	oldValue	string		.
 * @param	newValue	string		.
 */
function KalturaAuditTrailChangeItem(){
	this.descriptor = null;
	this.oldValue = null;
	this.newValue = null;
}
KalturaAuditTrailChangeItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	qrCode	string		.
 */
function KalturaAuthentication(){
	this.qrCode = null;
}
KalturaAuthentication.inheritsFrom (KalturaObjectBase);


/**
 * @param	language	string		The language of the value.
 * @param	value	string		Value.
 */
function KalturaMultiLingualString(){
	this.language = null;
	this.value = null;
}
KalturaMultiLingualString.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaOperationAttributes(){
}
KalturaOperationAttributes.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Auto generated 10 characters alphanumeric string (readOnly).
 * @param	name	string		Entry name (Min 1 chars).
 * @param	multiLingual_name	array		Entry name (Min 1 chars).
 * @param	description	string		Entry description.
 * @param	multiLingual_description	array		Entry description.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The ID of the user who is the owner of this entry.
 * @param	creatorId	string		The ID of the user who created this entry (insertOnly).
 * @param	tags	string		Entry tags.
 * @param	multiLingual_tags	array		Entry tags.
 * @param	adminTags	string		Entry admin tags can be updated only by administrators.
 * @param	categories	string		Comma separated list of full names of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action..
 * @param	categoriesIds	string		Comma separated list of ids of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action..
 * @param	status	string		 (readOnly).
 * @param	moderationStatus	int		Entry moderation status (readOnly).
 * @param	moderationCount	int		Number of moderation requests waiting for this entry (readOnly).
 * @param	type	string		The type of the entry, this is auto filled by the derived entry object.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry update date as Unix timestamp (In seconds) (readOnly).
 * @param	rank	float		The calculated average rank. rank = totalRank / votes (readOnly).
 * @param	totalRank	int		The sum of all rank values submitted to the baseEntry.anonymousRank action (readOnly).
 * @param	votes	int		A count of all requests made to the baseEntry.anonymousRank action (readOnly).
 * @param	groupId	int		.
 * @param	partnerData	string		Can be used to store various partner related data as a string.
 * @param	downloadUrl	string		Download URL for the entry (readOnly).
 * @param	searchText	string		Indexed search text for full text search (readOnly).
 * @param	licenseType	int		License type used for this entry.
 * @param	version	int		Version of the entry data (readOnly).
 * @param	thumbnailUrl	string		Thumbnail URL (readOnly).
 * @param	accessControlId	int		The Access Control ID assigned to this entry (null when not set, send -1 to remove).
 * @param	startDate	int		Entry scheduling start date (null when not set, send -1 to remove).
 * @param	endDate	int		Entry scheduling end date (null when not set, send -1 to remove).
 * @param	referenceId	string		Entry external reference id.
 * @param	replacingEntryId	string		ID of temporary entry that will replace this entry when it's approved and ready for replacement (readOnly).
 * @param	replacedEntryId	string		ID of the entry that will be replaced when the replacement approved and this entry is ready (readOnly).
 * @param	replacementStatus	string		Status of the replacement readiness and approval (readOnly).
 * @param	partnerSortValue	int		Can be used to store various partner related data as a numeric value.
 * @param	conversionProfileId	int		Override the default ingestion profile.
 * @param	redirectEntryId	string		IF not empty, points to an entry ID the should replace this current entry's id..
 * @param	rootEntryId	string		ID of source root entry, used for clipped, skipped and cropped entries that created from another entry (readOnly).
 * @param	parentEntryId	string		ID of source root entry, used for defining entires association.
 * @param	operationAttributes	array		clipping, skipping and cropping attributes that used to create this entry.
 * @param	entitledUsersEdit	string		list of user ids that are entitled to edit the entry (no server enforcement) The difference between entitledUsersEdit, entitledUsersPublish and entitledUsersView is applicative only.
 * @param	entitledUsersPublish	string		list of user ids that are entitled to publish the entry (no server enforcement) The difference between entitledUsersEdit, entitledUsersPublish and entitledUsersView is applicative only.
 * @param	entitledUsersView	string		list of user ids that are entitled to view the entry (no server enforcement) The difference between entitledUsersEdit, entitledUsersPublish and entitledUsersView is applicative only.
 * @param	capabilities	string		Comma seperated string of the capabilities of the entry. Any capability needed can be added to this list. (readOnly).
 * @param	templateEntryId	string		Template entry id (insertOnly).
 * @param	displayInSearch	int		should we display this entry in search.
 * @param	application	string		Entry application (insertOnly).
 * @param	applicationVersion	string		Entry application version (insertOnly).
 * @param	blockAutoTranscript	bool		Block auto transcript on Entry.
 * @param	defaultLanguage	string		Entry's default language if the entry is multi lingual (readOnly).
 * @param	responseLanguage	string		The language in which the object is returned (readOnly).
 */
function KalturaBaseEntry(){
	this.id = null;
	this.name = null;
	this.multiLingual_name = null;
	this.description = null;
	this.multiLingual_description = null;
	this.partnerId = null;
	this.userId = null;
	this.creatorId = null;
	this.tags = null;
	this.multiLingual_tags = null;
	this.adminTags = null;
	this.categories = null;
	this.categoriesIds = null;
	this.status = null;
	this.moderationStatus = null;
	this.moderationCount = null;
	this.type = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.rank = null;
	this.totalRank = null;
	this.votes = null;
	this.groupId = null;
	this.partnerData = null;
	this.downloadUrl = null;
	this.searchText = null;
	this.licenseType = null;
	this.version = null;
	this.thumbnailUrl = null;
	this.accessControlId = null;
	this.startDate = null;
	this.endDate = null;
	this.referenceId = null;
	this.replacingEntryId = null;
	this.replacedEntryId = null;
	this.replacementStatus = null;
	this.partnerSortValue = null;
	this.conversionProfileId = null;
	this.redirectEntryId = null;
	this.rootEntryId = null;
	this.parentEntryId = null;
	this.operationAttributes = null;
	this.entitledUsersEdit = null;
	this.entitledUsersPublish = null;
	this.entitledUsersView = null;
	this.capabilities = null;
	this.templateEntryId = null;
	this.displayInSearch = null;
	this.application = null;
	this.applicationVersion = null;
	this.blockAutoTranscript = null;
	this.defaultLanguage = null;
	this.responseLanguage = null;
}
KalturaBaseEntry.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseEntryCloneOptionItem(){
}
KalturaBaseEntryCloneOptionItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	data	string		.
 * @param	version	int		 (readOnly).
 * @param	entryId	string		 (readOnly).
 * @param	updatedAt	int		Interactivity update date as Unix timestamp (In seconds) (readOnly).
 */
function KalturaBaseInteractivity(){
	this.data = null;
	this.version = null;
	this.entryId = null;
	this.updatedAt = null;
}
KalturaBaseInteractivity.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseResponseProfile(){
}
KalturaBaseResponseProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	feedUrl	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	playlistId	string		link a playlist that will set what content the feed will include
 *		 if empty, all content will be included in feed.
 * @param	name	string		feed name.
 * @param	status	int		feed status (readOnly).
 * @param	type	int		feed type (insertOnly).
 * @param	landingPage	string		Base URL for each video, on the partners site
 *		 This is required by all syndication types..
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	allowEmbed	bool		allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 *		 or just to provide a link to the landing page.
 *		 it is applied on the video-player_loc property in the XML (google)
 *		 and addes media-player tag (yahoo).
 * @param	playerUiconfId	int		Select a uiconf ID as player skin to include in the kwidget url.
 * @param	flavorParamId	int		.
 * @param	transcodeExistingContent	bool		.
 * @param	addToDefaultConversionProfile	bool		.
 * @param	categories	string		.
 * @param	storageId	int		.
 * @param	entriesOrderBy	string		.
 * @param	enforceEntitlement	bool		Should enforce entitlement on feed entries.
 * @param	privacyContext	string		Set privacy context for search entries that assiged to private and public categories within a category privacy context..
 * @param	updatedAt	int		Update date as Unix timestamp (In seconds) (readOnly).
 * @param	useCategoryEntries	bool		.
 * @param	feedContentTypeHeader	string		Feed content-type header value.
 */
function KalturaBaseSyndicationFeed(){
	this.id = null;
	this.feedUrl = null;
	this.partnerId = null;
	this.playlistId = null;
	this.name = null;
	this.status = null;
	this.type = null;
	this.landingPage = null;
	this.createdAt = null;
	this.allowEmbed = null;
	this.playerUiconfId = null;
	this.flavorParamId = null;
	this.transcodeExistingContent = null;
	this.addToDefaultConversionProfile = null;
	this.categories = null;
	this.storageId = null;
	this.entriesOrderBy = null;
	this.enforceEntitlement = null;
	this.privacyContext = null;
	this.updatedAt = null;
	this.useCategoryEntries = null;
	this.feedContentTypeHeader = null;
}
KalturaBaseSyndicationFeed.inheritsFrom (KalturaObjectBase);


/**
 * @param	capability	string		.
 */
function KalturaUserCapability(){
	this.capability = null;
}
KalturaUserCapability.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	screenName	string		.
 * @param	fullName	string		.
 * @param	email	string		.
 * @param	country	string		.
 * @param	state	string		.
 * @param	city	string		.
 * @param	zip	string		.
 * @param	thumbnailUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	adminTags	string		Admin tags can be updated only by using an admin session.
 * @param	status	int		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string.
 * @param	indexedPartnerDataInt	int		.
 * @param	indexedPartnerDataString	string		.
 * @param	storageSize	int		 (readOnly).
 * @param	language	string		.
 * @param	lastLoginTime	int		 (readOnly).
 * @param	statusUpdatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	allowedPartnerIds	string		.
 * @param	allowedPartnerPackages	string		.
 * @param	userMode	int		.
 * @param	capabilities	array		.
 */
function KalturaBaseUser(){
	this.id = null;
	this.partnerId = null;
	this.screenName = null;
	this.fullName = null;
	this.email = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.thumbnailUrl = null;
	this.description = null;
	this.tags = null;
	this.adminTags = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.indexedPartnerDataInt = null;
	this.indexedPartnerDataString = null;
	this.storageSize = null;
	this.language = null;
	this.lastLoginTime = null;
	this.statusUpdatedAt = null;
	this.deletedAt = null;
	this.allowedPartnerIds = null;
	this.allowedPartnerPackages = null;
	this.userMode = null;
	this.capabilities = null;
}
KalturaBaseUser.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseVendorCredit(){
}
KalturaBaseVendorCredit.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaJobData(){
}
KalturaJobData.inheritsFrom (KalturaObjectBase);


/**
 * @param	schedulerId	int		.
 * @param	workerId	int		.
 * @param	batchIndex	int		.
 * @param	timeStamp	int		.
 * @param	message	string		.
 * @param	errType	int		.
 * @param	errNumber	int		.
 * @param	hostName	string		.
 * @param	sessionId	string		.
 * @param	schedulerName	string		.
 */
function KalturaBatchHistoryData(){
	this.schedulerId = null;
	this.workerId = null;
	this.batchIndex = null;
	this.timeStamp = null;
	this.message = null;
	this.errType = null;
	this.errNumber = null;
	this.hostName = null;
	this.sessionId = null;
	this.schedulerName = null;
}
KalturaBatchHistoryData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	lockExpiration	int		 (readOnly).
 * @param	executionAttempts	int		 (readOnly).
 * @param	lockVersion	int		 (readOnly).
 * @param	entryId	string		.
 * @param	entryName	string		.
 * @param	jobType	string		 (readOnly).
 * @param	jobSubType	int		.
 * @param	data	KalturaJobData		.
 * @param	status	int		.
 * @param	abort	int		.
 * @param	checkAgainTimeout	int		.
 * @param	message	string		.
 * @param	description	string		.
 * @param	priority	int		.
 * @param	history	array		.
 * @param	bulkJobId	int		The id of the bulk upload job that initiated this job.
 * @param	batchVersion	int		.
 * @param	parentJobId	int		When one job creates another - the parent should set this parentJobId to be its own id..
 * @param	rootJobId	int		The id of the root parent job.
 * @param	queueTime	int		The time that the job was pulled from the queue.
 * @param	finishTime	int		The time that the job was finished or closed as failed.
 * @param	errType	int		.
 * @param	errNumber	int		.
 * @param	estimatedEffort	int		.
 * @param	urgency	int		.
 * @param	schedulerId	int		.
 * @param	workerId	int		.
 * @param	batchIndex	int		.
 * @param	lastSchedulerId	int		.
 * @param	lastWorkerId	int		.
 * @param	dc	int		.
 * @param	jobObjectId	string		.
 * @param	jobObjectType	int		.
 */
function KalturaBatchJob(){
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.lockExpiration = null;
	this.executionAttempts = null;
	this.lockVersion = null;
	this.entryId = null;
	this.entryName = null;
	this.jobType = null;
	this.jobSubType = null;
	this.data = null;
	this.status = null;
	this.abort = null;
	this.checkAgainTimeout = null;
	this.message = null;
	this.description = null;
	this.priority = null;
	this.history = null;
	this.bulkJobId = null;
	this.batchVersion = null;
	this.parentJobId = null;
	this.rootJobId = null;
	this.queueTime = null;
	this.finishTime = null;
	this.errType = null;
	this.errNumber = null;
	this.estimatedEffort = null;
	this.urgency = null;
	this.schedulerId = null;
	this.workerId = null;
	this.batchIndex = null;
	this.lastSchedulerId = null;
	this.lastWorkerId = null;
	this.dc = null;
	this.jobObjectId = null;
	this.jobObjectType = null;
}
KalturaBatchJob.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	label	string		.
 * @param	flashvars	array		.
 * @param	minVersion	string		.
 * @param	enabledByDefault	bool		.
 */
function KalturaPlayerDeliveryType(){
	this.id = null;
	this.label = null;
	this.flashvars = null;
	this.minVersion = null;
	this.enabledByDefault = null;
}
KalturaPlayerDeliveryType.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	label	string		.
 * @param	entryOnly	bool		.
 * @param	minVersion	string		.
 */
function KalturaPlayerEmbedCodeType(){
	this.id = null;
	this.label = null;
	this.entryOnly = null;
	this.minVersion = null;
}
KalturaPlayerEmbedCodeType.inheritsFrom (KalturaObjectBase);


/**
 * @param	eSerachLanguage	string		.
 */
function KalturaESearchLanguageItem(){
	this.eSerachLanguage = null;
}
KalturaESearchLanguageItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	regex	string		.
 * @param	description	string		.
 */
function KalturaRegexItem(){
	this.regex = null;
	this.description = null;
}
KalturaRegexItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	website	string		.
 * @param	notificationUrl	string		.
 * @param	appearInSearch	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	adminName	string		deprecated - lastName and firstName replaces this field.
 * @param	adminEmail	string		.
 * @param	description	string		.
 * @param	commercialUse	int		.
 * @param	landingPage	string		.
 * @param	userLandingPage	string		.
 * @param	contentCategories	string		.
 * @param	type	int		.
 * @param	phone	string		.
 * @param	describeYourself	string		.
 * @param	adultContent	bool		.
 * @param	defConversionProfileType	string		.
 * @param	notify	int		.
 * @param	status	int		 (readOnly).
 * @param	allowQuickEdit	int		.
 * @param	mergeEntryLists	int		.
 * @param	notificationsConfig	string		.
 * @param	allowedFromEmailWhiteList	string		.
 * @param	maxUploadSize	int		.
 * @param	partnerPackage	int		.
 * @param	secret	string		 (readOnly).
 * @param	adminSecret	string		 (readOnly).
 * @param	cmsPassword	string		 (readOnly).
 * @param	allowMultiNotification	int		.
 * @param	adminLoginUsersQuota	int		 (readOnly).
 * @param	adminUserId	string		.
 * @param	firstName	string		firstName and lastName replace the old (deprecated) adminName.
 * @param	lastName	string		lastName and firstName replace the old (deprecated) adminName.
 * @param	country	string		country code (2char) - this field is optional.
 * @param	state	string		state code (2char) - this field is optional.
 * @param	additionalParams	array		.
 * @param	publishersQuota	int		 (readOnly).
 * @param	partnerGroupType	int		 (readOnly).
 * @param	defaultEntitlementEnforcement	bool		 (readOnly).
 * @param	defaultDeliveryType	string		 (readOnly).
 * @param	defaultEmbedCodeType	string		 (readOnly).
 * @param	deliveryTypes	array		 (readOnly).
 * @param	embedCodeTypes	array		 (readOnly).
 * @param	templatePartnerId	int		 (readOnly).
 * @param	ignoreSeoLinks	bool		 (readOnly).
 * @param	useTwoFactorAuthentication	bool		 (readOnly).
 * @param	useSso	bool		.
 * @param	blockDirectLogin	bool		.
 * @param	host	string		 (readOnly).
 * @param	cdnHost	string		 (readOnly).
 * @param	isFirstLogin	bool		 (readOnly).
 * @param	logoutUrl	string		 (readOnly).
 * @param	partnerParentId	int		.
 * @param	crmId	string		 (readOnly).
 * @param	referenceId	string		.
 * @param	timeAlignedRenditions	bool		 (readOnly).
 * @param	publisherEnvironmentType	int		 (readOnly).
 * @param	ovpEnvironmentUrl	string		 (readOnly).
 * @param	ottEnvironmentUrl	string		 (readOnly).
 * @param	eSearchLanguages	array		.
 * @param	authenticationType	int		 (readOnly).
 * @param	extendedFreeTrailExpiryReason	string		 (readOnly).
 * @param	extendedFreeTrailExpiryDate	int		Unix timestamp (In seconds) (readOnly).
 * @param	extendedFreeTrail	int		 (readOnly).
 * @param	extendedFreeTrailEndsWarning	bool		 (readOnly).
 * @param	eightyPercentWarning	int		 (readOnly).
 * @param	usageLimitWarning	int		 (readOnly).
 * @param	lastFreeTrialNotificationDay	int		 (readOnly).
 * @param	monitorUsage	int		 (readOnly).
 * @param	passwordStructureValidations	array		.
 * @param	passwordStructureValidationsDescription	string		.
 * @param	passReplaceFreq	int		.
 * @param	maxLoginAttempts	int		.
 * @param	loginBlockPeriod	int		.
 * @param	numPrevPassToKeep	int		.
 * @param	allowDefaultPasswordRestrictions	bool		 (readOnly).
 * @param	twoFactorAuthenticationMode	int		 (readOnly).
 * @param	isSelfServe	bool		.
 * @param	allowedDomains	string		 (readOnly).
 * @param	excludedAdminRoleName	string		 (readOnly).
 * @param	eventPlatformAllowedTemplates	string		.
 * @param	verticalClassificationId	int		 (readOnly).
 * @param	recycleBinRetentionPeriod	int		 (readOnly).
 * @param	customAnalyticsDomain	string		.
 * @param	allowedEmailDomainsForAdmins	string		.
 */
function KalturaPartner(){
	this.id = null;
	this.name = null;
	this.website = null;
	this.notificationUrl = null;
	this.appearInSearch = null;
	this.createdAt = null;
	this.adminName = null;
	this.adminEmail = null;
	this.description = null;
	this.commercialUse = null;
	this.landingPage = null;
	this.userLandingPage = null;
	this.contentCategories = null;
	this.type = null;
	this.phone = null;
	this.describeYourself = null;
	this.adultContent = null;
	this.defConversionProfileType = null;
	this.notify = null;
	this.status = null;
	this.allowQuickEdit = null;
	this.mergeEntryLists = null;
	this.notificationsConfig = null;
	this.allowedFromEmailWhiteList = null;
	this.maxUploadSize = null;
	this.partnerPackage = null;
	this.secret = null;
	this.adminSecret = null;
	this.cmsPassword = null;
	this.allowMultiNotification = null;
	this.adminLoginUsersQuota = null;
	this.adminUserId = null;
	this.firstName = null;
	this.lastName = null;
	this.country = null;
	this.state = null;
	this.additionalParams = null;
	this.publishersQuota = null;
	this.partnerGroupType = null;
	this.defaultEntitlementEnforcement = null;
	this.defaultDeliveryType = null;
	this.defaultEmbedCodeType = null;
	this.deliveryTypes = null;
	this.embedCodeTypes = null;
	this.templatePartnerId = null;
	this.ignoreSeoLinks = null;
	this.useTwoFactorAuthentication = null;
	this.useSso = null;
	this.blockDirectLogin = null;
	this.host = null;
	this.cdnHost = null;
	this.isFirstLogin = null;
	this.logoutUrl = null;
	this.partnerParentId = null;
	this.crmId = null;
	this.referenceId = null;
	this.timeAlignedRenditions = null;
	this.publisherEnvironmentType = null;
	this.ovpEnvironmentUrl = null;
	this.ottEnvironmentUrl = null;
	this.eSearchLanguages = null;
	this.authenticationType = null;
	this.extendedFreeTrailExpiryReason = null;
	this.extendedFreeTrailExpiryDate = null;
	this.extendedFreeTrail = null;
	this.extendedFreeTrailEndsWarning = null;
	this.eightyPercentWarning = null;
	this.usageLimitWarning = null;
	this.lastFreeTrialNotificationDay = null;
	this.monitorUsage = null;
	this.passwordStructureValidations = null;
	this.passwordStructureValidationsDescription = null;
	this.passReplaceFreq = null;
	this.maxLoginAttempts = null;
	this.loginBlockPeriod = null;
	this.numPrevPassToKeep = null;
	this.allowDefaultPasswordRestrictions = null;
	this.twoFactorAuthenticationMode = null;
	this.isSelfServe = null;
	this.allowedDomains = null;
	this.excludedAdminRoleName = null;
	this.eventPlatformAllowedTemplates = null;
	this.verticalClassificationId = null;
	this.recycleBinRetentionPeriod = null;
	this.customAnalyticsDomain = null;
	this.allowedEmailDomainsForAdmins = null;
}
KalturaPartner.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Beacon id (readOnly).
 * @param	indexType	string		Beacon indexType (readOnly).
 * @param	updatedAt	int		Beacon update date as Unix timestamp (In seconds) (readOnly).
 * @param	relatedObjectType	string		The object which this beacon belongs to.
 * @param	eventType	string		.
 * @param	objectId	string		.
 * @param	privateData	string		.
 * @param	rawData	string		.
 */
function KalturaBeacon(){
	this.id = null;
	this.indexType = null;
	this.updatedAt = null;
	this.relatedObjectType = null;
	this.eventType = null;
	this.objectId = null;
	this.privateData = null;
	this.rawData = null;
}
KalturaBeacon.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaESearchBaseItem(){
}
KalturaESearchBaseItem.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBeaconScheduledResourceBaseItem(){
}
KalturaBeaconScheduledResourceBaseItem.inheritsFrom (KalturaESearchBaseItem);


/**
 * @param	objectId	string		.
 */
function KalturaBeaconSearchParams(){
	this.objectId = null;
}
KalturaBeaconSearchParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	sortOrder	string		.
 */
function KalturaESearchOrderByItem(){
	this.sortOrder = null;
}
KalturaESearchOrderByItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	sortField	string		.
 */
function KalturaBeaconSearchScheduledResourceOrderByItem(){
	this.sortField = null;
}
KalturaBeaconSearchScheduledResourceOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	orderItems	array		.
 */
function KalturaBeaconSearchScheduledResourceOrderBy(){
	this.orderItems = null;
}
KalturaBeaconSearchScheduledResourceOrderBy.inheritsFrom (KalturaObjectBase);


/**
 * @param	description	string		.
 */
function KalturaValue(){
	this.description = null;
}
KalturaValue.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	bool		.
 */
function KalturaBooleanValue(){
	this.value = null;
}
KalturaBooleanValue.inheritsFrom (KalturaValue);


/**
 */
function KalturaBulkServiceData(){
}
KalturaBulkServiceData.inheritsFrom (KalturaObjectBase);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaBulkUploadPluginData(){
	this.field = null;
	this.value = null;
}
KalturaBulkUploadPluginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the result (readOnly).
 * @param	bulkUploadJobId	int		The id of the parent job.
 * @param	lineIndex	int		The index of the line in the CSV.
 * @param	partnerId	int		.
 * @param	status	string		.
 * @param	action	string		.
 * @param	objectId	string		.
 * @param	objectStatus	int		.
 * @param	bulkUploadResultObjectType	string		.
 * @param	rowData	string		The data as recieved in the csv.
 * @param	partnerData	string		.
 * @param	objectErrorDescription	string		.
 * @param	pluginsData	array		.
 * @param	errorDescription	string		.
 * @param	errorCode	string		.
 * @param	errorType	int		.
 */
function KalturaBulkUploadResult(){
	this.id = null;
	this.bulkUploadJobId = null;
	this.lineIndex = null;
	this.partnerId = null;
	this.status = null;
	this.action = null;
	this.objectId = null;
	this.objectStatus = null;
	this.bulkUploadResultObjectType = null;
	this.rowData = null;
	this.partnerData = null;
	this.objectErrorDescription = null;
	this.pluginsData = null;
	this.errorDescription = null;
	this.errorCode = null;
	this.errorType = null;
}
KalturaBulkUploadResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		.
 * @param	uploadedBy	string		.
 * @param	uploadedByUserId	string		.
 * @param	uploadedOn	int		.
 * @param	numOfEntries	int		.
 * @param	status	int		.
 * @param	logFileUrl	string		.
 * @param	csvFileUrl	string		.
 * @param	bulkFileUrl	string		.
 * @param	bulkUploadType	string		.
 * @param	results	array		.
 * @param	error	string		.
 * @param	errorType	int		.
 * @param	errorNumber	int		.
 * @param	fileName	string		.
 * @param	description	string		.
 * @param	numOfObjects	int		.
 * @param	bulkUploadObjectType	string		.
 */
function KalturaBulkUpload(){
	this.id = null;
	this.uploadedBy = null;
	this.uploadedByUserId = null;
	this.uploadedOn = null;
	this.numOfEntries = null;
	this.status = null;
	this.logFileUrl = null;
	this.csvFileUrl = null;
	this.bulkFileUrl = null;
	this.bulkUploadType = null;
	this.results = null;
	this.error = null;
	this.errorType = null;
	this.errorNumber = null;
	this.fileName = null;
	this.description = null;
	this.numOfObjects = null;
	this.bulkUploadObjectType = null;
}
KalturaBulkUpload.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBulkUploadObjectData(){
}
KalturaBulkUploadObjectData.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaPluginData(){
}
KalturaPluginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	scheme	string		.
 * @param	licenseURL	string		.
 */
function KalturaDrmPlaybackPluginData(){
	this.scheme = null;
	this.licenseURL = null;
}
KalturaDrmPlaybackPluginData.inheritsFrom (KalturaPluginData);


/**
 * @param	deliveryProfileId	string		.
 * @param	format	string		source format according to delivery profile streamer type (applehttp, mpegdash etc.).
 * @param	protocols	string		comma separated string according to deliveryProfile media protocols ('http,https' etc.).
 * @param	flavorIds	string		comma separated string of flavor ids.
 * @param	url	string		.
 * @param	drm	array		drm data object containing relevant license url ,scheme name and certificate.
 */
function KalturaPlaybackSource(){
	this.deliveryProfileId = null;
	this.format = null;
	this.protocols = null;
	this.flavorIds = null;
	this.url = null;
	this.drm = null;
}
KalturaPlaybackSource.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryId	string		.
 * @param	url	string		.
 * @param	sources	array		 (readOnly).
 */
function KalturaBumper(){
	this.entryId = null;
	this.url = null;
	this.sources = null;
}
KalturaBumper.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	businessProcessId	string		.
 * @param	businessProcessStartNotificationTemplateId	int		.
 * @param	suspended	bool		.
 * @param	activityId	string		.
 */
function KalturaBusinessProcessCase(){
	this.id = null;
	this.businessProcessId = null;
	this.businessProcessStartNotificationTemplateId = null;
	this.suspended = null;
	this.activityId = null;
}
KalturaBusinessProcessCase.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated identifier (readOnly).
 * @param	createdAt	int		Server creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Server update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	status	string		 (readOnly).
 * @param	type	string		The type of the server, this is auto filled by the derived server object (readOnly).
 * @param	dc	int		The dc of the server.
 */
function KalturaBusinessProcessServer(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.type = null;
	this.dc = null;
}
KalturaBusinessProcessServer.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	partnerId	int		.
 * @param	browser	string		.
 * @param	serverIp	string		.
 * @param	serverOs	string		.
 * @param	phpVersion	string		.
 * @param	ceAdminEmail	string		.
 * @param	type	string		.
 * @param	description	string		.
 * @param	data	string		.
 */
function KalturaCEError(){
	this.id = null;
	this.partnerId = null;
	this.browser = null;
	this.serverIp = null;
	this.serverOs = null;
	this.phpVersion = null;
	this.ceAdminEmail = null;
	this.type = null;
	this.description = null;
	this.data = null;
}
KalturaCEError.inheritsFrom (KalturaObjectBase);


/**
 * @param	captionParamsId	int		The Caption Params used to create this Caption Asset (insertOnly).
 * @param	language	string		The language of the caption asset content.
 * @param	languageCode	string		The language of the caption asset content (readOnly).
 * @param	isDefault	int		Is default caption asset of the entry.
 * @param	label	string		Friendly label.
 * @param	format	string		The caption format (insertOnly).
 * @param	source	string		The source of the asset (insertOnly).
 * @param	status	int		The status of the asset (readOnly).
 * @param	parentId	string		The parent id of the asset (insertOnly).
 * @param	accuracy	int		The Accuracy of the caption content.
 * @param	displayOnPlayer	bool		The Accuracy of the caption content.
 * @param	associatedTranscriptIds	string		List of associated transcript asset id's, comma separated.
 * @param	usage	string		The usage of the asset.
 */
function KalturaCaptionAsset(){
	this.captionParamsId = null;
	this.language = null;
	this.languageCode = null;
	this.isDefault = null;
	this.label = null;
	this.format = null;
	this.source = null;
	this.status = null;
	this.parentId = null;
	this.accuracy = null;
	this.displayOnPlayer = null;
	this.associatedTranscriptIds = null;
	this.usage = null;
}
KalturaCaptionAsset.inheritsFrom (KalturaAsset);


/**
 * @param	asset	KalturaCaptionAsset		The Caption Asset object.
 * @param	entry	KalturaBaseEntry		The entry object.
 * @param	startTime	int		.
 * @param	endTime	int		.
 * @param	content	string		.
 */
function KalturaCaptionAssetItem(){
	this.asset = null;
	this.entry = null;
	this.startTime = null;
	this.endTime = null;
	this.content = null;
}
KalturaCaptionAssetItem.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaCaptionAttributes(){
}
KalturaCaptionAttributes.inheritsFrom (KalturaObjectBase);


/**
 * @param	language	string		The language of the caption content (insertOnly).
 * @param	isDefault	int		Is default caption asset of the entry.
 * @param	label	string		Friendly label.
 * @param	format	string		The caption format (insertOnly).
 * @param	sourceParamsId	int		Id of the caption params or the flavor params to be used as source for the caption creation.
 */
function KalturaCaptionParams(){
	this.language = null;
	this.isDefault = null;
	this.label = null;
	this.format = null;
	this.sourceParamsId = null;
}
KalturaCaptionParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	label	string		.
 * @param	format	string		.
 * @param	language	string		.
 * @param	webVttUrl	string		.
 * @param	url	string		.
 * @param	isDefault	bool		.
 * @param	languageCode	string		.
 */
function KalturaCaptionPlaybackPluginData(){
	this.label = null;
	this.format = null;
	this.language = null;
	this.webVttUrl = null;
	this.url = null;
	this.isDefault = null;
	this.languageCode = null;
}
KalturaCaptionPlaybackPluginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category (readOnly).
 * @param	parentId	int		.
 * @param	depth	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Category. 
 *		 The following characters are not allowed: '<', '>', ','.
 * @param	fullName	string		The full name of the Category (readOnly).
 * @param	fullIds	string		The full ids of the Category (readOnly).
 * @param	entriesCount	int		Number of entries in this Category (including child categories) (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Update date as Unix timestamp (In seconds) (readOnly).
 * @param	description	string		Category description.
 * @param	tags	string		Category tags.
 * @param	appearInList	int		If category will be returned for list action..
 * @param	privacy	int		defines the privacy of the entries that assigned to this category.
 * @param	inheritanceType	int		If Category members are inherited from parent category or set manualy..
 * @param	userJoinPolicy	int		Who can ask to join this category (readOnly).
 * @param	defaultPermissionLevel	int		Default permissionLevel for new users.
 * @param	owner	string		Category Owner (User id).
 * @param	directEntriesCount	int		Number of entries that belong to this category directly (readOnly).
 * @param	referenceId	string		Category external id, controlled and managed by the partner..
 * @param	contributionPolicy	int		who can assign entries to this category.
 * @param	membersCount	int		Number of active members for this category (readOnly).
 * @param	pendingMembersCount	int		Number of pending members for this category (readOnly).
 * @param	privacyContext	string		Set privacy context for search entries that assiged to private and public categories. the entries will be private if the search context is set with those categories..
 * @param	privacyContexts	string		comma separated parents that defines a privacyContext for search (readOnly).
 * @param	status	int		Status (readOnly).
 * @param	inheritedParentId	int		The category id that this category inherit its members and members permission (for contribution and join) (readOnly).
 * @param	partnerSortValue	int		Can be used to store various partner related data as a numeric value.
 * @param	partnerData	string		Can be used to store various partner related data as a string.
 * @param	defaultOrderBy	string		Enable client side applications to define how to sort the category child categories.
 * @param	directSubCategoriesCount	int		Number of direct children categories (readOnly).
 * @param	moderation	int		Moderation to add entries to this category by users that are not of permission level Manager or Moderator..
 * @param	pendingEntriesCount	int		Nunber of pending moderation entries (readOnly).
 * @param	isAggregationCategory	int		Flag indicating that the category is an aggregation category.
 * @param	aggregationCategories	string		List of aggregation channels the category belongs to.
 * @param	adminTags	string		.
 */
function KalturaCategory(){
	this.id = null;
	this.parentId = null;
	this.depth = null;
	this.partnerId = null;
	this.name = null;
	this.fullName = null;
	this.fullIds = null;
	this.entriesCount = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.description = null;
	this.tags = null;
	this.appearInList = null;
	this.privacy = null;
	this.inheritanceType = null;
	this.userJoinPolicy = null;
	this.defaultPermissionLevel = null;
	this.owner = null;
	this.directEntriesCount = null;
	this.referenceId = null;
	this.contributionPolicy = null;
	this.membersCount = null;
	this.pendingMembersCount = null;
	this.privacyContext = null;
	this.privacyContexts = null;
	this.status = null;
	this.inheritedParentId = null;
	this.partnerSortValue = null;
	this.partnerData = null;
	this.defaultOrderBy = null;
	this.directSubCategoriesCount = null;
	this.moderation = null;
	this.pendingEntriesCount = null;
	this.isAggregationCategory = null;
	this.aggregationCategories = null;
	this.adminTags = null;
}
KalturaCategory.inheritsFrom (KalturaObjectBase);


/**
 * @param	categoryId	int		.
 * @param	entryId	string		entry id.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	categoryFullIds	string		The full ids of the Category (readOnly).
 * @param	status	int		CategroyEntry status (readOnly).
 * @param	creatorUserId	string		CategroyEntry creator puser ID (readOnly).
 */
function KalturaCategoryEntry(){
	this.categoryId = null;
	this.entryId = null;
	this.createdAt = null;
	this.categoryFullIds = null;
	this.status = null;
	this.creatorUserId = null;
}
KalturaCategoryEntry.inheritsFrom (KalturaObjectBase);


/**
 * @param	categoryId	int		 (insertOnly).
 * @param	userId	string		User id (insertOnly).
 * @param	partnerId	int		Partner id (readOnly).
 * @param	permissionLevel	int		Permission level.
 * @param	status	int		Status (readOnly).
 * @param	createdAt	int		CategoryUser creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		CategoryUser update date as Unix timestamp (In seconds) (readOnly).
 * @param	updateMethod	int		Update method can be either manual or automatic to distinguish between manual operations (for example in KMC) on automatic - using bulk upload.
 * @param	categoryFullIds	string		The full ids of the Category (readOnly).
 * @param	permissionNames	string		Set of category-related permissions for the current category user..
 */
function KalturaCategoryUser(){
	this.categoryId = null;
	this.userId = null;
	this.partnerId = null;
	this.permissionLevel = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.updateMethod = null;
	this.categoryFullIds = null;
	this.permissionNames = null;
}
KalturaCategoryUser.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientTag	string		.
 * @param	apiVersion	string		.
 */
function KalturaClientConfiguration(){
	this.clientTag = null;
	this.apiVersion = null;
}
KalturaClientConfiguration.inheritsFrom (KalturaObjectBase);


/**
 * @param	url	string		The URL where the notification should be sent to.
 * @param	data	string		The serialized notification data to send.
 */
function KalturaClientNotification(){
	this.url = null;
	this.data = null;
}
KalturaClientNotification.inheritsFrom (KalturaObjectBase);


/**
 * @param	sourceEntryId	string		.
 * @param	startTime	int		.
 * @param	duration	int		.
 * @param	offsetInDestination	int		.
 */
function KalturaClipDescription(){
	this.sourceEntryId = null;
	this.startTime = null;
	this.duration = null;
	this.offsetInDestination = null;
}
KalturaClipDescription.inheritsFrom (KalturaObjectBase);


/**
 * @param	name	string		Name of the map (insertOnly).
 * @param	content	string		Ini file content.
 * @param	rawData	string		.
 * @param	userId	string		.
 * @param	isEditable	bool		IsEditable - true / false (readOnly).
 * @param	createdAt	int		Time of the last update (readOnly).
 * @param	relatedHost	string		Regex that represent the host/s that this map affect.
 * @param	version	int		 (readOnly).
 * @param	sourceLocation	string		 (insertOnly).
 * @param	remarks	string		 (insertOnly).
 * @param	status	int		map status.
 * @param	changeDescription	string		.
 */
function KalturaConfMaps(){
	this.name = null;
	this.content = null;
	this.rawData = null;
	this.userId = null;
	this.isEditable = null;
	this.createdAt = null;
	this.relatedHost = null;
	this.version = null;
	this.sourceLocation = null;
	this.remarks = null;
	this.status = null;
	this.changeDescription = null;
}
KalturaConfMaps.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaContext(){
}
KalturaContext.inheritsFrom (KalturaObjectBase);


/**
 * @param	messages	array		Array of messages as received from the rules that invalidated.
 * @param	actions	array		Array of actions as received from the rules that invalidated.
 */
function KalturaContextDataResult(){
	this.messages = null;
	this.actions = null;
}
KalturaContextDataResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	createdBy	string		Creator name.
 * @param	updatedAt	int		Update date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedBy	string		Updater name.
 * @param	createdById	int		Creator id.
 * @param	schedulerId	int		The id of the scheduler that the command refers to.
 * @param	workerId	int		The id of the scheduler worker that the command refers to.
 * @param	workerConfiguredId	int		The id of the scheduler worker as configured in the ini file.
 * @param	workerName	int		The name of the scheduler worker that the command refers to.
 * @param	batchIndex	int		The index of the batch process that the command refers to.
 * @param	type	int		The command type - stop / start / config.
 * @param	targetType	int		The command target type - data center / scheduler / job / job type.
 * @param	status	int		The command status.
 * @param	cause	string		The reason for the command.
 * @param	description	string		Command description.
 * @param	errorDescription	string		Error description.
 */
function KalturaControlPanelCommand(){
	this.id = null;
	this.createdAt = null;
	this.createdBy = null;
	this.updatedAt = null;
	this.updatedBy = null;
	this.createdById = null;
	this.schedulerId = null;
	this.workerId = null;
	this.workerConfiguredId = null;
	this.workerName = null;
	this.batchIndex = null;
	this.type = null;
	this.targetType = null;
	this.status = null;
	this.cause = null;
	this.description = null;
	this.errorDescription = null;
}
KalturaControlPanelCommand.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsId	int		The id of the flavor params, set to null for source flavor.
 * @param	name	string		Attribute name.
 * @param	value	string		Attribute value.
 */
function KalturaConversionAttribute(){
	this.flavorParamsId = null;
	this.name = null;
	this.value = null;
}
KalturaConversionAttribute.inheritsFrom (KalturaObjectBase);


/**
 * @param	left	int		Crop left point.
 * @param	top	int		Crop top point.
 * @param	width	int		Crop width.
 * @param	height	int		Crop height.
 */
function KalturaCropDimensions(){
	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
}
KalturaCropDimensions.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaPluginReplacementOptionsItem(){
}
KalturaPluginReplacementOptionsItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	keepManualThumbnails	int		If true manually created thumbnails will not be deleted on entry replacement.
 * @param	pluginOptionItems	array		Array of plugin replacement options.
 */
function KalturaEntryReplacementOptions(){
	this.keepManualThumbnails = null;
	this.pluginOptionItems = null;
}
KalturaEntryReplacementOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Conversion Profile (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	status	string		.
 * @param	type	string		 (insertOnly).
 * @param	name	string		The name of the Conversion Profile.
 * @param	systemName	string		System name of the Conversion Profile.
 * @param	tags	string		Comma separated tags.
 * @param	description	string		The description of the Conversion Profile.
 * @param	defaultEntryId	string		ID of the default entry to be used for template data.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	flavorParamsIds	string		List of included flavor ids (comma separated).
 * @param	isDefault	int		Indicates that this conversion profile is system default.
 * @param	isPartnerDefault	bool		Indicates that this conversion profile is partner default (readOnly).
 * @param	cropDimensions	KalturaCropDimensions		Cropping dimensions.
 * @param	clipStart	int		Clipping start position (in miliseconds).
 * @param	clipDuration	int		Clipping duration (in miliseconds).
 * @param	xslTransformation	string		XSL to transform ingestion MRSS XML.
 * @param	storageProfileId	int		ID of default storage profile to be used for linked net-storage file syncs.
 * @param	mediaParserType	string		Media parser type to be used for extract media.
 * @param	calculateComplexity	int		Should calculate file conversion complexity.
 * @param	collectionTags	string		Defines the tags that should be used to define 'collective'/group/multi-flavor processing,
 *		 like 'mbr' or 'ism'.
 * @param	conditionalProfiles	string		JSON string with array of "condition,profile-id" pairs..
 * @param	detectGOP	int		When set, the ExtractMedia job should detect the source file GOP using this value as the max calculated period.
 * @param	mediaInfoXslTransformation	string		XSL to transform ingestion Media Info XML.
 * @param	defaultReplacementOptions	KalturaEntryReplacementOptions		Default replacement options to be applied to entries.
 * @param	defaultAudioLang	string		.
 * @param	deliveryTag	string		.
 */
function KalturaConversionProfile(){
	this.id = null;
	this.partnerId = null;
	this.status = null;
	this.type = null;
	this.name = null;
	this.systemName = null;
	this.tags = null;
	this.description = null;
	this.defaultEntryId = null;
	this.createdAt = null;
	this.flavorParamsIds = null;
	this.isDefault = null;
	this.isPartnerDefault = null;
	this.cropDimensions = null;
	this.clipStart = null;
	this.clipDuration = null;
	this.xslTransformation = null;
	this.storageProfileId = null;
	this.mediaParserType = null;
	this.calculateComplexity = null;
	this.collectionTags = null;
	this.conditionalProfiles = null;
	this.detectGOP = null;
	this.mediaInfoXslTransformation = null;
	this.defaultReplacementOptions = null;
	this.defaultAudioLang = null;
	this.deliveryTag = null;
}
KalturaConversionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	conversionProfileId	int		The id of the conversion profile (readOnly).
 * @param	assetParamsId	int		The id of the asset params (readOnly).
 * @param	readyBehavior	int		The ingestion origin of the asset params.
 * @param	origin	int		The ingestion origin of the asset params.
 * @param	systemName	string		Asset params system name.
 * @param	forceNoneComplied	int		Starts conversion even if the decision layer reduced the configuration to comply with the source.
 * @param	deletePolicy	int		Specifies how to treat the flavor after conversion is finished.
 * @param	isEncrypted	int		.
 * @param	contentAwareness	float		.
 * @param	chunkedEncodeMode	int		.
 * @param	twoPass	int		.
 * @param	tags	string		.
 * @param	overloadParams	string		JSON string containing an array of flavotParams field-value pairs..
 */
function KalturaConversionProfileAssetParams(){
	this.conversionProfileId = null;
	this.assetParamsId = null;
	this.readyBehavior = null;
	this.origin = null;
	this.systemName = null;
	this.forceNoneComplied = null;
	this.deletePolicy = null;
	this.isEncrypted = null;
	this.contentAwareness = null;
	this.chunkedEncodeMode = null;
	this.twoPass = null;
	this.tags = null;
	this.overloadParams = null;
}
KalturaConversionProfileAssetParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorAssetId	string		.
 * @param	flavorParamsOutputId	int		.
 * @param	readyBehavior	int		.
 * @param	videoBitrate	int		.
 * @param	audioBitrate	int		.
 * @param	destFileSyncLocalPath	string		.
 * @param	destFileSyncRemoteUrl	string		.
 */
function KalturaConvertCollectionFlavorData(){
	this.flavorAssetId = null;
	this.flavorParamsOutputId = null;
	this.readyBehavior = null;
	this.videoBitrate = null;
	this.audioBitrate = null;
	this.destFileSyncLocalPath = null;
	this.destFileSyncRemoteUrl = null;
}
KalturaConvertCollectionFlavorData.inheritsFrom (KalturaObjectBase);


/**
 * @param	latitude	float		.
 * @param	longitude	float		.
 * @param	name	string		.
 */
function KalturaCoordinate(){
	this.latitude = null;
	this.longitude = null;
	this.name = null;
}
KalturaCoordinate.inheritsFrom (KalturaObjectBase);


/**
 * @param	language	string		.
 * @param	label	string		.
 * @param	filePath	string		.
 * @param	remoteId	string		.
 * @param	action	int		.
 * @param	version	string		.
 * @param	assetId	string		.
 * @param	fileExt	string		.
 */
function KalturaCortexApiCaptionDistributionInfo(){
	this.language = null;
	this.label = null;
	this.filePath = null;
	this.remoteId = null;
	this.action = null;
	this.version = null;
	this.assetId = null;
	this.fileExt = null;
}
KalturaCortexApiCaptionDistributionInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	crop	bool		.
 * @param	aspectRatio	float		.
 */
function KalturaCropAspectRatio(){
	this.crop = null;
	this.aspectRatio = null;
}
KalturaCropAspectRatio.inheritsFrom (KalturaObjectBase);


/**
 * @param	fieldName	string		.
 * @param	xpath	string		.
 */
function KalturaCsvAdditionalFieldInfo(){
	this.fieldName = null;
	this.xpath = null;
}
KalturaCsvAdditionalFieldInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	language	string		.
 * @param	filePath	string		.
 * @param	remoteId	string		.
 * @param	action	int		.
 * @param	version	string		.
 * @param	assetId	string		.
 * @param	format	int		.
 */
function KalturaDailymotionDistributionCaptionInfo(){
	this.language = null;
	this.filePath = null;
	this.remoteId = null;
	this.action = null;
	this.version = null;
	this.assetId = null;
	this.format = null;
}
KalturaDailymotionDistributionCaptionInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	dataContent	string		The data of the entry.
 * @param	retrieveDataContentByGet	bool		indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
function KalturaDataEntry(){
	this.dataContent = null;
	this.retrieveDataContentByGet = null;
}
KalturaDataEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	hosts	string		The hosts that are recognized.
 * @param	uriPrefix	string		The URI prefix we use for security.
 */
function KalturaUrlRecognizer(){
	this.hosts = null;
	this.uriPrefix = null;
}
KalturaUrlRecognizer.inheritsFrom (KalturaObjectBase);


/**
 * @param	window	int		Window.
 * @param	key	string		key.
 * @param	limitIpAddress	bool		.
 */
function KalturaUrlTokenizer(){
	this.window = null;
	this.key = null;
	this.limitIpAddress = null;
}
KalturaUrlTokenizer.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaSearchItem(){
}
KalturaSearchItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	orderBy	string		.
 * @param	advancedSearch	KalturaSearchItem		.
 */
function KalturaFilter(){
	this.orderBy = null;
	this.advancedSearch = null;
}
KalturaFilter.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaRelatedFilter(){
}
KalturaRelatedFilter.inheritsFrom (KalturaFilter);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	sizeGreaterThanOrEqual	int		.
 * @param	sizeLessThanOrEqual	int		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	deletedAtGreaterThanOrEqual	int		.
 * @param	deletedAtLessThanOrEqual	int		.
 */
function KalturaAssetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.sizeGreaterThanOrEqual = null;
	this.sizeLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.deletedAtGreaterThanOrEqual = null;
	this.deletedAtLessThanOrEqual = null;
}
KalturaAssetBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	typeIn	string		.
 */
function KalturaAssetFilter(){
	this.typeIn = null;
}
KalturaAssetFilter.inheritsFrom (KalturaAssetBaseFilter);


/**
 * @param	id	int		The id of the Delivery (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Delivery.
 * @param	type	string		Delivery type.
 * @param	systemName	string		System name of the delivery.
 * @param	description	string		The description of the Delivery.
 * @param	createdAt	int		Creation time as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Update time as Unix timestamp (In seconds) (readOnly).
 * @param	streamerType	string		.
 * @param	url	string		.
 * @param	hostName	string		the host part of the url (readOnly).
 * @param	status	int		.
 * @param	recognizer	KalturaUrlRecognizer		.
 * @param	tokenizer	KalturaUrlTokenizer		.
 * @param	isDefault	int		True if this is the systemwide default for the protocol (readOnly).
 * @param	parentId	int		the object from which this object was cloned (or 0) (readOnly).
 * @param	mediaProtocols	string		Comma separated list of supported media protocols. f.i. rtmpe.
 * @param	priority	int		priority used for ordering similar delivery profiles.
 * @param	extraParams	string		Extra query string parameters that should be added to the url.
 * @param	supplementaryAssetsFilter	KalturaAssetFilter		A filter that can be used to include additional assets in the URL (e.g. captions).
 * @param	enforceDeliveriesSupport	string		.
 */
function KalturaDeliveryProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.type = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.streamerType = null;
	this.url = null;
	this.hostName = null;
	this.status = null;
	this.recognizer = null;
	this.tokenizer = null;
	this.isDefault = null;
	this.parentId = null;
	this.mediaProtocols = null;
	this.priority = null;
	this.extraParams = null;
	this.supplementaryAssetsFilter = null;
	this.enforceDeliveriesSupport = null;
}
KalturaDeliveryProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	fileSyncLocalPath	string		.
 * @param	fileEncryptionKey	string		.
 * @param	fileSyncRemoteUrl	string		The translated path as used by the scheduler.
 * @param	fileSyncObjectSubType	int		.
 */
function KalturaFileSyncDescriptor(){
	this.fileSyncLocalPath = null;
	this.fileEncryptionKey = null;
	this.fileSyncRemoteUrl = null;
	this.fileSyncObjectSubType = null;
}
KalturaFileSyncDescriptor.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaDestFileSyncDescriptor(){
}
KalturaDestFileSyncDescriptor.inheritsFrom (KalturaFileSyncDescriptor);


/**
 * @param	pageSize	int		The number of objects to retrieve. (Default is 30, maximum page size is 500)..
 * @param	pageIndex	int		The page number for which {pageSize} of objects should be retrieved (Default is 1)..
 */
function KalturaPager(){
	this.pageSize = null;
	this.pageIndex = null;
}
KalturaPager.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaFilterPager(){
}
KalturaFilterPager.inheritsFrom (KalturaPager);


/**
 * @param	parentProperty	string		.
 * @param	filterProperty	string		.
 * @param	allowNull	bool		.
 */
function KalturaResponseProfileMapping(){
	this.parentProperty = null;
	this.filterProperty = null;
	this.allowNull = null;
}
KalturaResponseProfileMapping.inheritsFrom (KalturaObjectBase);


/**
 * @param	name	string		Friendly name.
 * @param	type	int		.
 * @param	fields	string		Comma separated fields list to be included or excluded.
 * @param	filter	KalturaRelatedFilter		.
 * @param	pager	KalturaFilterPager		.
 * @param	relatedProfiles	array		.
 * @param	mappings	array		.
 */
function KalturaDetachedResponseProfile(){
	this.name = null;
	this.type = null;
	this.fields = null;
	this.filter = null;
	this.pager = null;
	this.relatedProfiles = null;
	this.mappings = null;
}
KalturaDetachedResponseProfile.inheritsFrom (KalturaBaseResponseProfile);


/**
 * @param	language	string		.
 * @param	data	string		.
 */
function KalturaDictionary(){
	this.language = null;
	this.data = null;
}
KalturaDictionary.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaDimensionsAttributes(){
}
KalturaDimensionsAttributes.inheritsFrom (KalturaObjectBase);


/**
 * @param	fieldName	string		A value taken from a connector field enum which associates the current configuration to that connector field
 *	     Field enum class should be returned by the provider's getFieldEnumClass function..
 * @param	userFriendlyFieldName	string		A string that will be shown to the user as the field name in error messages related to the current field.
 * @param	entryMrssXslt	string		An XSLT string that extracts the right value from the Kaltura entry MRSS XML.
 *	     The value of the current connector field will be the one that is returned from transforming the Kaltura entry MRSS XML using this XSLT string..
 * @param	isRequired	int		Is the field required to have a value for submission ?.
 * @param	type	string		.
 * @param	updateOnChange	bool		Trigger distribution update when this field changes or not ?.
 * @param	updateParams	array		Entry column or metadata xpath that should trigger an update.
 * @param	isDefault	bool		Is this field config is the default for the distribution provider? (readOnly).
 * @param	triggerDeleteOnError	bool		Is an error on this field going to trigger deletion of distributed content?.
 */
function KalturaDistributionFieldConfig(){
	this.fieldName = null;
	this.userFriendlyFieldName = null;
	this.entryMrssXslt = null;
	this.isRequired = null;
	this.type = null;
	this.updateOnChange = null;
	this.updateParams = null;
	this.isDefault = null;
	this.triggerDeleteOnError = null;
}
KalturaDistributionFieldConfig.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaDistributionJobProviderData(){
}
KalturaDistributionJobProviderData.inheritsFrom (KalturaObjectBase);


/**
 * @param	width	int		.
 * @param	height	int		.
 */
function KalturaDistributionThumbDimensions(){
	this.width = null;
	this.height = null;
}
KalturaDistributionThumbDimensions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id (readOnly).
 * @param	createdAt	int		Profile creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Profile last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	providerType	string		 (insertOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	submitEnabled	int		.
 * @param	updateEnabled	int		.
 * @param	deleteEnabled	int		.
 * @param	reportEnabled	int		.
 * @param	autoCreateFlavors	string		Comma separated flavor params ids that should be auto converted.
 * @param	autoCreateThumb	string		Comma separated thumbnail params ids that should be auto generated.
 * @param	optionalFlavorParamsIds	string		Comma separated flavor params ids that should be submitted if ready.
 * @param	requiredFlavorParamsIds	string		Comma separated flavor params ids that required to be ready before submission.
 * @param	optionalThumbDimensions	array		Thumbnail dimensions that should be submitted if ready.
 * @param	requiredThumbDimensions	array		Thumbnail dimensions that required to be readt before submission.
 * @param	optionalAssetDistributionRules	array		Asset Distribution Rules for assets that should be submitted if ready.
 * @param	requiredAssetDistributionRules	array		Assets Asset Distribution Rules for assets that are required to be ready before submission.
 * @param	sunriseDefaultOffset	int		If entry distribution sunrise not specified that will be the default since entry creation time, in seconds.
 * @param	sunsetDefaultOffset	int		If entry distribution sunset not specified that will be the default since entry creation time, in seconds.
 * @param	recommendedStorageProfileForDownload	int		The best external storage to be used to download the asset files from.
 * @param	recommendedDcForDownload	int		The best Kaltura data center to be used to download the asset files to.
 * @param	recommendedDcForExecute	int		The best Kaltura data center to be used to execute the distribution job.
 * @param	distributeTrigger	int		The event that trigger the automatic distribute.
 * @param	supportImageEntry	bool		 (readOnly).
 */
function KalturaDistributionProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.providerType = null;
	this.name = null;
	this.status = null;
	this.submitEnabled = null;
	this.updateEnabled = null;
	this.deleteEnabled = null;
	this.reportEnabled = null;
	this.autoCreateFlavors = null;
	this.autoCreateThumb = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.optionalAssetDistributionRules = null;
	this.requiredAssetDistributionRules = null;
	this.sunriseDefaultOffset = null;
	this.sunsetDefaultOffset = null;
	this.recommendedStorageProfileForDownload = null;
	this.recommendedDcForDownload = null;
	this.recommendedDcForExecute = null;
	this.distributeTrigger = null;
	this.supportImageEntry = null;
}
KalturaDistributionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		 (readOnly).
 * @param	name	string		.
 * @param	scheduleUpdateEnabled	bool		.
 * @param	availabilityUpdateEnabled	bool		.
 * @param	deleteInsteadUpdate	bool		.
 * @param	intervalBeforeSunrise	int		.
 * @param	intervalBeforeSunset	int		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaDistributionProvider(){
	this.type = null;
	this.name = null;
	this.scheduleUpdateEnabled = null;
	this.availabilityUpdateEnabled = null;
	this.deleteInsteadUpdate = null;
	this.intervalBeforeSunrise = null;
	this.intervalBeforeSunset = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaDistributionProvider.inheritsFrom (KalturaObjectBase);


/**
 * @param	version	string		.
 * @param	assetId	string		.
 * @param	remoteId	string		.
 */
function KalturaDistributionRemoteMediaFile(){
	this.version = null;
	this.assetId = null;
	this.remoteId = null;
}
KalturaDistributionRemoteMediaFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	action	int		.
 * @param	errorType	int		.
 * @param	description	string		.
 */
function KalturaDistributionValidationError(){
	this.action = null;
	this.errorType = null;
	this.description = null;
}
KalturaDistributionValidationError.inheritsFrom (KalturaObjectBase);


/**
 * @param	documentType	int		The type of the document (insertOnly).
 * @param	assetParamsIds	string		Comma separated asset params ids that exists for this media entry (readOnly).
 */
function KalturaDocumentEntry(){
	this.documentType = null;
	this.assetParamsIds = null;
}
KalturaDocumentEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	policy	string		Drm policy name.
 * @param	duration	int		movie duration in seconds.
 * @param	absolute_duration	int		playback window in seconds.
 * @param	licenseParams	array		.
 */
function KalturaDrmLicenseAccessDetails(){
	this.policy = null;
	this.duration = null;
	this.absolute_duration = null;
	this.licenseParams = null;
}
KalturaDrmLicenseAccessDetails.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (insertOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	provider	string		.
 * @param	status	int		.
 * @param	scenario	string		.
 * @param	licenseType	string		.
 * @param	licenseExpirationPolicy	int		.
 * @param	duration	int		Duration in days the license is effective.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	licenseParams	array		.
 */
function KalturaDrmPolicy(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.provider = null;
	this.status = null;
	this.scenario = null;
	this.licenseType = null;
	this.licenseExpirationPolicy = null;
	this.duration = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.licenseParams = null;
}
KalturaDrmPolicy.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (insertOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	provider	string		.
 * @param	status	int		.
 * @param	licenseServerUrl	string		.
 * @param	defaultPolicy	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	signingKey	string		.
 */
function KalturaDrmProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.provider = null;
	this.status = null;
	this.licenseServerUrl = null;
	this.defaultPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.signingKey = null;
}
KalturaDrmProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	handlerType	string		 (readOnly).
 */
function KalturaDropFolderFileHandlerConfig(){
	this.handlerType = null;
}
KalturaDropFolderFileHandlerConfig.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (insertOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	type	string		.
 * @param	status	int		.
 * @param	conversionProfileId	int		.
 * @param	dc	int		.
 * @param	path	string		.
 * @param	fileSizeCheckInterval	int		The amount of time, in seconds, that should pass so that a file with no change in size will be treated as "finished uploading to folder".
 * @param	fileDeletePolicy	int		.
 * @param	fileDeleteRegex	string		.
 * @param	autoFileDeleteDays	int		.
 * @param	fileHandlerType	string		.
 * @param	fileNamePatterns	string		.
 * @param	fileHandlerConfig	KalturaDropFolderFileHandlerConfig		.
 * @param	tags	string		.
 * @param	errorCode	string		.
 * @param	errorDescription	string		.
 * @param	ignoreFileNamePatterns	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	lastAccessedAt	int		.
 * @param	incremental	bool		.
 * @param	lastFileTimestamp	int		.
 * @param	metadataProfileId	int		.
 * @param	categoriesMetadataFieldName	string		.
 * @param	enforceEntitlement	bool		.
 * @param	shouldValidateKS	bool		.
 */
function KalturaDropFolder(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.type = null;
	this.status = null;
	this.conversionProfileId = null;
	this.dc = null;
	this.path = null;
	this.fileSizeCheckInterval = null;
	this.fileDeletePolicy = null;
	this.fileDeleteRegex = null;
	this.autoFileDeleteDays = null;
	this.fileHandlerType = null;
	this.fileNamePatterns = null;
	this.fileHandlerConfig = null;
	this.tags = null;
	this.errorCode = null;
	this.errorDescription = null;
	this.ignoreFileNamePatterns = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.lastAccessedAt = null;
	this.incremental = null;
	this.lastFileTimestamp = null;
	this.metadataProfileId = null;
	this.categoriesMetadataFieldName = null;
	this.enforceEntitlement = null;
	this.shouldValidateKS = null;
}
KalturaDropFolder.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	dropFolderId	int		 (insertOnly).
 * @param	fileName	string		 (insertOnly).
 * @param	fileSize	float		.
 * @param	fileSizeLastSetAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	type	string		 (readOnly).
 * @param	parsedSlug	string		.
 * @param	parsedFlavor	string		.
 * @param	parsedUserId	string		.
 * @param	leadDropFolderFileId	int		.
 * @param	deletedDropFolderFileId	int		.
 * @param	entryId	string		.
 * @param	errorCode	string		.
 * @param	errorDescription	string		.
 * @param	lastModificationTime	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	uploadStartDetectedAt	int		.
 * @param	uploadEndDetectedAt	int		.
 * @param	importStartedAt	int		.
 * @param	importEndedAt	int		.
 * @param	batchJobId	int		 (readOnly).
 */
function KalturaDropFolderFile(){
	this.id = null;
	this.partnerId = null;
	this.dropFolderId = null;
	this.fileName = null;
	this.fileSize = null;
	this.fileSizeLastSetAt = null;
	this.status = null;
	this.type = null;
	this.parsedSlug = null;
	this.parsedFlavor = null;
	this.parsedUserId = null;
	this.leadDropFolderFileId = null;
	this.deletedDropFolderFileId = null;
	this.entryId = null;
	this.errorCode = null;
	this.errorDescription = null;
	this.lastModificationTime = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.uploadStartDetectedAt = null;
	this.uploadEndDetectedAt = null;
	this.importStartedAt = null;
	this.importEndedAt = null;
	this.batchJobId = null;
}
KalturaDropFolderFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	emailSubject	string		The subject of the customized email.
 * @param	emailBody	string		The body of the customized email.
 */
function KalturaDynamicEmailContents(){
	this.emailSubject = null;
	this.emailBody = null;
}
KalturaDynamicEmailContents.inheritsFrom (KalturaObjectBase);


/**
 * @param	size	int		.
 */
function KalturaESearchAggregationItem(){
	this.size = null;
}
KalturaESearchAggregationItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	aggregations	array		.
 */
function KalturaESearchAggregation(){
	this.aggregations = null;
}
KalturaESearchAggregation.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	string		.
 * @param	count	int		.
 */
function KalturaESearchAggregationBucket(){
	this.value = null;
	this.count = null;
}
KalturaESearchAggregationBucket.inheritsFrom (KalturaObjectBase);


/**
 * @param	name	string		.
 * @param	fieldName	string		.
 * @param	buckets	array		.
 */
function KalturaESearchAggregationResponseItem(){
	this.name = null;
	this.fieldName = null;
	this.buckets = null;
}
KalturaESearchAggregationResponseItem.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaESearchBaseFilter(){
}
KalturaESearchBaseFilter.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaESearchCategoryBaseItem(){
}
KalturaESearchCategoryBaseItem.inheritsFrom (KalturaESearchBaseItem);


/**
 * @param	fieldName	string		.
 * @param	hits	array		.
 */
function KalturaESearchHighlight(){
	this.fieldName = null;
	this.hits = null;
}
KalturaESearchHighlight.inheritsFrom (KalturaObjectBase);


/**
 * @param	highlight	array		.
 */
function KalturaESearchItemData(){
	this.highlight = null;
}
KalturaESearchItemData.inheritsFrom (KalturaObjectBase);


/**
 * @param	totalCount	int		.
 * @param	items	array		.
 * @param	itemsType	string		.
 */
function KalturaESearchItemDataResult(){
	this.totalCount = null;
	this.items = null;
	this.itemsType = null;
}
KalturaESearchItemDataResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	highlight	array		.
 * @param	itemsData	array		.
 */
function KalturaESearchResult(){
	this.highlight = null;
	this.itemsData = null;
}
KalturaESearchResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	object	KalturaCategory		.
 */
function KalturaESearchCategoryResult(){
	this.object = null;
}
KalturaESearchCategoryResult.inheritsFrom (KalturaESearchResult);


/**
 */
function KalturaESearchEntryBaseItem(){
}
KalturaESearchEntryBaseItem.inheritsFrom (KalturaESearchBaseItem);


/**
 */
function KalturaESearchEntryBaseNestedObject(){
}
KalturaESearchEntryBaseNestedObject.inheritsFrom (KalturaESearchEntryBaseItem);


/**
 */
function KalturaESearchEntryNestedBaseItem(){
}
KalturaESearchEntryNestedBaseItem.inheritsFrom (KalturaESearchEntryBaseNestedObject);


/**
 * @param	object	KalturaBaseEntry		.
 */
function KalturaESearchEntryResult(){
	this.object = null;
}
KalturaESearchEntryResult.inheritsFrom (KalturaESearchResult);


/**
 */
function KalturaESearchGroupBaseItem(){
}
KalturaESearchGroupBaseItem.inheritsFrom (KalturaESearchBaseItem);


/**
 * @param	membersCount	int		 (readOnly).
 * @param	processStatus	int		.
 * @param	groupType	int		.
 */
function KalturaGroup(){
	this.membersCount = null;
	this.processStatus = null;
	this.groupType = null;
}
KalturaGroup.inheritsFrom (KalturaBaseUser);


/**
 * @param	object	KalturaGroup		.
 */
function KalturaESearchGroupResult(){
	this.object = null;
}
KalturaESearchGroupResult.inheritsFrom (KalturaESearchResult);


/**
 * @param	searchTerm	string		 (readOnly).
 * @param	searchedObject	string		 (readOnly).
 * @param	timestamp	int		 (readOnly).
 */
function KalturaESearchHistory(){
	this.searchTerm = null;
	this.searchedObject = null;
	this.timestamp = null;
}
KalturaESearchHistory.inheritsFrom (KalturaObjectBase);


/**
 * @param	orderItems	array		.
 */
function KalturaESearchOrderBy(){
	this.orderItems = null;
}
KalturaESearchOrderBy.inheritsFrom (KalturaObjectBase);


/**
 * @param	objectStatuses	string		.
 * @param	objectId	string		.
 * @param	orderBy	KalturaESearchOrderBy		.
 * @param	ignoreSynonym	bool		.
 * @param	objectIds	string		.
 * @param	objectIdsNotIn	int		.
 */
function KalturaESearchParams(){
	this.objectStatuses = null;
	this.objectId = null;
	this.orderBy = null;
	this.ignoreSynonym = null;
	this.objectIds = null;
	this.objectIdsNotIn = null;
}
KalturaESearchParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	greaterThanOrEqual	int		.
 * @param	lessThanOrEqual	int		.
 * @param	greaterThan	int		.
 * @param	lessThan	int		.
 */
function KalturaESearchRange(){
	this.greaterThanOrEqual = null;
	this.lessThanOrEqual = null;
	this.greaterThan = null;
	this.lessThan = null;
}
KalturaESearchRange.inheritsFrom (KalturaObjectBase);


/**
 * @param	totalCount	int		 (readOnly).
 */
function KalturaESearchResponse(){
	this.totalCount = null;
}
KalturaESearchResponse.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaESearchUserBaseItem(){
}
KalturaESearchUserBaseItem.inheritsFrom (KalturaESearchBaseItem);


/**
 * @param	type	int		.
 * @param	dateOfBirth	int		.
 * @param	gender	int		.
 * @param	isAdmin	bool		.
 * @param	isGuest	bool		 (insertOnly).
 * @param	roleIds	string		.
 * @param	roleNames	string		 (readOnly).
 * @param	isAccountOwner	bool		 (insertOnly).
 * @param	password	string		 (insertOnly).
 * @param	firstName	string		.
 * @param	lastName	string		.
 * @param	loginEnabled	bool		 (insertOnly).
 * @param	registrationInfo	string		.
 * @param	attendanceInfo	string		.
 * @param	title	string		.
 * @param	company	string		.
 * @param	ksPrivileges	string		.
 * @param	encryptedSeed	string		 (readOnly).
 * @param	isSsoExcluded	bool		.
 * @param	externalId	string		This field should be sent instead of the id field whenever you want to work with hashed user ids (insertOnly).
 */
function KalturaUser(){
	this.type = null;
	this.dateOfBirth = null;
	this.gender = null;
	this.isAdmin = null;
	this.isGuest = null;
	this.roleIds = null;
	this.roleNames = null;
	this.isAccountOwner = null;
	this.password = null;
	this.firstName = null;
	this.lastName = null;
	this.loginEnabled = null;
	this.registrationInfo = null;
	this.attendanceInfo = null;
	this.title = null;
	this.company = null;
	this.ksPrivileges = null;
	this.encryptedSeed = null;
	this.isSsoExcluded = null;
	this.externalId = null;
}
KalturaUser.inheritsFrom (KalturaBaseUser);


/**
 * @param	object	KalturaUser		.
 */
function KalturaESearchUserResult(){
	this.object = null;
}
KalturaESearchUserResult.inheritsFrom (KalturaESearchResult);


/**
 * @param	effectType	int		.
 * @param	value	string		value.
 */
function KalturaEffect(){
	this.effectType = null;
	this.value = null;
}
KalturaEffect.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	emailAddress	string		.
 * @param	mailboxId	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	conversionProfile2Id	int		.
 * @param	moderationStatus	int		.
 * @param	status	int		 (readOnly).
 * @param	createdAt	string		 (readOnly).
 * @param	defaultCategory	string		.
 * @param	defaultUserId	string		.
 * @param	defaultTags	string		.
 * @param	defaultAdminTags	string		.
 * @param	maxAttachmentSizeKbytes	int		.
 * @param	maxAttachmentsPerMail	int		.
 */
function KalturaEmailIngestionProfile(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.emailAddress = null;
	this.mailboxId = null;
	this.partnerId = null;
	this.conversionProfile2Id = null;
	this.moderationStatus = null;
	this.status = null;
	this.createdAt = null;
	this.defaultCategory = null;
	this.defaultUserId = null;
	this.defaultTags = null;
	this.defaultAdminTags = null;
	this.maxAttachmentSizeKbytes = null;
	this.maxAttachmentsPerMail = null;
}
KalturaEmailIngestionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	string		.
 */
function KalturaStringValue(){
	this.value = null;
}
KalturaStringValue.inheritsFrom (KalturaValue);


/**
 * @param	email	KalturaStringValue		Recipient e-mail address.
 * @param	name	KalturaStringValue		Recipient name.
 */
function KalturaEmailNotificationRecipient(){
	this.email = null;
	this.name = null;
}
KalturaEmailNotificationRecipient.inheritsFrom (KalturaObjectBase);


/**
 * @param	providerType	string		Provider type of the job data. (readOnly).
 */
function KalturaEmailNotificationRecipientJobData(){
	this.providerType = null;
}
KalturaEmailNotificationRecipientJobData.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaEmailNotificationRecipientProvider(){
}
KalturaEmailNotificationRecipientProvider.inheritsFrom (KalturaObjectBase);


/**
 * @param	plainToken	string		.
 * @param	encryptedToken	string		.
 */
function KalturaEndpointValidationResponse(){
	this.plainToken = null;
	this.encryptedToken = null;
}
KalturaEndpointValidationResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id (readOnly).
 * @param	createdAt	int		Entry distribution creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry distribution last update date as Unix timestamp (In seconds) (readOnly).
 * @param	submittedAt	int		Entry distribution submission date as Unix timestamp (In seconds) (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	distributionProfileId	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	sunStatus	int		 (readOnly).
 * @param	dirtyStatus	int		 (readOnly).
 * @param	thumbAssetIds	string		Comma separated thumbnail asset ids.
 * @param	flavorAssetIds	string		Comma separated flavor asset ids.
 * @param	assetIds	string		Comma separated asset ids.
 * @param	sunrise	int		Entry distribution publish time as Unix timestamp (In seconds).
 * @param	sunset	int		Entry distribution un-publish time as Unix timestamp (In seconds).
 * @param	remoteId	string		The id as returned from the distributed destination (readOnly).
 * @param	plays	int		The plays as retrieved from the remote destination reports (readOnly).
 * @param	views	int		The views as retrieved from the remote destination reports (readOnly).
 * @param	validationErrors	array		.
 * @param	errorType	int		 (readOnly).
 * @param	errorNumber	int		 (readOnly).
 * @param	errorDescription	string		 (readOnly).
 * @param	hasSubmitResultsLog	int		 (readOnly).
 * @param	hasSubmitSentDataLog	int		 (readOnly).
 * @param	hasUpdateResultsLog	int		 (readOnly).
 * @param	hasUpdateSentDataLog	int		 (readOnly).
 * @param	hasDeleteResultsLog	int		 (readOnly).
 * @param	hasDeleteSentDataLog	int		 (readOnly).
 */
function KalturaEntryDistribution(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.submittedAt = null;
	this.entryId = null;
	this.partnerId = null;
	this.distributionProfileId = null;
	this.status = null;
	this.sunStatus = null;
	this.dirtyStatus = null;
	this.thumbAssetIds = null;
	this.flavorAssetIds = null;
	this.assetIds = null;
	this.sunrise = null;
	this.sunset = null;
	this.remoteId = null;
	this.plays = null;
	this.views = null;
	this.validationErrors = null;
	this.errorType = null;
	this.errorNumber = null;
	this.errorDescription = null;
	this.hasSubmitResultsLog = null;
	this.hasSubmitSentDataLog = null;
	this.hasUpdateResultsLog = null;
	this.hasUpdateSentDataLog = null;
	this.hasDeleteResultsLog = null;
	this.hasDeleteSentDataLog = null;
}
KalturaEntryDistribution.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		unique auto-generated identifier (readOnly).
 * @param	entryId	string		 (readOnly).
 * @param	serverNodeId	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	serverType	string		 (readOnly).
 */
function KalturaEntryServerNode(){
	this.id = null;
	this.entryId = null;
	this.serverNodeId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.serverType = null;
}
KalturaEntryServerNode.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryDuration	int		The duration of the entry for which the task was created for in milliseconds (readOnly).
 */
function KalturaVendorTaskData(){
	this.entryDuration = null;
}
KalturaVendorTaskData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	vendorPartnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	queueTime	int		 (readOnly).
 * @param	finishTime	int		 (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	status	int		.
 * @param	reachProfileId	int		The profile id from which this task base config is taken from (insertOnly).
 * @param	catalogItemId	int		The catalog item Id containing the task description (insertOnly).
 * @param	price	float		The charged price to execute this task (readOnly).
 * @param	userId	string		The ID of the user who created this task (readOnly).
 * @param	entryObjectType	int		 (insertOnly).
 * @param	unitsUsed	int		.
 * @param	moderatingUser	string		The user ID that approved this task for execution (in case moderation is requested) (readOnly).
 * @param	errDescription	string		Err description provided by provider in case job execution has failed.
 * @param	accessKey	string		Access key generated by Kaltura to allow vendors to ingest the end result to the destination (readOnly).
 * @param	version	string		Vendor generated by Kaltura representing the entry vendor task version correlated to the entry version (readOnly).
 * @param	notes	string		User generated notes that should be taken into account by the vendor while executing the task.
 * @param	dictionary	string		 (readOnly).
 * @param	context	string		Task context.
 * @param	accuracy	int		Task result accuracy percentage.
 * @param	outputObjectId	string		Task main object generated by executing the task.
 * @param	partnerData	string		Json object containing extra task data required by the requester.
 * @param	creationMode	int		Task creation mode (readOnly).
 * @param	taskJobData	KalturaVendorTaskData		.
 * @param	expectedFinishTime	int		 (readOnly).
 * @param	serviceType	int		 (readOnly).
 * @param	serviceFeature	int		 (readOnly).
 * @param	turnAroundTime	int		 (readOnly).
 * @param	externalTaskId	string		The vendor's task internal Id.
 */
function KalturaEntryVendorTask(){
	this.id = null;
	this.partnerId = null;
	this.vendorPartnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.queueTime = null;
	this.finishTime = null;
	this.entryId = null;
	this.status = null;
	this.reachProfileId = null;
	this.catalogItemId = null;
	this.price = null;
	this.userId = null;
	this.entryObjectType = null;
	this.unitsUsed = null;
	this.moderatingUser = null;
	this.errDescription = null;
	this.accessKey = null;
	this.version = null;
	this.notes = null;
	this.dictionary = null;
	this.context = null;
	this.accuracy = null;
	this.outputObjectId = null;
	this.partnerData = null;
	this.creationMode = null;
	this.taskJobData = null;
	this.expectedFinishTime = null;
	this.serviceType = null;
	this.serviceFeature = null;
	this.turnAroundTime = null;
	this.externalTaskId = null;
}
KalturaEntryVendorTask.inheritsFrom (KalturaObjectBase);


/**
 * @param	key	string		The key in the subject and body to be replaced with the dynamic value.
 * @param	description	string		.
 * @param	value	KalturaStringValue		The dynamic value to be placed in the final output.
 */
function KalturaEventNotificationParameter(){
	this.key = null;
	this.description = null;
	this.value = null;
}
KalturaEventNotificationParameter.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	type	string		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	manualDispatchEnabled	bool		Define that the template could be dispatched manually from the API.
 * @param	automaticDispatchEnabled	bool		Define that the template could be dispatched automatically by the system.
 * @param	eventType	string		Define the event that should trigger this notification.
 * @param	eventObjectType	string		Define the object that raised the event that should trigger this notification.
 * @param	eventConditions	array		Define the conditions that cause this notification to be triggered.
 * @param	contentParameters	array		Define the content dynamic parameters.
 * @param	userParameters	array		Define the content dynamic parameters.
 * @param	eventDelayedCondition	int		Event batch job will be delayed until specific condition criteria is met.
 */
function KalturaEventNotificationTemplate(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.type = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.manualDispatchEnabled = null;
	this.automaticDispatchEnabled = null;
	this.eventType = null;
	this.eventObjectType = null;
	this.eventConditions = null;
	this.contentParameters = null;
	this.userParameters = null;
	this.eventDelayedCondition = null;
}
KalturaEventNotificationTemplate.inheritsFrom (KalturaObjectBase);


/**
 * @param	format	string		The format of the outputted date string. There are also several predefined date constants that may be used instead, so for example DATE_RSS contains the format string 'D, d M Y H:i:s'.
 *		 https://www.php.net/manual/en/function.date.php.
 * @param	typeEqual	string		Setting this property will cause additional columns to be added to the final report. The columns will be related to the specific object type passed (currently only MEDIA_CLIP is supported).
 *		 Please note that this property will NOT change the result filter in any way (i.e passing MEDIA_CLIP here will not force the report to return only media items)..
 * @param	defaultHeader	int		.
 */
function KalturaExportToCsvOptions(){
	this.format = null;
	this.typeEqual = null;
	this.defaultHeader = null;
}
KalturaExportToCsvOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	extendedFeatures	string		Comma separated string of enum values denoting which features of the item need to be included in the MRSS.
 */
function KalturaObjectIdentifier(){
	this.extendedFeatures = null;
}
KalturaObjectIdentifier.inheritsFrom (KalturaObjectBase);


/**
 * @param	xpath	string		XPath for the extending item.
 * @param	identifier	KalturaObjectIdentifier		Object identifier.
 * @param	extensionMode	int		Mode of extension - append to MRSS or replace the xpath content..
 */
function KalturaExtendingItemMrssParameter(){
	this.xpath = null;
	this.identifier = null;
	this.extensionMode = null;
}
KalturaExtendingItemMrssParameter.inheritsFrom (KalturaObjectBase);


/**
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	lastPlayedAt	int		The last time the entry was played (readOnly).
 * @param	width	int		The width in pixels (readOnly).
 * @param	height	int		The height in pixels (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 * @param	msDuration	int		The duration in miliseconds.
 * @param	durationType	string		The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins) (readOnly).
 */
function KalturaPlayableEntry(){
	this.plays = null;
	this.views = null;
	this.lastPlayedAt = null;
	this.width = null;
	this.height = null;
	this.duration = null;
	this.msDuration = null;
	this.durationType = null;
}
KalturaPlayableEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	id	string		.
 * @param	type	string		.
 * @param	trackIndex	int		.
 * @param	language	string		.
 * @param	channelIndex	int		.
 * @param	label	string		.
 * @param	channelLayout	string		.
 */
function KalturaStreamContainer(){
	this.id = null;
	this.type = null;
	this.trackIndex = null;
	this.language = null;
	this.channelIndex = null;
	this.label = null;
	this.channelLayout = null;
}
KalturaStreamContainer.inheritsFrom (KalturaObjectBase);


/**
 * @param	mediaType	int		The media type of the entry (insertOnly).
 * @param	conversionQuality	string		Override the default conversion quality (insertOnly).
 * @param	sourceType	string		The source type of the entry (insertOnly).
 * @param	sourceVersion	string		The source version of the entry (insertOnly).
 * @param	searchProviderType	int		The search provider type used to import this entry (insertOnly).
 * @param	searchProviderId	string		The ID of the media in the importing site (insertOnly).
 * @param	creditUserName	string		The user name used for credits.
 * @param	creditUrl	string		The URL for credits.
 * @param	mediaDate	int		The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param	dataUrl	string		The URL used for playback. This is not the download URL. (readOnly).
 * @param	flavorParamsIds	string		Comma separated flavor params ids that exists for this media entry (readOnly).
 * @param	isTrimDisabled	int		True if trim action is disabled for this entry (readOnly).
 * @param	streams	array		Array of streams that exists on the entry.
 */
function KalturaMediaEntry(){
	this.mediaType = null;
	this.conversionQuality = null;
	this.sourceType = null;
	this.sourceVersion = null;
	this.searchProviderType = null;
	this.searchProviderId = null;
	this.creditUserName = null;
	this.creditUrl = null;
	this.mediaDate = null;
	this.dataUrl = null;
	this.flavorParamsIds = null;
	this.isTrimDisabled = null;
	this.streams = null;
}
KalturaMediaEntry.inheritsFrom (KalturaPlayableEntry);


/**
 * @param	externalSourceType	string		The source type of the external media (insertOnly).
 * @param	assetParamsIds	string		Comma separated asset params ids that exists for this external media entry (readOnly).
 */
function KalturaExternalMediaEntry(){
	this.externalSourceType = null;
	this.assetParamsIds = null;
}
KalturaExternalMediaEntry.inheritsFrom (KalturaMediaEntry);


/**
 * @param	language	string		.
 * @param	label	string		.
 * @param	filePath	string		.
 * @param	remoteId	string		.
 * @param	version	string		.
 * @param	assetId	string		.
 */
function KalturaFacebookCaptionDistributionInfo(){
	this.language = null;
	this.label = null;
	this.filePath = null;
	this.remoteId = null;
	this.version = null;
	this.assetId = null;
}
KalturaFacebookCaptionDistributionInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	int		.
 * @param	value	int		.
 */
function KalturaFeatureStatus(){
	this.type = null;
	this.value = null;
}
KalturaFeatureStatus.inheritsFrom (KalturaObjectBase);


/**
 * @param	itemXPath	string		.
 * @param	itemPublishDateXPath	string		.
 * @param	itemUniqueIdentifierXPath	string		.
 * @param	itemContentFileSizeXPath	string		.
 * @param	itemContentUrlXPath	string		.
 * @param	itemContentBitrateXPath	string		.
 * @param	itemHashXPath	string		.
 * @param	itemContentXpath	string		.
 * @param	contentBitrateAttributeName	string		.
 */
function KalturaFeedItemInfo(){
	this.itemXPath = null;
	this.itemPublishDateXPath = null;
	this.itemUniqueIdentifierXPath = null;
	this.itemContentFileSizeXPath = null;
	this.itemContentUrlXPath = null;
	this.itemContentBitrateXPath = null;
	this.itemHashXPath = null;
	this.itemContentXpath = null;
	this.contentBitrateAttributeName = null;
}
KalturaFeedItemInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	fileAssetObjectType	string		 (insertOnly).
 * @param	objectId	string		 (insertOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	fileExt	string		.
 * @param	version	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	string		 (readOnly).
 */
function KalturaFileAsset(){
	this.id = null;
	this.partnerId = null;
	this.fileAssetObjectType = null;
	this.objectId = null;
	this.name = null;
	this.systemName = null;
	this.fileExt = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
}
KalturaFileAsset.inheritsFrom (KalturaObjectBase);


/**
 * @param	filePath	string		.
 * @param	encryptionKey	string		.
 * @param	fileSize	int		.
 */
function KalturaFileContainer(){
	this.filePath = null;
	this.encryptionKey = null;
	this.fileSize = null;
}
KalturaFileContainer.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	fileObjectType	string		 (readOnly).
 * @param	objectId	string		 (readOnly).
 * @param	version	string		 (readOnly).
 * @param	objectSubType	int		 (readOnly).
 * @param	dc	string		 (readOnly).
 * @param	original	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	readyAt	int		 (readOnly).
 * @param	syncTime	int		 (readOnly).
 * @param	status	int		.
 * @param	fileType	int		 (readOnly).
 * @param	linkedId	int		 (readOnly).
 * @param	linkCount	int		 (readOnly).
 * @param	fileRoot	string		.
 * @param	filePath	string		.
 * @param	fileSize	float		 (readOnly).
 * @param	fileUrl	string		 (readOnly).
 * @param	fileContent	string		 (readOnly).
 * @param	fileDiscSize	float		 (readOnly).
 * @param	isCurrentDc	bool		 (readOnly).
 * @param	isDir	bool		 (readOnly).
 * @param	originalId	int		 (readOnly).
 * @param	srcPath	string		.
 * @param	srcEncKey	string		.
 * @param	storageClass	string		.
 */
function KalturaFileSync(){
	this.id = null;
	this.partnerId = null;
	this.fileObjectType = null;
	this.objectId = null;
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.readyAt = null;
	this.syncTime = null;
	this.status = null;
	this.fileType = null;
	this.linkedId = null;
	this.linkCount = null;
	this.fileRoot = null;
	this.filePath = null;
	this.fileSize = null;
	this.fileUrl = null;
	this.fileContent = null;
	this.fileDiscSize = null;
	this.isCurrentDc = null;
	this.isDir = null;
	this.originalId = null;
	this.srcPath = null;
	this.srcEncKey = null;
	this.storageClass = null;
}
KalturaFileSync.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsId	int		The Flavor Params used to create this Flavor Asset (insertOnly).
 * @param	width	int		The width of the Flavor Asset (readOnly).
 * @param	height	int		The height of the Flavor Asset (readOnly).
 * @param	bitrate	int		The overall bitrate (in KBits) of the Flavor Asset (readOnly).
 * @param	frameRate	float		The frame rate (in FPS) of the Flavor Asset (readOnly).
 * @param	isOriginal	bool		True if this Flavor Asset is the original source (readOnly).
 * @param	isWeb	bool		True if this Flavor Asset is playable in KDP (readOnly).
 * @param	containerFormat	string		The container format (readOnly).
 * @param	videoCodecId	string		The video codec (readOnly).
 * @param	status	int		The status of the Flavor Asset (readOnly).
 * @param	language	string		The language of the flavor asset.
 * @param	label	string		The label of the flavor asset.
 * @param	isDefault	int		Is default flavor asset of the entry (This field will be taken into account selectign which audio flavor will be selected as default).
 */
function KalturaFlavorAsset(){
	this.flavorParamsId = null;
	this.width = null;
	this.height = null;
	this.bitrate = null;
	this.frameRate = null;
	this.isOriginal = null;
	this.isWeb = null;
	this.containerFormat = null;
	this.videoCodecId = null;
	this.status = null;
	this.language = null;
	this.label = null;
	this.isDefault = null;
}
KalturaFlavorAsset.inheritsFrom (KalturaAsset);


/**
 * @param	fileName	string		The name of the downloaded file.
 * @param	referrer	string		.
 */
function KalturaFlavorAssetUrlOptions(){
	this.fileName = null;
	this.referrer = null;
}
KalturaFlavorAssetUrlOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	videoCodec	string		The video codec of the Flavor Params.
 * @param	videoBitrate	int		The video bitrate (in KBits) of the Flavor Params.
 * @param	audioCodec	string		The audio codec of the Flavor Params.
 * @param	audioBitrate	int		The audio bitrate (in KBits) of the Flavor Params.
 * @param	audioChannels	int		The number of audio channels for "downmixing".
 * @param	audioSampleRate	int		The audio sample rate of the Flavor Params.
 * @param	width	int		The desired width of the Flavor Params.
 * @param	height	int		The desired height of the Flavor Params.
 * @param	frameRate	float		The frame rate of the Flavor Params.
 * @param	gopSize	int		The gop size of the Flavor Params.
 * @param	conversionEngines	string		The list of conversion engines (comma separated).
 * @param	conversionEnginesExtraParams	string		The list of conversion engines extra params (separated with "|").
 * @param	twoPass	bool		.
 * @param	deinterlice	int		.
 * @param	rotate	int		.
 * @param	operators	string		.
 * @param	engineVersion	int		.
 * @param	format	string		The container format of the Flavor Params.
 * @param	aspectRatioProcessingMode	int		.
 * @param	forceFrameToMultiplication16	int		.
 * @param	isGopInSec	int		.
 * @param	isAvoidVideoShrinkFramesizeToSource	int		.
 * @param	isAvoidVideoShrinkBitrateToSource	int		.
 * @param	isVideoFrameRateForLowBrAppleHls	int		.
 * @param	multiStream	string		.
 * @param	anamorphicPixels	float		.
 * @param	isAvoidForcedKeyFrames	int		.
 * @param	forcedKeyFramesMode	int		.
 * @param	isCropIMX	int		.
 * @param	optimizationPolicy	int		.
 * @param	maxFrameRate	int		.
 * @param	videoConstantBitrate	int		.
 * @param	videoBitrateTolerance	int		.
 * @param	watermarkData	string		.
 * @param	subtitlesData	string		.
 * @param	cropData	string		.
 * @param	isEncrypted	int		.
 * @param	contentAwareness	float		.
 * @param	chunkedEncodeMode	int		.
 * @param	clipOffset	int		.
 * @param	clipDuration	int		.
 */
function KalturaFlavorParams(){
	this.videoCodec = null;
	this.videoBitrate = null;
	this.audioCodec = null;
	this.audioBitrate = null;
	this.audioChannels = null;
	this.audioSampleRate = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.gopSize = null;
	this.conversionEngines = null;
	this.conversionEnginesExtraParams = null;
	this.twoPass = null;
	this.deinterlice = null;
	this.rotate = null;
	this.operators = null;
	this.engineVersion = null;
	this.format = null;
	this.aspectRatioProcessingMode = null;
	this.forceFrameToMultiplication16 = null;
	this.isGopInSec = null;
	this.isAvoidVideoShrinkFramesizeToSource = null;
	this.isAvoidVideoShrinkBitrateToSource = null;
	this.isVideoFrameRateForLowBrAppleHls = null;
	this.multiStream = null;
	this.anamorphicPixels = null;
	this.isAvoidForcedKeyFrames = null;
	this.forcedKeyFramesMode = null;
	this.isCropIMX = null;
	this.optimizationPolicy = null;
	this.maxFrameRate = null;
	this.videoConstantBitrate = null;
	this.videoBitrateTolerance = null;
	this.watermarkData = null;
	this.subtitlesData = null;
	this.cropData = null;
	this.isEncrypted = null;
	this.contentAwareness = null;
	this.chunkedEncodeMode = null;
	this.clipOffset = null;
	this.clipDuration = null;
}
KalturaFlavorParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	flavorAsset	KalturaFlavorAsset		The Flavor Asset (Can be null when there are params without asset).
 * @param	flavorParams	KalturaFlavorParams		The Flavor Params.
 * @param	entryId	string		The entry id.
 */
function KalturaFlavorAssetWithParams(){
	this.flavorAsset = null;
	this.flavorParams = null;
	this.entryId = null;
}
KalturaFlavorAssetWithParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsId	int		.
 * @param	commandLinesStr	string		.
 * @param	flavorParamsVersion	string		.
 * @param	flavorAssetId	string		.
 * @param	flavorAssetVersion	string		.
 * @param	readyBehavior	int		.
 */
function KalturaFlavorParamsOutput(){
	this.flavorParamsId = null;
	this.commandLinesStr = null;
	this.flavorParamsVersion = null;
	this.flavorAssetId = null;
	this.flavorAssetVersion = null;
	this.readyBehavior = null;
}
KalturaFlavorParamsOutput.inheritsFrom (KalturaFlavorParams);


/**
 * @param	path	string		.
 */
function KalturaFreewheelDistributionAssetPath(){
	this.path = null;
}
KalturaFreewheelDistributionAssetPath.inheritsFrom (KalturaDistributionJobProviderData);


/**
 * @param	assetId	string		.
 * @param	filename	string		.
 * @param	contents	string		.
 * @param	localFilePath	string		.
 * @param	version	string		.
 * @param	hash	string		.
 */
function KalturaFtpDistributionFile(){
	this.assetId = null;
	this.filename = null;
	this.contents = null;
	this.localFilePath = null;
	this.version = null;
	this.hash = null;
}
KalturaFtpDistributionFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category (readOnly).
 * @param	schedulerConfiguredId	int		The configured id of the scheduler.
 * @param	workerConfiguredId	int		The configured id of the job worker.
 * @param	workerType	string		The type of the job worker..
 * @param	type	int		The status type.
 * @param	value	int		The status value.
 * @param	schedulerId	int		The id of the scheduler (readOnly).
 * @param	workerId	int		The id of the worker (readOnly).
 */
function KalturaSchedulerStatus(){
	this.id = null;
	this.schedulerConfiguredId = null;
	this.workerConfiguredId = null;
	this.workerType = null;
	this.type = null;
	this.value = null;
	this.schedulerId = null;
	this.workerId = null;
}
KalturaSchedulerStatus.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category (readOnly).
 * @param	createdBy	string		Creator name.
 * @param	updatedBy	string		Updater name.
 * @param	commandId	string		Id of the control panel command that created this config item.
 * @param	commandStatus	string		The status of the control panel command.
 * @param	schedulerId	int		The id of the scheduler.
 * @param	schedulerConfiguredId	int		The configured id of the scheduler.
 * @param	schedulerName	string		The name of the scheduler.
 * @param	workerId	int		The id of the job worker.
 * @param	workerConfiguredId	int		The configured id of the job worker.
 * @param	workerName	string		The name of the job worker.
 * @param	variable	string		The name of the variable.
 * @param	variablePart	string		The part of the variable.
 * @param	value	string		The value of the variable.
 */
function KalturaSchedulerConfig(){
	this.id = null;
	this.createdBy = null;
	this.updatedBy = null;
	this.commandId = null;
	this.commandStatus = null;
	this.schedulerId = null;
	this.schedulerConfiguredId = null;
	this.schedulerName = null;
	this.workerId = null;
	this.workerConfiguredId = null;
	this.workerName = null;
	this.variable = null;
	this.variablePart = null;
	this.value = null;
}
KalturaSchedulerConfig.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Worker (readOnly).
 * @param	configuredId	int		The id as configured in the batch config.
 * @param	schedulerId	int		The id of the Scheduler.
 * @param	schedulerConfiguredId	int		The id of the scheduler as configured in the batch config.
 * @param	type	string		The worker type.
 * @param	typeName	string		The friendly name of the type.
 * @param	name	string		The scheduler name.
 * @param	statuses	array		Array of the last statuses.
 * @param	configs	array		Array of the last configs.
 * @param	lockedJobs	array		Array of jobs that locked to this worker.
 * @param	avgWait	int		Avarage time between creation and queue time.
 * @param	avgWork	int		Avarage time between queue time end finish time.
 * @param	lastStatus	int		last status time.
 * @param	lastStatusStr	string		last status formated.
 */
function KalturaSchedulerWorker(){
	this.id = null;
	this.configuredId = null;
	this.schedulerId = null;
	this.schedulerConfiguredId = null;
	this.type = null;
	this.typeName = null;
	this.name = null;
	this.statuses = null;
	this.configs = null;
	this.lockedJobs = null;
	this.avgWait = null;
	this.avgWork = null;
	this.lastStatus = null;
	this.lastStatusStr = null;
}
KalturaSchedulerWorker.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Scheduler (readOnly).
 * @param	configuredId	int		The id as configured in the batch config.
 * @param	name	string		The scheduler name.
 * @param	host	string		The host name.
 * @param	statuses	array		Array of the last statuses (readOnly).
 * @param	configs	array		Array of the last configs (readOnly).
 * @param	workers	array		Array of the workers (readOnly).
 * @param	createdAt	int		creation time (readOnly).
 * @param	lastStatus	int		last status time (readOnly).
 * @param	lastStatusStr	string		last status formated (readOnly).
 */
function KalturaScheduler(){
	this.id = null;
	this.configuredId = null;
	this.name = null;
	this.host = null;
	this.statuses = null;
	this.configs = null;
	this.workers = null;
	this.createdAt = null;
	this.lastStatus = null;
	this.lastStatusStr = null;
}
KalturaScheduler.inheritsFrom (KalturaObjectBase);


/**
 * @param	protocol	int		.
 * @param	serverUrl	string		.
 * @param	serverPath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	ftpPassiveMode	bool		.
 * @param	httpFieldName	string		.
 * @param	httpFileName	string		.
 */
function KalturaGenericDistributionProfileAction(){
	this.protocol = null;
	this.serverUrl = null;
	this.serverPath = null;
	this.username = null;
	this.password = null;
	this.ftpPassiveMode = null;
	this.httpFieldName = null;
	this.httpFileName = null;
}
KalturaGenericDistributionProfileAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated (readOnly).
 * @param	createdAt	int		Generic distribution provider action creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Generic distribution provider action last update date as Unix timestamp (In seconds) (readOnly).
 * @param	genericDistributionProviderId	int		 (insertOnly).
 * @param	action	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	resultsParser	int		.
 * @param	protocol	int		.
 * @param	serverAddress	string		.
 * @param	remotePath	string		.
 * @param	remoteUsername	string		.
 * @param	remotePassword	string		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 * @param	mrssTransformer	string		 (readOnly).
 * @param	mrssValidator	string		 (readOnly).
 * @param	resultsTransformer	string		 (readOnly).
 */
function KalturaGenericDistributionProviderAction(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.genericDistributionProviderId = null;
	this.action = null;
	this.status = null;
	this.resultsParser = null;
	this.protocol = null;
	this.serverAddress = null;
	this.remotePath = null;
	this.remoteUsername = null;
	this.remotePassword = null;
	this.editableFields = null;
	this.mandatoryFields = null;
	this.mrssTransformer = null;
	this.mrssValidator = null;
	this.resultsTransformer = null;
}
KalturaGenericDistributionProviderAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated (readOnly).
 * @param	createdAt	int		Generic distribution provider creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Generic distribution provider last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	isDefault	bool		.
 * @param	status	int		 (readOnly).
 * @param	optionalFlavorParamsIds	string		.
 * @param	requiredFlavorParamsIds	string		.
 * @param	optionalThumbDimensions	array		.
 * @param	requiredThumbDimensions	array		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 */
function KalturaGenericDistributionProvider(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.isDefault = null;
	this.status = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.editableFields = null;
	this.mandatoryFields = null;
}
KalturaGenericDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	id	string		 (readOnly).
 * @param	userId	string		 (insertOnly).
 * @param	groupId	string		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	creationMode	int		 (insertOnly).
 * @param	userRole	int		.
 * @param	groupType	int		 (readOnly).
 */
function KalturaGroupUser(){
	this.id = null;
	this.userId = null;
	this.groupId = null;
	this.status = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.creationMode = null;
	this.userRole = null;
	this.groupType = null;
}
KalturaGroupUser.inheritsFrom (KalturaObjectBase);


/**
 * @param	relatedObjects	map		 (readOnly).
 */
function KalturaObject(){
	this.relatedObjects = null;
}
KalturaObject.inheritsFrom (KalturaObjectBase);


/**
 * @param	object	KalturaObjectBase		Object that triggered the notification.
 * @param	eventObjectType	string		Object type that triggered the notification.
 * @param	eventNotificationJobId	int		ID of the batch job that execute the notification.
 * @param	templateId	int		ID of the template that triggered the notification.
 * @param	templateName	string		Name of the template that triggered the notification.
 * @param	templateSystemName	string		System name of the template that triggered the notification.
 * @param	eventType	string		Ecent type that triggered the notification.
 */
function KalturaHttpNotification(){
	this.object = null;
	this.eventObjectType = null;
	this.eventNotificationJobId = null;
	this.templateId = null;
	this.templateName = null;
	this.templateSystemName = null;
	this.eventType = null;
}
KalturaHttpNotification.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaHttpNotificationData(){
}
KalturaHttpNotificationData.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	int		.
 */
function KalturaIntegerValue(){
	this.value = null;
}
KalturaIntegerValue.inheritsFrom (KalturaValue);


/**
 */
function KalturaIntegrationJobProviderData(){
}
KalturaIntegrationJobProviderData.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaIntegrationJobTriggerData(){
}
KalturaIntegrationJobTriggerData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	defaultUserId	string		.
 * @param	accountId	string		 (readOnly).
 * @param	createUserIfNotExist	int		.
 * @param	conversionProfileId	int		.
 * @param	handleParticipantsMode	int		.
 * @param	deletionPolicy	int		.
 * @param	createdAt	string		 (readOnly).
 * @param	updatedAt	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	enableMeetingUpload	int		.
 * @param	enableMeetingChat	int		.
 */
function KalturaIntegrationSetting(){
	this.id = null;
	this.status = null;
	this.defaultUserId = null;
	this.accountId = null;
	this.createUserIfNotExist = null;
	this.conversionProfileId = null;
	this.handleParticipantsMode = null;
	this.deletionPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.enableMeetingUpload = null;
	this.enableMeetingChat = null;
}
KalturaIntegrationSetting.inheritsFrom (KalturaObjectBase);


/**
 * @param	fields	string		A string containing CSV list of fields to include.
 */
function KalturaInteractivityDataFieldsFilter(){
	this.fields = null;
}
KalturaInteractivityDataFieldsFilter.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaInteractivityRootFilter(){
}
KalturaInteractivityRootFilter.inheritsFrom (KalturaInteractivityDataFieldsFilter);


/**
 */
function KalturaInteractivityNodeFilter(){
}
KalturaInteractivityNodeFilter.inheritsFrom (KalturaInteractivityDataFieldsFilter);


/**
 */
function KalturaInteractivityInteractionFilter(){
}
KalturaInteractivityInteractionFilter.inheritsFrom (KalturaInteractivityDataFieldsFilter);


/**
 * @param	rootFilter	KalturaInteractivityRootFilter		.
 * @param	nodeFilter	KalturaInteractivityNodeFilter		.
 * @param	interactionFilter	KalturaInteractivityInteractionFilter		.
 */
function KalturaInteractivityDataFilter(){
	this.rootFilter = null;
	this.nodeFilter = null;
	this.interactionFilter = null;
}
KalturaInteractivityDataFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryId	string		The id of the entry that the like belongs to.
 * @param	userId	string		The id of user that the like belongs to.
 * @param	createdAt	int		The date of the like's creation.
 */
function KalturaLike(){
	this.entryId = null;
	this.userId = null;
	this.createdAt = null;
}
KalturaLike.inheritsFrom (KalturaObjectBase);


/**
 * @param	offset	int		The time between the end of the event which it's id is in $eventId and the start of the event holding this object.
 * @param	eventId	int		The id of the event influencing the start of the event holding this object.
 */
function KalturaLinkedScheduleEvent(){
	this.offset = null;
	this.eventId = null;
}
KalturaLinkedScheduleEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	protocol	string		.
 * @param	url	string		.
 * @param	publishUrl	string		.
 * @param	backupUrl	string		.
 * @param	streamName	string		.
 */
function KalturaLiveStreamConfiguration(){
	this.protocol = null;
	this.url = null;
	this.publishUrl = null;
	this.backupUrl = null;
	this.streamName = null;
}
KalturaLiveStreamConfiguration.inheritsFrom (KalturaObjectBase);


/**
 * @param	publishUrl	string		.
 * @param	backupPublishUrl	string		.
 * @param	port	string		.
 */
function KalturaLiveStreamPushPublishConfiguration(){
	this.publishUrl = null;
	this.backupPublishUrl = null;
	this.port = null;
}
KalturaLiveStreamPushPublishConfiguration.inheritsFrom (KalturaObjectBase);


/**
 * @param	shouldCopyEntitlement	int		.
 * @param	shouldCopyScheduling	int		.
 * @param	shouldCopyThumbnail	int		.
 * @param	shouldMakeHidden	int		.
 * @param	shouldAutoArchive	int		.
 * @param	nonDeletedCuePointsTags	string		.
 * @param	archiveVodSuffixTimezone	string		.
 */
function KalturaLiveEntryRecordingOptions(){
	this.shouldCopyEntitlement = null;
	this.shouldCopyScheduling = null;
	this.shouldCopyThumbnail = null;
	this.shouldMakeHidden = null;
	this.shouldAutoArchive = null;
	this.nonDeletedCuePointsTags = null;
	this.archiveVodSuffixTimezone = null;
}
KalturaLiveEntryRecordingOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	offlineMessage	string		The message to be presented when the stream is offline.
 * @param	recordStatus	int		Recording Status Enabled/Disabled.
 * @param	dvrStatus	int		DVR Status Enabled/Disabled.
 * @param	dvrWindow	int		Window of time which the DVR allows for backwards scrubbing (in minutes).
 * @param	lastElapsedRecordingTime	int		Elapsed recording time (in msec) up to the point where the live stream was last stopped (unpublished)..
 * @param	liveStreamConfigurations	array		Array of key value protocol->live stream url objects.
 * @param	recordedEntryId	string		Recorded entry id.
 * @param	pushPublishEnabled	int		Flag denoting whether entry should be published by the media server.
 * @param	publishConfigurations	array		Array of publish configurations.
 * @param	firstBroadcast	int		The first time in which the entry was broadcast (readOnly).
 * @param	lastBroadcast	int		The Last time in which the entry was broadcast (readOnly).
 * @param	currentBroadcastStartTime	float		The time (unix timestamp in milliseconds) in which the entry broadcast started or 0 when the entry is off the air.
 * @param	recordingOptions	KalturaLiveEntryRecordingOptions		.
 * @param	liveStatus	int		the status of the entry of type EntryServerNodeStatus (readOnly).
 * @param	segmentDuration	int		The chunk duration value in milliseconds.
 * @param	explicitLive	int		.
 * @param	viewMode	int		.
 * @param	recordingStatus	int		.
 * @param	lastBroadcastEndTime	int		The time the last broadcast finished. (readOnly).
 * @param	broadcastTime	int		The time when the entry was first live with view_all.
 */
function KalturaLiveEntry(){
	this.offlineMessage = null;
	this.recordStatus = null;
	this.dvrStatus = null;
	this.dvrWindow = null;
	this.lastElapsedRecordingTime = null;
	this.liveStreamConfigurations = null;
	this.recordedEntryId = null;
	this.pushPublishEnabled = null;
	this.publishConfigurations = null;
	this.firstBroadcast = null;
	this.lastBroadcast = null;
	this.currentBroadcastStartTime = null;
	this.recordingOptions = null;
	this.liveStatus = null;
	this.segmentDuration = null;
	this.explicitLive = null;
	this.viewMode = null;
	this.recordingStatus = null;
	this.lastBroadcastEndTime = null;
	this.broadcastTime = null;
}
KalturaLiveEntry.inheritsFrom (KalturaMediaEntry);


/**
 * @param	playlistId	string		Playlist id to be played.
 * @param	repeat	int		Indicates that the segments should be repeated for ever.
 */
function KalturaLiveChannel(){
	this.playlistId = null;
	this.repeat = null;
}
KalturaLiveChannel.inheritsFrom (KalturaLiveEntry);


/**
 * @param	id	int		Unique identifier (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		Segment creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Segment update date as Unix timestamp (In seconds) (readOnly).
 * @param	name	string		Segment name.
 * @param	description	string		Segment description.
 * @param	tags	string		Segment tags.
 * @param	type	string		Segment could be associated with the main stream, as additional stream or as overlay.
 * @param	status	string		 (readOnly).
 * @param	channelId	string		Live channel id.
 * @param	entryId	string		Entry id to be played.
 * @param	triggerType	string		Segment start time trigger type.
 * @param	triggerSegmentId	int		Live channel segment that the trigger relates to.
 * @param	startTime	float		Segment play start time, in mili-seconds, according to trigger type.
 * @param	duration	float		Segment play duration time, in mili-seconds.
 */
function KalturaLiveChannelSegment(){
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.name = null;
	this.description = null;
	this.tags = null;
	this.type = null;
	this.status = null;
	this.channelId = null;
	this.entryId = null;
	this.triggerType = null;
	this.triggerSegmentId = null;
	this.startTime = null;
	this.duration = null;
}
KalturaLiveChannelSegment.inheritsFrom (KalturaObjectBase);


/**
 * @param	recordedEntryId	string		.
 * @param	duration	int		.
 * @param	recordingStatus	int		.
 */
function KalturaLiveEntryServerNodeRecordingInfo(){
	this.recordedEntryId = null;
	this.duration = null;
	this.recordingStatus = null;
}
KalturaLiveEntryServerNodeRecordingInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	systemName	string		.
 * @param	preStartTime	int		.
 * @param	postEndTime	int		.
 */
function KalturaLiveFeature(){
	this.systemName = null;
	this.preStartTime = null;
	this.postEndTime = null;
}
KalturaLiveFeature.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryIds	string		.
 * @param	recpientEmail	string		.
 * @param	timeZoneOffset	int		Time zone offset in minutes (between client to UTC).
 * @param	applicationUrlTemplate	string		Optional argument that allows controlling the prefix of the exported csv url.
 */
function KalturaLiveReportExportParams(){
	this.entryIds = null;
	this.recpientEmail = null;
	this.timeZoneOffset = null;
	this.applicationUrlTemplate = null;
}
KalturaLiveReportExportParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	referenceJobId	int		.
 * @param	reportEmail	string		.
 */
function KalturaLiveReportExportResponse(){
	this.referenceJobId = null;
	this.reportEmail = null;
}
KalturaLiveReportExportResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryIds	string		.
 * @param	fromTime	int		.
 * @param	toTime	int		.
 * @param	live	int		.
 * @param	orderBy	string		.
 */
function KalturaLiveReportInputFilter(){
	this.entryIds = null;
	this.fromTime = null;
	this.toTime = null;
	this.live = null;
	this.orderBy = null;
}
KalturaLiveReportInputFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	audience	int		.
 * @param	dvrAudience	int		.
 * @param	avgBitrate	float		.
 * @param	bufferTime	int		.
 * @param	plays	int		.
 * @param	secondsViewed	int		.
 * @param	startEvent	int		.
 * @param	timestamp	int		.
 */
function KalturaLiveStats(){
	this.audience = null;
	this.dvrAudience = null;
	this.avgBitrate = null;
	this.bufferTime = null;
	this.plays = null;
	this.secondsViewed = null;
	this.startEvent = null;
	this.timestamp = null;
}
KalturaLiveStats.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	eventType	int		an integer representing the type of event being sent from the player.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	eventIndex	int		incremental sequence of the event.
 * @param	bufferTime	int		buffer time in seconds from the last 10 seconds.
 * @param	bitrate	int		bitrate used in the last 10 seconds.
 * @param	referrer	string		the referrer of the client.
 * @param	isLive	bool		.
 * @param	startTime	string		the event start time as string.
 * @param	deliveryType	string		delivery type used for this stream.
 */
function KalturaLiveStatsEvent(){
	this.partnerId = null;
	this.entryId = null;
	this.eventType = null;
	this.sessionId = null;
	this.eventIndex = null;
	this.bufferTime = null;
	this.bitrate = null;
	this.referrer = null;
	this.isLive = null;
	this.startTime = null;
	this.deliveryType = null;
}
KalturaLiveStatsEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	bitrate	int		.
 * @param	width	int		.
 * @param	height	int		.
 * @param	tags	string		.
 */
function KalturaLiveStreamBitrate(){
	this.bitrate = null;
	this.width = null;
	this.height = null;
	this.tags = null;
}
KalturaLiveStreamBitrate.inheritsFrom (KalturaObjectBase);


/**
 * @param	primaryStreamStatus	int		The status of the primary stream.
 * @param	secondaryStreamStatus	int		The status of the secondary stream.
 * @param	viewMode	int		.
 * @param	wasBroadcast	bool		.
 * @param	broadcastStatus	int		.
 */
function KalturaLiveStreamDetails(){
	this.primaryStreamStatus = null;
	this.secondaryStreamStatus = null;
	this.viewMode = null;
	this.wasBroadcast = null;
	this.broadcastStatus = null;
}
KalturaLiveStreamDetails.inheritsFrom (KalturaObjectBase);


/**
 * @param	streamRemoteId	string		The stream id as provided by the provider (readOnly).
 * @param	streamRemoteBackupId	string		The backup stream id as provided by the provider (readOnly).
 * @param	bitrates	array		Array of supported bitrates.
 * @param	primaryBroadcastingUrl	string		.
 * @param	secondaryBroadcastingUrl	string		.
 * @param	primarySecuredBroadcastingUrl	string		.
 * @param	secondarySecuredBroadcastingUrl	string		.
 * @param	primaryRtspBroadcastingUrl	string		.
 * @param	secondaryRtspBroadcastingUrl	string		.
 * @param	primarySrtBroadcastingUrl	string		.
 * @param	primarySrtStreamId	string		.
 * @param	secondarySrtBroadcastingUrl	string		.
 * @param	secondarySrtStreamId	string		.
 * @param	streamName	string		.
 * @param	streamUrl	string		The stream url.
 * @param	hlsStreamUrl	string		HLS URL - URL for live stream playback on mobile device.
 * @param	urlManager	string		URL Manager to handle the live stream URL (for instance, add token).
 * @param	encodingIP1	string		The broadcast primary ip.
 * @param	encodingIP2	string		The broadcast secondary ip.
 * @param	streamPassword	string		The broadcast password.
 * @param	streamUsername	string		The broadcast username (readOnly).
 * @param	srtPass	string		.
 * @param	primaryServerNodeId	int		The Streams primary server node id (readOnly).
 * @param	sipToken	string		 (readOnly).
 * @param	sipSourceType	int		 (readOnly).
 */
function KalturaLiveStreamEntry(){
	this.streamRemoteId = null;
	this.streamRemoteBackupId = null;
	this.bitrates = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.primarySecuredBroadcastingUrl = null;
	this.secondarySecuredBroadcastingUrl = null;
	this.primaryRtspBroadcastingUrl = null;
	this.secondaryRtspBroadcastingUrl = null;
	this.primarySrtBroadcastingUrl = null;
	this.primarySrtStreamId = null;
	this.secondarySrtBroadcastingUrl = null;
	this.secondarySrtStreamId = null;
	this.streamName = null;
	this.streamUrl = null;
	this.hlsStreamUrl = null;
	this.urlManager = null;
	this.encodingIP1 = null;
	this.encodingIP2 = null;
	this.streamPassword = null;
	this.streamUsername = null;
	this.srtPass = null;
	this.primaryServerNodeId = null;
	this.sipToken = null;
	this.sipSourceType = null;
}
KalturaLiveStreamEntry.inheritsFrom (KalturaLiveEntry);


/**
 * @param	bitrate	int		Bit rate of the stream. (i.e. 900).
 * @param	flavorId	string		flavor asset id.
 * @param	width	int		Stream's width.
 * @param	height	int		Stream's height.
 * @param	codec	string		Live stream's codec.
 * @param	frameRate	int		Live stream's farme rate.
 * @param	keyFrameInterval	float		Live stream's key frame interval.
 * @param	language	string		Live stream's language.
 */
function KalturaLiveStreamParams(){
	this.bitrate = null;
	this.flavorId = null;
	this.width = null;
	this.height = null;
	this.codec = null;
	this.frameRate = null;
	this.keyFrameInterval = null;
	this.language = null;
}
KalturaLiveStreamParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	liveViewers	int		.
 */
function KalturaLiveStreamStats(){
	this.liveViewers = null;
}
KalturaLiveStreamStats.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		This filter should be in use for retrieving only a specific entry (identified by its entryId)..
 * @param	idIn	string		This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings)..
 * @param	idNotIn	string		.
 * @param	nameLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string)..
 * @param	nameMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)..
 * @param	nameMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)..
 * @param	nameEqual	string		This filter should be in use for retrieving entries with a specific name..
 * @param	partnerIdEqual	int		This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID)..
 * @param	partnerIdIn	string		This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs).
 * @param	userIdEqual	string		This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id)..
 * @param	userIdIn	string		.
 * @param	userIdNotIn	string		.
 * @param	creatorIdEqual	string		.
 * @param	tagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string)..
 * @param	tagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)..
 * @param	tagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)..
 * @param	adminTagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string)..
 * @param	adminTagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)..
 * @param	adminTagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)..
 * @param	categoriesMatchAnd	string		.
 * @param	categoriesMatchOr	string		All entries within these categories or their child categories..
 * @param	categoriesNotContains	string		.
 * @param	categoriesIdsMatchAnd	string		.
 * @param	categoriesIdsMatchOr	string		All entries of the categories, excluding their child categories.
 *		 To include entries of the child categories, use categoryAncestorIdIn, or categoriesMatchOr..
 * @param	categoriesIdsNotContains	string		.
 * @param	categoriesIdsEmpty	int		.
 * @param	statusEqual	string		This filter should be in use for retrieving only entries, at a specific {.
 * @param	statusNotEqual	string		This filter should be in use for retrieving only entries, not at a specific {.
 * @param	statusIn	string		This filter should be in use for retrieving only entries, at few specific {.
 * @param	statusNotIn	string		This filter should be in use for retrieving only entries, not at few specific {.
 * @param	moderationStatusEqual	int		.
 * @param	moderationStatusNotEqual	int		.
 * @param	moderationStatusIn	string		.
 * @param	moderationStatusNotIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		This filter should be in use for retrieving entries of few {.
 * @param	createdAtGreaterThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format)..
 * @param	createdAtLessThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format)..
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	rankLessThanOrEqual	float		.
 * @param	rankGreaterThanOrEqual	float		.
 * @param	totalRankLessThanOrEqual	int		.
 * @param	totalRankGreaterThanOrEqual	int		.
 * @param	groupIdEqual	int		.
 * @param	searchTextMatchAnd	string		This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags..
 * @param	searchTextMatchOr	string		This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags..
 * @param	accessControlIdEqual	int		.
 * @param	accessControlIdIn	string		.
 * @param	startDateGreaterThanOrEqual	int		.
 * @param	startDateLessThanOrEqual	int		.
 * @param	startDateGreaterThanOrEqualOrNull	int		.
 * @param	startDateLessThanOrEqualOrNull	int		.
 * @param	endDateGreaterThanOrEqual	int		.
 * @param	endDateLessThanOrEqual	int		.
 * @param	endDateGreaterThanOrEqualOrNull	int		.
 * @param	endDateLessThanOrEqualOrNull	int		.
 * @param	referenceIdEqual	string		.
 * @param	referenceIdIn	string		.
 * @param	replacingEntryIdEqual	string		.
 * @param	replacingEntryIdIn	string		.
 * @param	replacedEntryIdEqual	string		.
 * @param	replacedEntryIdIn	string		.
 * @param	replacementStatusEqual	string		.
 * @param	replacementStatusIn	string		.
 * @param	partnerSortValueGreaterThanOrEqual	int		.
 * @param	partnerSortValueLessThanOrEqual	int		.
 * @param	rootEntryIdEqual	string		.
 * @param	rootEntryIdIn	string		.
 * @param	parentEntryIdEqual	string		.
 * @param	entitledUsersEditMatchAnd	string		.
 * @param	entitledUsersEditMatchOr	string		.
 * @param	entitledUsersPublishMatchAnd	string		.
 * @param	entitledUsersPublishMatchOr	string		.
 * @param	entitledUsersViewMatchAnd	string		.
 * @param	entitledUsersViewMatchOr	string		.
 * @param	tagsNameMultiLikeOr	string		.
 * @param	tagsAdminTagsMultiLikeOr	string		.
 * @param	tagsAdminTagsNameMultiLikeOr	string		.
 * @param	tagsNameMultiLikeAnd	string		.
 * @param	tagsAdminTagsMultiLikeAnd	string		.
 * @param	tagsAdminTagsNameMultiLikeAnd	string		.
 * @param	displayInSearchEqual	int		.
 * @param	displayInSearchIn	string		.
 */
function KalturaBaseEntryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.userIdNotIn = null;
	this.creatorIdEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.adminTagsLike = null;
	this.adminTagsMultiLikeOr = null;
	this.adminTagsMultiLikeAnd = null;
	this.categoriesMatchAnd = null;
	this.categoriesMatchOr = null;
	this.categoriesNotContains = null;
	this.categoriesIdsMatchAnd = null;
	this.categoriesIdsMatchOr = null;
	this.categoriesIdsNotContains = null;
	this.categoriesIdsEmpty = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.moderationStatusEqual = null;
	this.moderationStatusNotEqual = null;
	this.moderationStatusIn = null;
	this.moderationStatusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.rankLessThanOrEqual = null;
	this.rankGreaterThanOrEqual = null;
	this.totalRankLessThanOrEqual = null;
	this.totalRankGreaterThanOrEqual = null;
	this.groupIdEqual = null;
	this.searchTextMatchAnd = null;
	this.searchTextMatchOr = null;
	this.accessControlIdEqual = null;
	this.accessControlIdIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.startDateGreaterThanOrEqualOrNull = null;
	this.startDateLessThanOrEqualOrNull = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqualOrNull = null;
	this.endDateLessThanOrEqualOrNull = null;
	this.referenceIdEqual = null;
	this.referenceIdIn = null;
	this.replacingEntryIdEqual = null;
	this.replacingEntryIdIn = null;
	this.replacedEntryIdEqual = null;
	this.replacedEntryIdIn = null;
	this.replacementStatusEqual = null;
	this.replacementStatusIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.rootEntryIdEqual = null;
	this.rootEntryIdIn = null;
	this.parentEntryIdEqual = null;
	this.entitledUsersEditMatchAnd = null;
	this.entitledUsersEditMatchOr = null;
	this.entitledUsersPublishMatchAnd = null;
	this.entitledUsersPublishMatchOr = null;
	this.entitledUsersViewMatchAnd = null;
	this.entitledUsersViewMatchOr = null;
	this.tagsNameMultiLikeOr = null;
	this.tagsAdminTagsMultiLikeOr = null;
	this.tagsAdminTagsNameMultiLikeOr = null;
	this.tagsNameMultiLikeAnd = null;
	this.tagsAdminTagsMultiLikeAnd = null;
	this.tagsAdminTagsNameMultiLikeAnd = null;
	this.displayInSearchEqual = null;
	this.displayInSearchIn = null;
}
KalturaBaseEntryBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	freeText	string		.
 * @param	excludedFreeTextGroups	string		.
 * @param	descriptionLike	string		.
 * @param	isRoot	int		.
 * @param	categoriesFullNameIn	string		.
 * @param	categoryAncestorIdIn	string		All entries within this categoy or in child categories.
 * @param	redirectFromEntryId	string		The id of the original entry.
 * @param	conversionProfileIdEqual	int		.
 */
function KalturaBaseEntryFilter(){
	this.freeText = null;
	this.excludedFreeTextGroups = null;
	this.descriptionLike = null;
	this.isRoot = null;
	this.categoriesFullNameIn = null;
	this.categoryAncestorIdIn = null;
	this.redirectFromEntryId = null;
	this.conversionProfileIdEqual = null;
}
KalturaBaseEntryFilter.inheritsFrom (KalturaBaseEntryBaseFilter);


/**
 * @param	lastPlayedAtGreaterThanOrEqual	int		.
 * @param	lastPlayedAtLessThanOrEqual	int		.
 * @param	lastPlayedAtLessThanOrEqualOrNull	int		.
 * @param	durationLessThan	int		.
 * @param	durationGreaterThan	int		.
 * @param	durationLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	durationTypeMatchOr	string		.
 */
function KalturaPlayableEntryBaseFilter(){
	this.lastPlayedAtGreaterThanOrEqual = null;
	this.lastPlayedAtLessThanOrEqual = null;
	this.lastPlayedAtLessThanOrEqualOrNull = null;
	this.durationLessThan = null;
	this.durationGreaterThan = null;
	this.durationLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationTypeMatchOr = null;
}
KalturaPlayableEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPlayableEntryFilter(){
}
KalturaPlayableEntryFilter.inheritsFrom (KalturaPlayableEntryBaseFilter);


/**
 * @param	mediaTypeEqual	int		.
 * @param	mediaTypeIn	string		.
 * @param	sourceTypeEqual	string		.
 * @param	sourceTypeNotEqual	string		.
 * @param	sourceTypeIn	string		.
 * @param	sourceTypeNotIn	string		.
 * @param	mediaDateGreaterThanOrEqual	int		.
 * @param	mediaDateLessThanOrEqual	int		.
 * @param	flavorParamsIdsMatchOr	string		.
 * @param	flavorParamsIdsMatchAnd	string		.
 */
function KalturaMediaEntryBaseFilter(){
	this.mediaTypeEqual = null;
	this.mediaTypeIn = null;
	this.sourceTypeEqual = null;
	this.sourceTypeNotEqual = null;
	this.sourceTypeIn = null;
	this.sourceTypeNotIn = null;
	this.mediaDateGreaterThanOrEqual = null;
	this.mediaDateLessThanOrEqual = null;
	this.flavorParamsIdsMatchOr = null;
	this.flavorParamsIdsMatchAnd = null;
}
KalturaMediaEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMediaEntryFilter(){
}
KalturaMediaEntryFilter.inheritsFrom (KalturaMediaEntryBaseFilter);


/**
 * @param	limit	int		.
 * @param	name	string		.
 */
function KalturaMediaEntryFilterForPlaylist(){
	this.limit = null;
	this.name = null;
}
KalturaMediaEntryFilterForPlaylist.inheritsFrom (KalturaMediaEntryFilter);


/**
 * @param	id	int		The id of the media info (readOnly).
 * @param	flavorAssetId	string		The id of the related flavor asset.
 * @param	fileSize	int		The file size.
 * @param	containerFormat	string		The container format.
 * @param	containerId	string		The container id.
 * @param	containerProfile	string		The container profile.
 * @param	containerDuration	int		The container duration.
 * @param	containerBitRate	int		The container bit rate.
 * @param	videoFormat	string		The video format.
 * @param	videoCodecId	string		The video codec id.
 * @param	videoDuration	int		The video duration.
 * @param	videoBitRate	int		The video bit rate.
 * @param	videoBitRateMode	int		The video bit rate mode.
 * @param	videoWidth	int		The video width.
 * @param	videoHeight	int		The video height.
 * @param	videoFrameRate	float		The video frame rate.
 * @param	videoDar	float		The video display aspect ratio (dar).
 * @param	videoRotation	int		.
 * @param	audioFormat	string		The audio format.
 * @param	audioCodecId	string		The audio codec id.
 * @param	audioDuration	int		The audio duration.
 * @param	audioBitRate	int		The audio bit rate.
 * @param	audioBitRateMode	int		The audio bit rate mode.
 * @param	audioChannels	int		The number of audio channels.
 * @param	audioSamplingRate	int		The audio sampling rate.
 * @param	audioResolution	int		The audio resolution.
 * @param	writingLib	string		The writing library.
 * @param	rawData	string		The data as returned by the mediainfo command line.
 * @param	multiStreamInfo	string		.
 * @param	scanType	int		.
 * @param	multiStream	string		.
 * @param	isFastStart	int		.
 * @param	contentStreams	string		.
 * @param	complexityValue	int		.
 * @param	maxGOP	float		.
 * @param	matrixCoefficients	string		.
 * @param	colorTransfer	string		.
 * @param	colorPrimaries	string		.
 * @param	pixelFormat	string		.
 * @param	colorSpace	string		.
 * @param	chromaSubsampling	string		.
 * @param	bitsDepth	int		.
 */
function KalturaMediaInfo(){
	this.id = null;
	this.flavorAssetId = null;
	this.fileSize = null;
	this.containerFormat = null;
	this.containerId = null;
	this.containerProfile = null;
	this.containerDuration = null;
	this.containerBitRate = null;
	this.videoFormat = null;
	this.videoCodecId = null;
	this.videoDuration = null;
	this.videoBitRate = null;
	this.videoBitRateMode = null;
	this.videoWidth = null;
	this.videoHeight = null;
	this.videoFrameRate = null;
	this.videoDar = null;
	this.videoRotation = null;
	this.audioFormat = null;
	this.audioCodecId = null;
	this.audioDuration = null;
	this.audioBitRate = null;
	this.audioBitRateMode = null;
	this.audioChannels = null;
	this.audioSamplingRate = null;
	this.audioResolution = null;
	this.writingLib = null;
	this.rawData = null;
	this.multiStreamInfo = null;
	this.scanType = null;
	this.multiStream = null;
	this.isFastStart = null;
	this.contentStreams = null;
	this.complexityValue = null;
	this.maxGOP = null;
	this.matrixCoefficients = null;
	this.colorTransfer = null;
	this.colorPrimaries = null;
	this.pixelFormat = null;
	this.colorSpace = null;
	this.chromaSubsampling = null;
	this.bitsDepth = null;
}
KalturaMediaInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataProfileId	int		 (readOnly).
 * @param	metadataProfileVersion	int		 (readOnly).
 * @param	metadataObjectType	string		 (readOnly).
 * @param	objectId	string		 (readOnly).
 * @param	version	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xml	string		 (readOnly).
 */
function KalturaMetadata(){
	this.id = null;
	this.partnerId = null;
	this.metadataProfileId = null;
	this.metadataProfileVersion = null;
	this.metadataObjectType = null;
	this.objectId = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xml = null;
}
KalturaMetadata.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataObjectType	string		.
 * @param	version	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xsd	string		 (readOnly).
 * @param	views	string		 (readOnly).
 * @param	xslt	string		 (readOnly).
 * @param	createMode	int		.
 * @param	disableReIndexing	bool		.
 */
function KalturaMetadataProfile(){
	this.id = null;
	this.partnerId = null;
	this.metadataObjectType = null;
	this.version = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xsd = null;
	this.views = null;
	this.xslt = null;
	this.createMode = null;
	this.disableReIndexing = null;
}
KalturaMetadataProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	xPath	string		 (readOnly).
 * @param	key	string		 (readOnly).
 * @param	label	string		 (readOnly).
 */
function KalturaMetadataProfileField(){
	this.id = null;
	this.xPath = null;
	this.key = null;
	this.label = null;
}
KalturaMetadataProfileField.inheritsFrom (KalturaObjectBase);


/**
 * @param	hasRealThumbnail	bool		Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly) (readOnly).
 * @param	editorType	int		The editor type used to edit the metadata.
 * @param	dataContent	string		The xml data of the mix.
 */
function KalturaMixEntry(){
	this.hasRealThumbnail = null;
	this.editorType = null;
	this.dataContent = null;
}
KalturaMixEntry.inheritsFrom (KalturaPlayableEntry);


/**
 * @param	id	int		Moderation flag id (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The user id that added the moderation flag (readOnly).
 * @param	moderationObjectType	string		The type of the moderation flag (entry or user) (readOnly).
 * @param	flaggedEntryId	string		If moderation flag is set for entry, this is the flagged entry id.
 * @param	flaggedUserId	string		If moderation flag is set for user, this is the flagged user id.
 * @param	status	string		The moderation flag status (readOnly).
 * @param	comments	string		The comment that was added to the flag.
 * @param	flagType	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaModerationFlag(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.moderationObjectType = null;
	this.flaggedEntryId = null;
	this.flaggedUserId = null;
	this.status = null;
	this.comments = null;
	this.flagType = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaModerationFlag.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		 (readOnly).
 * @param	stopProcessingOnError	bool		.
 */
function KalturaObjectTask(){
	this.type = null;
	this.stopProcessingOnError = null;
}
KalturaObjectTask.inheritsFrom (KalturaObjectBase);


/**
 * @param	resource	KalturaContentResource		Only KalturaEntryResource and KalturaAssetResource are supported.
 * @param	operationAttributes	array		.
 * @param	assetParamsId	int		ID of alternative asset params to be used instead of the system default flavor params.
 */
function KalturaOperationResource(){
	this.resource = null;
	this.operationAttributes = null;
	this.assetParamsId = null;
}
KalturaOperationResource.inheritsFrom (KalturaContentResource);


/**
 * @param	key	string		.
 * @param	text	string		.
 * @param	weight	float		.
 * @param	isCorrect	int		.
 */
function KalturaOptionalAnswer(){
	this.key = null;
	this.text = null;
	this.weight = null;
	this.isCorrect = null;
}
KalturaOptionalAnswer.inheritsFrom (KalturaObjectBase);


/**
 * @param	analyticsUrl	string		.
 * @param	ottEnvironmentUrl	string		.
 * @param	analyticsPersistentSessionId	bool		.
 */
function KalturaPartnerPublicInfo(){
	this.analyticsUrl = null;
	this.ottEnvironmentUrl = null;
	this.analyticsPersistentSessionId = null;
}
KalturaPartnerPublicInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	packageBandwidthAndStorage	int		Package total allowed bandwidth and storage (readOnly).
 * @param	hosting	float		Partner total hosting in GB on the disk (readOnly).
 * @param	bandwidth	float		Partner total bandwidth in GB (readOnly).
 * @param	usage	int		total usage in GB - including bandwidth and storage (readOnly).
 * @param	usagePercent	float		Percent of usage out of partner's package. if usage is 5GB and package is 10GB, this value will be 50 (readOnly).
 * @param	reachedLimitDate	int		date when partner reached the limit of his package (timestamp) (readOnly).
 */
function KalturaPartnerStatistics(){
	this.packageBandwidthAndStorage = null;
	this.hosting = null;
	this.bandwidth = null;
	this.usage = null;
	this.usagePercent = null;
	this.reachedLimitDate = null;
}
KalturaPartnerStatistics.inheritsFrom (KalturaObjectBase);


/**
 * @param	hostingGB	float		Partner total hosting in GB on the disk (readOnly).
 * @param	Percent	float		percent of usage out of partner's package. if usageGB is 5 and package is 10GB, this value will be 50 (readOnly).
 * @param	packageBW	int		package total BW - actually this is usage, which represents BW+storage (readOnly).
 * @param	usageGB	float		total usage in GB - including bandwidth and storage (readOnly).
 * @param	reachedLimitDate	int		date when partner reached the limit of his package (timestamp) (readOnly).
 * @param	usageGraph	string		a semi-colon separated list of comma-separated key-values to represent a usage graph.
 *		 keys could be 1-12 for a year view (1,1.2;2,1.1;3,0.9;...;12,1.4;)
 *		 keys could be 1-[28,29,30,31] depending on the requested month, for a daily view in a given month (1,0.4;2,0.2;...;31,0.1;) (readOnly).
 */
function KalturaPartnerUsage(){
	this.hostingGB = null;
	this.Percent = null;
	this.packageBW = null;
	this.usageGB = null;
	this.reachedLimitDate = null;
	this.usageGraph = null;
}
KalturaPartnerUsage.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	int		 (readOnly).
 * @param	name	string		.
 * @param	friendlyName	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	dependsOnPermissionNames	string		.
 * @param	tags	string		.
 * @param	permissionItemsIds	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerGroup	string		.
 */
function KalturaPermission(){
	this.id = null;
	this.type = null;
	this.name = null;
	this.friendlyName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.dependsOnPermissionNames = null;
	this.tags = null;
	this.permissionItemsIds = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerGroup = null;
}
KalturaPermission.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaPermissionItem(){
	this.id = null;
	this.type = null;
	this.partnerId = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaPermissionItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	permissionLevel	int		Permission Level.
 */
function KalturaPermissionLevel(){
	this.permissionLevel = null;
}
KalturaPermissionLevel.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the play enabler.
 */
function KalturaPlayReadyAnalogVideoOPIdHolder(){
	this.type = null;
}
KalturaPlayReadyAnalogVideoOPIdHolder.inheritsFrom (KalturaObjectBase);


/**
 * @param	keyId	string		Guid - key id of the specific content.
 * @param	contentKey	string		License content key 64 bit encoded.
 */
function KalturaPlayReadyContentKey(){
	this.keyId = null;
	this.contentKey = null;
}
KalturaPlayReadyContentKey.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the copy enabler.
 */
function KalturaPlayReadyCopyEnablerHolder(){
	this.type = null;
}
KalturaPlayReadyCopyEnablerHolder.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the play enabler.
 */
function KalturaPlayReadyDigitalAudioOPIdHolder(){
	this.type = null;
}
KalturaPlayReadyDigitalAudioOPIdHolder.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaPlayReadyRight(){
}
KalturaPlayReadyRight.inheritsFrom (KalturaObjectBase);


/**
 * @param	gracePeriod	int		.
 * @param	licenseRemovalPolicy	int		.
 * @param	licenseRemovalDuration	int		.
 * @param	minSecurityLevel	int		.
 * @param	rights	array		.
 */
function KalturaPlayReadyPolicy(){
	this.gracePeriod = null;
	this.licenseRemovalPolicy = null;
	this.licenseRemovalDuration = null;
	this.minSecurityLevel = null;
	this.rights = null;
}
KalturaPlayReadyPolicy.inheritsFrom (KalturaDrmPolicy);


/**
 * @param	policy	KalturaPlayReadyPolicy		PlayReady policy object.
 * @param	beginDate	int		License begin date.
 * @param	expirationDate	int		License expiration date.
 * @param	removalDate	int		License removal date.
 */
function KalturaPlayReadyLicenseDetails(){
	this.policy = null;
	this.beginDate = null;
	this.expirationDate = null;
	this.removalDate = null;
}
KalturaPlayReadyLicenseDetails.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	string		The type of the play enabler.
 */
function KalturaPlayReadyPlayEnablerHolder(){
	this.type = null;
}
KalturaPlayReadyPlayEnablerHolder.inheritsFrom (KalturaObjectBase);


/**
 * @param	sources	array		.
 * @param	playbackCaptions	array		.
 * @param	flavorAssets	array		.
 * @param	actions	array		Array of actions as received from the rules that invalidated.
 * @param	messages	array		Array of actions as received from the rules that invalidated.
 * @param	bumperData	array		.
 */
function KalturaPlaybackContext(){
	this.sources = null;
	this.playbackCaptions = null;
	this.flavorAssets = null;
	this.actions = null;
	this.messages = null;
	this.bumperData = null;
}
KalturaPlaybackContext.inheritsFrom (KalturaObjectBase);


/**
 * @param	playlistContent	string		Content of the playlist - 
 *		 XML if the playlistType is dynamic 
 *		 text if the playlistType is static 
 *		 url if the playlistType is mRss.
 * @param	filters	array		.
 * @param	totalResults	int		Maximum count of results to be returned in playlist execution.
 * @param	playlistType	int		Type of playlist (insertOnly).
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 * @param	executeUrl	string		The url for this playlist (readOnly).
 */
function KalturaPlaylist(){
	this.playlistContent = null;
	this.filters = null;
	this.totalResults = null;
	this.playlistType = null;
	this.plays = null;
	this.views = null;
	this.duration = null;
	this.executeUrl = null;
}
KalturaPlaylist.inheritsFrom (KalturaBaseEntry);


/**
 * @param	queueKeyToken	string		.
 */
function KalturaPushEventNotificationParameter(){
	this.queueKeyToken = null;
}
KalturaPushEventNotificationParameter.inheritsFrom (KalturaEventNotificationParameter);


/**
 * @param	queueName	string		 (readOnly).
 * @param	queueKey	string		 (readOnly).
 * @param	url	string		 (readOnly).
 */
function KalturaPushNotificationData(){
	this.queueName = null;
	this.queueKey = null;
	this.url = null;
}
KalturaPushNotificationData.inheritsFrom (KalturaObjectBase);


/**
 * @param	userParams	array		User params.
 */
function KalturaPushNotificationParams(){
	this.userParams = null;
}
KalturaPushNotificationParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	version	int		 (readOnly).
 * @param	uiAttributes	array		Array of key value ui related objects.
 * @param	showResultOnAnswer	int		.
 * @param	showCorrectKeyOnAnswer	int		.
 * @param	allowAnswerUpdate	int		.
 * @param	showCorrectAfterSubmission	int		.
 * @param	allowDownload	int		.
 * @param	showGradeAfterSubmission	int		.
 * @param	attemptsAllowed	int		.
 * @param	scoreType	int		.
 */
function KalturaQuiz(){
	this.version = null;
	this.uiAttributes = null;
	this.showResultOnAnswer = null;
	this.showCorrectKeyOnAnswer = null;
	this.allowAnswerUpdate = null;
	this.showCorrectAfterSubmission = null;
	this.allowDownload = null;
	this.showGradeAfterSubmission = null;
	this.attemptsAllowed = null;
	this.scoreType = null;
}
KalturaQuiz.inheritsFrom (KalturaObjectBase);


/**
 * @param	entryId	string		.
 * @param	rank	int		.
 * @param	count	int		.
 */
function KalturaRatingCount(){
	this.entryId = null;
	this.rank = null;
	this.count = null;
}
KalturaRatingCount.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		The name of the profile.
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	profileType	int		.
 * @param	defaultOutputFormat	int		.
 * @param	enableMachineModeration	int		.
 * @param	enableHumanModeration	int		.
 * @param	autoDisplayMachineCaptionsOnPlayer	int		.
 * @param	autoDisplayHumanCaptionsOnPlayer	int		.
 * @param	enableMetadataExtraction	int		.
 * @param	enableSpeakerChangeIndication	int		.
 * @param	enableAudioTags	int		.
 * @param	enableProfanityRemoval	int		.
 * @param	maxCharactersPerCaptionLine	int		.
 * @param	labelAdditionForMachineServiceType	string		.
 * @param	labelAdditionForHumanServiceType	string		.
 * @param	contentDeletionPolicy	int		.
 * @param	rules	array		.
 * @param	credit	KalturaBaseVendorCredit		.
 * @param	usedCredit	float		 (readOnly).
 * @param	dictionaries	array		.
 * @param	flavorParamsIds	string		Comma separated flavorParamsIds that the vendor should look for it matching asset when trying to download the asset.
 * @param	vendorTaskProcessingRegion	int		Indicates in which region the task processing should task place.
 */
function KalturaReachProfile(){
	this.id = null;
	this.name = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.profileType = null;
	this.defaultOutputFormat = null;
	this.enableMachineModeration = null;
	this.enableHumanModeration = null;
	this.autoDisplayMachineCaptionsOnPlayer = null;
	this.autoDisplayHumanCaptionsOnPlayer = null;
	this.enableMetadataExtraction = null;
	this.enableSpeakerChangeIndication = null;
	this.enableAudioTags = null;
	this.enableProfanityRemoval = null;
	this.maxCharactersPerCaptionLine = null;
	this.labelAdditionForMachineServiceType = null;
	this.labelAdditionForHumanServiceType = null;
	this.contentDeletionPolicy = null;
	this.rules = null;
	this.credit = null;
	this.usedCredit = null;
	this.dictionaries = null;
	this.flavorParamsIds = null;
	this.vendorTaskProcessingRegion = null;
}
KalturaReachProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	storageProfileId	int		 (readOnly).
 * @param	uri	string		 (readOnly).
 */
function KalturaRemotePath(){
	this.storageProfileId = null;
	this.uri = null;
}
KalturaRemotePath.inheritsFrom (KalturaObjectBase);


/**
 * @param	url	string		Remote URL, FTP, HTTP or HTTPS.
 * @param	forceAsyncDownload	bool		Force Import Job.
 * @param	urlHeaders	array		.
 * @param	shouldRedirect	bool		.
 */
function KalturaUrlResource(){
	this.url = null;
	this.forceAsyncDownload = null;
	this.urlHeaders = null;
	this.shouldRedirect = null;
}
KalturaUrlResource.inheritsFrom (KalturaContentResource);


/**
 * @param	storageProfileId	int		ID of storage profile to be associated with the created file sync, used for file serving URL composing..
 */
function KalturaRemoteStorageResource(){
	this.storageProfileId = null;
}
KalturaRemoteStorageResource.inheritsFrom (KalturaUrlResource);


/**
 * @param	id	int		Report id (readOnly).
 * @param	partnerId	int		Partner id associated with the report.
 * @param	name	string		Report name.
 * @param	systemName	string		Used to identify system reports in a friendly way.
 * @param	description	string		Report description.
 * @param	query	string		Report query.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 */
function KalturaReport(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.query = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaReport.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	data	string		.
 */
function KalturaReportBaseTotal(){
	this.id = null;
	this.data = null;
}
KalturaReportBaseTotal.inheritsFrom (KalturaObjectBase);


/**
 * @param	fileId	string		.
 * @param	fileName	string		.
 */
function KalturaReportExportFile(){
	this.fileId = null;
	this.fileName = null;
}
KalturaReportExportFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	fromDate	int		Start date as Unix timestamp (In seconds).
 * @param	toDate	int		End date as Unix timestamp (In seconds).
 * @param	fromDay	string		Start day as string (YYYYMMDD).
 * @param	toDay	string		End date as string (YYYYMMDD).
 */
function KalturaReportInputBaseFilter(){
	this.fromDate = null;
	this.toDate = null;
	this.fromDay = null;
	this.toDay = null;
}
KalturaReportInputBaseFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaESearchEntryOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaESearchEntryOperator.inheritsFrom (KalturaESearchEntryBaseItem);


/**
 * @param	keywords	string		Search keywords to filter objects.
 * @param	searchInTags	bool		Search keywords in objects tags.
 * @param	searchInAdminTags	bool		Search keywords in objects admin tags.
 * @param	categories	string		Search objects in specified categories.
 * @param	categoriesIdsIn	string		Search objects in specified category ids.
 * @param	customVar1In	string		Filter by customVar1.
 * @param	customVar2In	string		Filter by customVar2.
 * @param	customVar3In	string		Filter by customVar3.
 * @param	deviceIn	string		Filter by device.
 * @param	countryIn	string		Filter by country.
 * @param	regionIn	string		Filter by region.
 * @param	citiesIn	string		Filter by city.
 * @param	operatingSystemFamilyIn	string		Filter by operating system family.
 * @param	operatingSystemIn	string		Filter by operating system.
 * @param	browserFamilyIn	string		Filter by browser family.
 * @param	browserIn	string		Filter by browser.
 * @param	timeZoneOffset	int		Time zone offset in minutes.
 * @param	interval	string		Aggregated results according to interval.
 * @param	mediaTypeIn	string		Filter by media types.
 * @param	sourceTypeIn	string		Filter by source types.
 * @param	ownerIdsIn	string		Filter by entry owner.
 * @param	entryOperator	KalturaESearchEntryOperator		.
 * @param	entryCreatedAtGreaterThanOrEqual	int		Entry created at greater than or equal as Unix timestamp.
 * @param	entryCreatedAtLessThanOrEqual	int		Entry created at less than or equal as Unix timestamp.
 * @param	entryIdIn	string		.
 * @param	playbackTypeIn	string		.
 * @param	playbackContextIdsIn	string		filter by playback context ids.
 * @param	rootEntryIdIn	string		filter by root entry ids.
 * @param	errorCodeIn	string		filter by error code.
 * @param	playerVersionIn	string		filter by player version.
 * @param	ispIn	string		filter by isp.
 * @param	applicationVersionIn	string		filter by application version.
 * @param	nodeIdsIn	string		filter by node id.
 * @param	categoriesAncestorIdIn	string		filter by categories ancestor.
 * @param	hotspotIdIn	string		filter by hotspot id.
 * @param	crmIdIn	string		filter by crm id.
 * @param	playlistIdIn	string		filter by playlist id.
 * @param	domainIn	string		filter by domain.
 * @param	canonicalUrlIn	string		filter by canonical url.
 * @param	virtualEventIdIn	string		filter by virtual event id.
 * @param	originIn	string		filter by origin.
 * @param	uiConfIdIn	string		filter by ui conf id.
 * @param	cuePointIdIn	string		filter by cue point id.
 * @param	contextIdIn	string		filter by context ids.
 * @param	roleIn	string		filter by user role.
 * @param	industryIn	string		filter by industry.
 * @param	playbackModeIn	string		filter by playback mode.
 * @param	companyIn	string		filter by company.
 * @param	eventSessionContextIdIn	string		filter by event session context id.
 */
function KalturaReportInputFilter(){
	this.keywords = null;
	this.searchInTags = null;
	this.searchInAdminTags = null;
	this.categories = null;
	this.categoriesIdsIn = null;
	this.customVar1In = null;
	this.customVar2In = null;
	this.customVar3In = null;
	this.deviceIn = null;
	this.countryIn = null;
	this.regionIn = null;
	this.citiesIn = null;
	this.operatingSystemFamilyIn = null;
	this.operatingSystemIn = null;
	this.browserFamilyIn = null;
	this.browserIn = null;
	this.timeZoneOffset = null;
	this.interval = null;
	this.mediaTypeIn = null;
	this.sourceTypeIn = null;
	this.ownerIdsIn = null;
	this.entryOperator = null;
	this.entryCreatedAtGreaterThanOrEqual = null;
	this.entryCreatedAtLessThanOrEqual = null;
	this.entryIdIn = null;
	this.playbackTypeIn = null;
	this.playbackContextIdsIn = null;
	this.rootEntryIdIn = null;
	this.errorCodeIn = null;
	this.playerVersionIn = null;
	this.ispIn = null;
	this.applicationVersionIn = null;
	this.nodeIdsIn = null;
	this.categoriesAncestorIdIn = null;
	this.hotspotIdIn = null;
	this.crmIdIn = null;
	this.playlistIdIn = null;
	this.domainIn = null;
	this.canonicalUrlIn = null;
	this.virtualEventIdIn = null;
	this.originIn = null;
	this.uiConfIdIn = null;
	this.cuePointIdIn = null;
	this.contextIdIn = null;
	this.roleIn = null;
	this.industryIn = null;
	this.playbackModeIn = null;
	this.companyIn = null;
	this.eventSessionContextIdIn = null;
}
KalturaReportInputFilter.inheritsFrom (KalturaReportInputBaseFilter);


/**
 * @param	delimiter	string		.
 * @param	skipEmptyDates	bool		.
 * @param	useFriendlyHeadersNames	bool		.
 */
function KalturaReportResponseOptions(){
	this.delimiter = null;
	this.skipEmptyDates = null;
	this.useFriendlyHeadersNames = null;
}
KalturaReportResponseOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	reportTitle	string		.
 * @param	action	int		.
 * @param	reportType	string		.
 * @param	filter	KalturaReportInputFilter		.
 * @param	order	string		.
 * @param	objectIds	string		.
 * @param	responseOptions	KalturaReportResponseOptions		.
 */
function KalturaReportExportItem(){
	this.reportTitle = null;
	this.action = null;
	this.reportType = null;
	this.filter = null;
	this.order = null;
	this.objectIds = null;
	this.responseOptions = null;
}
KalturaReportExportItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	recipientEmail	string		.
 * @param	recipientName	string		.
 * @param	timeZoneOffset	int		Time zone offset in minutes (between client to UTC).
 * @param	reportItems	array		.
 * @param	reportsItemsGroup	string		.
 * @param	baseUrl	string		.
 */
function KalturaReportExportParams(){
	this.recipientEmail = null;
	this.recipientName = null;
	this.timeZoneOffset = null;
	this.reportItems = null;
	this.reportsItemsGroup = null;
	this.baseUrl = null;
}
KalturaReportExportParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	referenceJobId	int		.
 * @param	reportEmail	string		.
 */
function KalturaReportExportResponse(){
	this.referenceJobId = null;
	this.reportEmail = null;
}
KalturaReportExportResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	data	string		.
 */
function KalturaReportGraph(){
	this.id = null;
	this.data = null;
}
KalturaReportGraph.inheritsFrom (KalturaObjectBase);


/**
 * @param	columns	string		.
 * @param	results	array		.
 */
function KalturaReportResponse(){
	this.columns = null;
	this.results = null;
}
KalturaReportResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		 (readOnly).
 * @param	data	string		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaReportTable(){
	this.header = null;
	this.data = null;
	this.totalCount = null;
}
KalturaReportTable.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		.
 * @param	data	string		.
 */
function KalturaReportTotal(){
	this.header = null;
	this.data = null;
}
KalturaReportTotal.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		Impersonated partner id.
 * @param	ks	string		Kaltura API session.
 * @param	language	string		language.
 * @param	responseProfile	KalturaBaseResponseProfile		Response profile - this attribute will be automatically unset after every API call..
 */
function KalturaRequestConfiguration(){
	this.partnerId = null;
	this.ks = null;
	this.language = null;
	this.responseProfile = null;
}
KalturaRequestConfiguration.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated numeric identifier (readOnly).
 * @param	systemName	string		Unique system name.
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		Creation time as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Update time as Unix timestamp (In seconds) (readOnly).
 * @param	status	int		 (readOnly).
 * @param	version	int		 (readOnly).
 */
function KalturaResponseProfile(){
	this.id = null;
	this.systemName = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.version = null;
}
KalturaResponseProfile.inheritsFrom (KalturaDetachedResponseProfile);


/**
 * @param	limit	int		Maximum number of keys to recalculate.
 * @param	cachedObjectType	string		Class name.
 * @param	objectId	string		.
 * @param	startObjectKey	string		.
 * @param	endObjectKey	string		.
 * @param	jobCreatedAt	int		.
 * @param	isFirstLoop	bool		.
 */
function KalturaResponseProfileCacheRecalculateOptions(){
	this.limit = null;
	this.cachedObjectType = null;
	this.objectId = null;
	this.startObjectKey = null;
	this.endObjectKey = null;
	this.jobCreatedAt = null;
	this.isFirstLoop = null;
}
KalturaResponseProfileCacheRecalculateOptions.inheritsFrom (KalturaObjectBase);


/**
 * @param	lastObjectKey	string		Last recalculated id.
 * @param	recalculated	int		Number of recalculated keys.
 */
function KalturaResponseProfileCacheRecalculateResults(){
	this.lastObjectKey = null;
	this.recalculated = null;
}
KalturaResponseProfileCacheRecalculateResults.inheritsFrom (KalturaObjectBase);


/**
 * @param	serverUrl	string		.
 * @param	entryId	string		.
 * @param	token	string		.
 * @param	expiry	int		.
 * @param	serverName	string		.
 */
function KalturaRoomDetails(){
	this.serverUrl = null;
	this.entryId = null;
	this.token = null;
	this.expiry = null;
	this.serverName = null;
}
KalturaRoomDetails.inheritsFrom (KalturaObjectBase);


/**
 * @param	roomType	int		.
 * @param	broadcastEntryId	string		The entryId of the broadcast that the room streaming to.
 * @param	templateRoomEntryId	string		The entryId of the room where settings will be taken from.
 */
function KalturaRoomEntry(){
	this.roomType = null;
	this.broadcastEntryId = null;
	this.templateRoomEntryId = null;
}
KalturaRoomEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	name	string		.
 * @param	frequency	string		.
 * @param	until	int		.
 * @param	timeZone	string		TimeZone String.
 * @param	count	int		.
 * @param	interval	int		.
 * @param	bySecond	string		Comma separated numbers between 0 to 59.
 * @param	byMinute	string		Comma separated numbers between 0 to 59.
 * @param	byHour	string		Comma separated numbers between 0 to 23.
 * @param	byDay	string		Comma separated of KalturaScheduleEventRecurrenceDay
 *		 Each byDay value can also be preceded by a positive (+n) or negative (-n) integer.
 *		 If present, this indicates the nth occurrence of the specific day within the MONTHLY or YEARLY RRULE.
 *		 For example, within a MONTHLY rule, +1MO (or simply 1MO) represents the first Monday within the month, whereas -1MO represents the last Monday of the month.
 *		 If an integer modifier is not present, it means all days of this type within the specified frequency.
 *		 For example, within a MONTHLY rule, MO represents all Mondays within the month..
 * @param	byMonthDay	string		Comma separated of numbers between -31 to 31, excluding 0.
 *		 For example, -10 represents the tenth to the last day of the month..
 * @param	byYearDay	string		Comma separated of numbers between -366 to 366, excluding 0.
 *		 For example, -1 represents the last day of the year (December 31st) and -306 represents the 306th to the last day of the year (March 1st)..
 * @param	byWeekNumber	string		Comma separated of numbers between -53 to 53, excluding 0.
 *		 This corresponds to weeks according to week numbering.
 *		 A week is defined as a seven day period, starting on the day of the week defined to be the week start.
 *		 Week number one of the calendar year is the first week which contains at least four (4) days in that calendar year.
 *		 This rule part is only valid for YEARLY frequency.
 *		 For example, 3 represents the third week of the year..
 * @param	byMonth	string		Comma separated numbers between 1 to 12.
 * @param	byOffset	string		Comma separated of numbers between -366 to 366, excluding 0.
 *		 Corresponds to the nth occurrence within the set of events specified by the rule.
 *		 It must only be used in conjunction with another byrule part.
 *		 For example "the last work day of the month" could be represented as: frequency=MONTHLY;byDay=MO,TU,WE,TH,FR;byOffset=-1
 *		 Each byOffset value can include a positive (+n) or negative (-n) integer.
 *		 If present, this indicates the nth occurrence of the specific occurrence within the set of events specified by the rule..
 * @param	weekStartDay	string		.
 */
function KalturaScheduleEventRecurrence(){
	this.name = null;
	this.frequency = null;
	this.until = null;
	this.timeZone = null;
	this.count = null;
	this.interval = null;
	this.bySecond = null;
	this.byMinute = null;
	this.byHour = null;
	this.byDay = null;
	this.byMonthDay = null;
	this.byYearDay = null;
	this.byWeekNumber = null;
	this.byMonth = null;
	this.byOffset = null;
	this.weekStartDay = null;
}
KalturaScheduleEventRecurrence.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto-generated unique identifier (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	parentId	int		 (readOnly).
 * @param	summary	string		Defines a short summary or subject for the event.
 * @param	description	string		.
 * @param	status	int		 (readOnly).
 * @param	startDate	int		.
 * @param	endDate	int		.
 * @param	referenceId	string		.
 * @param	linkedTo	KalturaLinkedScheduleEvent		Contains the Id of the event that influences the timing of this event and the offset of time..
 * @param	linkedBy	string		An array of Schedule Event Ids that their start time depends on the end of the current..
 * @param	classificationType	int		.
 * @param	geoLatitude	float		Specifies the global position for the activity.
 * @param	geoLongitude	float		Specifies the global position for the activity.
 * @param	location	string		Defines the intended venue for the activity.
 * @param	organizer	string		.
 * @param	ownerId	string		.
 * @param	priority	int		The value for the priority field..
 * @param	sequence	int		Defines the revision sequence number..
 * @param	recurrenceType	int		.
 * @param	duration	int		Duration in seconds.
 * @param	contact	string		Used to represent contact information or alternately a reference to contact information..
 * @param	comment	string		Specifies non-processing information intended to provide a comment to the calendar user..
 * @param	tags	string		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update as Unix timestamp (In seconds) (readOnly).
 * @param	recurrence	KalturaScheduleEventRecurrence		.
 */
function KalturaScheduleEvent(){
	this.id = null;
	this.partnerId = null;
	this.parentId = null;
	this.summary = null;
	this.description = null;
	this.status = null;
	this.startDate = null;
	this.endDate = null;
	this.referenceId = null;
	this.linkedTo = null;
	this.linkedBy = null;
	this.classificationType = null;
	this.geoLatitude = null;
	this.geoLongitude = null;
	this.location = null;
	this.organizer = null;
	this.ownerId = null;
	this.priority = null;
	this.sequence = null;
	this.recurrenceType = null;
	this.duration = null;
	this.contact = null;
	this.comment = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.recurrence = null;
}
KalturaScheduleEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	eventId	int		 (insertOnly).
 * @param	resourceId	int		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update as Unix timestamp (In seconds) (readOnly).
 */
function KalturaScheduleEventResource(){
	this.eventId = null;
	this.resourceId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaScheduleEventResource.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto-generated unique identifier (readOnly).
 * @param	parentId	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		Defines a short name.
 * @param	systemName	string		Defines a unique system-name.
 * @param	description	string		.
 * @param	status	int		 (readOnly).
 * @param	tags	string		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update as Unix timestamp (In seconds) (readOnly).
 */
function KalturaScheduleResource(){
	this.id = null;
	this.parentId = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaScheduleResource.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	objectFilterEngineType	string		The type of engine to use to list objects using the given "objectFilter".
 * @param	objectFilter	KalturaFilter		A filter object (inherits KalturaFilter) that is used to list objects for scheduled tasks.
 * @param	objectTasks	array		A list of tasks to execute on the founded objects.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	lastExecutionStartedAt	int		.
 * @param	maxTotalCountAllowed	int		The maximum number of result count allowed to be processed by this profile per execution.
 */
function KalturaScheduledTaskProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.objectFilterEngineType = null;
	this.objectFilter = null;
	this.objectTasks = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.lastExecutionStartedAt = null;
	this.maxTotalCountAllowed = null;
}
KalturaScheduledTaskProfile.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaScope(){
}
KalturaScope.inheritsFrom (KalturaObjectBase);


/**
 * @param	keyWords	string		.
 * @param	searchSource	int		.
 * @param	mediaType	int		.
 * @param	extraData	string		Use this field to pass dynamic data for searching
 *		 For example - if you set this field to "mymovies_$partner_id"
 *		 The $partner_id will be automatically replcaed with your real partner Id.
 * @param	authData	string		.
 */
function KalturaSearch(){
	this.keyWords = null;
	this.searchSource = null;
	this.mediaType = null;
	this.extraData = null;
	this.authData = null;
}
KalturaSearch.inheritsFrom (KalturaObjectBase);


/**
 * @param	authData	string		The authentication data that further should be used for search.
 * @param	loginUrl	string		Login URL when user need to sign-in and authorize the search.
 * @param	message	string		Information when there was an error.
 */
function KalturaSearchAuthData(){
	this.authData = null;
	this.loginUrl = null;
	this.message = null;
}
KalturaSearchAuthData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	title	string		.
 * @param	thumbUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	sourceLink	string		.
 * @param	credit	string		.
 * @param	licenseType	int		.
 * @param	flashPlaybackType	string		.
 * @param	fileExt	string		.
 */
function KalturaSearchResult(){
	this.id = null;
	this.title = null;
	this.thumbUrl = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.sourceLink = null;
	this.credit = null;
	this.licenseType = null;
	this.flashPlaybackType = null;
	this.fileExt = null;
}
KalturaSearchResult.inheritsFrom (KalturaSearch);


/**
 * @param	objects	array		 (readOnly).
 * @param	needMediaInfo	bool		 (readOnly).
 */
function KalturaSearchResultResponse(){
	this.objects = null;
	this.needMediaInfo = null;
}
KalturaSearchResultResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	heartbeatTime	int		 (readOnly).
 * @param	name	string		serverNode name.
 * @param	systemName	string		serverNode uniqe system name.
 * @param	description	string		.
 * @param	hostName	string		serverNode hostName.
 * @param	status	int		 (readOnly).
 * @param	type	string		 (readOnly).
 * @param	tags	string		serverNode tags.
 * @param	dc	int		DC where the serverNode is located (readOnly).
 * @param	parentId	string		Id of the parent serverNode.
 * @param	environment	string		Environment.
 */
function KalturaServerNode(){
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.heartbeatTime = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.hostName = null;
	this.status = null;
	this.type = null;
	this.tags = null;
	this.dc = null;
	this.parentId = null;
	this.environment = null;
}
KalturaServerNode.inheritsFrom (KalturaObjectBase);


/**
 * @param	ks	string		 (readOnly).
 * @param	sessionType	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		 (readOnly).
 * @param	expiry	int		 (readOnly).
 * @param	privileges	string		 (readOnly).
 */
function KalturaSessionInfo(){
	this.ks = null;
	this.sessionType = null;
	this.partnerId = null;
	this.userId = null;
	this.expiry = null;
	this.privileges = null;
}
KalturaSessionInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	expiresAt	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		.
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	fullUrl	string		.
 * @param	status	int		.
 */
function KalturaShortLink(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.expiresAt = null;
	this.partnerId = null;
	this.userId = null;
	this.name = null;
	this.systemName = null;
	this.fullUrl = null;
	this.status = null;
}
KalturaShortLink.inheritsFrom (KalturaObjectBase);


/**
 * @param	actualFileSyncLocalPath	string		The translated path as used by the scheduler.
 * @param	assetId	string		.
 * @param	assetParamsId	int		.
 */
function KalturaSourceFileSyncDescriptor(){
	this.actualFileSyncLocalPath = null;
	this.assetId = null;
	this.assetParamsId = null;
}
KalturaSourceFileSyncDescriptor.inheritsFrom (KalturaFileSyncDescriptor);


/**
 * @param	id	int		 (readOnly).
 * @param	applicationType	string		.
 * @param	partnerId	int		 (insertOnly).
 * @param	domain	string		.
 * @param	status	int		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	redirectUrl	string		Redirect URL for a specific application type and (partner id or domain).
 * @param	data	string		.
 */
function KalturaSso(){
	this.id = null;
	this.applicationType = null;
	this.partnerId = null;
	this.domain = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.redirectUrl = null;
	this.data = null;
}
KalturaSso.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		 (readOnly).
 * @param	ks	string		 (readOnly).
 * @param	userId	string		 (readOnly).
 */
function KalturaStartWidgetSessionResponse(){
	this.partnerId = null;
	this.ks = null;
	this.userId = null;
}
KalturaStartWidgetSessionResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	eventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	uniqueViewer	string		the UV cookie - creates in the operational system and should be passed on ofr every event.
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id.
 * @param	currentPoint	int		the timestamp along the video when the event happend.
 * @param	duration	int		the duration of the video in milliseconds - will make it much faster than quering the db for each entry.
 * @param	userIp	string		will be retrieved from the request of the user (readOnly).
 * @param	processDuration	int		the time in milliseconds the event took.
 * @param	controlId	string		the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param	seek	bool		true if the user ever used seek in this session.
 * @param	newPoint	int		timestamp of the new point on the timeline of the video after the user seeks.
 * @param	referrer	string		the referrer of the client.
 * @param	isFirstInSession	bool		will indicate if the event is thrown for the first video in the session.
 * @param	applicationId	string		kaltura application name.
 * @param	contextId	int		.
 * @param	featureType	int		.
 */
function KalturaStatsEvent(){
	this.clientVer = null;
	this.eventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uniqueViewer = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.currentPoint = null;
	this.duration = null;
	this.userIp = null;
	this.processDuration = null;
	this.controlId = null;
	this.seek = null;
	this.newPoint = null;
	this.referrer = null;
	this.isFirstInSession = null;
	this.applicationId = null;
	this.contextId = null;
	this.featureType = null;
}
KalturaStatsEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	kmcEventActionPath	string		.
 * @param	kmcEventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id.
 * @param	userIp	string		will be retrieved from the request of the user (readOnly).
 */
function KalturaStatsKmcEvent(){
	this.clientVer = null;
	this.kmcEventActionPath = null;
	this.kmcEventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.userIp = null;
}
KalturaStatsKmcEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	desciption	string		.
 * @param	status	int		.
 * @param	protocol	string		.
 * @param	storageUrl	string		.
 * @param	storageBaseDir	string		.
 * @param	pathPrefix	string		.
 * @param	storageUsername	string		.
 * @param	storagePassword	string		.
 * @param	storageFtpPassiveMode	bool		.
 * @param	minFileSize	int		.
 * @param	maxFileSize	int		.
 * @param	flavorParamsIds	string		.
 * @param	maxConcurrentConnections	int		.
 * @param	pathManagerClass	string		.
 * @param	pathManagerParams	array		.
 * @param	trigger	int		No need to create enum for temp field.
 * @param	deliveryPriority	int		Delivery Priority.
 * @param	deliveryStatus	int		.
 * @param	readyBehavior	int		.
 * @param	allowAutoDelete	int		Flag sugnifying that the storage exported content should be deleted when soure entry is deleted.
 * @param	createFileLink	bool		Indicates to the local file transfer manager to create a link to the file instead of copying it.
 * @param	rules	array		Holds storage profile export rules.
 * @param	deliveryProfileIds	array		Delivery profile ids.
 * @param	privateKey	string		.
 * @param	publicKey	string		.
 * @param	passPhrase	string		.
 * @param	port	int		.
 * @param	shouldExportThumbs	bool		.
 * @param	packagerUrl	string		.
 * @param	exportPeriodically	bool		.
 * @param	excludedFlavorParamsIds	string		.
 * @param	shouldExportCaptions	bool		.
 * @param	excludedEntryTypes	string		.
 * @param	additionalInfo	array		.
 */
function KalturaStorageProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.desciption = null;
	this.status = null;
	this.protocol = null;
	this.storageUrl = null;
	this.storageBaseDir = null;
	this.pathPrefix = null;
	this.storageUsername = null;
	this.storagePassword = null;
	this.storageFtpPassiveMode = null;
	this.minFileSize = null;
	this.maxFileSize = null;
	this.flavorParamsIds = null;
	this.maxConcurrentConnections = null;
	this.pathManagerClass = null;
	this.pathManagerParams = null;
	this.trigger = null;
	this.deliveryPriority = null;
	this.deliveryStatus = null;
	this.readyBehavior = null;
	this.allowAutoDelete = null;
	this.createFileLink = null;
	this.rules = null;
	this.deliveryProfileIds = null;
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
	this.port = null;
	this.shouldExportThumbs = null;
	this.packagerUrl = null;
	this.exportPeriodically = null;
	this.excludedFlavorParamsIds = null;
	this.shouldExportCaptions = null;
	this.excludedEntryTypes = null;
	this.additionalInfo = null;
}
KalturaStorageProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	totalEntryCount	int		the total count of entries that should appear in the feed without flavor filtering.
 * @param	actualEntryCount	int		count of entries that will appear in the feed (including all relevant filters).
 * @param	requireTranscodingCount	int		count of entries that requires transcoding in order to be included in feed.
 */
function KalturaSyndicationFeedEntryCount(){
	this.totalEntryCount = null;
	this.actualEntryCount = null;
	this.requireTranscodingCount = null;
}
KalturaSyndicationFeedEntryCount.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		Partner ID.
 * @param	partnerName	string		Partner name.
 * @param	partnerStatus	int		Partner status.
 * @param	partnerPackage	int		Partner package.
 * @param	partnerCreatedAt	int		Partner creation date (Unix timestamp).
 * @param	views	int		Number of player loads in the specific date range.
 * @param	plays	int		Number of plays in the specific date range.
 * @param	entriesCount	int		Number of new entries created during specific date range.
 * @param	totalEntriesCount	int		Total number of entries.
 * @param	videoEntriesCount	int		Number of new video entries created during specific date range.
 * @param	imageEntriesCount	int		Number of new image entries created during specific date range.
 * @param	audioEntriesCount	int		Number of new audio entries created during specific date range.
 * @param	mixEntriesCount	int		Number of new mix entries created during specific date range.
 * @param	bandwidth	float		The total bandwidth usage during the given date range (in MB).
 * @param	totalStorage	float		The total storage consumption (in MB).
 * @param	storage	float		The change in storage consumption (new uploads) during the given date range (in MB).
 * @param	peakStorage	float		The peak amount of storage consumption during the given date range for the specific publisher.
 * @param	avgStorage	float		The average amount of storage consumption during the given date range for the specific publisher.
 * @param	combinedBandwidthStorage	float		The combined amount of bandwidth and storage consumed during the given date range for the specific publisher.
 * @param	deletedStorage	float		Amount of deleted storage in MB.
 * @param	transcodingUsage	float		Amount of transcoding usage in MB.
 */
function KalturaSystemPartnerUsageItem(){
	this.partnerId = null;
	this.partnerName = null;
	this.partnerStatus = null;
	this.partnerPackage = null;
	this.partnerCreatedAt = null;
	this.views = null;
	this.plays = null;
	this.entriesCount = null;
	this.totalEntriesCount = null;
	this.videoEntriesCount = null;
	this.imageEntriesCount = null;
	this.audioEntriesCount = null;
	this.mixEntriesCount = null;
	this.bandwidth = null;
	this.totalStorage = null;
	this.storage = null;
	this.peakStorage = null;
	this.avgStorage = null;
	this.combinedBandwidthStorage = null;
	this.deletedStorage = null;
	this.transcodingUsage = null;
}
KalturaSystemPartnerUsageItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	tag	string		 (readOnly).
 * @param	taggedObjectType	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	instanceCount	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaTag(){
	this.id = null;
	this.tag = null;
	this.taggedObjectType = null;
	this.partnerId = null;
	this.instanceCount = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaTag.inheritsFrom (KalturaObjectBase);


/**
 * @param	thumbParamsId	int		The Flavor Params used to create this Flavor Asset (insertOnly).
 * @param	width	int		The width of the Flavor Asset (readOnly).
 * @param	height	int		The height of the Flavor Asset (readOnly).
 * @param	status	int		The status of the asset (readOnly).
 */
function KalturaThumbAsset(){
	this.thumbParamsId = null;
	this.width = null;
	this.height = null;
	this.status = null;
}
KalturaThumbAsset.inheritsFrom (KalturaAsset);


/**
 * @param	cropType	int		.
 * @param	quality	int		.
 * @param	cropX	int		.
 * @param	cropY	int		.
 * @param	cropWidth	int		.
 * @param	cropHeight	int		.
 * @param	videoOffset	float		.
 * @param	width	int		.
 * @param	height	int		.
 * @param	scaleWidth	float		.
 * @param	scaleHeight	float		.
 * @param	backgroundColor	string		Hexadecimal value.
 * @param	sourceParamsId	int		Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation.
 * @param	format	string		The container format of the Flavor Params.
 * @param	density	int		The image density (dpi) for example: 72 or 96.
 * @param	stripProfiles	bool		Strip profiles and comments.
 * @param	videoOffsetInPercentage	int		Create thumbnail from the videoLengthpercentage second.
 * @param	interval	int		interval in seconds for creating thumbnail.
 */
function KalturaThumbParams(){
	this.cropType = null;
	this.quality = null;
	this.cropX = null;
	this.cropY = null;
	this.cropWidth = null;
	this.cropHeight = null;
	this.videoOffset = null;
	this.width = null;
	this.height = null;
	this.scaleWidth = null;
	this.scaleHeight = null;
	this.backgroundColor = null;
	this.sourceParamsId = null;
	this.format = null;
	this.density = null;
	this.stripProfiles = null;
	this.videoOffsetInPercentage = null;
	this.interval = null;
}
KalturaThumbParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	thumbParamsId	int		.
 * @param	thumbParamsVersion	string		.
 * @param	thumbAssetId	string		.
 * @param	thumbAssetVersion	string		.
 * @param	rotate	int		.
 */
function KalturaThumbParamsOutput(){
	this.thumbParamsId = null;
	this.thumbParamsVersion = null;
	this.thumbAssetId = null;
	this.thumbAssetVersion = null;
	this.rotate = null;
}
KalturaThumbParamsOutput.inheritsFrom (KalturaThumbParams);


/**
 * @param	accuracy	float		The accuracy of the transcript - values between 0 and 1.
 * @param	humanVerified	int		Was verified by human or machine.
 * @param	language	string		The language of the transcript.
 * @param	providerType	string		The provider of the transcript.
 */
function KalturaTranscriptAsset(){
	this.accuracy = null;
	this.humanVerified = null;
	this.language = null;
	this.providerType = null;
}
KalturaTranscriptAsset.inheritsFrom (KalturaAttachmentAsset);


/**
 * @param	tagname	string		.
 * @param	extension	string		.
 * @param	protocol	string		.
 * @param	format	string		.
 * @param	filename	string		.
 * @param	ppvmodule	string		.
 */
function KalturaTvinciDistributionTag(){
	this.tagname = null;
	this.extension = null;
	this.protocol = null;
	this.format = null;
	this.filename = null;
	this.ppvmodule = null;
}
KalturaTvinciDistributionTag.inheritsFrom (KalturaObjectBase);


/**
 * @param	v7id	int		.
 * @param	isApproved	bool		.
 * @param	translatePlugins	bool		.
 */
function KalturaUiConfV2Redirect(){
	this.v7id = null;
	this.isApproved = null;
	this.translatePlugins = null;
}
KalturaUiConfV2Redirect.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		Name of the uiConf, this is not a primary key.
 * @param	description	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	objType	int		.
 * @param	objTypeAsString	string		 (readOnly).
 * @param	width	int		.
 * @param	height	int		.
 * @param	htmlParams	string		.
 * @param	swfUrl	string		.
 * @param	confFilePath	string		 (readOnly).
 * @param	confFile	string		.
 * @param	confFileFeatures	string		.
 * @param	config	string		.
 * @param	confVars	string		.
 * @param	useCdn	bool		.
 * @param	tags	string		.
 * @param	swfUrlVersion	string		.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	creationMode	int		.
 * @param	html5Url	string		.
 * @param	version	string		UiConf version (readOnly).
 * @param	partnerTags	string		.
 * @param	v2Redirect	KalturaUiConfV2Redirect		.
 */
function KalturaUiConf(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.objType = null;
	this.objTypeAsString = null;
	this.width = null;
	this.height = null;
	this.htmlParams = null;
	this.swfUrl = null;
	this.confFilePath = null;
	this.confFile = null;
	this.confFileFeatures = null;
	this.config = null;
	this.confVars = null;
	this.useCdn = null;
	this.tags = null;
	this.swfUrlVersion = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.creationMode = null;
	this.html5Url = null;
	this.version = null;
	this.partnerTags = null;
	this.v2Redirect = null;
}
KalturaUiConf.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	int		UiConf Type.
 * @param	versions	array		Available versions.
 * @param	directory	string		The direcotry this type is saved at.
 * @param	filename	string		Filename for this UiConf type.
 */
function KalturaUiConfTypeInfo(){
	this.type = null;
	this.versions = null;
	this.directory = null;
	this.filename = null;
}
KalturaUiConfTypeInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	uploadTokenId	string		.
 * @param	fileSize	int		.
 * @param	errorCode	int		.
 * @param	errorDescription	string		.
 */
function KalturaUploadResponse(){
	this.uploadTokenId = null;
	this.fileSize = null;
	this.errorCode = null;
	this.errorDescription = null;
}
KalturaUploadResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Upload token unique ID (readOnly).
 * @param	partnerId	int		Partner ID of the upload token (readOnly).
 * @param	userId	string		User id for the upload token (readOnly).
 * @param	status	int		Status of the upload token (readOnly).
 * @param	fileName	string		Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	fileSize	float		File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	uploadedFileSize	float		Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	uploadUrl	string		Upload url - to explicitly determine to which domain to address the uploadToken->upload call (readOnly).
 * @param	autoFinalize	int		autoFinalize - Should the upload be finalized once the file size on disk matches the file size reported when adding the upload token. (insertOnly).
 * @param	attachedObjectType	string		The type of the object this token is attached to. (readOnly).
 * @param	attachedObjectId	string		The id of the object this token is attached to. (readOnly).
 */
function KalturaUploadToken(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.status = null;
	this.fileName = null;
	this.fileSize = null;
	this.uploadedFileSize = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.uploadUrl = null;
	this.autoFinalize = null;
	this.attachedObjectType = null;
	this.attachedObjectId = null;
}
KalturaUploadToken.inheritsFrom (KalturaObjectBase);


/**
 * @param	userId	string		 (insertOnly).
 */
function KalturaUserAppRole(){
	this.userId = null;
}
KalturaUserAppRole.inheritsFrom (KalturaAppRole);


/**
 * @param	id	int		unique auto-generated identifier (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	userId	string		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	status	string		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	type	string		 (readOnly).
 */
function KalturaUserEntry(){
	this.id = null;
	this.entryId = null;
	this.userId = null;
	this.partnerId = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.type = null;
}
KalturaUserEntry.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	loginEmail	string		.
 */
function KalturaUserLoginData(){
	this.id = null;
	this.loginEmail = null;
}
KalturaUserLoginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	permissionNames	string		.
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaUserRole(){
	this.id = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.permissionNames = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaUserRole.inheritsFrom (KalturaObjectBase);


/**
 * @param	rank	int		.
 * @param	userId	string		.
 * @param	score	int		.
 */
function KalturaUserScoreProperties(){
	this.rank = null;
	this.userId = null;
	this.score = null;
}
KalturaUserScoreProperties.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		Partner ID.
 * @param	partnerName	string		Partner name.
 * @param	partnerStatus	int		Partner status.
 * @param	partnerPackage	int		Partner package.
 * @param	partnerCreatedAt	int		Partner creation date (Unix timestamp).
 * @param	views	int		Number of player loads in the specific date range.
 * @param	plays	int		Number of plays in the specific date range.
 * @param	entriesCount	int		Number of new entries created during specific date range.
 * @param	totalEntriesCount	int		Total number of entries.
 * @param	videoEntriesCount	int		Number of new video entries created during specific date range.
 * @param	imageEntriesCount	int		Number of new image entries created during specific date range.
 * @param	audioEntriesCount	int		Number of new audio entries created during specific date range.
 * @param	mixEntriesCount	int		Number of new mix entries created during specific date range.
 * @param	bandwidth	float		The total bandwidth usage during the given date range (in MB).
 * @param	totalStorage	float		The total storage consumption (in MB).
 * @param	storage	float		The added storage consumption (new uploads) during the given date range (in MB).
 * @param	deletedStorage	float		The deleted storage consumption (new uploads) during the given date range (in MB).
 * @param	peakStorage	float		The peak amount of storage consumption during the given date range for the specific publisher.
 * @param	avgStorage	float		The average amount of storage consumption during the given date range for the specific publisher.
 * @param	combinedStorageBandwidth	float		The combined amount of bandwidth and storage consumed during the given date range for the specific publisher.
 * @param	transcodingUsage	float		Amount of transcoding usage in MB.
 * @param	dateId	string		TGhe date at which the report was taken - Unix Timestamp.
 */
function KalturaVarPartnerUsageItem(){
	this.partnerId = null;
	this.partnerName = null;
	this.partnerStatus = null;
	this.partnerPackage = null;
	this.partnerCreatedAt = null;
	this.views = null;
	this.plays = null;
	this.entriesCount = null;
	this.totalEntriesCount = null;
	this.videoEntriesCount = null;
	this.imageEntriesCount = null;
	this.audioEntriesCount = null;
	this.mixEntriesCount = null;
	this.bandwidth = null;
	this.totalStorage = null;
	this.storage = null;
	this.deletedStorage = null;
	this.peakStorage = null;
	this.avgStorage = null;
	this.combinedStorageBandwidth = null;
	this.transcodingUsage = null;
	this.dateId = null;
}
KalturaVarPartnerUsageItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	pricePerUnit	float		.
 * @param	priceFunction	string		.
 */
function KalturaVendorCatalogItemPricing(){
	this.pricePerUnit = null;
	this.priceFunction = null;
}
KalturaVendorCatalogItemPricing.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	vendorPartnerId	int		.
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	serviceType	int		.
 * @param	serviceFeature	int		 (readOnly).
 * @param	turnAroundTime	int		.
 * @param	pricing	KalturaVendorCatalogItemPricing		.
 * @param	engineType	string		Property showing the catalog item's engine type, in case a vendor can offer the same service via different engines..
 * @param	sourceLanguage	string		.
 * @param	allowResubmission	bool		.
 * @param	payPerUse	bool		.
 * @param	vendorData	string		.
 * @param	stage	int		.
 * @param	lastBulkUpdateId	int		.
 * @param	contract	string		.
 * @param	createdBy	string		.
 * @param	notes	string		.
 * @param	partnerId	int		.
 * @param	defaultReachProfileId	int		.
 * @param	adminTagsToExclude	string		.
 */
function KalturaVendorCatalogItem(){
	this.id = null;
	this.vendorPartnerId = null;
	this.name = null;
	this.systemName = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.serviceType = null;
	this.serviceFeature = null;
	this.turnAroundTime = null;
	this.pricing = null;
	this.engineType = null;
	this.sourceLanguage = null;
	this.allowResubmission = null;
	this.payPerUse = null;
	this.vendorData = null;
	this.stage = null;
	this.lastBulkUpdateId = null;
	this.contract = null;
	this.createdBy = null;
	this.notes = null;
	this.partnerId = null;
	this.defaultReachProfileId = null;
	this.adminTagsToExclude = null;
}
KalturaVendorCatalogItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	status	int		 (readOnly).
 * @param	tags	string		.
 * @param	attendeesGroupIds	string		.
 * @param	adminsGroupIds	string		.
 * @param	registrationScheduleEventId	int		.
 * @param	agendaScheduleEventId	int		.
 * @param	mainEventScheduleEventId	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	deletionDueDate	int		.
 * @param	registrationFormSchema	string		JSON-Schema of the Registration Form.
 * @param	eventUrl	string		The Virtual Event Url.
 * @param	webhookRegistrationToken	string		The Virtual Event WebHook registration token.
 */
function KalturaVirtualEvent(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.status = null;
	this.tags = null;
	this.attendeesGroupIds = null;
	this.adminsGroupIds = null;
	this.registrationScheduleEventId = null;
	this.agendaScheduleEventId = null;
	this.mainEventScheduleEventId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletionDueDate = null;
	this.registrationFormSchema = null;
	this.eventUrl = null;
	this.webhookRegistrationToken = null;
}
KalturaVirtualEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	engineType	string		.
 * @param	entryFilter	KalturaBaseEntryFilter		.
 * @param	actionIfInfected	int		.
 */
function KalturaVirusScanProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.status = null;
	this.engineType = null;
	this.entryFilter = null;
	this.actionIfInfected = null;
}
KalturaVirusScanProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	webexCategory	string		.
 * @param	enableRecordingUpload	int		.
 * @param	enableTranscription	int		.
 * @param	userMatchingMode	int		.
 * @param	userPostfix	string		.
 * @param	webexAccountDescription	string		.
 * @param	groupParticipationType	int		.
 * @param	optOutGroupNames	string		.
 * @param	optInGroupNames	string		.
 * @param	siteUrl	string		.
 */
function KalturaWebexAPIIntegrationSetting(){
	this.webexCategory = null;
	this.enableRecordingUpload = null;
	this.enableTranscription = null;
	this.userMatchingMode = null;
	this.userPostfix = null;
	this.webexAccountDescription = null;
	this.groupParticipationType = null;
	this.optOutGroupNames = null;
	this.optInGroupNames = null;
	this.siteUrl = null;
}
KalturaWebexAPIIntegrationSetting.inheritsFrom (KalturaIntegrationSetting);


/**
 * @param	id	string		 (readOnly).
 * @param	sourceWidgetId	string		.
 * @param	rootWidgetId	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	entryId	string		.
 * @param	uiConfId	int		.
 * @param	securityType	int		.
 * @param	securityPolicy	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string.
 * @param	widgetHTML	string		 (readOnly).
 * @param	enforceEntitlement	bool		Should enforce entitlement on feed entries.
 * @param	privacyContext	string		Set privacy context for search entries that assiged to private and public categories within a category privacy context..
 * @param	addEmbedHtml5Support	bool		Addes the HTML5 script line to the widget's embed code.
 * @param	roles	string		.
 * @param	privileges	string		.
 */
function KalturaWidget(){
	this.id = null;
	this.sourceWidgetId = null;
	this.rootWidgetId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uiConfId = null;
	this.securityType = null;
	this.securityPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.widgetHTML = null;
	this.enforceEntitlement = null;
	this.privacyContext = null;
	this.addEmbedHtml5Support = null;
	this.roles = null;
	this.privileges = null;
}
KalturaWidget.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idGreaterThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	partnerIdNotIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	executionAttemptsGreaterThanOrEqual	int		.
 * @param	executionAttemptsLessThanOrEqual	int		.
 * @param	lockVersionGreaterThanOrEqual	int		.
 * @param	lockVersionLessThanOrEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	jobTypeEqual	string		.
 * @param	jobTypeIn	string		.
 * @param	jobTypeNotIn	string		.
 * @param	jobSubTypeEqual	int		.
 * @param	jobSubTypeIn	string		.
 * @param	jobSubTypeNotIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	priorityGreaterThanOrEqual	int		.
 * @param	priorityLessThanOrEqual	int		.
 * @param	priorityEqual	int		.
 * @param	priorityIn	string		.
 * @param	priorityNotIn	string		.
 * @param	batchVersionGreaterThanOrEqual	int		.
 * @param	batchVersionLessThanOrEqual	int		.
 * @param	batchVersionEqual	int		.
 * @param	queueTimeGreaterThanOrEqual	int		.
 * @param	queueTimeLessThanOrEqual	int		.
 * @param	finishTimeGreaterThanOrEqual	int		.
 * @param	finishTimeLessThanOrEqual	int		.
 * @param	errTypeEqual	int		.
 * @param	errTypeIn	string		.
 * @param	errTypeNotIn	string		.
 * @param	errNumberEqual	int		.
 * @param	errNumberIn	string		.
 * @param	errNumberNotIn	string		.
 * @param	estimatedEffortLessThan	int		.
 * @param	estimatedEffortGreaterThan	int		.
 * @param	urgencyLessThanOrEqual	int		.
 * @param	urgencyGreaterThanOrEqual	int		.
 */
function KalturaBatchJobBaseFilter(){
	this.idEqual = null;
	this.idGreaterThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.partnerIdNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.executionAttemptsGreaterThanOrEqual = null;
	this.executionAttemptsLessThanOrEqual = null;
	this.lockVersionGreaterThanOrEqual = null;
	this.lockVersionLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.jobTypeEqual = null;
	this.jobTypeIn = null;
	this.jobTypeNotIn = null;
	this.jobSubTypeEqual = null;
	this.jobSubTypeIn = null;
	this.jobSubTypeNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityNotIn = null;
	this.batchVersionGreaterThanOrEqual = null;
	this.batchVersionLessThanOrEqual = null;
	this.batchVersionEqual = null;
	this.queueTimeGreaterThanOrEqual = null;
	this.queueTimeLessThanOrEqual = null;
	this.finishTimeGreaterThanOrEqual = null;
	this.finishTimeLessThanOrEqual = null;
	this.errTypeEqual = null;
	this.errTypeIn = null;
	this.errTypeNotIn = null;
	this.errNumberEqual = null;
	this.errNumberIn = null;
	this.errNumberNotIn = null;
	this.estimatedEffortLessThan = null;
	this.estimatedEffortGreaterThan = null;
	this.urgencyLessThanOrEqual = null;
	this.urgencyGreaterThanOrEqual = null;
}
KalturaBatchJobBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBatchJobFilter(){
}
KalturaBatchJobFilter.inheritsFrom (KalturaBatchJobBaseFilter);


/**
 * @param	language	string		.
 * @param	label	string		.
 * @param	filePath	string		.
 * @param	remoteId	string		.
 * @param	action	int		.
 * @param	version	string		.
 * @param	assetId	string		.
 */
function KalturaYouTubeApiCaptionDistributionInfo(){
	this.language = null;
	this.label = null;
	this.filePath = null;
	this.remoteId = null;
	this.action = null;
	this.version = null;
	this.assetId = null;
}
KalturaYouTubeApiCaptionDistributionInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	zoomCategory	string		.
 * @param	enableRecordingUpload	int		.
 * @param	zoomUserMatchingMode	int		.
 * @param	zoomUserPostfix	string		.
 * @param	zoomWebinarCategory	string		.
 * @param	enableWebinarUploads	int		.
 * @param	enableZoomTranscription	int		.
 * @param	zoomAccountDescription	string		.
 * @param	optOutGroupNames	string		.
 * @param	optInGroupNames	string		.
 * @param	groupParticipationType	int		.
 * @param	handleCohostsMode	int		.
 * @param	handleAlternativeHostsMode	int		.
 * @param	userSearchMethod	int		.
 */
function KalturaZoomIntegrationSetting(){
	this.zoomCategory = null;
	this.enableRecordingUpload = null;
	this.zoomUserMatchingMode = null;
	this.zoomUserPostfix = null;
	this.zoomWebinarCategory = null;
	this.enableWebinarUploads = null;
	this.enableZoomTranscription = null;
	this.zoomAccountDescription = null;
	this.optOutGroupNames = null;
	this.optInGroupNames = null;
	this.groupParticipationType = null;
	this.handleCohostsMode = null;
	this.handleAlternativeHostsMode = null;
	this.userSearchMethod = null;
}
KalturaZoomIntegrationSetting.inheritsFrom (KalturaIntegrationSetting);


/**
 * @param	uuid	string		.
 * @param	meetingId	string		.
 * @param	accountId	string		.
 * @param	hostId	string		.
 * @param	topic	string		.
 * @param	meetingStartTime	string		.
 * @param	type	int		.
 */
function KalturaZoomMeetingMetadata(){
	this.uuid = null;
	this.meetingId = null;
	this.accountId = null;
	this.hostId = null;
	this.topic = null;
	this.meetingStartTime = null;
	this.type = null;
}
KalturaZoomMeetingMetadata.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	recordingStart	string		.
 * @param	fileType	int		.
 * @param	downloadUrl	string		.
 * @param	fileExtension	string		.
 * @param	downloadToken	string		.
 */
function KalturaZoomRecordingFile(){
	this.id = null;
	this.recordingStart = null;
	this.fileType = null;
	this.downloadUrl = null;
	this.fileExtension = null;
	this.downloadToken = null;
}
KalturaZoomRecordingFile.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaABCScreenersWatermarkCondition(){
}
KalturaABCScreenersWatermarkCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaAccessControlBlockAction(){
}
KalturaAccessControlBlockAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	policyId	int		Drm policy id.
 */
function KalturaAccessControlDrmPolicyAction(){
	this.policyId = null;
}
KalturaAccessControlDrmPolicyAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	deliveryProfileIds	string		Comma separated list of delivery profile ids.
 * @param	isBlockedList	bool		.
 */
function KalturaAccessControlLimitDeliveryProfilesAction(){
	this.deliveryProfileIds = null;
	this.isBlockedList = null;
}
KalturaAccessControlLimitDeliveryProfilesAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	flavorParamsIds	string		Comma separated list of flavor ids.
 * @param	isBlockedList	bool		.
 */
function KalturaAccessControlLimitFlavorsAction(){
	this.flavorParamsIds = null;
	this.isBlockedList = null;
}
KalturaAccessControlLimitFlavorsAction.inheritsFrom (KalturaRuleAction);


/**
 */
function KalturaAccessControlLimitThumbnailCaptureAction(){
}
KalturaAccessControlLimitThumbnailCaptureAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAccessControlListResponse(){
	this.objects = null;
}
KalturaAccessControlListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	pattern	string		Request host regex pattern.
 * @param	replacement	string		Request host regex replacment.
 * @param	replacmenServerNodeId	int		serverNodeId to generate replacment host from.
 * @param	checkAliveTimeoutMs	int		Set this value if you want to check if the server is accessible before redirecting traffic to it (this value is in milliseconds).
 */
function KalturaAccessControlModifyRequestHostRegexAction(){
	this.pattern = null;
	this.replacement = null;
	this.replacmenServerNodeId = null;
	this.checkAliveTimeoutMs = null;
}
KalturaAccessControlModifyRequestHostRegexAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	limit	int		.
 */
function KalturaAccessControlPreviewAction(){
	this.limit = null;
}
KalturaAccessControlPreviewAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAccessControlProfileListResponse(){
	this.objects = null;
}
KalturaAccessControlProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	edgeServerIds	string		Comma separated list of edge servers playBack should be done from.
 * @param	seamlessFallbackEnabled	int		.
 */
function KalturaAccessControlServeRemoteEdgeServerAction(){
	this.edgeServerIds = null;
	this.seamlessFallbackEnabled = null;
}
KalturaAccessControlServeRemoteEdgeServerAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	host	string		.
 * @param	port	int		.
 * @param	protocol	string		.
 * @param	username	string		.
 * @param	password	string		.
 */
function KalturaActivitiBusinessProcessServer(){
	this.host = null;
	this.port = null;
	this.protocol = null;
	this.username = null;
	this.password = null;
}
KalturaActivitiBusinessProcessServer.inheritsFrom (KalturaBusinessProcessServer);


/**
 * @param	protocolType	string		 (insertOnly).
 * @param	sourceUrl	string		.
 * @param	adType	string		.
 * @param	title	string		.
 * @param	endTime	int		.
 * @param	duration	int		Duration in milliseconds.
 */
function KalturaAdCuePoint(){
	this.protocolType = null;
	this.sourceUrl = null;
	this.adType = null;
	this.title = null;
	this.endTime = null;
	this.duration = null;
}
KalturaAdCuePoint.inheritsFrom (KalturaCuePoint);


/**
 * @param	catalogItemIds	string		Catalog Item Id.
 */
function KalturaAddEntryVendorTaskAction(){
	this.catalogItemIds = null;
}
KalturaAddEntryVendorTaskAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	filesPermissionInS3	string		.
 * @param	s3Region	string		.
 * @param	sseType	string		.
 * @param	sseKmsKeyId	string		.
 * @param	signatureType	string		.
 * @param	endPoint	string		.
 */
function KalturaAmazonS3StorageProfile(){
	this.filesPermissionInS3 = null;
	this.s3Region = null;
	this.sseType = null;
	this.sseKmsKeyId = null;
	this.signatureType = null;
	this.endPoint = null;
}
KalturaAmazonS3StorageProfile.inheritsFrom (KalturaStorageProfile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAnnotationListResponse(){
	this.objects = null;
}
KalturaAnnotationListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	parentId	string		 (insertOnly).
 * @param	quizUserEntryId	string		 (insertOnly).
 * @param	answerKey	string		.
 * @param	openAnswer	string		.
 * @param	isCorrect	int		 (readOnly).
 * @param	correctAnswerKeys	array		Array of string (readOnly).
 * @param	explanation	string		 (readOnly).
 * @param	feedback	string		.
 */
function KalturaAnswerCuePoint(){
	this.parentId = null;
	this.quizUserEntryId = null;
	this.answerKey = null;
	this.openAnswer = null;
	this.isCorrect = null;
	this.correctAnswerKeys = null;
	this.explanation = null;
	this.feedback = null;
}
KalturaAnswerCuePoint.inheritsFrom (KalturaCuePoint);


/**
 * @param	service	string		.
 * @param	action	string		.
 */
function KalturaApiActionPermissionItem(){
	this.service = null;
	this.action = null;
}
KalturaApiActionPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	object	string		.
 * @param	parameter	string		.
 * @param	action	string		.
 */
function KalturaApiParameterPermissionItem(){
	this.object = null;
	this.parameter = null;
	this.action = null;
}
KalturaApiParameterPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	sessionUserIdEqual	string		.
 */
function KalturaAppTokenBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.sessionUserIdEqual = null;
}
KalturaAppTokenBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAppTokenListResponse(){
	this.objects = null;
}
KalturaAppTokenListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	aspectRatio	float		.
 */
function KalturaAspectRatioCropAttributes(){
	this.aspectRatio = null;
}
KalturaAspectRatioCropAttributes.inheritsFrom (KalturaDimensionsAttributes);


/**
 * @param	aspectRatio	float		.
 */
function KalturaAspectRatioScaleAttributes(){
	this.aspectRatio = null;
}
KalturaAspectRatioScaleAttributes.inheritsFrom (KalturaDimensionsAttributes);


/**
 * @param	propertyName	string		The property name to look for, this will match to a getter on the asset object.
 *		 Should be camelCase naming convention (defining "myPropertyName" will look for getMyPropertyName()).
 * @param	propertyValue	string		The value to compare.
 */
function KalturaAssetDistributionPropertyCondition(){
	this.propertyName = null;
	this.propertyValue = null;
}
KalturaAssetDistributionPropertyCondition.inheritsFrom (KalturaAssetDistributionCondition);


/**
 * @param	assetParamsId	int		.
 * @param	assetParamsVersion	string		.
 * @param	assetId	string		.
 * @param	assetVersion	string		.
 * @param	readyBehavior	int		.
 * @param	format	string		The container format of the Flavor Params.
 */
function KalturaAssetParamsOutput(){
	this.assetParamsId = null;
	this.assetParamsVersion = null;
	this.assetId = null;
	this.assetVersion = null;
	this.readyBehavior = null;
	this.format = null;
}
KalturaAssetParamsOutput.inheritsFrom (KalturaAssetParams);


/**
 * @param	properties	array		Array of key/value objects that holds the property and the value to find and compare on an asset object.
 */
function KalturaAssetPropertiesCompareCondition(){
	this.properties = null;
}
KalturaAssetPropertiesCompareCondition.inheritsFrom (KalturaCondition);


/**
 * @param	assetTypes	string		.
 */
function KalturaAssetTypeCondition(){
	this.assetTypes = null;
}
KalturaAssetTypeCondition.inheritsFrom (KalturaCondition);


/**
 * @param	resources	array		Array of resources associated with asset params ids.
 */
function KalturaAssetsParamsResourceContainers(){
	this.resources = null;
}
KalturaAssetsParamsResourceContainers.inheritsFrom (KalturaResource);


/**
 */
function KalturaAttUverseDistributionProvider(){
}
KalturaAttUverseDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAttachmentAssetListResponse(){
	this.objects = null;
}
KalturaAttachmentAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaAttachmentServeOptions(){
}
KalturaAttachmentServeOptions.inheritsFrom (KalturaAssetServeOptions);


/**
 * @param	value	string		.
 */
function KalturaAttributeCondition(){
	this.value = null;
}
KalturaAttributeCondition.inheritsFrom (KalturaSearchItem);


/**
 * @param	changedItems	array		.
 */
function KalturaAuditTrailChangeInfo(){
	this.changedItems = null;
}
KalturaAuditTrailChangeInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	type	int		.
 */
function KalturaAuditTrailChangeXmlNode(){
	this.type = null;
}
KalturaAuditTrailChangeXmlNode.inheritsFrom (KalturaAuditTrailChangeItem);


/**
 * @param	version	string		.
 * @param	objectSubType	int		.
 * @param	dc	int		.
 * @param	original	bool		.
 * @param	fileType	int		.
 */
function KalturaAuditTrailFileSyncCreateInfo(){
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.fileType = null;
}
KalturaAuditTrailFileSyncCreateInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaAuditTrailListResponse(){
	this.objects = null;
}
KalturaAuditTrailListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	info	string		.
 */
function KalturaAuditTrailTextInfo(){
	this.info = null;
}
KalturaAuditTrailTextInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	privileges	array		The privelege needed to remove the restriction.
 */
function KalturaAuthenticatedCondition(){
	this.privileges = null;
}
KalturaAuthenticatedCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaAvnDistributionProvider(){
}
KalturaAvnDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	itemType	string		.
 * @param	rule	string		condition rule (include/exclude).
 */
function KalturaBaseEntryCloneOptionComponent(){
	this.itemType = null;
	this.rule = null;
}
KalturaBaseEntryCloneOptionComponent.inheritsFrom (KalturaBaseEntryCloneOptionItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBaseEntryListResponse(){
	this.objects = null;
}
KalturaBaseEntryListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaBaseSyndicationFeedBaseFilter(){
}
KalturaBaseSyndicationFeedBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBaseSyndicationFeedListResponse(){
	this.objects = null;
}
KalturaBaseSyndicationFeedListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBatchJobListResponse(){
	this.objects = null;
}
KalturaBatchJobListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	relatedObjectTypeIn	string		.
 * @param	relatedObjectTypeEqual	string		.
 * @param	eventTypeIn	string		.
 * @param	objectIdIn	string		.
 */
function KalturaBeaconBaseFilter(){
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.relatedObjectTypeIn = null;
	this.relatedObjectTypeEqual = null;
	this.eventTypeIn = null;
	this.objectIdIn = null;
}
KalturaBeaconBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	externalElasticQueryObject	string		.
 * @param	indexTypeEqual	string		.
 */
function KalturaBeaconEnhanceFilter(){
	this.externalElasticQueryObject = null;
	this.indexTypeEqual = null;
}
KalturaBeaconEnhanceFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBeaconListResponse(){
	this.objects = null;
}
KalturaBeaconListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaBeaconScheduledResourceOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaBeaconScheduledResourceOperator.inheritsFrom (KalturaBeaconScheduledResourceBaseItem);


/**
 * @param	searchOperator	KalturaBeaconScheduledResourceOperator		.
 * @param	orderBy	KalturaBeaconSearchScheduledResourceOrderBy		.
 */
function KalturaBeaconScheduledResourceSearchParams(){
	this.searchOperator = null;
	this.orderBy = null;
}
KalturaBeaconScheduledResourceSearchParams.inheritsFrom (KalturaBeaconSearchParams);


/**
 */
function KalturaBlackoutScheduleEvent(){
}
KalturaBlackoutScheduleEvent.inheritsFrom (KalturaScheduleEvent);


/**
 * @param	booleanEventNotificationIds	string		The boolean event notification ids.
 */
function KalturaBooleanEventNotificationCondition(){
	this.booleanEventNotificationIds = null;
}
KalturaBooleanEventNotificationCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaBooleanNotificationTemplate(){
}
KalturaBooleanNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 * @param	templateId	int		KalturaBusinessProcessNotificationTemplate id.
 * @param	businessProcessId	string		.
 * @param	caseId	string		Execution unique id.
 */
function KalturaBpmEventNotificationIntegrationJobTriggerData(){
	this.templateId = null;
	this.businessProcessId = null;
	this.caseId = null;
}
KalturaBpmEventNotificationIntegrationJobTriggerData.inheritsFrom (KalturaIntegrationJobTriggerData);


/**
 * @param	entryIds	string		Comma separated list of entry ids.
 * @param	flavorParamsId	int		Flavor params id to use for conversion.
 * @param	puserId	string		The id of the requesting user.
 */
function KalturaBulkDownloadJobData(){
	this.entryIds = null;
	this.flavorParamsId = null;
	this.puserId = null;
}
KalturaBulkDownloadJobData.inheritsFrom (KalturaJobData);


/**
 * @param	filter	KalturaFilter		Filter for extracting the objects list to upload.
 */
function KalturaBulkServiceFilterDataBase(){
	this.filter = null;
}
KalturaBulkServiceFilterDataBase.inheritsFrom (KalturaBulkServiceData);


/**
 * @param	uploadedOnGreaterThanOrEqual	int		.
 * @param	uploadedOnLessThanOrEqual	int		.
 * @param	uploadedOnEqual	int		.
 * @param	statusIn	string		.
 * @param	statusEqual	int		.
 * @param	bulkUploadObjectTypeEqual	string		.
 * @param	bulkUploadObjectTypeIn	string		.
 */
function KalturaBulkUploadBaseFilter(){
	this.uploadedOnGreaterThanOrEqual = null;
	this.uploadedOnLessThanOrEqual = null;
	this.uploadedOnEqual = null;
	this.statusIn = null;
	this.statusEqual = null;
	this.bulkUploadObjectTypeEqual = null;
	this.bulkUploadObjectTypeIn = null;
}
KalturaBulkUploadBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBulkUploadCategoryData(){
}
KalturaBulkUploadCategoryData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 */
function KalturaBulkUploadCategoryEntryData(){
}
KalturaBulkUploadCategoryEntryData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 */
function KalturaBulkUploadCategoryUserData(){
}
KalturaBulkUploadCategoryUserData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 * @param	conversionProfileId	int		Selected profile id for all bulk entries.
 */
function KalturaBulkUploadEntryData(){
	this.conversionProfileId = null;
}
KalturaBulkUploadEntryData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 * @param	userId	string		 (readOnly).
 * @param	uploadedBy	string		The screen name of the user (readOnly).
 * @param	conversionProfileId	int		Selected profile id for all bulk entries (readOnly).
 * @param	resultsFileLocalPath	string		Created by the API (readOnly).
 * @param	resultsFileUrl	string		Created by the API (readOnly).
 * @param	numOfEntries	int		Number of created entries (readOnly).
 * @param	numOfObjects	int		Number of created objects (readOnly).
 * @param	filePath	string		The bulk upload file path (readOnly).
 * @param	bulkUploadObjectType	string		Type of object for bulk upload (readOnly).
 * @param	fileName	string		Friendly name of the file, used to be recognized later in the logs..
 * @param	objectData	KalturaBulkUploadObjectData		Data pertaining to the objects being uploaded (readOnly).
 * @param	type	string		Type of bulk upload (readOnly).
 * @param	emailRecipients	string		Recipients of the email for bulk upload success/failure.
 * @param	numOfErrorObjects	int		Number of objects that finished on error status.
 * @param	privileges	string		privileges for the job.
 */
function KalturaBulkUploadJobData(){
	this.userId = null;
	this.uploadedBy = null;
	this.conversionProfileId = null;
	this.resultsFileLocalPath = null;
	this.resultsFileUrl = null;
	this.numOfEntries = null;
	this.numOfObjects = null;
	this.filePath = null;
	this.bulkUploadObjectType = null;
	this.fileName = null;
	this.objectData = null;
	this.type = null;
	this.emailRecipients = null;
	this.numOfErrorObjects = null;
	this.privileges = null;
}
KalturaBulkUploadJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBulkUploadListResponse(){
	this.objects = null;
}
KalturaBulkUploadListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	relativePath	string		.
 * @param	name	string		.
 * @param	referenceId	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	appearInList	int		.
 * @param	privacy	int		.
 * @param	inheritanceType	int		.
 * @param	userJoinPolicy	int		.
 * @param	defaultPermissionLevel	int		.
 * @param	owner	string		.
 * @param	contributionPolicy	int		.
 * @param	partnerSortValue	int		.
 * @param	moderation	bool		.
 */
function KalturaBulkUploadResultCategory(){
	this.relativePath = null;
	this.name = null;
	this.referenceId = null;
	this.description = null;
	this.tags = null;
	this.appearInList = null;
	this.privacy = null;
	this.inheritanceType = null;
	this.userJoinPolicy = null;
	this.defaultPermissionLevel = null;
	this.owner = null;
	this.contributionPolicy = null;
	this.partnerSortValue = null;
	this.moderation = null;
}
KalturaBulkUploadResultCategory.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	categoryId	int		.
 * @param	entryId	string		.
 */
function KalturaBulkUploadResultCategoryEntry(){
	this.categoryId = null;
	this.entryId = null;
}
KalturaBulkUploadResultCategoryEntry.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	categoryId	int		.
 * @param	categoryReferenceId	string		.
 * @param	userId	string		.
 * @param	permissionLevel	int		.
 * @param	updateMethod	int		.
 * @param	requiredObjectStatus	int		.
 */
function KalturaBulkUploadResultCategoryUser(){
	this.categoryId = null;
	this.categoryReferenceId = null;
	this.userId = null;
	this.permissionLevel = null;
	this.updateMethod = null;
	this.requiredObjectStatus = null;
}
KalturaBulkUploadResultCategoryUser.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	entryId	string		.
 * @param	title	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	contentType	string		.
 * @param	conversionProfileId	int		.
 * @param	accessControlProfileId	int		.
 * @param	category	string		.
 * @param	scheduleStartDate	int		.
 * @param	scheduleEndDate	int		.
 * @param	entryStatus	int		.
 * @param	thumbnailUrl	string		.
 * @param	thumbnailSaved	bool		.
 * @param	sshPrivateKey	string		.
 * @param	sshPublicKey	string		.
 * @param	sshKeyPassphrase	string		.
 * @param	creatorId	string		.
 * @param	entitledUsersEdit	string		.
 * @param	entitledUsersPublish	string		.
 * @param	entitledUsersView	string		.
 * @param	ownerId	string		.
 * @param	referenceId	string		.
 * @param	templateEntryId	string		.
 */
function KalturaBulkUploadResultEntry(){
	this.entryId = null;
	this.title = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.contentType = null;
	this.conversionProfileId = null;
	this.accessControlProfileId = null;
	this.category = null;
	this.scheduleStartDate = null;
	this.scheduleEndDate = null;
	this.entryStatus = null;
	this.thumbnailUrl = null;
	this.thumbnailSaved = null;
	this.sshPrivateKey = null;
	this.sshPublicKey = null;
	this.sshKeyPassphrase = null;
	this.creatorId = null;
	this.entitledUsersEdit = null;
	this.entitledUsersPublish = null;
	this.entitledUsersView = null;
	this.ownerId = null;
	this.referenceId = null;
	this.templateEntryId = null;
}
KalturaBulkUploadResultEntry.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	jobObjectId	int		ID of object being processed by the job.
 */
function KalturaBulkUploadResultJob(){
	this.jobObjectId = null;
}
KalturaBulkUploadResultJob.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	referenceId	string		.
 * @param	templateEntryId	string		.
 * @param	eventType	int		.
 * @param	title	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	categoryIds	string		.
 * @param	resourceId	string		ID of the resource specified for the new event..
 * @param	startTime	int		.
 * @param	duration	int		.
 * @param	endTime	int		.
 * @param	recurrence	string		.
 * @param	coEditors	string		.
 * @param	coPublishers	string		.
 * @param	eventOrganizerId	string		.
 * @param	contentOwnerId	string		.
 * @param	templateEntryType	string		.
 */
function KalturaBulkUploadResultScheduleEvent(){
	this.referenceId = null;
	this.templateEntryId = null;
	this.eventType = null;
	this.title = null;
	this.description = null;
	this.tags = null;
	this.categoryIds = null;
	this.resourceId = null;
	this.startTime = null;
	this.duration = null;
	this.endTime = null;
	this.recurrence = null;
	this.coEditors = null;
	this.coPublishers = null;
	this.eventOrganizerId = null;
	this.contentOwnerId = null;
	this.templateEntryType = null;
}
KalturaBulkUploadResultScheduleEvent.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	resourceId	string		.
 * @param	name	string		.
 * @param	type	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	parentType	string		.
 * @param	parentSystemName	string		.
 */
function KalturaBulkUploadResultScheduleResource(){
	this.resourceId = null;
	this.name = null;
	this.type = null;
	this.systemName = null;
	this.description = null;
	this.tags = null;
	this.parentType = null;
	this.parentSystemName = null;
}
KalturaBulkUploadResultScheduleResource.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	userId	string		.
 * @param	screenName	string		.
 * @param	email	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	dateOfBirth	int		.
 * @param	country	string		.
 * @param	state	string		.
 * @param	city	string		.
 * @param	zip	string		.
 * @param	gender	int		.
 * @param	firstName	string		.
 * @param	lastName	string		.
 * @param	group	string		.
 * @param	externalId	string		.
 * @param	capabilities	string		.
 */
function KalturaBulkUploadResultUser(){
	this.userId = null;
	this.screenName = null;
	this.email = null;
	this.description = null;
	this.tags = null;
	this.dateOfBirth = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.gender = null;
	this.firstName = null;
	this.lastName = null;
	this.group = null;
	this.externalId = null;
	this.capabilities = null;
}
KalturaBulkUploadResultUser.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	userEntryId	int		.
 */
function KalturaBulkUploadResultUserEntry(){
	this.userEntryId = null;
}
KalturaBulkUploadResultUserEntry.inheritsFrom (KalturaBulkUploadResult);


/**
 * @param	vendorCatalogItemId	int		.
 * @param	vendorPartnerId	int		.
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	serviceFeature	int		.
 * @param	serviceType	int		.
 * @param	turnAroundTime	int		.
 * @param	sourceLanguage	string		.
 * @param	targetLanguage	string		.
 * @param	outputFormat	int		.
 * @param	enableSpeakerId	int		.
 * @param	fixedPriceAddons	int		.
 * @param	pricing	KalturaVendorCatalogItemPricing		.
 * @param	flavorParamsId	int		.
 * @param	clearAudioFlavorParamsId	int		.
 */
function KalturaBulkUploadResultVendorCatalogItem(){
	this.vendorCatalogItemId = null;
	this.vendorPartnerId = null;
	this.name = null;
	this.systemName = null;
	this.serviceFeature = null;
	this.serviceType = null;
	this.turnAroundTime = null;
	this.sourceLanguage = null;
	this.targetLanguage = null;
	this.outputFormat = null;
	this.enableSpeakerId = null;
	this.fixedPriceAddons = null;
	this.pricing = null;
	this.flavorParamsId = null;
	this.clearAudioFlavorParamsId = null;
}
KalturaBulkUploadResultVendorCatalogItem.inheritsFrom (KalturaBulkUploadResult);


/**
 */
function KalturaBulkUploadUserData(){
}
KalturaBulkUploadUserData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 */
function KalturaBulkUploadVendorCatalogItemData(){
}
KalturaBulkUploadVendorCatalogItemData.inheritsFrom (KalturaBulkUploadObjectData);


/**
 * @param	serverId	int		Define the integrated BPM server id.
 * @param	processId	string		Define the integrated BPM process id.
 * @param	mainObjectCode	string		Code to load the main triggering object.
 */
function KalturaBusinessProcessNotificationTemplate(){
	this.serverId = null;
	this.processId = null;
	this.mainObjectCode = null;
}
KalturaBusinessProcessNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	statusEqual	string		.
 * @param	statusNotEqual	string		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	dcEqual	int		.
 * @param	dcEqOrNull	int		.
 */
function KalturaBusinessProcessServerBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.dcEqual = null;
	this.dcEqOrNull = null;
}
KalturaBusinessProcessServerBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaBusinessProcessServerListResponse(){
	this.objects = null;
}
KalturaBusinessProcessServerListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	streamUrl	string		URL of the stream.
 */
function KalturaCameraScheduleResource(){
	this.streamUrl = null;
}
KalturaCameraScheduleResource.inheritsFrom (KalturaScheduleResource);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCaptionAssetItemListResponse(){
	this.objects = null;
}
KalturaCaptionAssetItemListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCaptionAssetListResponse(){
	this.objects = null;
}
KalturaCaptionAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCaptionParamsListResponse(){
	this.objects = null;
}
KalturaCaptionParamsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	fileContainer	KalturaFileContainer		.
 * @param	actualSrcFileSyncLocalPath	string		The translated path as used by the scheduler.
 * @param	srcFileSyncRemoteUrl	string		.
 * @param	thumbParamsOutputId	int		.
 * @param	thumbAssetId	string		.
 * @param	srcAssetId	string		.
 * @param	srcAssetEncryptionKey	string		.
 * @param	srcAssetType	string		.
 * @param	thumbPath	string		.
 */
function KalturaCaptureThumbJobData(){
	this.fileContainer = null;
	this.actualSrcFileSyncLocalPath = null;
	this.srcFileSyncRemoteUrl = null;
	this.thumbParamsOutputId = null;
	this.thumbAssetId = null;
	this.srcAssetId = null;
	this.srcAssetEncryptionKey = null;
	this.srcAssetType = null;
	this.thumbPath = null;
}
KalturaCaptureThumbJobData.inheritsFrom (KalturaJobData);


/**
 * @param	serviceTypeEqual	int		.
 * @param	serviceTypeIn	string		.
 * @param	serviceFeatureEqual	int		.
 * @param	serviceFeatureIn	string		.
 * @param	turnAroundTimeEqual	int		.
 * @param	turnAroundTimeIn	string		.
 * @param	sourceLanguageEqual	string		.
 * @param	targetLanguageEqual	string		.
 */
function KalturaCatalogItemAdvancedFilter(){
	this.serviceTypeEqual = null;
	this.serviceTypeIn = null;
	this.serviceFeatureEqual = null;
	this.serviceFeatureIn = null;
	this.turnAroundTimeEqual = null;
	this.turnAroundTimeIn = null;
	this.sourceLanguageEqual = null;
	this.targetLanguageEqual = null;
}
KalturaCatalogItemAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	categoriesMatchOr	string		.
 * @param	categoryEntryStatusIn	string		.
 * @param	orderBy	string		.
 * @param	categoryIdEqual	int		.
 */
function KalturaCategoryEntryAdvancedFilter(){
	this.categoriesMatchOr = null;
	this.categoryEntryStatusIn = null;
	this.orderBy = null;
	this.categoryIdEqual = null;
}
KalturaCategoryEntryAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	categoryId	int		Category id to check condition for.
 * @param	categoryIds	string		Category id's to check condition for.
 * @param	categoryUserPermission	int		Minimum category user level permission to validate.
 * @param	comparison	string		Comparing operator.
 */
function KalturaCategoryEntryCondition(){
	this.categoryId = null;
	this.categoryIds = null;
	this.categoryUserPermission = null;
	this.comparison = null;
}
KalturaCategoryEntryCondition.inheritsFrom (KalturaCondition);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCategoryEntryListResponse(){
	this.objects = null;
}
KalturaCategoryEntryListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	identifier	string		Identifier of the object.
 */
function KalturaCategoryIdentifier(){
	this.identifier = null;
}
KalturaCategoryIdentifier.inheritsFrom (KalturaObjectIdentifier);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCategoryListResponse(){
	this.objects = null;
}
KalturaCategoryListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	memberIdEq	string		.
 * @param	memberIdIn	string		.
 * @param	memberPermissionsMatchOr	string		.
 * @param	memberPermissionsMatchAnd	string		.
 */
function KalturaCategoryUserAdvancedFilter(){
	this.memberIdEq = null;
	this.memberIdIn = null;
	this.memberPermissionsMatchOr = null;
	this.memberPermissionsMatchAnd = null;
}
KalturaCategoryUserAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCategoryUserListResponse(){
	this.objects = null;
}
KalturaCategoryUserListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	updateMethodEqual	int		.
 * @param	updateMethodIn	string		.
 * @param	permissionNamesMatchAnd	string		.
 * @param	permissionNamesMatchOr	string		.
 */
function KalturaCategoryUserProviderFilter(){
	this.userIdEqual = null;
	this.userIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updateMethodEqual = null;
	this.updateMethodIn = null;
	this.permissionNamesMatchAnd = null;
	this.permissionNamesMatchOr = null;
}
KalturaCategoryUserProviderFilter.inheritsFrom (KalturaFilter);


/**
 * @param	entryId	string		Entry ID.
 * @param	flavorAssetId	string		Flavor ID.
 * @param	captionAssetFormats	string		Caption formats.
 * @param	priority	string		.
 * @param	fidelity	string		.
 * @param	username	string		Api key for service provider (readOnly).
 * @param	password	string		Api key for service provider (readOnly).
 * @param	baseUrl	string		Base url for service provider (readOnly).
 * @param	spokenLanguage	string		Transcript content language.
 * @param	replaceMediaContent	bool		should replace remote media content.
 * @param	additionalParameters	string		additional parameters to send to Cielo24.
 */
function KalturaCielo24JobProviderData(){
	this.entryId = null;
	this.flavorAssetId = null;
	this.captionAssetFormats = null;
	this.priority = null;
	this.fidelity = null;
	this.username = null;
	this.password = null;
	this.baseUrl = null;
	this.spokenLanguage = null;
	this.replaceMediaContent = null;
	this.additionalParameters = null;
}
KalturaCielo24JobProviderData.inheritsFrom (KalturaIntegrationJobProviderData);


/**
 * @param	offset	int		Offset in milliseconds.
 * @param	duration	int		Duration in milliseconds.
 * @param	globalOffsetInDestination	int		global Offset In Destination in milliseconds.
 * @param	effectArray	array		global Offset In Destination in milliseconds.
 * @param	cropAlignment	int		.
 * @param	captionAttributes	array		.
 */
function KalturaClipAttributes(){
	this.offset = null;
	this.duration = null;
	this.globalOffsetInDestination = null;
	this.effectArray = null;
	this.cropAlignment = null;
	this.captionAttributes = null;
}
KalturaClipAttributes.inheritsFrom (KalturaOperationAttributes);


/**
 * @param	destEntryId	string		.
 * @param	tempEntryId	string		.
 * @param	sourceEntryId	string		.
 * @param	importUrl	string		.
 * @param	partnerId	int		.
 * @param	priority	int		.
 * @param	operationAttributes	array		.
 * @param	resourceOrder	int		.
 * @param	conversionParams	string		.
 */
function KalturaClipConcatJobData(){
	this.destEntryId = null;
	this.tempEntryId = null;
	this.sourceEntryId = null;
	this.importUrl = null;
	this.partnerId = null;
	this.priority = null;
	this.operationAttributes = null;
	this.resourceOrder = null;
	this.conversionParams = null;
}
KalturaClipConcatJobData.inheritsFrom (KalturaJobData);


/**
 * @param	code	string		.
 * @param	description	string		.
 * @param	endTime	int		.
 * @param	duration	int		Duration in milliseconds (readOnly).
 */
function KalturaCodeCuePoint(){
	this.code = null;
	this.description = null;
	this.endTime = null;
	this.duration = null;
}
KalturaCodeCuePoint.inheritsFrom (KalturaCuePoint);


/**
 */
function KalturaComcastMrssDistributionProvider(){
}
KalturaComcastMrssDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	value	KalturaIntegerValue		Value to evaluate against the field and operator.
 * @param	comparison	string		Comparing operator.
 */
function KalturaCompareCondition(){
	this.value = null;
	this.comparison = null;
}
KalturaCompareCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaDataCenterContentResource(){
}
KalturaDataCenterContentResource.inheritsFrom (KalturaContentResource);


/**
 * @param	resource	KalturaDataCenterContentResource		The resource to be concatenated.
 */
function KalturaConcatAttributes(){
	this.resource = null;
}
KalturaConcatAttributes.inheritsFrom (KalturaOperationAttributes);


/**
 * @param	srcFiles	array		Source files to be concatenated.
 * @param	destFilePath	string		Output file.
 * @param	flavorAssetId	string		Flavor asset to be ingested with the output.
 * @param	offset	float		Clipping offset in seconds.
 * @param	duration	float		Clipping duration in seconds.
 * @param	concatenatedDuration	float		duration of the concated video.
 * @param	shouldSort	bool		Should Sort the clip parts.
 * @param	conversionCommands	array		conversion commands to be applied to source files.
 * @param	multiSource	bool		.
 */
function KalturaConcatJobData(){
	this.srcFiles = null;
	this.destFilePath = null;
	this.flavorAssetId = null;
	this.offset = null;
	this.duration = null;
	this.concatenatedDuration = null;
	this.shouldSort = null;
	this.conversionCommands = null;
	this.multiSource = null;
}
KalturaConcatJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaConfMapsListResponse(){
	this.objects = null;
}
KalturaConfMapsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	confRoomStatus	int		 (readOnly).
 * @param	registered	int		 (readOnly).
 */
function KalturaConferenceEntryServerNode(){
	this.confRoomStatus = null;
	this.registered = null;
}
KalturaConferenceEntryServerNode.inheritsFrom (KalturaEntryServerNode);


/**
 * @param	serviceBaseUrl	string		.
 */
function KalturaConferenceServerNode(){
	this.serviceBaseUrl = null;
}
KalturaConferenceServerNode.inheritsFrom (KalturaServerNode);


/**
 * @param	fieldValues	string		.
 */
function KalturaConfigurableDistributionJobProviderData(){
	this.fieldValues = null;
}
KalturaConfigurableDistributionJobProviderData.inheritsFrom (KalturaDistributionJobProviderData);


/**
 * @param	fieldConfigArray	array		.
 * @param	itemXpathsToExtend	array		.
 * @param	useCategoryEntries	bool		When checking custom XSLT conditions using the fieldConfigArray - address only categories associated with the entry via the categoryEntry object.
 */
function KalturaConfigurableDistributionProfile(){
	this.fieldConfigArray = null;
	this.itemXpathsToExtend = null;
	this.useCategoryEntries = null;
}
KalturaConfigurableDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	noDistributionProfiles	bool		.
 * @param	distributionProfileId	int		.
 * @param	distributionSunStatus	int		.
 * @param	entryDistributionFlag	int		.
 * @param	entryDistributionStatus	int		.
 * @param	hasEntryDistributionValidationErrors	bool		.
 * @param	entryDistributionValidationErrors	string		Comma seperated validation error types.
 */
function KalturaContentDistributionSearchItem(){
	this.noDistributionProfiles = null;
	this.distributionProfileId = null;
	this.distributionSunStatus = null;
	this.entryDistributionFlag = null;
	this.entryDistributionStatus = null;
	this.hasEntryDistributionValidationErrors = null;
	this.entryDistributionValidationErrors = null;
}
KalturaContentDistributionSearchItem.inheritsFrom (KalturaSearchItem);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	createdByIdEqual	int		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	targetTypeEqual	int		.
 * @param	targetTypeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaControlPanelCommandBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdByIdEqual = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.targetTypeEqual = null;
	this.targetTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaControlPanelCommandBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaControlPanelCommandListResponse(){
	this.objects = null;
}
KalturaControlPanelCommandListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	srcFileSyncLocalPath	string		.
 * @param	actualSrcFileSyncLocalPath	string		The translated path as used by the scheduler.
 * @param	srcFileSyncRemoteUrl	string		.
 * @param	srcFileSyncs	array		.
 * @param	engineVersion	int		.
 * @param	flavorParamsOutputId	int		.
 * @param	flavorParamsOutput	KalturaFlavorParamsOutput		.
 * @param	mediaInfoId	int		.
 * @param	currentOperationSet	int		.
 * @param	currentOperationIndex	int		.
 * @param	pluginData	array		.
 */
function KalturaConvartableJobData(){
	this.srcFileSyncLocalPath = null;
	this.actualSrcFileSyncLocalPath = null;
	this.srcFileSyncRemoteUrl = null;
	this.srcFileSyncs = null;
	this.engineVersion = null;
	this.flavorParamsOutputId = null;
	this.flavorParamsOutput = null;
	this.mediaInfoId = null;
	this.currentOperationSet = null;
	this.currentOperationIndex = null;
	this.pluginData = null;
}
KalturaConvartableJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaConversionProfileAssetParamsListResponse(){
	this.objects = null;
}
KalturaConversionProfileAssetParamsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaConversionProfileListResponse(){
	this.objects = null;
}
KalturaConversionProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	captionAssetId	string		.
 * @param	fileLocation	string		.
 * @param	fileEncryptionKey	string		.
 * @param	fromType	string		.
 * @param	toType	string		.
 */
function KalturaConvertCaptionAssetJobData(){
	this.captionAssetId = null;
	this.fileLocation = null;
	this.fileEncryptionKey = null;
	this.fromType = null;
	this.toType = null;
}
KalturaConvertCaptionAssetJobData.inheritsFrom (KalturaJobData);


/**
 * @param	flavorParamsIds	string		Comma separated list of flavor param ids to convert.
 * @param	reconvert	bool		Should reconvert when flavor already exists?.
 */
function KalturaConvertEntryFlavorsObjectTask(){
	this.flavorParamsIds = null;
	this.reconvert = null;
}
KalturaConvertEntryFlavorsObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	entryId	string		Live stream entry id.
 * @param	assetId	string		.
 * @param	mediaServerIndex	string		Primary or secondary media server.
 * @param	fileIndex	int		The index of the file within the entry.
 * @param	srcFilePath	string		The recorded live media.
 * @param	destFilePath	string		The output file.
 * @param	endTime	float		Duration of the live entry including all recorded segments including the current.
 * @param	destDataFilePath	string		The data output file.
 */
function KalturaConvertLiveSegmentJobData(){
	this.entryId = null;
	this.assetId = null;
	this.mediaServerIndex = null;
	this.fileIndex = null;
	this.srcFilePath = null;
	this.destFilePath = null;
	this.endTime = null;
	this.destDataFilePath = null;
}
KalturaConvertLiveSegmentJobData.inheritsFrom (KalturaJobData);


/**
 * @param	inputFileSyncLocalPath	string		.
 * @param	thumbHeight	int		The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have.
 * @param	thumbBitrate	int		The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have.
 */
function KalturaConvertProfileJobData(){
	this.inputFileSyncLocalPath = null;
	this.thumbHeight = null;
	this.thumbBitrate = null;
}
KalturaConvertProfileJobData.inheritsFrom (KalturaJobData);


/**
 * @param	entryId	string		entry Id.
 * @param	clipsDescriptionArray	array		an array of source start time and duration.
 * @param	fullCopy	bool		.
 */
function KalturaCopyCaptionsJobData(){
	this.entryId = null;
	this.clipsDescriptionArray = null;
	this.fullCopy = null;
}
KalturaCopyCaptionsJobData.inheritsFrom (KalturaJobData);


/**
 * @param	fromPartnerId	int		Id of the partner to copy from.
 * @param	toPartnerId	int		Id of the partner to copy to.
 */
function KalturaCopyPartnerJobData(){
	this.fromPartnerId = null;
	this.toPartnerId = null;
}
KalturaCopyPartnerJobData.inheritsFrom (KalturaJobData);


/**
 */
function KalturaCortexApiDistributionProvider(){
}
KalturaCortexApiDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	countryRestrictionType	int		Country restriction type (Allow or deny).
 * @param	countryList	string		Comma separated list of country codes to allow to deny.
 */
function KalturaCountryRestriction(){
	this.countryRestrictionType = null;
	this.countryList = null;
}
KalturaCountryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 */
function KalturaCrossKalturaDistributionProvider(){
}
KalturaCrossKalturaDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaCuePointListResponse(){
	this.objects = null;
}
KalturaCuePointListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaDailymotionDistributionProvider(){
}
KalturaDailymotionDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDataListResponse(){
	this.objects = null;
}
KalturaDataListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	deleteType	int		The logic to use to choose the flavors for deletion.
 * @param	flavorParamsIds	string		Comma separated list of flavor param ids to delete or keep.
 */
function KalturaDeleteEntryFlavorsObjectTask(){
	this.deleteType = null;
	this.flavorParamsIds = null;
}
KalturaDeleteEntryFlavorsObjectTask.inheritsFrom (KalturaObjectTask);


/**
 */
function KalturaDeleteEntryObjectTask(){
}
KalturaDeleteEntryObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	localFileSyncPath	string		.
 */
function KalturaDeleteFileJobData(){
	this.localFileSyncPath = null;
}
KalturaDeleteFileJobData.inheritsFrom (KalturaJobData);


/**
 * @param	filter	KalturaFilter		The filter should return the list of objects that need to be deleted..
 */
function KalturaDeleteJobData(){
	this.filter = null;
}
KalturaDeleteJobData.inheritsFrom (KalturaJobData);


/**
 */
function KalturaDeleteLocalContentObjectTask(){
}
KalturaDeleteLocalContentObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	supportClipping	bool		Should we use timing parameters - clipTo / seekFrom.
 */
function KalturaDeliveryProfileAkamaiAppleHttpManifest(){
	this.supportClipping = null;
}
KalturaDeliveryProfileAkamaiAppleHttpManifest.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	supportClipping	bool		Should we use timing parameters - clipTo / seekFrom.
 */
function KalturaDeliveryProfileAkamaiHds(){
	this.supportClipping = null;
}
KalturaDeliveryProfileAkamaiHds.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	streamerTypeEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaDeliveryProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.streamerTypeEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaDeliveryProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	deliveryProfileIds	array		The delivery ids that are accepted by this condition.
 */
function KalturaDeliveryProfileCondition(){
	this.deliveryProfileIds = null;
}
KalturaDeliveryProfileCondition.inheritsFrom (KalturaCondition);


/**
 * @param	pattern	string		.
 * @param	rendererClass	string		rendererClass.
 * @param	manifestRedirect	int		Enable to make playManifest redirect to the domain of the delivery profile.
 */
function KalturaDeliveryProfileGenericAppleHttp(){
	this.pattern = null;
	this.rendererClass = null;
	this.manifestRedirect = null;
}
KalturaDeliveryProfileGenericAppleHttp.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	pattern	string		.
 * @param	rendererClass	string		rendererClass.
 */
function KalturaDeliveryProfileGenericHds(){
	this.pattern = null;
	this.rendererClass = null;
}
KalturaDeliveryProfileGenericHds.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	pattern	string		.
 */
function KalturaDeliveryProfileGenericSilverLight(){
	this.pattern = null;
}
KalturaDeliveryProfileGenericSilverLight.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	maxSize	int		.
 */
function KalturaDeliveryProfileHttp(){
	this.maxSize = null;
}
KalturaDeliveryProfileHttp.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDeliveryProfileListResponse(){
	this.objects = null;
}
KalturaDeliveryProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	disableExtraAttributes	bool		.
 * @param	forceProxy	bool		.
 */
function KalturaDeliveryProfileLiveAppleHttp(){
	this.disableExtraAttributes = null;
	this.forceProxy = null;
}
KalturaDeliveryProfileLiveAppleHttp.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	livePackagerSigningDomain	string		Domain used to sign the live url.
 * @param	shouldRedirect	bool		.
 */
function KalturaDeliveryProfileLivePackager(){
	this.livePackagerSigningDomain = null;
	this.shouldRedirect = null;
}
KalturaDeliveryProfileLivePackager.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	enforceRtmpe	bool		enforceRtmpe.
 * @param	prefix	string		a prefix that is added to all stream urls (replaces storageProfile::rtmpPrefix).
 */
function KalturaDeliveryProfileRtmp(){
	this.enforceRtmpe = null;
	this.prefix = null;
}
KalturaDeliveryProfileRtmp.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	simuliveSupport	bool		.
 */
function KalturaDeliveryProfileVod(){
	this.simuliveSupport = null;
}
KalturaDeliveryProfileVod.inheritsFrom (KalturaDeliveryProfile);


/**
 * @param	deliveryProfileIds	array		Delivery profile ids.
 * @param	config	string		Override server node default configuration - json format.
 */
function KalturaDeliveryServerNode(){
	this.deliveryProfileIds = null;
	this.config = null;
}
KalturaDeliveryServerNode.inheritsFrom (KalturaServerNode);


/**
 * @param	metadataProfileId	int		ID of the metadata profile for the extracted term metadata.
 * @param	transcriptAssetId	string		ID of the transcript asset.
 * @param	entryId	string		ID of the entry.
 * @param	voicebaseApiKey	string		Voicebase API key to fetch transcript tokens.
 * @param	voicebaseApiPassword	string		Voicebase API password to fetch transcript tokens.
 */
function KalturaDexterIntegrationJobProviderData(){
	this.metadataProfileId = null;
	this.transcriptAssetId = null;
	this.entryId = null;
	this.voicebaseApiKey = null;
	this.voicebaseApiPassword = null;
}
KalturaDexterIntegrationJobProviderData.inheritsFrom (KalturaIntegrationJobProviderData);


/**
 * @param	directoryRestrictionType	int		Kaltura directory restriction type.
 */
function KalturaDirectoryRestriction(){
	this.directoryRestrictionType = null;
}
KalturaDirectoryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	eventNotificationTemplateId	int		The event notification template id to dispatch.
 */
function KalturaDispatchEventNotificationObjectTask(){
	this.eventNotificationTemplateId = null;
}
KalturaDispatchEventNotificationObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	distributionProfileId	string		Distribution profile id.
 */
function KalturaDistributeObjectTask(){
	this.distributionProfileId = null;
}
KalturaDistributeObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	distributionProfileId	int		.
 * @param	distributionProfile	KalturaDistributionProfile		.
 * @param	entryDistributionId	int		.
 * @param	entryDistribution	KalturaEntryDistribution		.
 * @param	remoteId	string		Id of the media in the remote system.
 * @param	providerType	string		.
 * @param	providerData	KalturaDistributionJobProviderData		Additional data that relevant for the provider only.
 * @param	results	string		The results as returned from the remote destination.
 * @param	sentData	string		The data as sent to the remote destination.
 * @param	mediaFiles	array		Stores array of media files that submitted to the destination site
 *		 Could be used later for media update.
 */
function KalturaDistributionJobData(){
	this.distributionProfileId = null;
	this.distributionProfile = null;
	this.entryDistributionId = null;
	this.entryDistribution = null;
	this.remoteId = null;
	this.providerType = null;
	this.providerData = null;
	this.results = null;
	this.sentData = null;
	this.mediaFiles = null;
}
KalturaDistributionJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaDistributionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaDistributionProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDistributionProfileListResponse(){
	this.objects = null;
}
KalturaDistributionProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 */
function KalturaDistributionProviderBaseFilter(){
	this.typeEqual = null;
	this.typeIn = null;
}
KalturaDistributionProviderBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDistributionProviderListResponse(){
	this.objects = null;
}
KalturaDistributionProviderListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	conditionName	string		.
 */
function KalturaDistributionValidationErrorConditionNotMet(){
	this.conditionName = null;
}
KalturaDistributionValidationErrorConditionNotMet.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	fieldName	string		.
 * @param	validationErrorType	int		.
 * @param	validationErrorParam	string		Parameter of the validation error
 *		 For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error.
 */
function KalturaDistributionValidationErrorInvalidData(){
	this.fieldName = null;
	this.validationErrorType = null;
	this.validationErrorParam = null;
}
KalturaDistributionValidationErrorInvalidData.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	data	string		.
 */
function KalturaDistributionValidationErrorMissingAsset(){
	this.data = null;
}
KalturaDistributionValidationErrorMissingAsset.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	flavorParamsId	string		.
 */
function KalturaDistributionValidationErrorMissingFlavor(){
	this.flavorParamsId = null;
}
KalturaDistributionValidationErrorMissingFlavor.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	fieldName	string		.
 */
function KalturaDistributionValidationErrorMissingMetadata(){
	this.fieldName = null;
}
KalturaDistributionValidationErrorMissingMetadata.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	dimensions	KalturaDistributionThumbDimensions		.
 */
function KalturaDistributionValidationErrorMissingThumbnail(){
	this.dimensions = null;
}
KalturaDistributionValidationErrorMissingThumbnail.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDocumentListResponse(){
	this.objects = null;
}
KalturaDocumentListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaDoubleClickDistributionJobProviderData(){
}
KalturaDoubleClickDistributionJobProviderData.inheritsFrom (KalturaDistributionJobProviderData);


/**
 */
function KalturaDoubleClickDistributionProvider(){
}
KalturaDoubleClickDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	flavorData	string		For the uDRM we give the drm context data which is a json encoding of an array containing the uDRM data
 *	     for each flavor that is required from this getContextData request..
 */
function KalturaDrmEntryContextPluginData(){
	this.flavorData = null;
}
KalturaDrmEntryContextPluginData.inheritsFrom (KalturaPluginData);


/**
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameLike	string		.
 * @param	systemNameLike	string		.
 * @param	providerEqual	string		.
 * @param	providerIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	scenarioEqual	string		.
 * @param	scenarioIn	string		.
 */
function KalturaDrmPolicyBaseFilter(){
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.systemNameLike = null;
	this.providerEqual = null;
	this.providerIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.scenarioEqual = null;
	this.scenarioIn = null;
}
KalturaDrmPolicyBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDrmPolicyListResponse(){
	this.objects = null;
}
KalturaDrmPolicyListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameLike	string		.
 * @param	providerEqual	string		.
 * @param	providerIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaDrmProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.providerEqual = null;
	this.providerIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaDrmProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDrmProfileListResponse(){
	this.objects = null;
}
KalturaDrmProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameLike	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	conversionProfileIdEqual	int		.
 * @param	conversionProfileIdIn	string		.
 * @param	dcEqual	int		.
 * @param	dcIn	string		.
 * @param	pathEqual	string		.
 * @param	pathLike	string		.
 * @param	fileHandlerTypeEqual	string		.
 * @param	fileHandlerTypeIn	string		.
 * @param	fileNamePatternsLike	string		.
 * @param	fileNamePatternsMultiLikeOr	string		.
 * @param	fileNamePatternsMultiLikeAnd	string		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	errorCodeEqual	string		.
 * @param	errorCodeIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaDropFolderBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.pathEqual = null;
	this.pathLike = null;
	this.fileHandlerTypeEqual = null;
	this.fileHandlerTypeIn = null;
	this.fileNamePatternsLike = null;
	this.fileNamePatternsMultiLikeOr = null;
	this.fileNamePatternsMultiLikeAnd = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.errorCodeEqual = null;
	this.errorCodeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaDropFolderBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	contentMatchPolicy	int		.
 * @param	slugRegex	string		Regular expression that defines valid file names to be handled.
 *		 The following might be extracted from the file name and used if defined:
 *		 - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 *		 - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor..
 */
function KalturaDropFolderContentFileHandlerConfig(){
	this.contentMatchPolicy = null;
	this.slugRegex = null;
}
KalturaDropFolderContentFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


/**
 * @param	dropFolderId	int		.
 * @param	dropFolderFileIds	string		.
 * @param	parsedSlug	string		.
 * @param	contentMatchPolicy	int		.
 * @param	conversionProfileId	int		.
 * @param	parsedUserId	string		.
 */
function KalturaDropFolderContentProcessorJobData(){
	this.dropFolderId = null;
	this.dropFolderFileIds = null;
	this.parsedSlug = null;
	this.contentMatchPolicy = null;
	this.conversionProfileId = null;
	this.parsedUserId = null;
}
KalturaDropFolderContentProcessorJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idGreaterThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	dropFolderIdEqual	int		.
 * @param	dropFolderIdIn	string		.
 * @param	fileNameEqual	string		.
 * @param	fileNameIn	string		.
 * @param	fileNameLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	parsedSlugEqual	string		.
 * @param	parsedSlugIn	string		.
 * @param	parsedSlugLike	string		.
 * @param	parsedFlavorEqual	string		.
 * @param	parsedFlavorIn	string		.
 * @param	parsedFlavorLike	string		.
 * @param	leadDropFolderFileIdEqual	int		.
 * @param	deletedDropFolderFileIdEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	errorCodeEqual	string		.
 * @param	errorCodeIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaDropFolderFileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idGreaterThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dropFolderIdEqual = null;
	this.dropFolderIdIn = null;
	this.fileNameEqual = null;
	this.fileNameIn = null;
	this.fileNameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.parsedSlugEqual = null;
	this.parsedSlugIn = null;
	this.parsedSlugLike = null;
	this.parsedFlavorEqual = null;
	this.parsedFlavorIn = null;
	this.parsedFlavorLike = null;
	this.leadDropFolderFileIdEqual = null;
	this.deletedDropFolderFileIdEqual = null;
	this.entryIdEqual = null;
	this.errorCodeEqual = null;
	this.errorCodeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaDropFolderFileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDropFolderFileListResponse(){
	this.objects = null;
}
KalturaDropFolderFileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	eventsType	int		The type of the events that ill be created by this upload.
 */
function KalturaDropFolderICalBulkUploadFileHandlerConfig(){
	this.eventsType = null;
}
KalturaDropFolderICalBulkUploadFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaDropFolderListResponse(){
	this.objects = null;
}
KalturaDropFolderListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	leadPattern	string		.
 * @param	additionalPatterns	string		.
 */
function KalturaDropFolderTrRdsFileHandlerConfig(){
	this.leadPattern = null;
	this.additionalPatterns = null;
}
KalturaDropFolderTrRdsFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


/**
 */
function KalturaDropFolderXmlBulkUploadFileHandlerConfig(){
}
KalturaDropFolderXmlBulkUploadFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


/**
 * @param	line	string		.
 * @param	startsAt	int		.
 * @param	endsAt	int		.
 * @param	language	string		.
 * @param	captionAssetId	string		.
 * @param	label	string		.
 */
function KalturaESearchCaptionItemData(){
	this.line = null;
	this.startsAt = null;
	this.endsAt = null;
	this.language = null;
	this.captionAssetId = null;
	this.label = null;
}
KalturaESearchCaptionItemData.inheritsFrom (KalturaESearchItemData);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchCategoryAggregationItem(){
	this.fieldName = null;
}
KalturaESearchCategoryAggregationItem.inheritsFrom (KalturaESearchAggregationItem);


/**
 * @param	sortField	string		.
 */
function KalturaESearchCategoryOrderByItem(){
	this.sortField = null;
}
KalturaESearchCategoryOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaESearchCategoryOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaESearchCategoryOperator.inheritsFrom (KalturaESearchCategoryBaseItem);


/**
 * @param	searchOperator	KalturaESearchCategoryOperator		.
 */
function KalturaESearchCategoryParams(){
	this.searchOperator = null;
}
KalturaESearchCategoryParams.inheritsFrom (KalturaESearchParams);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaESearchCategoryResponse(){
	this.objects = null;
}
KalturaESearchCategoryResponse.inheritsFrom (KalturaESearchResponse);


/**
 * @param	cuePointType	string		.
 * @param	id	string		.
 * @param	name	string		.
 * @param	text	string		.
 * @param	tags	array		.
 * @param	startTime	string		.
 * @param	endTime	string		.
 * @param	subType	string		.
 * @param	question	string		.
 * @param	answers	array		.
 * @param	hint	string		.
 * @param	explanation	string		.
 * @param	assetId	string		.
 */
function KalturaESearchCuePointItemData(){
	this.cuePointType = null;
	this.id = null;
	this.name = null;
	this.text = null;
	this.tags = null;
	this.startTime = null;
	this.endTime = null;
	this.subType = null;
	this.question = null;
	this.answers = null;
	this.hint = null;
	this.explanation = null;
	this.assetId = null;
}
KalturaESearchCuePointItemData.inheritsFrom (KalturaESearchItemData);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchCuepointsAggregationItem(){
	this.fieldName = null;
}
KalturaESearchCuepointsAggregationItem.inheritsFrom (KalturaESearchAggregationItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchEntryAggregationItem(){
	this.fieldName = null;
}
KalturaESearchEntryAggregationItem.inheritsFrom (KalturaESearchAggregationItem);


/**
 * @param	sortField	string		.
 */
function KalturaESearchEntryOrderByItem(){
	this.sortField = null;
}
KalturaESearchEntryOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	searchOperator	KalturaESearchEntryOperator		.
 * @param	aggregations	KalturaESearchAggregation		.
 */
function KalturaESearchEntryParams(){
	this.searchOperator = null;
	this.aggregations = null;
}
KalturaESearchEntryParams.inheritsFrom (KalturaESearchParams);


/**
 * @param	objects	array		 (readOnly).
 * @param	aggregations	array		 (readOnly).
 */
function KalturaESearchEntryResponse(){
	this.objects = null;
	this.aggregations = null;
}
KalturaESearchEntryResponse.inheritsFrom (KalturaESearchResponse);


/**
 * @param	sortField	string		.
 */
function KalturaESearchGroupOrderByItem(){
	this.sortField = null;
}
KalturaESearchGroupOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaESearchGroupOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaESearchGroupOperator.inheritsFrom (KalturaESearchGroupBaseItem);


/**
 * @param	searchOperator	KalturaESearchGroupOperator		.
 */
function KalturaESearchGroupParams(){
	this.searchOperator = null;
}
KalturaESearchGroupParams.inheritsFrom (KalturaESearchParams);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaESearchGroupResponse(){
	this.objects = null;
}
KalturaESearchGroupResponse.inheritsFrom (KalturaESearchResponse);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchHistoryAggregationItem(){
	this.fieldName = null;
}
KalturaESearchHistoryAggregationItem.inheritsFrom (KalturaESearchAggregationItem);


/**
 * @param	searchTermStartsWith	string		.
 * @param	searchedObjectIn	string		.
 * @param	timestampRange	KalturaESearchRange		.
 * @param	aggregation	KalturaESearchHistoryAggregationItem		.
 */
function KalturaESearchHistoryFilter(){
	this.searchTermStartsWith = null;
	this.searchedObjectIn = null;
	this.timestampRange = null;
	this.aggregation = null;
}
KalturaESearchHistoryFilter.inheritsFrom (KalturaESearchBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	aggregations	array		 (readOnly).
 */
function KalturaESearchHistoryListResponse(){
	this.objects = null;
	this.aggregations = null;
}
KalturaESearchHistoryListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchMetadataAggregationItem(){
	this.fieldName = null;
}
KalturaESearchMetadataAggregationItem.inheritsFrom (KalturaESearchAggregationItem);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 * @param	metadataFieldId	int		.
 * @param	valueText	string		.
 * @param	valueInt	int		.
 */
function KalturaESearchMetadataItemData(){
	this.xpath = null;
	this.metadataProfileId = null;
	this.metadataFieldId = null;
	this.valueText = null;
	this.valueInt = null;
}
KalturaESearchMetadataItemData.inheritsFrom (KalturaESearchItemData);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaESearchMetadataOrderByItem(){
	this.xpath = null;
	this.metadataProfileId = null;
}
KalturaESearchMetadataOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	sortField	string		.
 */
function KalturaESearchUserOrderByItem(){
	this.sortField = null;
}
KalturaESearchUserOrderByItem.inheritsFrom (KalturaESearchOrderByItem);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaESearchUserOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaESearchUserOperator.inheritsFrom (KalturaESearchUserBaseItem);


/**
 * @param	searchOperator	KalturaESearchUserOperator		.
 */
function KalturaESearchUserParams(){
	this.searchOperator = null;
}
KalturaESearchUserParams.inheritsFrom (KalturaESearchParams);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaESearchUserResponse(){
	this.objects = null;
}
KalturaESearchUserResponse.inheritsFrom (KalturaESearchResponse);


/**
 * @param	categoryIdEqual	int		.
 * @param	categoryIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	permissionLevelEqual	int		.
 * @param	permissionLevelIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	updateMethodEqual	int		.
 * @param	updateMethodIn	string		.
 * @param	categoryFullIdsStartsWith	string		.
 * @param	categoryFullIdsEqual	string		.
 * @param	permissionNamesMatchAnd	string		.
 * @param	permissionNamesMatchOr	string		.
 * @param	permissionNamesNotContains	string		.
 */
function KalturaCategoryUserBaseFilter(){
	this.categoryIdEqual = null;
	this.categoryIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.permissionLevelEqual = null;
	this.permissionLevelIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updateMethodEqual = null;
	this.updateMethodIn = null;
	this.categoryFullIdsStartsWith = null;
	this.categoryFullIdsEqual = null;
	this.permissionNamesMatchAnd = null;
	this.permissionNamesMatchOr = null;
	this.permissionNamesNotContains = null;
}
KalturaCategoryUserBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	categoryDirectMembers	bool		Return the list of categoryUser that are not inherited from parent category - only the direct categoryUsers..
 * @param	freeText	string		Free text search on user id or screen name.
 * @param	relatedGroupsByUserId	string		Return a list of categoryUser that related to the userId in this field by groups.
 */
function KalturaCategoryUserFilter(){
	this.categoryDirectMembers = null;
	this.freeText = null;
	this.relatedGroupsByUserId = null;
}
KalturaCategoryUserFilter.inheritsFrom (KalturaCategoryUserBaseFilter);


/**
 * @param	categoryUserFilter	KalturaCategoryUserFilter		.
 */
function KalturaEmailNotificationCategoryRecipientJobData(){
	this.categoryUserFilter = null;
}
KalturaEmailNotificationCategoryRecipientJobData.inheritsFrom (KalturaEmailNotificationRecipientJobData);


/**
 * @param	categoryId	KalturaStringValue		The ID of the category whose subscribers should receive the email notification..
 * @param	categoryIds	KalturaStringValue		The IDs of the categories whose subscribers should receive the email notification..
 * @param	categoryUserFilter	KalturaCategoryUserProviderFilter		.
 */
function KalturaEmailNotificationCategoryRecipientProvider(){
	this.categoryId = null;
	this.categoryIds = null;
	this.categoryUserFilter = null;
}
KalturaEmailNotificationCategoryRecipientProvider.inheritsFrom (KalturaEmailNotificationRecipientProvider);


/**
 * @param	groupId	string		.
 */
function KalturaEmailNotificationGroupRecipientJobData(){
	this.groupId = null;
}
KalturaEmailNotificationGroupRecipientJobData.inheritsFrom (KalturaEmailNotificationRecipientJobData);


/**
 * @param	groupId	string		.
 */
function KalturaEmailNotificationGroupRecipientProvider(){
	this.groupId = null;
}
KalturaEmailNotificationGroupRecipientProvider.inheritsFrom (KalturaEmailNotificationRecipientProvider);


/**
 */
function KalturaEmailNotificationParameter(){
}
KalturaEmailNotificationParameter.inheritsFrom (KalturaEventNotificationParameter);


/**
 * @param	emailRecipients	array		Email to emails and names.
 */
function KalturaEmailNotificationStaticRecipientJobData(){
	this.emailRecipients = null;
}
KalturaEmailNotificationStaticRecipientJobData.inheritsFrom (KalturaEmailNotificationRecipientJobData);


/**
 * @param	emailRecipients	array		Email to emails and names.
 */
function KalturaEmailNotificationStaticRecipientProvider(){
	this.emailRecipients = null;
}
KalturaEmailNotificationStaticRecipientProvider.inheritsFrom (KalturaEmailNotificationRecipientProvider);


/**
 * @param	format	string		Define the email body format.
 * @param	subject	string		Define the email subject.
 * @param	body	string		Define the email body content.
 * @param	fromEmail	string		Define the email sender email.
 * @param	fromName	string		Define the email sender name.
 * @param	to	KalturaEmailNotificationRecipientProvider		Email recipient emails and names.
 * @param	cc	KalturaEmailNotificationRecipientProvider		Email recipient emails and names.
 * @param	bcc	KalturaEmailNotificationRecipientProvider		Email recipient emails and names.
 * @param	replyTo	KalturaEmailNotificationRecipientProvider		Default email addresses to whom the reply should be sent..
 * @param	priority	int		Define the email priority.
 * @param	confirmReadingTo	string		Email address that a reading confirmation will be sent.
 * @param	hostname	string		Hostname to use in Message-Id and Received headers and as default HELLO string. 
 *		 If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'..
 * @param	messageID	string		Sets the message ID to be used in the Message-Id header.
 *		 If empty, a unique id will be generated..
 * @param	customHeaders	array		Adds a e-mail custom header.
 */
function KalturaEmailNotificationTemplate(){
	this.format = null;
	this.subject = null;
	this.body = null;
	this.fromEmail = null;
	this.fromName = null;
	this.to = null;
	this.cc = null;
	this.bcc = null;
	this.replyTo = null;
	this.priority = null;
	this.confirmReadingTo = null;
	this.hostname = null;
	this.messageID = null;
	this.customHeaders = null;
}
KalturaEmailNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 * @param	partnerIdEqual	int		.
 * @param	screenNameLike	string		.
 * @param	screenNameStartsWith	string		.
 * @param	emailLike	string		.
 * @param	emailStartsWith	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaBaseUserBaseFilter(){
	this.partnerIdEqual = null;
	this.screenNameLike = null;
	this.screenNameStartsWith = null;
	this.emailLike = null;
	this.emailStartsWith = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaBaseUserBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaBaseUserFilter(){
}
KalturaBaseUserFilter.inheritsFrom (KalturaBaseUserBaseFilter);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	isAdminEqual	int		.
 * @param	firstNameStartsWith	string		.
 * @param	lastNameStartsWith	string		.
 */
function KalturaUserBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.isAdminEqual = null;
	this.firstNameStartsWith = null;
	this.lastNameStartsWith = null;
}
KalturaUserBaseFilter.inheritsFrom (KalturaBaseUserFilter);


/**
 * @param	idOrScreenNameStartsWith	string		.
 * @param	loginEnabledEqual	int		.
 * @param	roleIdEqual	string		.
 * @param	roleIdsEqual	string		.
 * @param	roleIdsIn	string		.
 * @param	firstNameOrLastNameStartsWith	string		.
 * @param	permissionNamesMultiLikeOr	string		Permission names filter expression.
 * @param	permissionNamesMultiLikeAnd	string		Permission names filter expression.
 */
function KalturaUserFilter(){
	this.idOrScreenNameStartsWith = null;
	this.loginEnabledEqual = null;
	this.roleIdEqual = null;
	this.roleIdsEqual = null;
	this.roleIdsIn = null;
	this.firstNameOrLastNameStartsWith = null;
	this.permissionNamesMultiLikeOr = null;
	this.permissionNamesMultiLikeAnd = null;
}
KalturaUserFilter.inheritsFrom (KalturaUserBaseFilter);


/**
 * @param	filter	KalturaUserFilter		.
 */
function KalturaEmailNotificationUserRecipientJobData(){
	this.filter = null;
}
KalturaEmailNotificationUserRecipientJobData.inheritsFrom (KalturaEmailNotificationRecipientJobData);


/**
 * @param	filter	KalturaUserFilter		.
 */
function KalturaEmailNotificationUserRecipientProvider(){
	this.filter = null;
}
KalturaEmailNotificationUserRecipientProvider.inheritsFrom (KalturaEmailNotificationRecipientProvider);


/**
 * @param	hasCaption	int		.
 */
function KalturaEntryCaptionAdvancedFilter(){
	this.hasCaption = null;
}
KalturaEntryCaptionAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	contentLike	string		.
 * @param	contentMultiLikeOr	string		.
 * @param	contentMultiLikeAnd	string		.
 */
function KalturaEntryCaptionAssetSearchItem(){
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
}
KalturaEntryCaptionAssetSearchItem.inheritsFrom (KalturaSearchItem);


/**
 * @param	entryId	string		The entry ID in the context of which the playlist should be built.
 * @param	followEntryRedirect	int		Is this a redirected entry followup?.
 */
function KalturaEntryContext(){
	this.entryId = null;
	this.followEntryRedirect = null;
}
KalturaEntryContext.inheritsFrom (KalturaContext);


/**
 * @param	flavorAssetId	string		Id of the current flavor..
 * @param	flavorTags	string		The tags of the flavors that should be used for playback..
 * @param	streamerType	string		Playback streamer type: RTMP, HTTP, appleHttps, rtsp, sl..
 * @param	mediaProtocol	string		Protocol of the specific media object..
 */
function KalturaEntryContextDataParams(){
	this.flavorAssetId = null;
	this.flavorTags = null;
	this.streamerType = null;
	this.mediaProtocol = null;
}
KalturaEntryContextDataParams.inheritsFrom (KalturaAccessControlScope);


/**
 * @param	isSiteRestricted	bool		.
 * @param	isCountryRestricted	bool		.
 * @param	isSessionRestricted	bool		.
 * @param	isIpAddressRestricted	bool		.
 * @param	isUserAgentRestricted	bool		.
 * @param	previewLength	int		.
 * @param	isScheduledNow	bool		.
 * @param	isAdmin	bool		.
 * @param	streamerType	string		http/rtmp/hdnetwork.
 * @param	mediaProtocol	string		http/https, rtmp/rtmpe.
 * @param	storageProfilesXML	string		.
 * @param	accessControlMessages	array		Array of messages as received from the access control rules that invalidated.
 * @param	accessControlActions	array		Array of actions as received from the access control rules that invalidated.
 * @param	flavorAssets	array		Array of allowed flavor assets according to access control limitations and requested tags.
 * @param	msDuration	int		The duration of the entry in milliseconds.
 * @param	pluginData	map		Array of allowed flavor assets according to access control limitations and requested tags.
 */
function KalturaEntryContextDataResult(){
	this.isSiteRestricted = null;
	this.isCountryRestricted = null;
	this.isSessionRestricted = null;
	this.isIpAddressRestricted = null;
	this.isUserAgentRestricted = null;
	this.previewLength = null;
	this.isScheduledNow = null;
	this.isAdmin = null;
	this.streamerType = null;
	this.mediaProtocol = null;
	this.storageProfilesXML = null;
	this.accessControlMessages = null;
	this.accessControlActions = null;
	this.flavorAssets = null;
	this.msDuration = null;
	this.pluginData = null;
}
KalturaEntryContextDataResult.inheritsFrom (KalturaContextDataResult);


/**
 * @param	cuePointsFreeText	string		.
 * @param	cuePointTypeIn	string		.
 * @param	cuePointSubTypeEqual	int		.
 */
function KalturaEntryCuePointSearchFilter(){
	this.cuePointsFreeText = null;
	this.cuePointTypeIn = null;
	this.cuePointSubTypeEqual = null;
}
KalturaEntryCuePointSearchFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaEntryDistributionListResponse(){
	this.objects = null;
}
KalturaEntryDistributionListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	identifier	string		Identifier of the object.
 */
function KalturaEntryIdentifier(){
	this.identifier = null;
}
KalturaEntryIdentifier.inheritsFrom (KalturaObjectIdentifier);


/**
 * @param	entryId	string		.
 * @param	peakAudience	int		.
 * @param	peakDvrAudience	int		.
 */
function KalturaEntryLiveStats(){
	this.entryId = null;
	this.peakAudience = null;
	this.peakDvrAudience = null;
}
KalturaEntryLiveStats.inheritsFrom (KalturaLiveStats);


/**
 * @param	templateEntryId	string		Entry to be used as template during content ingestion.
 * @param	entryIds	string		Entries that associated with this event.
 * @param	categoryIds	string		Categories that associated with this event.
 * @param	blackoutConflicts	array		Blackout schedule events the conflict with this event (readOnly).
 */
function KalturaEntryScheduleEvent(){
	this.templateEntryId = null;
	this.entryIds = null;
	this.categoryIds = null;
	this.blackoutConflicts = null;
}
KalturaEntryScheduleEvent.inheritsFrom (KalturaScheduleEvent);


/**
 */
function KalturaEntryScheduledCondition(){
}
KalturaEntryScheduledCondition.inheritsFrom (KalturaCondition);


/**
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	serverNodeIdEqual	int		.
 * @param	serverNodeIdIn	string		.
 * @param	serverNodeIdNotIn	string		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	serverTypeEqual	string		.
 * @param	serverTypeIn	string		.
 * @param	serverTypeNotIn	string		.
 */
function KalturaEntryServerNodeBaseFilter(){
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.serverNodeIdEqual = null;
	this.serverNodeIdIn = null;
	this.serverNodeIdNotIn = null;
	this.createdAtLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.serverTypeEqual = null;
	this.serverTypeIn = null;
	this.serverTypeNotIn = null;
}
KalturaEntryServerNodeBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaEntryServerNodeListResponse(){
	this.objects = null;
}
KalturaEntryServerNodeListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	contentLike	string		.
 * @param	contentMultiLikeOr	string		.
 * @param	contentMultiLikeAnd	string		.
 */
function KalturaEntryTranscriptAssetSearchItem(){
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
}
KalturaEntryTranscriptAssetSearchItem.inheritsFrom (KalturaSearchItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaEntryVendorTaskListResponse(){
	this.objects = null;
}
KalturaEntryVendorTaskListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	eventType	string		.
 */
function KalturaEventCuePoint(){
	this.eventType = null;
}
KalturaEventCuePoint.inheritsFrom (KalturaCuePoint);


/**
 */
function KalturaBooleanField(){
}
KalturaBooleanField.inheritsFrom (KalturaBooleanValue);


/**
 * @param	field	KalturaBooleanField		The field to be evaluated at runtime.
 */
function KalturaEventFieldCondition(){
	this.field = null;
}
KalturaEventFieldCondition.inheritsFrom (KalturaCondition);


/**
 * @param	values	array		.
 * @param	allowedValues	array		Used to restrict the values to close list.
 */
function KalturaEventNotificationArrayParameter(){
	this.values = null;
	this.allowedValues = null;
}
KalturaEventNotificationArrayParameter.inheritsFrom (KalturaEventNotificationParameter);


/**
 * @param	templateId	int		.
 * @param	contentParameters	array		Define the content dynamic parameters.
 */
function KalturaEventNotificationDispatchJobData(){
	this.templateId = null;
	this.contentParameters = null;
}
KalturaEventNotificationDispatchJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objectId	string		.
 * @param	scopeObjectType	string		.
 */
function KalturaEventNotificationScope(){
	this.objectId = null;
	this.scopeObjectType = null;
}
KalturaEventNotificationScope.inheritsFrom (KalturaScope);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaEventNotificationTemplateBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaEventNotificationTemplateBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaEventNotificationTemplateListResponse(){
	this.objects = null;
}
KalturaEventNotificationTemplateListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	modifiedColumns	string		Comma seperated column names to be tested.
 */
function KalturaEventObjectChangedCondition(){
	this.modifiedColumns = null;
}
KalturaEventObjectChangedCondition.inheritsFrom (KalturaCondition);


/**
 * @param	exampleUrl	string		Just an example.
 */
function KalturaExampleIntegrationJobProviderData(){
	this.exampleUrl = null;
}
KalturaExampleIntegrationJobProviderData.inheritsFrom (KalturaIntegrationJobProviderData);


/**
 * @param	metadataProfileId	int		Metadata profile id to lookup the metadata object.
 * @param	metadataObjectType	string		Metadata object type to lookup the metadata object.
 * @param	xslt	string		The XSLT to execute.
 */
function KalturaExecuteMetadataXsltObjectTask(){
	this.metadataProfileId = null;
	this.metadataObjectType = null;
	this.xslt = null;
}
KalturaExecuteMetadataXsltObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	userName	string		The users name.
 * @param	userMail	string		The users email.
 * @param	outputPath	string		The file location.
 * @param	sharedOutputPath	string		.
 */
function KalturaExportCsvJobData(){
	this.userName = null;
	this.userMail = null;
	this.outputPath = null;
	this.sharedOutputPath = null;
}
KalturaExportCsvJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaExternalMediaEntryListResponse(){
	this.objects = null;
}
KalturaExternalMediaEntryListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaFacebookDistributionProvider(){
}
KalturaFacebookDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	publicCertificate	string		.
 */
function KalturaFairplayDrmProfile(){
	this.publicCertificate = null;
}
KalturaFairplayDrmProfile.inheritsFrom (KalturaDrmProfile);


/**
 * @param	publicCertificate	string		For fairplay (and maybe in the future other drm providers) we need to return a public certificate to encrypt
 *		 the request from the player to the server..
 */
function KalturaFairplayEntryContextPluginData(){
	this.publicCertificate = null;
}
KalturaFairplayEntryContextPluginData.inheritsFrom (KalturaPluginData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFeatureStatusListResponse(){
	this.objects = null;
}
KalturaFeatureStatusListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	itemHandlingLimit	int		.
 * @param	feedItemInfo	KalturaFeedItemInfo		.
 */
function KalturaFeedDropFolder(){
	this.itemHandlingLimit = null;
	this.feedItemInfo = null;
}
KalturaFeedDropFolder.inheritsFrom (KalturaDropFolder);


/**
 * @param	hash	string		MD5 or Sha1 encrypted string.
 * @param	feedXmlPath	string		Path of the original Feed content XML.
 */
function KalturaFeedDropFolderFile(){
	this.hash = null;
	this.feedXmlPath = null;
}
KalturaFeedDropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFileAssetListResponse(){
	this.objects = null;
}
KalturaFileAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	partnerIdEqual	int		.
 * @param	fileObjectTypeEqual	string		.
 * @param	fileObjectTypeIn	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	versionEqual	string		.
 * @param	versionIn	string		.
 * @param	objectSubTypeEqual	int		.
 * @param	objectSubTypeIn	string		.
 * @param	dcEqual	string		.
 * @param	dcIn	string		.
 * @param	originalEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	readyAtGreaterThanOrEqual	int		.
 * @param	readyAtLessThanOrEqual	int		.
 * @param	syncTimeGreaterThanOrEqual	int		.
 * @param	syncTimeLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	fileTypeEqual	int		.
 * @param	fileTypeIn	string		.
 * @param	linkedIdEqual	int		.
 * @param	linkCountGreaterThanOrEqual	int		.
 * @param	linkCountLessThanOrEqual	int		.
 * @param	fileSizeGreaterThanOrEqual	float		.
 * @param	fileSizeLessThanOrEqual	float		.
 */
function KalturaFileSyncBaseFilter(){
	this.partnerIdEqual = null;
	this.fileObjectTypeEqual = null;
	this.fileObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionIn = null;
	this.objectSubTypeEqual = null;
	this.objectSubTypeIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.originalEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.readyAtGreaterThanOrEqual = null;
	this.readyAtLessThanOrEqual = null;
	this.syncTimeGreaterThanOrEqual = null;
	this.syncTimeLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.fileTypeEqual = null;
	this.fileTypeIn = null;
	this.linkedIdEqual = null;
	this.linkCountGreaterThanOrEqual = null;
	this.linkCountLessThanOrEqual = null;
	this.fileSizeGreaterThanOrEqual = null;
	this.fileSizeLessThanOrEqual = null;
}
KalturaFileSyncBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFileSyncListResponse(){
	this.objects = null;
}
KalturaFileSyncListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaFlattenJobData(){
}
KalturaFlattenJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFlavorAssetListResponse(){
	this.objects = null;
}
KalturaFlavorAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFlavorParamsListResponse(){
	this.objects = null;
}
KalturaFlavorParamsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaFlavorParamsOutputListResponse(){
	this.objects = null;
}
KalturaFlavorParamsOutputListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	videoAssetFilePaths	array		Demonstrate passing array of paths to the job.
 * @param	thumbAssetFilePath	string		Demonstrate passing single path to the job.
 */
function KalturaFreewheelDistributionJobProviderData(){
	this.videoAssetFilePaths = null;
	this.thumbAssetFilePath = null;
}
KalturaFreewheelDistributionJobProviderData.inheritsFrom (KalturaDistributionJobProviderData);


/**
 * @param	apikey	string		.
 * @param	email	string		.
 * @param	sftpPass	string		.
 * @param	sftpLogin	string		.
 * @param	accountId	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaFreewheelDistributionProfile(){
	this.apikey = null;
	this.email = null;
	this.sftpPass = null;
	this.sftpLogin = null;
	this.accountId = null;
	this.metadataProfileId = null;
}
KalturaFreewheelDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 */
function KalturaFreewheelDistributionProvider(){
}
KalturaFreewheelDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaFreewheelGenericDistributionProvider(){
}
KalturaFreewheelGenericDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaFtpDistributionProvider(){
}
KalturaFtpDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	xml	string		.
 * @param	resultParseData	string		.
 * @param	resultParserType	int		.
 */
function KalturaGenericDistributionJobProviderData(){
	this.xml = null;
	this.resultParseData = null;
	this.resultParserType = null;
}
KalturaGenericDistributionJobProviderData.inheritsFrom (KalturaDistributionJobProviderData);


/**
 * @param	genericProviderId	int		 (insertOnly).
 * @param	submitAction	KalturaGenericDistributionProfileAction		.
 * @param	updateAction	KalturaGenericDistributionProfileAction		.
 * @param	deleteAction	KalturaGenericDistributionProfileAction		.
 * @param	fetchReportAction	KalturaGenericDistributionProfileAction		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaGenericDistributionProfile(){
	this.genericProviderId = null;
	this.submitAction = null;
	this.updateAction = null;
	this.deleteAction = null;
	this.fetchReportAction = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaGenericDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	genericDistributionProviderIdEqual	int		.
 * @param	genericDistributionProviderIdIn	string		.
 * @param	actionEqual	int		.
 * @param	actionIn	string		.
 */
function KalturaGenericDistributionProviderActionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.genericDistributionProviderIdEqual = null;
	this.genericDistributionProviderIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
}
KalturaGenericDistributionProviderActionBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaGenericDistributionProviderActionListResponse(){
	this.objects = null;
}
KalturaGenericDistributionProviderActionListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaGenericDistributionProviderListResponse(){
	this.objects = null;
}
KalturaGenericDistributionProviderListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	feedDescription	string		feed description.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website).
 * @param	entryFilter	KalturaBaseEntryFilter		entry filter.
 * @param	pageSize	int		page size.
 */
function KalturaGenericSyndicationFeed(){
	this.feedDescription = null;
	this.feedLandingPage = null;
	this.entryFilter = null;
	this.pageSize = null;
}
KalturaGenericSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	adultContent	string		.
 */
function KalturaGoogleVideoSyndicationFeed(){
	this.adultContent = null;
}
KalturaGoogleVideoSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaGroupListResponse(){
	this.objects = null;
}
KalturaGroupListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaGroupUserListResponse(){
	this.objects = null;
}
KalturaGroupUserListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	hashName	string		hash name.
 * @param	hashSecret	string		hash secret.
 */
function KalturaHashCondition(){
	this.hashName = null;
	this.hashSecret = null;
}
KalturaHashCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaHttpNotificationDataFields(){
}
KalturaHttpNotificationDataFields.inheritsFrom (KalturaHttpNotificationData);


/**
 * @param	content	KalturaStringValue		.
 */
function KalturaHttpNotificationDataText(){
	this.content = null;
}
KalturaHttpNotificationDataText.inheritsFrom (KalturaHttpNotificationData);


/**
 * @param	apiObjectType	string		Kaltura API object type.
 * @param	format	int		Data format.
 * @param	ignoreNull	bool		Ignore null attributes during serialization.
 * @param	code	string		PHP code.
 * @param	dataStringReplacements	array		An array of pattern-replacement pairs used for data string regex replacements.
 */
function KalturaHttpNotificationObjectData(){
	this.apiObjectType = null;
	this.format = null;
	this.ignoreNull = null;
	this.code = null;
	this.dataStringReplacements = null;
}
KalturaHttpNotificationObjectData.inheritsFrom (KalturaHttpNotificationData);


/**
 * @param	url	string		Remote server URL.
 * @param	method	int		Request method..
 * @param	data	KalturaHttpNotificationData		Data to send..
 * @param	timeout	int		The maximum number of seconds to allow cURL functions to execute..
 * @param	connectTimeout	int		The number of seconds to wait while trying to connect.
 *		 Must be larger than zero..
 * @param	username	string		A username to use for the connection..
 * @param	password	string		A password to use for the connection..
 * @param	authenticationMethod	int		The HTTP authentication method to use..
 * @param	sslVersion	int		The SSL version (2 or 3) to use.
 *		 By default PHP will try to determine this itself, although in some cases this must be set manually..
 * @param	sslCertificate	string		SSL certificate to verify the peer with..
 * @param	sslCertificateType	string		The format of the certificate..
 * @param	sslCertificatePassword	string		The password required to use the certificate..
 * @param	sslEngine	string		The identifier for the crypto engine of the private SSL key specified in ssl key..
 * @param	sslEngineDefault	string		The identifier for the crypto engine used for asymmetric crypto operations..
 * @param	sslKeyType	string		The key type of the private SSL key specified in ssl key - PEM / DER / ENG..
 * @param	sslKey	string		Private SSL key..
 * @param	sslKeyPassword	string		The secret password needed to use the private SSL key specified in ssl key..
 * @param	customHeaders	array		Adds a e-mail custom header.
 * @param	secureHashingAlgo	int		The type of SHA to use..
 */
function KalturaHttpNotificationTemplate(){
	this.url = null;
	this.method = null;
	this.data = null;
	this.timeout = null;
	this.connectTimeout = null;
	this.username = null;
	this.password = null;
	this.authenticationMethod = null;
	this.sslVersion = null;
	this.sslCertificate = null;
	this.sslCertificateType = null;
	this.sslCertificatePassword = null;
	this.sslEngine = null;
	this.sslEngineDefault = null;
	this.sslKeyType = null;
	this.sslKey = null;
	this.sslKeyPassword = null;
	this.customHeaders = null;
	this.secureHashingAlgo = null;
}
KalturaHttpNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 */
function KalturaHuluDistributionProvider(){
}
KalturaHuluDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	feedDescription	string		feed description.
 * @param	language	string		feed language.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website).
 * @param	ownerName	string		author/publisher name.
 * @param	ownerEmail	string		publisher email.
 * @param	feedImageUrl	string		podcast thumbnail.
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedAuthor	string		.
 * @param	enforceFeedAuthor	bool		.
 * @param	enforceOrder	int		true in case you want to enfore the palylist order on the.
 */
function KalturaITunesSyndicationFeed(){
	this.feedDescription = null;
	this.language = null;
	this.feedLandingPage = null;
	this.ownerName = null;
	this.ownerEmail = null;
	this.feedImageUrl = null;
	this.category = null;
	this.adultContent = null;
	this.feedAuthor = null;
	this.enforceFeedAuthor = null;
	this.enforceOrder = null;
}
KalturaITunesSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 */
function KalturaIdeticDistributionProvider(){
}
KalturaIdeticDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	srcFileUrl	string		.
 * @param	destFileLocalPath	string		.
 * @param	flavorAssetId	string		.
 * @param	fileSize	int		.
 * @param	destFileSharedPath	string		.
 * @param	urlHeaders	array		.
 * @param	shouldRedirect	bool		.
 */
function KalturaImportJobData(){
	this.srcFileUrl = null;
	this.destFileLocalPath = null;
	this.flavorAssetId = null;
	this.fileSize = null;
	this.destFileSharedPath = null;
	this.urlHeaders = null;
	this.shouldRedirect = null;
}
KalturaImportJobData.inheritsFrom (KalturaJobData);


/**
 * @param	srcFileUrl	string		.
 * @param	destFileLocalPath	string		.
 * @param	metadataId	int		.
 */
function KalturaImportMetadataJobData(){
	this.srcFileUrl = null;
	this.destFileLocalPath = null;
	this.metadataId = null;
}
KalturaImportMetadataJobData.inheritsFrom (KalturaJobData);


/**
 * @param	indexIdGreaterThan	int		.
 * @param	depthGreaterThanEqual	int		.
 */
function KalturaIndexAdvancedFilter(){
	this.indexIdGreaterThan = null;
	this.depthGreaterThanEqual = null;
}
KalturaIndexAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	filter	KalturaFilter		The filter should return the list of objects that need to be reindexed..
 * @param	lastIndexId	int		Indicates the last id that reindexed, used when the batch crached, to re-run from the last crash point..
 * @param	lastIndexDepth	int		Indicates the last depth that reindexed, used when the batch crached, to re-run from the last crash point..
 * @param	shouldUpdate	bool		Indicates that the object columns and attributes values should be recalculated before reindexed..
 */
function KalturaIndexJobData(){
	this.filter = null;
	this.lastIndexId = null;
	this.lastIndexDepth = null;
	this.shouldUpdate = null;
}
KalturaIndexJobData.inheritsFrom (KalturaJobData);


/**
 * @param	changedCategoryId	int		.
 * @param	deletedPrivacyContexts	string		.
 * @param	addedPrivacyContexts	string		.
 */
function KalturaIndexTagsByPrivacyContextJobData(){
	this.changedCategoryId = null;
	this.deletedPrivacyContexts = null;
	this.addedPrivacyContexts = null;
}
KalturaIndexTagsByPrivacyContextJobData.inheritsFrom (KalturaJobData);


/**
 * @param	callbackNotificationUrl	string		 (readOnly).
 * @param	providerType	string		.
 * @param	providerData	KalturaIntegrationJobProviderData		Additional data that relevant for the provider only.
 * @param	triggerType	string		.
 * @param	triggerData	KalturaIntegrationJobTriggerData		Additional data that relevant for the trigger only.
 */
function KalturaIntegrationJobData(){
	this.callbackNotificationUrl = null;
	this.providerType = null;
	this.providerData = null;
	this.triggerType = null;
	this.triggerData = null;
}
KalturaIntegrationJobData.inheritsFrom (KalturaJobData);


/**
 * @param	assetId	string		Optional - The id of the caption asset object (insertOnly).
 */
function KalturaIntelligentTaggingVendorTaskData(){
	this.assetId = null;
}
KalturaIntelligentTaggingVendorTaskData.inheritsFrom (KalturaVendorTaskData);


/**
 */
function KalturaInteractivity(){
}
KalturaInteractivity.inheritsFrom (KalturaBaseInteractivity);


/**
 * @param	ipAddressRestrictionType	int		Ip address restriction type (Allow or deny).
 * @param	ipAddressList	string		Comma separated list of ip address to allow to deny.
 */
function KalturaIpAddressRestriction(){
	this.ipAddressRestrictionType = null;
	this.ipAddressList = null;
}
KalturaIpAddressRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	topicName	string		Define the content dynamic parameters.
 * @param	partitionKey	string		Define the content dynamic parameters.
 * @param	messageFormat	int		Define the content dynamic parameters.
 * @param	apiObjectType	string		Kaltura API object type.
 * @param	responseProfileSystemName	string		Kaltura response-profile system name.
 * @param	requiresPermissions	string		Partner permissions needed to trigger the notification (comma seperated list of permissions).
 */
function KalturaKafkaNotificationTemplate(){
	this.topicName = null;
	this.partitionKey = null;
	this.messageFormat = null;
	this.apiObjectType = null;
	this.responseProfileSystemName = null;
	this.requiresPermissions = null;
}
KalturaKafkaNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 * @param	predefinedFormat	int		.
 */
function KalturaKeyValueExtended(){
	this.predefinedFormat = null;
}
KalturaKeyValueExtended.inheritsFrom (KalturaKeyValue);


/**
 * @param	serviceToken	string		.
 */
function KalturaKontikiStorageProfile(){
	this.serviceToken = null;
}
KalturaKontikiStorageProfile.inheritsFrom (KalturaStorageProfile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaLikeListResponse(){
	this.objects = null;
}
KalturaLikeListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	limitFlavorsRestrictionType	int		Limit flavors restriction type (Allow or deny).
 * @param	flavorParamsIds	string		Comma separated list of flavor params ids to allow to deny.
 */
function KalturaLimitFlavorsRestriction(){
	this.limitFlavorsRestrictionType = null;
	this.flavorParamsIds = null;
}
KalturaLimitFlavorsRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	mediaUrl	string		.
 * @param	mediaKey	string		.
 * @param	captionUrl	string		.
 * @param	captionToken	string		.
 * @param	inputDelay	int		.
 * @param	captionFormat	string		.
 * @param	language	string		.
 */
function KalturaLiveCaptionFeature(){
	this.mediaUrl = null;
	this.mediaKey = null;
	this.captionUrl = null;
	this.captionToken = null;
	this.inputDelay = null;
	this.captionFormat = null;
	this.language = null;
}
KalturaLiveCaptionFeature.inheritsFrom (KalturaLiveFeature);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaLiveChannelListResponse(){
	this.objects = null;
}
KalturaLiveChannelListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaLiveChannelSegmentListResponse(){
	this.objects = null;
}
KalturaLiveChannelSegmentListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	liveEntryId	string		.
 * @param	vodEntryId	string		.
 */
function KalturaLiveEntryArchiveJobData(){
	this.liveEntryId = null;
	this.vodEntryId = null;
}
KalturaLiveEntryArchiveJobData.inheritsFrom (KalturaJobData);


/**
 * @param	entryId	string		.
 */
function KalturaLiveEntryScheduleResource(){
	this.entryId = null;
}
KalturaLiveEntryScheduleResource.inheritsFrom (KalturaScheduleResource);


/**
 * @param	streams	array		parameters of the stream we got.
 * @param	recordingInfo	array		.
 * @param	isPlayableUser	bool		.
 * @param	viewMode	int		.
 * @param	featuresUpdatedAt	int		.
 * @param	viewModeUpdatedAt	int		.
 */
function KalturaLiveEntryServerNode(){
	this.streams = null;
	this.recordingInfo = null;
	this.isPlayableUser = null;
	this.viewMode = null;
	this.featuresUpdatedAt = null;
	this.viewModeUpdatedAt = null;
}
KalturaLiveEntryServerNode.inheritsFrom (KalturaEntryServerNode);


/**
 * @param	timeReference	int		.
 * @param	timeZoneOffset	int		.
 * @param	entryIds	string		.
 * @param	outputPath	string		.
 * @param	recipientEmail	string		.
 */
function KalturaLiveReportExportJobData(){
	this.timeReference = null;
	this.timeZoneOffset = null;
	this.entryIds = null;
	this.outputPath = null;
	this.recipientEmail = null;
}
KalturaLiveReportExportJobData.inheritsFrom (KalturaJobData);


/**
 * @param	primaryUrl	string		.
 * @param	secondaryUrl	string		.
 * @param	playbackUrl	string		.
 * @param	streamKey	string		.
 */
function KalturaLiveRestreamFeature(){
	this.primaryUrl = null;
	this.secondaryUrl = null;
	this.playbackUrl = null;
	this.streamKey = null;
}
KalturaLiveRestreamFeature.inheritsFrom (KalturaLiveFeature);


/**
 * @param	objects	KalturaLiveStats		.
 */
function KalturaLiveStatsListResponse(){
	this.objects = null;
}
KalturaLiveStatsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaLiveStreamListResponse(){
	this.objects = null;
}
KalturaLiveStreamListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	userId	string		.
 * @param	password	string		.
 * @param	streamName	string		.
 * @param	applicationName	string		.
 */
function KalturaLiveStreamPushPublishRTMPConfiguration(){
	this.userId = null;
	this.password = null;
	this.streamName = null;
	this.applicationName = null;
}
KalturaLiveStreamPushPublishRTMPConfiguration.inheritsFrom (KalturaLiveStreamPushPublishConfiguration);


/**
 * @param	vodEntryId	string		$vod Entry Id.
 * @param	liveEntryId	string		live Entry Id.
 * @param	totalVodDuration	float		total VOD Duration.
 * @param	lastSegmentDuration	float		last Segment Duration.
 * @param	amfArray	string		amf Array File Path.
 * @param	lastCuePointSyncTime	int		last live to vod sync time.
 * @param	lastSegmentDrift	int		last segment drift.
 */
function KalturaLiveToVodJobData(){
	this.vodEntryId = null;
	this.liveEntryId = null;
	this.totalVodDuration = null;
	this.lastSegmentDuration = null;
	this.amfArray = null;
	this.lastCuePointSyncTime = null;
	this.lastSegmentDrift = null;
}
KalturaLiveToVodJobData.inheritsFrom (KalturaJobData);


/**
 * @param	outputLanguage	string		Language code.
 * @param	outputJson	string		result as JSON string..
 */
function KalturaLocalizedVendorTaskData(){
	this.outputLanguage = null;
	this.outputJson = null;
}
KalturaLocalizedVendorTaskData.inheritsFrom (KalturaVendorTaskData);


/**
 */
function KalturaLocationScheduleResource(){
}
KalturaLocationScheduleResource.inheritsFrom (KalturaScheduleResource);


/**
 * @param	mailType	string		.
 * @param	mailPriority	int		.
 * @param	status	int		.
 * @param	recipientName	string		.
 * @param	recipientEmail	string		.
 * @param	recipientId	int		kuserId.
 * @param	fromName	string		.
 * @param	fromEmail	string		.
 * @param	bodyParams	string		.
 * @param	subjectParams	string		.
 * @param	dynamicEmailContents	KalturaDynamicEmailContents		.
 * @param	templatePath	string		.
 * @param	language	string		.
 * @param	campaignId	int		.
 * @param	minSendDate	int		.
 * @param	isHtml	bool		.
 * @param	separator	string		.
 */
function KalturaMailJobData(){
	this.mailType = null;
	this.mailPriority = null;
	this.status = null;
	this.recipientName = null;
	this.recipientEmail = null;
	this.recipientId = null;
	this.fromName = null;
	this.fromEmail = null;
	this.bodyParams = null;
	this.subjectParams = null;
	this.dynamicEmailContents = null;
	this.templatePath = null;
	this.language = null;
	this.campaignId = null;
	this.minSendDate = null;
	this.isHtml = null;
	this.separator = null;
}
KalturaMailJobData.inheritsFrom (KalturaJobData);


/**
 * @param	mailTo	string		The mail to send the notification to.
 * @param	sender	string		The sender in the mail.
 * @param	subject	string		The subject of the entry.
 * @param	message	string		The message to send in the notification mail.
 * @param	footer	string		The footer of the message to send in the notification mail.
 * @param	link	string		The basic link for the KMC site.
 * @param	sendToUsers	bool		Send the mail to each user.
 */
function KalturaMailNotificationObjectTask(){
	this.mailTo = null;
	this.sender = null;
	this.subject = null;
	this.message = null;
	this.footer = null;
	this.link = null;
	this.sendToUsers = null;
}
KalturaMailNotificationObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	values	array		.
 * @param	matchType	string		.
 */
function KalturaMatchCondition(){
	this.values = null;
	this.matchType = null;
}
KalturaMatchCondition.inheritsFrom (KalturaCondition);


/**
 * @param	flavorAssetIdEqual	string		.
 */
function KalturaMediaInfoBaseFilter(){
	this.flavorAssetIdEqual = null;
}
KalturaMediaInfoBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMediaInfoListResponse(){
	this.objects = null;
}
KalturaMediaInfoListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMediaListResponse(){
	this.objects = null;
}
KalturaMediaListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMetadataListResponse(){
	this.objects = null;
}
KalturaMetadataListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	idEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	metadataObjectTypeEqual	string		.
 * @param	metadataObjectTypeIn	string		.
 * @param	versionEqual	int		.
 * @param	nameEqual	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createModeEqual	int		.
 * @param	createModeNotEqual	int		.
 * @param	createModeIn	string		.
 * @param	createModeNotIn	string		.
 */
function KalturaMetadataProfileBaseFilter(){
	this.idEqual = null;
	this.partnerIdEqual = null;
	this.metadataObjectTypeEqual = null;
	this.metadataObjectTypeIn = null;
	this.versionEqual = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createModeEqual = null;
	this.createModeNotEqual = null;
	this.createModeIn = null;
	this.createModeNotIn = null;
}
KalturaMetadataProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMetadataProfileFieldListResponse(){
	this.objects = null;
}
KalturaMetadataProfileFieldListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMetadataProfileListResponse(){
	this.objects = null;
}
KalturaMetadataProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	shouldCopyMetadata	bool		If true custom-metadata transferred to temp entry on entry replacement.
 */
function KalturaMetadataReplacementOptionsItem(){
	this.shouldCopyMetadata = null;
}
KalturaMetadataReplacementOptionsItem.inheritsFrom (KalturaPluginReplacementOptionsItem);


/**
 */
function KalturaMetadataResponseProfileMapping(){
}
KalturaMetadataResponseProfileMapping.inheritsFrom (KalturaResponseProfileMapping);


/**
 */
function KalturaMetroPcsDistributionProvider(){
}
KalturaMetroPcsDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	remoteId	string		.
 * @param	ownerId	string		.
 * @param	additionalUserIds	string		.
 * @param	description	string		.
 * @param	targetCategoryIds	string		.
 * @param	name	string		.
 * @param	contentUrl	string		.
 */
function KalturaMicrosoftTeamsDropFolderFile(){
	this.remoteId = null;
	this.ownerId = null;
	this.additionalUserIds = null;
	this.description = null;
	this.targetCategoryIds = null;
	this.name = null;
	this.contentUrl = null;
}
KalturaMicrosoftTeamsDropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	clientSecret	string		.
 * @param	clientId	string		.
 * @param	userMetadataProfileId	int		User-level custom metadata profile ID which will contain encrypted user-level Graph access data..
 * @param	scopes	string		MS Graph permission scopes for delegate auth.
 * @param	encryptionKey	string		Encryption key used for encrypting/decrypting user auth data. (readOnly).
 */
function KalturaMicrosoftTeamsIntegrationSetting(){
	this.clientSecret = null;
	this.clientId = null;
	this.userMetadataProfileId = null;
	this.scopes = null;
	this.encryptionKey = null;
}
KalturaMicrosoftTeamsIntegrationSetting.inheritsFrom (KalturaIntegrationSetting);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaMixListResponse(){
	this.objects = null;
}
KalturaMixListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaModerationFlagListResponse(){
	this.objects = null;
}
KalturaModerationFlagListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	ruleIds	string		A comma seperated string of rule IDs..
 * @param	policyIds	string		A comma seperated string of policy IDs..
 * @param	categoryIds	string		A comma seperated string of category IDs..
 * @param	moderationOutputJson	string		JSON string containing the moderation output..
 */
function KalturaModerationVendorTaskData(){
	this.ruleIds = null;
	this.policyIds = null;
	this.categoryIds = null;
	this.moderationOutputJson = null;
}
KalturaModerationVendorTaskData.inheritsFrom (KalturaVendorTaskData);


/**
 * @param	addRemoveType	int		Should the object task add or remove categories?.
 * @param	categoryIds	array		The list of category ids to add or remove.
 */
function KalturaModifyCategoriesObjectTask(){
	this.addRemoveType = null;
	this.categoryIds = null;
}
KalturaModifyCategoriesObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	inputMetadataProfileId	int		The input metadata profile id.
 * @param	inputMetadata	array		array of {input metadata xpath location,entry field} objects.
 * @param	outputMetadataProfileId	int		The output metadata profile id.
 * @param	outputMetadata	array		array of {output metadata xpath location,entry field} objects.
 * @param	inputUserId	string		The input user id to set on the entry.
 * @param	inputEntitledUsersEdit	string		The input entitled users edit to set on the entry.
 * @param	inputEntitledUsersPublish	string		The input entitled users publish to set on the entry.
 * @param	inputEntitledUsersView	string		The input entitled users view to set on the entry.
 * @param	resetMediaRepurposingProcess	bool		Should clear the media repurposing data and therefore reset the process.
 */
function KalturaModifyEntryObjectTask(){
	this.inputMetadataProfileId = null;
	this.inputMetadata = null;
	this.outputMetadataProfileId = null;
	this.outputMetadata = null;
	this.inputUserId = null;
	this.inputEntitledUsersEdit = null;
	this.inputEntitledUsersPublish = null;
	this.inputEntitledUsersView = null;
	this.resetMediaRepurposingProcess = null;
}
KalturaModifyEntryObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	srcCategoryId	int		Source category id.
 * @param	destCategoryId	int		Destination category id.
 * @param	lastMovedCategoryId	int		Saves the last category id that its entries moved completely
 *	     In case of crash the batch will restart from that point.
 * @param	lastMovedCategoryPageIndex	int		Saves the last page index of the child categories filter pager
 *	     In case of crash the batch will restart from that point.
 * @param	lastMovedCategoryEntryPageIndex	int		Saves the last page index of the category entries filter pager
 *	     In case of crash the batch will restart from that point.
 * @param	moveFromChildren	bool		All entries from all child categories will be moved as well.
 * @param	destCategoryFullIds	string		Destination categories fallback ids.
 */
function KalturaMoveCategoryEntriesJobData(){
	this.srcCategoryId = null;
	this.destCategoryId = null;
	this.lastMovedCategoryId = null;
	this.lastMovedCategoryPageIndex = null;
	this.lastMovedCategoryEntryPageIndex = null;
	this.moveFromChildren = null;
	this.destCategoryFullIds = null;
}
KalturaMoveCategoryEntriesJobData.inheritsFrom (KalturaJobData);


/**
 */
function KalturaMsnDistributionProvider(){
}
KalturaMsnDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	destEntryId	string		.
 * @param	multiTempEntryId	string		.
 * @param	partnerId	int		.
 * @param	priority	int		.
 * @param	chapterNamePolicy	int		.
 * @param	aspectRatio	KalturaCropAspectRatio		.
 * @param	operationResources	array		.
 */
function KalturaMultiClipConcatJobData(){
	this.destEntryId = null;
	this.multiTempEntryId = null;
	this.partnerId = null;
	this.priority = null;
	this.chapterNamePolicy = null;
	this.aspectRatio = null;
	this.operationResources = null;
}
KalturaMultiClipConcatJobData.inheritsFrom (KalturaJobData);


/**
 */
function KalturaNdnDistributionProvider(){
}
KalturaNdnDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	userId	string		.
 * @param	type	int		.
 * @param	typeAsString	string		.
 * @param	objectId	string		.
 * @param	status	int		.
 * @param	data	string		.
 * @param	numberOfAttempts	int		.
 * @param	notificationResult	string		.
 * @param	objType	int		.
 */
function KalturaNotificationJobData(){
	this.userId = null;
	this.type = null;
	this.typeAsString = null;
	this.objectId = null;
	this.status = null;
	this.data = null;
	this.numberOfAttempts = null;
	this.notificationResult = null;
	this.objType = null;
}
KalturaNotificationJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaObjectListResponse(){
	this.objects = null;
}
KalturaObjectListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	conditions	array		.
 */
function KalturaOrCondition(){
	this.conditions = null;
}
KalturaOrCondition.inheritsFrom (KalturaCondition);


/**
 * @param	captionAssetId	string		.
 */
function KalturaParseCaptionAssetJobData(){
	this.captionAssetId = null;
}
KalturaParseCaptionAssetJobData.inheritsFrom (KalturaJobData);


/**
 * @param	multiLanaguageCaptionAssetId	string		.
 * @param	entryId	string		.
 * @param	fileLocation	string		.
 * @param	fileEncryptionKey	string		.
 */
function KalturaParseMultiLanguageCaptionAssetJobData(){
	this.multiLanaguageCaptionAssetId = null;
	this.entryId = null;
	this.fileLocation = null;
	this.fileEncryptionKey = null;
}
KalturaParseMultiLanguageCaptionAssetJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	nameLike	string		.
 * @param	nameMultiLikeOr	string		.
 * @param	nameMultiLikeAnd	string		.
 * @param	nameEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerPackageEqual	int		.
 * @param	partnerPackageGreaterThanOrEqual	int		.
 * @param	partnerPackageLessThanOrEqual	int		.
 * @param	partnerPackageIn	string		.
 * @param	partnerGroupTypeEqual	int		.
 * @param	partnerNameDescriptionWebsiteAdminNameAdminEmailLike	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	idGreaterThan	int		.
 * @param	monitorUsageEqual	int		.
 */
function KalturaPartnerBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerPackageEqual = null;
	this.partnerPackageGreaterThanOrEqual = null;
	this.partnerPackageLessThanOrEqual = null;
	this.partnerPackageIn = null;
	this.partnerGroupTypeEqual = null;
	this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
	this.createdAtGreaterThanOrEqual = null;
	this.idGreaterThan = null;
	this.monitorUsageEqual = null;
}
KalturaPartnerBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaPartnerListResponse(){
	this.objects = null;
}
KalturaPartnerListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	total	KalturaVarPartnerUsageItem		.
 * @param	objects	array		.
 */
function KalturaPartnerUsageListResponse(){
	this.total = null;
	this.objects = null;
}
KalturaPartnerUsageListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaPermissionItemListResponse(){
	this.objects = null;
}
KalturaPermissionItemListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	permissionLevels	array		Playback context.
 * @param	permissionOrder	int		.
 */
function KalturaPermissionLevelUserEntry(){
	this.permissionLevels = null;
	this.permissionOrder = null;
}
KalturaPermissionLevelUserEntry.inheritsFrom (KalturaUserEntry);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaPermissionListResponse(){
	this.objects = null;
}
KalturaPermissionListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	copyCount	int		.
 * @param	copyEnablers	array		.
 */
function KalturaPlayReadyCopyRight(){
	this.copyCount = null;
	this.copyEnablers = null;
}
KalturaPlayReadyCopyRight.inheritsFrom (KalturaPlayReadyRight);


/**
 * @param	analogVideoOPL	int		.
 * @param	analogVideoOutputProtectionList	array		.
 * @param	compressedDigitalAudioOPL	int		.
 * @param	compressedDigitalVideoOPL	int		.
 * @param	digitalAudioOutputProtectionList	array		.
 * @param	uncompressedDigitalAudioOPL	int		.
 * @param	uncompressedDigitalVideoOPL	int		.
 * @param	firstPlayExpiration	int		.
 * @param	playEnablers	array		.
 */
function KalturaPlayReadyPlayRight(){
	this.analogVideoOPL = null;
	this.analogVideoOutputProtectionList = null;
	this.compressedDigitalAudioOPL = null;
	this.compressedDigitalVideoOPL = null;
	this.digitalAudioOutputProtectionList = null;
	this.uncompressedDigitalAudioOPL = null;
	this.uncompressedDigitalVideoOPL = null;
	this.firstPlayExpiration = null;
	this.playEnablers = null;
}
KalturaPlayReadyPlayRight.inheritsFrom (KalturaPlayReadyRight);


/**
 * @param	keySeed	string		.
 */
function KalturaPlayReadyProfile(){
	this.keySeed = null;
}
KalturaPlayReadyProfile.inheritsFrom (KalturaDrmProfile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaPlaylistListResponse(){
	this.objects = null;
}
KalturaPlaylistListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	xml	string		.
 * @param	metadataProfileId	int		.
 * @param	distributionProfileId	int		.
 */
function KalturaPodcastDistributionJobProviderData(){
	this.xml = null;
	this.metadataProfileId = null;
	this.distributionProfileId = null;
}
KalturaPodcastDistributionJobProviderData.inheritsFrom (KalturaDistributionJobProviderData);


/**
 * @param	xsl	string		.
 * @param	feedId	string		 (readOnly).
 * @param	metadataProfileId	int		.
 */
function KalturaPodcastDistributionProfile(){
	this.xsl = null;
	this.feedId = null;
	this.metadataProfileId = null;
}
KalturaPodcastDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 */
function KalturaPodcastDistributionProvider(){
}
KalturaPodcastDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	streamID	string		.
 * @param	backupStreamID	string		.
 * @param	rtmp	string		.
 * @param	encoderIP	string		.
 * @param	backupEncoderIP	string		.
 * @param	encoderPassword	string		.
 * @param	encoderUsername	string		.
 * @param	endDate	int		.
 * @param	returnVal	string		.
 * @param	mediaType	int		.
 * @param	primaryBroadcastingUrl	string		.
 * @param	secondaryBroadcastingUrl	string		.
 * @param	streamName	string		.
 */
function KalturaProvisionJobData(){
	this.streamID = null;
	this.backupStreamID = null;
	this.rtmp = null;
	this.encoderIP = null;
	this.backupEncoderIP = null;
	this.encoderPassword = null;
	this.encoderUsername = null;
	this.endDate = null;
	this.returnVal = null;
	this.mediaType = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.streamName = null;
}
KalturaProvisionJobData.inheritsFrom (KalturaJobData);


/**
 * @param	queueNameParameters	array		Define the content dynamic parameters.
 * @param	queueKeyParameters	array		Define the content dynamic parameters.
 * @param	apiObjectType	string		Kaltura API object type.
 * @param	objectFormat	int		Kaltura Object format.
 * @param	responseProfileId	int		Kaltura response-profile id.
 */
function KalturaPushNotificationTemplate(){
	this.queueNameParameters = null;
	this.queueKeyParameters = null;
	this.apiObjectType = null;
	this.objectFormat = null;
	this.responseProfileId = null;
}
KalturaPushNotificationTemplate.inheritsFrom (KalturaEventNotificationTemplate);


/**
 */
function KalturaPushToNewsDistributionProvider(){
}
KalturaPushToNewsDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	optionalAnswers	array		Array of key value answerKey->optionAnswer objects.
 * @param	hint	string		.
 * @param	question	string		.
 * @param	explanation	string		.
 * @param	questionType	int		.
 * @param	presentationOrder	int		.
 * @param	excludeFromScore	int		.
 */
function KalturaQuestionCuePoint(){
	this.optionalAnswers = null;
	this.hint = null;
	this.question = null;
	this.explanation = null;
	this.questionType = null;
	this.presentationOrder = null;
	this.excludeFromScore = null;
}
KalturaQuestionCuePoint.inheritsFrom (KalturaCuePoint);


/**
 */
function KalturaQuickPlayDistributionProvider(){
}
KalturaQuickPlayDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	isQuiz	int		.
 */
function KalturaQuizAdvancedFilter(){
	this.isQuiz = null;
}
KalturaQuizAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaQuizListResponse(){
	this.objects = null;
}
KalturaQuizListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	score	float		 (readOnly).
 * @param	calculatedScore	float		 (readOnly).
 * @param	feedback	string		.
 * @param	version	int		 (readOnly).
 * @param	extendedStatus	string		.
 */
function KalturaQuizUserEntry(){
	this.score = null;
	this.calculatedScore = null;
	this.feedback = null;
	this.version = null;
	this.extendedStatus = null;
}
KalturaQuizUserEntry.inheritsFrom (KalturaUserEntry);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaRatingCountListResponse(){
	this.objects = null;
}
KalturaRatingCountListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaReachProfileListResponse(){
	this.objects = null;
}
KalturaReachProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaRecalculateCacheJobData(){
}
KalturaRecalculateCacheJobData.inheritsFrom (KalturaJobData);


/**
 */
function KalturaRecycleBinCleanupObjectTask(){
}
KalturaRecycleBinCleanupObjectTask.inheritsFrom (KalturaObjectTask);


/**
 */
function KalturaRegistrationUserEntry(){
}
KalturaRegistrationUserEntry.inheritsFrom (KalturaUserEntry);


/**
 */
function KalturaRemoteDropFolder(){
}
KalturaRemoteDropFolder.inheritsFrom (KalturaDropFolder);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaRemotePathListResponse(){
	this.objects = null;
}
KalturaRemotePathListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	fontName	string		.
 * @param	fontSize	int		.
 * @param	primaryColour	string		.
 * @param	borderStyle	int		.
 * @param	backColour	string		.
 * @param	outlineColour	string		.
 * @param	shadow	int		.
 * @param	bold	bool		.
 * @param	italic	bool		.
 * @param	underline	bool		.
 * @param	alignment	int		.
 * @param	captionAssetId	string		.
 */
function KalturaRenderCaptionAttributes(){
	this.fontName = null;
	this.fontSize = null;
	this.primaryColour = null;
	this.borderStyle = null;
	this.backColour = null;
	this.outlineColour = null;
	this.shadow = null;
	this.bold = null;
	this.italic = null;
	this.underline = null;
	this.alignment = null;
	this.captionAssetId = null;
}
KalturaRenderCaptionAttributes.inheritsFrom (KalturaCaptionAttributes);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 */
function KalturaReportBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
KalturaReportBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	recipientEmail	string		.
 * @param	recipientName	string		.
 * @param	reportItems	array		.
 * @param	filePaths	string		.
 * @param	reportsGroup	string		.
 * @param	files	array		.
 * @param	baseUrl	string		.
 */
function KalturaReportExportJobData(){
	this.recipientEmail = null;
	this.recipientName = null;
	this.reportItems = null;
	this.filePaths = null;
	this.reportsGroup = null;
	this.files = null;
	this.baseUrl = null;
}
KalturaReportExportJobData.inheritsFrom (KalturaJobData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaReportListResponse(){
	this.objects = null;
}
KalturaReportListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaResponseProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaResponseProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	id	int		Auto generated numeric identifier.
 * @param	systemName	string		Unique system name.
 */
function KalturaResponseProfileHolder(){
	this.id = null;
	this.systemName = null;
}
KalturaResponseProfileHolder.inheritsFrom (KalturaBaseResponseProfile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaResponseProfileListResponse(){
	this.objects = null;
}
KalturaResponseProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaRoomEntryListResponse(){
	this.objects = null;
}
KalturaRoomEntryListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaRsvpUserEntry(){
}
KalturaRsvpUserEntry.inheritsFrom (KalturaUserEntry);


/**
 * @param	s3Host	string		.
 * @param	s3Region	string		.
 * @param	s3UserId	string		.
 * @param	s3Password	string		.
 * @param	useS3Arn	bool		.
 * @param	s3Arn	string		 (readOnly).
 */
function KalturaS3DropFolder(){
	this.s3Host = null;
	this.s3Region = null;
	this.s3UserId = null;
	this.s3Password = null;
	this.useS3Arn = null;
	this.s3Arn = null;
}
KalturaS3DropFolder.inheritsFrom (KalturaDropFolder);


/**
 */
function KalturaS3DropFolderFile(){
}
KalturaS3DropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaScheduleEventListResponse(){
	this.objects = null;
}
KalturaScheduleEventListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaScheduleEventResourceListResponse(){
	this.objects = null;
}
KalturaScheduleEventResourceListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaScheduleResourceListResponse(){
	this.objects = null;
}
KalturaScheduleResourceListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	maxResults	int		.
 * @param	totalCount	int		.
 * @param	fileFormat	int		.
 * @param	resultsFilePath	string		.
 * @param	referenceTime	int		.
 */
function KalturaScheduledTaskJobData(){
	this.maxResults = null;
	this.totalCount = null;
	this.fileFormat = null;
	this.resultsFilePath = null;
	this.referenceTime = null;
}
KalturaScheduledTaskJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	lastExecutionStartedAtGreaterThanOrEqual	int		.
 * @param	lastExecutionStartedAtLessThanOrEqual	int		.
 * @param	lastExecutionStartedAtLessThanOrEqualOrNull	int		.
 * @param	objectFilterEngineTypeIn	string		.
 */
function KalturaScheduledTaskProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.lastExecutionStartedAtGreaterThanOrEqual = null;
	this.lastExecutionStartedAtLessThanOrEqual = null;
	this.lastExecutionStartedAtLessThanOrEqualOrNull = null;
	this.objectFilterEngineTypeIn = null;
}
KalturaScheduledTaskProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaScheduledTaskProfileListResponse(){
	this.objects = null;
}
KalturaScheduledTaskProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	startDate	int		 (insertOnly).
 * @param	endDate	int		 (insertOnly).
 * @param	scheduledEventId	int		 (insertOnly).
 */
function KalturaScheduledVendorTaskData(){
	this.startDate = null;
	this.endDate = null;
	this.scheduledEventId = null;
}
KalturaScheduledVendorTaskData.inheritsFrom (KalturaVendorTaskData);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaSchedulerListResponse(){
	this.objects = null;
}
KalturaSchedulerListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaSchedulerWorkerListResponse(){
	this.objects = null;
}
KalturaSchedulerWorkerListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaSearchCondition(){
	this.field = null;
	this.value = null;
}
KalturaSearchCondition.inheritsFrom (KalturaSearchItem);


/**
 * @param	type	int		.
 * @param	items	array		.
 */
function KalturaSearchOperator(){
	this.type = null;
	this.items = null;
}
KalturaSearchOperator.inheritsFrom (KalturaSearchItem);


/**
 * @param	language	string		Language code.
 */
function KalturaSentimentAnalysisVendorTaskData(){
	this.language = null;
}
KalturaSentimentAnalysisVendorTaskData.inheritsFrom (KalturaVendorTaskData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	heartbeatTimeGreaterThanOrEqual	int		.
 * @param	heartbeatTimeLessThanOrEqual	int		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	hostNameLike	string		.
 * @param	hostNameMultiLikeOr	string		.
 * @param	hostNameMultiLikeAnd	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	dcEqual	int		.
 * @param	dcIn	string		.
 * @param	parentIdLike	string		.
 * @param	parentIdMultiLikeOr	string		.
 * @param	parentIdMultiLikeAnd	string		.
 * @param	environmentEqual	string		.
 * @param	environmentIn	string		.
 */
function KalturaServerNodeBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.heartbeatTimeGreaterThanOrEqual = null;
	this.heartbeatTimeLessThanOrEqual = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.hostNameLike = null;
	this.hostNameMultiLikeOr = null;
	this.hostNameMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.parentIdLike = null;
	this.parentIdMultiLikeOr = null;
	this.parentIdMultiLikeAnd = null;
	this.environmentEqual = null;
	this.environmentIn = null;
}
KalturaServerNodeBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaServerNodeListResponse(){
	this.objects = null;
}
KalturaServerNodeListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	name	string		.
 * @param	endTime	int		.
 * @param	duration	int		Duration in milliseconds (readOnly).
 * @param	sessionOwner	string		.
 */
function KalturaSessionCuePoint(){
	this.name = null;
	this.endTime = null;
	this.duration = null;
	this.sessionOwner = null;
}
KalturaSessionCuePoint.inheritsFrom (KalturaCuePoint);


/**
 */
function KalturaSessionResponse(){
}
KalturaSessionResponse.inheritsFrom (KalturaStartWidgetSessionResponse);


/**
 */
function KalturaSessionRestriction(){
}
KalturaSessionRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	sessionType	int		The privelege needed to remove the restriction.
 */
function KalturaSessionTypeCondition(){
	this.sessionType = null;
}
KalturaSessionTypeCondition.inheritsFrom (KalturaCondition);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	expiresAtGreaterThanOrEqual	int		.
 * @param	expiresAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaShortLinkBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.expiresAtGreaterThanOrEqual = null;
	this.expiresAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaShortLinkBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaShortLinkListResponse(){
	this.objects = null;
}
KalturaShortLinkListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	sipRoomId	string		 (readOnly).
 * @param	sipPrimaryAdpId	string		 (readOnly).
 * @param	sipSecondaryAdpId	string		 (readOnly).
 */
function KalturaSipEntryServerNode(){
	this.sipRoomId = null;
	this.sipPrimaryAdpId = null;
	this.sipSecondaryAdpId = null;
}
KalturaSipEntryServerNode.inheritsFrom (KalturaEntryServerNode);


/**
 */
function KalturaSipServerNode(){
}
KalturaSipServerNode.inheritsFrom (KalturaServerNode);


/**
 * @param	siteRestrictionType	int		The site restriction type (allow or deny).
 * @param	siteList	string		Comma separated list of sites (domains) to allow or deny.
 */
function KalturaSiteRestriction(){
	this.siteRestrictionType = null;
	this.siteList = null;
}
KalturaSiteRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaSsoListResponse(){
	this.objects = null;
}
KalturaSsoListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaStorageAddAction(){
}
KalturaStorageAddAction.inheritsFrom (KalturaRuleAction);


/**
 * @param	storageId	string		Storage profile id.
 */
function KalturaStorageExportObjectTask(){
	this.storageId = null;
}
KalturaStorageExportObjectTask.inheritsFrom (KalturaObjectTask);


/**
 * @param	serverUrl	string		.
 * @param	serverUsername	string		.
 * @param	serverPassword	string		.
 * @param	serverPrivateKey	string		.
 * @param	serverPublicKey	string		.
 * @param	serverPassPhrase	string		.
 * @param	ftpPassiveMode	bool		.
 * @param	srcFileSyncLocalPath	string		.
 * @param	srcFileEncryptionKey	string		.
 * @param	srcFileSyncId	string		.
 * @param	destFileSyncStoredPath	string		.
 */
function KalturaStorageJobData(){
	this.serverUrl = null;
	this.serverUsername = null;
	this.serverPassword = null;
	this.serverPrivateKey = null;
	this.serverPublicKey = null;
	this.serverPassPhrase = null;
	this.ftpPassiveMode = null;
	this.srcFileSyncLocalPath = null;
	this.srcFileEncryptionKey = null;
	this.srcFileSyncId = null;
	this.destFileSyncStoredPath = null;
}
KalturaStorageJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	protocolEqual	string		.
 * @param	protocolIn	string		.
 */
function KalturaStorageProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.protocolEqual = null;
	this.protocolIn = null;
}
KalturaStorageProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaStorageProfileListResponse(){
	this.objects = null;
}
KalturaStorageProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaSynacorHboDistributionProvider(){
}
KalturaSynacorHboDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	categoryId	int		category id.
 * @param	lastUpdatedCategoryEntryCreatedAt	int		Saves the last category entry creation date that was updated
 *	     In case of crash the batch will restart from that point.
 * @param	lastUpdatedCategoryCreatedAt	int		Saves the last sub category creation date that was updated
 *	     In case of crash the batch will restart from that point.
 */
function KalturaSyncCategoryPrivacyContextJobData(){
	this.categoryId = null;
	this.lastUpdatedCategoryEntryCreatedAt = null;
	this.lastUpdatedCategoryCreatedAt = null;
}
KalturaSyncCategoryPrivacyContextJobData.inheritsFrom (KalturaJobData);


/**
 * @param	xsl	string		.
 * @param	feedId	string		 (readOnly).
 */
function KalturaSyndicationDistributionProfile(){
	this.xsl = null;
	this.feedId = null;
}
KalturaSyndicationDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 */
function KalturaSyndicationDistributionProvider(){
}
KalturaSyndicationDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	fromDate	int		Date range from.
 * @param	toDate	int		Date range to.
 * @param	timezoneOffset	int		Time zone offset.
 */
function KalturaSystemPartnerUsageFilter(){
	this.fromDate = null;
	this.toDate = null;
	this.timezoneOffset = null;
}
KalturaSystemPartnerUsageFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		.
 */
function KalturaSystemPartnerUsageListResponse(){
	this.objects = null;
}
KalturaSystemPartnerUsageListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaTVComDistributionProvider(){
}
KalturaTVComDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	objectTypeEqual	string		.
 * @param	objectTypeIn	string		.
 * @param	tagEqual	string		.
 * @param	tagStartsWith	string		.
 * @param	instanceCountEqual	int		.
 * @param	instanceCountIn	int		.
 */
function KalturaTagFilter(){
	this.objectTypeEqual = null;
	this.objectTypeIn = null;
	this.tagEqual = null;
	this.tagStartsWith = null;
	this.instanceCountEqual = null;
	this.instanceCountIn = null;
}
KalturaTagFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaTagListResponse(){
	this.objects = null;
}
KalturaTagListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaTaskEntryServerNode(){
}
KalturaTaskEntryServerNode.inheritsFrom (KalturaEntryServerNode);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaThumbAssetListResponse(){
	this.objects = null;
}
KalturaThumbAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	assetId	string		.
 * @param	description	string		.
 * @param	title	string		.
 * @param	subType	int		The sub type of the ThumbCuePoint.
 */
function KalturaThumbCuePoint(){
	this.assetId = null;
	this.description = null;
	this.title = null;
	this.subType = null;
}
KalturaThumbCuePoint.inheritsFrom (KalturaCuePoint);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaThumbParamsListResponse(){
	this.objects = null;
}
KalturaThumbParamsListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaThumbParamsOutputListResponse(){
	this.objects = null;
}
KalturaThumbParamsOutputListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaThumbnailServeOptions(){
}
KalturaThumbnailServeOptions.inheritsFrom (KalturaAssetServeOptions);


/**
 */
function KalturaTimeWarnerDistributionProvider(){
}
KalturaTimeWarnerDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaTranscriptAssetListResponse(){
	this.objects = null;
}
KalturaTranscriptAssetListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	srcXsl	KalturaFileContainer		.
 * @param	srcVersion	int		.
 * @param	destVersion	int		.
 * @param	destXsd	KalturaFileContainer		.
 * @param	metadataProfileId	int		.
 */
function KalturaTransformMetadataJobData(){
	this.srcXsl = null;
	this.srcVersion = null;
	this.destVersion = null;
	this.destXsd = null;
	this.metadataProfileId = null;
}
KalturaTransformMetadataJobData.inheritsFrom (KalturaJobData);


/**
 * @param	category	string		 (readOnly).
 */
function KalturaTubeMogulSyndicationFeed(){
	this.category = null;
}
KalturaTubeMogulSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 */
function KalturaTvinciDistributionProvider(){
}
KalturaTvinciDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	objTypeEqual	int		.
 * @param	objTypeIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	creationModeEqual	int		.
 * @param	creationModeIn	string		.
 * @param	versionEqual	string		.
 * @param	versionMultiLikeOr	string		.
 * @param	versionMultiLikeAnd	string		.
 * @param	partnerTagsMultiLikeOr	string		.
 * @param	partnerTagsMultiLikeAnd	string		.
 */
function KalturaUiConfBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.objTypeEqual = null;
	this.objTypeIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.creationModeEqual = null;
	this.creationModeIn = null;
	this.versionEqual = null;
	this.versionMultiLikeOr = null;
	this.versionMultiLikeAnd = null;
	this.partnerTagsMultiLikeOr = null;
	this.partnerTagsMultiLikeAnd = null;
}
KalturaUiConfBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUiConfListResponse(){
	this.objects = null;
}
KalturaUiConfListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaUnicornDistributionProvider(){
}
KalturaUnicornDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	credit	int		 (readOnly).
 * @param	fromDate	int		.
 */
function KalturaUnlimitedVendorCredit(){
	this.credit = null;
	this.fromDate = null;
}
KalturaUnlimitedVendorCredit.inheritsFrom (KalturaBaseVendorCredit);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	userIdEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	fileNameEqual	string		.
 * @param	fileSizeEqual	float		.
 */
function KalturaUploadTokenBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.fileNameEqual = null;
	this.fileSizeEqual = null;
}
KalturaUploadTokenBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUploadTokenListResponse(){
	this.objects = null;
}
KalturaUploadTokenListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaUrlAuthenticationParamsCondition(){
}
KalturaUrlAuthenticationParamsCondition.inheritsFrom (KalturaCondition);


/**
 * @param	headerData	string		headerData.
 * @param	headerSign	string		headerSign.
 * @param	timeout	int		timeout.
 * @param	salt	string		salt.
 */
function KalturaUrlRecognizerAkamaiG2O(){
	this.headerData = null;
	this.headerSign = null;
	this.timeout = null;
	this.salt = null;
}
KalturaUrlRecognizerAkamaiG2O.inheritsFrom (KalturaUrlRecognizer);


/**
 * @param	key	string		.
 */
function KalturaUrlRecognizerKaltura(){
	this.key = null;
}
KalturaUrlRecognizerKaltura.inheritsFrom (KalturaUrlRecognizer);


/**
 * @param	paramName	string		param.
 * @param	rootDir	string		.
 */
function KalturaUrlTokenizerAkamaiHttp(){
	this.paramName = null;
	this.rootDir = null;
}
KalturaUrlTokenizerAkamaiHttp.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	profile	string		profile.
 * @param	type	string		Type.
 * @param	aifp	string		.
 * @param	usePrefix	bool		.
 */
function KalturaUrlTokenizerAkamaiRtmp(){
	this.profile = null;
	this.type = null;
	this.aifp = null;
	this.usePrefix = null;
}
KalturaUrlTokenizerAkamaiRtmp.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	host	string		host.
 * @param	cpcode	int		Cp-Code.
 */
function KalturaUrlTokenizerAkamaiRtsp(){
	this.host = null;
	this.cpcode = null;
}
KalturaUrlTokenizerAkamaiRtsp.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	paramName	string		.
 * @param	aclPostfix	string		.
 * @param	customPostfixes	string		.
 * @param	useCookieHosts	string		.
 * @param	rootDir	string		.
 */
function KalturaUrlTokenizerAkamaiSecureHd(){
	this.paramName = null;
	this.aclPostfix = null;
	this.customPostfixes = null;
	this.useCookieHosts = null;
	this.rootDir = null;
}
KalturaUrlTokenizerAkamaiSecureHd.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	hashPatternRegex	string		hashPatternRegex.
 */
function KalturaUrlTokenizerBitGravity(){
	this.hashPatternRegex = null;
}
KalturaUrlTokenizerBitGravity.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	algorithmId	int		.
 * @param	keyId	int		.
 */
function KalturaUrlTokenizerChinaCache(){
	this.algorithmId = null;
	this.keyId = null;
}
KalturaUrlTokenizerChinaCache.inheritsFrom (KalturaUrlTokenizer);


/**
 */
function KalturaUrlTokenizerCht(){
}
KalturaUrlTokenizerCht.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	keyPairId	string		.
 * @param	rootDir	string		.
 */
function KalturaUrlTokenizerCloudFront(){
	this.keyPairId = null;
	this.rootDir = null;
}
KalturaUrlTokenizerCloudFront.inheritsFrom (KalturaUrlTokenizer);


/**
 */
function KalturaUrlTokenizerKaltura(){
}
KalturaUrlTokenizerKaltura.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	usePath	bool		.
 * @param	additionalUris	string		.
 */
function KalturaUrlTokenizerKs(){
	this.usePath = null;
	this.additionalUris = null;
}
KalturaUrlTokenizerKs.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	gen	string		gen.
 * @param	paramName	string		paramName.
 */
function KalturaUrlTokenizerL3(){
	this.gen = null;
	this.paramName = null;
}
KalturaUrlTokenizerL3.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	paramName	string		paramName.
 * @param	expiryName	string		expiryName.
 * @param	gen	string		gen.
 */
function KalturaUrlTokenizerLevel3(){
	this.paramName = null;
	this.expiryName = null;
	this.gen = null;
}
KalturaUrlTokenizerLevel3.inheritsFrom (KalturaUrlTokenizer);


/**
 */
function KalturaUrlTokenizerLimeLight(){
}
KalturaUrlTokenizerLimeLight.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	accountId	string		accountId.
 */
function KalturaUrlTokenizerUplynk(){
	this.accountId = null;
}
KalturaUrlTokenizerUplynk.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	hdsPaths	string		hdsPaths.
 * @param	paramName	string		tokenParamName.
 * @param	authPrefix	string		secure URL prefix.
 */
function KalturaUrlTokenizerVelocix(){
	this.hdsPaths = null;
	this.paramName = null;
	this.authPrefix = null;
}
KalturaUrlTokenizerVelocix.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	tokenizationFormat	int		.
 * @param	shouldIncludeClientIp	bool		.
 */
function KalturaUrlTokenizerVnpt(){
	this.tokenizationFormat = null;
	this.shouldIncludeClientIp = null;
}
KalturaUrlTokenizerVnpt.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	paramPrefix	string		.
 * @param	hashAlgorithm	string		.
 */
function KalturaUrlTokenizerWowzaSecureToken(){
	this.paramPrefix = null;
	this.hashAlgorithm = null;
}
KalturaUrlTokenizerWowzaSecureToken.inheritsFrom (KalturaUrlTokenizer);


/**
 * @param	userAgentRestrictionType	int		User agent restriction type (Allow or deny).
 * @param	userAgentRegexList	string		A comma seperated list of user agent regular expressions.
 */
function KalturaUserAgentRestriction(){
	this.userAgentRestrictionType = null;
	this.userAgentRegexList = null;
}
KalturaUserAgentRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserAppRoleListResponse(){
	this.objects = null;
}
KalturaUserAppRoleListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserEntryListResponse(){
	this.objects = null;
}
KalturaUserEntryListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserListResponse(){
	this.objects = null;
}
KalturaUserListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserLoginDataListResponse(){
	this.objects = null;
}
KalturaUserLoginDataListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	roleIds	string		Comma separated list of role ids.
 */
function KalturaUserRoleCondition(){
	this.roleIds = null;
}
KalturaUserRoleCondition.inheritsFrom (KalturaCondition);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserRoleListResponse(){
	this.objects = null;
}
KalturaUserRoleListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaUserScorePropertiesResponse(){
	this.objects = null;
}
KalturaUserScorePropertiesResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaUverseClickToOrderDistributionProvider(){
}
KalturaUverseClickToOrderDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaUverseDistributionProvider(){
}
KalturaUverseDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	edgeServerIds	string		Comma separated list of edge servers to validate are active.
 */
function KalturaValidateActiveEdgeCondition(){
	this.edgeServerIds = null;
}
KalturaValidateActiveEdgeCondition.inheritsFrom (KalturaCondition);


/**
 */
function KalturaVarPartnerUsageTotalItem(){
}
KalturaVarPartnerUsageTotalItem.inheritsFrom (KalturaVarPartnerUsageItem);


/**
 * @param	outputFormat	int		.
 */
function KalturaVendorAlignmentCatalogItem(){
	this.outputFormat = null;
}
KalturaVendorAlignmentCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	flavorParamsId	int		.
 * @param	clearAudioFlavorParamsId	int		.
 */
function KalturaVendorAudioDescriptionCatalogItem(){
	this.flavorParamsId = null;
	this.clearAudioFlavorParamsId = null;
}
KalturaVendorAudioDescriptionCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	outputFormat	int		.
 * @param	enableSpeakerId	int		.
 * @param	fixedPriceAddons	int		.
 */
function KalturaVendorCaptionsCatalogItem(){
	this.outputFormat = null;
	this.enableSpeakerId = null;
	this.fixedPriceAddons = null;
}
KalturaVendorCaptionsCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaVendorCatalogItemListResponse(){
	this.objects = null;
}
KalturaVendorCatalogItemListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaVendorChapteringCatalogItem(){
}
KalturaVendorChapteringCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorClipsCatalogItem(){
}
KalturaVendorClipsCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	credit	int		.
 * @param	fromDate	int		.
 * @param	overageCredit	int		.
 * @param	addOn	int		.
 */
function KalturaVendorCredit(){
	this.credit = null;
	this.fromDate = null;
	this.overageCredit = null;
	this.addOn = null;
}
KalturaVendorCredit.inheritsFrom (KalturaBaseVendorCredit);


/**
 * @param	documentEnrichmentType	int		.
 */
function KalturaVendorDocumentEnrichmentCatalogItem(){
	this.documentEnrichmentType = null;
}
KalturaVendorDocumentEnrichmentCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	flavorParamsId	int		.
 * @param	clearAudioFlavorParamsId	int		.
 * @param	targetLanguage	string		.
 */
function KalturaVendorDubbingCatalogItem(){
	this.flavorParamsId = null;
	this.clearAudioFlavorParamsId = null;
	this.targetLanguage = null;
}
KalturaVendorDubbingCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	flavorParamsId	int		.
 * @param	clearAudioFlavorParamsId	int		.
 * @param	outputFormat	int		.
 */
function KalturaVendorExtendedAudioDescriptionCatalogItem(){
	this.flavorParamsId = null;
	this.clearAudioFlavorParamsId = null;
	this.outputFormat = null;
}
KalturaVendorExtendedAudioDescriptionCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorIntelligentTaggingCatalogItem(){
}
KalturaVendorIntelligentTaggingCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorMetadataEnrichmentCatalogItem(){
}
KalturaVendorMetadataEnrichmentCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorModerationCatalogItem(){
}
KalturaVendorModerationCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorQuizCatalogItem(){
}
KalturaVendorQuizCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorSentimentAnalysisCatalogItem(){
}
KalturaVendorSentimentAnalysisCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	targetLanguage	string		.
 * @param	outputFormat	int		.
 */
function KalturaVendorSignLanguageCatalogItem(){
	this.targetLanguage = null;
	this.outputFormat = null;
}
KalturaVendorSignLanguageCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVendorSummaryCatalogItem(){
}
KalturaVendorSummaryCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 * @param	captionAssetId	string		Optional - The id of the caption asset object (insertOnly).
 */
function KalturaVendorTaskDataCaptionAsset(){
	this.captionAssetId = null;
}
KalturaVendorTaskDataCaptionAsset.inheritsFrom (KalturaVendorTaskData);


/**
 * @param	videoAnalysisType	int		.
 * @param	maxVideoDuration	int		.
 */
function KalturaVendorVideoAnalysisCatalogItem(){
	this.videoAnalysisType = null;
	this.maxVideoDuration = null;
}
KalturaVendorVideoAnalysisCatalogItem.inheritsFrom (KalturaVendorCatalogItem);


/**
 */
function KalturaVerizonVcastDistributionProvider(){
}
KalturaVerizonVcastDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	playbackContext	string		Playback context.
 * @param	lastTimeReached	int		Last playback time reached by user.
 * @param	lastUpdateTime	int		.
 * @param	playlistLastEntryId	string		Property to save last entry ID played in a playlist..
 * @param	extendedStatus	string		.
 */
function KalturaViewHistoryUserEntry(){
	this.playbackContext = null;
	this.lastTimeReached = null;
	this.lastUpdateTime = null;
	this.playlistLastEntryId = null;
	this.extendedStatus = null;
}
KalturaViewHistoryUserEntry.inheritsFrom (KalturaUserEntry);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	updatedAtGreaterThanOrEqual	string		.
 * @param	updatedAtLessThanOrEqual	string		.
 * @param	extendedStatusEqual	string		.
 * @param	extendedStatusIn	string		.
 */
function KalturaViewHistoryUserEntryAdvancedFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.extendedStatusEqual = null;
	this.extendedStatusIn = null;
}
KalturaViewHistoryUserEntryAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaVirtualEventBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaVirtualEventBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		.
 */
function KalturaVirtualEventListResponse(){
	this.objects = null;
}
KalturaVirtualEventListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	virtualEventId	int		The ID of the virtual event connected to this Schedule Event.
 * @param	virtualScheduleEventSubType	int		The type of the Virtual Schedule Event (insertOnly).
 */
function KalturaVirtualScheduleEvent(){
	this.virtualEventId = null;
	this.virtualScheduleEventSubType = null;
}
KalturaVirtualScheduleEvent.inheritsFrom (KalturaScheduleEvent);


/**
 * @param	fileContainer	KalturaFileContainer		.
 * @param	flavorAssetId	string		.
 * @param	scanResult	int		.
 * @param	virusFoundAction	int		.
 */
function KalturaVirusScanJobData(){
	this.fileContainer = null;
	this.flavorAssetId = null;
	this.scanResult = null;
	this.virusFoundAction = null;
}
KalturaVirusScanJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameEqual	string		.
 * @param	nameLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	engineTypeEqual	string		.
 * @param	engineTypeIn	string		.
 */
function KalturaVirusScanProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameEqual = null;
	this.nameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.engineTypeEqual = null;
	this.engineTypeIn = null;
}
KalturaVirusScanProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaVirusScanProfileListResponse(){
	this.objects = null;
}
KalturaVirusScanProfileListResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	entryId	string		Entry ID.
 * @param	flavorAssetId	string		Flavor ID.
 * @param	transcriptId	string		input Transcript-asset ID.
 * @param	captionAssetFormats	string		Caption formats.
 * @param	apiKey	string		Api key for service provider (readOnly).
 * @param	apiPassword	string		Api key for service provider (readOnly).
 * @param	spokenLanguage	string		Transcript content language.
 * @param	fileLocation	string		Transcript Content location (readOnly).
 * @param	replaceMediaContent	bool		should replace remote media content.
 * @param	additionalParameters	string		additional parameters to send to VoiceBase (readOnly).
 */
function KalturaVoicebaseJobProviderData(){
	this.entryId = null;
	this.flavorAssetId = null;
	this.transcriptId = null;
	this.captionAssetFormats = null;
	this.apiKey = null;
	this.apiPassword = null;
	this.spokenLanguage = null;
	this.fileLocation = null;
	this.replaceMediaContent = null;
	this.additionalParameters = null;
}
KalturaVoicebaseJobProviderData.inheritsFrom (KalturaIntegrationJobProviderData);


/**
 */
function KalturaVolatileInteractivity(){
}
KalturaVolatileInteractivity.inheritsFrom (KalturaBaseInteractivity);


/**
 */
function KalturaWatchLaterUserEntry(){
}
KalturaWatchLaterUserEntry.inheritsFrom (KalturaUserEntry);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	extendedStatusEqual	string		.
 * @param	extendedStatusIn	string		.
 */
function KalturaWatchLaterUserEntryAdvancedFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.extendedStatusEqual = null;
	this.extendedStatusIn = null;
}
KalturaWatchLaterUserEntryAdvancedFilter.inheritsFrom (KalturaSearchItem);


/**
 * @param	webexAPIVendorIntegrationId	int		 (readOnly).
 * @param	webexAPIVendorIntegration	KalturaWebexAPIIntegrationSetting		 (readOnly).
 */
function KalturaWebexAPIDropFolder(){
	this.webexAPIVendorIntegrationId = null;
	this.webexAPIVendorIntegration = null;
}
KalturaWebexAPIDropFolder.inheritsFrom (KalturaDropFolder);


/**
 * @param	recordingId	string		.
 * @param	description	string		.
 * @param	contentUrl	string		.
 * @param	urlExpiry	int		.
 * @param	fileExtension	string		.
 * @param	meetingId	string		.
 * @param	recordingStartTime	int		.
 * @param	hostEmail	string		.
 */
function KalturaWebexAPIDropFolderFile(){
	this.recordingId = null;
	this.description = null;
	this.contentUrl = null;
	this.urlExpiry = null;
	this.fileExtension = null;
	this.meetingId = null;
	this.recordingStartTime = null;
	this.hostEmail = null;
}
KalturaWebexAPIDropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaWebexAPIIntegrationSettingResponse(){
	this.objects = null;
}
KalturaWebexAPIIntegrationSettingResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	webexUserId	string		.
 * @param	webexPassword	string		.
 * @param	webexSiteId	int		.
 * @param	webexPartnerId	string		.
 * @param	webexServiceUrl	string		.
 * @param	webexHostIdMetadataFieldName	string		.
 * @param	deleteFromRecycleBin	bool		.
 * @param	webexServiceType	string		.
 * @param	webexSiteName	string		.
 * @param	deleteFromTimestamp	int		.
 */
function KalturaWebexDropFolder(){
	this.webexUserId = null;
	this.webexPassword = null;
	this.webexSiteId = null;
	this.webexPartnerId = null;
	this.webexServiceUrl = null;
	this.webexHostIdMetadataFieldName = null;
	this.deleteFromRecycleBin = null;
	this.webexServiceType = null;
	this.webexSiteName = null;
	this.deleteFromTimestamp = null;
}
KalturaWebexDropFolder.inheritsFrom (KalturaDropFolder);


/**
 * @param	recordingId	int		.
 * @param	webexHostId	string		.
 * @param	description	string		.
 * @param	confId	string		.
 * @param	contentUrl	string		.
 */
function KalturaWebexDropFolderFile(){
	this.recordingId = null;
	this.webexHostId = null;
	this.description = null;
	this.confId = null;
	this.contentUrl = null;
}
KalturaWebexDropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	key	string		.
 * @param	iv	string		.
 * @param	owner	string		.
 * @param	portal	string		.
 * @param	maxGop	int		.
 * @param	regServerHost	string		.
 */
function KalturaWidevineProfile(){
	this.key = null;
	this.iv = null;
	this.owner = null;
	this.portal = null;
	this.maxGop = null;
	this.regServerHost = null;
}
KalturaWidevineProfile.inheritsFrom (KalturaDrmProfile);


/**
 * @param	syncMode	int		.
 * @param	wvAssetIds	string		.
 * @param	modifiedAttributes	string		.
 * @param	monitorSyncCompletion	int		.
 */
function KalturaWidevineRepositorySyncJobData(){
	this.syncMode = null;
	this.wvAssetIds = null;
	this.modifiedAttributes = null;
	this.monitorSyncCompletion = null;
}
KalturaWidevineRepositorySyncJobData.inheritsFrom (KalturaJobData);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	sourceWidgetIdEqual	string		.
 * @param	rootWidgetIdEqual	string		.
 * @param	partnerIdEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	uiConfIdEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerDataLike	string		.
 */
function KalturaWidgetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.sourceWidgetIdEqual = null;
	this.rootWidgetIdEqual = null;
	this.partnerIdEqual = null;
	this.entryIdEqual = null;
	this.uiConfIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerDataLike = null;
}
KalturaWidgetBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaWidgetListResponse(){
	this.objects = null;
}
KalturaWidgetListResponse.inheritsFrom (KalturaListResponse);


/**
 */
function KalturaYahooDistributionProvider(){
}
KalturaYahooDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedDescription	string		feed description.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website).
 */
function KalturaYahooSyndicationFeed(){
	this.category = null;
	this.adultContent = null;
	this.feedDescription = null;
	this.feedLandingPage = null;
}
KalturaYahooSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 */
function KalturaYouTubeDistributionProvider(){
}
KalturaYouTubeDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaYoutubeApiDistributionProvider(){
}
KalturaYoutubeApiDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	zoomVendorIntegrationId	int		 (readOnly).
 * @param	zoomVendorIntegration	KalturaZoomIntegrationSetting		 (readOnly).
 * @param	lastHandledMeetingTime	int		.
 */
function KalturaZoomDropFolder(){
	this.zoomVendorIntegrationId = null;
	this.zoomVendorIntegration = null;
	this.lastHandledMeetingTime = null;
}
KalturaZoomDropFolder.inheritsFrom (KalturaDropFolder);


/**
 * @param	meetingMetadata	KalturaZoomMeetingMetadata		.
 * @param	recordingFile	KalturaZoomRecordingFile		.
 * @param	parentEntryId	string		.
 * @param	isParentEntry	bool		.
 */
function KalturaZoomDropFolderFile(){
	this.meetingMetadata = null;
	this.recordingFile = null;
	this.parentEntryId = null;
	this.isParentEntry = null;
}
KalturaZoomDropFolderFile.inheritsFrom (KalturaDropFolderFile);


/**
 * @param	objects	array		 (readOnly).
 */
function KalturaZoomIntegrationSettingResponse(){
	this.objects = null;
}
KalturaZoomIntegrationSettingResponse.inheritsFrom (KalturaListResponse);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 */
function KalturaAccessControlBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
KalturaAccessControlBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaAccessControlProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaAccessControlProfileBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaAdminUser(){
}
KalturaAdminUser.inheritsFrom (KalturaUser);


/**
 * @param	wsdlUsername	string		.
 * @param	wsdlPassword	string		.
 * @param	cpcode	string		.
 * @param	emailId	string		.
 * @param	primaryContact	string		.
 * @param	secondaryContact	string		.
 */
function KalturaAkamaiProvisionJobData(){
	this.wsdlUsername = null;
	this.wsdlPassword = null;
	this.cpcode = null;
	this.emailId = null;
	this.primaryContact = null;
	this.secondaryContact = null;
}
KalturaAkamaiProvisionJobData.inheritsFrom (KalturaProvisionJobData);


/**
 * @param	streamId	int		.
 * @param	systemUserName	string		.
 * @param	systemPassword	string		.
 * @param	domainName	string		.
 * @param	dvrEnabled	int		.
 * @param	dvrWindow	int		.
 * @param	primaryContact	string		.
 * @param	secondaryContact	string		.
 * @param	streamType	string		.
 * @param	notificationEmail	string		.
 */
function KalturaAkamaiUniversalProvisionJobData(){
	this.streamId = null;
	this.systemUserName = null;
	this.systemPassword = null;
	this.domainName = null;
	this.dvrEnabled = null;
	this.dvrWindow = null;
	this.primaryContact = null;
	this.secondaryContact = null;
	this.streamType = null;
	this.notificationEmail = null;
}
KalturaAkamaiUniversalProvisionJobData.inheritsFrom (KalturaProvisionJobData);


/**
 * @param	textTranscriptAssetId	string		The id of the text transcript object the vendor should use while runing the alignment task.
 * @param	jsonTranscriptAssetId	string		Optional - The id of the json transcript object the vendor should update once alignment task processing is done (insertOnly).
 */
function KalturaAlignmentVendorTaskData(){
	this.textTranscriptAssetId = null;
	this.jsonTranscriptAssetId = null;
}
KalturaAlignmentVendorTaskData.inheritsFrom (KalturaVendorTaskDataCaptionAsset);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaAnonymousIPCondition(){
	this.geoCoderType = null;
}
KalturaAnonymousIPCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	apApiKey	string		.
 * @param	itemsToExpand	array		.
 */
function KalturaApFeedDropFolder(){
	this.apApiKey = null;
	this.itemsToExpand = null;
}
KalturaApFeedDropFolder.inheritsFrom (KalturaFeedDropFolder);


/**
 */
function KalturaAppTokenFilter(){
}
KalturaAppTokenFilter.inheritsFrom (KalturaAppTokenBaseFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	isSystemDefaultEqual	int		.
 * @param	tagsEqual	string		.
 */
function KalturaAssetParamsBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.isSystemDefaultEqual = null;
	this.tagsEqual = null;
}
KalturaAssetParamsBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	assetId	string		ID of the source asset.
 */
function KalturaAssetResource(){
	this.assetId = null;
}
KalturaAssetResource.inheritsFrom (KalturaContentResource);


/**
 * @param	filesForDistribution	array		.
 * @param	remoteAssetFileUrls	string		The remote URL of the video asset that was distributed.
 * @param	remoteThumbnailFileUrls	string		The remote URL of the thumbnail asset that was distributed.
 * @param	remoteCaptionFileUrls	string		The remote URL of the caption asset that was distributed.
 */
function KalturaAttUverseDistributionJobProviderData(){
	this.filesForDistribution = null;
	this.remoteAssetFileUrls = null;
	this.remoteThumbnailFileUrls = null;
	this.remoteCaptionFileUrls = null;
}
KalturaAttUverseDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	ftpHost	string		.
 * @param	ftpUsername	string		.
 * @param	ftpPassword	string		.
 * @param	ftpPath	string		.
 * @param	channelTitle	string		.
 * @param	flavorAssetFilenameXslt	string		.
 * @param	thumbnailAssetFilenameXslt	string		.
 * @param	assetFilenameXslt	string		.
 */
function KalturaAttUverseDistributionProfile(){
	this.feedUrl = null;
	this.ftpHost = null;
	this.ftpUsername = null;
	this.ftpPassword = null;
	this.ftpPath = null;
	this.channelTitle = null;
	this.flavorAssetFilenameXslt = null;
	this.thumbnailAssetFilenameXslt = null;
	this.assetFilenameXslt = null;
}
KalturaAttUverseDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	idEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	parsedAtGreaterThanOrEqual	int		.
 * @param	parsedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	auditObjectTypeEqual	string		.
 * @param	auditObjectTypeIn	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	relatedObjectIdEqual	string		.
 * @param	relatedObjectIdIn	string		.
 * @param	relatedObjectTypeEqual	string		.
 * @param	relatedObjectTypeIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	masterPartnerIdEqual	int		.
 * @param	masterPartnerIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	requestIdEqual	string		.
 * @param	requestIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	actionEqual	string		.
 * @param	actionIn	string		.
 * @param	ksEqual	string		.
 * @param	contextEqual	int		.
 * @param	contextIn	string		.
 * @param	entryPointEqual	string		.
 * @param	entryPointIn	string		.
 * @param	serverNameEqual	string		.
 * @param	serverNameIn	string		.
 * @param	ipAddressEqual	string		.
 * @param	ipAddressIn	string		.
 * @param	clientTagEqual	string		.
 */
function KalturaAuditTrailBaseFilter(){
	this.idEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.parsedAtGreaterThanOrEqual = null;
	this.parsedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.auditObjectTypeEqual = null;
	this.auditObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.relatedObjectIdEqual = null;
	this.relatedObjectIdIn = null;
	this.relatedObjectTypeEqual = null;
	this.relatedObjectTypeIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.masterPartnerIdEqual = null;
	this.masterPartnerIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.requestIdEqual = null;
	this.requestIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
	this.ksEqual = null;
	this.contextEqual = null;
	this.contextIn = null;
	this.entryPointEqual = null;
	this.entryPointIn = null;
	this.serverNameEqual = null;
	this.serverNameIn = null;
	this.ipAddressEqual = null;
	this.ipAddressIn = null;
	this.clientTagEqual = null;
}
KalturaAuditTrailBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 */
function KalturaAvnDistributionProfile(){
	this.feedUrl = null;
	this.feedTitle = null;
}
KalturaAvnDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaBaseLiveScheduleEvent(){
}
KalturaBaseLiveScheduleEvent.inheritsFrom (KalturaEntryScheduleEvent);


/**
 */
function KalturaBaseSyndicationFeedFilter(){
}
KalturaBaseSyndicationFeedFilter.inheritsFrom (KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 */
function KalturaBeaconAbstractScheduledResourceItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
}
KalturaBeaconAbstractScheduledResourceItem.inheritsFrom (KalturaBeaconScheduledResourceBaseItem);


/**
 * @param	indexTypeEqual	string		.
 */
function KalturaBeaconFilter(){
	this.indexTypeEqual = null;
}
KalturaBeaconFilter.inheritsFrom (KalturaBeaconBaseFilter);


/**
 * @param	templateObject	KalturaObjectBase		Template object for new object creation.
 */
function KalturaBulkServiceFilterData(){
	this.templateObject = null;
}
KalturaBulkServiceFilterData.inheritsFrom (KalturaBulkServiceFilterDataBase);


/**
 * @param	csvVersion	int		The version of the csv file (readOnly).
 * @param	columns	array		Array containing CSV headers.
 * @param	processObjectId	string		The object in process.
 * @param	processObjectType	string		The type of the object in process.
 */
function KalturaBulkUploadCsvJobData(){
	this.csvVersion = null;
	this.columns = null;
	this.processObjectId = null;
	this.processObjectType = null;
}
KalturaBulkUploadCsvJobData.inheritsFrom (KalturaBulkUploadJobData);


/**
 */
function KalturaBulkUploadFilter(){
}
KalturaBulkUploadFilter.inheritsFrom (KalturaBulkUploadBaseFilter);


/**
 * @param	filter	KalturaFilter		Filter for extracting the objects list to upload.
 * @param	templateObject	KalturaObjectBase		Template object for new object creation.
 */
function KalturaBulkUploadFilterJobData(){
	this.filter = null;
	this.templateObject = null;
}
KalturaBulkUploadFilterJobData.inheritsFrom (KalturaBulkUploadJobData);


/**
 */
function KalturaBulkUploadScheduleEventJobData(){
}
KalturaBulkUploadScheduleEventJobData.inheritsFrom (KalturaBulkUploadJobData);


/**
 */
function KalturaBulkUploadXmlJobData(){
}
KalturaBulkUploadXmlJobData.inheritsFrom (KalturaBulkUploadJobData);


/**
 */
function KalturaBusinessProcessAbortNotificationTemplate(){
}
KalturaBusinessProcessAbortNotificationTemplate.inheritsFrom (KalturaBusinessProcessNotificationTemplate);


/**
 * @param	server	KalturaBusinessProcessServer		.
 * @param	caseId	string		.
 */
function KalturaBusinessProcessNotificationDispatchJobData(){
	this.server = null;
	this.caseId = null;
}
KalturaBusinessProcessNotificationDispatchJobData.inheritsFrom (KalturaEventNotificationDispatchJobData);


/**
 * @param	currentDcOrExternal	int		.
 * @param	currentDc	int		.
 */
function KalturaBusinessProcessServerFilter(){
	this.currentDcOrExternal = null;
	this.currentDc = null;
}
KalturaBusinessProcessServerFilter.inheritsFrom (KalturaBusinessProcessServerBaseFilter);


/**
 * @param	message	string		Define the message to be sent.
 * @param	eventId	string		Define the event that waiting to the signal.
 */
function KalturaBusinessProcessSignalNotificationTemplate(){
	this.message = null;
	this.eventId = null;
}
KalturaBusinessProcessSignalNotificationTemplate.inheritsFrom (KalturaBusinessProcessNotificationTemplate);


/**
 * @param	abortOnDeletion	bool		Abort the process automatically if the triggering object deleted.
 */
function KalturaBusinessProcessStartNotificationTemplate(){
	this.abortOnDeletion = null;
}
KalturaBusinessProcessStartNotificationTemplate.inheritsFrom (KalturaBusinessProcessNotificationTemplate);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	parentIdEqual	int		.
 * @param	parentIdIn	string		.
 * @param	depthEqual	int		.
 * @param	fullNameEqual	string		.
 * @param	fullNameStartsWith	string		.
 * @param	fullNameIn	string		.
 * @param	fullIdsEqual	string		.
 * @param	fullIdsStartsWith	string		.
 * @param	fullIdsMatchOr	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	appearInListEqual	int		.
 * @param	privacyEqual	int		.
 * @param	privacyIn	string		.
 * @param	inheritanceTypeEqual	int		.
 * @param	inheritanceTypeIn	string		.
 * @param	referenceIdEqual	string		.
 * @param	referenceIdEmpty	int		.
 * @param	contributionPolicyEqual	int		.
 * @param	membersCountGreaterThanOrEqual	int		.
 * @param	membersCountLessThanOrEqual	int		.
 * @param	pendingMembersCountGreaterThanOrEqual	int		.
 * @param	pendingMembersCountLessThanOrEqual	int		.
 * @param	privacyContextEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	inheritedParentIdEqual	int		.
 * @param	inheritedParentIdIn	string		.
 * @param	partnerSortValueGreaterThanOrEqual	int		.
 * @param	partnerSortValueLessThanOrEqual	int		.
 * @param	aggregationCategoriesMultiLikeOr	string		.
 * @param	aggregationCategoriesMultiLikeAnd	string		.
 */
function KalturaCategoryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.depthEqual = null;
	this.fullNameEqual = null;
	this.fullNameStartsWith = null;
	this.fullNameIn = null;
	this.fullIdsEqual = null;
	this.fullIdsStartsWith = null;
	this.fullIdsMatchOr = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.appearInListEqual = null;
	this.privacyEqual = null;
	this.privacyIn = null;
	this.inheritanceTypeEqual = null;
	this.inheritanceTypeIn = null;
	this.referenceIdEqual = null;
	this.referenceIdEmpty = null;
	this.contributionPolicyEqual = null;
	this.membersCountGreaterThanOrEqual = null;
	this.membersCountLessThanOrEqual = null;
	this.pendingMembersCountGreaterThanOrEqual = null;
	this.pendingMembersCountLessThanOrEqual = null;
	this.privacyContextEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.inheritedParentIdEqual = null;
	this.inheritedParentIdIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.aggregationCategoriesMultiLikeOr = null;
	this.aggregationCategoriesMultiLikeAnd = null;
}
KalturaCategoryBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	categoryIdEqual	int		.
 * @param	categoryIdIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	categoryFullIdsStartsWith	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	creatorUserIdEqual	string		.
 * @param	creatorUserIdIn	string		.
 */
function KalturaCategoryEntryBaseFilter(){
	this.categoryIdEqual = null;
	this.categoryIdIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.categoryFullIdsStartsWith = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.creatorUserIdEqual = null;
	this.creatorUserIdIn = null;
}
KalturaCategoryEntryBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	clipAttributes	KalturaClipAttributes		.
 * @param	clippedEntryId	string		.
 * @param	liveEntryId	string		.
 */
function KalturaClippingTaskEntryServerNode(){
	this.clipAttributes = null;
	this.clippedEntryId = null;
	this.liveEntryId = null;
}
KalturaClippingTaskEntryServerNode.inheritsFrom (KalturaTaskEntryServerNode);


/**
 * @param	clipsDuration	int		Estimated duration of the clips, in seconds. (insertOnly).
 * @param	eventSessionContextId	string		Event session context ID used to enhance clip results. (insertOnly).
 * @param	instruction	string		Instruction describing the moments to capture or the objectives to achieve with the clips. (insertOnly).
 * @param	clipsOutputJson	string		List of clips as JSON string.
 *		 For example: [{"title": "Title of the first clip", "description": "Description of the first clip", "tags": "Tagged-Example", "start": 127, "duration": 30}].
 */
function KalturaClipsVendorTaskData(){
	this.clipsDuration = null;
	this.eventSessionContextId = null;
	this.instruction = null;
	this.clipsOutputJson = null;
}
KalturaClipsVendorTaskData.inheritsFrom (KalturaLocalizedVendorTaskData);


/**
 * @param	metadataProfileId	int		.
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 * @param	feedLink	string		.
 * @param	feedDescription	string		.
 * @param	feedLastBuildDate	string		.
 * @param	itemLink	string		.
 * @param	cPlatformTvSeries	array		.
 * @param	cPlatformTvSeriesField	string		.
 * @param	shouldIncludeCuePoints	bool		.
 * @param	shouldIncludeCaptions	bool		.
 * @param	shouldAddThumbExtension	bool		.
 */
function KalturaComcastMrssDistributionProfile(){
	this.metadataProfileId = null;
	this.feedUrl = null;
	this.feedTitle = null;
	this.feedLink = null;
	this.feedDescription = null;
	this.feedLastBuildDate = null;
	this.itemLink = null;
	this.cPlatformTvSeries = null;
	this.cPlatformTvSeriesField = null;
	this.shouldIncludeCuePoints = null;
	this.shouldIncludeCaptions = null;
	this.shouldAddThumbExtension = null;
}
KalturaComcastMrssDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	xPath	string		May contain the full xpath to the field in three formats
 *		 1. Slashed xPath, e.g. /metadata/myElementName
 *		 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 *		 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param	profileId	int		Metadata profile id.
 * @param	profileSystemName	string		Metadata profile system name.
 */
function KalturaCompareMetadataCondition(){
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
}
KalturaCompareMetadataCondition.inheritsFrom (KalturaCompareCondition);


/**
 * @param	nameEqual	string		.
 * @param	relatedHostEqual	string		.
 * @param	versionEqual	int		.
 */
function KalturaConfMapsBaseFilter(){
	this.nameEqual = null;
	this.relatedHostEqual = null;
	this.versionEqual = null;
}
KalturaConfMapsBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaControlPanelCommandFilter(){
}
KalturaControlPanelCommandFilter.inheritsFrom (KalturaControlPanelCommandBaseFilter);


/**
 * @param	conversionProfileIdEqual	int		.
 * @param	conversionProfileIdIn	string		.
 * @param	assetParamsIdEqual	int		.
 * @param	assetParamsIdIn	string		.
 * @param	readyBehaviorEqual	int		.
 * @param	readyBehaviorIn	string		.
 * @param	originEqual	int		.
 * @param	originIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 */
function KalturaConversionProfileAssetParamsBaseFilter(){
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.assetParamsIdEqual = null;
	this.assetParamsIdIn = null;
	this.readyBehaviorEqual = null;
	this.readyBehaviorIn = null;
	this.originEqual = null;
	this.originIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
KalturaConversionProfileAssetParamsBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	statusEqual	string		.
 * @param	statusIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	nameEqual	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	defaultEntryIdEqual	string		.
 * @param	defaultEntryIdIn	string		.
 */
function KalturaConversionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.defaultEntryIdEqual = null;
	this.defaultEntryIdIn = null;
}
KalturaConversionProfileBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	destDirLocalPath	string		.
 * @param	destDirRemoteUrl	string		.
 * @param	destFileName	string		.
 * @param	inputXmlLocalPath	string		.
 * @param	inputXmlRemoteUrl	string		.
 * @param	commandLinesStr	string		.
 * @param	flavors	array		.
 */
function KalturaConvertCollectionJobData(){
	this.destDirLocalPath = null;
	this.destDirRemoteUrl = null;
	this.destFileName = null;
	this.inputXmlLocalPath = null;
	this.inputXmlRemoteUrl = null;
	this.commandLinesStr = null;
	this.flavors = null;
}
KalturaConvertCollectionJobData.inheritsFrom (KalturaConvartableJobData);


/**
 * @param	destFileSyncLocalPath	string		.
 * @param	destFileSyncRemoteUrl	string		.
 * @param	logFileSyncLocalPath	string		.
 * @param	logFileSyncRemoteUrl	string		.
 * @param	flavorAssetId	string		.
 * @param	remoteMediaId	string		.
 * @param	customData	string		.
 * @param	extraDestFileSyncs	array		.
 * @param	engineMessage	string		.
 * @param	destFileSyncSharedPath	string		.
 * @param	userCpu	int		.
 * @param	estimatedEffort	int		.
 */
function KalturaConvertJobData(){
	this.destFileSyncLocalPath = null;
	this.destFileSyncRemoteUrl = null;
	this.logFileSyncLocalPath = null;
	this.logFileSyncRemoteUrl = null;
	this.flavorAssetId = null;
	this.remoteMediaId = null;
	this.customData = null;
	this.extraDestFileSyncs = null;
	this.engineMessage = null;
	this.destFileSyncSharedPath = null;
	this.userCpu = null;
	this.estimatedEffort = null;
}
KalturaConvertJobData.inheritsFrom (KalturaConvartableJobData);


/**
 * @param	videoAssetFilePath	string		.
 * @param	thumbAssetFilePath	string		.
 * @param	captionsInfo	array		.
 */
function KalturaCortexApiDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.thumbAssetFilePath = null;
	this.captionsInfo = null;
}
KalturaCortexApiDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	username	string		.
 * @param	host	string		.
 * @param	password	string		.
 * @param	folderrecordid	string		.
 * @param	metadataprofileid	string		.
 * @param	metadataprofileidpushing	string		.
 */
function KalturaCortexApiDistributionProfile(){
	this.username = null;
	this.host = null;
	this.password = null;
	this.folderrecordid = null;
	this.metadataprofileid = null;
	this.metadataprofileidpushing = null;
}
KalturaCortexApiDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaCountryCondition(){
	this.geoCoderType = null;
}
KalturaCountryCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	distributedFlavorAssets	string		Key-value array where the keys are IDs of distributed flavor assets in the source account and the values are the matching IDs in the target account.
 * @param	distributedThumbAssets	string		Key-value array where the keys are IDs of distributed thumb assets in the source account and the values are the matching IDs in the target account.
 * @param	distributedMetadata	string		Key-value array where the keys are IDs of distributed metadata objects in the source account and the values are the matching IDs in the target account.
 * @param	distributedCaptionAssets	string		Key-value array where the keys are IDs of distributed caption assets in the source account and the values are the matching IDs in the target account.
 * @param	distributedCuePoints	string		Key-value array where the keys are IDs of distributed cue points in the source account and the values are the matching IDs in the target account.
 * @param	distributedThumbCuePoints	string		Key-value array where the keys are IDs of distributed thumb cue points in the source account and the values are the matching IDs in the target account.
 * @param	distributedTimedThumbAssets	string		Key-value array where the keys are IDs of distributed timed thumb assets in the source account and the values are the matching IDs in the target account.
 */
function KalturaCrossKalturaDistributionJobProviderData(){
	this.distributedFlavorAssets = null;
	this.distributedThumbAssets = null;
	this.distributedMetadata = null;
	this.distributedCaptionAssets = null;
	this.distributedCuePoints = null;
	this.distributedThumbCuePoints = null;
	this.distributedTimedThumbAssets = null;
}
KalturaCrossKalturaDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	targetServiceUrl	string		.
 * @param	targetAccountId	int		.
 * @param	targetLoginId	string		.
 * @param	targetLoginPassword	string		.
 * @param	metadataXslt	string		.
 * @param	metadataXpathsTriggerUpdate	array		.
 * @param	distributeCaptions	bool		.
 * @param	distributeCuePoints	bool		.
 * @param	distributeRemoteFlavorAssetContent	bool		.
 * @param	distributeRemoteThumbAssetContent	bool		.
 * @param	distributeRemoteCaptionAssetContent	bool		.
 * @param	mapAccessControlProfileIds	array		.
 * @param	mapConversionProfileIds	array		.
 * @param	mapMetadataProfileIds	array		.
 * @param	mapStorageProfileIds	array		.
 * @param	mapFlavorParamsIds	array		.
 * @param	mapThumbParamsIds	array		.
 * @param	mapCaptionParamsIds	array		.
 */
function KalturaCrossKalturaDistributionProfile(){
	this.targetServiceUrl = null;
	this.targetAccountId = null;
	this.targetLoginId = null;
	this.targetLoginPassword = null;
	this.metadataXslt = null;
	this.metadataXpathsTriggerUpdate = null;
	this.distributeCaptions = null;
	this.distributeCuePoints = null;
	this.distributeRemoteFlavorAssetContent = null;
	this.distributeRemoteThumbAssetContent = null;
	this.distributeRemoteCaptionAssetContent = null;
	this.mapAccessControlProfileIds = null;
	this.mapConversionProfileIds = null;
	this.mapMetadataProfileIds = null;
	this.mapStorageProfileIds = null;
	this.mapFlavorParamsIds = null;
	this.mapThumbParamsIds = null;
	this.mapCaptionParamsIds = null;
}
KalturaCrossKalturaDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	cuePointTypeEqual	string		.
 * @param	cuePointTypeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	triggeredAtGreaterThanOrEqual	int		.
 * @param	triggeredAtLessThanOrEqual	int		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	startTimeGreaterThanOrEqual	int		.
 * @param	startTimeLessThanOrEqual	int		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	partnerSortValueEqual	int		.
 * @param	partnerSortValueIn	string		.
 * @param	partnerSortValueGreaterThanOrEqual	int		.
 * @param	partnerSortValueLessThanOrEqual	int		.
 * @param	forceStopEqual	int		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 */
function KalturaCuePointBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.cuePointTypeEqual = null;
	this.cuePointTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.triggeredAtGreaterThanOrEqual = null;
	this.triggeredAtLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.partnerSortValueEqual = null;
	this.partnerSortValueIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.forceStopEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
KalturaCuePointBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	videoAssetFilePath	string		.
 * @param	accessControlGeoBlockingOperation	string		.
 * @param	accessControlGeoBlockingCountryList	string		.
 * @param	captionsInfo	array		.
 */
function KalturaDailymotionDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.accessControlGeoBlockingOperation = null;
	this.accessControlGeoBlockingCountryList = null;
	this.captionsInfo = null;
}
KalturaDailymotionDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	user	string		.
 * @param	password	string		.
 * @param	geoBlockingMapping	int		.
 */
function KalturaDailymotionDistributionProfile(){
	this.user = null;
	this.password = null;
	this.geoBlockingMapping = null;
}
KalturaDailymotionDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	useIntelliseek	bool		Should we use intelliseek.
 */
function KalturaDeliveryProfileAkamaiHttp(){
	this.useIntelliseek = null;
}
KalturaDeliveryProfileAkamaiHttp.inheritsFrom (KalturaDeliveryProfileHttp);


/**
 * @param	isLive	int		.
 */
function KalturaDeliveryProfileFilter(){
	this.isLive = null;
}
KalturaDeliveryProfileFilter.inheritsFrom (KalturaDeliveryProfileBaseFilter);


/**
 * @param	pattern	string		.
 */
function KalturaDeliveryProfileGenericHttp(){
	this.pattern = null;
}
KalturaDeliveryProfileGenericHttp.inheritsFrom (KalturaDeliveryProfileHttp);


/**
 * @param	pattern	string		.
 * @param	rendererClass	string		rendererClass.
 */
function KalturaDeliveryProfileGenericRtmp(){
	this.pattern = null;
	this.rendererClass = null;
}
KalturaDeliveryProfileGenericRtmp.inheritsFrom (KalturaDeliveryProfileRtmp);


/**
 * @param	disableExtraAttributes	bool		.
 * @param	forceProxy	bool		.
 */
function KalturaDeliveryProfileLivePackagerHls(){
	this.disableExtraAttributes = null;
	this.forceProxy = null;
}
KalturaDeliveryProfileLivePackagerHls.inheritsFrom (KalturaDeliveryProfileLivePackager);


/**
 * @param	adStitchingEnabled	bool		.
 */
function KalturaDeliveryProfileVodPackagerPlayServer(){
	this.adStitchingEnabled = null;
}
KalturaDeliveryProfileVodPackagerPlayServer.inheritsFrom (KalturaDeliveryProfileVod);


/**
 * @param	keepDistributionItem	bool		Flag signifying that the associated distribution item should not be moved to 'removed' status.
 */
function KalturaDistributionDeleteJobData(){
	this.keepDistributionItem = null;
}
KalturaDistributionDeleteJobData.inheritsFrom (KalturaDistributionJobData);


/**
 * @param	plays	int		.
 * @param	views	int		.
 */
function KalturaDistributionFetchReportJobData(){
	this.plays = null;
	this.views = null;
}
KalturaDistributionFetchReportJobData.inheritsFrom (KalturaDistributionJobData);


/**
 */
function KalturaDistributionProfileFilter(){
}
KalturaDistributionProfileFilter.inheritsFrom (KalturaDistributionProfileBaseFilter);


/**
 */
function KalturaDistributionProviderFilter(){
}
KalturaDistributionProviderFilter.inheritsFrom (KalturaDistributionProviderBaseFilter);


/**
 */
function KalturaDistributionSubmitJobData(){
}
KalturaDistributionSubmitJobData.inheritsFrom (KalturaDistributionJobData);


/**
 */
function KalturaDistributionUpdateJobData(){
}
KalturaDistributionUpdateJobData.inheritsFrom (KalturaDistributionJobData);


/**
 * @param	metadataProfileId	int		.
 */
function KalturaDistributionValidationErrorInvalidMetadata(){
	this.metadataProfileId = null;
}
KalturaDistributionValidationErrorInvalidMetadata.inheritsFrom (KalturaDistributionValidationErrorInvalidData);


/**
 */
function KalturaDocumentFlavorParams(){
}
KalturaDocumentFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	channelTitle	string		.
 * @param	channelLink	string		.
 * @param	channelDescription	string		.
 * @param	feedUrl	string		 (readOnly).
 * @param	cuePointsProvider	string		.
 * @param	itemsPerPage	string		.
 * @param	ignoreSchedulingInFeed	bool		.
 */
function KalturaDoubleClickDistributionProfile(){
	this.channelTitle = null;
	this.channelLink = null;
	this.channelDescription = null;
	this.feedUrl = null;
	this.cuePointsProvider = null;
	this.itemsPerPage = null;
	this.ignoreSchedulingInFeed = null;
}
KalturaDoubleClickDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaDrmPolicyFilter(){
}
KalturaDrmPolicyFilter.inheritsFrom (KalturaDrmPolicyBaseFilter);


/**
 */
function KalturaDrmProfileFilter(){
}
KalturaDrmProfileFilter.inheritsFrom (KalturaDrmProfileBaseFilter);


/**
 */
function KalturaDropFolderFileFilter(){
}
KalturaDropFolderFileFilter.inheritsFrom (KalturaDropFolderFileBaseFilter);


/**
 * @param	currentDc	int		.
 */
function KalturaDropFolderFilter(){
	this.currentDc = null;
}
KalturaDropFolderFilter.inheritsFrom (KalturaDropFolderBaseFilter);


/**
 * @param	field	string		.
 */
function KalturaDynamicObjectSearchItem(){
	this.field = null;
}
KalturaDynamicObjectSearchItem.inheritsFrom (KalturaSearchOperator);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 * @param	addHighlight	bool		.
 */
function KalturaESearchAbstractCategoryItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
	this.addHighlight = null;
}
KalturaESearchAbstractCategoryItem.inheritsFrom (KalturaESearchCategoryBaseItem);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 * @param	addHighlight	bool		.
 */
function KalturaESearchAbstractEntryItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
	this.addHighlight = null;
}
KalturaESearchAbstractEntryItem.inheritsFrom (KalturaESearchEntryBaseItem);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 * @param	addHighlight	bool		.
 */
function KalturaESearchAbstractGroupItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
	this.addHighlight = null;
}
KalturaESearchAbstractGroupItem.inheritsFrom (KalturaESearchGroupBaseItem);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 * @param	addHighlight	bool		.
 */
function KalturaESearchAbstractUserItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
	this.addHighlight = null;
}
KalturaESearchAbstractUserItem.inheritsFrom (KalturaESearchUserBaseItem);


/**
 * @param	playbackDomain	string		Delivery server playback Domain.
 */
function KalturaEdgeServerNode(){
	this.playbackDomain = null;
}
KalturaEdgeServerNode.inheritsFrom (KalturaDeliveryServerNode);


/**
 * @param	fromEmail	string		Define the email sender email.
 * @param	fromName	string		Define the email sender name.
 * @param	to	KalturaEmailNotificationRecipientJobData		Email recipient emails and names, key is mail address and value is the name.
 * @param	cc	KalturaEmailNotificationRecipientJobData		Email cc emails and names, key is mail address and value is the name.
 * @param	bcc	KalturaEmailNotificationRecipientJobData		Email bcc emails and names, key is mail address and value is the name.
 * @param	replyTo	KalturaEmailNotificationRecipientJobData		Email addresses that a replies should be sent to, key is mail address and value is the name.
 * @param	priority	int		Define the email priority.
 * @param	confirmReadingTo	string		Email address that a reading confirmation will be sent to.
 * @param	hostname	string		Hostname to use in Message-Id and Received headers and as default HELO string. 
 *		 If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'..
 * @param	messageID	string		Sets the message ID to be used in the Message-Id header.
 *		 If empty, a unique id will be generated..
 * @param	customHeaders	array		Adds a e-mail custom header.
 */
function KalturaEmailNotificationDispatchJobData(){
	this.fromEmail = null;
	this.fromName = null;
	this.to = null;
	this.cc = null;
	this.bcc = null;
	this.replyTo = null;
	this.priority = null;
	this.confirmReadingTo = null;
	this.hostname = null;
	this.messageID = null;
	this.customHeaders = null;
}
KalturaEmailNotificationDispatchJobData.inheritsFrom (KalturaEventNotificationDispatchJobData);


/**
 * @param	application	string		.
 * @param	userIds	string		.
 * @param	playbackContext	string		.
 * @param	ancestorPlaybackContext	string		.
 */
function KalturaEndUserReportInputFilter(){
	this.application = null;
	this.userIds = null;
	this.playbackContext = null;
	this.ancestorPlaybackContext = null;
}
KalturaEndUserReportInputFilter.inheritsFrom (KalturaReportInputFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	submittedAtGreaterThanOrEqual	int		.
 * @param	submittedAtLessThanOrEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	distributionProfileIdEqual	int		.
 * @param	distributionProfileIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	dirtyStatusEqual	int		.
 * @param	dirtyStatusIn	string		.
 * @param	sunriseGreaterThanOrEqual	int		.
 * @param	sunriseLessThanOrEqual	int		.
 * @param	sunsetGreaterThanOrEqual	int		.
 * @param	sunsetLessThanOrEqual	int		.
 */
function KalturaEntryDistributionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.submittedAtGreaterThanOrEqual = null;
	this.submittedAtLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.distributionProfileIdEqual = null;
	this.distributionProfileIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.dirtyStatusEqual = null;
	this.dirtyStatusIn = null;
	this.sunriseGreaterThanOrEqual = null;
	this.sunriseLessThanOrEqual = null;
	this.sunsetGreaterThanOrEqual = null;
	this.sunsetLessThanOrEqual = null;
}
KalturaEntryDistributionBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaEntryIndexAdvancedFilter(){
}
KalturaEntryIndexAdvancedFilter.inheritsFrom (KalturaIndexAdvancedFilter);


/**
 * @param	referrer	string		.
 */
function KalturaEntryReferrerLiveStats(){
	this.referrer = null;
}
KalturaEntryReferrerLiveStats.inheritsFrom (KalturaEntryLiveStats);


/**
 * @param	entryId	string		ID of the source entry.
 * @param	flavorParamsId	int		ID of the source flavor params, set to null to use the source flavor.
 */
function KalturaEntryResource(){
	this.entryId = null;
	this.flavorParamsId = null;
}
KalturaEntryResource.inheritsFrom (KalturaContentResource);


/**
 */
function KalturaEntryServerNodeFilter(){
}
KalturaEntryServerNodeFilter.inheritsFrom (KalturaEntryServerNodeBaseFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	vendorPartnerIdEqual	int		.
 * @param	vendorPartnerIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	queueTimeGreaterThanOrEqual	int		.
 * @param	queueTimeLessThanOrEqual	int		.
 * @param	finishTimeGreaterThanOrEqual	int		.
 * @param	finishTimeLessThanOrEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	reachProfileIdEqual	int		.
 * @param	reachProfileIdIn	string		.
 * @param	catalogItemIdEqual	int		.
 * @param	catalogItemIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	contextEqual	string		.
 * @param	expectedFinishTimeGreaterThanOrEqual	int		.
 * @param	expectedFinishTimeLessThanOrEqual	int		.
 * @param	entryObjectTypeEqual	int		.
 * @param	entryObjectTypeIn	string		.
 * @param	entryObjectTypeNotIn	string		.
 */
function KalturaEntryVendorTaskBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.vendorPartnerIdEqual = null;
	this.vendorPartnerIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.queueTimeGreaterThanOrEqual = null;
	this.queueTimeLessThanOrEqual = null;
	this.finishTimeGreaterThanOrEqual = null;
	this.finishTimeLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.reachProfileIdEqual = null;
	this.reachProfileIdIn = null;
	this.catalogItemIdEqual = null;
	this.catalogItemIdIn = null;
	this.userIdEqual = null;
	this.contextEqual = null;
	this.expectedFinishTimeGreaterThanOrEqual = null;
	this.expectedFinishTimeLessThanOrEqual = null;
	this.entryObjectTypeEqual = null;
	this.entryObjectTypeIn = null;
	this.entryObjectTypeNotIn = null;
}
KalturaEntryVendorTaskBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	freeText	string		.
 */
function KalturaEntryVendorTaskFilter(){
	this.freeText = null;
}
KalturaEntryVendorTaskFilter.inheritsFrom (KalturaEntryVendorTaskBaseFilter);


/**
 * @param	filter	KalturaEntryVendorTaskFilter		The filter should return the list of users that need to be specified in the csv..
 */
function KalturaEntryVendorTaskCsvJobData(){
	this.filter = null;
}
KalturaEntryVendorTaskCsvJobData.inheritsFrom (KalturaExportCsvJobData);


/**
 * @param	dynamicValues	array		.
 */
function KalturaEventNotificationDispatchScope(){
	this.dynamicValues = null;
}
KalturaEventNotificationDispatchScope.inheritsFrom (KalturaEventNotificationScope);


/**
 */
function KalturaEventNotificationTemplateFilter(){
}
KalturaEventNotificationTemplateFilter.inheritsFrom (KalturaEventNotificationTemplateBaseFilter);


/**
 * @param	flavorAssetId	string		.
 * @param	calculateComplexity	bool		.
 * @param	extractId3Tags	bool		.
 * @param	destDataFilePath	string		The data output file.
 * @param	detectGOP	int		.
 */
function KalturaExtractMediaJobData(){
	this.flavorAssetId = null;
	this.calculateComplexity = null;
	this.extractId3Tags = null;
	this.destDataFilePath = null;
	this.detectGOP = null;
}
KalturaExtractMediaJobData.inheritsFrom (KalturaConvartableJobData);


/**
 * @param	videoAssetFilePath	string		.
 * @param	thumbAssetId	string		.
 * @param	captionsInfo	array		.
 */
function KalturaFacebookDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.thumbAssetId = null;
	this.captionsInfo = null;
}
KalturaFacebookDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	apiAuthorizeUrl	string		.
 * @param	pageId	string		.
 * @param	pageAccessToken	string		.
 * @param	userAccessToken	string		.
 * @param	state	string		.
 * @param	permissions	string		.
 * @param	reRequestPermissions	int		.
 */
function KalturaFacebookDistributionProfile(){
	this.apiAuthorizeUrl = null;
	this.pageId = null;
	this.pageAccessToken = null;
	this.userAccessToken = null;
	this.state = null;
	this.permissions = null;
	this.reRequestPermissions = null;
}
KalturaFacebookDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	certificate	string		.
 */
function KalturaFairPlayPlaybackPluginData(){
	this.certificate = null;
}
KalturaFairPlayPlaybackPluginData.inheritsFrom (KalturaDrmPlaybackPluginData);


/**
 */
function KalturaIntegerField(){
}
KalturaIntegerField.inheritsFrom (KalturaIntegerValue);


/**
 * @param	field	KalturaIntegerField		Field to evaluate.
 */
function KalturaFieldCompareCondition(){
	this.field = null;
}
KalturaFieldCompareCondition.inheritsFrom (KalturaCompareCondition);


/**
 */
function KalturaStringField(){
}
KalturaStringField.inheritsFrom (KalturaStringValue);


/**
 * @param	field	KalturaStringField		Field to evaluate.
 */
function KalturaFieldMatchCondition(){
	this.field = null;
}
KalturaFieldMatchCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	fileAssetObjectTypeEqual	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	string		.
 * @param	statusIn	string		.
 */
function KalturaFileAssetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.fileAssetObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaFileAssetBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	currentDc	int		.
 */
function KalturaFileSyncFilter(){
	this.currentDc = null;
}
KalturaFileSyncFilter.inheritsFrom (KalturaFileSyncBaseFilter);


/**
 * @param	fileSyncObjectType	int		The object type of the file sync object.
 * @param	objectSubType	int		The object sub-type of the file sync object.
 * @param	objectId	string		The object id of the file sync object.
 * @param	version	string		The version of the file sync object.
 * @param	originEntryId	string		The original entry ID, if exists.
 */
function KalturaFileSyncResource(){
	this.fileSyncObjectType = null;
	this.objectSubType = null;
	this.objectId = null;
	this.version = null;
	this.originEntryId = null;
}
KalturaFileSyncResource.inheritsFrom (KalturaContentResource);


/**
 * @param	videoAssetFilePaths	array		Demonstrate passing array of paths to the job.
 * @param	thumbAssetFilePath	string		Demonstrate passing single path to the job.
 * @param	cuePoints	array		.
 */
function KalturaFreewheelGenericDistributionJobProviderData(){
	this.videoAssetFilePaths = null;
	this.thumbAssetFilePath = null;
	this.cuePoints = null;
}
KalturaFreewheelGenericDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	apikey	string		.
 * @param	email	string		.
 * @param	sftpPass	string		.
 * @param	sftpLogin	string		.
 * @param	contentOwner	string		.
 * @param	upstreamVideoId	string		.
 * @param	upstreamNetworkName	string		.
 * @param	upstreamNetworkId	string		.
 * @param	categoryId	string		.
 * @param	replaceGroup	bool		.
 * @param	replaceAirDates	bool		.
 */
function KalturaFreewheelGenericDistributionProfile(){
	this.apikey = null;
	this.email = null;
	this.sftpPass = null;
	this.sftpLogin = null;
	this.contentOwner = null;
	this.upstreamVideoId = null;
	this.upstreamNetworkName = null;
	this.upstreamNetworkId = null;
	this.categoryId = null;
	this.replaceGroup = null;
	this.replaceAirDates = null;
}
KalturaFreewheelGenericDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	filesForDistribution	array		.
 */
function KalturaFtpDistributionJobProviderData(){
	this.filesForDistribution = null;
}
KalturaFtpDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	protocol	int		 (insertOnly).
 * @param	host	string		.
 * @param	port	int		.
 * @param	basePath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	passphrase	string		.
 * @param	sftpPublicKey	string		.
 * @param	sftpPrivateKey	string		.
 * @param	disableMetadata	bool		.
 * @param	metadataXslt	string		.
 * @param	metadataFilenameXslt	string		.
 * @param	flavorAssetFilenameXslt	string		.
 * @param	thumbnailAssetFilenameXslt	string		.
 * @param	assetFilenameXslt	string		.
 * @param	asperaPublicKey	string		.
 * @param	asperaPrivateKey	string		.
 * @param	sendMetadataAfterAssets	bool		.
 */
function KalturaFtpDistributionProfile(){
	this.protocol = null;
	this.host = null;
	this.port = null;
	this.basePath = null;
	this.username = null;
	this.password = null;
	this.passphrase = null;
	this.sftpPublicKey = null;
	this.sftpPrivateKey = null;
	this.disableMetadata = null;
	this.metadataXslt = null;
	this.metadataFilenameXslt = null;
	this.flavorAssetFilenameXslt = null;
	this.thumbnailAssetFilenameXslt = null;
	this.assetFilenameXslt = null;
	this.asperaPublicKey = null;
	this.asperaPrivateKey = null;
	this.sendMetadataAfterAssets = null;
}
KalturaFtpDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	host	string		.
 * @param	port	int		.
 * @param	username	string		.
 * @param	password	string		.
 */
function KalturaFtpDropFolder(){
	this.host = null;
	this.port = null;
	this.username = null;
	this.password = null;
}
KalturaFtpDropFolder.inheritsFrom (KalturaRemoteDropFolder);


/**
 */
function KalturaFtpScheduledDistributionProvider(){
}
KalturaFtpScheduledDistributionProvider.inheritsFrom (KalturaFtpDistributionProvider);


/**
 */
function KalturaGenericDistributionProviderActionFilter(){
}
KalturaGenericDistributionProviderActionFilter.inheritsFrom (KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param	xslt	string		.
 * @param	itemXpathsToExtend	array		.
 */
function KalturaGenericXsltSyndicationFeed(){
	this.xslt = null;
	this.itemXpathsToExtend = null;
}
KalturaGenericXsltSyndicationFeed.inheritsFrom (KalturaGenericSyndicationFeed);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaGeoDistanceCondition(){
	this.geoCoderType = null;
}
KalturaGeoDistanceCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	city	KalturaCoordinate		.
 * @param	country	KalturaCoordinate		.
 */
function KalturaGeoTimeLiveStats(){
	this.city = null;
	this.country = null;
}
KalturaGeoTimeLiveStats.inheritsFrom (KalturaEntryLiveStats);


/**
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	groupIdEqual	string		.
 * @param	groupIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaGroupUserBaseFilter(){
	this.userIdEqual = null;
	this.userIdIn = null;
	this.groupIdEqual = null;
	this.groupIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaGroupUserBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	url	string		Remote server URL.
 * @param	method	int		Request method..
 * @param	contentType	string		The type of the data to send..
 * @param	data	string		Data to send..
 * @param	timeout	int		The maximum number of seconds to allow cURL functions to execute..
 * @param	connectTimeout	int		The number of seconds to wait while trying to connect.
 *		 Must be larger than zero..
 * @param	username	string		A username to use for the connection..
 * @param	password	string		A password to use for the connection..
 * @param	authenticationMethod	int		The HTTP authentication method to use..
 * @param	sslVersion	int		The SSL version (2 or 3) to use.
 *		 By default PHP will try to determine this itself, although in some cases this must be set manually..
 * @param	sslCertificate	string		SSL certificate to verify the peer with..
 * @param	sslCertificateType	string		The format of the certificate..
 * @param	sslCertificatePassword	string		The password required to use the certificate..
 * @param	sslEngine	string		The identifier for the crypto engine of the private SSL key specified in ssl key..
 * @param	sslEngineDefault	string		The identifier for the crypto engine used for asymmetric crypto operations..
 * @param	sslKeyType	string		The key type of the private SSL key specified in ssl key - PEM / DER / ENG..
 * @param	sslKey	string		Private SSL key..
 * @param	sslKeyPassword	string		The secret password needed to use the private SSL key specified in ssl key..
 * @param	customHeaders	array		Adds a e-mail custom header.
 * @param	signSecret	string		The secret to sign the notification with.
 */
function KalturaHttpNotificationDispatchJobData(){
	this.url = null;
	this.method = null;
	this.contentType = null;
	this.data = null;
	this.timeout = null;
	this.connectTimeout = null;
	this.username = null;
	this.password = null;
	this.authenticationMethod = null;
	this.sslVersion = null;
	this.sslCertificate = null;
	this.sslCertificateType = null;
	this.sslCertificatePassword = null;
	this.sslEngine = null;
	this.sslEngineDefault = null;
	this.sslKeyType = null;
	this.sslKey = null;
	this.sslKeyPassword = null;
	this.customHeaders = null;
	this.signSecret = null;
}
KalturaHttpNotificationDispatchJobData.inheritsFrom (KalturaEventNotificationDispatchJobData);


/**
 * @param	videoAssetFilePath	string		.
 * @param	thumbAssetFilePath	string		.
 * @param	cuePoints	array		.
 * @param	fileBaseName	string		.
 * @param	captionLocalPaths	array		.
 */
function KalturaHuluDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.thumbAssetFilePath = null;
	this.cuePoints = null;
	this.fileBaseName = null;
	this.captionLocalPaths = null;
}
KalturaHuluDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	sftpHost	string		.
 * @param	sftpLogin	string		.
 * @param	sftpPass	string		.
 * @param	seriesChannel	string		.
 * @param	seriesPrimaryCategory	string		.
 * @param	seriesAdditionalCategories	array		.
 * @param	seasonNumber	string		.
 * @param	seasonSynopsis	string		.
 * @param	seasonTuneInInformation	string		.
 * @param	videoMediaType	string		.
 * @param	disableEpisodeNumberCustomValidation	bool		.
 * @param	protocol	int		.
 * @param	asperaHost	string		.
 * @param	asperaLogin	string		.
 * @param	asperaPass	string		.
 * @param	port	int		.
 * @param	passphrase	string		.
 * @param	asperaPublicKey	string		.
 * @param	asperaPrivateKey	string		.
 */
function KalturaHuluDistributionProfile(){
	this.sftpHost = null;
	this.sftpLogin = null;
	this.sftpPass = null;
	this.seriesChannel = null;
	this.seriesPrimaryCategory = null;
	this.seriesAdditionalCategories = null;
	this.seasonNumber = null;
	this.seasonSynopsis = null;
	this.seasonTuneInInformation = null;
	this.videoMediaType = null;
	this.disableEpisodeNumberCustomValidation = null;
	this.protocol = null;
	this.asperaHost = null;
	this.asperaLogin = null;
	this.asperaPass = null;
	this.port = null;
	this.passphrase = null;
	this.asperaPublicKey = null;
	this.asperaPrivateKey = null;
}
KalturaHuluDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	thumbnailUrl	string		.
 * @param	flavorAssetUrl	string		.
 */
function KalturaIdeticDistributionJobProviderData(){
	this.thumbnailUrl = null;
	this.flavorAssetUrl = null;
}
KalturaIdeticDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	ftpPath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	domain	string		.
 */
function KalturaIdeticDistributionProfile(){
	this.ftpPath = null;
	this.username = null;
	this.password = null;
	this.domain = null;
}
KalturaIdeticDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	densityWidth	int		.
 * @param	densityHeight	int		.
 * @param	sizeWidth	int		.
 * @param	sizeHeight	int		.
 * @param	depth	int		.
 */
function KalturaImageFlavorParams(){
	this.densityWidth = null;
	this.densityHeight = null;
	this.sizeWidth = null;
	this.sizeHeight = null;
	this.depth = null;
}
KalturaImageFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	acceptInternalIps	bool		allow internal ips.
 * @param	httpHeader	string		http header name for extracting the ip.
 */
function KalturaIpAddressCondition(){
	this.acceptInternalIps = null;
	this.httpHeader = null;
}
KalturaIpAddressCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 */
function KalturaLikeBaseFilter(){
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.userIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
KalturaLikeBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	multicastIP	string		.
 * @param	multicastPort	int		.
 */
function KalturaLiveAsset(){
	this.multicastIP = null;
	this.multicastPort = null;
}
KalturaLiveAsset.inheritsFrom (KalturaFlavorAsset);


/**
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	string		.
 * @param	statusIn	string		.
 * @param	channelIdEqual	string		.
 * @param	channelIdIn	string		.
 * @param	startTimeGreaterThanOrEqual	float		.
 * @param	startTimeLessThanOrEqual	float		.
 */
function KalturaLiveChannelSegmentBaseFilter(){
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.channelIdEqual = null;
	this.channelIdIn = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
}
KalturaLiveChannelSegmentBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	streamSuffix	string		Suffix to be added to the stream name after the entry id {entry_id}_{stream_suffix}, e.g. for entry id 0_kjdu5jr6 and suffix 1, the stream name will be 0_kjdu5jr6_1.
 */
function KalturaLiveParams(){
	this.streamSuffix = null;
}
KalturaLiveParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	metadataProfileId	int		The metadata profile we should look the xpath in.
 * @param	additionalFields	array		The xpath to look in the metadataProfileId  and the wanted csv field name.
 * @param	mappedFields	array		Array of header names and their mapped user fields.
 * @param	options	KalturaExportToCsvOptions		.
 */
function KalturaMappedObjectsCsvJobData(){
	this.metadataProfileId = null;
	this.additionalFields = null;
	this.mappedFields = null;
	this.options = null;
}
KalturaMappedObjectsCsvJobData.inheritsFrom (KalturaExportCsvJobData);


/**
 * @param	xPath	string		May contain the full xpath to the field in three formats
 *		 1. Slashed xPath, e.g. /metadata/myElementName
 *		 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 *		 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param	profileId	int		Metadata profile id.
 * @param	profileSystemName	string		Metadata profile system name.
 */
function KalturaMatchMetadataCondition(){
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
}
KalturaMatchMetadataCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	searchParams	KalturaESearchEntryParams		Esearch parameters for the entry search.
 * @param	options	array		options.
 */
function KalturaMediaEsearchExportToCsvJobData(){
	this.searchParams = null;
	this.options = null;
}
KalturaMediaEsearchExportToCsvJobData.inheritsFrom (KalturaExportCsvJobData);


/**
 */
function KalturaMediaFlavorParams(){
}
KalturaMediaFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 */
function KalturaMediaInfoFilter(){
}
KalturaMediaInfoFilter.inheritsFrom (KalturaMediaInfoBaseFilter);


/**
 * @param	applicationName	string		Media server application name.
 * @param	mediaServerPortConfig	array		Media server playback port configuration by protocol and format.
 * @param	mediaServerPlaybackDomainConfig	array		Media server playback Domain configuration by protocol and format.
 */
function KalturaMediaServerNode(){
	this.applicationName = null;
	this.mediaServerPortConfig = null;
	this.mediaServerPlaybackDomainConfig = null;
}
KalturaMediaServerNode.inheritsFrom (KalturaDeliveryServerNode);


/**
 * @param	preStartTime	int		The time relative time before the startTime considered as preStart time.
 */
function KalturaMeetingScheduleEvent(){
	this.preStartTime = null;
}
KalturaMeetingScheduleEvent.inheritsFrom (KalturaEntryScheduleEvent);


/**
 * @param	partnerIdEqual	int		.
 * @param	metadataProfileIdEqual	int		.
 * @param	metadataProfileIdIn	string		.
 * @param	metadataProfileVersionEqual	int		.
 * @param	metadataProfileVersionGreaterThanOrEqual	int		.
 * @param	metadataProfileVersionLessThanOrEqual	int		.
 * @param	metadataObjectTypeEqual	string		When null, default is KalturaMetadataObjectType::ENTRY.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	versionEqual	int		.
 * @param	versionGreaterThanOrEqual	int		.
 * @param	versionLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaMetadataBaseFilter(){
	this.partnerIdEqual = null;
	this.metadataProfileIdEqual = null;
	this.metadataProfileIdIn = null;
	this.metadataProfileVersionEqual = null;
	this.metadataProfileVersionGreaterThanOrEqual = null;
	this.metadataProfileVersionLessThanOrEqual = null;
	this.metadataObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionGreaterThanOrEqual = null;
	this.versionLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaMetadataBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	detailLevel	string		The level of detail for the metadata enrichment process. (insertOnly).
 * @param	instruction	string		Instructions describing what should be taken into account during the metadata enrichment process. (insertOnly).
 * @param	shouldApply	bool		Indicates whether the metadata enrichment results should be automatically applied on the task entry.
 *		 Default is false..
 * @param	applyMode	string		Specifies how metadata fields should be applied during enrichment.
 *		 If 'FILL_EMPTY_AND_OVERRIDE_LIST', use overrideFields to specify which fields to override..
 * @param	overrideFields	array		List of entry fields to override when applyMode is set to 'FILL_EMPTY_AND_OVERRIDE_LIST'..
 */
function KalturaMetadataEnrichmentVendorTaskData(){
	this.detailLevel = null;
	this.instruction = null;
	this.shouldApply = null;
	this.applyMode = null;
	this.overrideFields = null;
}
KalturaMetadataEnrichmentVendorTaskData.inheritsFrom (KalturaLocalizedVendorTaskData);


/**
 * @param	xPath	string		May contain the full xpath to the field in three formats
 *		 1. Slashed xPath, e.g. /metadata/myElementName
 *		 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 *		 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param	profileId	int		Metadata profile id.
 * @param	profileSystemName	string		Metadata profile system name.
 * @param	versionA	string		.
 * @param	versionB	string		.
 */
function KalturaMetadataFieldChangedCondition(){
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
	this.versionA = null;
	this.versionB = null;
}
KalturaMetadataFieldChangedCondition.inheritsFrom (KalturaMatchCondition);


/**
 */
function KalturaMetadataProfileFilter(){
}
KalturaMetadataProfileFilter.inheritsFrom (KalturaMetadataProfileBaseFilter);


/**
 * @param	metadataProfileId	int		.
 * @param	orderBy	string		.
 */
function KalturaMetadataSearchItem(){
	this.metadataProfileId = null;
	this.orderBy = null;
}
KalturaMetadataSearchItem.inheritsFrom (KalturaSearchOperator);


/**
 * @param	assetLocalPaths	string		.
 * @param	thumbUrls	string		.
 */
function KalturaMetroPcsDistributionJobProviderData(){
	this.assetLocalPaths = null;
	this.thumbUrls = null;
}
KalturaMetroPcsDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	ftpHost	string		.
 * @param	ftpLogin	string		.
 * @param	ftpPass	string		.
 * @param	ftpPath	string		.
 * @param	providerName	string		.
 * @param	providerId	string		.
 * @param	copyright	string		.
 * @param	entitlements	string		.
 * @param	rating	string		.
 * @param	itemType	string		.
 */
function KalturaMetroPcsDistributionProfile(){
	this.ftpHost = null;
	this.ftpLogin = null;
	this.ftpPass = null;
	this.ftpPath = null;
	this.providerName = null;
	this.providerId = null;
	this.copyright = null;
	this.entitlements = null;
	this.rating = null;
	this.itemType = null;
}
KalturaMetroPcsDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	integrationId	int		ID of the integration being fulfilled by the drop folder.
 * @param	tenantId	string		 (readOnly).
 * @param	clientSecret	string		 (readOnly).
 * @param	clientId	string		 (readOnly).
 */
function KalturaMicrosoftTeamsDropFolder(){
	this.integrationId = null;
	this.tenantId = null;
	this.clientSecret = null;
	this.clientId = null;
}
KalturaMicrosoftTeamsDropFolder.inheritsFrom (KalturaRemoteDropFolder);


/**
 * @param	xml	string		.
 */
function KalturaMsnDistributionJobProviderData(){
	this.xml = null;
}
KalturaMsnDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	domain	string		.
 * @param	csId	string		.
 * @param	source	string		.
 * @param	sourceFriendlyName	string		.
 * @param	pageGroup	string		.
 * @param	sourceFlavorParamsId	int		.
 * @param	wmvFlavorParamsId	int		.
 * @param	flvFlavorParamsId	int		.
 * @param	slFlavorParamsId	int		.
 * @param	slHdFlavorParamsId	int		.
 * @param	msnvideoCat	string		.
 * @param	msnvideoTop	string		.
 * @param	msnvideoTopCat	string		.
 */
function KalturaMsnDistributionProfile(){
	this.username = null;
	this.password = null;
	this.domain = null;
	this.csId = null;
	this.source = null;
	this.sourceFriendlyName = null;
	this.pageGroup = null;
	this.sourceFlavorParamsId = null;
	this.wmvFlavorParamsId = null;
	this.flvFlavorParamsId = null;
	this.slFlavorParamsId = null;
	this.slHdFlavorParamsId = null;
	this.msnvideoCat = null;
	this.msnvideoTop = null;
	this.msnvideoTopCat = null;
}
KalturaMsnDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	channelTitle	string		.
 * @param	channelLink	string		.
 * @param	channelDescription	string		.
 * @param	channelLanguage	string		.
 * @param	channelCopyright	string		.
 * @param	channelImageTitle	string		.
 * @param	channelImageUrl	string		.
 * @param	channelImageLink	string		.
 * @param	itemMediaRating	string		.
 */
function KalturaNdnDistributionProfile(){
	this.feedUrl = null;
	this.channelTitle = null;
	this.channelLink = null;
	this.channelDescription = null;
	this.channelLanguage = null;
	this.channelCopyright = null;
	this.channelImageTitle = null;
	this.channelImageUrl = null;
	this.channelImageLink = null;
	this.itemMediaRating = null;
}
KalturaNdnDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	resources	array		.
 * @param	chapterNamePolicy	int		.
 * @param	dimensionsAttributes	array		.
 */
function KalturaOperationResources(){
	this.resources = null;
	this.chapterNamePolicy = null;
	this.dimensionsAttributes = null;
}
KalturaOperationResources.inheritsFrom (KalturaContentResource);


/**
 */
function KalturaPartnerFilter(){
}
KalturaPartnerFilter.inheritsFrom (KalturaPartnerBaseFilter);


/**
 * @param	readonly	bool		.
 */
function KalturaPdfFlavorParams(){
	this.readonly = null;
}
KalturaPdfFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	friendlyNameLike	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	dependsOnPermissionNamesMultiLikeOr	string		.
 * @param	dependsOnPermissionNamesMultiLikeAnd	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.friendlyNameLike = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dependsOnPermissionNamesMultiLikeOr = null;
	this.dependsOnPermissionNamesMultiLikeAnd = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionItemBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionItemBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaPlaybackContextOptions(){
}
KalturaPlaybackContextOptions.inheritsFrom (KalturaEntryContextDataParams);


/**
 * @param	flavorAssetId	string		.
 * @param	flavorAssetEncryptionKey	string		.
 * @param	createThumb	bool		Indicates if a thumbnail should be created.
 * @param	thumbPath	string		The path of the created thumbnail.
 * @param	thumbOffset	int		The position of the thumbnail in the media file.
 * @param	thumbHeight	int		The height of the movie, will be used to comapare if this thumbnail is the best we can have.
 * @param	thumbBitrate	int		The bit rate of the movie, will be used to comapare if this thumbnail is the best we can have.
 * @param	customData	string		.
 */
function KalturaPostConvertJobData(){
	this.flavorAssetId = null;
	this.flavorAssetEncryptionKey = null;
	this.createThumb = null;
	this.thumbPath = null;
	this.thumbOffset = null;
	this.thumbHeight = null;
	this.thumbBitrate = null;
	this.customData = null;
}
KalturaPostConvertJobData.inheritsFrom (KalturaConvartableJobData);


/**
 * @param	previewLength	int		The preview restriction length.
 */
function KalturaPreviewRestriction(){
	this.previewLength = null;
}
KalturaPreviewRestriction.inheritsFrom (KalturaSessionRestriction);


/**
 * @param	currentVersion	int		.
 * @param	bodyParamContent	string		.
 */
function KalturaPushToNewsDistributionJobProviderData(){
	this.currentVersion = null;
	this.bodyParamContent = null;
}
KalturaPushToNewsDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	protocol	int		 (insertOnly).
 * @param	host	string		.
 * @param	ips	string		.
 * @param	port	int		.
 * @param	basePath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	namedItem	string		.
 * @param	certificateKey	string		.
 * @param	bodyXslt	string		.
 * @param	recentNewsTimeInterval	int		.
 */
function KalturaPushToNewsDistributionProfile(){
	this.protocol = null;
	this.host = null;
	this.ips = null;
	this.port = null;
	this.basePath = null;
	this.username = null;
	this.password = null;
	this.namedItem = null;
	this.certificateKey = null;
	this.bodyXslt = null;
	this.recentNewsTimeInterval = null;
}
KalturaPushToNewsDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	xml	string		.
 * @param	videoFilePaths	array		.
 * @param	thumbnailFilePaths	array		.
 */
function KalturaQuickPlayDistributionJobProviderData(){
	this.xml = null;
	this.videoFilePaths = null;
	this.thumbnailFilePaths = null;
}
KalturaQuickPlayDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	sftpHost	string		.
 * @param	sftpLogin	string		.
 * @param	sftpPass	string		.
 * @param	sftpBasePath	string		.
 * @param	channelTitle	string		.
 * @param	channelLink	string		.
 * @param	channelDescription	string		.
 * @param	channelManagingEditor	string		.
 * @param	channelLanguage	string		.
 * @param	channelImageTitle	string		.
 * @param	channelImageWidth	string		.
 * @param	channelImageHeight	string		.
 * @param	channelImageLink	string		.
 * @param	channelImageUrl	string		.
 * @param	channelCopyright	string		.
 * @param	channelGenerator	string		.
 * @param	channelRating	string		.
 */
function KalturaQuickPlayDistributionProfile(){
	this.sftpHost = null;
	this.sftpLogin = null;
	this.sftpPass = null;
	this.sftpBasePath = null;
	this.channelTitle = null;
	this.channelLink = null;
	this.channelDescription = null;
	this.channelManagingEditor = null;
	this.channelLanguage = null;
	this.channelImageTitle = null;
	this.channelImageWidth = null;
	this.channelImageHeight = null;
	this.channelImageLink = null;
	this.channelImageUrl = null;
	this.channelCopyright = null;
	this.channelGenerator = null;
	this.channelRating = null;
}
KalturaQuickPlayDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	entryIdEqual	string		This filter should be in use for retrieving only a specific quiz entry (identified by its entryId)..
 * @param	entryIdIn	string		This filter should be in use for retrieving few specific quiz entries (string should include comma separated list of entryId strings)..
 */
function KalturaQuizFilter(){
	this.entryIdEqual = null;
	this.entryIdIn = null;
}
KalturaQuizFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	numberOfQuestions	int		Number Of Questions..
 * @param	questionsType	string		Questions Type..
 * @param	context	string		Quiz Context..
 * @param	formalStyle	string		Formal Style..
 * @param	createQuiz	bool		Create quiz flag..
 * @param	quizOutput	string		Quiz entry Id.
 */
function KalturaQuizVendorTaskData(){
	this.numberOfQuestions = null;
	this.questionsType = null;
	this.context = null;
	this.formalStyle = null;
	this.createQuiz = null;
	this.quizOutput = null;
}
KalturaQuizVendorTaskData.inheritsFrom (KalturaLocalizedVendorTaskData);


/**
 * @param	entryIdEqual	string		.
 * @param	rankIn	string		.
 */
function KalturaRatingCountBaseFilter(){
	this.entryIdEqual = null;
	this.rankIn = null;
}
KalturaRatingCountBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	profileTypeEqual	int		.
 * @param	profileTypeIn	string		.
 */
function KalturaReachProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.profileTypeEqual = null;
	this.profileTypeIn = null;
}
KalturaReachProfileBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	serviceType	int		.
 * @param	serviceFeature	int		.
 * @param	turnAroundTime	int		.
 */
function KalturaReachReportInputFilter(){
	this.serviceType = null;
	this.serviceFeature = null;
	this.turnAroundTime = null;
}
KalturaReachReportInputFilter.inheritsFrom (KalturaReportInputFilter);


/**
 * @param	protocol	string		http / https.
 * @param	ksType	int		.
 * @param	userRoles	array		.
 * @param	cachedObjectType	string		Class name.
 * @param	objectId	string		.
 * @param	startObjectKey	string		.
 * @param	endObjectKey	string		.
 */
function KalturaRecalculateResponseProfileCacheJobData(){
	this.protocol = null;
	this.ksType = null;
	this.userRoles = null;
	this.cachedObjectType = null;
	this.objectId = null;
	this.startObjectKey = null;
	this.endObjectKey = null;
}
KalturaRecalculateResponseProfileCacheJobData.inheritsFrom (KalturaRecalculateCacheJobData);


/**
 */
function KalturaRecordScheduleEvent(){
}
KalturaRecordScheduleEvent.inheritsFrom (KalturaEntryScheduleEvent);


/**
 */
function KalturaRegexCondition(){
}
KalturaRegexCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	resources	array		Array of remote stoage resources.
 */
function KalturaRemoteStorageResources(){
	this.resources = null;
}
KalturaRemoteStorageResources.inheritsFrom (KalturaContentResource);


/**
 */
function KalturaResponseProfileFilter(){
}
KalturaResponseProfileFilter.inheritsFrom (KalturaResponseProfileBaseFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	parentIdEqual	int		.
 * @param	parentIdIn	string		.
 * @param	parentIdNotIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	startDateGreaterThanOrEqual	int		.
 * @param	startDateLessThanOrEqual	int		.
 * @param	endDateGreaterThanOrEqual	int		.
 * @param	endDateLessThanOrEqual	int		.
 * @param	referenceIdEqual	string		.
 * @param	referenceIdIn	string		.
 * @param	ownerIdEqual	string		.
 * @param	ownerIdIn	string		.
 * @param	priorityEqual	int		.
 * @param	priorityIn	string		.
 * @param	priorityGreaterThanOrEqual	int		.
 * @param	priorityLessThanOrEqual	int		.
 * @param	recurrenceTypeEqual	int		.
 * @param	recurrenceTypeIn	string		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaScheduleEventBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.parentIdNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.referenceIdEqual = null;
	this.referenceIdIn = null;
	this.ownerIdEqual = null;
	this.ownerIdIn = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.recurrenceTypeEqual = null;
	this.recurrenceTypeIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaScheduleEventBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	eventIdEqual	int		.
 * @param	eventIdIn	string		.
 * @param	resourceIdEqual	int		.
 * @param	resourceIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaScheduleEventResourceBaseFilter(){
	this.eventIdEqual = null;
	this.eventIdIn = null;
	this.resourceIdEqual = null;
	this.resourceIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaScheduleEventResourceBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	parentIdEqual	int		.
 * @param	parentIdIn	string		.
 * @param	nameEqual	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaScheduleResourceBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaScheduleResourceBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaScheduledTaskProfileFilter(){
}
KalturaScheduledTaskProfileFilter.inheritsFrom (KalturaScheduledTaskProfileBaseFilter);


/**
 * @param	comparison	string		.
 */
function KalturaSearchComparableAttributeCondition(){
	this.comparison = null;
}
KalturaSearchComparableAttributeCondition.inheritsFrom (KalturaAttributeCondition);


/**
 * @param	comparison	string		.
 */
function KalturaSearchComparableCondition(){
	this.comparison = null;
}
KalturaSearchComparableCondition.inheritsFrom (KalturaSearchCondition);


/**
 * @param	filter	KalturaESearchHistoryFilter		.
 */
function KalturaSearchHistoryCsvJobData(){
	this.filter = null;
}
KalturaSearchHistoryCsvJobData.inheritsFrom (KalturaExportCsvJobData);


/**
 * @param	not	bool		.
 */
function KalturaSearchMatchAttributeCondition(){
	this.not = null;
}
KalturaSearchMatchAttributeCondition.inheritsFrom (KalturaAttributeCondition);


/**
 * @param	not	bool		.
 */
function KalturaSearchMatchCondition(){
	this.not = null;
}
KalturaSearchMatchCondition.inheritsFrom (KalturaSearchCondition);


/**
 */
function KalturaServerNodeFilter(){
}
KalturaServerNodeFilter.inheritsFrom (KalturaServerNodeBaseFilter);


/**
 */
function KalturaShortLinkFilter(){
}
KalturaShortLinkFilter.inheritsFrom (KalturaShortLinkBaseFilter);


/**
 */
function KalturaSiteCondition(){
}
KalturaSiteCondition.inheritsFrom (KalturaMatchCondition);


/**
 * @param	host	string		.
 * @param	port	int		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	privateKey	string		.
 * @param	publicKey	string		.
 * @param	passPhrase	string		.
 */
function KalturaSshDropFolder(){
	this.host = null;
	this.port = null;
	this.username = null;
	this.password = null;
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
}
KalturaSshDropFolder.inheritsFrom (KalturaRemoteDropFolder);


/**
 * @param	privateKey	string		.
 * @param	publicKey	string		.
 * @param	passPhrase	string		.
 */
function KalturaSshImportJobData(){
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
}
KalturaSshImportJobData.inheritsFrom (KalturaImportJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	applicationTypeEqual	string		.
 * @param	partnerIdEqual	int		.
 * @param	domainEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	redirectUrlEqual	string		.
 */
function KalturaSsoBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.applicationTypeEqual = null;
	this.partnerIdEqual = null;
	this.domainEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.redirectUrlEqual = null;
}
KalturaSsoBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaStorageDeleteJobData(){
}
KalturaStorageDeleteJobData.inheritsFrom (KalturaStorageJobData);


/**
 * @param	force	bool		.
 * @param	createLink	bool		.
 * @param	assetId	string		.
 * @param	externalUrl	string		.
 * @param	port	int		.
 */
function KalturaStorageExportJobData(){
	this.force = null;
	this.createLink = null;
	this.assetId = null;
	this.externalUrl = null;
	this.port = null;
}
KalturaStorageExportJobData.inheritsFrom (KalturaStorageJobData);


/**
 */
function KalturaStorageProfileFilter(){
}
KalturaStorageProfileFilter.inheritsFrom (KalturaStorageProfileBaseFilter);


/**
 * @param	content	string		Textual content.
 */
function KalturaStringResource(){
	this.content = null;
}
KalturaStringResource.inheritsFrom (KalturaContentResource);


/**
 * @param	typeOfSummary	string		Type of summary..
 * @param	writingStyle	string		Writing style of the summary..
 * @param	summaryOutputJson	string		JSON string containing the summary output..
 */
function KalturaSummaryVendorTaskData(){
	this.typeOfSummary = null;
	this.writingStyle = null;
	this.summaryOutputJson = null;
}
KalturaSummaryVendorTaskData.inheritsFrom (KalturaLocalizedVendorTaskData);


/**
 * @param	flashVersion	int		.
 * @param	poly2Bitmap	bool		.
 */
function KalturaSwfFlavorParams(){
	this.flashVersion = null;
	this.poly2Bitmap = null;
}
KalturaSwfFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 * @param	feedSubtitle	string		.
 * @param	feedLink	string		.
 * @param	feedAuthorName	string		.
 */
function KalturaSynacorHboDistributionProfile(){
	this.feedUrl = null;
	this.feedTitle = null;
	this.feedSubtitle = null;
	this.feedLink = null;
	this.feedAuthorName = null;
}
KalturaSynacorHboDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	metadataProfileId	int		.
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 * @param	feedLink	string		.
 * @param	feedDescription	string		.
 * @param	feedLanguage	string		.
 * @param	feedCopyright	string		.
 * @param	feedImageTitle	string		.
 * @param	feedImageUrl	string		.
 * @param	feedImageLink	string		.
 * @param	feedImageWidth	int		.
 * @param	feedImageHeight	int		.
 */
function KalturaTVComDistributionProfile(){
	this.metadataProfileId = null;
	this.feedUrl = null;
	this.feedTitle = null;
	this.feedLink = null;
	this.feedDescription = null;
	this.feedLanguage = null;
	this.feedCopyright = null;
	this.feedImageTitle = null;
	this.feedImageUrl = null;
	this.feedImageLink = null;
	this.feedImageWidth = null;
	this.feedImageHeight = null;
}
KalturaTVComDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	toDate	int		.
 */
function KalturaTimeRangeVendorCredit(){
	this.toDate = null;
}
KalturaTimeRangeVendorCredit.inheritsFrom (KalturaVendorCredit);


/**
 * @param	feedUrl	string		 (readOnly).
 */
function KalturaTimeWarnerDistributionProfile(){
	this.feedUrl = null;
}
KalturaTimeWarnerDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	cuePointId	string		Associated thumb cue point ID (insertOnly).
 */
function KalturaTimedThumbAsset(){
	this.cuePointId = null;
}
KalturaTimedThumbAsset.inheritsFrom (KalturaThumbAsset);


/**
 */
function KalturaTranslationVendorTaskData(){
}
KalturaTranslationVendorTaskData.inheritsFrom (KalturaVendorTaskDataCaptionAsset);


/**
 * @param	xml	string		.
 */
function KalturaTvinciDistributionJobProviderData(){
	this.xml = null;
}
KalturaTvinciDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	ingestUrl	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	tags	array		Tags array for Tvinci distribution.
 * @param	xsltFile	string		.
 * @param	innerType	string		.
 * @param	assetsType	int		.
 */
function KalturaTvinciDistributionProfile(){
	this.ingestUrl = null;
	this.username = null;
	this.password = null;
	this.tags = null;
	this.xsltFile = null;
	this.innerType = null;
	this.assetsType = null;
}
KalturaTvinciDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaUiConfFilter(){
}
KalturaUiConfFilter.inheritsFrom (KalturaUiConfBaseFilter);


/**
 * @param	catalogGuid	string		The Catalog GUID the video is in or will be ingested into..
 * @param	title	string		The Title assigned to the video. The Foreign Key will be used if no title is provided..
 * @param	mediaChanged	bool		Indicates that the media content changed and therefore the job should wait for HTTP callback notification to be closed..
 * @param	flavorAssetVersion	string		Flavor asset version..
 * @param	notificationBaseUrl	string		The schema and host name to the Kaltura server, e.g. http://www.kaltura.com.
 */
function KalturaUnicornDistributionJobProviderData(){
	this.catalogGuid = null;
	this.title = null;
	this.mediaChanged = null;
	this.flavorAssetVersion = null;
	this.notificationBaseUrl = null;
}
KalturaUnicornDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	username	string		The email address associated with the Upload User, used to authorize the incoming request..
 * @param	password	string		The password used in association with the email to determine if the Upload User is authorized the incoming request..
 * @param	domainName	string		The name of the Domain that the Upload User should have access to, Used for authentication..
 * @param	channelGuid	string		The Channel GUID assigned to this Publication Rule. Must be a valid Channel in the Domain that was used in authentication..
 * @param	apiHostUrl	string		The API host URL that the Upload User should have access to, Used for HTTP content submission..
 * @param	domainGuid	string		The GUID of the Customer Domain in the Unicorn system obtained by contacting your Unicorn representative..
 * @param	adFreeApplicationGuid	string		The GUID for the application in which to record metrics and enforce business rules obtained through your Unicorn representative..
 * @param	remoteAssetParamsId	int		The flavor-params that will be used for the remote asset..
 * @param	storageProfileId	string		The remote storage that should be used for the remote asset..
 */
function KalturaUnicornDistributionProfile(){
	this.username = null;
	this.password = null;
	this.domainName = null;
	this.channelGuid = null;
	this.apiHostUrl = null;
	this.domainGuid = null;
	this.adFreeApplicationGuid = null;
	this.remoteAssetParamsId = null;
	this.storageProfileId = null;
}
KalturaUnicornDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaUploadTokenFilter(){
}
KalturaUploadTokenFilter.inheritsFrom (KalturaUploadTokenBaseFilter);


/**
 * @param	appGuidEqual	string		The app-registry id to search for.
 * @param	appGuidIn	string		Apps-registries ids csv list.
 * @param	userRoleIdEqual	string		The user-role id to search for.
 * @param	userRoleIdIn	string		Users-roles ids csv list.
 * @param	createdAtLessThanOrEqual	int		Unix timestamp.
 * @param	createdAtGreaterThanOrEqual	int		Unix timestamp.
 * @param	updatedAtLessThanOrEqual	int		Unix timestamp.
 * @param	updatedAtGreaterThanOrEqual	int		Unix timestamp.
 */
function KalturaUserAppRoleBaseFilter(){
	this.appGuidEqual = null;
	this.appGuidIn = null;
	this.userRoleIdEqual = null;
	this.userRoleIdIn = null;
	this.createdAtLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
}
KalturaUserAppRoleBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	entryIdNotIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	userIdNotIn	string		.
 * @param	statusEqual	string		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	typeEqual	string		.
 */
function KalturaUserEntryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.entryIdNotIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.userIdNotIn = null;
	this.statusEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.typeEqual = null;
}
KalturaUserEntryBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	loginEmailEqual	string		.
 */
function KalturaUserLoginDataBaseFilter(){
	this.loginEmailEqual = null;
}
KalturaUserLoginDataBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaUserRoleBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaUserRoleBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 */
function KalturaUserScorePropertiesBaseFilter(){
}
KalturaUserScorePropertiesBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	backgroundImageWide	string		.
 * @param	backgroundImageStandard	string		.
 */
function KalturaUverseClickToOrderDistributionProfile(){
	this.feedUrl = null;
	this.backgroundImageWide = null;
	this.backgroundImageStandard = null;
}
KalturaUverseClickToOrderDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	localAssetFilePath	string		The local file path of the video asset that needs to be distributed.
 * @param	remoteAssetUrl	string		The remote URL of the video asset that was distributed.
 * @param	remoteAssetFileName	string		The file name of the remote video asset that was distributed.
 */
function KalturaUverseDistributionJobProviderData(){
	this.localAssetFilePath = null;
	this.remoteAssetUrl = null;
	this.remoteAssetFileName = null;
}
KalturaUverseDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	feedUrl	string		 (readOnly).
 * @param	channelTitle	string		.
 * @param	channelLink	string		.
 * @param	channelDescription	string		.
 * @param	channelLanguage	string		.
 * @param	channelCopyright	string		.
 * @param	channelImageTitle	string		.
 * @param	channelImageUrl	string		.
 * @param	channelImageLink	string		.
 * @param	ftpHost	string		.
 * @param	ftpLogin	string		.
 * @param	ftpPassword	string		.
 */
function KalturaUverseDistributionProfile(){
	this.feedUrl = null;
	this.channelTitle = null;
	this.channelLink = null;
	this.channelDescription = null;
	this.channelLanguage = null;
	this.channelCopyright = null;
	this.channelImageTitle = null;
	this.channelImageUrl = null;
	this.channelImageLink = null;
	this.ftpHost = null;
	this.ftpLogin = null;
	this.ftpPassword = null;
}
KalturaUverseDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	provisioningParams	array		.
 * @param	userName	string		.
 * @param	password	string		.
 */
function KalturaVelocixProvisionJobData(){
	this.provisioningParams = null;
	this.userName = null;
	this.password = null;
}
KalturaVelocixProvisionJobData.inheritsFrom (KalturaProvisionJobData);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	idNotIn	string		.
 * @param	vendorPartnerIdEqual	int		.
 * @param	vendorPartnerIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	serviceTypeEqual	int		.
 * @param	serviceTypeIn	string		.
 * @param	serviceFeatureEqual	int		.
 * @param	serviceFeatureIn	string		.
 * @param	turnAroundTimeEqual	int		.
 * @param	turnAroundTimeIn	string		.
 */
function KalturaVendorCatalogItemBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.vendorPartnerIdEqual = null;
	this.vendorPartnerIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.serviceTypeEqual = null;
	this.serviceTypeIn = null;
	this.serviceFeatureEqual = null;
	this.serviceFeatureIn = null;
	this.turnAroundTimeEqual = null;
	this.turnAroundTimeIn = null;
}
KalturaVendorCatalogItemBaseFilter.inheritsFrom (KalturaRelatedFilter);


/**
 * @param	minimalRefundTime	int		.
 * @param	minimalOrderTime	int		.
 * @param	durationLimit	int		.
 */
function KalturaVendorLiveCatalogItem(){
	this.minimalRefundTime = null;
	this.minimalOrderTime = null;
	this.durationLimit = null;
}
KalturaVendorLiveCatalogItem.inheritsFrom (KalturaVendorCaptionsCatalogItem);


/**
 * @param	targetLanguage	string		.
 * @param	requireSource	bool		.
 */
function KalturaVendorTranslationCatalogItem(){
	this.targetLanguage = null;
	this.requireSource = null;
}
KalturaVendorTranslationCatalogItem.inheritsFrom (KalturaVendorCaptionsCatalogItem);


/**
 * @param	xml	string		.
 */
function KalturaVerizonVcastDistributionJobProviderData(){
	this.xml = null;
}
KalturaVerizonVcastDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	ftpHost	string		.
 * @param	ftpLogin	string		.
 * @param	ftpPass	string		.
 * @param	providerName	string		.
 * @param	providerId	string		.
 * @param	entitlement	string		.
 * @param	priority	string		.
 * @param	allowStreaming	string		.
 * @param	streamingPriceCode	string		.
 * @param	allowDownload	string		.
 * @param	downloadPriceCode	string		.
 */
function KalturaVerizonVcastDistributionProfile(){
	this.ftpHost = null;
	this.ftpLogin = null;
	this.ftpPass = null;
	this.providerName = null;
	this.providerId = null;
	this.entitlement = null;
	this.priority = null;
	this.allowStreaming = null;
	this.streamingPriceCode = null;
	this.allowDownload = null;
	this.downloadPriceCode = null;
}
KalturaVerizonVcastDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaVirtualEventFilter(){
}
KalturaVirtualEventFilter.inheritsFrom (KalturaVirtualEventBaseFilter);


/**
 */
function KalturaVirusScanProfileFilter(){
}
KalturaVirusScanProfileFilter.inheritsFrom (KalturaVirusScanProfileBaseFilter);


/**
 */
function KalturaVodScheduleEvent(){
}
KalturaVodScheduleEvent.inheritsFrom (KalturaEntryScheduleEvent);


/**
 * @param	description	string		.
 * @param	webexHostId	string		.
 */
function KalturaWebexDropFolderContentProcessorJobData(){
	this.description = null;
	this.webexHostId = null;
}
KalturaWebexDropFolderContentProcessorJobData.inheritsFrom (KalturaDropFolderContentProcessorJobData);


/**
 * @param	widevineDistributionStartDate	int		License distribution window start date.
 * @param	widevineDistributionEndDate	int		License distribution window end date.
 * @param	widevineAssetId	int		Widevine unique asset id.
 */
function KalturaWidevineFlavorAsset(){
	this.widevineDistributionStartDate = null;
	this.widevineDistributionEndDate = null;
	this.widevineAssetId = null;
}
KalturaWidevineFlavorAsset.inheritsFrom (KalturaFlavorAsset);


/**
 */
function KalturaWidevineFlavorParams(){
}
KalturaWidevineFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 */
function KalturaWidgetFilter(){
}
KalturaWidgetFilter.inheritsFrom (KalturaWidgetBaseFilter);


/**
 * @param	smallThumbPath	string		.
 * @param	largeThumbPath	string		.
 * @param	videoAssetFilePath	string		.
 */
function KalturaYahooDistributionJobProviderData(){
	this.smallThumbPath = null;
	this.largeThumbPath = null;
	this.videoAssetFilePath = null;
}
KalturaYahooDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	ftpPath	string		.
 * @param	ftpUsername	string		.
 * @param	ftpPassword	string		.
 * @param	ftpHost	string		.
 * @param	contactTelephone	string		.
 * @param	contactEmail	string		.
 * @param	processFeed	int		.
 */
function KalturaYahooDistributionProfile(){
	this.ftpPath = null;
	this.ftpUsername = null;
	this.ftpPassword = null;
	this.ftpHost = null;
	this.contactTelephone = null;
	this.contactEmail = null;
	this.processFeed = null;
}
KalturaYahooDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	videoAssetFilePath	string		.
 * @param	thumbAssetFilePath	string		.
 * @param	thumbAssetId	string		.
 * @param	captionAssetIds	string		.
 * @param	sftpDirectory	string		.
 * @param	sftpMetadataFilename	string		.
 * @param	currentPlaylists	string		.
 * @param	newPlaylists	string		.
 * @param	submitXml	string		.
 * @param	updateXml	string		.
 * @param	deleteXml	string		.
 * @param	googleClientId	string		.
 * @param	googleClientSecret	string		.
 * @param	googleTokenData	string		.
 * @param	captionsCsvMap	string		.
 * @param	submitCsvMap	string		.
 * @param	updateCsvMap	string		.
 * @param	deleteVideoIds	string		.
 */
function KalturaYouTubeDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.thumbAssetFilePath = null;
	this.thumbAssetId = null;
	this.captionAssetIds = null;
	this.sftpDirectory = null;
	this.sftpMetadataFilename = null;
	this.currentPlaylists = null;
	this.newPlaylists = null;
	this.submitXml = null;
	this.updateXml = null;
	this.deleteXml = null;
	this.googleClientId = null;
	this.googleClientSecret = null;
	this.googleTokenData = null;
	this.captionsCsvMap = null;
	this.submitCsvMap = null;
	this.updateCsvMap = null;
	this.deleteVideoIds = null;
}
KalturaYouTubeDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	feedSpecVersion	string		.
 * @param	username	string		.
 * @param	notificationEmail	string		.
 * @param	sftpHost	string		.
 * @param	sftpPort	int		.
 * @param	sftpLogin	string		.
 * @param	sftpPublicKey	string		.
 * @param	sftpPrivateKey	string		.
 * @param	sftpBaseDir	string		.
 * @param	ownerName	string		.
 * @param	defaultCategory	string		.
 * @param	allowComments	string		.
 * @param	allowEmbedding	string		.
 * @param	allowRatings	string		.
 * @param	allowResponses	string		.
 * @param	commercialPolicy	string		.
 * @param	ugcPolicy	string		.
 * @param	target	string		.
 * @param	adServerPartnerId	string		.
 * @param	enableAdServer	bool		.
 * @param	allowPreRollAds	bool		.
 * @param	allowPostRollAds	bool		.
 * @param	strict	string		.
 * @param	overrideManualEdits	string		.
 * @param	urgentReference	string		.
 * @param	allowSyndication	string		.
 * @param	hideViewCount	string		.
 * @param	allowAdsenseForVideo	string		.
 * @param	allowInvideo	string		.
 * @param	allowMidRollAds	bool		.
 * @param	instreamStandard	string		.
 * @param	instreamTrueview	string		.
 * @param	claimType	string		.
 * @param	blockOutsideOwnership	string		.
 * @param	captionAutosync	string		.
 * @param	deleteReference	bool		.
 * @param	releaseClaims	bool		.
 * @param	apiAuthorizeUrl	string		.
 * @param	privacyStatus	string		.
 * @param	enableContentId	string		.
 * @param	thirdPartyAds	string		.
 * @param	productListingAds	string		.
 * @param	domainWhitelist	string		.
 * @param	notifySubscribers	string		.
 */
function KalturaYouTubeDistributionProfile(){
	this.feedSpecVersion = null;
	this.username = null;
	this.notificationEmail = null;
	this.sftpHost = null;
	this.sftpPort = null;
	this.sftpLogin = null;
	this.sftpPublicKey = null;
	this.sftpPrivateKey = null;
	this.sftpBaseDir = null;
	this.ownerName = null;
	this.defaultCategory = null;
	this.allowComments = null;
	this.allowEmbedding = null;
	this.allowRatings = null;
	this.allowResponses = null;
	this.commercialPolicy = null;
	this.ugcPolicy = null;
	this.target = null;
	this.adServerPartnerId = null;
	this.enableAdServer = null;
	this.allowPreRollAds = null;
	this.allowPostRollAds = null;
	this.strict = null;
	this.overrideManualEdits = null;
	this.urgentReference = null;
	this.allowSyndication = null;
	this.hideViewCount = null;
	this.allowAdsenseForVideo = null;
	this.allowInvideo = null;
	this.allowMidRollAds = null;
	this.instreamStandard = null;
	this.instreamTrueview = null;
	this.claimType = null;
	this.blockOutsideOwnership = null;
	this.captionAutosync = null;
	this.deleteReference = null;
	this.releaseClaims = null;
	this.apiAuthorizeUrl = null;
	this.privacyStatus = null;
	this.enableContentId = null;
	this.thirdPartyAds = null;
	this.productListingAds = null;
	this.domainWhitelist = null;
	this.notifySubscribers = null;
}
KalturaYouTubeDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	videoAssetFilePath	string		.
 * @param	thumbAssetFilePath	string		.
 * @param	captionsInfo	array		.
 */
function KalturaYoutubeApiDistributionJobProviderData(){
	this.videoAssetFilePath = null;
	this.thumbAssetFilePath = null;
	this.captionsInfo = null;
}
KalturaYoutubeApiDistributionJobProviderData.inheritsFrom (KalturaConfigurableDistributionJobProviderData);


/**
 * @param	username	string		.
 * @param	defaultCategory	int		.
 * @param	allowComments	string		.
 * @param	allowEmbedding	string		.
 * @param	allowRatings	string		.
 * @param	allowResponses	string		.
 * @param	apiAuthorizeUrl	string		.
 * @param	googleClientId	string		.
 * @param	googleClientSecret	string		.
 * @param	googleTokenData	string		.
 * @param	assumeSuccess	bool		.
 * @param	privacyStatus	string		.
 */
function KalturaYoutubeApiDistributionProfile(){
	this.username = null;
	this.defaultCategory = null;
	this.allowComments = null;
	this.allowEmbedding = null;
	this.allowRatings = null;
	this.allowResponses = null;
	this.apiAuthorizeUrl = null;
	this.googleClientId = null;
	this.googleClientSecret = null;
	this.googleTokenData = null;
	this.assumeSuccess = null;
	this.privacyStatus = null;
}
KalturaYoutubeApiDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 */
function KalturaAccessControlFilter(){
}
KalturaAccessControlFilter.inheritsFrom (KalturaAccessControlBaseFilter);


/**
 */
function KalturaAccessControlProfileFilter(){
}
KalturaAccessControlProfileFilter.inheritsFrom (KalturaAccessControlProfileBaseFilter);


/**
 */
function KalturaActionNameCondition(){
}
KalturaActionNameCondition.inheritsFrom (KalturaRegexCondition);


/**
 */
function KalturaActivitiBusinessProcessServerBaseFilter(){
}
KalturaActivitiBusinessProcessServerBaseFilter.inheritsFrom (KalturaBusinessProcessServerFilter);


/**
 * @param	filesPermissionInS3	string		.
 * @param	s3Region	string		.
 * @param	sseType	string		.
 * @param	sseKmsKeyId	string		.
 * @param	signatureType	string		.
 * @param	endPoint	string		.
 * @param	storageClass	string		.
 */
function KalturaAmazonS3StorageExportJobData(){
	this.filesPermissionInS3 = null;
	this.s3Region = null;
	this.sseType = null;
	this.sseKmsKeyId = null;
	this.signatureType = null;
	this.endPoint = null;
	this.storageClass = null;
}
KalturaAmazonS3StorageExportJobData.inheritsFrom (KalturaStorageExportJobData);


/**
 */
function KalturaAmazonS3StorageProfileBaseFilter(){
}
KalturaAmazonS3StorageProfileBaseFilter.inheritsFrom (KalturaStorageProfileFilter);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaAnonymousIPContextField(){
	this.geoCoderType = null;
}
KalturaAnonymousIPContextField.inheritsFrom (KalturaStringField);


/**
 */
function KalturaAssetParamsFilter(){
}
KalturaAssetParamsFilter.inheritsFrom (KalturaAssetParamsBaseFilter);


/**
 */
function KalturaAttUverseDistributionProviderBaseFilter(){
}
KalturaAttUverseDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaAuditTrailFilter(){
}
KalturaAuditTrailFilter.inheritsFrom (KalturaAuditTrailBaseFilter);


/**
 */
function KalturaAvnDistributionProviderBaseFilter(){
}
KalturaAvnDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	attribute	string		.
 */
function KalturaBaseEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaBaseEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaBaseEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaBaseEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 * @param	jobTypeAndSubTypeIn	string		.
 */
function KalturaBatchJobFilterExt(){
	this.jobTypeAndSubTypeIn = null;
}
KalturaBatchJobFilterExt.inheritsFrom (KalturaBatchJobFilter);


/**
 * @param	fieldName	string		.
 */
function KalturaBeaconScheduledResourceItem(){
	this.fieldName = null;
}
KalturaBeaconScheduledResourceItem.inheritsFrom (KalturaBeaconAbstractScheduledResourceItem);


/**
 * @param	eventsType	int		The type of the events that ill be created by this upload.
 */
function KalturaBulkUploadICalJobData(){
	this.eventsType = null;
}
KalturaBulkUploadICalJobData.inheritsFrom (KalturaBulkUploadScheduleEventJobData);


/**
 * @param	csvVersion	int		The version of the csv file (readOnly).
 * @param	columns	array		Array containing CSV headers.
 */
function KalturaBulkUploadScheduleEventCsvJobData(){
	this.csvVersion = null;
	this.columns = null;
}
KalturaBulkUploadScheduleEventCsvJobData.inheritsFrom (KalturaBulkUploadScheduleEventJobData);


/**
 */
function KalturaBusinessProcessNotificationTemplateBaseFilter(){
}
KalturaBusinessProcessNotificationTemplateBaseFilter.inheritsFrom (KalturaEventNotificationTemplateFilter);


/**
 * @param	freeText	string		.
 * @param	membersIn	string		.
 * @param	nameOrReferenceIdStartsWith	string		.
 * @param	managerEqual	string		.
 * @param	memberEqual	string		.
 * @param	fullNameStartsWithIn	string		.
 * @param	ancestorIdIn	string		not includes the category itself (only sub categories).
 * @param	idOrInheritedParentIdIn	string		.
 */
function KalturaCategoryFilter(){
	this.freeText = null;
	this.membersIn = null;
	this.nameOrReferenceIdStartsWith = null;
	this.managerEqual = null;
	this.memberEqual = null;
	this.fullNameStartsWithIn = null;
	this.ancestorIdIn = null;
	this.idOrInheritedParentIdIn = null;
}
KalturaCategoryFilter.inheritsFrom (KalturaCategoryBaseFilter);


/**
 * @param	filter	KalturaCategoryFilter		The filter should return the list of categories that need to be specified in the csv..
 */
function KalturaCategoriesCsvJobData(){
	this.filter = null;
}
KalturaCategoriesCsvJobData.inheritsFrom (KalturaMappedObjectsCsvJobData);


/**
 */
function KalturaCategoryEntryFilter(){
}
KalturaCategoryEntryFilter.inheritsFrom (KalturaCategoryEntryBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProviderBaseFilter(){
}
KalturaComcastMrssDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaConfMapsFilter(){
}
KalturaConfMapsFilter.inheritsFrom (KalturaConfMapsBaseFilter);


/**
 */
function KalturaConferenceEntryServerNodeBaseFilter(){
}
KalturaConferenceEntryServerNodeBaseFilter.inheritsFrom (KalturaEntryServerNodeFilter);


/**
 */
function KalturaConferenceServerNodeBaseFilter(){
}
KalturaConferenceServerNodeBaseFilter.inheritsFrom (KalturaServerNodeFilter);


/**
 */
function KalturaConfigurableDistributionProfileBaseFilter(){
}
KalturaConfigurableDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaConstantXsltSyndicationFeed(){
}
KalturaConstantXsltSyndicationFeed.inheritsFrom (KalturaGenericXsltSyndicationFeed);


/**
 */
function KalturaConversionProfileFilter(){
}
KalturaConversionProfileFilter.inheritsFrom (KalturaConversionProfileBaseFilter);


/**
 * @param	conversionProfileIdFilter	KalturaConversionProfileFilter		.
 * @param	assetParamsIdFilter	KalturaAssetParamsFilter		.
 */
function KalturaConversionProfileAssetParamsFilter(){
	this.conversionProfileIdFilter = null;
	this.assetParamsIdFilter = null;
}
KalturaConversionProfileAssetParamsFilter.inheritsFrom (KalturaConversionProfileAssetParamsBaseFilter);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaCoordinatesContextField(){
	this.geoCoderType = null;
}
KalturaCoordinatesContextField.inheritsFrom (KalturaStringField);


/**
 */
function KalturaCortexApiDistributionProviderBaseFilter(){
}
KalturaCortexApiDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	geoCoderType	string		The ip geo coder engine to be used.
 */
function KalturaCountryContextField(){
	this.geoCoderType = null;
}
KalturaCountryContextField.inheritsFrom (KalturaStringField);


/**
 */
function KalturaCrossKalturaDistributionProviderBaseFilter(){
}
KalturaCrossKalturaDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	freeText	string		.
 * @param	userIdEqualCurrent	int		.
 * @param	userIdCurrent	int		.
 */
function KalturaCuePointFilter(){
	this.freeText = null;
	this.userIdEqualCurrent = null;
	this.userIdCurrent = null;
}
KalturaCuePointFilter.inheritsFrom (KalturaCuePointBaseFilter);


/**
 */
function KalturaDailymotionDistributionProviderBaseFilter(){
}
KalturaDailymotionDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	attribute	string		.
 */
function KalturaDataEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaDataEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaDataEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaDataEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter(){
}
KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileAkamaiHdsBaseFilter(){
}
KalturaDeliveryProfileAkamaiHdsBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileAkamaiHttpBaseFilter(){
}
KalturaDeliveryProfileAkamaiHttpBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileGenericAppleHttpBaseFilter(){
}
KalturaDeliveryProfileGenericAppleHttpBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileGenericHdsBaseFilter(){
}
KalturaDeliveryProfileGenericHdsBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileGenericHttpBaseFilter(){
}
KalturaDeliveryProfileGenericHttpBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileGenericSilverLightBaseFilter(){
}
KalturaDeliveryProfileGenericSilverLightBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileLiveAppleHttpBaseFilter(){
}
KalturaDeliveryProfileLiveAppleHttpBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 */
function KalturaDeliveryProfileRtmpBaseFilter(){
}
KalturaDeliveryProfileRtmpBaseFilter.inheritsFrom (KalturaDeliveryProfileFilter);


/**
 * @param	allowFairplayOffline	bool		.
 * @param	supportFmp4	bool		.
 */
function KalturaDeliveryProfileVodPackagerHls(){
	this.allowFairplayOffline = null;
	this.supportFmp4 = null;
}
KalturaDeliveryProfileVodPackagerHls.inheritsFrom (KalturaDeliveryProfileVodPackagerPlayServer);


/**
 */
function KalturaDeliveryServerNodeBaseFilter(){
}
KalturaDeliveryServerNodeBaseFilter.inheritsFrom (KalturaServerNodeFilter);


/**
 */
function KalturaDistributionDisableJobData(){
}
KalturaDistributionDisableJobData.inheritsFrom (KalturaDistributionUpdateJobData);


/**
 */
function KalturaDistributionEnableJobData(){
}
KalturaDistributionEnableJobData.inheritsFrom (KalturaDistributionUpdateJobData);


/**
 * @param	attribute	string		.
 */
function KalturaDocumentEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaDocumentEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaDocumentEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaDocumentEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaDocumentFlavorParamsOutput(){
}
KalturaDocumentFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaDoubleClickDistributionProviderBaseFilter(){
}
KalturaDoubleClickDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	dropFolderFileId	int		.
 */
function KalturaDropFolderImportJobData(){
	this.dropFolderFileId = null;
}
KalturaDropFolderImportJobData.inheritsFrom (KalturaSshImportJobData);


/**
 * @param	dropFolderId	int		the job drop folder id.
 */
function KalturaDropFolderXmlBulkUploadJobData(){
	this.dropFolderId = null;
}
KalturaDropFolderXmlBulkUploadJobData.inheritsFrom (KalturaBulkUploadXmlJobData);


/**
 * @param	fieldName	string		.
 * @param	categoryEntryStatus	int		.
 */
function KalturaESearchCategoryEntryItem(){
	this.fieldName = null;
	this.categoryEntryStatus = null;
}
KalturaESearchCategoryEntryItem.inheritsFrom (KalturaESearchAbstractEntryItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchCategoryItem(){
	this.fieldName = null;
}
KalturaESearchCategoryItem.inheritsFrom (KalturaESearchAbstractCategoryItem);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 * @param	metadataFieldId	int		.
 */
function KalturaESearchCategoryMetadataItem(){
	this.xpath = null;
	this.metadataProfileId = null;
	this.metadataFieldId = null;
}
KalturaESearchCategoryMetadataItem.inheritsFrom (KalturaESearchAbstractCategoryItem);


/**
 * @param	fieldName	string		.
 * @param	permissionLevel	int		.
 * @param	permissionName	string		.
 */
function KalturaESearchCategoryUserItem(){
	this.fieldName = null;
	this.permissionLevel = null;
	this.permissionName = null;
}
KalturaESearchCategoryUserItem.inheritsFrom (KalturaESearchAbstractCategoryItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchEntryItem(){
	this.fieldName = null;
}
KalturaESearchEntryItem.inheritsFrom (KalturaESearchAbstractEntryItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchGroupItem(){
	this.fieldName = null;
}
KalturaESearchGroupItem.inheritsFrom (KalturaESearchAbstractGroupItem);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 * @param	metadataFieldId	int		.
 */
function KalturaESearchGroupMetadataItem(){
	this.xpath = null;
	this.metadataProfileId = null;
	this.metadataFieldId = null;
}
KalturaESearchGroupMetadataItem.inheritsFrom (KalturaESearchAbstractGroupItem);


/**
 * @param	fieldName	string		.
 * @param	creationMode	int		.
 */
function KalturaESearchGroupUserItem(){
	this.fieldName = null;
	this.creationMode = null;
}
KalturaESearchGroupUserItem.inheritsFrom (KalturaESearchAbstractUserItem);


/**
 */
function KalturaESearchUnifiedItem(){
}
KalturaESearchUnifiedItem.inheritsFrom (KalturaESearchAbstractEntryItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchUserItem(){
	this.fieldName = null;
}
KalturaESearchUserItem.inheritsFrom (KalturaESearchAbstractUserItem);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 * @param	metadataFieldId	int		.
 */
function KalturaESearchUserMetadataItem(){
	this.xpath = null;
	this.metadataProfileId = null;
	this.metadataFieldId = null;
}
KalturaESearchUserMetadataItem.inheritsFrom (KalturaESearchAbstractUserItem);


/**
 */
function KalturaEmailNotificationTemplateBaseFilter(){
}
KalturaEmailNotificationTemplateBaseFilter.inheritsFrom (KalturaEventNotificationTemplateFilter);


/**
 * @param	filter	KalturaBaseEntryFilter		The filter should return the list of entries that need to be specified in the csv..
 */
function KalturaEntriesCsvJobData(){
	this.filter = null;
}
KalturaEntriesCsvJobData.inheritsFrom (KalturaMappedObjectsCsvJobData);


/**
 */
function KalturaEntryDistributionFilter(){
}
KalturaEntryDistributionFilter.inheritsFrom (KalturaEntryDistributionBaseFilter);


/**
 * @param	code	string		PHP code.
 */
function KalturaEvalBooleanField(){
	this.code = null;
}
KalturaEvalBooleanField.inheritsFrom (KalturaBooleanField);


/**
 * @param	code	string		PHP code.
 */
function KalturaEvalStringField(){
	this.code = null;
}
KalturaEvalStringField.inheritsFrom (KalturaStringField);


/**
 * @param	attribute	string		.
 */
function KalturaExternalMediaEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaExternalMediaEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaExternalMediaEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaExternalMediaEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaFacebookDistributionProviderBaseFilter(){
}
KalturaFacebookDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaFileAssetFilter(){
}
KalturaFileAssetFilter.inheritsFrom (KalturaFileAssetBaseFilter);


/**
 */
function KalturaFreewheelDistributionProfileBaseFilter(){
}
KalturaFreewheelDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaFreewheelDistributionProviderBaseFilter(){
}
KalturaFreewheelDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaFreewheelGenericDistributionProviderBaseFilter(){
}
KalturaFreewheelGenericDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaFtpDistributionProviderBaseFilter(){
}
KalturaFtpDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericDataCenterContentResource(){
}
KalturaGenericDataCenterContentResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 */
function KalturaGenericDistributionProfileBaseFilter(){
}
KalturaGenericDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	isDefaultEqual	int		.
 * @param	isDefaultIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaGenericDistributionProviderBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.isDefaultEqual = null;
	this.isDefaultIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaGenericDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericSyndicationFeedBaseFilter(){
}
KalturaGenericSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedBaseFilter(){
}
KalturaGoogleVideoSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 * @param	groupType	int		.
 */
function KalturaGroupUserFilter(){
	this.groupType = null;
}
KalturaGroupUserFilter.inheritsFrom (KalturaGroupUserBaseFilter);


/**
 * @param	headerName	string		header name.
 */
function KalturaHttpHeaderCondition(){
	this.headerName = null;
}
KalturaHttpHeaderCondition.inheritsFrom (KalturaRegexCondition);


/**
 */
function KalturaHttpNotificationTemplateBaseFilter(){
}
KalturaHttpNotificationTemplateBaseFilter.inheritsFrom (KalturaEventNotificationTemplateFilter);


/**
 */
function KalturaHuluDistributionProviderBaseFilter(){
}
KalturaHuluDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaITunesSyndicationFeedBaseFilter(){
}
KalturaITunesSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaIdeticDistributionProviderBaseFilter(){
}
KalturaIdeticDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	densityWidth	int		.
 * @param	densityHeight	int		.
 * @param	sizeWidth	int		.
 * @param	sizeHeight	int		.
 * @param	depth	int		.
 */
function KalturaImageFlavorParamsOutput(){
	this.densityWidth = null;
	this.densityHeight = null;
	this.sizeWidth = null;
	this.sizeHeight = null;
	this.depth = null;
}
KalturaImageFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaIpAddressContextField(){
}
KalturaIpAddressContextField.inheritsFrom (KalturaStringField);


/**
 */
function KalturaKafkaNotificationTemplateBaseFilter(){
}
KalturaKafkaNotificationTemplateBaseFilter.inheritsFrom (KalturaEventNotificationTemplateFilter);


/**
 * @param	contentMoid	string		Unique Kontiki MOID for the content uploaded to Kontiki.
 * @param	serviceToken	string		.
 */
function KalturaKontikiStorageDeleteJobData(){
	this.contentMoid = null;
	this.serviceToken = null;
}
KalturaKontikiStorageDeleteJobData.inheritsFrom (KalturaStorageDeleteJobData);


/**
 * @param	flavorAssetId	string		Holds the id of the exported asset.
 * @param	contentMoid	string		Unique Kontiki MOID for the content uploaded to Kontiki.
 * @param	serviceToken	string		.
 */
function KalturaKontikiStorageExportJobData(){
	this.flavorAssetId = null;
	this.contentMoid = null;
	this.serviceToken = null;
}
KalturaKontikiStorageExportJobData.inheritsFrom (KalturaStorageExportJobData);


/**
 */
function KalturaKontikiStorageProfileBaseFilter(){
}
KalturaKontikiStorageProfileBaseFilter.inheritsFrom (KalturaStorageProfileFilter);


/**
 */
function KalturaLikeFilter(){
}
KalturaLikeFilter.inheritsFrom (KalturaLikeBaseFilter);


/**
 * @param	attribute	string		.
 */
function KalturaLiveChannelCompareAttributeCondition(){
	this.attribute = null;
}
KalturaLiveChannelCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaLiveChannelMatchAttributeCondition(){
	this.attribute = null;
}
KalturaLiveChannelMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaLiveChannelSegmentFilter(){
}
KalturaLiveChannelSegmentFilter.inheritsFrom (KalturaLiveChannelSegmentBaseFilter);


/**
 */
function KalturaLiveClusterMediaServerNode(){
}
KalturaLiveClusterMediaServerNode.inheritsFrom (KalturaMediaServerNode);


/**
 * @param	attribute	string		.
 */
function KalturaLiveEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaLiveEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaLiveEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaLiveEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaLiveEntryServerNodeBaseFilter(){
}
KalturaLiveEntryServerNodeBaseFilter.inheritsFrom (KalturaEntryServerNodeFilter);


/**
 * @param	redirectEntryId	string		The vod entry to redirect.
 */
function KalturaLiveRedirectScheduleEvent(){
	this.redirectEntryId = null;
}
KalturaLiveRedirectScheduleEvent.inheritsFrom (KalturaBaseLiveScheduleEvent);


/**
 * @param	attribute	string		.
 */
function KalturaLiveStreamAdminEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaLiveStreamAdminEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaLiveStreamAdminEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaLiveStreamAdminEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaLiveStreamEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaLiveStreamEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaLiveStreamEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaLiveStreamEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 * @param	sourceEntryId	string		The entry ID of the source entry (for simulive).
 * @param	projectedAudience	int		Defines the expected audience..
 * @param	preStartTime	int		The time relative time before the startTime considered as preStart time.
 * @param	postEndTime	int		The time relative time before the endTime considered as postEnd time.
 * @param	preStartEntryId	string		The entry id of the pre start entry.
 * @param	postEndEntryId	string		The entry id of the post end entry.
 * @param	isContentInterruptible	bool		Detect whether "real" live can interrupt to the "main" content.
 * @param	liveFeatures	array		list of live features that apply to the event.
 */
function KalturaLiveStreamScheduleEvent(){
	this.sourceEntryId = null;
	this.projectedAudience = null;
	this.preStartTime = null;
	this.postEndTime = null;
	this.preStartEntryId = null;
	this.postEndEntryId = null;
	this.isContentInterruptible = null;
	this.liveFeatures = null;
}
KalturaLiveStreamScheduleEvent.inheritsFrom (KalturaBaseLiveScheduleEvent);


/**
 * @param	attribute	string		.
 */
function KalturaMediaEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaMediaEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaMediaEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaMediaEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaMediaFlavorParamsOutput(){
}
KalturaMediaFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 * @param	xPath	string		May contain the full xpath to the field in three formats
 *		 1. Slashed xPath, e.g. /metadata/myElementName
 *		 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 *		 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param	profileId	int		Metadata profile id.
 * @param	profileSystemName	string		Metadata profile system name.
 */
function KalturaMetadataField(){
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
}
KalturaMetadataField.inheritsFrom (KalturaStringField);


/**
 */
function KalturaMetadataFilter(){
}
KalturaMetadataFilter.inheritsFrom (KalturaMetadataBaseFilter);


/**
 */
function KalturaMetroPcsDistributionProviderBaseFilter(){
}
KalturaMetroPcsDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	attribute	string		.
 */
function KalturaMixEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaMixEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaMixEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaMixEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaMsnDistributionProviderBaseFilter(){
}
KalturaMsnDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaNdnDistributionProviderBaseFilter(){
}
KalturaNdnDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaObjectIdField(){
}
KalturaObjectIdField.inheritsFrom (KalturaStringField);


/**
 * @param	readonly	bool		.
 */
function KalturaPdfFlavorParamsOutput(){
	this.readonly = null;
}
KalturaPdfFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaPermissionFilter(){
}
KalturaPermissionFilter.inheritsFrom (KalturaPermissionBaseFilter);


/**
 */
function KalturaPermissionItemFilter(){
}
KalturaPermissionItemFilter.inheritsFrom (KalturaPermissionItemBaseFilter);


/**
 */
function KalturaPlayReadyPolicyBaseFilter(){
}
KalturaPlayReadyPolicyBaseFilter.inheritsFrom (KalturaDrmPolicyFilter);


/**
 */
function KalturaPlayReadyProfileBaseFilter(){
}
KalturaPlayReadyProfileBaseFilter.inheritsFrom (KalturaDrmProfileFilter);


/**
 * @param	attribute	string		.
 */
function KalturaPlayableEntryCompareAttributeCondition(){
	this.attribute = null;
}
KalturaPlayableEntryCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaPlayableEntryMatchAttributeCondition(){
	this.attribute = null;
}
KalturaPlayableEntryMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaPlaylistCompareAttributeCondition(){
	this.attribute = null;
}
KalturaPlaylistCompareAttributeCondition.inheritsFrom (KalturaSearchComparableAttributeCondition);


/**
 * @param	attribute	string		.
 */
function KalturaPlaylistMatchAttributeCondition(){
	this.attribute = null;
}
KalturaPlaylistMatchAttributeCondition.inheritsFrom (KalturaSearchMatchAttributeCondition);


/**
 */
function KalturaPodcastDistributionProfileBaseFilter(){
}
KalturaPodcastDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaPodcastDistributionProviderBaseFilter(){
}
KalturaPodcastDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaPushNotificationTemplateBaseFilter(){
}
KalturaPushNotificationTemplateBaseFilter.inheritsFrom (KalturaEventNotificationTemplateFilter);


/**
 */
function KalturaQuickPlayDistributionProviderBaseFilter(){
}
KalturaQuickPlayDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaRatingCountFilter(){
}
KalturaRatingCountFilter.inheritsFrom (KalturaRatingCountBaseFilter);


/**
 */
function KalturaReachProfileFilter(){
}
KalturaReachProfileFilter.inheritsFrom (KalturaReachProfileBaseFilter);


/**
 */
function KalturaRemoteDropFolderBaseFilter(){
}
KalturaRemoteDropFolderBaseFilter.inheritsFrom (KalturaDropFolderFilter);


/**
 * @param	frequency	string		.
 */
function KalturaReoccurringVendorCredit(){
	this.frequency = null;
}
KalturaReoccurringVendorCredit.inheritsFrom (KalturaTimeRangeVendorCredit);


/**
 * @param	resourceIdsLike	string		.
 * @param	resourceIdsMultiLikeOr	string		.
 * @param	resourceIdsMultiLikeAnd	string		.
 * @param	parentResourceIdsLike	string		.
 * @param	parentResourceIdsMultiLikeOr	string		.
 * @param	parentResourceIdsMultiLikeAnd	string		.
 * @param	templateEntryCategoriesIdsMultiLikeAnd	string		.
 * @param	templateEntryCategoriesIdsMultiLikeOr	string		.
 * @param	resourceSystemNamesMultiLikeOr	string		.
 * @param	templateEntryCategoriesIdsLike	string		.
 * @param	resourceSystemNamesMultiLikeAnd	string		.
 * @param	resourceSystemNamesLike	string		.
 * @param	resourceIdEqual	string		.
 */
function KalturaScheduleEventFilter(){
	this.resourceIdsLike = null;
	this.resourceIdsMultiLikeOr = null;
	this.resourceIdsMultiLikeAnd = null;
	this.parentResourceIdsLike = null;
	this.parentResourceIdsMultiLikeOr = null;
	this.parentResourceIdsMultiLikeAnd = null;
	this.templateEntryCategoriesIdsMultiLikeAnd = null;
	this.templateEntryCategoriesIdsMultiLikeOr = null;
	this.resourceSystemNamesMultiLikeOr = null;
	this.templateEntryCategoriesIdsLike = null;
	this.resourceSystemNamesMultiLikeAnd = null;
	this.resourceSystemNamesLike = null;
	this.resourceIdEqual = null;
}
KalturaScheduleEventFilter.inheritsFrom (KalturaScheduleEventBaseFilter);


/**
 * @param	eventIdOrItsParentIdEqual	int		Find event-resource objects that associated with the event, if none found, find by its parent event.
 */
function KalturaScheduleEventResourceFilter(){
	this.eventIdOrItsParentIdEqual = null;
}
KalturaScheduleEventResourceFilter.inheritsFrom (KalturaScheduleEventResourceBaseFilter);


/**
 */
function KalturaScheduleResourceFilter(){
}
KalturaScheduleResourceFilter.inheritsFrom (KalturaScheduleResourceBaseFilter);


/**
 */
function KalturaScpDropFolder(){
}
KalturaScpDropFolder.inheritsFrom (KalturaSshDropFolder);


/**
 */
function KalturaSftpDropFolder(){
}
KalturaSftpDropFolder.inheritsFrom (KalturaSshDropFolder);


/**
 */
function KalturaSipEntryServerNodeBaseFilter(){
}
KalturaSipEntryServerNodeBaseFilter.inheritsFrom (KalturaEntryServerNodeFilter);


/**
 */
function KalturaSipServerNodeBaseFilter(){
}
KalturaSipServerNodeBaseFilter.inheritsFrom (KalturaServerNodeFilter);


/**
 * @param	privateKey	string		SSH private key.
 * @param	publicKey	string		SSH public key.
 * @param	keyPassphrase	string		Passphrase for SSH keys.
 */
function KalturaSshUrlResource(){
	this.privateKey = null;
	this.publicKey = null;
	this.keyPassphrase = null;
}
KalturaSshUrlResource.inheritsFrom (KalturaUrlResource);


/**
 */
function KalturaSsoFilter(){
}
KalturaSsoFilter.inheritsFrom (KalturaSsoBaseFilter);


/**
 * @param	flashVersion	int		.
 * @param	poly2Bitmap	bool		.
 */
function KalturaSwfFlavorParamsOutput(){
	this.flashVersion = null;
	this.poly2Bitmap = null;
}
KalturaSwfFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaSynacorHboDistributionProviderBaseFilter(){
}
KalturaSynacorHboDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaSyndicationDistributionProfileBaseFilter(){
}
KalturaSyndicationDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProviderBaseFilter(){
}
KalturaSyndicationDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	partnerParentIdEqual	int		.
 * @param	partnerParentIdIn	string		.
 * @param	adminEmailEqual	string		.
 */
function KalturaSystemPartnerFilter(){
	this.partnerParentIdEqual = null;
	this.partnerParentIdIn = null;
	this.adminEmailEqual = null;
}
KalturaSystemPartnerFilter.inheritsFrom (KalturaPartnerFilter);


/**
 */
function KalturaTVComDistributionProviderBaseFilter(){
}
KalturaTVComDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	offset	int		Time offset in seconds since current time.
 */
function KalturaTimeContextField(){
	this.offset = null;
}
KalturaTimeContextField.inheritsFrom (KalturaIntegerField);


/**
 */
function KalturaTimeWarnerDistributionProviderBaseFilter(){
}
KalturaTimeWarnerDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedBaseFilter(){
}
KalturaTubeMogulSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaTvinciDistributionProviderBaseFilter(){
}
KalturaTvinciDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaUnicornDistributionProviderBaseFilter(){
}
KalturaUnicornDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaUserAgentCondition(){
}
KalturaUserAgentCondition.inheritsFrom (KalturaRegexCondition);


/**
 */
function KalturaUserAgentContextField(){
}
KalturaUserAgentContextField.inheritsFrom (KalturaStringField);


/**
 * @param	userIdEqual	string		The User Id to search for.
 * @param	userIdIn	string		Users Ids csv list.
 * @param	userStatusEqual	int		User Status.
 * @param	userStatusIn	string		User Status csv list (0 = Blocked | 1 = Active).
 */
function KalturaUserAppRoleFilter(){
	this.userIdEqual = null;
	this.userIdIn = null;
	this.userStatusEqual = null;
	this.userStatusIn = null;
}
KalturaUserAppRoleFilter.inheritsFrom (KalturaUserAppRoleBaseFilter);


/**
 */
function KalturaUserEmailContextField(){
}
KalturaUserEmailContextField.inheritsFrom (KalturaStringField);


/**
 * @param	userIdEqualCurrent	int		.
 * @param	isAnonymous	int		.
 * @param	privacyContextEqual	string		.
 * @param	privacyContextIn	string		.
 * @param	partnerId	int		.
 */
function KalturaUserEntryFilter(){
	this.userIdEqualCurrent = null;
	this.isAnonymous = null;
	this.privacyContextEqual = null;
	this.privacyContextIn = null;
	this.partnerId = null;
}
KalturaUserEntryFilter.inheritsFrom (KalturaUserEntryBaseFilter);


/**
 */
function KalturaUserLoginDataFilter(){
}
KalturaUserLoginDataFilter.inheritsFrom (KalturaUserLoginDataBaseFilter);


/**
 */
function KalturaUserRoleFilter(){
}
KalturaUserRoleFilter.inheritsFrom (KalturaUserRoleBaseFilter);


/**
 * @param	gameObjectId	string		.
 * @param	gameObjectType	string		.
 * @param	userIdEqual	string		.
 * @param	placesAboveUser	int		.
 * @param	placesBelowUser	int		.
 */
function KalturaUserScorePropertiesFilter(){
	this.gameObjectId = null;
	this.gameObjectType = null;
	this.userIdEqual = null;
	this.placesAboveUser = null;
	this.placesBelowUser = null;
}
KalturaUserScorePropertiesFilter.inheritsFrom (KalturaUserScorePropertiesBaseFilter);


/**
 * @param	filter	KalturaUserFilter		The filter should return the list of users that need to be specified in the csv..
 */
function KalturaUsersCsvJobData(){
	this.filter = null;
}
KalturaUsersCsvJobData.inheritsFrom (KalturaMappedObjectsCsvJobData);


/**
 */
function KalturaUverseClickToOrderDistributionProviderBaseFilter(){
}
KalturaUverseClickToOrderDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaUverseDistributionProviderBaseFilter(){
}
KalturaUverseDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	partnerIdEqual	int		.
 * @param	catalogItemIdEqual	int		.
 */
function KalturaVendorCatalogItemFilter(){
	this.partnerIdEqual = null;
	this.catalogItemIdEqual = null;
}
KalturaVendorCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemBaseFilter);


/**
 * @param	startTimeBuffer	int		How long before the live stream start should service activate? (in secs) (insertOnly).
 * @param	endTimeBuffer	int		How long after the live stream end should service de-activate? (in secs) (insertOnly).
 */
function KalturaVendorLiveCaptionCatalogItem(){
	this.startTimeBuffer = null;
	this.endTimeBuffer = null;
}
KalturaVendorLiveCaptionCatalogItem.inheritsFrom (KalturaVendorLiveCatalogItem);


/**
 * @param	targetLanguage	string		.
 */
function KalturaVendorLiveTranslationCatalogItem(){
	this.targetLanguage = null;
}
KalturaVendorLiveTranslationCatalogItem.inheritsFrom (KalturaVendorLiveCatalogItem);


/**
 */
function KalturaVerizonVcastDistributionProviderBaseFilter(){
}
KalturaVerizonVcastDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 * @param	token	string		Token that returned from media server such as FMS or red5..
 */
function KalturaWebcamTokenResource(){
	this.token = null;
}
KalturaWebcamTokenResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 */
function KalturaWebexDropFolderBaseFilter(){
}
KalturaWebexDropFolderBaseFilter.inheritsFrom (KalturaDropFolderFilter);


/**
 */
function KalturaWebexDropFolderFileBaseFilter(){
}
KalturaWebexDropFolderFileBaseFilter.inheritsFrom (KalturaDropFolderFileFilter);


/**
 * @param	widevineDistributionStartDate	int		License distribution window start date.
 * @param	widevineDistributionEndDate	int		License distribution window end date.
 */
function KalturaWidevineFlavorParamsOutput(){
	this.widevineDistributionStartDate = null;
	this.widevineDistributionEndDate = null;
}
KalturaWidevineFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaWidevineProfileBaseFilter(){
}
KalturaWidevineProfileBaseFilter.inheritsFrom (KalturaDrmProfileFilter);


/**
 * @param	appPrefix	string		Wowza Media server app prefix.
 * @param	transcoder	string		Wowza Media server transcoder configuration overide.
 * @param	GPUID	int		Wowza Media server GPU index id.
 * @param	liveServicePort	int		Live service port.
 * @param	liveServiceProtocol	string		Live service protocol.
 * @param	liveServiceInternalDomain	string		Wowza media server live service internal domain.
 */
function KalturaWowzaMediaServerNode(){
	this.appPrefix = null;
	this.transcoder = null;
	this.GPUID = null;
	this.liveServicePort = null;
	this.liveServiceProtocol = null;
	this.liveServiceInternalDomain = null;
}
KalturaWowzaMediaServerNode.inheritsFrom (KalturaMediaServerNode);


/**
 */
function KalturaYahooDistributionProviderBaseFilter(){
}
KalturaYahooDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaYahooSyndicationFeedBaseFilter(){
}
KalturaYahooSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaYouTubeDistributionProviderBaseFilter(){
}
KalturaYouTubeDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderBaseFilter(){
}
KalturaYoutubeApiDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaZoomDropFolderBaseFilter(){
}
KalturaZoomDropFolderBaseFilter.inheritsFrom (KalturaDropFolderFilter);


/**
 */
function KalturaActivitiBusinessProcessServerFilter(){
}
KalturaActivitiBusinessProcessServerFilter.inheritsFrom (KalturaActivitiBusinessProcessServerBaseFilter);


/**
 * @param	protocolTypeEqual	string		.
 * @param	protocolTypeIn	string		.
 * @param	titleLike	string		.
 * @param	titleMultiLikeOr	string		.
 * @param	titleMultiLikeAnd	string		.
 * @param	endTimeGreaterThanOrEqual	int		.
 * @param	endTimeLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	durationLessThanOrEqual	int		.
 */
function KalturaAdCuePointBaseFilter(){
	this.protocolTypeEqual = null;
	this.protocolTypeIn = null;
	this.titleLike = null;
	this.titleMultiLikeOr = null;
	this.titleMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
}
KalturaAdCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaAmazonS3StorageProfileFilter(){
}
KalturaAmazonS3StorageProfileFilter.inheritsFrom (KalturaAmazonS3StorageProfileBaseFilter);


/**
 * @param	parentIdEqual	string		.
 * @param	parentIdIn	string		.
 * @param	textLike	string		.
 * @param	textMultiLikeOr	string		.
 * @param	textMultiLikeAnd	string		.
 * @param	endTimeGreaterThanOrEqual	int		.
 * @param	endTimeLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	durationLessThanOrEqual	int		.
 * @param	isPublicEqual	int		.
 */
function KalturaAnnotationBaseFilter(){
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.textLike = null;
	this.textMultiLikeOr = null;
	this.textMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
	this.isPublicEqual = null;
}
KalturaAnnotationBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 * @param	parentIdEqual	string		.
 * @param	parentIdIn	string		.
 * @param	quizUserEntryIdEqual	string		.
 * @param	quizUserEntryIdIn	string		.
 */
function KalturaAnswerCuePointBaseFilter(){
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.quizUserEntryIdEqual = null;
	this.quizUserEntryIdIn = null;
}
KalturaAnswerCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaApiActionPermissionItemBaseFilter(){
}
KalturaApiActionPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaApiParameterPermissionItemBaseFilter(){
}
KalturaApiParameterPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaAssetParamsOutputBaseFilter(){
}
KalturaAssetParamsOutputBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaAttUverseDistributionProviderFilter(){
}
KalturaAttUverseDistributionProviderFilter.inheritsFrom (KalturaAttUverseDistributionProviderBaseFilter);


/**
 * @param	formatEqual	string		.
 * @param	formatIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 */
function KalturaAttachmentAssetBaseFilter(){
	this.formatEqual = null;
	this.formatIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
KalturaAttachmentAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 */
function KalturaAvnDistributionProviderFilter(){
}
KalturaAvnDistributionProviderFilter.inheritsFrom (KalturaAvnDistributionProviderBaseFilter);


/**
 */
function KalturaBusinessProcessNotificationTemplateFilter(){
}
KalturaBusinessProcessNotificationTemplateFilter.inheritsFrom (KalturaBusinessProcessNotificationTemplateBaseFilter);


/**
 */
function KalturaCameraScheduleResourceBaseFilter(){
}
KalturaCameraScheduleResourceBaseFilter.inheritsFrom (KalturaScheduleResourceFilter);


/**
 * @param	captionParamsIdEqual	int		.
 * @param	captionParamsIdIn	string		.
 * @param	formatEqual	string		.
 * @param	formatIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 */
function KalturaCaptionAssetBaseFilter(){
	this.captionParamsIdEqual = null;
	this.captionParamsIdIn = null;
	this.formatEqual = null;
	this.formatIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
KalturaCaptionAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 * @param	formatEqual	string		.
 * @param	formatIn	string		.
 */
function KalturaCaptionParamsBaseFilter(){
	this.formatEqual = null;
	this.formatIn = null;
}
KalturaCaptionParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 * @param	codeLike	string		.
 * @param	codeMultiLikeOr	string		.
 * @param	codeMultiLikeAnd	string		.
 * @param	codeEqual	string		.
 * @param	codeIn	string		.
 * @param	descriptionLike	string		.
 * @param	descriptionMultiLikeOr	string		.
 * @param	descriptionMultiLikeAnd	string		.
 * @param	endTimeGreaterThanOrEqual	int		.
 * @param	endTimeLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	durationLessThanOrEqual	int		.
 */
function KalturaCodeCuePointBaseFilter(){
	this.codeLike = null;
	this.codeMultiLikeOr = null;
	this.codeMultiLikeAnd = null;
	this.codeEqual = null;
	this.codeIn = null;
	this.descriptionLike = null;
	this.descriptionMultiLikeOr = null;
	this.descriptionMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
}
KalturaCodeCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaComcastMrssDistributionProviderFilter(){
}
KalturaComcastMrssDistributionProviderFilter.inheritsFrom (KalturaComcastMrssDistributionProviderBaseFilter);


/**
 */
function KalturaConferenceEntryServerNodeFilter(){
}
KalturaConferenceEntryServerNodeFilter.inheritsFrom (KalturaConferenceEntryServerNodeBaseFilter);


/**
 */
function KalturaConferenceServerNodeFilter(){
}
KalturaConferenceServerNodeFilter.inheritsFrom (KalturaConferenceServerNodeBaseFilter);


/**
 */
function KalturaConfigurableDistributionProfileFilter(){
}
KalturaConfigurableDistributionProfileFilter.inheritsFrom (KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
function KalturaCortexApiDistributionProviderFilter(){
}
KalturaCortexApiDistributionProviderFilter.inheritsFrom (KalturaCortexApiDistributionProviderBaseFilter);


/**
 */
function KalturaCrossKalturaDistributionProviderFilter(){
}
KalturaCrossKalturaDistributionProviderFilter.inheritsFrom (KalturaCrossKalturaDistributionProviderBaseFilter);


/**
 */
function KalturaDailymotionDistributionProviderFilter(){
}
KalturaDailymotionDistributionProviderFilter.inheritsFrom (KalturaDailymotionDistributionProviderBaseFilter);


/**
 */
function KalturaDataEntryBaseFilter(){
}
KalturaDataEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDeliveryProfileAkamaiAppleHttpManifestFilter(){
}
KalturaDeliveryProfileAkamaiAppleHttpManifestFilter.inheritsFrom (KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter);


/**
 */
function KalturaDeliveryProfileAkamaiHdsFilter(){
}
KalturaDeliveryProfileAkamaiHdsFilter.inheritsFrom (KalturaDeliveryProfileAkamaiHdsBaseFilter);


/**
 */
function KalturaDeliveryProfileAkamaiHttpFilter(){
}
KalturaDeliveryProfileAkamaiHttpFilter.inheritsFrom (KalturaDeliveryProfileAkamaiHttpBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericAppleHttpFilter(){
}
KalturaDeliveryProfileGenericAppleHttpFilter.inheritsFrom (KalturaDeliveryProfileGenericAppleHttpBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericHdsFilter(){
}
KalturaDeliveryProfileGenericHdsFilter.inheritsFrom (KalturaDeliveryProfileGenericHdsBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericHttpFilter(){
}
KalturaDeliveryProfileGenericHttpFilter.inheritsFrom (KalturaDeliveryProfileGenericHttpBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericSilverLightFilter(){
}
KalturaDeliveryProfileGenericSilverLightFilter.inheritsFrom (KalturaDeliveryProfileGenericSilverLightBaseFilter);


/**
 */
function KalturaDeliveryProfileLiveAppleHttpFilter(){
}
KalturaDeliveryProfileLiveAppleHttpFilter.inheritsFrom (KalturaDeliveryProfileLiveAppleHttpBaseFilter);


/**
 */
function KalturaDeliveryProfileRtmpFilter(){
}
KalturaDeliveryProfileRtmpFilter.inheritsFrom (KalturaDeliveryProfileRtmpBaseFilter);


/**
 */
function KalturaDeliveryServerNodeFilter(){
}
KalturaDeliveryServerNodeFilter.inheritsFrom (KalturaDeliveryServerNodeBaseFilter);


/**
 * @param	documentTypeEqual	int		.
 * @param	documentTypeIn	string		.
 * @param	assetParamsIdsMatchOr	string		.
 * @param	assetParamsIdsMatchAnd	string		.
 */
function KalturaDocumentEntryBaseFilter(){
	this.documentTypeEqual = null;
	this.documentTypeIn = null;
	this.assetParamsIdsMatchOr = null;
	this.assetParamsIdsMatchAnd = null;
}
KalturaDocumentEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDoubleClickDistributionProviderFilter(){
}
KalturaDoubleClickDistributionProviderFilter.inheritsFrom (KalturaDoubleClickDistributionProviderBaseFilter);


/**
 * @param	dropFolderFileId	int		Id of the drop folder file object.
 */
function KalturaDropFolderFileResource(){
	this.dropFolderFileId = null;
}
KalturaDropFolderFileResource.inheritsFrom (KalturaGenericDataCenterContentResource);


/**
 * @param	searchTerm	string		.
 * @param	itemType	int		.
 * @param	range	KalturaESearchRange		.
 * @param	addHighlight	bool		.
 */
function KalturaESearchEntryAbstractNestedItem(){
	this.searchTerm = null;
	this.itemType = null;
	this.range = null;
	this.addHighlight = null;
}
KalturaESearchEntryAbstractNestedItem.inheritsFrom (KalturaESearchEntryNestedBaseItem);


/**
 * @param	operator	int		.
 * @param	searchItems	array		.
 */
function KalturaESearchNestedOperator(){
	this.operator = null;
	this.searchItems = null;
}
KalturaESearchNestedOperator.inheritsFrom (KalturaESearchEntryNestedBaseItem);


/**
 */
function KalturaEmailNotificationTemplateFilter(){
}
KalturaEmailNotificationTemplateFilter.inheritsFrom (KalturaEmailNotificationTemplateBaseFilter);


/**
 * @param	templateEntryIdEqual	string		.
 * @param	entryIdsLike	string		.
 * @param	entryIdsMultiLikeOr	string		.
 * @param	entryIdsMultiLikeAnd	string		.
 * @param	categoryIdsLike	string		.
 * @param	categoryIdsMultiLikeOr	string		.
 * @param	categoryIdsMultiLikeAnd	string		.
 */
function KalturaEntryScheduleEventBaseFilter(){
	this.templateEntryIdEqual = null;
	this.entryIdsLike = null;
	this.entryIdsMultiLikeOr = null;
	this.entryIdsMultiLikeAnd = null;
	this.categoryIdsLike = null;
	this.categoryIdsMultiLikeOr = null;
	this.categoryIdsMultiLikeAnd = null;
}
KalturaEntryScheduleEventBaseFilter.inheritsFrom (KalturaScheduleEventFilter);


/**
 * @param	eventTypeEqual	string		.
 * @param	eventTypeIn	string		.
 */
function KalturaEventCuePointBaseFilter(){
	this.eventTypeEqual = null;
	this.eventTypeIn = null;
}
KalturaEventCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaFacebookDistributionProviderFilter(){
}
KalturaFacebookDistributionProviderFilter.inheritsFrom (KalturaFacebookDistributionProviderBaseFilter);


/**
 * @param	flavorParamsIdEqual	int		.
 * @param	flavorParamsIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 */
function KalturaFlavorAssetBaseFilter(){
	this.flavorParamsIdEqual = null;
	this.flavorParamsIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
KalturaFlavorAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 * @param	formatEqual	string		.
 */
function KalturaFlavorParamsBaseFilter(){
	this.formatEqual = null;
}
KalturaFlavorParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaFreewheelDistributionProfileFilter(){
}
KalturaFreewheelDistributionProfileFilter.inheritsFrom (KalturaFreewheelDistributionProfileBaseFilter);


/**
 */
function KalturaFreewheelDistributionProviderFilter(){
}
KalturaFreewheelDistributionProviderFilter.inheritsFrom (KalturaFreewheelDistributionProviderBaseFilter);


/**
 */
function KalturaFreewheelGenericDistributionProviderFilter(){
}
KalturaFreewheelGenericDistributionProviderFilter.inheritsFrom (KalturaFreewheelGenericDistributionProviderBaseFilter);


/**
 */
function KalturaFtpDistributionProviderFilter(){
}
KalturaFtpDistributionProviderFilter.inheritsFrom (KalturaFtpDistributionProviderBaseFilter);


/**
 */
function KalturaGenericDistributionProfileFilter(){
}
KalturaGenericDistributionProfileFilter.inheritsFrom (KalturaGenericDistributionProfileBaseFilter);


/**
 */
function KalturaGenericDistributionProviderFilter(){
}
KalturaGenericDistributionProviderFilter.inheritsFrom (KalturaGenericDistributionProviderBaseFilter);


/**
 */
function KalturaGenericSyndicationFeedFilter(){
}
KalturaGenericSyndicationFeedFilter.inheritsFrom (KalturaGenericSyndicationFeedBaseFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedFilter(){
}
KalturaGoogleVideoSyndicationFeedFilter.inheritsFrom (KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function KalturaHttpNotificationTemplateFilter(){
}
KalturaHttpNotificationTemplateFilter.inheritsFrom (KalturaHttpNotificationTemplateBaseFilter);


/**
 */
function KalturaHuluDistributionProviderFilter(){
}
KalturaHuluDistributionProviderFilter.inheritsFrom (KalturaHuluDistributionProviderBaseFilter);


/**
 */
function KalturaITunesSyndicationFeedFilter(){
}
KalturaITunesSyndicationFeedFilter.inheritsFrom (KalturaITunesSyndicationFeedBaseFilter);


/**
 */
function KalturaIdeticDistributionProviderFilter(){
}
KalturaIdeticDistributionProviderFilter.inheritsFrom (KalturaIdeticDistributionProviderBaseFilter);


/**
 */
function KalturaKafkaNotificationTemplateFilter(){
}
KalturaKafkaNotificationTemplateFilter.inheritsFrom (KalturaKafkaNotificationTemplateBaseFilter);


/**
 */
function KalturaKontikiStorageProfileFilter(){
}
KalturaKontikiStorageProfileFilter.inheritsFrom (KalturaKontikiStorageProfileBaseFilter);


/**
 */
function KalturaLiveEntryScheduleResourceBaseFilter(){
}
KalturaLiveEntryScheduleResourceBaseFilter.inheritsFrom (KalturaScheduleResourceFilter);


/**
 */
function KalturaLiveEntryServerNodeFilter(){
}
KalturaLiveEntryServerNodeFilter.inheritsFrom (KalturaLiveEntryServerNodeBaseFilter);


/**
 */
function KalturaLocationScheduleResourceBaseFilter(){
}
KalturaLocationScheduleResourceBaseFilter.inheritsFrom (KalturaScheduleResourceFilter);


/**
 */
function KalturaMetroPcsDistributionProviderFilter(){
}
KalturaMetroPcsDistributionProviderFilter.inheritsFrom (KalturaMetroPcsDistributionProviderBaseFilter);


/**
 */
function KalturaMsnDistributionProviderFilter(){
}
KalturaMsnDistributionProviderFilter.inheritsFrom (KalturaMsnDistributionProviderBaseFilter);


/**
 */
function KalturaNdnDistributionProviderFilter(){
}
KalturaNdnDistributionProviderFilter.inheritsFrom (KalturaNdnDistributionProviderBaseFilter);


/**
 */
function KalturaOperaSyndicationFeed(){
}
KalturaOperaSyndicationFeed.inheritsFrom (KalturaConstantXsltSyndicationFeed);


/**
 * @param	permissionLevels	array		.
 */
function KalturaPermissionLevelUserEntryFilter(){
	this.permissionLevels = null;
}
KalturaPermissionLevelUserEntryFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 */
function KalturaPlayReadyPolicyFilter(){
}
KalturaPlayReadyPolicyFilter.inheritsFrom (KalturaPlayReadyPolicyBaseFilter);


/**
 */
function KalturaPlayReadyProfileFilter(){
}
KalturaPlayReadyProfileFilter.inheritsFrom (KalturaPlayReadyProfileBaseFilter);


/**
 */
function KalturaPlaylistBaseFilter(){
}
KalturaPlaylistBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPodcastDistributionProfileFilter(){
}
KalturaPodcastDistributionProfileFilter.inheritsFrom (KalturaPodcastDistributionProfileBaseFilter);


/**
 */
function KalturaPodcastDistributionProviderFilter(){
}
KalturaPodcastDistributionProviderFilter.inheritsFrom (KalturaPodcastDistributionProviderBaseFilter);


/**
 */
function KalturaPushNotificationTemplateFilter(){
}
KalturaPushNotificationTemplateFilter.inheritsFrom (KalturaPushNotificationTemplateBaseFilter);


/**
 * @param	questionLike	string		.
 * @param	questionMultiLikeOr	string		.
 * @param	questionMultiLikeAnd	string		.
 */
function KalturaQuestionCuePointBaseFilter(){
	this.questionLike = null;
	this.questionMultiLikeOr = null;
	this.questionMultiLikeAnd = null;
}
KalturaQuestionCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaQuickPlayDistributionProviderFilter(){
}
KalturaQuickPlayDistributionProviderFilter.inheritsFrom (KalturaQuickPlayDistributionProviderBaseFilter);


/**
 */
function KalturaQuizUserEntryBaseFilter(){
}
KalturaQuizUserEntryBaseFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 */
function KalturaRegistrationUserEntryFilter(){
}
KalturaRegistrationUserEntryFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 */
function KalturaRemoteDropFolderFilter(){
}
KalturaRemoteDropFolderFilter.inheritsFrom (KalturaRemoteDropFolderBaseFilter);


/**
 */
function KalturaRokuSyndicationFeed(){
}
KalturaRokuSyndicationFeed.inheritsFrom (KalturaConstantXsltSyndicationFeed);


/**
 * @param	roomTypeEqual	int		.
 */
function KalturaRoomEntryBaseFilter(){
	this.roomTypeEqual = null;
}
KalturaRoomEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaRsvpUserEntryBaseFilter(){
}
KalturaRsvpUserEntryBaseFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 * @param	localFilePath	string		Full path to the local file.
 * @param	keepOriginalFile	bool		Should keep original file (false = mv, true = cp).
 */
function KalturaServerFileResource(){
	this.localFilePath = null;
	this.keepOriginalFile = null;
}
KalturaServerFileResource.inheritsFrom (KalturaGenericDataCenterContentResource);


/**
 * @param	endTimeGreaterThanOrEqual	int		.
 * @param	endTimeLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	durationLessThanOrEqual	int		.
 */
function KalturaSessionCuePointBaseFilter(){
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
}
KalturaSessionCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 */
function KalturaSipEntryServerNodeFilter(){
}
KalturaSipEntryServerNodeFilter.inheritsFrom (KalturaSipEntryServerNodeBaseFilter);


/**
 */
function KalturaSipServerNodeFilter(){
}
KalturaSipServerNodeFilter.inheritsFrom (KalturaSipServerNodeBaseFilter);


/**
 */
function KalturaSynacorHboDistributionProviderFilter(){
}
KalturaSynacorHboDistributionProviderFilter.inheritsFrom (KalturaSynacorHboDistributionProviderBaseFilter);


/**
 */
function KalturaSyndicationDistributionProfileFilter(){
}
KalturaSyndicationDistributionProfileFilter.inheritsFrom (KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
function KalturaTVComDistributionProviderFilter(){
}
KalturaTVComDistributionProviderFilter.inheritsFrom (KalturaTVComDistributionProviderBaseFilter);


/**
 * @param	thumbParamsIdEqual	int		.
 * @param	thumbParamsIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 */
function KalturaThumbAssetBaseFilter(){
	this.thumbParamsIdEqual = null;
	this.thumbParamsIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
KalturaThumbAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 * @param	descriptionLike	string		.
 * @param	descriptionMultiLikeOr	string		.
 * @param	descriptionMultiLikeAnd	string		.
 * @param	titleLike	string		.
 * @param	titleMultiLikeOr	string		.
 * @param	titleMultiLikeAnd	string		.
 * @param	subTypeEqual	int		.
 * @param	subTypeIn	string		.
 */
function KalturaThumbCuePointBaseFilter(){
	this.descriptionLike = null;
	this.descriptionMultiLikeOr = null;
	this.descriptionMultiLikeAnd = null;
	this.titleLike = null;
	this.titleMultiLikeOr = null;
	this.titleMultiLikeAnd = null;
	this.subTypeEqual = null;
	this.subTypeIn = null;
}
KalturaThumbCuePointBaseFilter.inheritsFrom (KalturaCuePointFilter);


/**
 * @param	formatEqual	string		.
 */
function KalturaThumbParamsBaseFilter(){
	this.formatEqual = null;
}
KalturaThumbParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaTimeWarnerDistributionProviderFilter(){
}
KalturaTimeWarnerDistributionProviderFilter.inheritsFrom (KalturaTimeWarnerDistributionProviderBaseFilter);


/**
 * @param	syncMetadataProfile	int		.
 * @param	targetMetadataProfile	int		.
 */
function KalturaTrRdsDropFolder(){
	this.syncMetadataProfile = null;
	this.targetMetadataProfile = null;
}
KalturaTrRdsDropFolder.inheritsFrom (KalturaSftpDropFolder);


/**
 */
function KalturaTubeMogulSyndicationFeedFilter(){
}
KalturaTubeMogulSyndicationFeedFilter.inheritsFrom (KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
function KalturaTvinciDistributionProviderFilter(){
}
KalturaTvinciDistributionProviderFilter.inheritsFrom (KalturaTvinciDistributionProviderBaseFilter);


/**
 */
function KalturaUnicornDistributionProviderFilter(){
}
KalturaUnicornDistributionProviderFilter.inheritsFrom (KalturaUnicornDistributionProviderBaseFilter);


/**
 * @param	token	string		Token that returned from upload.upload action or uploadToken.add action..
 */
function KalturaUploadedFileTokenResource(){
	this.token = null;
}
KalturaUploadedFileTokenResource.inheritsFrom (KalturaGenericDataCenterContentResource);


/**
 */
function KalturaUverseClickToOrderDistributionProviderFilter(){
}
KalturaUverseClickToOrderDistributionProviderFilter.inheritsFrom (KalturaUverseClickToOrderDistributionProviderBaseFilter);


/**
 */
function KalturaUverseDistributionProviderFilter(){
}
KalturaUverseDistributionProviderFilter.inheritsFrom (KalturaUverseDistributionProviderBaseFilter);


/**
 * @param	sourceLanguageEqual	string		.
 * @param	sourceLanguageIn	string		.
 * @param	outputFormatEqual	int		.
 * @param	outputFormatIn	string		.
 */
function KalturaVendorCaptionsCatalogItemBaseFilter(){
	this.sourceLanguageEqual = null;
	this.sourceLanguageIn = null;
	this.outputFormatEqual = null;
	this.outputFormatIn = null;
}
KalturaVendorCaptionsCatalogItemBaseFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorClipsCatalogItemFilter(){
}
KalturaVendorClipsCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorDocumentEnrichmentCatalogItemFilter(){
}
KalturaVendorDocumentEnrichmentCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 * @param	targetLanguageEqual	string		.
 * @param	targetLanguageIn	string		.
 */
function KalturaVendorDubbingCatalogItemBaseFilter(){
	this.targetLanguageEqual = null;
	this.targetLanguageIn = null;
}
KalturaVendorDubbingCatalogItemBaseFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorIntelligentTaggingCatalogItemFilter(){
}
KalturaVendorIntelligentTaggingCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorMetadataEnrichmentCatalogItemFilter(){
}
KalturaVendorMetadataEnrichmentCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorModerationCatalogItemFilter(){
}
KalturaVendorModerationCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorQuizCatalogItemFilter(){
}
KalturaVendorQuizCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorSentimentAnalysisCatalogItemFilter(){
}
KalturaVendorSentimentAnalysisCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorSummaryCatalogItemFilter(){
}
KalturaVendorSummaryCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVendorVideoAnalysisCatalogItemFilter(){
}
KalturaVendorVideoAnalysisCatalogItemFilter.inheritsFrom (KalturaVendorCatalogItemFilter);


/**
 */
function KalturaVerizonVcastDistributionProviderFilter(){
}
KalturaVerizonVcastDistributionProviderFilter.inheritsFrom (KalturaVerizonVcastDistributionProviderBaseFilter);


/**
 * @param	extendedStatusEqual	string		.
 * @param	extendedStatusIn	string		.
 * @param	extendedStatusNotIn	string		.
 */
function KalturaViewHistoryUserEntryFilter(){
	this.extendedStatusEqual = null;
	this.extendedStatusIn = null;
	this.extendedStatusNotIn = null;
}
KalturaViewHistoryUserEntryFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 */
function KalturaVirtualScheduleEventBaseFilter(){
}
KalturaVirtualScheduleEventBaseFilter.inheritsFrom (KalturaScheduleEventFilter);


/**
 */
function KalturaWatchLaterUserEntryFilter(){
}
KalturaWatchLaterUserEntryFilter.inheritsFrom (KalturaUserEntryFilter);


/**
 */
function KalturaWebexDropFolderFileFilter(){
}
KalturaWebexDropFolderFileFilter.inheritsFrom (KalturaWebexDropFolderFileBaseFilter);


/**
 */
function KalturaWebexDropFolderFilter(){
}
KalturaWebexDropFolderFilter.inheritsFrom (KalturaWebexDropFolderBaseFilter);


/**
 */
function KalturaWidevineProfileFilter(){
}
KalturaWidevineProfileFilter.inheritsFrom (KalturaWidevineProfileBaseFilter);


/**
 */
function KalturaYahooDistributionProviderFilter(){
}
KalturaYahooDistributionProviderFilter.inheritsFrom (KalturaYahooDistributionProviderBaseFilter);


/**
 */
function KalturaYahooSyndicationFeedFilter(){
}
KalturaYahooSyndicationFeedFilter.inheritsFrom (KalturaYahooSyndicationFeedBaseFilter);


/**
 */
function KalturaYouTubeDistributionProviderFilter(){
}
KalturaYouTubeDistributionProviderFilter.inheritsFrom (KalturaYouTubeDistributionProviderBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderFilter(){
}
KalturaYoutubeApiDistributionProviderFilter.inheritsFrom (KalturaYoutubeApiDistributionProviderBaseFilter);


/**
 */
function KalturaZoomDropFolderFilter(){
}
KalturaZoomDropFolderFilter.inheritsFrom (KalturaZoomDropFolderBaseFilter);


/**
 */
function KalturaAdCuePointFilter(){
}
KalturaAdCuePointFilter.inheritsFrom (KalturaAdCuePointBaseFilter);


/**
 */
function KalturaAnnotationFilter(){
}
KalturaAnnotationFilter.inheritsFrom (KalturaAnnotationBaseFilter);


/**
 */
function KalturaAnswerCuePointFilter(){
}
KalturaAnswerCuePointFilter.inheritsFrom (KalturaAnswerCuePointBaseFilter);


/**
 */
function KalturaApiActionPermissionItemFilter(){
}
KalturaApiActionPermissionItemFilter.inheritsFrom (KalturaApiActionPermissionItemBaseFilter);


/**
 */
function KalturaApiParameterPermissionItemFilter(){
}
KalturaApiParameterPermissionItemFilter.inheritsFrom (KalturaApiParameterPermissionItemBaseFilter);


/**
 */
function KalturaAssetParamsOutputFilter(){
}
KalturaAssetParamsOutputFilter.inheritsFrom (KalturaAssetParamsOutputBaseFilter);


/**
 */
function KalturaAttUverseDistributionProfileBaseFilter(){
}
KalturaAttUverseDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaAttachmentAssetFilter(){
}
KalturaAttachmentAssetFilter.inheritsFrom (KalturaAttachmentAssetBaseFilter);


/**
 */
function KalturaAvnDistributionProfileBaseFilter(){
}
KalturaAvnDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaBusinessProcessAbortNotificationTemplateBaseFilter(){
}
KalturaBusinessProcessAbortNotificationTemplateBaseFilter.inheritsFrom (KalturaBusinessProcessNotificationTemplateFilter);


/**
 */
function KalturaBusinessProcessSignalNotificationTemplateBaseFilter(){
}
KalturaBusinessProcessSignalNotificationTemplateBaseFilter.inheritsFrom (KalturaBusinessProcessNotificationTemplateFilter);


/**
 */
function KalturaBusinessProcessStartNotificationTemplateBaseFilter(){
}
KalturaBusinessProcessStartNotificationTemplateBaseFilter.inheritsFrom (KalturaBusinessProcessNotificationTemplateFilter);


/**
 */
function KalturaCameraScheduleResourceFilter(){
}
KalturaCameraScheduleResourceFilter.inheritsFrom (KalturaCameraScheduleResourceBaseFilter);


/**
 */
function KalturaCaptionAssetFilter(){
}
KalturaCaptionAssetFilter.inheritsFrom (KalturaCaptionAssetBaseFilter);


/**
 */
function KalturaCaptionParamsFilter(){
}
KalturaCaptionParamsFilter.inheritsFrom (KalturaCaptionParamsBaseFilter);


/**
 */
function KalturaCodeCuePointFilter(){
}
KalturaCodeCuePointFilter.inheritsFrom (KalturaCodeCuePointBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProfileBaseFilter(){
}
KalturaComcastMrssDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaCortexApiDistributionProfileBaseFilter(){
}
KalturaCortexApiDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaCrossKalturaDistributionProfileBaseFilter(){
}
KalturaCrossKalturaDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaDailymotionDistributionProfileBaseFilter(){
}
KalturaDailymotionDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaDataEntryFilter(){
}
KalturaDataEntryFilter.inheritsFrom (KalturaDataEntryBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericRtmpBaseFilter(){
}
KalturaDeliveryProfileGenericRtmpBaseFilter.inheritsFrom (KalturaDeliveryProfileRtmpFilter);


/**
 */
function KalturaDocumentEntryFilter(){
}
KalturaDocumentEntryFilter.inheritsFrom (KalturaDocumentEntryBaseFilter);


/**
 */
function KalturaDoubleClickDistributionProfileBaseFilter(){
}
KalturaDoubleClickDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchCaptionItem(){
	this.fieldName = null;
}
KalturaESearchCaptionItem.inheritsFrom (KalturaESearchEntryAbstractNestedItem);


/**
 * @param	fieldName	string		.
 */
function KalturaESearchCuePointItem(){
	this.fieldName = null;
}
KalturaESearchCuePointItem.inheritsFrom (KalturaESearchEntryAbstractNestedItem);


/**
 * @param	xpath	string		.
 * @param	metadataProfileId	int		.
 * @param	metadataFieldId	int		.
 */
function KalturaESearchEntryMetadataItem(){
	this.xpath = null;
	this.metadataProfileId = null;
	this.metadataFieldId = null;
}
KalturaESearchEntryMetadataItem.inheritsFrom (KalturaESearchEntryAbstractNestedItem);


/**
 * @param	playbackDomainLike	string		.
 * @param	playbackDomainMultiLikeOr	string		.
 * @param	playbackDomainMultiLikeAnd	string		.
 */
function KalturaEdgeServerNodeBaseFilter(){
	this.playbackDomainLike = null;
	this.playbackDomainMultiLikeOr = null;
	this.playbackDomainMultiLikeAnd = null;
}
KalturaEdgeServerNodeBaseFilter.inheritsFrom (KalturaDeliveryServerNodeFilter);


/**
 * @param	parentCategoryIdsLike	string		.
 * @param	parentCategoryIdsMultiLikeOr	string		.
 * @param	parentCategoryIdsMultiLikeAnd	string		.
 */
function KalturaEntryScheduleEventFilter(){
	this.parentCategoryIdsLike = null;
	this.parentCategoryIdsMultiLikeOr = null;
	this.parentCategoryIdsMultiLikeAnd = null;
}
KalturaEntryScheduleEventFilter.inheritsFrom (KalturaEntryScheduleEventBaseFilter);


/**
 */
function KalturaEventCuePointFilter(){
}
KalturaEventCuePointFilter.inheritsFrom (KalturaEventCuePointBaseFilter);


/**
 */
function KalturaFacebookDistributionProfileBaseFilter(){
}
KalturaFacebookDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaFlavorAssetFilter(){
}
KalturaFlavorAssetFilter.inheritsFrom (KalturaFlavorAssetBaseFilter);


/**
 */
function KalturaFlavorParamsFilter(){
}
KalturaFlavorParamsFilter.inheritsFrom (KalturaFlavorParamsBaseFilter);


/**
 */
function KalturaFreewheelGenericDistributionProfileBaseFilter(){
}
KalturaFreewheelGenericDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaFtpDistributionProfileBaseFilter(){
}
KalturaFtpDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaFtpDropFolderBaseFilter(){
}
KalturaFtpDropFolderBaseFilter.inheritsFrom (KalturaRemoteDropFolderFilter);


/**
 */
function KalturaFtpScheduledDistributionProviderBaseFilter(){
}
KalturaFtpScheduledDistributionProviderBaseFilter.inheritsFrom (KalturaFtpDistributionProviderFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedBaseFilter(){
}
KalturaGenericXsltSyndicationFeedBaseFilter.inheritsFrom (KalturaGenericSyndicationFeedFilter);


/**
 */
function KalturaHuluDistributionProfileBaseFilter(){
}
KalturaHuluDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaIdeticDistributionProfileBaseFilter(){
}
KalturaIdeticDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaLiveEntryScheduleResourceFilter(){
}
KalturaLiveEntryScheduleResourceFilter.inheritsFrom (KalturaLiveEntryScheduleResourceBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntry(){
}
KalturaLiveStreamAdminEntry.inheritsFrom (KalturaLiveStreamEntry);


/**
 */
function KalturaLocationScheduleResourceFilter(){
}
KalturaLocationScheduleResourceFilter.inheritsFrom (KalturaLocationScheduleResourceBaseFilter);


/**
 */
function KalturaMediaServerNodeBaseFilter(){
}
KalturaMediaServerNodeBaseFilter.inheritsFrom (KalturaDeliveryServerNodeFilter);


/**
 */
function KalturaMetroPcsDistributionProfileBaseFilter(){
}
KalturaMetroPcsDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaMsnDistributionProfileBaseFilter(){
}
KalturaMsnDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaNdnDistributionProfileBaseFilter(){
}
KalturaNdnDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 * @param	playListTypeEqual	int		.
 * @param	playListTypeIn	string		.
 */
function KalturaPlaylistFilter(){
	this.playListTypeEqual = null;
	this.playListTypeIn = null;
}
KalturaPlaylistFilter.inheritsFrom (KalturaPlaylistBaseFilter);


/**
 */
function KalturaQuestionCuePointFilter(){
}
KalturaQuestionCuePointFilter.inheritsFrom (KalturaQuestionCuePointBaseFilter);


/**
 */
function KalturaQuickPlayDistributionProfileBaseFilter(){
}
KalturaQuickPlayDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 * @param	extendedStatusEqual	string		.
 * @param	extendedStatusIn	string		.
 * @param	extendedStatusNotIn	string		.
 */
function KalturaQuizUserEntryFilter(){
	this.extendedStatusEqual = null;
	this.extendedStatusIn = null;
	this.extendedStatusNotIn = null;
}
KalturaQuizUserEntryFilter.inheritsFrom (KalturaQuizUserEntryBaseFilter);


/**
 */
function KalturaRoomEntryFilter(){
}
KalturaRoomEntryFilter.inheritsFrom (KalturaRoomEntryBaseFilter);


/**
 */
function KalturaRsvpUserEntryFilter(){
}
KalturaRsvpUserEntryFilter.inheritsFrom (KalturaRsvpUserEntryBaseFilter);


/**
 */
function KalturaSessionCuePointFilter(){
}
KalturaSessionCuePointFilter.inheritsFrom (KalturaSessionCuePointBaseFilter);


/**
 */
function KalturaSshDropFolderBaseFilter(){
}
KalturaSshDropFolderBaseFilter.inheritsFrom (KalturaRemoteDropFolderFilter);


/**
 */
function KalturaSynacorHboDistributionProfileBaseFilter(){
}
KalturaSynacorHboDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaTVComDistributionProfileBaseFilter(){
}
KalturaTVComDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaThumbAssetFilter(){
}
KalturaThumbAssetFilter.inheritsFrom (KalturaThumbAssetBaseFilter);


/**
 */
function KalturaThumbCuePointFilter(){
}
KalturaThumbCuePointFilter.inheritsFrom (KalturaThumbCuePointBaseFilter);


/**
 */
function KalturaThumbParamsFilter(){
}
KalturaThumbParamsFilter.inheritsFrom (KalturaThumbParamsBaseFilter);


/**
 */
function KalturaTimeWarnerDistributionProfileBaseFilter(){
}
KalturaTimeWarnerDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaTvinciDistributionProfileBaseFilter(){
}
KalturaTvinciDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaUnicornDistributionProfileBaseFilter(){
}
KalturaUnicornDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaUverseClickToOrderDistributionProfileBaseFilter(){
}
KalturaUverseClickToOrderDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaUverseDistributionProfileBaseFilter(){
}
KalturaUverseDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaVendorAlignmentCatalogItemFilter(){
}
KalturaVendorAlignmentCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorAudioDescriptionCatalogItemFilter(){
}
KalturaVendorAudioDescriptionCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorCaptionsCatalogItemFilter(){
}
KalturaVendorCaptionsCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorChapteringCatalogItemFilter(){
}
KalturaVendorChapteringCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorDubbingCatalogItemFilter(){
}
KalturaVendorDubbingCatalogItemFilter.inheritsFrom (KalturaVendorDubbingCatalogItemBaseFilter);


/**
 */
function KalturaVendorExtendedAudioDescriptionCatalogItemFilter(){
}
KalturaVendorExtendedAudioDescriptionCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorLiveCaptionCatalogItemFilter(){
}
KalturaVendorLiveCaptionCatalogItemFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemBaseFilter);


/**
 */
function KalturaVendorSignLanguageCatalogItemFilter(){
}
KalturaVendorSignLanguageCatalogItemFilter.inheritsFrom (KalturaVendorDubbingCatalogItemBaseFilter);


/**
 */
function KalturaVerizonVcastDistributionProfileBaseFilter(){
}
KalturaVerizonVcastDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaVirtualScheduleEventFilter(){
}
KalturaVirtualScheduleEventFilter.inheritsFrom (KalturaVirtualScheduleEventBaseFilter);


/**
 */
function KalturaYahooDistributionProfileBaseFilter(){
}
KalturaYahooDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYouTubeDistributionProfileBaseFilter(){
}
KalturaYouTubeDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileBaseFilter(){
}
KalturaYoutubeApiDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaAdminUserBaseFilter(){
}
KalturaAdminUserBaseFilter.inheritsFrom (KalturaUserFilter);


/**
 */
function KalturaAttUverseDistributionProfileFilter(){
}
KalturaAttUverseDistributionProfileFilter.inheritsFrom (KalturaAttUverseDistributionProfileBaseFilter);


/**
 */
function KalturaAvnDistributionProfileFilter(){
}
KalturaAvnDistributionProfileFilter.inheritsFrom (KalturaAvnDistributionProfileBaseFilter);


/**
 */
function KalturaBusinessProcessAbortNotificationTemplateFilter(){
}
KalturaBusinessProcessAbortNotificationTemplateFilter.inheritsFrom (KalturaBusinessProcessAbortNotificationTemplateBaseFilter);


/**
 */
function KalturaBusinessProcessSignalNotificationTemplateFilter(){
}
KalturaBusinessProcessSignalNotificationTemplateFilter.inheritsFrom (KalturaBusinessProcessSignalNotificationTemplateBaseFilter);


/**
 */
function KalturaBusinessProcessStartNotificationTemplateFilter(){
}
KalturaBusinessProcessStartNotificationTemplateFilter.inheritsFrom (KalturaBusinessProcessStartNotificationTemplateBaseFilter);


/**
 * @param	contentLike	string		.
 * @param	contentMultiLikeOr	string		.
 * @param	contentMultiLikeAnd	string		.
 * @param	partnerDescriptionLike	string		.
 * @param	partnerDescriptionMultiLikeOr	string		.
 * @param	partnerDescriptionMultiLikeAnd	string		.
 * @param	languageEqual	string		.
 * @param	languageIn	string		.
 * @param	labelEqual	string		.
 * @param	labelIn	string		.
 * @param	startTimeGreaterThanOrEqual	int		.
 * @param	startTimeLessThanOrEqual	int		.
 * @param	endTimeGreaterThanOrEqual	int		.
 * @param	endTimeLessThanOrEqual	int		.
 */
function KalturaCaptionAssetItemFilter(){
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
	this.partnerDescriptionLike = null;
	this.partnerDescriptionMultiLikeOr = null;
	this.partnerDescriptionMultiLikeAnd = null;
	this.languageEqual = null;
	this.languageIn = null;
	this.labelEqual = null;
	this.labelIn = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
}
KalturaCaptionAssetItemFilter.inheritsFrom (KalturaCaptionAssetFilter);


/**
 */
function KalturaComcastMrssDistributionProfileFilter(){
}
KalturaComcastMrssDistributionProfileFilter.inheritsFrom (KalturaComcastMrssDistributionProfileBaseFilter);


/**
 */
function KalturaCortexApiDistributionProfileFilter(){
}
KalturaCortexApiDistributionProfileFilter.inheritsFrom (KalturaCortexApiDistributionProfileBaseFilter);


/**
 */
function KalturaCrossKalturaDistributionProfileFilter(){
}
KalturaCrossKalturaDistributionProfileFilter.inheritsFrom (KalturaCrossKalturaDistributionProfileBaseFilter);


/**
 */
function KalturaDailymotionDistributionProfileFilter(){
}
KalturaDailymotionDistributionProfileFilter.inheritsFrom (KalturaDailymotionDistributionProfileBaseFilter);


/**
 */
function KalturaDeliveryProfileGenericRtmpFilter(){
}
KalturaDeliveryProfileGenericRtmpFilter.inheritsFrom (KalturaDeliveryProfileGenericRtmpBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsBaseFilter(){
}
KalturaDocumentFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaDoubleClickDistributionProfileFilter(){
}
KalturaDoubleClickDistributionProfileFilter.inheritsFrom (KalturaDoubleClickDistributionProfileBaseFilter);


/**
 */
function KalturaEdgeServerNodeFilter(){
}
KalturaEdgeServerNodeFilter.inheritsFrom (KalturaEdgeServerNodeBaseFilter);


/**
 */
function KalturaFacebookDistributionProfileFilter(){
}
KalturaFacebookDistributionProfileFilter.inheritsFrom (KalturaFacebookDistributionProfileBaseFilter);


/**
 * @param	flavorParamsIdEqual	int		.
 * @param	flavorParamsVersionEqual	string		.
 * @param	flavorAssetIdEqual	string		.
 * @param	flavorAssetVersionEqual	string		.
 */
function KalturaFlavorParamsOutputBaseFilter(){
	this.flavorParamsIdEqual = null;
	this.flavorParamsVersionEqual = null;
	this.flavorAssetIdEqual = null;
	this.flavorAssetVersionEqual = null;
}
KalturaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaFreewheelGenericDistributionProfileFilter(){
}
KalturaFreewheelGenericDistributionProfileFilter.inheritsFrom (KalturaFreewheelGenericDistributionProfileBaseFilter);


/**
 */
function KalturaFtpDistributionProfileFilter(){
}
KalturaFtpDistributionProfileFilter.inheritsFrom (KalturaFtpDistributionProfileBaseFilter);


/**
 */
function KalturaFtpDropFolderFilter(){
}
KalturaFtpDropFolderFilter.inheritsFrom (KalturaFtpDropFolderBaseFilter);


/**
 */
function KalturaFtpScheduledDistributionProviderFilter(){
}
KalturaFtpScheduledDistributionProviderFilter.inheritsFrom (KalturaFtpScheduledDistributionProviderBaseFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedFilter(){
}
KalturaGenericXsltSyndicationFeedFilter.inheritsFrom (KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 * @param	groupType	int		.
 */
function KalturaGroupFilter(){
	this.groupType = null;
}
KalturaGroupFilter.inheritsFrom (KalturaUserFilter);


/**
 */
function KalturaHuluDistributionProfileFilter(){
}
KalturaHuluDistributionProfileFilter.inheritsFrom (KalturaHuluDistributionProfileBaseFilter);


/**
 */
function KalturaIdeticDistributionProfileFilter(){
}
KalturaIdeticDistributionProfileFilter.inheritsFrom (KalturaIdeticDistributionProfileBaseFilter);


/**
 */
function KalturaImageFlavorParamsBaseFilter(){
}
KalturaImageFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaLiveAssetBaseFilter(){
}
KalturaLiveAssetBaseFilter.inheritsFrom (KalturaFlavorAssetFilter);


/**
 */
function KalturaLiveParamsBaseFilter(){
}
KalturaLiveParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaLiveRedirectScheduleEventFilter(){
}
KalturaLiveRedirectScheduleEventFilter.inheritsFrom (KalturaEntryScheduleEventFilter);


/**
 */
function KalturaLiveStreamScheduleEventBaseFilter(){
}
KalturaLiveStreamScheduleEventBaseFilter.inheritsFrom (KalturaEntryScheduleEventFilter);


/**
 */
function KalturaMediaFlavorParamsBaseFilter(){
}
KalturaMediaFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaMediaServerNodeFilter(){
}
KalturaMediaServerNodeFilter.inheritsFrom (KalturaMediaServerNodeBaseFilter);


/**
 */
function KalturaMeetingScheduleEventBaseFilter(){
}
KalturaMeetingScheduleEventBaseFilter.inheritsFrom (KalturaEntryScheduleEventFilter);


/**
 */
function KalturaMetroPcsDistributionProfileFilter(){
}
KalturaMetroPcsDistributionProfileFilter.inheritsFrom (KalturaMetroPcsDistributionProfileBaseFilter);


/**
 */
function KalturaMixEntryBaseFilter(){
}
KalturaMixEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMsnDistributionProfileFilter(){
}
KalturaMsnDistributionProfileFilter.inheritsFrom (KalturaMsnDistributionProfileBaseFilter);


/**
 */
function KalturaNdnDistributionProfileFilter(){
}
KalturaNdnDistributionProfileFilter.inheritsFrom (KalturaNdnDistributionProfileBaseFilter);


/**
 */
function KalturaPdfFlavorParamsBaseFilter(){
}
KalturaPdfFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaQuickPlayDistributionProfileFilter(){
}
KalturaQuickPlayDistributionProfileFilter.inheritsFrom (KalturaQuickPlayDistributionProfileBaseFilter);


/**
 */
function KalturaRecordScheduleEventBaseFilter(){
}
KalturaRecordScheduleEventBaseFilter.inheritsFrom (KalturaEntryScheduleEventFilter);


/**
 */
function KalturaSshDropFolderFilter(){
}
KalturaSshDropFolderFilter.inheritsFrom (KalturaSshDropFolderBaseFilter);


/**
 */
function KalturaSwfFlavorParamsBaseFilter(){
}
KalturaSwfFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaSynacorHboDistributionProfileFilter(){
}
KalturaSynacorHboDistributionProfileFilter.inheritsFrom (KalturaSynacorHboDistributionProfileBaseFilter);


/**
 */
function KalturaTVComDistributionProfileFilter(){
}
KalturaTVComDistributionProfileFilter.inheritsFrom (KalturaTVComDistributionProfileBaseFilter);


/**
 * @param	thumbParamsIdEqual	int		.
 * @param	thumbParamsVersionEqual	string		.
 * @param	thumbAssetIdEqual	string		.
 * @param	thumbAssetVersionEqual	string		.
 */
function KalturaThumbParamsOutputBaseFilter(){
	this.thumbParamsIdEqual = null;
	this.thumbParamsVersionEqual = null;
	this.thumbAssetIdEqual = null;
	this.thumbAssetVersionEqual = null;
}
KalturaThumbParamsOutputBaseFilter.inheritsFrom (KalturaThumbParamsFilter);


/**
 */
function KalturaTimeWarnerDistributionProfileFilter(){
}
KalturaTimeWarnerDistributionProfileFilter.inheritsFrom (KalturaTimeWarnerDistributionProfileBaseFilter);


/**
 */
function KalturaTimedThumbAssetBaseFilter(){
}
KalturaTimedThumbAssetBaseFilter.inheritsFrom (KalturaThumbAssetFilter);


/**
 */
function KalturaTranscriptAssetBaseFilter(){
}
KalturaTranscriptAssetBaseFilter.inheritsFrom (KalturaAttachmentAssetFilter);


/**
 */
function KalturaTvinciDistributionProfileFilter(){
}
KalturaTvinciDistributionProfileFilter.inheritsFrom (KalturaTvinciDistributionProfileBaseFilter);


/**
 */
function KalturaUnicornDistributionProfileFilter(){
}
KalturaUnicornDistributionProfileFilter.inheritsFrom (KalturaUnicornDistributionProfileBaseFilter);


/**
 */
function KalturaUverseClickToOrderDistributionProfileFilter(){
}
KalturaUverseClickToOrderDistributionProfileFilter.inheritsFrom (KalturaUverseClickToOrderDistributionProfileBaseFilter);


/**
 */
function KalturaUverseDistributionProfileFilter(){
}
KalturaUverseDistributionProfileFilter.inheritsFrom (KalturaUverseDistributionProfileBaseFilter);


/**
 * @param	targetLanguageEqual	string		.
 * @param	targetLanguageIn	string		.
 */
function KalturaVendorTranslationCatalogItemBaseFilter(){
	this.targetLanguageEqual = null;
	this.targetLanguageIn = null;
}
KalturaVendorTranslationCatalogItemBaseFilter.inheritsFrom (KalturaVendorCaptionsCatalogItemFilter);


/**
 */
function KalturaVerizonVcastDistributionProfileFilter(){
}
KalturaVerizonVcastDistributionProfileFilter.inheritsFrom (KalturaVerizonVcastDistributionProfileBaseFilter);


/**
 */
function KalturaVodScheduleEventBaseFilter(){
}
KalturaVodScheduleEventBaseFilter.inheritsFrom (KalturaEntryScheduleEventFilter);


/**
 */
function KalturaWidevineFlavorAssetBaseFilter(){
}
KalturaWidevineFlavorAssetBaseFilter.inheritsFrom (KalturaFlavorAssetFilter);


/**
 */
function KalturaWidevineFlavorParamsBaseFilter(){
}
KalturaWidevineFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaYahooDistributionProfileFilter(){
}
KalturaYahooDistributionProfileFilter.inheritsFrom (KalturaYahooDistributionProfileBaseFilter);


/**
 */
function KalturaYouTubeDistributionProfileFilter(){
}
KalturaYouTubeDistributionProfileFilter.inheritsFrom (KalturaYouTubeDistributionProfileBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileFilter(){
}
KalturaYoutubeApiDistributionProfileFilter.inheritsFrom (KalturaYoutubeApiDistributionProfileBaseFilter);


/**
 */
function KalturaAdminUserFilter(){
}
KalturaAdminUserFilter.inheritsFrom (KalturaAdminUserBaseFilter);


/**
 */
function KalturaBlackoutScheduleEventFilter(){
}
KalturaBlackoutScheduleEventFilter.inheritsFrom (KalturaRecordScheduleEventBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsFilter(){
}
KalturaDocumentFlavorParamsFilter.inheritsFrom (KalturaDocumentFlavorParamsBaseFilter);


/**
 */
function KalturaFlavorParamsOutputFilter(){
}
KalturaFlavorParamsOutputFilter.inheritsFrom (KalturaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaImageFlavorParamsFilter(){
}
KalturaImageFlavorParamsFilter.inheritsFrom (KalturaImageFlavorParamsBaseFilter);


/**
 */
function KalturaLiveAssetFilter(){
}
KalturaLiveAssetFilter.inheritsFrom (KalturaLiveAssetBaseFilter);


/**
 */
function KalturaLiveClusterMediaServerNodeBaseFilter(){
}
KalturaLiveClusterMediaServerNodeBaseFilter.inheritsFrom (KalturaMediaServerNodeFilter);


/**
 */
function KalturaLiveParamsFilter(){
}
KalturaLiveParamsFilter.inheritsFrom (KalturaLiveParamsBaseFilter);


/**
 * @param	sourceEntryIdEqual	string		.
 */
function KalturaLiveStreamScheduleEventFilter(){
	this.sourceEntryIdEqual = null;
}
KalturaLiveStreamScheduleEventFilter.inheritsFrom (KalturaLiveStreamScheduleEventBaseFilter);


/**
 */
function KalturaMediaFlavorParamsFilter(){
}
KalturaMediaFlavorParamsFilter.inheritsFrom (KalturaMediaFlavorParamsBaseFilter);


/**
 */
function KalturaMeetingScheduleEventFilter(){
}
KalturaMeetingScheduleEventFilter.inheritsFrom (KalturaMeetingScheduleEventBaseFilter);


/**
 */
function KalturaMixEntryFilter(){
}
KalturaMixEntryFilter.inheritsFrom (KalturaMixEntryBaseFilter);


/**
 */
function KalturaPdfFlavorParamsFilter(){
}
KalturaPdfFlavorParamsFilter.inheritsFrom (KalturaPdfFlavorParamsBaseFilter);


/**
 */
function KalturaRecordScheduleEventFilter(){
}
KalturaRecordScheduleEventFilter.inheritsFrom (KalturaRecordScheduleEventBaseFilter);


/**
 */
function KalturaScpDropFolderBaseFilter(){
}
KalturaScpDropFolderBaseFilter.inheritsFrom (KalturaSshDropFolderFilter);


/**
 */
function KalturaSftpDropFolderBaseFilter(){
}
KalturaSftpDropFolderBaseFilter.inheritsFrom (KalturaSshDropFolderFilter);


/**
 */
function KalturaSwfFlavorParamsFilter(){
}
KalturaSwfFlavorParamsFilter.inheritsFrom (KalturaSwfFlavorParamsBaseFilter);


/**
 */
function KalturaThumbParamsOutputFilter(){
}
KalturaThumbParamsOutputFilter.inheritsFrom (KalturaThumbParamsOutputBaseFilter);


/**
 */
function KalturaTimedThumbAssetFilter(){
}
KalturaTimedThumbAssetFilter.inheritsFrom (KalturaTimedThumbAssetBaseFilter);


/**
 */
function KalturaTranscriptAssetFilter(){
}
KalturaTranscriptAssetFilter.inheritsFrom (KalturaTranscriptAssetBaseFilter);


/**
 */
function KalturaVendorLiveTranslationCatalogItemFilter(){
}
KalturaVendorLiveTranslationCatalogItemFilter.inheritsFrom (KalturaVendorTranslationCatalogItemBaseFilter);


/**
 */
function KalturaVendorTranslationCatalogItemFilter(){
}
KalturaVendorTranslationCatalogItemFilter.inheritsFrom (KalturaVendorTranslationCatalogItemBaseFilter);


/**
 */
function KalturaVodScheduleEventFilter(){
}
KalturaVodScheduleEventFilter.inheritsFrom (KalturaVodScheduleEventBaseFilter);


/**
 */
function KalturaWidevineFlavorAssetFilter(){
}
KalturaWidevineFlavorAssetFilter.inheritsFrom (KalturaWidevineFlavorAssetBaseFilter);


/**
 */
function KalturaWidevineFlavorParamsFilter(){
}
KalturaWidevineFlavorParamsFilter.inheritsFrom (KalturaWidevineFlavorParamsBaseFilter);


/**
 */
function KalturaWowzaMediaServerNodeBaseFilter(){
}
KalturaWowzaMediaServerNodeBaseFilter.inheritsFrom (KalturaMediaServerNodeFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputBaseFilter(){
}
KalturaDocumentFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 * @param	externalSourceTypeEqual	string		.
 * @param	externalSourceTypeIn	string		.
 * @param	assetParamsIdsMatchOr	string		.
 * @param	assetParamsIdsMatchAnd	string		.
 */
function KalturaExternalMediaEntryBaseFilter(){
	this.externalSourceTypeEqual = null;
	this.externalSourceTypeIn = null;
	this.assetParamsIdsMatchOr = null;
	this.assetParamsIdsMatchAnd = null;
}
KalturaExternalMediaEntryBaseFilter.inheritsFrom (KalturaMediaEntryFilter);


/**
 */
function KalturaImageFlavorParamsOutputBaseFilter(){
}
KalturaImageFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaLiveClusterMediaServerNodeFilter(){
}
KalturaLiveClusterMediaServerNodeFilter.inheritsFrom (KalturaLiveClusterMediaServerNodeBaseFilter);


/**
 */
function KalturaLiveEntryBaseFilter(){
}
KalturaLiveEntryBaseFilter.inheritsFrom (KalturaMediaEntryFilter);


/**
 */
function KalturaMediaFlavorParamsOutputBaseFilter(){
}
KalturaMediaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaPdfFlavorParamsOutputBaseFilter(){
}
KalturaPdfFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaScpDropFolderFilter(){
}
KalturaScpDropFolderFilter.inheritsFrom (KalturaScpDropFolderBaseFilter);


/**
 */
function KalturaSftpDropFolderFilter(){
}
KalturaSftpDropFolderFilter.inheritsFrom (KalturaSftpDropFolderBaseFilter);


/**
 */
function KalturaSwfFlavorParamsOutputBaseFilter(){
}
KalturaSwfFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaWidevineFlavorParamsOutputBaseFilter(){
}
KalturaWidevineFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaWowzaMediaServerNodeFilter(){
}
KalturaWowzaMediaServerNodeFilter.inheritsFrom (KalturaWowzaMediaServerNodeBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputFilter(){
}
KalturaDocumentFlavorParamsOutputFilter.inheritsFrom (KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
function KalturaExternalMediaEntryFilter(){
}
KalturaExternalMediaEntryFilter.inheritsFrom (KalturaExternalMediaEntryBaseFilter);


/**
 */
function KalturaImageFlavorParamsOutputFilter(){
}
KalturaImageFlavorParamsOutputFilter.inheritsFrom (KalturaImageFlavorParamsOutputBaseFilter);


/**
 * @param	isLive	int		.
 * @param	isRecordedEntryIdEmpty	int		.
 * @param	hasMediaServerHostname	string		.
 */
function KalturaLiveEntryFilter(){
	this.isLive = null;
	this.isRecordedEntryIdEmpty = null;
	this.hasMediaServerHostname = null;
}
KalturaLiveEntryFilter.inheritsFrom (KalturaLiveEntryBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputFilter(){
}
KalturaMediaFlavorParamsOutputFilter.inheritsFrom (KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaPdfFlavorParamsOutputFilter(){
}
KalturaPdfFlavorParamsOutputFilter.inheritsFrom (KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaSwfFlavorParamsOutputFilter(){
}
KalturaSwfFlavorParamsOutputFilter.inheritsFrom (KalturaSwfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaWidevineFlavorParamsOutputFilter(){
}
KalturaWidevineFlavorParamsOutputFilter.inheritsFrom (KalturaWidevineFlavorParamsOutputBaseFilter);


/**
 */
function KalturaLiveChannelBaseFilter(){
}
KalturaLiveChannelBaseFilter.inheritsFrom (KalturaLiveEntryFilter);


/**
 */
function KalturaLiveStreamEntryBaseFilter(){
}
KalturaLiveStreamEntryBaseFilter.inheritsFrom (KalturaLiveEntryFilter);


/**
 */
function KalturaLiveChannelFilter(){
}
KalturaLiveChannelFilter.inheritsFrom (KalturaLiveChannelBaseFilter);


/**
 */
function KalturaLiveStreamEntryFilter(){
}
KalturaLiveStreamEntryFilter.inheritsFrom (KalturaLiveStreamEntryBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntryBaseFilter(){
}
KalturaLiveStreamAdminEntryBaseFilter.inheritsFrom (KalturaLiveStreamEntryFilter);


/**
 */
function KalturaLiveStreamAdminEntryFilter(){
}
KalturaLiveStreamAdminEntryFilter.inheritsFrom (KalturaLiveStreamAdminEntryBaseFilter);


