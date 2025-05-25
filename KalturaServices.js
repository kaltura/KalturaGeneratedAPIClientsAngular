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
 *Class definition for the Kaltura service: accessControlProfile.
 * The available service actions:
 * @action	add	Add new access control profile.
 * @action	delete	Delete access control profile by id.
 * @action	get	Get access control profile by id.
 * @action	list	List access control profiles by filter and pager.
 * @action	update	Update access control profile by id.
*/
function KalturaAccessControlProfileService(client){
	this.init(client);
}
KalturaAccessControlProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new access control profile.
 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional).
 * @return	KalturaAccessControlProfile.
 */
KalturaAccessControlProfileService.prototype.add = function(callback, accessControlProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "accessControlProfile", toParams(accessControlProfile));
	this.client.queueServiceActionCall("accesscontrolprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete access control profile by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAccessControlProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accesscontrolprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get access control profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaAccessControlProfile.
 * @return	.
 */
KalturaAccessControlProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accesscontrolprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List access control profiles by filter and pager.
 * @param	filter	KalturaAccessControlProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAccessControlProfileListResponse.
 */
KalturaAccessControlProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("accesscontrolprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update access control profile by id.
 * @param	id	int		 (optional).
 * @param	accessControlProfile	KalturaAccessControlProfile		 (optional).
 * @return	KalturaAccessControlProfile.
 * @return	.
 */
KalturaAccessControlProfileService.prototype.update = function(callback, id, accessControlProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "accessControlProfile", toParams(accessControlProfile));
	this.client.queueServiceActionCall("accesscontrolprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action	add	Add new Access Control Profile.
 * @action	delete	Delete Access Control Profile by id.
 * @action	get	Get Access Control Profile by id.
 * @action	list	List Access Control Profiles by filter and pager.
 * @action	update	Update Access Control Profile by id.
*/
function KalturaAccessControlService(client){
	this.init(client);
}
KalturaAccessControlService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Access Control Profile.
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.add = function(callback, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accesscontrol", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Access Control Profile by id.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaAccessControlService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accesscontrol", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Access Control Profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accesscontrol", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Access Control Profiles by filter and pager.
 * @param	filter	KalturaAccessControlFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAccessControlListResponse.
 */
KalturaAccessControlService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("accesscontrol", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Access Control Profile by id.
 * @param	id	int		 (optional).
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 * @return	.
 * @return	.
 */
KalturaAccessControlService.prototype.update = function(callback, id, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accesscontrol", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action	login	Get an admin session using admin email and password (Used for login to the KMC application).
 * @action	resetPassword	Reset admin user password and send it to the users email address.
 * @action	setInitialPassword	Set initial users password.
 * @action	updatePassword	Update admin user password and email.
*/
function KalturaAdminUserService(client){
	this.init(client);
}
KalturaAdminUserService.inheritsFrom (KalturaServiceBase);
/**
 * Get an admin session using admin email and password (Used for login to the KMC application).
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	partnerId	int		 (optional, default: null).
 * @return	string.
 * @return	.
 */
KalturaAdminUserService.prototype.login = function(callback, email, password, partnerId){
	if(!partnerId)
		partnerId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("adminuser", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address.
 * @param	email	string		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAdminUserService.prototype.resetPassword = function(callback, email){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.queueServiceActionCall("adminuser", "resetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set initial users password.
 * @param	hashKey	string		 (optional).
 * @param	newPassword	string		new password to set (optional).
 * @return	KalturaAuthentication.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminuser", "setInitialPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update admin user password and email.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	newEmail	string		Optional, provide only when you want to update the email (optional).
 * @param	newPassword	string		 (optional).
 * @param	otp	string		the user's one-time password (optional, default: null).
 * @return	KalturaAdminUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword, otp){
	if(!newEmail)
		newEmail = "";
	if(!newPassword)
		newPassword = "";
	if(!otp)
		otp = null;
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newEmail", newEmail);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.addParam(kparams, "otp", otp);
	this.client.queueServiceActionCall("adminuser", "updatePassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: analytics.
 * The available service actions:
 * @action	query	report query action allows to get a analytics data for specific query dimensions, metrics and filters..
*/
function KalturaAnalyticsService(client){
	this.init(client);
}
KalturaAnalyticsService.inheritsFrom (KalturaServiceBase);
/**
 * report query action allows to get a analytics data for specific query dimensions, metrics and filters..
 * @param	filter	KalturaAnalyticsFilter		the analytics query filter (optional).
 * @param	pager	KalturaFilterPager		the analytics query result pager (optional, default: null).
 * @return	KalturaReportResponse.
 */
KalturaAnalyticsService.prototype.query = function(callback, filter, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("analytics", "query", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: appToken.
 * The available service actions:
 * @action	add	Add new application authentication token.
 * @action	delete	Delete application authentication token by ID.
 * @action	get	Get application authentication token by ID.
 * @action	list	List application authentication tokens by filter and pager.
 * @action	startSession	Starts a new KS (kaltura Session) based on an application authentication token ID.
 * @action	update	Update application authentication token by ID.
*/
function KalturaAppTokenService(client){
	this.init(client);
}
KalturaAppTokenService.inheritsFrom (KalturaServiceBase);
/**
 * Add new application authentication token.
 * @param	appToken	KalturaAppToken		 (optional).
 * @return	KalturaAppToken.
 */
KalturaAppTokenService.prototype.add = function(callback, appToken){
	var kparams = new Object();
	this.client.addParam(kparams, "appToken", toParams(appToken));
	this.client.queueServiceActionCall("apptoken", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete application authentication token by ID.
 * @param	id	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaAppTokenService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("apptoken", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get application authentication token by ID.
 * @param	id	string		 (optional).
 * @return	KalturaAppToken.
 * @return	.
 */
KalturaAppTokenService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("apptoken", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List application authentication tokens by filter and pager.
 * @param	filter	KalturaAppTokenFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAppTokenListResponse.
 */
KalturaAppTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("apptoken", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Starts a new KS (kaltura Session) based on an application authentication token ID.
 * @param	id	string		application token ID (optional).
 * @param	tokenHash	string		a hash [MD5, SHA1, SHA256 and SHA512 are supported] of the current KS concatenated with the application token (optional).
 * @param	userId	string		session user ID, will be ignored if a different user ID already defined on the application token (optional, default: null).
 * @param	type	int		session type, will be ignored if a different session type is already defined on the application token (optional, enum: KalturaSessionType, default: null).
 * @param	expiry	int		session expiry (in seconds), could be overridden by shorter expiry of the application token (optional, default: null).
 * @param	sessionPrivileges	string		session privileges, will be ignored if a similar privilege is already defined on the application token or the privilege is server reserved (optional, default: null).
 * @return	KalturaSessionInfo.
 * @return	.
 */
KalturaAppTokenService.prototype.startSession = function(callback, id, tokenHash, userId, type, expiry, sessionPrivileges){
	if(!userId)
		userId = null;
	if(!type)
		type = null;
	if(!expiry)
		expiry = null;
	if(!sessionPrivileges)
		sessionPrivileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "tokenHash", tokenHash);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "sessionPrivileges", sessionPrivileges);
	this.client.queueServiceActionCall("apptoken", "startSession", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update application authentication token by ID.
 * @param	id	string		 (optional).
 * @param	appToken	KalturaAppToken		 (optional).
 * @return	KalturaAppToken.
 * @return	.
 */
KalturaAppTokenService.prototype.update = function(callback, id, appToken){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "appToken", toParams(appToken));
	this.client.queueServiceActionCall("apptoken", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action	add	Generic add entry, should be used when the uploaded entry type is not known..
 * @action	addContent	Attach content resource to entry in status NO_MEDIA.
 * @action	addFromUploadedFile	Generic add entry using an uploaded file, should be used when the uploaded entry type is not known..
 * @action	anonymousRank	Anonymously rank an entry, no validation is done on duplicate rankings..
 * @action	approve	Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable)..
 * @action	bulkDelete	.
 * @action	clone	Clone an entry with optional attributes to apply to the clone.
 * @action	count	Count base entries by filter..
 * @action	delete	Delete an entry..
 * @action	export	.
 * @action	exportToCsv	add batch job that sends an email with a link to download an updated CSV that contains list of entries.
 * @action	flag	Flag inappropriate entry for moderation..
 * @action	get	Get base entry by ID..
 * @action	getByIds	Get an array of KalturaBaseEntry objects by a comma-separated list of ids..
 * @action	getContextData	This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information..
 * @action	getPlaybackContext	This action delivers all data relevant for player.
 * @action	getRemotePaths	Get remote storage existing paths for the asset..
 * @action	index	Index an entry by id..
 * @action	list	List base entries by filter with paging support..
 * @action	listByReferenceId	List base entries by filter according to reference id.
 * @action	listFlags	List all pending flags for the entry..
 * @action	recycle	Move the entry to the recycle bin.
 * @action	reject	Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable)..
 * @action	restoreRecycled	Restore the entry from the recycle bin.
 * @action	update	Update base entry. Only the properties that were set will be updated..
 * @action	updateContent	Update the content resource associated with the entry..
 * @action	updateThumbnailFromSourceEntry	Update entry thumbnail from a different entry by a specified time offset (in seconds)..
 * @action	updateThumbnailFromUrl	Update entry thumbnail using URL..
 * @action	updateThumbnailJpeg	Update entry thumbnail using a raw jpeg file..
 * @action	upload	Upload a file to Kaltura, that can be used to create an entry..
*/
function KalturaBaseEntryService(client){
	this.init(client);
}
KalturaBaseEntryService.inheritsFrom (KalturaServiceBase);
/**
 * Generic add entry, should be used when the uploaded entry type is not known..
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	type	string		 (optional, enum: KalturaEntryType, default: null).
 * @return	KalturaBaseEntry.
 * @return	.
 */
KalturaBaseEntryService.prototype.add = function(callback, entry, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseentry", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Attach content resource to entry in status NO_MEDIA.
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaResource		 (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 */
KalturaBaseEntryService.prototype.addContent = function(callback, entryId, resource){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("baseentry", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known..
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	uploadTokenId	string		 (optional).
 * @param	type	string		 (optional, enum: KalturaEntryType, default: null).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseentry", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings..
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("baseentry", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable)..
 * @param	entryId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaBaseEntryFilter		 (optional).
 * @return	int.
 * @return	.
 */
KalturaBaseEntryService.prototype.bulkDelete = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("baseentry", "bulkDelete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an entry with optional attributes to apply to the clone.
 * @param	entryId	string		Id of entry to clone (optional).
 * @param	cloneOptions	array		 (optional, default: null).
 * @return	KalturaBaseEntry.
 * @return	.
 */
KalturaBaseEntryService.prototype.cloneAction = function(callback, entryId, cloneOptions){
	if(!cloneOptions)
		cloneOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if(cloneOptions != null)
	for(var index in cloneOptions)
	{
		var obj = cloneOptions[index];
		this.client.addParam(kparams, "cloneOptions:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("baseentry", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count base entries by filter..
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @return	int.
 */
KalturaBaseEntryService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("baseentry", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an entry..
 * @param	entryId	string		Entry id to delete (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.exportAction = function(callback, entryId, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("baseentry", "export", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * add batch job that sends an email with a link to download an updated CSV that contains list of entries.
 * @param	filter	KalturaBaseEntryFilter		A filter used to exclude specific entries (optional, default: null).
 * @param	metadataProfileId	int		 (optional, default: null).
 * @param	additionalFields	array		 (optional, default: null).
 * @param	mappedFields	array		mapping between field headline and its mapped value (optional, default: null).
 * @param	options	KalturaExportToCsvOptions		 (optional, default: null).
 * @return	string.
 */
KalturaBaseEntryService.prototype.exportToCsv = function(callback, filter, metadataProfileId, additionalFields, mappedFields, options){
	if(!filter)
		filter = null;
	if(!metadataProfileId)
		metadataProfileId = null;
	if(!additionalFields)
		additionalFields = null;
	if(!mappedFields)
		mappedFields = null;
	if(!options)
		options = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	if(additionalFields != null)
	for(var index in additionalFields)
	{
		var obj = additionalFields[index];
		this.client.addParam(kparams, "additionalFields:" + index, toParams(obj));
	}
	if(mappedFields != null)
	for(var index in mappedFields)
	{
		var obj = mappedFields[index];
		this.client.addParam(kparams, "mappedFields:" + index, toParams(obj));
	}
	if (options != null)
		this.client.addParam(kparams, "options", toParams(options));
	this.client.queueServiceActionCall("baseentry", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate entry for moderation..
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("baseentry", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by ID..
 * @param	entryId	string		Entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("baseentry", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get an array of KalturaBaseEntry objects by a comma-separated list of ids..
 * @param	entryIds	string		Comma separated string of entry ids (optional).
 * @return	array.
 */
KalturaBaseEntryService.prototype.getByIds = function(callback, entryIds){
	var kparams = new Object();
	this.client.addParam(kparams, "entryIds", entryIds);
	this.client.queueServiceActionCall("baseentry", "getByIds", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information..
 * @param	entryId	string		 (optional).
 * @param	contextDataParams	KalturaEntryContextDataParams		 (optional).
 * @return	KalturaEntryContextDataResult.
 */
KalturaBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "contextDataParams", toParams(contextDataParams));
	this.client.queueServiceActionCall("baseentry", "getContextData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This action delivers all data relevant for player.
 * @param	entryId	string		 (optional).
 * @param	contextDataParams	KalturaPlaybackContextOptions		 (optional).
 * @return	KalturaPlaybackContext.
 * @return	.
 */
KalturaBaseEntryService.prototype.getPlaybackContext = function(callback, entryId, contextDataParams){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "contextDataParams", toParams(contextDataParams));
	this.client.queueServiceActionCall("baseentry", "getPlaybackContext", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset..
 * @param	entryId	string		 (optional).
 * @return	KalturaRemotePathListResponse.
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.getRemotePaths = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "getRemotePaths", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index an entry by id..
 * @param	id	string		 (optional).
 * @param	shouldUpdate	bool		 (optional, default: true).
 * @return	int.
 */
KalturaBaseEntryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate)
		shouldUpdate = true;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("baseentry", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List base entries by filter with paging support..
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseentry", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List base entries by filter according to reference id.
 * @param	refId	string		Entry Reference ID (optional).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaBaseEntryListResponse.
 * @return	.
 */
KalturaBaseEntryService.prototype.listByReferenceId = function(callback, refId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "refId", refId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseentry", "listByReferenceId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the entry..
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseentry", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Move the entry to the recycle bin.
 * @param	entryId	string		 (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.recycle = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "recycle", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable)..
 * @param	entryId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Restore the entry from the recycle bin.
 * @param	entryId	string		 (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.restoreRecycled = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseentry", "restoreRecycled", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update base entry. Only the properties that were set will be updated..
 * @param	entryId	string		Entry id to update (optional).
 * @param	baseEntry	KalturaBaseEntry		Base entry metadata to update (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 */
KalturaBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "baseEntry", toParams(baseEntry));
	this.client.queueServiceActionCall("baseentry", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update the content resource associated with the entry..
 * @param	entryId	string		Entry id to update (optional).
 * @param	resource	KalturaResource		Resource to be used to replace entry content (optional).
 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null).
 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null).
 * @return	KalturaBaseEntry.
 * @return	.
 */
KalturaBaseEntryService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!advancedOptions)
		advancedOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if (advancedOptions != null)
		this.client.addParam(kparams, "advancedOptions", toParams(advancedOptions));
	this.client.queueServiceActionCall("baseentry", "updateContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail from a different entry by a specified time offset (in seconds)..
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.queueServiceActionCall("baseentry", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using URL..
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("baseentry", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using a raw jpeg file..
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 * @return	.
 */
KalturaBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseentry", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file to Kaltura, that can be used to create an entry..
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaBaseEntryService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseentry", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action	abort	Aborts the bulk upload and all its child jobs.
 * @action	add	Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
 * @action	get	Get bulk upload batch job by id.
 * @action	list	List bulk upload batch jobs.
*/
function KalturaBulkUploadService(client){
	this.init(client);
}
KalturaBulkUploadService.inheritsFrom (KalturaServiceBase);
/**
 * Aborts the bulk upload and all its child jobs.
 * @param	id	int		job id (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.abort = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkupload", "abort", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
 * @param	conversionProfileId	int		Conversion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param	csvFileData	file		bulk upload file (optional).
 * @param	bulkUploadType	string		 (optional, enum: KalturaBulkUploadType, default: null).
 * @param	uploadedBy	string		 (optional, default: null).
 * @param	fileName	string		Friendly name of the file, used to be recognized later in the logs. (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
	if(!bulkUploadType)
		bulkUploadType = null;
	if(!uploadedBy)
		uploadedBy = null;
	if(!fileName)
		fileName = null;
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	kfiles = new Object();
	this.client.addParam(kfiles, "csvFileData", csvFileData);
	this.client.addParam(kparams, "bulkUploadType", bulkUploadType);
	this.client.addParam(kparams, "uploadedBy", uploadedBy);
	this.client.addParam(kparams, "fileName", fileName);
	this.client.queueServiceActionCall("bulkupload", "add", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get bulk upload batch job by id.
 * @param	id	int		 (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkupload", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List bulk upload batch jobs.
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBulkUploadListResponse.
 */
KalturaBulkUploadService.prototype.listAction = function(callback, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("bulkupload", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: categoryEntry.
 * The available service actions:
 * @action	activate	activate CategoryEntry when it is pending moderation.
 * @action	add	Add new CategoryEntry.
 * @action	addFromBulkUpload	.
 * @action	delete	Delete CategoryEntry.
 * @action	index	Index CategoryEntry by Id.
 * @action	list	List all categoryEntry.
 * @action	reject	activate CategoryEntry when it is pending moderation.
 * @action	syncPrivacyContext	update privacy context from the category.
 * @action	updateStatusFromBulk	.
*/
function KalturaCategoryEntryService(client){
	this.init(client);
}
KalturaCategoryEntryService.inheritsFrom (KalturaServiceBase);
/**
 * activate CategoryEntry when it is pending moderation.
 * @param	entryId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.activate = function(callback, entryId, categoryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.queueServiceActionCall("categoryentry", "activate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new CategoryEntry.
 * @param	categoryEntry	KalturaCategoryEntry		 (optional).
 * @return	KalturaCategoryEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.add = function(callback, categoryEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryEntry", toParams(categoryEntry));
	this.client.queueServiceActionCall("categoryentry", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	bulkUploadData	KalturaBulkServiceData		 (optional).
 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaCategoryEntryService.prototype.addFromBulkUpload = function(callback, bulkUploadData, bulkUploadCategoryEntryData){
	if(!bulkUploadCategoryEntryData)
		bulkUploadCategoryEntryData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadCategoryEntryData != null)
		this.client.addParam(kparams, "bulkUploadCategoryEntryData", toParams(bulkUploadCategoryEntryData));
	this.client.queueServiceActionCall("categoryentry", "addFromBulkUpload", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete CategoryEntry.
 * @param	entryId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.deleteAction = function(callback, entryId, categoryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.queueServiceActionCall("categoryentry", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index CategoryEntry by Id.
 * @param	entryId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @param	shouldUpdate	bool		 (optional, default: true).
 * @return	int.
 * @return	.
 */
KalturaCategoryEntryService.prototype.index = function(callback, entryId, categoryId, shouldUpdate){
	if(!shouldUpdate)
		shouldUpdate = true;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("categoryentry", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all categoryEntry.
 * @param	filter	KalturaCategoryEntryFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCategoryEntryListResponse.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("categoryentry", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * activate CategoryEntry when it is pending moderation.
 * @param	entryId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.reject = function(callback, entryId, categoryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.queueServiceActionCall("categoryentry", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * update privacy context from the category.
 * @param	entryId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCategoryEntryService.prototype.syncPrivacyContext = function(callback, entryId, categoryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.queueServiceActionCall("categoryentry", "syncPrivacyContext", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadCategoryEntryData	KalturaBulkUploadCategoryEntryData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaCategoryEntryService.prototype.updateStatusFromBulk = function(callback, fileData, bulkUploadData, bulkUploadCategoryEntryData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadCategoryEntryData)
		bulkUploadCategoryEntryData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadCategoryEntryData != null)
		this.client.addParam(kparams, "bulkUploadCategoryEntryData", toParams(bulkUploadCategoryEntryData));
	this.client.queueServiceActionCall("categoryentry", "updateStatusFromBulk", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action	add	Add new Category.
 * @action	addFromBulkUpload	.
 * @action	clone	Clone Category.
 * @action	delete	Delete a Category.
 * @action	exportToCsv	Creates a batch job that sends an email with a link to download a CSV containing a list of categories.
 * @action	get	Get Category by id.
 * @action	index	Index Category by id.
 * @action	list	List all categories.
 * @action	move	Move categories that belong to the same parent category to a target category - enabled only for ks with disable entitlement.
 * @action	unlockCategories	Unlock categories.
 * @action	update	Update Category.
*/
function KalturaCategoryService(client){
	this.init(client);
}
KalturaCategoryService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Category.
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.add = function(callback, category){
	var kparams = new Object();
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadCategoryData	KalturaBulkUploadCategoryData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaCategoryService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadCategoryData)
		bulkUploadCategoryData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadCategoryData != null)
		this.client.addParam(kparams, "bulkUploadCategoryData", toParams(bulkUploadCategoryData));
	this.client.queueServiceActionCall("category", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone Category.
 * @param	categoryId	int		 (optional).
 * @param	fromPartnerId	int		 (optional).
 * @param	parentCategoryId	int		 (optional, default: null).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.cloneAction = function(callback, categoryId, fromPartnerId, parentCategoryId){
	if(!parentCategoryId)
		parentCategoryId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "fromPartnerId", fromPartnerId);
	this.client.addParam(kparams, "parentCategoryId", parentCategoryId);
	this.client.queueServiceActionCall("category", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a Category.
 * @param	id	int		 (optional).
 * @param	moveEntriesToParentCategory	int		 (optional, enum: KalturaNullableBoolean, default: 1).
 * @return	.
 */
KalturaCategoryService.prototype.deleteAction = function(callback, id, moveEntriesToParentCategory){
	if(!moveEntriesToParentCategory)
		moveEntriesToParentCategory = 1;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "moveEntriesToParentCategory", moveEntriesToParentCategory);
	this.client.queueServiceActionCall("category", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Creates a batch job that sends an email with a link to download a CSV containing a list of categories.
 * @param	filter	KalturaCategoryFilter		A filter used to exclude specific categories (optional, default: null).
 * @param	metadataProfileId	int		 (optional, default: null).
 * @param	additionalFields	array		 (optional, default: null).
 * @param	mappedFields	array		mapping between field headline and its mapped value (optional, default: null).
 * @param	options	KalturaExportToCsvOptions		 (optional, default: null).
 * @return	string.
 */
KalturaCategoryService.prototype.exportToCsv = function(callback, filter, metadataProfileId, additionalFields, mappedFields, options){
	if(!filter)
		filter = null;
	if(!metadataProfileId)
		metadataProfileId = null;
	if(!additionalFields)
		additionalFields = null;
	if(!mappedFields)
		mappedFields = null;
	if(!options)
		options = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	if(additionalFields != null)
	for(var index in additionalFields)
	{
		var obj = additionalFields[index];
		this.client.addParam(kparams, "additionalFields:" + index, toParams(obj));
	}
	if(mappedFields != null)
	for(var index in mappedFields)
	{
		var obj = mappedFields[index];
		this.client.addParam(kparams, "mappedFields:" + index, toParams(obj));
	}
	if (options != null)
		this.client.addParam(kparams, "options", toParams(options));
	this.client.queueServiceActionCall("category", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Category by id.
 * @param	id	int		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("category", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index Category by id.
 * @param	id	int		 (optional).
 * @param	shouldUpdate	bool		 (optional, default: true).
 * @return	int.
 */
KalturaCategoryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate)
		shouldUpdate = true;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("category", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all categories.
 * @param	filter	KalturaCategoryFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("category", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Move categories that belong to the same parent category to a target category - enabled only for ks with disable entitlement.
 * @param	categoryIds	string		 (optional).
 * @param	targetCategoryParentId	int		 (optional).
 * @return	bool.
 */
KalturaCategoryService.prototype.move = function(callback, categoryIds, targetCategoryParentId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryIds", categoryIds);
	this.client.addParam(kparams, "targetCategoryParentId", targetCategoryParentId);
	this.client.queueServiceActionCall("category", "move", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Unlock categories.
 * @return	.
 */
KalturaCategoryService.prototype.unlockCategories = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("category", "unlockCategories", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Category.
 * @param	id	int		 (optional).
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.update = function(callback, id, category){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: categoryUser.
 * The available service actions:
 * @action	activate	activate CategoryUser.
 * @action	add	Add new CategoryUser.
 * @action	addFromBulkUpload	.
 * @action	copyFromCategory	Copy all member from parent category.
 * @action	deactivate	reject CategoryUser.
 * @action	delete	Delete a CategoryUser.
 * @action	get	Get CategoryUser by id.
 * @action	index	Index CategoryUser by userid and category id.
 * @action	list	List all categories.
 * @action	update	Update CategoryUser by id.
*/
function KalturaCategoryUserService(client){
	this.init(client);
}
KalturaCategoryUserService.inheritsFrom (KalturaServiceBase);
/**
 * activate CategoryUser.
 * @param	categoryId	int		 (optional).
 * @param	userId	string		 (optional).
 * @return	KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.activate = function(callback, categoryId, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("categoryuser", "activate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new CategoryUser.
 * @param	categoryUser	KalturaCategoryUser		 (optional).
 * @return	KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.add = function(callback, categoryUser){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryUser", toParams(categoryUser));
	this.client.queueServiceActionCall("categoryuser", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadCategoryUserData	KalturaBulkUploadCategoryUserData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaCategoryUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryUserData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadCategoryUserData)
		bulkUploadCategoryUserData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadCategoryUserData != null)
		this.client.addParam(kparams, "bulkUploadCategoryUserData", toParams(bulkUploadCategoryUserData));
	this.client.queueServiceActionCall("categoryuser", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy all member from parent category.
 * @param	categoryId	int		 (optional).
 * @return	.
 */
KalturaCategoryUserService.prototype.copyFromCategory = function(callback, categoryId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.queueServiceActionCall("categoryuser", "copyFromCategory", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * reject CategoryUser.
 * @param	categoryId	int		 (optional).
 * @param	userId	string		 (optional).
 * @return	KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.deactivate = function(callback, categoryId, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("categoryuser", "deactivate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a CategoryUser.
 * @param	categoryId	int		 (optional).
 * @param	userId	string		 (optional).
 * @return	.
 */
KalturaCategoryUserService.prototype.deleteAction = function(callback, categoryId, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("categoryuser", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get CategoryUser by id.
 * @param	categoryId	int		 (optional).
 * @param	userId	string		 (optional).
 * @return	KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.get = function(callback, categoryId, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("categoryuser", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index CategoryUser by userid and category id.
 * @param	userId	string		 (optional).
 * @param	categoryId	int		 (optional).
 * @param	shouldUpdate	bool		 (optional, default: true).
 * @return	int.
 * @return	.
 */
KalturaCategoryUserService.prototype.index = function(callback, userId, categoryId, shouldUpdate){
	if(!shouldUpdate)
		shouldUpdate = true;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("categoryuser", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all categories.
 * @param	filter	KalturaCategoryUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCategoryUserListResponse.
 * @return	.
 */
KalturaCategoryUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("categoryuser", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update CategoryUser by id.
 * @param	categoryId	int		 (optional).
 * @param	userId	string		 (optional).
 * @param	categoryUser	KalturaCategoryUser		 (optional).
 * @param	override	bool		- to override manual changes (optional, default: false).
 * @return	KalturaCategoryUser.
 */
KalturaCategoryUserService.prototype.update = function(callback, categoryId, userId, categoryUser, override){
	if(!override)
		override = false;
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "categoryUser", toParams(categoryUser));
	this.client.addParam(kparams, "override", override);
	this.client.queueServiceActionCall("categoryuser", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 * The available service actions:
 * @action	list	Lists asset parmas of conversion profile by ID.
 * @action	update	Update asset parmas of conversion profile by ID.
*/
function KalturaConversionProfileAssetParamsService(client){
	this.init(client);
}
KalturaConversionProfileAssetParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Lists asset parmas of conversion profile by ID.
 * @param	filter	KalturaConversionProfileAssetParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaConversionProfileAssetParamsListResponse.
 */
KalturaConversionProfileAssetParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("conversionprofileassetparams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update asset parmas of conversion profile by ID.
 * @param	conversionProfileId	int		 (optional).
 * @param	assetParamsId	int		 (optional).
 * @param	conversionProfileAssetParams	KalturaConversionProfileAssetParams		 (optional).
 * @return	KalturaConversionProfileAssetParams.
 */
KalturaConversionProfileAssetParamsService.prototype.update = function(callback, conversionProfileId, assetParamsId, conversionProfileAssetParams){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.addParam(kparams, "assetParamsId", assetParamsId);
	this.client.addParam(kparams, "conversionProfileAssetParams", toParams(conversionProfileAssetParams));
	this.client.queueServiceActionCall("conversionprofileassetparams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action	add	Add new Conversion Profile.
 * @action	delete	Delete Conversion Profile by ID.
 * @action	get	Get Conversion Profile by ID.
 * @action	getDefault	Get the partner's default conversion profile.
 * @action	list	List Conversion Profiles by filter with paging support.
 * @action	setAsDefault	Set Conversion Profile to be the partner default.
 * @action	update	Update Conversion Profile by ID.
*/
function KalturaConversionProfileService(client){
	this.init(client);
}
KalturaConversionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Conversion Profile.
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 * @return	.
 */
KalturaConversionProfileService.prototype.add = function(callback, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Conversion Profile by ID.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaConversionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Conversion Profile by ID.
 * @param	id	int		 (optional).
 * @return	KalturaConversionProfile.
 * @return	.
 */
KalturaConversionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the partner's default conversion profile.
 * @param	type	string		 (optional, enum: KalturaConversionProfileType, default: null).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.getDefault = function(callback, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("conversionprofile", "getDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Conversion Profiles by filter with paging support.
 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaConversionProfileListResponse.
 */
KalturaConversionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("conversionprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set Conversion Profile to be the partner default.
 * @param	id	int		 (optional).
 * @return	KalturaConversionProfile.
 * @return	.
 */
KalturaConversionProfileService.prototype.setAsDefault = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionprofile", "setAsDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Conversion Profile by ID.
 * @param	id	int		 (optional).
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 * @return	.
 * @return	.
 */
KalturaConversionProfileService.prototype.update = function(callback, id, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action	add	Adds a new data entry.
 * @action	addContent	Update the dataContent of data entry using a resource.
 * @action	delete	Delete a data entry..
 * @action	get	Get data entry by ID..
 * @action	list	List data entries by filter with paging support..
 * @action	update	Update data entry. Only the properties that were set will be updated..
*/
function KalturaDataService(client){
	this.init(client);
}
KalturaDataService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new data entry.
 * @param	dataEntry	KalturaDataEntry		Data entry (optional).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.add = function(callback, dataEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "dataEntry", toParams(dataEntry));
	this.client.queueServiceActionCall("data", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update the dataContent of data entry using a resource.
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaGenericDataCenterContentResource		 (optional).
 * @return	string.
 * @return	.
 */
KalturaDataService.prototype.addContent = function(callback, entryId, resource){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("data", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a data entry..
 * @param	entryId	string		Data entry id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaDataService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("data", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get data entry by ID..
 * @param	entryId	string		Data entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDataEntry.
 * @return	.
 */
KalturaDataService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("data", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List data entries by filter with paging support..
 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDataListResponse.
 */
KalturaDataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("data", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update data entry. Only the properties that were set will be updated..
 * @param	entryId	string		Data entry id to update (optional).
 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional).
 * @return	KalturaDataEntry.
 * @return	.
 */
KalturaDataService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("data", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: deliveryProfile.
 * The available service actions:
 * @action	add	Add new delivery..
 * @action	clone	Add delivery based on existing delivery.
 *		Must provide valid sourceDeliveryId.
 * @action	get	Get delivery by id.
 * @action	list	Retrieve a list of available delivery depends on the filter given.
 * @action	update	Update existing delivery profile.
*/
function KalturaDeliveryProfileService(client){
	this.init(client);
}
KalturaDeliveryProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new delivery..
 * @param	delivery	KalturaDeliveryProfile		 (optional).
 * @return	KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.add = function(callback, delivery){
	var kparams = new Object();
	this.client.addParam(kparams, "delivery", toParams(delivery));
	this.client.queueServiceActionCall("deliveryprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add delivery based on existing delivery.
 *		Must provide valid sourceDeliveryId.
 * @param	deliveryId	int		 (optional).
 * @return	KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.cloneAction = function(callback, deliveryId){
	var kparams = new Object();
	this.client.addParam(kparams, "deliveryId", deliveryId);
	this.client.queueServiceActionCall("deliveryprofile", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get delivery by id.
 * @param	id	string		 (optional).
 * @return	KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("deliveryprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available delivery depends on the filter given.
 * @param	filter	KalturaDeliveryProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDeliveryProfileListResponse.
 */
KalturaDeliveryProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("deliveryprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing delivery profile.
 * @param	id	string		 (optional).
 * @param	delivery	KalturaDeliveryProfile		 (optional).
 * @return	KalturaDeliveryProfile.
 */
KalturaDeliveryProfileService.prototype.update = function(callback, id, delivery){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "delivery", toParams(delivery));
	this.client.queueServiceActionCall("deliveryprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action	add	EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action	addMediaEntry	add KalturaMediaEntry from email ingestion.
 * @action	delete	Delete an existing EmailIngestionProfile.
 * @action	get	Retrieve a EmailIngestionProfile by id.
 * @action	getByEmailAddress	Retrieve a EmailIngestionProfile by email address.
 * @action	update	Update an existing EmailIngestionProfile.
*/
function KalturaEmailIngestionProfileService(client){
	this.init(client);
}
KalturaEmailIngestionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional).
 * @return	KalturaEmailIngestionProfile.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("emailingestionprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * add KalturaMediaEntry from email ingestion.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @param	emailProfId	int		 (optional).
 * @param	fromAddress	string		 (optional).
 * @param	emailMsgId	string		 (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "emailProfId", emailProfId);
	this.client.addParam(kparams, "fromAddress", fromAddress);
	this.client.addParam(kparams, "emailMsgId", emailMsgId);
	this.client.queueServiceActionCall("emailingestionprofile", "addMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("emailingestionprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param	id	int		 (optional).
 * @return	KalturaEmailIngestionProfile.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("emailingestionprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param	emailAddress	string		 (optional).
 * @return	KalturaEmailIngestionProfile.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
	var kparams = new Object();
	this.client.addParam(kparams, "emailAddress", emailAddress);
	this.client.queueServiceActionCall("emailingestionprofile", "getByEmailAddress", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional).
 * @return	KalturaEmailIngestionProfile.
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("emailingestionprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: entryServerNode.
 * The available service actions:
 * @action	get	.
 * @action	list	.
 * @action	update	.
 * @action	updateStatus	.
 * @action	validateRegisteredEntryServerNode	Validates server node still registered on entry.
*/
function KalturaEntryServerNodeService(client){
	this.init(client);
}
KalturaEntryServerNodeService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	id	string		 (optional).
 * @return	KalturaEntryServerNode.
 */
KalturaEntryServerNodeService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryservernode", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaEntryServerNodeFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEntryServerNodeListResponse.
 */
KalturaEntryServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("entryservernode", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	int		 (optional).
 * @param	entryServerNode	KalturaEntryServerNode		 (optional).
 * @return	KalturaEntryServerNode.
 */
KalturaEntryServerNodeService.prototype.update = function(callback, id, entryServerNode){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryServerNode", toParams(entryServerNode));
	this.client.queueServiceActionCall("entryservernode", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	string		 (optional).
 * @param	status	int		 (optional, enum: KalturaEntryServerNodeStatus).
 * @return	KalturaEntryServerNode.
 */
KalturaEntryServerNodeService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("entryservernode", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validates server node still registered on entry.
 * @param	id	int		entry server node id (optional).
 * @return	.
 */
KalturaEntryServerNodeService.prototype.validateRegisteredEntryServerNode = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryservernode", "validateRegisteredEntryServerNode", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: exportcsv.
 * The available service actions:
 * @action	serveCsv	Will serve a requested CSV.
*/
function KalturaExportcsvService(client){
	this.init(client);
}
KalturaExportcsvService.inheritsFrom (KalturaServiceBase);
/**
 * Will serve a requested CSV.
 * @param	id	string		- the requested file id (optional).
 * @return	string.
 */
KalturaExportcsvService.prototype.serveCsv = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("exportcsv", "serveCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: fileAsset.
 * The available service actions:
 * @action	add	Add new file asset.
 * @action	delete	Delete file asset by id.
 * @action	get	Get file asset by id.
 * @action	list	List file assets by filter and pager.
 * @action	setContent	Set content of file asset.
 * @action	update	Update file asset by id.
*/
function KalturaFileAssetService(client){
	this.init(client);
}
KalturaFileAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add new file asset.
 * @param	fileAsset	KalturaFileAsset		 (optional).
 * @return	KalturaFileAsset.
 */
KalturaFileAssetService.prototype.add = function(callback, fileAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "fileAsset", toParams(fileAsset));
	this.client.queueServiceActionCall("fileasset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete file asset by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaFileAssetService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("fileasset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get file asset by id.
 * @param	id	int		 (optional).
 * @return	KalturaFileAsset.
 * @return	.
 */
KalturaFileAssetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("fileasset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List file assets by filter and pager.
 * @param	filter	KalturaFileAssetFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFileAssetListResponse.
 */
KalturaFileAssetService.prototype.listAction = function(callback, filter, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("fileasset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set content of file asset.
 * @param	id	int		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaFileAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaFileAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("fileasset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update file asset by id.
 * @param	id	int		 (optional).
 * @param	fileAsset	KalturaFileAsset		 (optional).
 * @return	KalturaFileAsset.
 * @return	.
 */
KalturaFileAssetService.prototype.update = function(callback, id, fileAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "fileAsset", toParams(fileAsset));
	this.client.queueServiceActionCall("fileasset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action	add	Add flavor asset.
 * @action	convert	Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @action	delete	Delete Flavor Asset by ID.
 * @action	deleteLocalContent	delete all local file syncs for this asset.
 * @action	export	manually export an asset.
 * @action	get	Get Flavor Asset by ID.
 * @action	getByEntryId	Get Flavor Assets for Entry.
 * @action	getDownloadUrl	Get download URL for the Flavor Asset.
 * @action	getFlavorAssetsWithParams	Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @action	getRemotePaths	Get remote storage existing paths for the asset.
 * @action	getUrl	Get download URL for the asset.
 * @action	getWebPlayableByEntryId	Get web playable Flavor Assets for Entry.
 * @action	list	List Flavor Assets by filter and pager.
 * @action	reconvert	Reconvert Flavor Asset by ID.
 * @action	serveAdStitchCmd	serve cmd line to transcode the ad.
 * @action	setAsSource	Set a given flavor as the original flavor.
 * @action	setContent	Update content of flavor asset.
 * @action	update	Update flavor asset.
*/
function KalturaFlavorAssetService(client){
	this.init(client);
}
KalturaFlavorAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add flavor asset.
 * @param	entryId	string		 (optional).
 * @param	flavorAsset	KalturaFlavorAsset		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.add = function(callback, entryId, flavorAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorAsset", toParams(flavorAsset));
	this.client.queueServiceActionCall("flavorasset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @param	entryId	string		 (optional).
 * @param	flavorParamsId	int		 (optional).
 * @param	priority	int		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId, priority){
	if(!priority)
		priority = 0;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.addParam(kparams, "priority", priority);
	this.client.queueServiceActionCall("flavorasset", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Asset by ID.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorasset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete all local file syncs for this asset.
 * @param	assetId	string		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.deleteLocalContent = function(callback, assetId){
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.queueServiceActionCall("flavorasset", "deleteLocalContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * manually export an asset.
 * @param	assetId	string		 (optional).
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.exportAction = function(callback, assetId, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("flavorasset", "export", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Asset by ID.
 * @param	id	string		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorasset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Assets for Entry.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorasset", "getByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the Flavor Asset.
 * @param	id	string		 (optional).
 * @param	useCdn	bool		 (optional, default: false).
 * @return	string.
 */
KalturaFlavorAssetService.prototype.getDownloadUrl = function(callback, id, useCdn){
	if(!useCdn)
		useCdn = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "useCdn", useCdn);
	this.client.queueServiceActionCall("flavorasset", "getDownloadUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorasset", "getFlavorAssetsWithParams", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset.
 * @param	id	string		 (optional).
 * @return	KalturaRemotePathListResponse.
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorasset", "getRemotePaths", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the asset.
 * @param	id	string		 (optional).
 * @param	storageId	int		 (optional, default: null).
 * @param	forceProxy	bool		 (optional, default: false).
 * @param	options	KalturaFlavorAssetUrlOptions		 (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.getUrl = function(callback, id, storageId, forceProxy, options){
	if(!storageId)
		storageId = null;
	if(!forceProxy)
		forceProxy = false;
	if(!options)
		options = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "storageId", storageId);
	this.client.addParam(kparams, "forceProxy", forceProxy);
	if (options != null)
		this.client.addParam(kparams, "options", toParams(options));
	this.client.queueServiceActionCall("flavorasset", "getUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get web playable Flavor Assets for Entry.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorasset", "getWebPlayableByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Flavor Assets by filter and pager.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorAssetListResponse.
 */
KalturaFlavorAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorasset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reconvert Flavor Asset by ID.
 * @param	id	string		Flavor Asset ID (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.reconvert = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorasset", "reconvert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * serve cmd line to transcode the ad.
 * @param	assetId	string		 (optional).
 * @param	ffprobeJson	string		 (optional, default: null).
 * @param	duration	string		 (optional, default: null).
 * @return	string.
 */
KalturaFlavorAssetService.prototype.serveAdStitchCmd = function(callback, assetId, ffprobeJson, duration){
	if(!ffprobeJson)
		ffprobeJson = null;
	if(!duration)
		duration = null;
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "ffprobeJson", ffprobeJson);
	this.client.addParam(kparams, "duration", duration);
	this.client.queueServiceActionCall("flavorasset", "serveAdStitchCmd", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set a given flavor as the original flavor.
 * @param	assetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.setAsSource = function(callback, assetId){
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.queueServiceActionCall("flavorasset", "setAsSource", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of flavor asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaFlavorAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("flavorasset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update flavor asset.
 * @param	id	string		 (optional).
 * @param	flavorAsset	KalturaFlavorAsset		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 */
KalturaFlavorAssetService.prototype.update = function(callback, id, flavorAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "flavorAsset", toParams(flavorAsset));
	this.client.queueServiceActionCall("flavorasset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 * The available service actions:
 * @action	get	Get flavor params output object by ID.
 * @action	list	List flavor params output objects by filter and pager.
*/
function KalturaFlavorParamsOutputService(client){
	this.init(client);
}
KalturaFlavorParamsOutputService.inheritsFrom (KalturaServiceBase);
/**
 * Get flavor params output object by ID.
 * @param	id	int		 (optional).
 * @return	KalturaFlavorParamsOutput.
 * @return	.
 */
KalturaFlavorParamsOutputService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorparamsoutput", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List flavor params output objects by filter and pager.
 * @param	filter	KalturaFlavorParamsOutputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorParamsOutputListResponse.
 */
KalturaFlavorParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorparamsoutput", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action	add	Add new Flavor Params.
 * @action	delete	Delete Flavor Params by ID.
 * @action	get	Get Flavor Params by ID.
 * @action	getByConversionProfileId	Get Flavor Params by Conversion Profile ID.
 * @action	list	List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @action	update	Update Flavor Params by ID.
*/
function KalturaFlavorParamsService(client){
	this.init(client);
}
KalturaFlavorParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Flavor Params.
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.add = function(callback, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorparams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Params by ID.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaFlavorParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorparams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by ID.
 * @param	id	int		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorparams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by Conversion Profile ID.
 * @param	conversionProfileId	int		 (optional).
 * @return	array.
 */
KalturaFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("flavorparams", "getByConversionProfileId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorParamsListResponse.
 */
KalturaFlavorParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorparams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Flavor Params by ID.
 * @param	id	int		 (optional).
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.update = function(callback, id, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorparams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: groupUser.
 * The available service actions:
 * @action	add	Add new GroupUser.
 * @action	delete	delete by userId and groupId.
 * @action	list	List all GroupUsers.
 * @action	sync	sync by userId and groupIds.
 * @action	update	update GroupUser.
*/
function KalturaGroupUserService(client){
	this.init(client);
}
KalturaGroupUserService.inheritsFrom (KalturaServiceBase);
/**
 * Add new GroupUser.
 * @param	groupUser	KalturaGroupUser		 (optional).
 * @return	KalturaGroupUser.
 */
KalturaGroupUserService.prototype.add = function(callback, groupUser){
	var kparams = new Object();
	this.client.addParam(kparams, "groupUser", toParams(groupUser));
	this.client.queueServiceActionCall("groupuser", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete by userId and groupId.
 * @param	userId	string		 (optional).
 * @param	groupId	string		 (optional).
 * @return	.
 */
KalturaGroupUserService.prototype.deleteAction = function(callback, userId, groupId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "groupId", groupId);
	this.client.queueServiceActionCall("groupuser", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all GroupUsers.
 * @param	filter	KalturaGroupUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaGroupUserListResponse.
 */
KalturaGroupUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("groupuser", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * sync by userId and groupIds.
 * @param	userId	string		 (optional).
 * @param	groupIds	string		 (optional, default: null).
 * @param	removeFromExistingGroups	bool		 (optional, default: true).
 * @param	createNewGroups	bool		 (optional, default: true).
 * @return	KalturaBulkUpload.
 */
KalturaGroupUserService.prototype.sync = function(callback, userId, groupIds, removeFromExistingGroups, createNewGroups){
	if(!groupIds)
		groupIds = null;
	if(!removeFromExistingGroups)
		removeFromExistingGroups = true;
	if(!createNewGroups)
		createNewGroups = true;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "groupIds", groupIds);
	this.client.addParam(kparams, "removeFromExistingGroups", removeFromExistingGroups);
	this.client.addParam(kparams, "createNewGroups", createNewGroups);
	this.client.queueServiceActionCall("groupuser", "sync", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * update GroupUser.
 * @param	groupUserId	string		 (optional).
 * @param	groupUser	KalturaGroupUser		Id (optional).
 * @return	KalturaGroupUser.
 */
KalturaGroupUserService.prototype.update = function(callback, groupUserId, groupUser){
	var kparams = new Object();
	this.client.addParam(kparams, "groupUserId", groupUserId);
	this.client.addParam(kparams, "groupUser", toParams(groupUser));
	this.client.queueServiceActionCall("groupuser", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveChannelSegment.
 * The available service actions:
 * @action	add	Add new live channel segment.
 * @action	delete	Delete live channel segment by id.
 * @action	get	Get live channel segment by id.
 * @action	list	List live channel segments by filter and pager.
 * @action	update	Update live channel segment by id.
*/
function KalturaLiveChannelSegmentService(client){
	this.init(client);
}
KalturaLiveChannelSegmentService.inheritsFrom (KalturaServiceBase);
/**
 * Add new live channel segment.
 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional).
 * @return	KalturaLiveChannelSegment.
 */
KalturaLiveChannelSegmentService.prototype.add = function(callback, liveChannelSegment){
	var kparams = new Object();
	this.client.addParam(kparams, "liveChannelSegment", toParams(liveChannelSegment));
	this.client.queueServiceActionCall("livechannelsegment", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete live channel segment by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaLiveChannelSegmentService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livechannelsegment", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get live channel segment by id.
 * @param	id	int		 (optional).
 * @return	KalturaLiveChannelSegment.
 * @return	.
 */
KalturaLiveChannelSegmentService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livechannelsegment", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List live channel segments by filter and pager.
 * @param	filter	KalturaLiveChannelSegmentFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaLiveChannelSegmentListResponse.
 */
KalturaLiveChannelSegmentService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("livechannelsegment", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live channel segment by id.
 * @param	id	int		 (optional).
 * @param	liveChannelSegment	KalturaLiveChannelSegment		 (optional).
 * @return	KalturaLiveChannelSegment.
 * @return	.
 */
KalturaLiveChannelSegmentService.prototype.update = function(callback, id, liveChannelSegment){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "liveChannelSegment", toParams(liveChannelSegment));
	this.client.queueServiceActionCall("livechannelsegment", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveChannel.
 * The available service actions:
 * @action	add	Adds new live channel..
 * @action	appendRecording	Append recorded video to live entry.
 * @action	createRecordedEntry	Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
 * @action	delete	Delete a live channel..
 * @action	get	Get live channel by ID..
 * @action	isLive	Delivering the status of a live channel (on-air/offline).
 * @action	list	List live channels by filter with paging support..
 * @action	registerMediaServer	Register media server to live entry.
 * @action	setRecordedContent	Set recorded video to live entry.
 * @action	unregisterMediaServer	Unregister media server from live entry.
 * @action	update	Update live channel. Only the properties that were set will be updated..
 * @action	validateRegisteredMediaServers	Validates all registered media servers.
*/
function KalturaLiveChannelService(client){
	this.init(client);
}
KalturaLiveChannelService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new live channel..
 * @param	liveChannel	KalturaLiveChannel		Live channel metadata (optional).
 * @return	KalturaLiveChannel.
 */
KalturaLiveChannelService.prototype.add = function(callback, liveChannel){
	var kparams = new Object();
	this.client.addParam(kparams, "liveChannel", toParams(liveChannel));
	this.client.queueServiceActionCall("livechannel", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Append recorded video to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	assetId	string		Live asset id (optional).
 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType).
 * @param	resource	KalturaDataCenterContentResource		 (optional).
 * @param	duration	float		in seconds (optional).
 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return	KalturaLiveEntry.
 * @return	.
 */
KalturaLiveChannelService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk)
		isLastChunk = false;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "duration", duration);
	this.client.addParam(kparams, "isLastChunk", isLastChunk);
	this.client.queueServiceActionCall("livechannel", "appendRecording", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
 * @param	entryId	string		Live entry id (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus).
 * @return	KalturaLiveEntry.
 */
KalturaLiveChannelService.prototype.createRecordedEntry = function(callback, entryId, mediaServerIndex, liveEntryStatus){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "liveEntryStatus", liveEntryStatus);
	this.client.queueServiceActionCall("livechannel", "createRecordedEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a live channel..
 * @param	id	string		Live channel id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaLiveChannelService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livechannel", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get live channel by ID..
 * @param	id	string		Live channel id (optional).
 * @return	KalturaLiveChannel.
 * @return	.
 */
KalturaLiveChannelService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livechannel", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delivering the status of a live channel (on-air/offline).
 * @param	id	string		ID of the live channel (optional).
 * @return	bool.
 * @return	.
 */
KalturaLiveChannelService.prototype.isLive = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livechannel", "isLive", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List live channels by filter with paging support..
 * @param	filter	KalturaLiveChannelFilter		live channel filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaLiveChannelListResponse.
 */
KalturaLiveChannelService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("livechannel", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Register media server to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	hostname	string		Media server host name (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null).
 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1).
 * @param	shouldCreateRecordedEntry	bool		 (optional, default: true).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveChannelService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
	if(!applicationName)
		applicationName = null;
	if(!liveEntryStatus)
		liveEntryStatus = 1;
	if(!shouldCreateRecordedEntry)
		shouldCreateRecordedEntry = true;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "hostname", hostname);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "applicationName", applicationName);
	this.client.addParam(kparams, "liveEntryStatus", liveEntryStatus);
	this.client.addParam(kparams, "shouldCreateRecordedEntry", shouldCreateRecordedEntry);
	this.client.queueServiceActionCall("livechannel", "registerMediaServer", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set recorded video to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType).
 * @param	resource	KalturaDataCenterContentResource		 (optional).
 * @param	duration	float		in seconds (optional).
 * @param	recordedEntryId	string		Recorded entry Id (optional, default: null).
 * @param	flavorParamsId	int		Recorded entry Id (optional, default: null).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveChannelService.prototype.setRecordedContent = function(callback, entryId, mediaServerIndex, resource, duration, recordedEntryId, flavorParamsId){
	if(!recordedEntryId)
		recordedEntryId = null;
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "duration", duration);
	this.client.addParam(kparams, "recordedEntryId", recordedEntryId);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("livechannel", "setRecordedContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Unregister media server from live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	hostname	string		Media server host name (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveChannelService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "hostname", hostname);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.queueServiceActionCall("livechannel", "unregisterMediaServer", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live channel. Only the properties that were set will be updated..
 * @param	id	string		Live channel id to update (optional).
 * @param	liveChannel	KalturaLiveChannel		Live channel metadata to update (optional).
 * @return	KalturaLiveChannel.
 * @return	.
 */
KalturaLiveChannelService.prototype.update = function(callback, id, liveChannel){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "liveChannel", toParams(liveChannel));
	this.client.queueServiceActionCall("livechannel", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validates all registered media servers.
 * @param	entryId	string		Live entry id (optional).
 * @return	.
 */
KalturaLiveChannelService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livechannel", "validateRegisteredMediaServers", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveReports.
 * The available service actions:
 * @action	exportToCsv	.
 * @action	getEvents	.
 * @action	getReport	.
 * @action	serveReport	Will serve a requested report.
*/
function KalturaLiveReportsService(client){
	this.init(client);
}
KalturaLiveReportsService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	reportType	int		 (optional, enum: KalturaLiveReportExportType).
 * @param	params	KalturaLiveReportExportParams		 (optional).
 * @return	KalturaLiveReportExportResponse.
 */
KalturaLiveReportsService.prototype.exportToCsv = function(callback, reportType, params){
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "params", toParams(params));
	this.client.queueServiceActionCall("livereports", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	reportType	string		 (optional, enum: KalturaLiveReportType).
 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	array.
 */
KalturaLiveReportsService.prototype.getEvents = function(callback, reportType, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("livereports", "getEvents", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	reportType	string		 (optional, enum: KalturaLiveReportType).
 * @param	filter	KalturaLiveReportInputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaLiveStatsListResponse.
 */
KalturaLiveReportsService.prototype.getReport = function(callback, reportType, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("livereports", "getReport", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will serve a requested report.
 * @param	id	string		- the requested id (optional).
 * @return	string.
 */
KalturaLiveReportsService.prototype.serveReport = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livereports", "serveReport", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveStats.
 * The available service actions:
 * @action	collect	Will write to the event log a single line representing the event
 *		 KalturaStatsEvent $event.
*/
function KalturaLiveStatsService(client){
	this.init(client);
}
KalturaLiveStatsService.inheritsFrom (KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *		 KalturaStatsEvent $event.
 * @param	event	KalturaLiveStatsEvent		 (optional).
 * @return	bool.
 */
KalturaLiveStatsService.prototype.collect = function(callback, event){
	var kparams = new Object();
	this.client.addParam(kparams, "event", toParams(event));
	this.client.queueServiceActionCall("livestats", "collect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action	add	Adds new live stream entry.
 *		 The entry will be queued for provision..
 * @action	addLiveStreamPushPublishConfiguration	Add new pushPublish configuration to entry.
 * @action	allocateConferenceRoom	Allocates a conference room or returns ones that has already been allocated.
 * @action	appendRecording	Append recorded video to live entry.
 * @action	archive	Archive a live entry which was recorded.
 * @action	authenticate	Authenticate live-stream entry against stream token and partner limitations.
 * @action	createPeriodicSyncPoints	Creates periodic metadata sync-point events on a live stream.
 * @action	createRecordedEntry	Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
 * @action	delete	Delete a live stream entry..
 * @action	finishConf	When the conf is finished this API should be called..
 * @action	get	Get live stream entry by ID..
 * @action	getDetails	Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action	getLiveStreamStats	Deliver information about the livestream.
 * @action	isLive	Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action	list	List live stream entries by filter with paging support..
 * @action	regenerateStreamToken	Regenerate new secure token for liveStream.
 * @action	registerConf	Mark that the conference has actually started.
 * @action	registerMediaServer	Register media server to live entry.
 * @action	removeLiveStreamPushPublishConfiguration	Remove push publish configuration from entry.
 * @action	setRecordedContent	Set recorded video to live entry.
 * @action	unregisterMediaServer	Unregister media server from live entry.
 * @action	update	Update live stream entry. Only the properties that were set will be updated..
 * @action	updateOfflineThumbnailFromUrl	Update entry thumbnail using url.
 * @action	updateOfflineThumbnailJpeg	Update live stream entry thumbnail using a raw jpeg file.
 * @action	validateRegisteredMediaServers	Validates all registered media servers.
*/
function KalturaLiveStreamService(client){
	this.init(client);
}
KalturaLiveStreamService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new live stream entry.
 *		 The entry will be queued for provision..
 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata (optional).
 * @param	sourceType	string		Live stream source type (optional, enum: KalturaSourceType, default: null).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
	if(!sourceType)
		sourceType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.addParam(kparams, "sourceType", sourceType);
	this.client.queueServiceActionCall("livestream", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new pushPublish configuration to entry.
 * @param	entryId	string		 (optional).
 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol).
 * @param	url	string		 (optional, default: null).
 * @param	liveStreamConfiguration	KalturaLiveStreamConfiguration		 (optional, default: null).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.addLiveStreamPushPublishConfiguration = function(callback, entryId, protocol, url, liveStreamConfiguration){
	if(!url)
		url = null;
	if(!liveStreamConfiguration)
		liveStreamConfiguration = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "protocol", protocol);
	this.client.addParam(kparams, "url", url);
	if (liveStreamConfiguration != null)
		this.client.addParam(kparams, "liveStreamConfiguration", toParams(liveStreamConfiguration));
	this.client.queueServiceActionCall("livestream", "addLiveStreamPushPublishConfiguration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allocates a conference room or returns ones that has already been allocated.
 * @param	entryId	string		 (optional).
 * @param	env	string		 (optional).
 * @return	KalturaRoomDetails.
 */
KalturaLiveStreamService.prototype.allocateConferenceRoom = function(callback, entryId, env){
	if(!env)
		env = "";
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "env", env);
	this.client.queueServiceActionCall("livestream", "allocateConferenceRoom", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Append recorded video to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	assetId	string		Live asset id (optional).
 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType).
 * @param	resource	KalturaDataCenterContentResource		 (optional).
 * @param	duration	float		in seconds (optional).
 * @param	isLastChunk	bool		Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return	KalturaLiveEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk)
		isLastChunk = false;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "duration", duration);
	this.client.addParam(kparams, "isLastChunk", isLastChunk);
	this.client.queueServiceActionCall("livestream", "appendRecording", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Archive a live entry which was recorded.
 * @param	liveEntryId	string		 (optional).
 * @param	vodEntryId	string		 (optional).
 * @return	bool.
 */
KalturaLiveStreamService.prototype.archive = function(callback, liveEntryId, vodEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "liveEntryId", liveEntryId);
	this.client.addParam(kparams, "vodEntryId", vodEntryId);
	this.client.queueServiceActionCall("livestream", "archive", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Authenticate live-stream entry against stream token and partner limitations.
 * @param	entryId	string		Live stream entry id (optional).
 * @param	token	string		Live stream broadcasting token (optional).
 * @param	hostname	string		Media server host name (optional, default: null).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType, default: null).
 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.authenticate = function(callback, entryId, token, hostname, mediaServerIndex, applicationName){
	if(!hostname)
		hostname = null;
	if(!mediaServerIndex)
		mediaServerIndex = null;
	if(!applicationName)
		applicationName = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "token", token);
	this.client.addParam(kparams, "hostname", hostname);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "applicationName", applicationName);
	this.client.queueServiceActionCall("livestream", "authenticate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Creates periodic metadata sync-point events on a live stream.
 * @param	entryId	string		Kaltura live-stream entry id (optional).
 * @param	interval	int		Events interval in seconds (optional).
 * @param	duration	int		Duration in seconds (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.createPeriodicSyncPoints = function(callback, entryId, interval, duration){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "interval", interval);
	this.client.addParam(kparams, "duration", duration);
	this.client.queueServiceActionCall("livestream", "createPeriodicSyncPoints", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on..
 * @param	entryId	string		Live entry id (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus).
 * @return	KalturaLiveEntry.
 */
KalturaLiveStreamService.prototype.createRecordedEntry = function(callback, entryId, mediaServerIndex, liveEntryStatus){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "liveEntryStatus", liveEntryStatus);
	this.client.queueServiceActionCall("livestream", "createRecordedEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a live stream entry..
 * @param	entryId	string		Live stream entry id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livestream", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * When the conf is finished this API should be called..
 * @param	entryId	string		 (optional).
 * @param	serverNodeId	int		 (optional, default: null).
 * @return	bool.
 */
KalturaLiveStreamService.prototype.finishConf = function(callback, entryId, serverNodeId){
	if(!serverNodeId)
		serverNodeId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("livestream", "finishConf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get live stream entry by ID..
 * @param	entryId	string		Live stream entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("livestream", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delivering the status of a live stream (on-air/offline) if it is possible.
 * @param	id	string		ID of the live stream entry (optional).
 * @return	KalturaLiveStreamDetails.
 * @return	.
 */
KalturaLiveStreamService.prototype.getDetails = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("livestream", "getDetails", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deliver information about the livestream.
 * @param	entryId	string		Id of the live stream entry (optional).
 * @return	KalturaLiveStreamStats.
 */
KalturaLiveStreamService.prototype.getLiveStreamStats = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livestream", "getLiveStreamStats", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delivering the status of a live stream (on-air/offline) if it is possible.
 * @param	id	string		ID of the live stream (optional).
 * @param	protocol	string		protocol of the stream to test. (optional, enum: KalturaPlaybackProtocol, default: null).
 * @return	bool.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.isLive = function(callback, id, protocol){
	if(!protocol)
		protocol = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "protocol", protocol);
	this.client.queueServiceActionCall("livestream", "isLive", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List live stream entries by filter with paging support..
 * @param	filter	KalturaLiveStreamEntryFilter		live stream entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaLiveStreamListResponse.
 */
KalturaLiveStreamService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("livestream", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Regenerate new secure token for liveStream.
 * @param	entryId	string		Live stream entry id to regenerate secure token for (optional).
 * @return	KalturaLiveEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.regenerateStreamToken = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livestream", "regenerateStreamToken", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark that the conference has actually started.
 * @param	entryId	string		 (optional).
 * @return	bool.
 */
KalturaLiveStreamService.prototype.registerConf = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livestream", "registerConf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Register media server to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	hostname	string		Media server host name (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @param	applicationName	string		the application to which entry is being broadcast (optional, default: null).
 * @param	liveEntryStatus	int		the status KalturaEntryServerNodeStatus::PLAYABLE | KalturaEntryServerNodeStatus::BROADCASTING (optional, enum: KalturaEntryServerNodeStatus, default: 1).
 * @param	shouldCreateRecordedEntry	bool		 (optional, default: true).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
	if(!applicationName)
		applicationName = null;
	if(!liveEntryStatus)
		liveEntryStatus = 1;
	if(!shouldCreateRecordedEntry)
		shouldCreateRecordedEntry = true;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "hostname", hostname);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "applicationName", applicationName);
	this.client.addParam(kparams, "liveEntryStatus", liveEntryStatus);
	this.client.addParam(kparams, "shouldCreateRecordedEntry", shouldCreateRecordedEntry);
	this.client.queueServiceActionCall("livestream", "registerMediaServer", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Remove push publish configuration from entry.
 * @param	entryId	string		 (optional).
 * @param	protocol	string		 (optional, enum: KalturaPlaybackProtocol).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.removeLiveStreamPushPublishConfiguration = function(callback, entryId, protocol){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "protocol", protocol);
	this.client.queueServiceActionCall("livestream", "removeLiveStreamPushPublishConfiguration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set recorded video to live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	mediaServerIndex	string		 (optional, enum: KalturaEntryServerNodeType).
 * @param	resource	KalturaDataCenterContentResource		 (optional).
 * @param	duration	float		in seconds (optional).
 * @param	recordedEntryId	string		Recorded entry Id (optional, default: null).
 * @param	flavorParamsId	int		Recorded entry Id (optional, default: null).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.setRecordedContent = function(callback, entryId, mediaServerIndex, resource, duration, recordedEntryId, flavorParamsId){
	if(!recordedEntryId)
		recordedEntryId = null;
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "duration", duration);
	this.client.addParam(kparams, "recordedEntryId", recordedEntryId);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("livestream", "setRecordedContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Unregister media server from live entry.
 * @param	entryId	string		Live entry id (optional).
 * @param	hostname	string		Media server host name (optional).
 * @param	mediaServerIndex	string		Media server index primary / secondary (optional, enum: KalturaEntryServerNodeType).
 * @return	KalturaLiveEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "hostname", hostname);
	this.client.addParam(kparams, "mediaServerIndex", mediaServerIndex);
	this.client.queueServiceActionCall("livestream", "unregisterMediaServer", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry. Only the properties that were set will be updated..
 * @param	entryId	string		Live stream entry id to update (optional).
 * @param	liveStreamEntry	KalturaLiveStreamEntry		Live stream entry metadata to update (optional).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 */
KalturaLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.queueServiceActionCall("livestream", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url.
 * @param	entryId	string		live stream entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("livestream", "updateOfflineThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry thumbnail using a raw jpeg file.
 * @param	entryId	string		live stream entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaLiveStreamEntry.
 * @return	.
 * @return	.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("livestream", "updateOfflineThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validates all registered media servers.
 * @param	entryId	string		Live entry id (optional).
 * @return	.
 */
KalturaLiveStreamService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("livestream", "validateRegisteredMediaServers", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: mediaInfo.
 * The available service actions:
 * @action	list	List media info objects by filter and pager.
*/
function KalturaMediaInfoService(client){
	this.init(client);
}
KalturaMediaInfoService.inheritsFrom (KalturaServiceBase);
/**
 * List media info objects by filter and pager.
 * @param	filter	KalturaMediaInfoFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMediaInfoListResponse.
 */
KalturaMediaInfoService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("mediainfo", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action	add	Add entry.
 * @action	addContent	Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *	     If the requirement is to replace the entry's associated content, use action updateContent..
 * @action	addFromBulk	Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion.
 *		 This action should be exposed only to the batches.
 * @action	addFromEntry	Copy entry into new entry.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry.
 * @action	addFromRecordedWebcam	Add new entry after the file was recorded on the server and the token id exists.
 * @action	addFromSearchResult	Adds new media entry by importing the media file from a search provider.
 *		 This action should be used with the search service result..
 * @action	addFromUploadedFile	Add new entry after the specific media file was uploaded and the upload token id exists.
 * @action	addFromUrl	Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion..
 * @action	anonymousRank	Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @action	approve	Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action	approveReplace	Approves media replacement.
 * @action	bulkUploadAdd	Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
 * @action	cancelReplace	Cancels media replacement.
 * @action	convert	Convert entry.
 * @action	count	Count media entries by filter..
 * @action	delete	Delete a media entry..
 * @action	exportToCsv	Creates a batch job that sends an email with a link to download a CSV containing a list of entries.
 * @action	flag	Flag inappropriate media entry for moderation.
 * @action	get	Get media entry by ID..
 * @action	getMrss	Get MRSS by entry id
 *	     XML will return as an escaped string.
 * @action	list	List media entries by filter with paging support..
 * @action	listFlags	List all pending flags for the media entry.
 * @action	reject	Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action	requestConversion	Request a new conversion job, this can be used to convert the media entry to a different format.
 * @action	update	Update media entry. Only the properties that were set will be updated..
 * @action	updateContent	Replace content associated with the media entry..
 * @action	updateThumbnail	Update media entry thumbnail by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
 * @action	updateThumbnailFromSourceEntry	Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
 * @action	updateThumbnailFromUrl	Update entry thumbnail using URL.
 * @action	updateThumbnailJpeg	Update media entry thumbnail using a raw jpeg file.
 * @action	upload	Upload a media file to Kaltura, then the file can be used to create a media entry..
*/
function KalturaMediaService(client){
	this.init(client);
}
KalturaMediaService.inheritsFrom (KalturaServiceBase);
/**
 * Add entry.
 * @param	entry	KalturaMediaEntry		 (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.add = function(callback, entry){
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.queueServiceActionCall("media", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *	     If the requirement is to replace the entry's associated content, use action updateContent..
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaResource		 (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addContent = function(callback, entryId, resource){
	if(!resource)
		resource = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (resource != null)
		this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("media", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion.
 *		 This action should be exposed only to the batches.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
 * @param	bulkUploadId	int		The id of the bulk upload job (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromBulk = function(callback, mediaEntry, url, bulkUploadId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "url", url);
	this.client.addParam(kparams, "bulkUploadId", bulkUploadId);
	this.client.queueServiceActionCall("media", "addFromBulk", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry.
 * @param	sourceEntryId	string		Media entry id to copy from (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
	if(!mediaEntry)
		mediaEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("media", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
	if(!mediaEntry)
		mediaEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the file was recorded on the server and the token id exists.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	webcamTokenId	string		Token id for the recorded webcam file (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "webcamTokenId", webcamTokenId);
	this.client.queueServiceActionCall("media", "addFromRecordedWebcam", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing the media file from a search provider.
 *		 This action should be used with the search service result..
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
	if(!mediaEntry)
		mediaEntry = null;
	if(!searchResult)
		searchResult = null;
	var kparams = new Object();
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	if (searchResult != null)
		this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("media", "addFromSearchResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("media", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *		 The entry will be queued for import and then for conversion..
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("media", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @param	entryId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approves media replacement.
 * @param	entryId	string		Media entry id to replace (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 */
KalturaMediaService.prototype.approveReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "approveReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new bulk upload batch job
 *		 Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *		 If no conversion profile was specified, partner's default will be used.
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadEntryData	KalturaBulkUploadEntryData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaMediaService.prototype.bulkUploadAdd = function(callback, fileData, bulkUploadData, bulkUploadEntryData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadEntryData)
		bulkUploadEntryData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadEntryData != null)
		this.client.addParam(kparams, "bulkUploadEntryData", toParams(bulkUploadEntryData));
	this.client.queueServiceActionCall("media", "bulkUploadAdd", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Cancels media replacement.
 * @param	entryId	string		Media entry id to cancel (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 */
KalturaMediaService.prototype.cancelReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "cancelReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry.
 * @param	entryId	string		Media entry id (optional).
 * @param	conversionProfileId	int		 (optional, default: null).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	bigint.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("media", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count media entries by filter..
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMediaService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("media", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a media entry..
 * @param	entryId	string		Media entry id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Creates a batch job that sends an email with a link to download a CSV containing a list of entries.
 * @param	data	KalturaMediaEsearchExportToCsvJobData		job data indicating filter to pass to the job (optional).
 * @return	string.
 * @return	.
 */
KalturaMediaService.prototype.exportToCsv = function(callback, data){
	var kparams = new Object();
	this.client.addParam(kparams, "data", toParams(data));
	this.client.queueServiceActionCall("media", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate media entry for moderation.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("media", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get media entry by ID..
 * @param	entryId	string		Media entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMediaEntry.
 * @return	.
 */
KalturaMediaService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("media", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get MRSS by entry id
 *	     XML will return as an escaped string.
 * @param	entryId	string		Entry id (optional).
 * @param	extendingItemsArray	array		 (optional, default: null).
 * @param	features	string		 (optional, default: null).
 * @return	string.
 * @return	.
 */
KalturaMediaService.prototype.getMrss = function(callback, entryId, extendingItemsArray, features){
	if(!extendingItemsArray)
		extendingItemsArray = null;
	if(!features)
		features = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if(extendingItemsArray != null)
	for(var index in extendingItemsArray)
	{
		var obj = extendingItemsArray[index];
		this.client.addParam(kparams, "extendingItemsArray:" + index, toParams(obj));
	}
	this.client.addParam(kparams, "features", features);
	this.client.queueServiceActionCall("media", "getMrss", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List media entries by filter with paging support..
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMediaListResponse.
 */
KalturaMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the media entry.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaMediaService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @param	entryId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @return	int.
 * @return	.
 */
KalturaMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "fileFormat", fileFormat);
	this.client.queueServiceActionCall("media", "requestConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry. Only the properties that were set will be updated..
 * @param	entryId	string		Media entry id to update (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 */
KalturaMediaService.prototype.update = function(callback, entryId, mediaEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Replace content associated with the media entry..
 * @param	entryId	string		Media entry id to update (optional).
 * @param	resource	KalturaResource		Resource to be used to replace entry media content (optional).
 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null).
 * @param	advancedOptions	KalturaEntryReplacementOptions		Additional update content options (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!advancedOptions)
		advancedOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if (advancedOptions != null)
		this.client.addParam(kparams, "advancedOptions", toParams(advancedOptions));
	this.client.queueServiceActionCall("media", "updateContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
 * @param	entryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnail", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *		 If flavor params id not specified, source flavor will be used by default.
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using URL.
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail using a raw jpeg file.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaMediaEntry.
 * @return	.
 * @return	.
 */
KalturaMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry..
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaMediaService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action	add	Adds a new mix.
 *		 If the dataContent is null, a default timeline will be created..
 * @action	anonymousRank	Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @action	appendMediaEntry	Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version..
 * @action	clone	Clones an existing mix..
 * @action	count	Count mix entries by filter..
 * @action	delete	Delete a mix entry..
 * @action	get	Get mix entry by id..
 * @action	getMixesByMediaId	Get the mixes in which the media entry is included.
 * @action	getReadyMediaEntries	Get all ready media entries that exist in the given mix id.
 * @action	list	List entries by filter with paging support.
 *		 Return parameter is an array of mix entries..
 * @action	update	Update mix entry. Only the properties that were set will be updated..
*/
function KalturaMixingService(client){
	this.init(client);
}
KalturaMixingService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new mix.
 *		 If the dataContent is null, a default timeline will be created..
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.add = function(callback, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMixingService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("mixing", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Appends a media entry to the end of the mix timeline, this will save the mix timeline as a new version..
 * @param	mixEntryId	string		Mix entry to append to its timeline (optional).
 * @param	mediaEntryId	string		Media entry to append to the timeline (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntryId", mixEntryId);
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "appendMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clones an existing mix..
 * @param	entryId	string		Mix entry id to clone (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.cloneAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count mix entries by filter..
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMixingService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("mixing", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a mix entry..
 * @param	entryId	string		Mix entry id to delete (optional).
 * @return	.
 */
KalturaMixingService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get mix entry by id..
 * @param	entryId	string		Mix entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the mixes in which the media entry is included.
 * @param	mediaEntryId	string		 (optional).
 * @return	array.
 */
KalturaMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "getMixesByMediaId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get all ready media entries that exist in the given mix id.
 * @param	mixId	string		 (optional).
 * @param	version	int		Desired version to get the data from (optional, default: -1).
 * @return	array.
 */
KalturaMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "mixId", mixId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "getReadyMediaEntries", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List entries by filter with paging support.
 *		 Return parameter is an array of mix entries..
 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMixListResponse.
 */
KalturaMixingService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("mixing", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update mix entry. Only the properties that were set will be updated..
 * @param	entryId	string		Mix entry id to update (optional).
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.update = function(callback, entryId, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action	getClientNotification	Return the notifications for a specific entry id and type.
*/
function KalturaNotificationService(client){
	this.init(client);
}
KalturaNotificationService.inheritsFrom (KalturaServiceBase);
/**
 * Return the notifications for a specific entry id and type.
 * @param	entryId	string		 (optional).
 * @param	type	int		 (optional, enum: KalturaNotificationType).
 * @return	KalturaClientNotification.
 */
KalturaNotificationService.prototype.getClientNotification = function(callback, entryId, type){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("notification", "getClientNotification", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action	count	Count partner's existing sub-publishers (count includes the partner itself)..
 * @action	get	Retrieve partner object by Id.
 * @action	getInfo	Retrieve all info attributed to the partner
 *		 This action expects no parameters. It returns information for the current KS partnerId..
 * @action	getPublicInfo	Returns partner public info by Id.
 * @action	getSecrets	Retrieve partner secret and admin secret.
 * @action	getStatistics	Get usage statistics for a partner
 *		 Calculation is done according to partner's package.
 * @action	getUsage	Get usage statistics for a partner
 *		 Calculation is done according to partner's package
 *		 Additional data returned is a graph points of streaming usage in a time frame
 *		 The resolution can be "days" or "months".
 * @action	list	List partners by filter with paging support
 *		 Current implementation will only list the sub partners of the partner initiating the API call (using the current KS).
 *		 This action is only partially implemented to support listing sub partners of a VAR partner..
 * @action	listFeatureStatus	List partner's current processes' statuses.
 * @action	listPartnersForUser	Retrieve a list of partner objects which the current user is allowed to access..
 * @action	register	Create a new Partner object.
 * @action	registrationValidation	Create a new Partner object.
 * @action	update	Update details and settings of an existing partner.
*/
function KalturaPartnerService(client){
	this.init(client);
}
KalturaPartnerService.inheritsFrom (KalturaServiceBase);
/**
 * Count partner's existing sub-publishers (count includes the partner itself)..
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @return	int.
 */
KalturaPartnerService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("partner", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve partner object by Id.
 * @param	id	int		 (optional, default: null).
 * @return	KalturaPartner.
 * @return	.
 */
KalturaPartnerService.prototype.get = function(callback, id){
	if(!id)
		id = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("partner", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve all info attributed to the partner
 *		 This action expects no parameters. It returns information for the current KS partnerId..
 * @return	KalturaPartner.
 * @return	.
 */
KalturaPartnerService.prototype.getInfo = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("partner", "getInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Returns partner public info by Id.
 * @param	id	int		 (optional, default: null).
 * @return	KalturaPartnerPublicInfo.
 * @return	.
 */
KalturaPartnerService.prototype.getPublicInfo = function(callback, id){
	if(!id)
		id = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("partner", "getPublicInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve partner secret and admin secret.
 * @param	partnerId	int		 (optional).
 * @param	adminEmail	string		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @param	otp	string		 (optional, default: null).
 * @return	KalturaPartner.
 * @return	.
 */
KalturaPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword, otp){
	if(!otp)
		otp = null;
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "adminEmail", adminEmail);
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.addParam(kparams, "otp", otp);
	this.client.queueServiceActionCall("partner", "getSecrets", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package.
 * @return	KalturaPartnerStatistics.
 * @return	.
 */
KalturaPartnerService.prototype.getStatistics = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("partner", "getStatistics", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get usage statistics for a partner
 *		 Calculation is done according to partner's package
 *		 Additional data returned is a graph points of streaming usage in a time frame
 *		 The resolution can be "days" or "months".
 * @param	year	int		 (optional).
 * @param	month	int		 (optional, default: 1).
 * @param	resolution	string		 (optional, enum: KalturaReportInterval, default: null).
 * @return	KalturaPartnerUsage.
 * @return	.
 */
KalturaPartnerService.prototype.getUsage = function(callback, year, month, resolution){
	if(!year)
		year = "";
	if(!month)
		month = 1;
	if(!resolution)
		resolution = null;
	var kparams = new Object();
	this.client.addParam(kparams, "year", year);
	this.client.addParam(kparams, "month", month);
	this.client.addParam(kparams, "resolution", resolution);
	this.client.queueServiceActionCall("partner", "getUsage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List partners by filter with paging support
 *		 Current implementation will only list the sub partners of the partner initiating the API call (using the current KS).
 *		 This action is only partially implemented to support listing sub partners of a VAR partner..
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPartnerListResponse.
 */
KalturaPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("partner", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List partner's current processes' statuses.
 * @return	KalturaFeatureStatusListResponse.
 * @return	.
 */
KalturaPartnerService.prototype.listFeatureStatus = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("partner", "listFeatureStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of partner objects which the current user is allowed to access..
 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPartnerListResponse.
 * @return	.
 */
KalturaPartnerService.prototype.listPartnersForUser = function(callback, partnerFilter, pager){
	if(!partnerFilter)
		partnerFilter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (partnerFilter != null)
		this.client.addParam(kparams, "partnerFilter", toParams(partnerFilter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("partner", "listPartnersForUser", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Create a new Partner object.
 * @param	partner	KalturaPartner		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @param	templatePartnerId	int		 (optional, default: null).
 * @param	silent	bool		 (optional, default: false).
 * @return	KalturaPartner.
 * @return	.
 */
KalturaPartnerService.prototype.register = function(callback, partner, cmsPassword, templatePartnerId, silent){
	if(!cmsPassword)
		cmsPassword = "";
	if(!templatePartnerId)
		templatePartnerId = null;
	if(!silent)
		silent = false;
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.addParam(kparams, "templatePartnerId", templatePartnerId);
	this.client.addParam(kparams, "silent", silent);
	this.client.queueServiceActionCall("partner", "register", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Create a new Partner object.
 * @param	partner	KalturaPartner		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @param	templatePartnerId	int		 (optional, default: null).
 * @param	silent	bool		 (optional, default: false).
 * @return	bool.
 * @return	.
 */
KalturaPartnerService.prototype.registrationValidation = function(callback, partner, cmsPassword, templatePartnerId, silent){
	if(!cmsPassword)
		cmsPassword = "";
	if(!templatePartnerId)
		templatePartnerId = null;
	if(!silent)
		silent = false;
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.addParam(kparams, "templatePartnerId", templatePartnerId);
	this.client.addParam(kparams, "silent", silent);
	this.client.queueServiceActionCall("partner", "registrationValidation", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update details and settings of an existing partner.
 * @param	partner	KalturaPartner		 (optional).
 * @param	allowEmpty	bool		 (optional, default: false).
 * @return	KalturaPartner.
 * @return	.
 */
KalturaPartnerService.prototype.update = function(callback, partner, allowEmpty){
	if(!allowEmpty)
		allowEmpty = false;
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "allowEmpty", allowEmpty);
	this.client.queueServiceActionCall("partner", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action	add	Adds a new permission item object to the account.
 *		 This action is available only to Kaltura system administrators..
 * @action	delete	Deletes an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
 * @action	get	Retrieves a permission item object using its ID..
 * @action	list	Lists permission item objects that are associated with an account..
 * @action	update	Updates an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
*/
function KalturaPermissionItemService(client){
	this.init(client);
}
KalturaPermissionItemService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new permission item object to the account.
 *		 This action is available only to Kaltura system administrators..
 * @param	permissionItem	KalturaPermissionItem		The new permission item (optional).
 * @return	KalturaPermissionItem.
 * @return	.
 * @return	.
 */
KalturaPermissionItemService.prototype.add = function(callback, permissionItem){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItem", toParams(permissionItem));
	this.client.queueServiceActionCall("permissionitem", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
 * @param	permissionItemId	int		The permission item's unique identifier (optional).
 * @return	KalturaPermissionItem.
 * @return	.
 */
KalturaPermissionItemService.prototype.deleteAction = function(callback, permissionItemId){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.queueServiceActionCall("permissionitem", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a permission item object using its ID..
 * @param	permissionItemId	int		The permission item's unique identifier (optional).
 * @return	KalturaPermissionItem.
 * @return	.
 */
KalturaPermissionItemService.prototype.get = function(callback, permissionItemId){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.queueServiceActionCall("permissionitem", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists permission item objects that are associated with an account..
 * @param	filter	KalturaPermissionItemFilter		A filter used to exclude specific types of permission items (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaPermissionItemListResponse.
 */
KalturaPermissionItemService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("permissionitem", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Updates an existing permission item object.
 *		 This action is available only to Kaltura system administrators..
 * @param	permissionItemId	int		The permission item's unique identifier (optional).
 * @param	permissionItem	KalturaPermissionItem		Id The permission item's unique identifier (optional).
 * @return	KalturaPermissionItem.
 * @return	.
 */
KalturaPermissionItemService.prototype.update = function(callback, permissionItemId, permissionItem){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.addParam(kparams, "permissionItem", toParams(permissionItem));
	this.client.queueServiceActionCall("permissionitem", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action	add	Adds a new permission object to the account..
 * @action	delete	Deletes an existing permission object..
 * @action	get	Retrieves a permission object using its ID..
 * @action	getCurrentPermissions	Retrieves a list of permissions that apply to the current KS..
 * @action	list	Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
 * @action	update	Updates an existing permission object..
*/
function KalturaPermissionService(client){
	this.init(client);
}
KalturaPermissionService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new permission object to the account..
 * @param	permission	KalturaPermission		The new permission (optional).
 * @return	KalturaPermission.
 * @return	.
 * @return	.
 */
KalturaPermissionService.prototype.add = function(callback, permission){
	var kparams = new Object();
	this.client.addParam(kparams, "permission", toParams(permission));
	this.client.queueServiceActionCall("permission", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes an existing permission object..
 * @param	permissionName	string		The name assigned to the permission (optional).
 * @return	KalturaPermission.
 * @return	.
 */
KalturaPermissionService.prototype.deleteAction = function(callback, permissionName){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.queueServiceActionCall("permission", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a permission object using its ID..
 * @param	permissionName	string		The name assigned to the permission (optional).
 * @return	KalturaPermission.
 * @return	.
 */
KalturaPermissionService.prototype.get = function(callback, permissionName){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.queueServiceActionCall("permission", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a list of permissions that apply to the current KS..
 * @return	string.
 */
KalturaPermissionService.prototype.getCurrentPermissions = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("permission", "getCurrentPermissions", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists permission objects that are associated with an account.
 *		 Blocked permissions are listed unless you use a filter to exclude them.
 *		 Blocked permissions are listed unless you use a filter to exclude them..
 * @param	filter	KalturaPermissionFilter		A filter used to exclude specific types of permissions (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaPermissionListResponse.
 */
KalturaPermissionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("permission", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Updates an existing permission object..
 * @param	permissionName	string		The name assigned to the permission (optional).
 * @param	permission	KalturaPermission		Name The name assigned to the permission (optional).
 * @return	KalturaPermission.
 * @return	.
 */
KalturaPermissionService.prototype.update = function(callback, permissionName, permission){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.addParam(kparams, "permission", toParams(permission));
	this.client.queueServiceActionCall("permission", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action	add	Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @action	clone	Clone an existing playlist.
 * @action	delete	Delete existing playlist.
 * @action	execute	Retrieve playlist for playing purpose.
 * @action	executeFromContent	Retrieve playlist for playing purpose, based on content.
 * @action	executeFromFilters	Retrieve playlist for playing purpose, based on media entry filters.
 * @action	get	Retrieve a playlist.
 * @action	getStatsFromContent	Retrieve playlist statistics.
 * @action	list	List available playlists.
 * @action	update	Update existing playlist
 *		 Note - you cannot change playlist type. Updated playlist must be of the same type..
*/
function KalturaPlaylistService(client){
	this.init(client);
}
KalturaPlaylistService.inheritsFrom (KalturaServiceBase);
/**
 * Add new playlist
 *		 Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.add = function(callback, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing playlist.
 * @param	id	string		Id of the playlist to clone (optional).
 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return	KalturaPlaylist.
 * @return	.
 * @return	.
 */
KalturaPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
	if(!newPlaylist)
		newPlaylist = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	if (newPlaylist != null)
		this.client.addParam(kparams, "newPlaylist", toParams(newPlaylist));
	this.client.queueServiceActionCall("playlist", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete existing playlist.
 * @param	id	string		 (optional).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaPlaylistService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("playlist", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose.
 * @param	id	string		 (optional).
 * @param	detailed	string		 (optional).
 * @param	playlistContext	KalturaContext		 (optional, default: null).
 * @param	filter	KalturaMediaEntryFilterForPlaylist		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	array.
 */
KalturaPlaylistService.prototype.execute = function(callback, id, detailed, playlistContext, filter, pager){
	if(!detailed)
		detailed = "";
	if(!playlistContext)
		playlistContext = null;
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "detailed", detailed);
	if (playlistContext != null)
		this.client.addParam(kparams, "playlistContext", toParams(playlistContext));
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "execute", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose, based on content.
 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @param	detailed	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed, pager){
	if(!detailed)
		detailed = "";
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.addParam(kparams, "detailed", detailed);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "executeFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose, based on media entry filters.
 * @param	filters	array		 (optional).
 * @param	totalResults	int		 (optional).
 * @param	detailed	string		 (optional, default: 1).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed, pager){
	if(!detailed)
		detailed = 1;
	if(!pager)
		pager = null;
	var kparams = new Object();
for(var index in filters)
{
	var obj = filters[index];
	this.client.addParam(kparams, "filters:" + index, toParams(obj));
}
	this.client.addParam(kparams, "totalResults", totalResults);
	this.client.addParam(kparams, "detailed", detailed);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "executeFromFilters", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a playlist.
 * @param	id	string		 (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaPlaylist.
 * @return	.
 * @return	.
 */
KalturaPlaylistService.prototype.get = function(callback, id, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("playlist", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist statistics.
 * @param	playlistType	int		 (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.queueServiceActionCall("playlist", "getStatsFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List available playlists.
 * @param	filter	KalturaPlaylistFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPlaylistListResponse.
 */
KalturaPlaylistService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing playlist
 *		 Note - you cannot change playlist type. Updated playlist must be of the same type..
 * @param	id	string		 (optional).
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		 (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action	execute	.
 * @action	exportToCsv	.
 * @action	getBaseTotal	report getBaseTotal action allows to get the total base for storage reports.
 * @action	getGraphs	report getGraphs action allows to get a graph data for a specific report..
 * @action	getTable	report getTable action allows to get a graph data for a specific report..
 * @action	getTotal	report getTotal action allows to get a graph data for a specific report..
 * @action	getUrlForReportAsCsv	will create a CSV file for the given report and return the URL to access it.
 * @action	serve	Will serve a requested report.
*/
function KalturaReportService(client){
	this.init(client);
}
KalturaReportService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	id	int		 (optional).
 * @param	params	array		 (optional, default: null).
 * @return	KalturaReportResponse.
 */
KalturaReportService.prototype.execute = function(callback, id, params){
	if(!params)
		params = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	if(params != null)
	for(var index in params)
	{
		var obj = params[index];
		this.client.addParam(kparams, "params:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("report", "execute", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	params	KalturaReportExportParams		 (optional).
 * @return	KalturaReportExportResponse.
 */
KalturaReportService.prototype.exportToCsv = function(callback, params){
	var kparams = new Object();
	this.client.addParam(kparams, "params", toParams(params));
	this.client.queueServiceActionCall("report", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getBaseTotal action allows to get the total base for storage reports.
 * @param	reportType	string		 (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null).
 * @return	array.
 */
KalturaReportService.prototype.getBaseTotal = function(callback, reportType, reportInputFilter, objectIds, responseOptions){
	if(!objectIds)
		objectIds = null;
	if(!responseOptions)
		responseOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "objectIds", objectIds);
	if (responseOptions != null)
		this.client.addParam(kparams, "responseOptions", toParams(responseOptions));
	this.client.queueServiceActionCall("report", "getBaseTotal", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getGraphs action allows to get a graph data for a specific report..
 * @param	reportType	string		 (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null).
 * @return	array.
 */
KalturaReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds, responseOptions){
	if(!dimension)
		dimension = null;
	if(!objectIds)
		objectIds = null;
	if(!responseOptions)
		responseOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	this.client.addParam(kparams, "objectIds", objectIds);
	if (responseOptions != null)
		this.client.addParam(kparams, "responseOptions", toParams(responseOptions));
	this.client.queueServiceActionCall("report", "getGraphs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTable action allows to get a graph data for a specific report..
 * @param	reportType	string		 (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional).
 * @param	order	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null).
 * @return	KalturaReportTable.
 */
KalturaReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds, responseOptions){
	if(!order)
		order = null;
	if(!objectIds)
		objectIds = null;
	if(!responseOptions)
		responseOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	if (responseOptions != null)
		this.client.addParam(kparams, "responseOptions", toParams(responseOptions));
	this.client.queueServiceActionCall("report", "getTable", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTotal action allows to get a graph data for a specific report..
 * @param	reportType	string		 (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null).
 * @return	KalturaReportTotal.
 */
KalturaReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds, responseOptions){
	if(!objectIds)
		objectIds = null;
	if(!responseOptions)
		responseOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "objectIds", objectIds);
	if (responseOptions != null)
		this.client.addParam(kparams, "responseOptions", toParams(responseOptions));
	this.client.queueServiceActionCall("report", "getTotal", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * will create a CSV file for the given report and return the URL to access it.
 * @param	reportTitle	string		The title of the report to display at top of CSV (optional).
 * @param	reportText	string		The text of the filter of the report (optional).
 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text (optional).
 * @param	reportType	string		 (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @param	order	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @param	responseOptions	KalturaReportResponseOptions		 (optional, default: null).
 * @return	string.
 */
KalturaReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds, responseOptions){
	if(!dimension)
		dimension = null;
	if(!pager)
		pager = null;
	if(!order)
		order = null;
	if(!objectIds)
		objectIds = null;
	if(!responseOptions)
		responseOptions = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportTitle", reportTitle);
	this.client.addParam(kparams, "reportText", reportText);
	this.client.addParam(kparams, "headers", headers);
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	if (responseOptions != null)
		this.client.addParam(kparams, "responseOptions", toParams(responseOptions));
	this.client.queueServiceActionCall("report", "getUrlForReportAsCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will serve a requested report.
 * @param	id	string		- the requested id (optional).
 * @return	string.
 */
KalturaReportService.prototype.serve = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("report", "serve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: responseProfile.
 * The available service actions:
 * @action	add	Add new response profile.
 * @action	clone	Clone an existing response profile.
 * @action	delete	Delete response profile by id.
 * @action	get	Get response profile by id.
 * @action	list	List response profiles by filter and pager.
 * @action	recalculate	Recalculate response profile cached objects.
 * @action	update	Update response profile by id.
 * @action	updateStatus	Update response profile status by id.
*/
function KalturaResponseProfileService(client){
	this.init(client);
}
KalturaResponseProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new response profile.
 * @param	addResponseProfile	KalturaResponseProfile		 (optional).
 * @return	KalturaResponseProfile.
 */
KalturaResponseProfileService.prototype.add = function(callback, addResponseProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "addResponseProfile", toParams(addResponseProfile));
	this.client.queueServiceActionCall("responseprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing response profile.
 * @param	id	int		 (optional).
 * @param	profile	KalturaResponseProfile		 (optional).
 * @return	KalturaResponseProfile.
 * @return	.
 * @return	.
 */
KalturaResponseProfileService.prototype.cloneAction = function(callback, id, profile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "profile", toParams(profile));
	this.client.queueServiceActionCall("responseprofile", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete response profile by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaResponseProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("responseprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get response profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaResponseProfile.
 * @return	.
 */
KalturaResponseProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("responseprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List response profiles by filter and pager.
 * @param	filter	KalturaResponseProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaResponseProfileListResponse.
 */
KalturaResponseProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("responseprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Recalculate response profile cached objects.
 * @param	options	KalturaResponseProfileCacheRecalculateOptions		 (optional).
 * @return	KalturaResponseProfileCacheRecalculateResults.
 */
KalturaResponseProfileService.prototype.recalculate = function(callback, options){
	var kparams = new Object();
	this.client.addParam(kparams, "options", toParams(options));
	this.client.queueServiceActionCall("responseprofile", "recalculate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update response profile by id.
 * @param	id	int		 (optional).
 * @param	updateResponseProfile	KalturaResponseProfile		 (optional).
 * @return	KalturaResponseProfile.
 * @return	.
 */
KalturaResponseProfileService.prototype.update = function(callback, id, updateResponseProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "updateResponseProfile", toParams(updateResponseProfile));
	this.client.queueServiceActionCall("responseprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update response profile status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaResponseProfileStatus).
 * @return	KalturaResponseProfile.
 * @return	.
 */
KalturaResponseProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("responseprofile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: schema.
 * The available service actions:
*/
function KalturaSchemaService(client){
	this.init(client);
}
KalturaSchemaService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action	externalLogin	.
 * @action	getMediaInfo	Retrieve extra information about media found in search action
 *		 Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
 * @action	search	Search for media in one of the supported media providers.
 * @action	searchUrl	Search for media given a specific URL
 *		 Kaltura supports a searchURL action on some of the media providers.
 *		 This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
*/
function KalturaSearchService(client){
	this.init(client);
}
KalturaSearchService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType).
 * @param	userName	string		 (optional).
 * @param	password	string		 (optional).
 * @return	KalturaSearchAuthData.
 */
KalturaSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
	var kparams = new Object();
	this.client.addParam(kparams, "searchSource", searchSource);
	this.client.addParam(kparams, "userName", userName);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("search", "externalLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve extra information about media found in search action
 *		 Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
 * @return	KalturaSearchResult.
 * @return	.
 * @return	.
 */
KalturaSearchService.prototype.getMediaInfo = function(callback, searchResult){
	var kparams = new Object();
	this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("search", "getMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search for media in one of the supported media providers.
 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaSearchResultResponse.
 * @return	.
 * @return	.
 */
KalturaSearchService.prototype.search = function(callback, search, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "search", toParams(search));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("search", "search", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search for media given a specific URL
 *		 Kaltura supports a searchURL action on some of the media providers.
 *		 This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
 * @param	mediaType	int		 (optional, enum: KalturaMediaType).
 * @param	url	string		 (optional).
 * @return	KalturaSearchResult.
 * @return	.
 */
KalturaSearchService.prototype.searchUrl = function(callback, mediaType, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaType", mediaType);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("search", "searchUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: serverNode.
 * The available service actions:
 * @action	add	Adds a server node to the Kaltura DB..
 * @action	delete	delete server node by id.
 * @action	disable	Disable server node by id.
 * @action	enable	Enable server node by id.
 * @action	get	Get server node by id.
 * @action	getFullPath	Get the edge server node full path.
 * @action	list	.
 * @action	markOffline	Mark server node offline.
 * @action	reportStatus	Update server node status.
 * @action	update	Update server node by id.
*/
function KalturaServerNodeService(client){
	this.init(client);
}
KalturaServerNodeService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a server node to the Kaltura DB..
 * @param	serverNode	KalturaServerNode		 (optional).
 * @return	KalturaServerNode.
 */
KalturaServerNodeService.prototype.add = function(callback, serverNode){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNode", toParams(serverNode));
	this.client.queueServiceActionCall("servernode", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete server node by id.
 * @param	serverNodeId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaServerNodeService.prototype.deleteAction = function(callback, serverNodeId){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("servernode", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Disable server node by id.
 * @param	serverNodeId	string		 (optional).
 * @return	KalturaServerNode.
 * @return	.
 */
KalturaServerNodeService.prototype.disable = function(callback, serverNodeId){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("servernode", "disable", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Enable server node by id.
 * @param	serverNodeId	string		 (optional).
 * @return	KalturaServerNode.
 * @return	.
 */
KalturaServerNodeService.prototype.enable = function(callback, serverNodeId){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("servernode", "enable", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get server node by id.
 * @param	serverNodeId	int		 (optional).
 * @return	KalturaServerNode.
 * @return	.
 */
KalturaServerNodeService.prototype.get = function(callback, serverNodeId){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("servernode", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the edge server node full path.
 * @param	hostName	string		 (optional).
 * @param	protocol	string		 (optional, default: http).
 * @param	deliveryFormat	string		 (optional, default: null).
 * @param	deliveryType	string		 (optional, default: null).
 * @return	string.
 */
KalturaServerNodeService.prototype.getFullPath = function(callback, hostName, protocol, deliveryFormat, deliveryType){
	if(!protocol)
		protocol = "http";
	if(!deliveryFormat)
		deliveryFormat = null;
	if(!deliveryType)
		deliveryType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "hostName", hostName);
	this.client.addParam(kparams, "protocol", protocol);
	this.client.addParam(kparams, "deliveryFormat", deliveryFormat);
	this.client.addParam(kparams, "deliveryType", deliveryType);
	this.client.queueServiceActionCall("servernode", "getFullPath", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaServerNodeFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaServerNodeListResponse.
 */
KalturaServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("servernode", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark server node offline.
 * @param	serverNodeId	string		 (optional).
 * @return	KalturaServerNode.
 * @return	.
 */
KalturaServerNodeService.prototype.markOffline = function(callback, serverNodeId){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.queueServiceActionCall("servernode", "markOffline", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update server node status.
 * @param	hostName	string		 (optional).
 * @param	serverNode	KalturaServerNode		 (optional, default: null).
 * @param	serverNodeStatus	int		 (optional, enum: KalturaServerNodeStatus, default: 1).
 * @return	KalturaServerNode.
 */
KalturaServerNodeService.prototype.reportStatus = function(callback, hostName, serverNode, serverNodeStatus){
	if(!serverNode)
		serverNode = null;
	if(!serverNodeStatus)
		serverNodeStatus = 1;
	var kparams = new Object();
	this.client.addParam(kparams, "hostName", hostName);
	if (serverNode != null)
		this.client.addParam(kparams, "serverNode", toParams(serverNode));
	this.client.addParam(kparams, "serverNodeStatus", serverNodeStatus);
	this.client.queueServiceActionCall("servernode", "reportStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update server node by id.
 * @param	serverNodeId	int		 (optional).
 * @param	serverNode	KalturaServerNode		Id (optional).
 * @return	KalturaServerNode.
 */
KalturaServerNodeService.prototype.update = function(callback, serverNodeId, serverNode){
	var kparams = new Object();
	this.client.addParam(kparams, "serverNodeId", serverNodeId);
	this.client.addParam(kparams, "serverNode", toParams(serverNode));
	this.client.queueServiceActionCall("servernode", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action	end	End a session with the Kaltura server, making the current KS invalid..
 * @action	get	Parse session key and return its info.
 * @action	impersonate	Start an impersonated session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
 * @action	impersonateByKs	Start an impersonated session with Kaltura's server.
 *		 The result KS info contains the session key that you should pass to all services that requires a ticket.
 *		 Type, expiry and privileges won't be changed if they're not set.
 * @action	start	Start a session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
 * @action	startWidgetSession	Start a session for Kaltura's flash widgets.
*/
function KalturaSessionService(client){
	this.init(client);
}
KalturaSessionService.inheritsFrom (KalturaServiceBase);
/**
 * End a session with the Kaltura server, making the current KS invalid..
 * @return	.
 */
KalturaSessionService.prototype.end = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("session", "end", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Parse session key and return its info.
 * @param	session	string		The KS to be parsed, keep it empty to use current session. (optional, default: null).
 * @return	KalturaSessionInfo.
 * @return	.
 */
KalturaSessionService.prototype.get = function(callback, session){
	if(!session)
		session = null;
	var kparams = new Object();
	this.client.addParam(kparams, "session", session);
	this.client.queueServiceActionCall("session", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start an impersonated session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
 * @param	secret	string		- should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId). (optional).
 * @param	impersonatedPartnerId	int		 (optional).
 * @param	userId	string		- impersonated userId (optional).
 * @param	type	int		 (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: null).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional, default: null).
 * @return	string.
 * @return	.
 */
KalturaSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
	if(!userId)
		userId = "";
	if(!type)
		type = 0;
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "secret", secret);
	this.client.addParam(kparams, "impersonatedPartnerId", impersonatedPartnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "impersonate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start an impersonated session with Kaltura's server.
 *		 The result KS info contains the session key that you should pass to all services that requires a ticket.
 *		 Type, expiry and privileges won't be changed if they're not set.
 * @param	session	string		The old KS of the impersonated partner (optional).
 * @param	type	int		Type of the new KS (optional, enum: KalturaSessionType, default: null).
 * @param	expiry	int		Expiry time in seconds of the new KS (optional, default: null).
 * @param	privileges	string		Privileges of the new KS (optional, default: null).
 * @return	KalturaSessionInfo.
 * @return	.
 */
KalturaSessionService.prototype.impersonateByKs = function(callback, session, type, expiry, privileges){
	if(!type)
		type = null;
	if(!expiry)
		expiry = null;
	if(!privileges)
		privileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "session", session);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "impersonateByKs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start a session with Kaltura's server.
 *		 The result KS is the session key that you should pass to all services that requires a ticket..
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: null).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional, default: null).
 * @return	string.
 * @return	.
 */
KalturaSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
	if(!userId)
		userId = "";
	if(!type)
		type = 0;
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "secret", secret);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "start", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start a session for Kaltura's flash widgets.
 * @param	widgetId	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
 * @return	KalturaStartWidgetSessionResponse.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
	if(!expiry)
		expiry = 86400;
	var kparams = new Object();
	this.client.addParam(kparams, "widgetId", widgetId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.queueServiceActionCall("session", "startWidgetSession", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action	collect	Will write to the event log a single line representing the event
 *		 client version - will help interpret the line structure. Different client versions might have slightly different data/data formats in the line
 *	event_id - number is the row number in yuval's excel
 *	datetime - same format as MySql's datetime - can change and should reflect the time zone
 *	session id - can be some big random number or guid
 *	partner id
 *	entry id
 *	unique viewer
 *	widget id
 *	ui_conf id
 *	uid - the puser id as set by the ppartner
 *	current point - in milliseconds
 *	duration - milliseconds
 *	user ip
 *	process duration - in milliseconds
 *	control id
 *	seek
 *	new point
 *	referrer
 *		
 *		
 *		 KalturaStatsEvent $event.
 * @action	kmcCollect	Will collect the kmcEvent sent form the KMC client
 *		 // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the Apache log.
 * @action	reportDeviceCapabilities	Use this action to report device capabilities to the kaltura server..
 * @action	reportError	Use this action to report errors to the kaltura server..
 * @action	reportKceError	.
*/
function KalturaStatsService(client){
	this.init(client);
}
KalturaStatsService.inheritsFrom (KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *		 client version - will help interpret the line structure. Different client versions might have slightly different data/data formats in the line
 *	event_id - number is the row number in yuval's excel
 *	datetime - same format as MySql's datetime - can change and should reflect the time zone
 *	session id - can be some big random number or guid
 *	partner id
 *	entry id
 *	unique viewer
 *	widget id
 *	ui_conf id
 *	uid - the puser id as set by the ppartner
 *	current point - in milliseconds
 *	duration - milliseconds
 *	user ip
 *	process duration - in milliseconds
 *	control id
 *	seek
 *	new point
 *	referrer
 *		
 *		
 *		 KalturaStatsEvent $event.
 * @param	event	KalturaStatsEvent		 (optional).
 * @return	bool.
 */
KalturaStatsService.prototype.collect = function(callback, event){
	var kparams = new Object();
	this.client.addParam(kparams, "event", toParams(event));
	this.client.queueServiceActionCall("stats", "collect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will collect the kmcEvent sent form the KMC client
 *		 // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the Apache log.
 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.kmcCollect = function(callback, kmcEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "kmcEvent", toParams(kmcEvent));
	this.client.queueServiceActionCall("stats", "kmcCollect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Use this action to report device capabilities to the kaltura server..
 * @param	data	string		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.reportDeviceCapabilities = function(callback, data){
	var kparams = new Object();
	this.client.addParam(kparams, "data", data);
	this.client.queueServiceActionCall("stats", "reportDeviceCapabilities", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Use this action to report errors to the kaltura server..
 * @param	errorCode	string		 (optional).
 * @param	errorMessage	string		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.reportError = function(callback, errorCode, errorMessage){
	var kparams = new Object();
	this.client.addParam(kparams, "errorCode", errorCode);
	this.client.addParam(kparams, "errorMessage", errorMessage);
	this.client.queueServiceActionCall("stats", "reportError", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	kalturaCEError	KalturaCEError		 (optional).
 * @return	KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
	var kparams = new Object();
	this.client.addParam(kparams, "kalturaCEError", toParams(kalturaCEError));
	this.client.queueServiceActionCall("stats", "reportKceError", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action	add	Adds a storage profile to the Kaltura DB..
 * @action	get	Get storage profile by id.
 * @action	list	.
 * @action	lockPendingFileSyncs	storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
 * @action	update	Update storage profile by id.
 * @action	updateStatus	.
*/
function KalturaStorageProfileService(client){
	this.init(client);
}
KalturaStorageProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a storage profile to the Kaltura DB..
 * @param	storageProfile	KalturaStorageProfile		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.add = function(callback, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get storage profile by id.
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.get = function(callback, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("storageprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaStorageProfileListResponse.
 */
KalturaStorageProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("storageprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * storage profile lockPendingFileSyncs action locks file syncs for export by the file sync periodic worker.
 * @param	filter	KalturaFileSyncFilter		 (optional).
 * @param	workerId	int		The id of the file sync import worker (optional).
 * @param	storageProfileId	int		The id of the storage profile (optional).
 * @param	maxCount	int		The maximum number of file syncs that should be returned (optional).
 * @param	maxSize	int		The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: 9223372036854775807).
 * @return	KalturaLockFileSyncsResponse.
 */
KalturaStorageProfileService.prototype.lockPendingFileSyncs = function(callback, filter, workerId, storageProfileId, maxCount, maxSize){
	if(!maxSize)
		maxSize = 9223372036854775807;
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "workerId", workerId);
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.addParam(kparams, "maxCount", maxCount);
	this.client.addParam(kparams, "maxSize", maxSize);
	this.client.queueServiceActionCall("storageprofile", "lockPendingFileSyncs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update storage profile by id.
 * @param	storageProfileId	int		 (optional).
 * @param	storageProfile	KalturaStorageProfile		Id (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	storageId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus).
 * @return	.
 */
KalturaStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "storageId", storageId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("storageprofile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action	add	Add new Syndication Feed.
 * @action	delete	Delete Syndication Feed by ID.
 * @action	get	Get Syndication Feed by ID.
 * @action	getEntryCount	get entry count for a syndication feed.
 * @action	list	List Syndication Feeds by filter with paging support.
 * @action	requestConversion	request conversion for all entries that doesn't have the required flavor param
 *		 returns a comma-separated ids of conversion jobs.
 * @action	update	Update Syndication Feed by ID.
*/
function KalturaSyndicationFeedService(client){
	this.init(client);
}
KalturaSyndicationFeedService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Syndication Feed.
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationfeed", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Syndication Feed by ID.
 * @param	id	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaSyndicationFeedService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationfeed", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Syndication Feed by ID.
 * @param	id	string		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 * @return	.
 */
KalturaSyndicationFeedService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationfeed", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * get entry count for a syndication feed.
 * @param	feedId	string		 (optional).
 * @return	KalturaSyndicationFeedEntryCount.
 * @return	.
 */
KalturaSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationfeed", "getEntryCount", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Syndication Feeds by filter with paging support.
 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBaseSyndicationFeedListResponse.
 */
KalturaSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("syndicationfeed", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * request conversion for all entries that doesn't have the required flavor param
 *		 returns a comma-separated ids of conversion jobs.
 * @param	feedId	string		 (optional).
 * @return	string.
 * @return	.
 */
KalturaSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationfeed", "requestConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Syndication Feed by ID.
 * @param	id	string		 (optional).
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 * @return	.
 */
KalturaSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationfeed", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action	getHealthCheck	.
 * @action	getTime	.
 * @action	getVersion	.
 * @action	ping	.
 * @action	pingDatabase	.
*/
function KalturaSystemService(client){
	this.init(client);
}
KalturaSystemService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @return	string.
 */
KalturaSystemService.prototype.getHealthCheck = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "getHealthCheck", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	int.
 */
KalturaSystemService.prototype.getTime = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "getTime", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	string.
 */
KalturaSystemService.prototype.getVersion = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "getVersion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	bool.
 */
KalturaSystemService.prototype.ping = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "ping", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	bool.
 */
KalturaSystemService.prototype.pingDatabase = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "pingDatabase", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbAsset.
 * The available service actions:
 * @action	add	Add thumbnail asset.
 * @action	addFromImage	.
 * @action	addFromUrl	.
 * @action	delete	.
 * @action	export	manually export an asset.
 * @action	generate	.
 * @action	generateByEntryId	.
 * @action	get	.
 * @action	getByEntryId	.
 * @action	getRemotePaths	Get remote storage existing paths for the asset.
 * @action	getUrl	Get download URL for the asset.
 * @action	list	List Thumbnail Assets by filter and pager.
 * @action	regenerate	.
 * @action	setAsDefault	Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *		 Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync..
 * @action	setContent	Update content of thumbnail asset.
 * @action	update	Update thumbnail asset.
*/
function KalturaThumbAssetService(client){
	this.init(client);
}
KalturaThumbAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add thumbnail asset.
 * @param	entryId	string		 (optional).
 * @param	thumbAsset	KalturaThumbAsset		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.add = function(callback, entryId, thumbAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "thumbAsset", toParams(thumbAsset));
	this.client.queueServiceActionCall("thumbasset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	fileData	file		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 */
KalturaThumbAssetService.prototype.addFromImage = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("thumbasset", "addFromImage", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	url	string		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("thumbasset", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.deleteAction = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbasset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * manually export an asset.
 * @param	assetId	string		 (optional).
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.exportAction = function(callback, assetId, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("thumbasset", "export", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @param	sourceAssetId	string		id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null).
 * @return	KalturaThumbAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.generate = function(callback, entryId, thumbParams, sourceAssetId){
	if(!sourceAssetId)
		sourceAssetId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.addParam(kparams, "sourceAssetId", sourceAssetId);
	this.client.queueServiceActionCall("thumbasset", "generate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	destThumbParamsId	int		indicate the id of the ThumbParams to be generate this thumbnail by (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.generateByEntryId = function(callback, entryId, destThumbParamsId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "destThumbParamsId", destThumbParamsId);
	this.client.queueServiceActionCall("thumbasset", "generateByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 */
KalturaThumbAssetService.prototype.get = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbasset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	array.
 * @return	.
 */
KalturaThumbAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("thumbasset", "getByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset.
 * @param	id	string		 (optional).
 * @return	KalturaRemotePathListResponse.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbasset", "getRemotePaths", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the asset.
 * @param	id	string		 (optional).
 * @param	storageId	int		 (optional, default: null).
 * @param	thumbParams	KalturaThumbParams		 (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.getUrl = function(callback, id, storageId, thumbParams){
	if(!storageId)
		storageId = null;
	if(!thumbParams)
		thumbParams = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "storageId", storageId);
	if (thumbParams != null)
		this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.queueServiceActionCall("thumbasset", "getUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Thumbnail Assets by filter and pager.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaThumbAssetListResponse.
 */
KalturaThumbAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("thumbasset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.regenerate = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbasset", "regenerate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *		 Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync..
 * @param	thumbAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.setAsDefault = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbasset", "setAsDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of thumbnail asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaThumbAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("thumbasset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update thumbnail asset.
 * @param	id	string		 (optional).
 * @param	thumbAsset	KalturaThumbAsset		 (optional).
 * @return	KalturaThumbAsset.
 * @return	.
 */
KalturaThumbAssetService.prototype.update = function(callback, id, thumbAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "thumbAsset", toParams(thumbAsset));
	this.client.queueServiceActionCall("thumbasset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 * The available service actions:
 * @action	get	Get thumb params output object by ID.
 * @action	list	List thumb params output objects by filter and pager.
*/
function KalturaThumbParamsOutputService(client){
	this.init(client);
}
KalturaThumbParamsOutputService.inheritsFrom (KalturaServiceBase);
/**
 * Get thumb params output object by ID.
 * @param	id	int		 (optional).
 * @return	KalturaThumbParamsOutput.
 * @return	.
 */
KalturaThumbParamsOutputService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbparamsoutput", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List thumb params output objects by filter and pager.
 * @param	filter	KalturaThumbParamsOutputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaThumbParamsOutputListResponse.
 */
KalturaThumbParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("thumbparamsoutput", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbParams.
 * The available service actions:
 * @action	add	Add new Thumb Params.
 * @action	delete	Delete Thumb Params by ID.
 * @action	get	Get Thumb Params by ID.
 * @action	getByConversionProfileId	Get Thumb Params by Conversion Profile ID.
 * @action	list	List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @action	update	Update Thumb Params by ID.
*/
function KalturaThumbParamsService(client){
	this.init(client);
}
KalturaThumbParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Thumb Params.
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.add = function(callback, thumbParams){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.queueServiceActionCall("thumbparams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Thumb Params by ID.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaThumbParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbparams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Thumb Params by ID.
 * @param	id	int		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbparams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Thumb Params by Conversion Profile ID.
 * @param	conversionProfileId	int		 (optional).
 * @return	array.
 */
KalturaThumbParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("thumbparams", "getByConversionProfileId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @param	filter	KalturaThumbParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaThumbParamsListResponse.
 */
KalturaThumbParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("thumbparams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Thumb Params by ID.
 * @param	id	int		 (optional).
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.update = function(callback, id, thumbParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.queueServiceActionCall("thumbparams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action	add	UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @action	clone	Clone an existing UIConf.
 * @action	delete	Delete an existing UIConf.
 * @action	get	Retrieve a UIConf by id.
 * @action	getAvailableTypes	Retrieve a list of all available versions by object type.
 * @action	list	Retrieve a list of available UIConfs.
 * @action	listTemplates	retrieve a list of available template UIConfs.
 * @action	update	Update an existing UIConf.
*/
function KalturaUiConfService(client){
	this.init(client);
}
KalturaUiConfService.inheritsFrom (KalturaServiceBase);
/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.add = function(callback, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiconf", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing UIConf.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 * @return	.
 */
KalturaUiConfService.prototype.cloneAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiconf", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing UIConf.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaUiConfService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiconf", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a UIConf by id.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 * @return	.
 */
KalturaUiConfService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiconf", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of all available versions by object type.
 * @return	array.
 */
KalturaUiConfService.prototype.getAvailableTypes = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("uiconf", "getAvailableTypes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiconf", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * retrieve a list of available template UIConfs.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiconf", "listTemplates", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing UIConf.
 * @param	id	int		 (optional).
 * @param	uiConf	KalturaUiConf		 (optional).
 * @return	KalturaUiConf.
 * @return	.
 */
KalturaUiConfService.prototype.update = function(callback, id, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiconf", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action	getUploadedFileTokenByFileName	.
 * @action	upload	.
*/
function KalturaUploadService(client){
	this.init(client);
}
KalturaUploadService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	fileName	string		 (optional).
 * @return	KalturaUploadResponse.
 */
KalturaUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
	var kparams = new Object();
	this.client.addParam(kparams, "fileName", fileName);
	this.client.queueServiceActionCall("upload", "getUploadedFileTokenByFileName", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaUploadService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("upload", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action	add	Adds new upload token to upload a file.
 * @action	delete	Deletes the upload token by upload token id.
 * @action	get	Get upload token by id.
 * @action	list	List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
 * @action	upload	Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 *		 Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 *		 A parallel upload session should have three stages:
 *		 1. A single upload with resume=false and finalChunk=false
 *		 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 *		 If a chunk fails to upload it can be re-uploaded.
 *		 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
 *		 with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 *		 has been returned (indicating not all of the chunks were appended yet) the final request can be retried..
*/
function KalturaUploadTokenService(client){
	this.init(client);
}
KalturaUploadTokenService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new upload token to upload a file.
 * @param	uploadToken	KalturaUploadToken		 (optional, default: null).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.add = function(callback, uploadToken){
	if(!uploadToken)
		uploadToken = null;
	var kparams = new Object();
	if (uploadToken != null)
		this.client.addParam(kparams, "uploadToken", toParams(uploadToken));
	this.client.queueServiceActionCall("uploadtoken", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes the upload token by upload token id.
 * @param	uploadTokenId	string		 (optional).
 * @return	.
 */
KalturaUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadtoken", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get upload token by id.
 * @param	uploadTokenId	string		 (optional).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.get = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadtoken", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List upload token by filter with pager support. 
 *		 When using a user session the service will be restricted to users objects only..
 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUploadTokenListResponse.
 */
KalturaUploadTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uploadtoken", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 *		 Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 *		 A parallel upload session should have three stages:
 *		 1. A single upload with resume=false and finalChunk=false
 *		 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 *		 If a chunk fails to upload it can be re-uploaded.
 *		 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded 
 *		 with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 *		 has been returned (indicating not all of the chunks were appended yet) the final request can be retried..
 * @param	uploadTokenId	string		 (optional).
 * @param	fileData	file		 (optional).
 * @param	resume	bool		 (optional, default: false).
 * @param	finalChunk	bool		 (optional, default: true).
 * @param	resumeAt	float		 (optional, default: -1).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
	if(!resume)
		resume = false;
	if(!finalChunk)
		finalChunk = true;
	if(!resumeAt)
		resumeAt = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.addParam(kparams, "resume", resume);
	this.client.addParam(kparams, "finalChunk", finalChunk);
	this.client.addParam(kparams, "resumeAt", resumeAt);
	this.client.queueServiceActionCall("uploadtoken", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: userAppRole.
 * The available service actions:
 * @action	add	Assign an application role for a user.
 * @action	delete	Delete an application role for a user and app guid.
 * @action	get	Get an application role for a user and app guid.
 * @action	list	List an application roles by filter and pager.
 * @action	update	Update an application role for a user.
*/
function KalturaUserAppRoleService(client){
	this.init(client);
}
KalturaUserAppRoleService.inheritsFrom (KalturaServiceBase);
/**
 * Assign an application role for a user.
 * @param	userAppRole	KalturaUserAppRole		 (optional).
 * @return	KalturaUserAppRole.
 */
KalturaUserAppRoleService.prototype.add = function(callback, userAppRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userAppRole", toParams(userAppRole));
	this.client.queueServiceActionCall("userapprole", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an application role for a user and app guid.
 * @param	userId	string		the user id (optional).
 * @param	appGuid	string		the app-registry id (optional).
 * @return	bool.
 */
KalturaUserAppRoleService.prototype.deleteAction = function(callback, userId, appGuid){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "appGuid", appGuid);
	this.client.queueServiceActionCall("userapprole", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get an application role for a user and app guid.
 * @param	userId	string		the user id (optional).
 * @param	appGuid	string		the app-registry id (optional).
 * @return	KalturaUserAppRole.
 */
KalturaUserAppRoleService.prototype.get = function(callback, userId, appGuid){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "appGuid", appGuid);
	this.client.queueServiceActionCall("userapprole", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List an application roles by filter and pager.
 * @param	filter	KalturaUserAppRoleFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserAppRoleListResponse.
 */
KalturaUserAppRoleService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("userapprole", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an application role for a user.
 * @param	userId	string		 (optional).
 * @param	appGuid	string		 (optional).
 * @param	userAppRole	KalturaUserAppRole		 (optional).
 * @return	KalturaUserAppRole.
 */
KalturaUserAppRoleService.prototype.update = function(callback, userId, appGuid, userAppRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "appGuid", appGuid);
	this.client.addParam(kparams, "userAppRole", toParams(userAppRole));
	this.client.queueServiceActionCall("userapprole", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: userEntry.
 * The available service actions:
 * @action	add	Adds a user_entry to the Kaltura DB..
 * @action	bulkDelete	.
 * @action	delete	.
 * @action	get	.
 * @action	list	.
 * @action	submitQuiz	Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 * @action	update	.
*/
function KalturaUserEntryService(client){
	this.init(client);
}
KalturaUserEntryService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a user_entry to the Kaltura DB..
 * @param	userEntry	KalturaUserEntry		 (optional).
 * @return	KalturaUserEntry.
 */
KalturaUserEntryService.prototype.add = function(callback, userEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "userEntry", toParams(userEntry));
	this.client.queueServiceActionCall("userentry", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaUserEntryFilter		 (optional).
 * @return	int.
 * @return	.
 */
KalturaUserEntryService.prototype.bulkDelete = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("userentry", "bulkDelete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	int		 (optional).
 * @return	KalturaUserEntry.
 */
KalturaUserEntryService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("userentry", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	string		 (optional).
 * @return	KalturaUserEntry.
 */
KalturaUserEntryService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("userentry", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaUserEntryFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserEntryListResponse.
 */
KalturaUserEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("userentry", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 * @param	id	int		 (optional).
 * @return	KalturaQuizUserEntry.
 */
KalturaUserEntryService.prototype.submitQuiz = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("userentry", "submitQuiz", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	int		 (optional).
 * @param	userEntry	KalturaUserEntry		 (optional).
 * @return	KalturaUserEntry.
 */
KalturaUserEntryService.prototype.update = function(callback, id, userEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "userEntry", toParams(userEntry));
	this.client.queueServiceActionCall("userentry", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action	add	Adds a new user role object to the account..
 * @action	clone	Creates a new user role object that is a duplicate of an existing role..
 * @action	delete	Deletes an existing user role object..
 * @action	get	Retrieves a user role object using its ID..
 * @action	list	Lists user role objects that are associated with an account.
 *		 Blocked user roles are listed unless you use a filter to exclude them.
 *		 Deleted user roles are not listed unless you use a filter to include them..
 * @action	update	Updates an existing user role object..
*/
function KalturaUserRoleService(client){
	this.init(client);
}
KalturaUserRoleService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new user role object to the account..
 * @param	userRole	KalturaUserRole		A new role (optional).
 * @return	KalturaUserRole.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserRoleService.prototype.add = function(callback, userRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userRole", toParams(userRole));
	this.client.queueServiceActionCall("userrole", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Creates a new user role object that is a duplicate of an existing role..
 * @param	userRoleId	int		The user role's unique identifier (optional).
 * @return	KalturaUserRole.
 * @return	.
 */
KalturaUserRoleService.prototype.cloneAction = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userrole", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes an existing user role object..
 * @param	userRoleId	int		The user role's unique identifier (optional).
 * @return	KalturaUserRole.
 * @return	.
 * @return	.
 */
KalturaUserRoleService.prototype.deleteAction = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userrole", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a user role object using its ID..
 * @param	userRoleId	int		The user role's unique identifier (optional).
 * @return	KalturaUserRole.
 * @return	.
 */
KalturaUserRoleService.prototype.get = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userrole", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists user role objects that are associated with an account.
 *		 Blocked user roles are listed unless you use a filter to exclude them.
 *		 Deleted user roles are not listed unless you use a filter to include them..
 * @param	filter	KalturaUserRoleFilter		A filter used to exclude specific types of user roles (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaUserRoleListResponse.
 */
KalturaUserRoleService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("userrole", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Updates an existing user role object..
 * @param	userRoleId	int		The user role's unique identifier (optional).
 * @param	userRole	KalturaUserRole		Id The user role's unique identifier (optional).
 * @return	KalturaUserRole.
 * @return	.
 * @return	.
 */
KalturaUserRoleService.prototype.update = function(callback, userRoleId, userRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.addParam(kparams, "userRole", toParams(userRole));
	this.client.queueServiceActionCall("userrole", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action	add	Adds a new user to an existing account in the Kaltura database.
 *		 Input param $id is the unique identifier in the partner's system..
 * @action	addFromBulkUpload	.
 * @action	checkLoginDataExists	Action which checks whther user login.
 * @action	delete	Deletes a user from a partner account..
 * @action	demoteAdmin	.
 * @action	disableLogin	Disables a user's ability to log into a partner account using an email address and a password.
 *		 You may use either a userId or a loginId parameter for this action..
 * @action	enableLogin	Enables a user to log into a partner account using an email address and a password.
 * @action	exportToCsv	Creates a batch job that sends an email with a link to download a CSV containing a list of users.
 * @action	generateQrCode	get QR image content.
 * @action	get	Retrieves a user object for a specified user ID..
 * @action	getByLoginId	Retrieves a user object for a user's login ID and partner ID.
 *		 A login ID is the email address used by a user to log into the system..
 * @action	index	Index an entry by id..
 * @action	list	Lists user objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
 * @action	login	Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password..
 * @action	loginByKs	Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches.
 * @action	loginByLoginId	Logs a user into a partner account with a user login ID and a user password..
 * @action	loginDataResetPassword	Resets user login password.
 * @action	notifyBan	Notifies that a user is banned from an account..
 * @action	replaceUserLoginData	Replace a user's existing login data to a new or an existing login data
 *		 to only be used when admin impersonates a partner.
 * @action	resetPassword	Reset user's password and send the user an email to generate a new one..
 * @action	serveCsv	Will serve a requested CSV.
 * @action	setInitialPassword	Set initial user password.
 * @action	update	Updates an existing user object.
 *		 You can also use this action to update the userId..
 * @action	updateLoginData	Updates a user's login data: email, password, name..
 * @action	validateHashKey	Validate hash key.
*/
function KalturaUserService(client){
	this.init(client);
}
KalturaUserService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new user to an existing account in the Kaltura database.
 *		 Input param $id is the unique identifier in the partner's system..
 * @param	user	KalturaUser		The new user (optional).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.add = function(callback, user){
	var kparams = new Object();
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadUserData	KalturaBulkUploadUserData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadUserData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadUserData)
		bulkUploadUserData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadUserData != null)
		this.client.addParam(kparams, "bulkUploadUserData", toParams(bulkUploadUserData));
	this.client.queueServiceActionCall("user", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Action which checks whther user login.
 * @param	filter	KalturaUserLoginDataFilter		 (optional).
 * @return	bool.
 */
KalturaUserService.prototype.checkLoginDataExists = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("user", "checkLoginDataExists", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes a user from a partner account..
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @return	KalturaUser.
 * @return	.
 */
KalturaUserService.prototype.deleteAction = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	userId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.demoteAdmin = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "demoteAdmin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Disables a user's ability to log into a partner account using an email address and a password.
 *		 You may use either a userId or a loginId parameter for this action..
 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null).
 * @param	loginId	string		The user's email address that identifies the user for login (optional, default: null).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.disableLogin = function(callback, userId, loginId){
	if(!userId)
		userId = null;
	if(!loginId)
		loginId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "loginId", loginId);
	this.client.queueServiceActionCall("user", "disableLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Enables a user to log into a partner account using an email address and a password.
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @param	loginId	string		The user's email address that identifies the user for login (optional).
 * @param	password	string		The user's password (optional, default: null).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.enableLogin = function(callback, userId, loginId, password){
	if(!password)
		password = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "loginId", loginId);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("user", "enableLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Creates a batch job that sends an email with a link to download a CSV containing a list of users.
 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null).
 * @param	metadataProfileId	int		 (optional, default: null).
 * @param	additionalFields	array		 (optional, default: null).
 * @param	mappedFields	array		mapping between field (optional, default: null).
 * @param	options	KalturaExportToCsvOptions		 (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.exportToCsv = function(callback, filter, metadataProfileId, additionalFields, mappedFields, options){
	if(!filter)
		filter = null;
	if(!metadataProfileId)
		metadataProfileId = null;
	if(!additionalFields)
		additionalFields = null;
	if(!mappedFields)
		mappedFields = null;
	if(!options)
		options = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	if(additionalFields != null)
	for(var index in additionalFields)
	{
		var obj = additionalFields[index];
		this.client.addParam(kparams, "additionalFields:" + index, toParams(obj));
	}
	if(mappedFields != null)
	for(var index in mappedFields)
	{
		var obj = mappedFields[index];
		this.client.addParam(kparams, "mappedFields:" + index, toParams(obj));
	}
	if (options != null)
		this.client.addParam(kparams, "options", toParams(options));
	this.client.queueServiceActionCall("user", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * get QR image content.
 * @param	hashKey	string		 (optional).
 * @return	string.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.generateQrCode = function(callback, hashKey){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.queueServiceActionCall("user", "generateQrCode", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a user object for a specified user ID..
 * @param	userId	string		The user's unique identifier in the partner's system (optional, default: null).
 * @return	KalturaUser.
 * @return	.
 */
KalturaUserService.prototype.get = function(callback, userId){
	if(!userId)
		userId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a user object for a user's login ID and partner ID.
 *		 A login ID is the email address used by a user to log into the system..
 * @param	loginId	string		The user's email address that identifies the user for login (optional).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.getByLoginId = function(callback, loginId){
	var kparams = new Object();
	this.client.addParam(kparams, "loginId", loginId);
	this.client.queueServiceActionCall("user", "getByLoginId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index an entry by id..
 * @param	id	string		 (optional).
 * @param	shouldUpdate	bool		 (optional, default: true).
 * @return	string.
 * @return	.
 */
KalturaUserService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate)
		shouldUpdate = true;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("user", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists user objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
 * @param	filter	KalturaUserFilter		A filter used to exclude specific types of users (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaUserListResponse.
 */
KalturaUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("user", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password..
 * @param	partnerId	int		The identifier of the partner account (optional).
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @param	password	string		The user's password (optional).
 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400).
 * @param	privileges	string		Special privileges (optional, default: *).
 * @return	string.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "*";
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("user", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Logs a user to the destination account provided the KS' user ID is associated with the destination account and the loginData ID matches.
 * @param	requestedPartnerId	int		 (optional).
 * @return	KalturaSessionResponse.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.loginByKs = function(callback, requestedPartnerId){
	var kparams = new Object();
	this.client.addParam(kparams, "requestedPartnerId", requestedPartnerId);
	this.client.queueServiceActionCall("user", "loginByKs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Logs a user into a partner account with a user login ID and a user password..
 * @param	loginId	string		The user's email address that identifies the user for login (optional).
 * @param	password	string		The user's password (optional).
 * @param	partnerId	int		The identifier of the partner account (optional, default: null).
 * @param	expiry	int		The requested time (in seconds) before the generated KS expires (By default, a KS expires after 24 hours). (optional, default: 86400).
 * @param	privileges	string		Special privileges (optional, default: *).
 * @param	otp	string		the user's one-time password (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.loginByLoginId = function(callback, loginId, password, partnerId, expiry, privileges, otp){
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "*";
	if(!otp)
		otp = null;
	var kparams = new Object();
	this.client.addParam(kparams, "loginId", loginId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.addParam(kparams, "otp", otp);
	this.client.queueServiceActionCall("user", "loginByLoginId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Resets user login password.
 * @param	loginDataId	string		The user's current email address that identified the user for login (optional).
 * @param	newPassword	string		The user's new password (optional).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.loginDataResetPassword = function(callback, loginDataId, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "loginDataId", loginDataId);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("user", "loginDataResetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Notifies that a user is banned from an account..
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.notifyBan = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "notifyBan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Replace a user's existing login data to a new or an existing login data
 *		 to only be used when admin impersonates a partner.
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @param	newLoginId	string		The new user's email address that identifies the user for login (optional).
 * @param	existingLoginId	string		The user's email address that identifies the user for login (optional, default: null).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.replaceUserLoginData = function(callback, userId, newLoginId, existingLoginId){
	if(!existingLoginId)
		existingLoginId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "newLoginId", newLoginId);
	this.client.addParam(kparams, "existingLoginId", existingLoginId);
	this.client.queueServiceActionCall("user", "replaceUserLoginData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset user's password and send the user an email to generate a new one..
 * @param	email	string		The user's email address (login email) (optional).
 * @param	linkType	string		kmc or kms (optional, enum: KalturaResetPassLinkType, default: null).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.resetPassword = function(callback, email, linkType){
	if(!linkType)
		linkType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "linkType", linkType);
	this.client.queueServiceActionCall("user", "resetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will serve a requested CSV.
 * @param	id	string		- the requested file id (optional).
 * @return	string.
 */
KalturaUserService.prototype.serveCsv = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("user", "serveCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set initial user password.
 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional).
 * @param	newPassword	string		The new password to set for the user (optional).
 * @return	KalturaAuthentication.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("user", "setInitialPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Updates an existing user object.
 *		 You can also use this action to update the userId..
 * @param	userId	string		The user's unique identifier in the partner's system (optional).
 * @param	user	KalturaUser		Id The user's unique identifier in the partner's system (optional).
 * @return	KalturaUser.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.update = function(callback, userId, user){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Updates a user's login data: email, password, name..
 * @param	oldLoginId	string		The user's current email address that identified the user for login (optional).
 * @param	password	string		The user's current email address that identified the user for login (optional).
 * @param	newLoginId	string		Optional, The user's email address that will identify the user for login (optional).
 * @param	newPassword	string		Optional, The user's new password (optional).
 * @param	newFirstName	string		Optional, The user's new first name (optional, default: null).
 * @param	newLastName	string		Optional, The user's new last name (optional, default: null).
 * @param	otp	string		the user's one-time password (optional, default: null).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.updateLoginData = function(callback, oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName, otp){
	if(!newLoginId)
		newLoginId = "";
	if(!newPassword)
		newPassword = "";
	if(!newFirstName)
		newFirstName = null;
	if(!newLastName)
		newLastName = null;
	if(!otp)
		otp = null;
	var kparams = new Object();
	this.client.addParam(kparams, "oldLoginId", oldLoginId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newLoginId", newLoginId);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.addParam(kparams, "newFirstName", newFirstName);
	this.client.addParam(kparams, "newLastName", newLastName);
	this.client.addParam(kparams, "otp", otp);
	this.client.queueServiceActionCall("user", "updateLoginData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validate hash key.
 * @param	hashKey	string		The hash key used to identify the user (retrieved by email) (optional).
 * @return	KalturaAuthentication.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaUserService.prototype.validateHashKey = function(callback, hashKey){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.queueServiceActionCall("user", "validateHashKey", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action	add	Add new widget, can be attached to entry or kshow
 *		 SourceWidget is ignored..
 * @action	clone	Add widget based on existing widget.
 *		 Must provide valid sourceWidgetId.
 * @action	get	Get widget by id.
 * @action	list	Retrieve a list of available widget depends on the filter given.
 * @action	update	Update existing widget.
*/
function KalturaWidgetService(client){
	this.init(client);
}
KalturaWidgetService.inheritsFrom (KalturaServiceBase);
/**
 * Add new widget, can be attached to entry or kshow
 *		 SourceWidget is ignored..
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.add = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add widget based on existing widget.
 *		 Must provide valid sourceWidgetId.
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.cloneAction = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get widget by id.
 * @param	id	string		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("widget", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available widget depends on the filter given.
 * @param	filter	KalturaWidgetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaWidgetListResponse.
 */
KalturaWidgetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("widget", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing widget.
 * @param	id	string		 (optional).
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.update = function(callback, id, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action	add	Allows you to add a metadata object and metadata content associated with Kaltura object.
 * @action	addFromBulk	Allows you to add a metadata XML data from remote URL.
 *		 Enables different permissions than addFromUrl action..
 * @action	addFromFile	Allows you to add a metadata object and metadata file associated with Kaltura object.
 * @action	addFromUrl	Allows you to add a metadata XML data from remote URL.
 * @action	delete	Delete an existing metadata.
 * @action	get	Retrieve a metadata object by id.
 * @action	index	Index metadata by id, will also index the related object.
 * @action	invalidate	Mark existing metadata as invalid
 *		 Used by batch metadata transform.
 * @action	list	List metadata objects by filter and pager.
 * @action	update	Update an existing metadata object with new XML content.
 * @action	updateFromFile	Update an existing metadata object with new XML file.
 * @action	updateFromXSL	Action transforms current metadata object XML using a provided XSL..
*/
function KalturaMetadataService(client){
	this.init(client);
}
KalturaMetadataService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a metadata object and metadata content associated with Kaltura object.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlData	string		XML metadata (optional).
 * @return	KalturaMetadata.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.queueServiceActionCall("metadata_metadata", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata XML data from remote URL.
 *		 Enables different permissions than addFromUrl action..
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote URL (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata_metadata", "addFromBulk", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata file associated with Kaltura object.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlFile	file		XML metadata (optional).
 * @return	KalturaMetadata.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata_metadata", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata XML data from remote URL.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	string		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote URL (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata_metadata", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata_metadata", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata object by id.
 * @param	id	int		 (optional).
 * @return	KalturaMetadata.
 * @return	.
 */
KalturaMetadataService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata_metadata", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Index metadata by id, will also index the related object.
 * @param	id	string		 (optional).
 * @param	shouldUpdate	bool		 (optional).
 * @return	int.
 */
KalturaMetadataService.prototype.index = function(callback, id, shouldUpdate){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shouldUpdate", shouldUpdate);
	this.client.queueServiceActionCall("metadata_metadata", "index", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark existing metadata as invalid
 *		 Used by batch metadata transform.
 * @param	id	int		 (optional).
 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.invalidate = function(callback, id, version){
	if(!version)
		version = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("metadata_metadata", "invalidate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List metadata objects by filter and pager.
 * @param	filter	KalturaMetadataFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataListResponse.
 */
KalturaMetadataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadata_metadata", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML content.
 * @param	id	int		 (optional).
 * @param	xmlData	string		XML metadata (optional, default: null).
 * @param	version	int		Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return	KalturaMetadata.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.update = function(callback, id, xmlData, version){
	if(!xmlData)
		xmlData = null;
	if(!version)
		version = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("metadata_metadata", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML file.
 * @param	id	int		 (optional).
 * @param	xmlFile	file		XML metadata (optional, default: null).
 * @return	KalturaMetadata.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
	if(!xmlFile)
		xmlFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata_metadata", "updateFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Action transforms current metadata object XML using a provided XSL..
 * @param	id	int		 (optional).
 * @param	xslFile	file		 (optional).
 * @return	KalturaMetadata.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataService.prototype.updateFromXSL = function(callback, id, xslFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xslFile", xslFile);
	this.client.queueServiceActionCall("metadata_metadata", "updateFromXSL", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action	add	Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
 * @action	addFromFile	Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
 * @action	delete	Delete an existing metadata profile.
 * @action	get	Retrieve a metadata profile object by id.
 * @action	list	List metadata profile objects by filter and pager.
 * @action	listFields	List metadata profile fields by metadata profile id.
 * @action	revert	Update an existing metadata object definition file.
 * @action	update	Update an existing metadata object.
 * @action	updateDefinitionFromFile	Update an existing metadata object definition file.
 * @action	updateTransformationFromFile	Update an existing metadata object XSLT file.
 * @action	updateViewsFromFile	Update an existing metadata object views file.
*/
function KalturaMetadataProfileService(client){
	this.init(client);
}
KalturaMetadataProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional).
 * @param	viewsData	string		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
	if(!viewsData)
		viewsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadata_metadataprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @param	viewsFile	file		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 * @return	.
 */
KalturaMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
	if(!viewsFile)
		viewsFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadata_metadataprofile", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata profile.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata_metadataprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata profile object by id.
 * @param	id	int		 (optional).
 * @return	KalturaMetadataProfile.
 * @return	.
 */
KalturaMetadataProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata_metadataprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List metadata profile objects by filter and pager.
 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataProfileListResponse.
 */
KalturaMetadataProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadata_metadataprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List metadata profile fields by metadata profile id.
 * @param	metadataProfileId	int		 (optional).
 * @return	KalturaMetadataProfileFieldListResponse.
 */
KalturaMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.queueServiceActionCall("metadata_metadataprofile", "listFields", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file.
 * @param	id	int		 (optional).
 * @param	toVersion	int		 (optional).
 * @return	KalturaMetadataProfile.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.revert = function(callback, id, toVersion){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "toVersion", toVersion);
	this.client.queueServiceActionCall("metadata_metadataprofile", "revert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object.
 * @param	id	int		 (optional).
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional, default: null).
 * @param	viewsData	string		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
	if(!xsdData)
		xsdData = null;
	if(!viewsData)
		viewsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadata_metadataprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file.
 * @param	id	int		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @return	KalturaMetadataProfile.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.queueServiceActionCall("metadata_metadataprofile", "updateDefinitionFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object XSLT file.
 * @param	id	int		 (optional).
 * @param	xsltFile	file		XSLT file, will be executed on every metadata add/update (optional).
 * @return	KalturaMetadataProfile.
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.updateTransformationFromFile = function(callback, id, xsltFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsltFile", xsltFile);
	this.client.queueServiceActionCall("metadata_metadataprofile", "updateTransformationFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object views file.
 * @param	id	int		 (optional).
 * @param	viewsFile	file		UI views file (optional).
 * @return	KalturaMetadataProfile.
 * @return	.
 * @return	.
 */
KalturaMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadata_metadataprofile", "updateViewsFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action	addContent	Add content to document entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *		 If the requirement is to replace the entry's associated content, use action updateContent..
 * @action	addFromEntry	Copy entry into new entry.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry.
 * @action	addFromUploadedFile	Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action	approveReplace	Approves document replacement.
 * @action	cancelReplace	Cancels document replacement.
 * @action	convert	Convert entry.
 * @action	convertPptToSwf	This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
 * @action	delete	Delete a document entry..
 * @action	get	Get document entry by ID..
 * @action	list	List document entries by filter with paging support..
 * @action	update	Update document entry. Only the properties that were set will be updated..
 * @action	updateContent	Replace content associated with the given document entry..
 * @action	upload	Upload a document file to Kaltura, then the file can be used to create a document entry..
*/
function KalturaDocumentsService(client){
	this.init(client);
}
KalturaDocumentsService.inheritsFrom (KalturaServiceBase);
/**
 * Add content to document entry which is not yet associated with content (therefore is in status NO_CONTENT).
 *		 If the requirement is to replace the entry's associated content, use action updateContent..
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaResource		 (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addContent = function(callback, entryId, resource){
	if(!resource)
		resource = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (resource != null)
		this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("document_documents", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry.
 * @param	sourceEntryId	string		Document entry id to copy from (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return	KalturaDocumentEntry.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry)
		documentEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("document_documents", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @return	KalturaDocumentEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry)
		documentEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("document_documents", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaDocumentEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("document_documents", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approves document replacement.
 * @param	entryId	string		document entry id to replace (optional).
 * @return	KalturaDocumentEntry.
 * @return	.
 */
KalturaDocumentsService.prototype.approveReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document_documents", "approveReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Cancels document replacement.
 * @param	entryId	string		Document entry id to cancel (optional).
 * @return	KalturaDocumentEntry.
 * @return	.
 */
KalturaDocumentsService.prototype.cancelReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document_documents", "cancelReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry.
 * @param	entryId	string		Document entry id (optional).
 * @param	conversionProfileId	int		 (optional, default: null).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	bigint.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("document_documents", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *		 Returns the URL where the new swf will be available.
 * @param	entryId	string		 (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document_documents", "convertPptToSwf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a document entry..
 * @param	entryId	string		Document entry id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document_documents", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get document entry by ID..
 * @param	entryId	string		Document entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDocumentEntry.
 * @return	.
 */
KalturaDocumentsService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("document_documents", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support..
 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDocumentListResponse.
 */
KalturaDocumentsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("document_documents", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated..
 * @param	entryId	string		Document entry id to update (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional).
 * @return	KalturaDocumentEntry.
 * @return	.
 */
KalturaDocumentsService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("document_documents", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Replace content associated with the given document entry..
 * @param	entryId	string		document entry id to update (optional).
 * @param	resource	KalturaResource		Resource to be used to replace entry doc content (optional).
 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null).
 * @return	KalturaDocumentEntry.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDocumentsService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId)
		conversionProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("document_documents", "updateContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry..
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("document_documents", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: annotation.
 * The available service actions:
 * @action	add	Allows you to add an annotation object associated with an entry.
 * @action	addFromBulk	Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action	clone	Clone cuePoint with id to given entry.
 * @action	count	count cue point objects by filter.
 * @action	delete	delete cue point by id, and delete all children cue points.
 * @action	get	Retrieve an CuePoint object by id.
 * @action	list	List annotation objects by filter and pager.
 * @action	update	Update annotation by id.
 * @action	updateCuePointsTimes	.
 * @action	updateStatus	Update cuePoint status by id.
*/
function KalturaAnnotationService(client){
	this.init(client);
}
KalturaAnnotationService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add an annotation object associated with an entry.
 * @param	annotation	KalturaCuePoint		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.add = function(callback, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation_annotation", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param	fileData	file		 (optional).
 * @return	KalturaCuePointListResponse.
 * @return	.
 * @return	.
 */
KalturaAnnotationService.prototype.addFromBulk = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("annotation_annotation", "addFromBulk", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone cuePoint with id to given entry.
 * @param	id	string		 (optional).
 * @param	entryId	string		 (optional).
 * @param	parentId	string		 (optional, default: null).
 * @return	KalturaAnnotation.
 * @return	.
 * @return	.
 */
KalturaAnnotationService.prototype.cloneAction = function(callback, id, entryId, parentId){
	if(!parentId)
		parentId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "parentId", parentId);
	this.client.queueServiceActionCall("annotation_annotation", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * count cue point objects by filter.
 * @param	filter	KalturaCuePointFilter		 (optional, default: null).
 * @return	int.
 */
KalturaAnnotationService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("annotation_annotation", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete cue point by id, and delete all children cue points.
 * @param	id	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaAnnotationService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation_annotation", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an CuePoint object by id.
 * @param	id	string		 (optional).
 * @return	KalturaCuePoint.
 * @return	.
 */
KalturaAnnotationService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation_annotation", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List annotation objects by filter and pager.
 * @param	filter	KalturaCuePointFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAnnotationListResponse.
 */
KalturaAnnotationService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("annotation_annotation", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update annotation by id.
 * @param	id	string		 (optional).
 * @param	annotation	KalturaCuePoint		 (optional).
 * @return	KalturaAnnotation.
 * @return	.
 */
KalturaAnnotationService.prototype.update = function(callback, id, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation_annotation", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	string		 (optional).
 * @param	startTime	int		 (optional).
 * @param	endTime	int		 (optional, default: null).
 * @return	KalturaCuePoint.
 * @return	.
 */
KalturaAnnotationService.prototype.updateCuePointsTimes = function(callback, id, startTime, endTime){
	if(!endTime)
		endTime = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "startTime", startTime);
	this.client.addParam(kparams, "endTime", endTime);
	this.client.queueServiceActionCall("annotation_annotation", "updateCuePointsTimes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update cuePoint status by id.
 * @param	id	string		 (optional).
 * @param	status	int		 (optional, enum: KalturaCuePointStatus).
 * @return	.
 * @return	.
 */
KalturaAnnotationService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("annotation_annotation", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: aspera.
 * The available service actions:
 * @action	getFaspUrl	.
*/
function KalturaAsperaService(client){
	this.init(client);
}
KalturaAsperaService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	flavorAssetId	string		 (optional).
 * @return	string.
 */
KalturaAsperaService.prototype.getFaspUrl = function(callback, flavorAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.queueServiceActionCall("aspera_aspera", "getFaspUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: attUverse.
 * The available service actions:
*/
function KalturaAttUverseService(client){
	this.init(client);
}
KalturaAttUverseService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: attachmentAsset.
 * The available service actions:
 * @action	add	Add attachment asset.
 * @action	delete	.
 * @action	get	.
 * @action	getRemotePaths	Get remote storage existing paths for the asset.
 * @action	getUrl	Get download URL for the asset.
 * @action	list	List attachment Assets by filter and pager.
 * @action	setContent	Update content of attachment asset.
 * @action	update	Update attachment asset.
*/
function KalturaAttachmentAssetService(client){
	this.init(client);
}
KalturaAttachmentAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add attachment asset.
 * @param	entryId	string		 (optional).
 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional).
 * @return	KalturaAttachmentAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.add = function(callback, entryId, attachmentAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "attachmentAsset", toParams(attachmentAsset));
	this.client.queueServiceActionCall("attachment_attachmentasset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	attachmentAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.deleteAction = function(callback, attachmentAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "attachmentAssetId", attachmentAssetId);
	this.client.queueServiceActionCall("attachment_attachmentasset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	attachmentAssetId	string		 (optional).
 * @return	KalturaAttachmentAsset.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.get = function(callback, attachmentAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "attachmentAssetId", attachmentAssetId);
	this.client.queueServiceActionCall("attachment_attachmentasset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset.
 * @param	id	string		 (optional).
 * @return	KalturaRemotePathListResponse.
 * @return	.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("attachment_attachmentasset", "getRemotePaths", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the asset.
 * @param	id	string		 (optional).
 * @param	storageId	int		 (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId)
		storageId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "storageId", storageId);
	this.client.queueServiceActionCall("attachment_attachmentasset", "getUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List attachment Assets by filter and pager.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAttachmentAssetListResponse.
 */
KalturaAttachmentAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("attachment_attachmentasset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of attachment asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaAttachmentAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("attachment_attachmentasset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update attachment asset.
 * @param	id	string		 (optional).
 * @param	attachmentAsset	KalturaAttachmentAsset		 (optional).
 * @return	KalturaAttachmentAsset.
 * @return	.
 */
KalturaAttachmentAssetService.prototype.update = function(callback, id, attachmentAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "attachmentAsset", toParams(attachmentAsset));
	this.client.queueServiceActionCall("attachment_attachmentasset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action	add	Allows you to add an audit trail object and audit trail content associated with Kaltura object.
 * @action	get	Retrieve an audit trail object by id.
 * @action	list	List audit trail objects by filter and pager.
*/
function KalturaAuditTrailService(client){
	this.init(client);
}
KalturaAuditTrailService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add an audit trail object and audit trail content associated with Kaltura object.
 * @param	auditTrail	KalturaAuditTrail		 (optional).
 * @return	KalturaAuditTrail.
 * @return	.
 */
KalturaAuditTrailService.prototype.add = function(callback, auditTrail){
	var kparams = new Object();
	this.client.addParam(kparams, "auditTrail", toParams(auditTrail));
	this.client.queueServiceActionCall("audit_audittrail", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an audit trail object by id.
 * @param	id	int		 (optional).
 * @return	KalturaAuditTrail.
 * @return	.
 */
KalturaAuditTrailService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("audit_audittrail", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List audit trail objects by filter and pager.
 * @param	filter	KalturaAuditTrailFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAuditTrailListResponse.
 */
KalturaAuditTrailService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("audit_audittrail", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bulk.
 * The available service actions:
 * @action	abort	Aborts the bulk upload and all its child jobs.
 * @action	get	Get bulk upload batch job by id.
 * @action	list	List bulk upload batch jobs.
*/
function KalturaBulkService(client){
	this.init(client);
}
KalturaBulkService.inheritsFrom (KalturaServiceBase);
/**
 * Aborts the bulk upload and all its child jobs.
 * @param	id	int		job id (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkService.prototype.abort = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkupload_bulk", "abort", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get bulk upload batch job by id.
 * @param	id	int		 (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkupload_bulk", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List bulk upload batch jobs.
 * @param	bulkUploadFilter	KalturaBulkUploadFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBulkUploadListResponse.
 */
KalturaBulkService.prototype.listAction = function(callback, bulkUploadFilter, pager){
	if(!bulkUploadFilter)
		bulkUploadFilter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (bulkUploadFilter != null)
		this.client.addParam(kparams, "bulkUploadFilter", toParams(bulkUploadFilter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("bulkupload_bulk", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bumper.
 * The available service actions:
 * @action	add	Adds a bumper to an entry.
 * @action	delete	Delete bumper by EntryId.
 * @action	get	Allows to get the bumper.
 * @action	update	Allows to update a bumper.
*/
function KalturaBumperService(client){
	this.init(client);
}
KalturaBumperService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a bumper to an entry.
 * @param	entryId	string		 (optional).
 * @param	bumper	KalturaBumper		 (optional).
 * @return	KalturaBumper.
 * @return	.
 * @return	.
 */
KalturaBumperService.prototype.add = function(callback, entryId, bumper){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "bumper", toParams(bumper));
	this.client.queueServiceActionCall("bumper_bumper", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete bumper by EntryId.
 * @param	entryId	string		 (optional).
 * @return	KalturaBumper.
 * @return	.
 * @return	.
 */
KalturaBumperService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("bumper_bumper", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows to get the bumper.
 * @param	entryId	string		 (optional).
 * @return	KalturaBumper.
 * @return	.
 */
KalturaBumperService.prototype.get = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("bumper_bumper", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows to update a bumper.
 * @param	entryId	string		 (optional).
 * @param	bumper	KalturaBumper		 (optional).
 * @return	KalturaBumper.
 * @return	.
 * @return	.
 */
KalturaBumperService.prototype.update = function(callback, entryId, bumper){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "bumper", toParams(bumper));
	this.client.queueServiceActionCall("bumper_bumper", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: captionAsset.
 * The available service actions:
 * @action	add	Add caption asset.
 * @action	delete	.
 * @action	export	manually export an asset.
 * @action	get	.
 * @action	getRemotePaths	Get remote storage existing paths for the asset.
 * @action	getUrl	Get download URL for the asset.
 * @action	list	List caption Assets by filter and pager.
 * @action	setAsDefault	Markss the caption as default and removes that mark from all other caption assets of the entry..
 * @action	setContent	Update content of caption asset.
 * @action	update	Update caption asset.
*/
function KalturaCaptionAssetService(client){
	this.init(client);
}
KalturaCaptionAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add caption asset.
 * @param	entryId	string		 (optional).
 * @param	captionAsset	KalturaCaptionAsset		 (optional).
 * @return	KalturaCaptionAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.add = function(callback, entryId, captionAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "captionAsset", toParams(captionAsset));
	this.client.queueServiceActionCall("caption_captionasset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	captionAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.deleteAction = function(callback, captionAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "captionAssetId", captionAssetId);
	this.client.queueServiceActionCall("caption_captionasset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * manually export an asset.
 * @param	assetId	string		 (optional).
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaFlavorAsset.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.exportAction = function(callback, assetId, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "assetId", assetId);
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("caption_captionasset", "export", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	captionAssetId	string		 (optional).
 * @return	KalturaCaptionAsset.
 * @return	.
 */
KalturaCaptionAssetService.prototype.get = function(callback, captionAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "captionAssetId", captionAssetId);
	this.client.queueServiceActionCall("caption_captionasset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset.
 * @param	id	string		 (optional).
 * @return	KalturaRemotePathListResponse.
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.getRemotePaths = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("caption_captionasset", "getRemotePaths", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the asset.
 * @param	id	string		 (optional).
 * @param	storageId	int		 (optional, default: null).
 * @return	string.
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId)
		storageId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "storageId", storageId);
	this.client.queueServiceActionCall("caption_captionasset", "getUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List caption Assets by filter and pager.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCaptionAssetListResponse.
 */
KalturaCaptionAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("caption_captionasset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Markss the caption as default and removes that mark from all other caption assets of the entry..
 * @param	captionAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.setAsDefault = function(callback, captionAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "captionAssetId", captionAssetId);
	this.client.queueServiceActionCall("caption_captionasset", "setAsDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of caption asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaCaptionAsset.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaCaptionAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("caption_captionasset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update caption asset.
 * @param	id	string		 (optional).
 * @param	captionAsset	KalturaCaptionAsset		 (optional).
 * @return	KalturaCaptionAsset.
 * @return	.
 */
KalturaCaptionAssetService.prototype.update = function(callback, id, captionAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "captionAsset", toParams(captionAsset));
	this.client.queueServiceActionCall("caption_captionasset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: captionParams.
 * The available service actions:
 * @action	add	Add new Caption Params.
 * @action	delete	Delete Caption Params by ID.
 * @action	get	Get Caption Params by ID.
 * @action	list	List Caption Params by filter with paging support (By default - all system default params will be listed too).
 * @action	update	Update Caption Params by ID.
*/
function KalturaCaptionParamsService(client){
	this.init(client);
}
KalturaCaptionParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Caption Params.
 * @param	captionParams	KalturaCaptionParams		 (optional).
 * @return	KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.add = function(callback, captionParams){
	var kparams = new Object();
	this.client.addParam(kparams, "captionParams", toParams(captionParams));
	this.client.queueServiceActionCall("caption_captionparams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Caption Params by ID.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaCaptionParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("caption_captionparams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Caption Params by ID.
 * @param	id	int		 (optional).
 * @return	KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("caption_captionparams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
 * @param	filter	KalturaCaptionParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCaptionParamsListResponse.
 */
KalturaCaptionParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("caption_captionparams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Caption Params by ID.
 * @param	id	int		 (optional).
 * @param	captionParams	KalturaCaptionParams		 (optional).
 * @return	KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.update = function(callback, id, captionParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "captionParams", toParams(captionParams));
	this.client.queueServiceActionCall("caption_captionparams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: captionAssetItem.
 * The available service actions:
 * @action	list	List caption asset items by filter and pager.
 * @action	parse	Parse content of caption asset and index it.
 * @action	search	Search caption asset items by filter, pager and free text.
 * @action	searchEntries	Search caption asset items by filter, pager and free text.
*/
function KalturaCaptionAssetItemService(client){
	this.init(client);
}
KalturaCaptionAssetItemService.inheritsFrom (KalturaServiceBase);
/**
 * List caption asset items by filter and pager.
 * @param	captionAssetId	string		 (optional).
 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null).
 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCaptionAssetItemListResponse.
 */
KalturaCaptionAssetItemService.prototype.listAction = function(callback, captionAssetId, captionAssetItemFilter, captionAssetItemPager){
	if(!captionAssetItemFilter)
		captionAssetItemFilter = null;
	if(!captionAssetItemPager)
		captionAssetItemPager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "captionAssetId", captionAssetId);
	if (captionAssetItemFilter != null)
		this.client.addParam(kparams, "captionAssetItemFilter", toParams(captionAssetItemFilter));
	if (captionAssetItemPager != null)
		this.client.addParam(kparams, "captionAssetItemPager", toParams(captionAssetItemPager));
	this.client.queueServiceActionCall("captionsearch_captionassetitem", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Parse content of caption asset and index it.
 * @param	captionAssetId	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaCaptionAssetItemService.prototype.parse = function(callback, captionAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "captionAssetId", captionAssetId);
	this.client.queueServiceActionCall("captionsearch_captionassetitem", "parse", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search caption asset items by filter, pager and free text.
 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null).
 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null).
 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCaptionAssetItemListResponse.
 */
KalturaCaptionAssetItemService.prototype.search = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter)
		entryFilter = null;
	if(!captionAssetItemFilter)
		captionAssetItemFilter = null;
	if(!captionAssetItemPager)
		captionAssetItemPager = null;
	var kparams = new Object();
	if (entryFilter != null)
		this.client.addParam(kparams, "entryFilter", toParams(entryFilter));
	if (captionAssetItemFilter != null)
		this.client.addParam(kparams, "captionAssetItemFilter", toParams(captionAssetItemFilter));
	if (captionAssetItemPager != null)
		this.client.addParam(kparams, "captionAssetItemPager", toParams(captionAssetItemPager));
	this.client.queueServiceActionCall("captionsearch_captionassetitem", "search", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search caption asset items by filter, pager and free text.
 * @param	entryFilter	KalturaBaseEntryFilter		 (optional, default: null).
 * @param	captionAssetItemFilter	KalturaCaptionAssetItemFilter		 (optional, default: null).
 * @param	captionAssetItemPager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBaseEntryListResponse.
 */
KalturaCaptionAssetItemService.prototype.searchEntries = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter)
		entryFilter = null;
	if(!captionAssetItemFilter)
		captionAssetItemFilter = null;
	if(!captionAssetItemPager)
		captionAssetItemPager = null;
	var kparams = new Object();
	if (entryFilter != null)
		this.client.addParam(kparams, "entryFilter", toParams(entryFilter));
	if (captionAssetItemFilter != null)
		this.client.addParam(kparams, "captionAssetItemFilter", toParams(captionAssetItemFilter));
	if (captionAssetItemPager != null)
		this.client.addParam(kparams, "captionAssetItemPager", toParams(captionAssetItemPager));
	this.client.queueServiceActionCall("captionsearch_captionassetitem", "searchEntries", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: distributionProfile.
 * The available service actions:
 * @action	add	Add new Distribution Profile.
 * @action	delete	Delete Distribution Profile by id.
 * @action	get	Get Distribution Profile by id.
 * @action	list	List all distribution providers.
 * @action	listByPartner	.
 * @action	update	Update Distribution Profile by id.
 * @action	updateStatus	Update Distribution Profile status by id.
*/
function KalturaDistributionProfileService(client){
	this.init(client);
}
KalturaDistributionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Distribution Profile.
 * @param	distributionProfile	KalturaDistributionProfile		 (optional).
 * @return	KalturaDistributionProfile.
 * @return	.
 */
KalturaDistributionProfileService.prototype.add = function(callback, distributionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "distributionProfile", toParams(distributionProfile));
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Distribution Profile by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaDistributionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Distribution Profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaDistributionProfile.
 * @return	.
 */
KalturaDistributionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers.
 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "listByPartner", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Distribution Profile by id.
 * @param	id	int		 (optional).
 * @param	distributionProfile	KalturaDistributionProfile		 (optional).
 * @return	KalturaDistributionProfile.
 * @return	.
 */
KalturaDistributionProfileService.prototype.update = function(callback, id, distributionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "distributionProfile", toParams(distributionProfile));
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Distribution Profile status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus).
 * @return	KalturaDistributionProfile.
 * @return	.
 */
KalturaDistributionProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("contentdistribution_distributionprofile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: entryDistribution.
 * The available service actions:
 * @action	add	Add new Entry Distribution.
 * @action	delete	Delete Entry Distribution by id.
 * @action	get	Get Entry Distribution by id.
 * @action	list	List all distribution providers.
 * @action	retrySubmit	Retries last submit action.
 * @action	submitAdd	Submits Entry Distribution to the remote destination.
 * @action	submitDelete	Deletes Entry Distribution from the remote destination.
 * @action	submitFetchReport	Submits Entry Distribution report request.
 * @action	submitUpdate	Submits Entry Distribution changes to the remote destination.
 * @action	update	Update Entry Distribution by id.
 * @action	validate	Validates Entry Distribution by id for submission.
*/
function KalturaEntryDistributionService(client){
	this.init(client);
}
KalturaEntryDistributionService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Entry Distribution.
 * @param	entryDistribution	KalturaEntryDistribution		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.add = function(callback, entryDistribution){
	var kparams = new Object();
	this.client.addParam(kparams, "entryDistribution", toParams(entryDistribution));
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Entry Distribution by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Entry Distribution by id.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 */
KalturaEntryDistributionService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers.
 * @param	filter	KalturaEntryDistributionFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEntryDistributionListResponse.
 */
KalturaEntryDistributionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retries last submit action.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.retrySubmit = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "retrySubmit", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution to the remote destination.
 * @param	id	int		 (optional).
 * @param	submitWhenReady	bool		 (optional, default: false).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.submitAdd = function(callback, id, submitWhenReady){
	if(!submitWhenReady)
		submitWhenReady = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "submitWhenReady", submitWhenReady);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "submitAdd", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes Entry Distribution from the remote destination.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.submitDelete = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "submitDelete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution report request.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.submitFetchReport = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "submitFetchReport", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution changes to the remote destination.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.submitUpdate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "submitUpdate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Entry Distribution by id.
 * @param	id	int		 (optional).
 * @param	entryDistribution	KalturaEntryDistribution		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 */
KalturaEntryDistributionService.prototype.update = function(callback, id, entryDistribution){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryDistribution", toParams(entryDistribution));
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validates Entry Distribution by id for submission.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryDistributionService.prototype.validate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_entrydistribution", "validate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: distributionProvider.
 * The available service actions:
 * @action	list	List all distribution providers.
*/
function KalturaDistributionProviderService(client){
	this.init(client);
}
KalturaDistributionProviderService.inheritsFrom (KalturaServiceBase);
/**
 * List all distribution providers.
 * @param	filter	KalturaDistributionProviderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProviderListResponse.
 */
KalturaDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_distributionprovider", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 * The available service actions:
 * @action	add	Add new Generic Distribution Provider.
 * @action	delete	Delete Generic Distribution Provider by id.
 * @action	get	Get Generic Distribution Provider by id.
 * @action	list	List all distribution providers.
 * @action	update	Update Generic Distribution Provider by id.
*/
function KalturaGenericDistributionProviderService(client){
	this.init(client);
}
KalturaGenericDistributionProviderService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Generic Distribution Provider.
 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional).
 * @return	KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.add = function(callback, genericDistributionProvider){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProvider", toParams(genericDistributionProvider));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider by id.
 * @param	id	int		 (optional).
 * @return	KalturaGenericDistributionProvider.
 * @return	.
 */
KalturaGenericDistributionProviderService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers.
 * @param	filter	KalturaGenericDistributionProviderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaGenericDistributionProviderListResponse.
 */
KalturaGenericDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider by id.
 * @param	id	int		 (optional).
 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional).
 * @return	KalturaGenericDistributionProvider.
 * @return	.
 */
KalturaGenericDistributionProviderService.prototype.update = function(callback, id, genericDistributionProvider){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "genericDistributionProvider", toParams(genericDistributionProvider));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovider", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 * The available service actions:
 * @action	add	Add new Generic Distribution Provider Action.
 * @action	addMrssTransform	Add MRSS transform file to generic distribution provider action.
 * @action	addMrssTransformFromFile	Add MRSS transform file to generic distribution provider action.
 * @action	addMrssValidate	Add MRSS validate file to generic distribution provider action.
 * @action	addMrssValidateFromFile	Add MRSS validate file to generic distribution provider action.
 * @action	addResultsTransform	Add results transform file to generic distribution provider action.
 * @action	addResultsTransformFromFile	Add MRSS transform file to generic distribution provider action.
 * @action	delete	Delete Generic Distribution Provider Action by id.
 * @action	deleteByProviderId	Delete Generic Distribution Provider Action by provider id.
 * @action	get	Get Generic Distribution Provider Action by id.
 * @action	getByProviderId	Get Generic Distribution Provider Action by provider id.
 * @action	list	List all distribution providers.
 * @action	update	Update Generic Distribution Provider Action by id.
 * @action	updateByProviderId	Update Generic Distribution Provider Action by provider id.
*/
function KalturaGenericDistributionProviderActionService(client){
	this.init(client);
}
KalturaGenericDistributionProviderActionService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Generic Distribution Provider Action.
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.add = function(callback, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xslData	string		XSL MRSS transformation data (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransform = function(callback, id, xslData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xslData", xslData);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addMrssTransform", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xslFile	file		XSL MRSS transformation file (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransformFromFile = function(callback, id, xslFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xslFile", xslFile);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addMrssTransformFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xsdData	string		XSD MRSS validatation data (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidate = function(callback, id, xsdData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addMrssValidate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xsdFile	file		XSD MRSS validatation file (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidateFromFile = function(callback, id, xsdFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addMrssValidateFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add results transform file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	transformData	string		transformation data xsl, xPath or regex (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransform = function(callback, id, transformData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "transformData", transformData);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addResultsTransform", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	transformFile	file		transformation file xsl, xPath or regex (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransformFromFile = function(callback, id, transformFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "transformFile", transformFile);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "addResultsTransformFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by provider id.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @return	.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.deleteByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "deleteByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by id.
 * @param	id	int		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by provider id.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.getByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "getByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers.
 * @param	filter	KalturaGenericDistributionProviderActionFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaGenericDistributionProviderActionListResponse.
 */
KalturaGenericDistributionProviderActionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by id.
 * @param	id	int		 (optional).
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.update = function(callback, id, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by provider id.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.updateByProviderId = function(callback, genericDistributionProviderId, actionType, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("contentdistribution_genericdistributionprovideraction", "updateByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: cuePoint.
 * The available service actions:
 * @action	add	Allows you to add an cue point object associated with an entry.
 * @action	addFromBulk	Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action	clone	Clone cuePoint with id to given entry.
 * @action	count	count cue point objects by filter.
 * @action	delete	delete cue point by id, and delete all children cue points.
 * @action	get	Retrieve an CuePoint object by id.
 * @action	list	List cue point objects by filter and pager.
 * @action	update	Update cue point by id.
 * @action	updateCuePointsTimes	.
 * @action	updateStatus	Update cuePoint status by id.
*/
function KalturaCuePointService(client){
	this.init(client);
}
KalturaCuePointService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add an cue point object associated with an entry.
 * @param	cuePoint	KalturaCuePoint		 (optional).
 * @return	KalturaCuePoint.
 */
KalturaCuePointService.prototype.add = function(callback, cuePoint){
	var kparams = new Object();
	this.client.addParam(kparams, "cuePoint", toParams(cuePoint));
	this.client.queueServiceActionCall("cuepoint_cuepoint", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param	fileData	file		 (optional).
 * @return	KalturaCuePointListResponse.
 * @return	.
 * @return	.
 */
KalturaCuePointService.prototype.addFromBulk = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "addFromBulk", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone cuePoint with id to given entry.
 * @param	id	string		 (optional).
 * @param	entryId	string		 (optional).
 * @return	KalturaCuePoint.
 * @return	.
 * @return	.
 */
KalturaCuePointService.prototype.cloneAction = function(callback, id, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * count cue point objects by filter.
 * @param	filter	KalturaCuePointFilter		 (optional, default: null).
 * @return	int.
 */
KalturaCuePointService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("cuepoint_cuepoint", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete cue point by id, and delete all children cue points.
 * @param	id	string		 (optional).
 * @return	.
 * @return	.
 */
KalturaCuePointService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an CuePoint object by id.
 * @param	id	string		 (optional).
 * @return	KalturaCuePoint.
 * @return	.
 */
KalturaCuePointService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List cue point objects by filter and pager.
 * @param	filter	KalturaCuePointFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaCuePointListResponse.
 */
KalturaCuePointService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("cuepoint_cuepoint", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update cue point by id.
 * @param	id	string		 (optional).
 * @param	cuePoint	KalturaCuePoint		 (optional).
 * @return	KalturaCuePoint.
 * @return	.
 */
KalturaCuePointService.prototype.update = function(callback, id, cuePoint){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "cuePoint", toParams(cuePoint));
	this.client.queueServiceActionCall("cuepoint_cuepoint", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	string		 (optional).
 * @param	startTime	int		 (optional).
 * @param	endTime	int		 (optional, default: null).
 * @return	KalturaCuePoint.
 * @return	.
 */
KalturaCuePointService.prototype.updateCuePointsTimes = function(callback, id, startTime, endTime){
	if(!endTime)
		endTime = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "startTime", startTime);
	this.client.addParam(kparams, "endTime", endTime);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "updateCuePointsTimes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update cuePoint status by id.
 * @param	id	string		 (optional).
 * @param	status	int		 (optional, enum: KalturaCuePointStatus).
 * @return	.
 * @return	.
 */
KalturaCuePointService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("cuepoint_cuepoint", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: dropFolder.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaDropFolder object.
 * @action	delete	Mark the KalturaDropFolder object as deleted.
 * @action	freeExclusiveDropFolder	freeExclusive KalturaDropFolder object.
 * @action	get	Retrieve a KalturaDropFolder object by ID.
 * @action	getExclusiveDropFolder	getExclusive KalturaDropFolder object.
 * @action	list	List KalturaDropFolder objects.
 * @action	update	Update an existing KalturaDropFolder object.
 * @action	updateBasicFields	.
 * @action	updateStatus	.
*/
function KalturaDropFolderService(client){
	this.init(client);
}
KalturaDropFolderService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolder object.
 * @param	dropFolder	KalturaDropFolder		 (optional).
 * @return	KalturaDropFolder.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDropFolderService.prototype.add = function(callback, dropFolder){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolder", toParams(dropFolder));
	this.client.queueServiceActionCall("dropfolder_dropfolder", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolder object as deleted.
 * @param	dropFolderId	int		 (optional).
 * @return	KalturaDropFolder.
 * @return	.
 */
KalturaDropFolderService.prototype.deleteAction = function(callback, dropFolderId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.queueServiceActionCall("dropfolder_dropfolder", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * freeExclusive KalturaDropFolder object.
 * @param	dropFolderId	int		 (optional).
 * @param	errorCode	string		 (optional, default: null).
 * @param	errorDescription	string		 (optional, default: null).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.freeExclusiveDropFolder = function(callback, dropFolderId, errorCode, errorDescription){
	if(!errorCode)
		errorCode = null;
	if(!errorDescription)
		errorDescription = null;
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.addParam(kparams, "errorCode", errorCode);
	this.client.addParam(kparams, "errorDescription", errorDescription);
	this.client.queueServiceActionCall("dropfolder_dropfolder", "freeExclusiveDropFolder", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolder object by ID.
 * @param	dropFolderId	int		 (optional).
 * @return	KalturaDropFolder.
 * @return	.
 */
KalturaDropFolderService.prototype.get = function(callback, dropFolderId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.queueServiceActionCall("dropfolder_dropfolder", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * getExclusive KalturaDropFolder object.
 * @param	tag	string		 (optional).
 * @param	maxTime	int		 (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.getExclusiveDropFolder = function(callback, tag, maxTime){
	var kparams = new Object();
	this.client.addParam(kparams, "tag", tag);
	this.client.addParam(kparams, "maxTime", maxTime);
	this.client.queueServiceActionCall("dropfolder_dropfolder", "getExclusiveDropFolder", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDropFolder objects.
 * @param	filter	KalturaDropFolderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDropFolderListResponse.
 */
KalturaDropFolderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("dropfolder_dropfolder", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolder object.
 * @param	dropFolderId	int		 (optional).
 * @param	dropFolder	KalturaDropFolder		Id (optional).
 * @return	KalturaDropFolder.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDropFolderService.prototype.update = function(callback, dropFolderId, dropFolder){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.addParam(kparams, "dropFolder", toParams(dropFolder));
	this.client.queueServiceActionCall("dropfolder_dropfolder", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	dropFolderId	int		 (optional).
 * @param	dropFolder	KalturaBasicFieldsDropFolder		Id (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.updateBasicFields = function(callback, dropFolderId, dropFolder){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.addParam(kparams, "dropFolder", toParams(dropFolder));
	this.client.queueServiceActionCall("dropfolder_dropfolder", "updateBasicFields", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	dropFolderId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaDropFolderStatus).
 * @return	.
 */
KalturaDropFolderService.prototype.updateStatus = function(callback, dropFolderId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("dropfolder_dropfolder", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: dropFolderFile.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaDropFolderFile object.
 * @action	delete	Mark the KalturaDropFolderFile object as deleted.
 * @action	get	Retrieve a KalturaDropFolderFile object by ID.
 * @action	ignore	Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
 * @action	list	List KalturaDropFolderFile objects.
 * @action	update	Update an existing KalturaDropFolderFile object.
 * @action	updateStatus	Update status of KalturaDropFolderFile.
*/
function KalturaDropFolderFileService(client){
	this.init(client);
}
KalturaDropFolderFileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolderFile object.
 * @param	dropFolderFile	KalturaDropFolderFile		 (optional).
 * @return	KalturaDropFolderFile.
 * @return	.
 * @return	.
 */
KalturaDropFolderFileService.prototype.add = function(callback, dropFolderFile){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFile", toParams(dropFolderFile));
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolderFile object as deleted.
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 * @return	.
 */
KalturaDropFolderFileService.prototype.deleteAction = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolderFile object by ID.
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 * @return	.
 */
KalturaDropFolderFileService.prototype.get = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE).
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 * @return	.
 */
KalturaDropFolderFileService.prototype.ignore = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "ignore", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDropFolderFile objects.
 * @param	filter	KalturaDropFolderFileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDropFolderFileListResponse.
 */
KalturaDropFolderFileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolderFile object.
 * @param	dropFolderFileId	int		 (optional).
 * @param	dropFolderFile	KalturaDropFolderFile		Id (optional).
 * @return	KalturaDropFolderFile.
 * @return	.
 */
KalturaDropFolderFileService.prototype.update = function(callback, dropFolderFileId, dropFolderFile){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.addParam(kparams, "dropFolderFile", toParams(dropFolderFile));
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update status of KalturaDropFolderFile.
 * @param	dropFolderFileId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaDropFolderFileStatus).
 * @return	KalturaDropFolderFile.
 * @return	.
 */
KalturaDropFolderFileService.prototype.updateStatus = function(callback, dropFolderFileId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("dropfolder_dropfolderfile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: eventNotificationTemplate.
 * The available service actions:
 * @action	add	This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead..
 * @action	clone	This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action..
 * @action	delete	Delete an event notification template object.
 * @action	dispatch	Dispatch event notification object by id.
 * @action	get	Retrieve an event notification template object by id.
 * @action	list	list event notification template objects.
 * @action	listByPartner	.
 * @action	listTemplates	Action lists the template partner event notification templates..
 * @action	register	Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 * @action	sendCommand	Clear queue messages.
 * @action	update	Update an existing event notification template object.
 * @action	updateStatus	Update event notification template status by id.
*/
function KalturaEventNotificationTemplateService(client){
	this.init(client);
}
KalturaEventNotificationTemplateService.inheritsFrom (KalturaServiceBase);
/**
 * This action allows for the creation of new backend event types in the system. This action requires access to the Kaltura server Admin Console. If you're looking to register to existing event types, please use the clone action instead..
 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional).
 * @return	KalturaEventNotificationTemplate.
 */
KalturaEventNotificationTemplateService.prototype.add = function(callback, eventNotificationTemplate){
	var kparams = new Object();
	this.client.addParam(kparams, "eventNotificationTemplate", toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action..
 * @param	id	int		source template to clone (optional).
 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		overwrite configuration object (optional, default: null).
 * @return	KalturaEventNotificationTemplate.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.cloneAction = function(callback, id, eventNotificationTemplate){
	if(!eventNotificationTemplate)
		eventNotificationTemplate = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	if (eventNotificationTemplate != null)
		this.client.addParam(kparams, "eventNotificationTemplate", toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an event notification template object.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Dispatch event notification object by id.
 * @param	id	int		 (optional).
 * @param	scope	KalturaEventNotificationScope		 (optional).
 * @return	int.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.dispatch = function(callback, id, scope){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "scope", toParams(scope));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "dispatch", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an event notification template object by id.
 * @param	id	int		 (optional).
 * @return	KalturaEventNotificationTemplate.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * list event notification template objects.
 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "listByPartner", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Action lists the template partner event notification templates..
 * @param	filter	KalturaEventNotificationTemplateFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEventNotificationTemplateListResponse.
 */
KalturaEventNotificationTemplateService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "listTemplates", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional).
 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional).
 * @return	KalturaPushNotificationData.
 */
KalturaEventNotificationTemplateService.prototype.register = function(callback, notificationTemplateSystemName, pushNotificationParams){
	var kparams = new Object();
	this.client.addParam(kparams, "notificationTemplateSystemName", notificationTemplateSystemName);
	this.client.addParam(kparams, "pushNotificationParams", toParams(pushNotificationParams));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "register", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clear queue messages.
 * @param	notificationTemplateSystemName	string		Existing push notification template system name (optional).
 * @param	pushNotificationParams	KalturaPushNotificationParams		 (optional).
 * @param	command	string		Command to be sent to push server (optional, enum: KalturaPushNotificationCommandType).
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.sendCommand = function(callback, notificationTemplateSystemName, pushNotificationParams, command){
	var kparams = new Object();
	this.client.addParam(kparams, "notificationTemplateSystemName", notificationTemplateSystemName);
	this.client.addParam(kparams, "pushNotificationParams", toParams(pushNotificationParams));
	this.client.addParam(kparams, "command", command);
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "sendCommand", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing event notification template object.
 * @param	id	int		 (optional).
 * @param	eventNotificationTemplate	KalturaEventNotificationTemplate		 (optional).
 * @return	KalturaEventNotificationTemplate.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.update = function(callback, id, eventNotificationTemplate){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "eventNotificationTemplate", toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update event notification template status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaEventNotificationTemplateStatus).
 * @return	KalturaEventNotificationTemplate.
 * @return	.
 */
KalturaEventNotificationTemplateService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("eventnotification_eventnotificationtemplate", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: sharepointExtension.
 * The available service actions:
 * @action	isVersionSupported	Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension).
 * @action	listUiconfs	list uiconfs for sharepoint extension.
*/
function KalturaSharepointExtensionService(client){
	this.init(client);
}
KalturaSharepointExtensionService.inheritsFrom (KalturaServiceBase);
/**
 * Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension).
 * @param	serverMajor	int		 (optional).
 * @param	serverMinor	int		 (optional).
 * @param	serverBuild	int		 (optional).
 * @return	bool.
 */
KalturaSharepointExtensionService.prototype.isVersionSupported = function(callback, serverMajor, serverMinor, serverBuild){
	var kparams = new Object();
	this.client.addParam(kparams, "serverMajor", serverMajor);
	this.client.addParam(kparams, "serverMinor", serverMinor);
	this.client.addParam(kparams, "serverBuild", serverBuild);
	this.client.queueServiceActionCall("kalturasharepointextension_sharepointextension", "isVersionSupported", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * list uiconfs for sharepoint extension.
 * @return	KalturaUiConfListResponse.
 * @return	.
 */
KalturaSharepointExtensionService.prototype.listUiconfs = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("kalturasharepointextension_sharepointextension", "listUiconfs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: like.
 * The available service actions:
 * @action	checkLikeExists	.
 * @action	like	.
 * @action	list	.
 * @action	unlike	.
*/
function KalturaLikeService(client){
	this.init(client);
}
KalturaLikeService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	userId	string		 (optional, default: null).
 * @return	bool.
 */
KalturaLikeService.prototype.checkLikeExists = function(callback, entryId, userId){
	if(!userId)
		userId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("like_like", "checkLikeExists", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	bool.
 * @return	.
 * @return	.
 */
KalturaLikeService.prototype.like = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("like_like", "like", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaLikeFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaLikeListResponse.
 */
KalturaLikeService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("like_like", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	bool.
 */
KalturaLikeService.prototype.unlike = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("like_like", "unlike", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: ndn.
 * The available service actions:
*/
function KalturaNdnService(client){
	this.init(client);
}
KalturaNdnService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: shortLink.
 * The available service actions:
 * @action	add	Allows you to add a short link object.
 * @action	delete	Mark the short link as deleted.
 * @action	get	Retrieve an short link object by id.
 * @action	list	List short link objects by filter and pager.
 * @action	update	Update existing short link.
*/
function KalturaShortLinkService(client){
	this.init(client);
}
KalturaShortLinkService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a short link object.
 * @param	shortLink	KalturaShortLink		 (optional).
 * @return	KalturaShortLink.
 */
KalturaShortLinkService.prototype.add = function(callback, shortLink){
	var kparams = new Object();
	this.client.addParam(kparams, "shortLink", toParams(shortLink));
	this.client.queueServiceActionCall("shortlink_shortlink", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the short link as deleted.
 * @param	id	string		 (optional).
 * @return	KalturaShortLink.
 * @return	.
 */
KalturaShortLinkService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("shortlink_shortlink", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an short link object by id.
 * @param	id	string		 (optional).
 * @return	KalturaShortLink.
 * @return	.
 */
KalturaShortLinkService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("shortlink_shortlink", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List short link objects by filter and pager.
 * @param	filter	KalturaShortLinkFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaShortLinkListResponse.
 */
KalturaShortLinkService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("shortlink_shortlink", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing short link.
 * @param	id	string		 (optional).
 * @param	shortLink	KalturaShortLink		 (optional).
 * @return	KalturaShortLink.
 * @return	.
 */
KalturaShortLinkService.prototype.update = function(callback, id, shortLink){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shortLink", toParams(shortLink));
	this.client.queueServiceActionCall("shortlink_shortlink", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: synacorHbo.
 * The available service actions:
*/
function KalturaSynacorHboService(client){
	this.init(client);
}
KalturaSynacorHboService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: tag.
 * The available service actions:
 * @action	deletePending	Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags..
 * @action	indexCategoryEntryTags	.
 * @action	search	.
*/
function KalturaTagService(client){
	this.init(client);
}
KalturaTagService.inheritsFrom (KalturaServiceBase);
/**
 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags..
 * @return	int.
 */
KalturaTagService.prototype.deletePending = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("tagsearch_tag", "deletePending", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	categoryId	int		 (optional).
 * @param	pcToDecrement	string		 (optional).
 * @param	pcToIncrement	string		 (optional).
 * @return	.
 */
KalturaTagService.prototype.indexCategoryEntryTags = function(callback, categoryId, pcToDecrement, pcToIncrement){
	var kparams = new Object();
	this.client.addParam(kparams, "categoryId", categoryId);
	this.client.addParam(kparams, "pcToDecrement", pcToDecrement);
	this.client.addParam(kparams, "pcToIncrement", pcToIncrement);
	this.client.queueServiceActionCall("tagsearch_tag", "indexCategoryEntryTags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	tagFilter	KalturaTagFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaTagListResponse.
 */
KalturaTagService.prototype.search = function(callback, tagFilter, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "tagFilter", toParams(tagFilter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("tagsearch_tag", "search", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: timeWarner.
 * The available service actions:
*/
function KalturaTimeWarnerService(client){
	this.init(client);
}
KalturaTimeWarnerService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: uverseClickToOrder.
 * The available service actions:
*/
function KalturaUverseClickToOrderService(client){
	this.init(client);
}
KalturaUverseClickToOrderService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: uverse.
 * The available service actions:
*/
function KalturaUverseService(client){
	this.init(client);
}
KalturaUverseService.inheritsFrom (KalturaServiceBase);

/**
 *Class definition for the Kaltura service: varConsole.
 * The available service actions:
 * @action	getPartnerUsage	Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @action	updateStatus	Function to change a sub-publisher's status.
*/
function KalturaVarConsoleService(client){
	this.init(client);
}
KalturaVarConsoleService.inheritsFrom (KalturaServiceBase);
/**
 * Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null).
 * @param	usageFilter	KalturaReportInputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPartnerUsageListResponse.
 * @return	.
 */
KalturaVarConsoleService.prototype.getPartnerUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter)
		partnerFilter = null;
	if(!usageFilter)
		usageFilter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (partnerFilter != null)
		this.client.addParam(kparams, "partnerFilter", toParams(partnerFilter));
	if (usageFilter != null)
		this.client.addParam(kparams, "usageFilter", toParams(usageFilter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("varconsole_varconsole", "getPartnerUsage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Function to change a sub-publisher's status.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaPartnerStatus).
 * @return	.
 * @return	.
 */
KalturaVarConsoleService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("varconsole_varconsole", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action	add	Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
 * @action	delete	Mark the virus scan profile as deleted.
 * @action	get	Retrieve an virus scan profile object by id.
 * @action	list	List virus scan profile objects by filter and pager.
 * @action	scan	Scan flavor asset according to virus scan profile.
 * @action	update	Update existing virus scan profile, it is possible to update the virus scan profile id too.
*/
function KalturaVirusScanProfileService(client){
	this.init(client);
}
KalturaVirusScanProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object.
 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the virus scan profile as deleted.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 * @return	.
 */
KalturaVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an virus scan profile object by id.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 * @return	.
 */
KalturaVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List virus scan profile objects by filter and pager.
 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaVirusScanProfileListResponse.
 */
KalturaVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Scan flavor asset according to virus scan profile.
 * @param	flavorAssetId	string		 (optional).
 * @param	virusScanProfileId	int		 (optional, default: null).
 * @return	int.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
	if(!virusScanProfileId)
		virusScanProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "scan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing virus scan profile, it is possible to update the virus scan profile id too.
 * @param	virusScanProfileId	int		 (optional).
 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional).
 * @return	KalturaVirusScanProfile.
 * @return	.
 */
KalturaVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusscan_virusscanprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: externalMedia.
 * The available service actions:
 * @action	add	Add external media entry.
 * @action	count	Count media entries by filter..
 * @action	delete	Delete a external media entry..
 * @action	get	Get external media entry by ID..
 * @action	list	List media entries by filter with paging support..
 * @action	update	Update external media entry. Only the properties that were set will be updated..
*/
function KalturaExternalMediaService(client){
	this.init(client);
}
KalturaExternalMediaService.inheritsFrom (KalturaServiceBase);
/**
 * Add external media entry.
 * @param	entry	KalturaExternalMediaEntry		 (optional).
 * @return	KalturaExternalMediaEntry.
 */
KalturaExternalMediaService.prototype.add = function(callback, entry){
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.queueServiceActionCall("externalmedia_externalmedia", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count media entries by filter..
 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null).
 * @return	int.
 */
KalturaExternalMediaService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("externalmedia_externalmedia", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a external media entry..
 * @param	id	string		External media entry id to delete (optional).
 * @return	.
 * @return	.
 */
KalturaExternalMediaService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("externalmedia_externalmedia", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get external media entry by ID..
 * @param	id	string		External media entry id (optional).
 * @return	KalturaExternalMediaEntry.
 * @return	.
 */
KalturaExternalMediaService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("externalmedia_externalmedia", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List media entries by filter with paging support..
 * @param	filter	KalturaExternalMediaEntryFilter		External media entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaExternalMediaEntryListResponse.
 */
KalturaExternalMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("externalmedia_externalmedia", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update external media entry. Only the properties that were set will be updated..
 * @param	id	string		External media entry id to update (optional).
 * @param	entry	KalturaExternalMediaEntry		External media entry object to update (optional).
 * @return	KalturaExternalMediaEntry.
 * @return	.
 */
KalturaExternalMediaService.prototype.update = function(callback, id, entry){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.queueServiceActionCall("externalmedia_externalmedia", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: drmPolicy.
 * The available service actions:
 * @action	add	Allows you to add a new DrmPolicy object.
 * @action	delete	Mark the KalturaDrmPolicy object as deleted.
 * @action	get	Retrieve a KalturaDrmPolicy object by ID.
 * @action	list	List KalturaDrmPolicy objects.
 * @action	update	Update an existing KalturaDrmPolicy object.
*/
function KalturaDrmPolicyService(client){
	this.init(client);
}
KalturaDrmPolicyService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new DrmPolicy object.
 * @param	drmPolicy	KalturaDrmPolicy		 (optional).
 * @return	KalturaDrmPolicy.
 * @return	.
 */
KalturaDrmPolicyService.prototype.add = function(callback, drmPolicy){
	var kparams = new Object();
	this.client.addParam(kparams, "drmPolicy", toParams(drmPolicy));
	this.client.queueServiceActionCall("drm_drmpolicy", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDrmPolicy object as deleted.
 * @param	drmPolicyId	int		 (optional).
 * @return	KalturaDrmPolicy.
 * @return	.
 */
KalturaDrmPolicyService.prototype.deleteAction = function(callback, drmPolicyId){
	var kparams = new Object();
	this.client.addParam(kparams, "drmPolicyId", drmPolicyId);
	this.client.queueServiceActionCall("drm_drmpolicy", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDrmPolicy object by ID.
 * @param	drmPolicyId	int		 (optional).
 * @return	KalturaDrmPolicy.
 * @return	.
 */
KalturaDrmPolicyService.prototype.get = function(callback, drmPolicyId){
	var kparams = new Object();
	this.client.addParam(kparams, "drmPolicyId", drmPolicyId);
	this.client.queueServiceActionCall("drm_drmpolicy", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDrmPolicy objects.
 * @param	filter	KalturaDrmPolicyFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDrmPolicyListResponse.
 */
KalturaDrmPolicyService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("drm_drmpolicy", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDrmPolicy object.
 * @param	drmPolicyId	int		 (optional).
 * @param	drmPolicy	KalturaDrmPolicy		Id (optional).
 * @return	KalturaDrmPolicy.
 * @return	.
 */
KalturaDrmPolicyService.prototype.update = function(callback, drmPolicyId, drmPolicy){
	var kparams = new Object();
	this.client.addParam(kparams, "drmPolicyId", drmPolicyId);
	this.client.addParam(kparams, "drmPolicy", toParams(drmPolicy));
	this.client.queueServiceActionCall("drm_drmpolicy", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: drmProfile.
 * The available service actions:
 * @action	add	Allows you to add a new DrmProfile object.
 * @action	delete	Mark the KalturaDrmProfile object as deleted.
 * @action	get	Retrieve a KalturaDrmProfile object by ID.
 * @action	getByProvider	Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
 * @action	list	List KalturaDrmProfile objects.
 * @action	update	Update an existing KalturaDrmProfile object.
*/
function KalturaDrmProfileService(client){
	this.init(client);
}
KalturaDrmProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new DrmProfile object.
 * @param	drmProfile	KalturaDrmProfile		 (optional).
 * @return	KalturaDrmProfile.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaDrmProfileService.prototype.add = function(callback, drmProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "drmProfile", toParams(drmProfile));
	this.client.queueServiceActionCall("drm_drmprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDrmProfile object as deleted.
 * @param	drmProfileId	int		 (optional).
 * @return	KalturaDrmProfile.
 * @return	.
 */
KalturaDrmProfileService.prototype.deleteAction = function(callback, drmProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "drmProfileId", drmProfileId);
	this.client.queueServiceActionCall("drm_drmprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDrmProfile object by ID.
 * @param	drmProfileId	int		 (optional).
 * @return	KalturaDrmProfile.
 * @return	.
 */
KalturaDrmProfileService.prototype.get = function(callback, drmProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "drmProfileId", drmProfileId);
	this.client.queueServiceActionCall("drm_drmprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile.
 * @param	provider	string		 (optional, enum: KalturaDrmProviderType).
 * @return	KalturaDrmProfile.
 */
KalturaDrmProfileService.prototype.getByProvider = function(callback, provider){
	var kparams = new Object();
	this.client.addParam(kparams, "provider", provider);
	this.client.queueServiceActionCall("drm_drmprofile", "getByProvider", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDrmProfile objects.
 * @param	filter	KalturaDrmProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDrmProfileListResponse.
 */
KalturaDrmProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("drm_drmprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDrmProfile object.
 * @param	drmProfileId	int		 (optional).
 * @param	drmProfile	KalturaDrmProfile		Id (optional).
 * @return	KalturaDrmProfile.
 * @return	.
 */
KalturaDrmProfileService.prototype.update = function(callback, drmProfileId, drmProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "drmProfileId", drmProfileId);
	this.client.addParam(kparams, "drmProfile", toParams(drmProfile));
	this.client.queueServiceActionCall("drm_drmprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: drmLicenseAccess.
 * The available service actions:
 * @action	getAccess	getAccessAction
 *	     input: flavor ids, drmProvider
 *	     Get Access Action.
*/
function KalturaDrmLicenseAccessService(client){
	this.init(client);
}
KalturaDrmLicenseAccessService.inheritsFrom (KalturaServiceBase);
/**
 * getAccessAction
 *	     input: flavor ids, drmProvider
 *	     Get Access Action.
 * @param	entryId	string		 (optional).
 * @param	flavorIds	string		 (optional).
 * @param	referrer	string		 (optional).
 * @return	KalturaDrmLicenseAccessDetails.
 */
KalturaDrmLicenseAccessService.prototype.getAccess = function(callback, entryId, flavorIds, referrer){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorIds", flavorIds);
	this.client.addParam(kparams, "referrer", referrer);
	this.client.queueServiceActionCall("drm_drmlicenseaccess", "getAccess", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: widevineDrm.
 * The available service actions:
 * @action	getLicense	Get license for encrypted content playback.
*/
function KalturaWidevineDrmService(client){
	this.init(client);
}
KalturaWidevineDrmService.inheritsFrom (KalturaServiceBase);
/**
 * Get license for encrypted content playback.
 * @param	flavorAssetId	string		 (optional).
 * @param	referrer	string		64base encoded (optional, default: null).
 * @return	string.
 */
KalturaWidevineDrmService.prototype.getLicense = function(callback, flavorAssetId, referrer){
	if(!referrer)
		referrer = null;
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "referrer", referrer);
	this.client.queueServiceActionCall("widevine_widevinedrm", "getLicense", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: scheduledTaskProfile.
 * The available service actions:
 * @action	add	Add a new scheduled task profile.
 * @action	delete	Delete a scheduled task profile.
 * @action	get	Retrieve a scheduled task profile by id.
 * @action	getDryRunResults	.
 * @action	list	List scheduled task profiles.
 * @action	requestDryRun	.
 * @action	update	Update an existing scheduled task profile.
*/
function KalturaScheduledTaskProfileService(client){
	this.init(client);
}
KalturaScheduledTaskProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add a new scheduled task profile.
 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional).
 * @return	KalturaScheduledTaskProfile.
 */
KalturaScheduledTaskProfileService.prototype.add = function(callback, scheduledTaskProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduledTaskProfile", toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a scheduled task profile.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaScheduledTaskProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a scheduled task profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaScheduledTaskProfile.
 * @return	.
 */
KalturaScheduledTaskProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	requestId	int		 (optional).
 * @return	KalturaObjectListResponse.
 */
KalturaScheduledTaskProfileService.prototype.getDryRunResults = function(callback, requestId){
	var kparams = new Object();
	this.client.addParam(kparams, "requestId", requestId);
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "getDryRunResults", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List scheduled task profiles.
 * @param	filter	KalturaScheduledTaskProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaScheduledTaskProfileListResponse.
 */
KalturaScheduledTaskProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	scheduledTaskProfileId	int		 (optional).
 * @param	maxResults	int		 (optional, default: 500).
 * @return	int.
 */
KalturaScheduledTaskProfileService.prototype.requestDryRun = function(callback, scheduledTaskProfileId, maxResults){
	if(!maxResults)
		maxResults = 500;
	var kparams = new Object();
	this.client.addParam(kparams, "scheduledTaskProfileId", scheduledTaskProfileId);
	this.client.addParam(kparams, "maxResults", maxResults);
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "requestDryRun", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing scheduled task profile.
 * @param	id	int		 (optional).
 * @param	scheduledTaskProfile	KalturaScheduledTaskProfile		 (optional).
 * @return	KalturaScheduledTaskProfile.
 * @return	.
 */
KalturaScheduledTaskProfileService.prototype.update = function(callback, id, scheduledTaskProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "scheduledTaskProfile", toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall("scheduledtask_scheduledtaskprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: playReadyDrm.
 * The available service actions:
 * @action	generateKey	Generate key id and content key for PlayReady encryption.
 * @action	getContentKeys	Get content keys for input key ids.
 * @action	getEntryContentKey	Get content key and key id for the given entry.
 * @action	getLicenseDetails	Get Play Ready policy and dates for license creation.
*/
function KalturaPlayReadyDrmService(client){
	this.init(client);
}
KalturaPlayReadyDrmService.inheritsFrom (KalturaServiceBase);
/**
 * Generate key id and content key for PlayReady encryption.
 * @return	KalturaPlayReadyContentKey.
 */
KalturaPlayReadyDrmService.prototype.generateKey = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("playready_playreadydrm", "generateKey", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get content keys for input key ids.
 * @param	keyIds	string		- comma separated key id's (optional).
 * @return	array.
 */
KalturaPlayReadyDrmService.prototype.getContentKeys = function(callback, keyIds){
	var kparams = new Object();
	this.client.addParam(kparams, "keyIds", keyIds);
	this.client.queueServiceActionCall("playready_playreadydrm", "getContentKeys", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get content key and key id for the given entry.
 * @param	entryId	string		 (optional).
 * @param	createIfMissing	bool		 (optional, default: false).
 * @return	KalturaPlayReadyContentKey.
 */
KalturaPlayReadyDrmService.prototype.getEntryContentKey = function(callback, entryId, createIfMissing){
	if(!createIfMissing)
		createIfMissing = false;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "createIfMissing", createIfMissing);
	this.client.queueServiceActionCall("playready_playreadydrm", "getEntryContentKey", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Play Ready policy and dates for license creation.
 * @param	keyId	string		 (optional).
 * @param	deviceId	string		 (optional).
 * @param	deviceType	int		 (optional).
 * @param	entryId	string		 (optional, default: null).
 * @param	referrer	string		64base encoded (optional, default: null).
 * @return	KalturaPlayReadyLicenseDetails.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaPlayReadyDrmService.prototype.getLicenseDetails = function(callback, keyId, deviceId, deviceType, entryId, referrer){
	if(!entryId)
		entryId = null;
	if(!referrer)
		referrer = null;
	var kparams = new Object();
	this.client.addParam(kparams, "keyId", keyId);
	this.client.addParam(kparams, "deviceId", deviceId);
	this.client.addParam(kparams, "deviceType", deviceType);
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "referrer", referrer);
	this.client.queueServiceActionCall("playready_playreadydrm", "getLicenseDetails", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: unicorn.
 * The available service actions:
 * @action	notify	.
*/
function KalturaUnicornService(client){
	this.init(client);
}
KalturaUnicornService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	id	int		distribution job id (optional).
 * @return	.
 */
KalturaUnicornService.prototype.notify = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("unicorndistribution_unicorn", "notify", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: integration.
 * The available service actions:
 * @action	dispatch	Dispatch integration task.
 * @action	notify	.
*/
function KalturaIntegrationService(client){
	this.init(client);
}
KalturaIntegrationService.inheritsFrom (KalturaServiceBase);
/**
 * Dispatch integration task.
 * @param	data	KalturaIntegrationJobData		 (optional).
 * @param	objectType	string		 (optional, enum: KalturaBatchJobObjectType).
 * @param	objectId	string		 (optional).
 * @return	int.
 * @return	.
 */
KalturaIntegrationService.prototype.dispatch = function(callback, data, objectType, objectId){
	var kparams = new Object();
	this.client.addParam(kparams, "data", toParams(data));
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.queueServiceActionCall("integration_integration", "dispatch", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	id	int		integration job id (optional).
 * @return	.
 */
KalturaIntegrationService.prototype.notify = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("integration_integration", "notify", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: businessProcessCase.
 * The available service actions:
 * @action	abort	Abort business-process case.
 * @action	list	list business-process cases.
*/
function KalturaBusinessProcessCaseService(client){
	this.init(client);
}
KalturaBusinessProcessCaseService.inheritsFrom (KalturaServiceBase);
/**
 * Abort business-process case.
 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType).
 * @param	objectId	string		 (optional).
 * @param	businessProcessStartNotificationTemplateId	int		 (optional).
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaBusinessProcessCaseService.prototype.abort = function(callback, objectType, objectId, businessProcessStartNotificationTemplateId){
	var kparams = new Object();
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "businessProcessStartNotificationTemplateId", businessProcessStartNotificationTemplateId);
	this.client.queueServiceActionCall("businessprocessnotification_businessprocesscase", "abort", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * list business-process cases.
 * @param	objectType	string		 (optional, enum: KalturaEventNotificationEventObjectType).
 * @param	objectId	string		 (optional).
 * @return	array.
 * @return	.
 * @return	.
 */
KalturaBusinessProcessCaseService.prototype.listAction = function(callback, objectType, objectId){
	var kparams = new Object();
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.queueServiceActionCall("businessprocessnotification_businessprocesscase", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: quiz.
 * The available service actions:
 * @action	add	Allows to add a quiz to an entry.
 * @action	get	Allows to get a quiz.
 * @action	getUrl	sends a with an api request for pdf from quiz object.
 * @action	list	List quiz objects by filter and pager.
 * @action	update	Allows to update a quiz.
*/
function KalturaQuizService(client){
	this.init(client);
}
KalturaQuizService.inheritsFrom (KalturaServiceBase);
/**
 * Allows to add a quiz to an entry.
 * @param	entryId	string		 (optional).
 * @param	quiz	KalturaQuiz		 (optional).
 * @return	KalturaQuiz.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaQuizService.prototype.add = function(callback, entryId, quiz){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "quiz", toParams(quiz));
	this.client.queueServiceActionCall("quiz_quiz", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows to get a quiz.
 * @param	entryId	string		 (optional).
 * @return	KalturaQuiz.
 * @return	.
 */
KalturaQuizService.prototype.get = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("quiz_quiz", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * sends a with an api request for pdf from quiz object.
 * @param	entryId	string		 (optional).
 * @param	quizOutputType	int		 (optional, enum: KalturaQuizOutputType).
 * @return	string.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaQuizService.prototype.getUrl = function(callback, entryId, quizOutputType){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "quizOutputType", quizOutputType);
	this.client.queueServiceActionCall("quiz_quiz", "getUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List quiz objects by filter and pager.
 * @param	filter	KalturaQuizFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaQuizListResponse.
 */
KalturaQuizService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("quiz_quiz", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows to update a quiz.
 * @param	entryId	string		 (optional).
 * @param	quiz	KalturaQuiz		 (optional).
 * @return	KalturaQuiz.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaQuizService.prototype.update = function(callback, entryId, quiz){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "quiz", toParams(quiz));
	this.client.queueServiceActionCall("quiz_quiz", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: scheduleEvent.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaScheduleEvent object.
 * @action	addFromBulkUpload	Add new bulk upload batch job.
 * @action	cancel	Mark the KalturaScheduleEvent object as cancelled.
 * @action	delete	Mark the KalturaScheduleEvent object as deleted.
 * @action	get	Retrieve a KalturaScheduleEvent object by ID.
 * @action	getConflicts	List conflicting events for resourcesIds by event's dates.
 * @action	list	List KalturaScheduleEvent objects.
 * @action	update	Update an existing KalturaScheduleEvent object.
 * @action	updateLiveFeature	Add feature to live event.
*/
function KalturaScheduleEventService(client){
	this.init(client);
}
KalturaScheduleEventService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaScheduleEvent object.
 * @param	scheduleEvent	KalturaScheduleEvent		 (optional).
 * @return	KalturaScheduleEvent.
 */
KalturaScheduleEventService.prototype.add = function(callback, scheduleEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEvent", toParams(scheduleEvent));
	this.client.queueServiceActionCall("schedule_scheduleevent", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new bulk upload batch job.
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadScheduleEventJobData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaScheduleEventService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData){
	if(!bulkUploadData)
		bulkUploadData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	this.client.queueServiceActionCall("schedule_scheduleevent", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaScheduleEvent object as cancelled.
 * @param	scheduleEventId	int		 (optional).
 * @return	KalturaScheduleEvent.
 * @return	.
 */
KalturaScheduleEventService.prototype.cancel = function(callback, scheduleEventId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.queueServiceActionCall("schedule_scheduleevent", "cancel", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaScheduleEvent object as deleted.
 * @param	scheduleEventId	int		 (optional).
 * @return	KalturaScheduleEvent.
 * @return	.
 * @return	.
 */
KalturaScheduleEventService.prototype.deleteAction = function(callback, scheduleEventId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.queueServiceActionCall("schedule_scheduleevent", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaScheduleEvent object by ID.
 * @param	scheduleEventId	int		 (optional).
 * @return	KalturaScheduleEvent.
 * @return	.
 */
KalturaScheduleEventService.prototype.get = function(callback, scheduleEventId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.queueServiceActionCall("schedule_scheduleevent", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List conflicting events for resourcesIds by event's dates.
 * @param	resourceIds	string		comma separated (optional).
 * @param	scheduleEvent	KalturaScheduleEvent		 (optional).
 * @param	scheduleEventIdToIgnore	string		 (optional, default: null).
 * @param	scheduleEventConflictType	int		 (optional, enum: KalturaScheduleEventConflictType, default: 1).
 * @return	KalturaScheduleEventListResponse.
 */
KalturaScheduleEventService.prototype.getConflicts = function(callback, resourceIds, scheduleEvent, scheduleEventIdToIgnore, scheduleEventConflictType){
	if(!scheduleEventIdToIgnore)
		scheduleEventIdToIgnore = null;
	if(!scheduleEventConflictType)
		scheduleEventConflictType = 1;
	var kparams = new Object();
	this.client.addParam(kparams, "resourceIds", resourceIds);
	this.client.addParam(kparams, "scheduleEvent", toParams(scheduleEvent));
	this.client.addParam(kparams, "scheduleEventIdToIgnore", scheduleEventIdToIgnore);
	this.client.addParam(kparams, "scheduleEventConflictType", scheduleEventConflictType);
	this.client.queueServiceActionCall("schedule_scheduleevent", "getConflicts", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaScheduleEvent objects.
 * @param	filter	KalturaScheduleEventFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaScheduleEventListResponse.
 */
KalturaScheduleEventService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("schedule_scheduleevent", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaScheduleEvent object.
 * @param	scheduleEventId	int		 (optional).
 * @param	scheduleEvent	KalturaScheduleEvent		Id (optional).
 * @return	KalturaScheduleEvent.
 * @return	.
 */
KalturaScheduleEventService.prototype.update = function(callback, scheduleEventId, scheduleEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.addParam(kparams, "scheduleEvent", toParams(scheduleEvent));
	this.client.queueServiceActionCall("schedule_scheduleevent", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add feature to live event.
 * @param	scheduledEventId	int		 (optional).
 * @param	featureName	string		 (optional).
 * @param	liveFeature	KalturaLiveFeature		 (optional).
 * @return	KalturaLiveStreamScheduleEvent.
 */
KalturaScheduleEventService.prototype.updateLiveFeature = function(callback, scheduledEventId, featureName, liveFeature){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduledEventId", scheduledEventId);
	this.client.addParam(kparams, "featureName", featureName);
	this.client.addParam(kparams, "liveFeature", toParams(liveFeature));
	this.client.queueServiceActionCall("schedule_scheduleevent", "updateLiveFeature", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: scheduleResource.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaScheduleResource object.
 * @action	addFromBulkUpload	Add new bulk upload batch job.
 * @action	delete	Mark the KalturaScheduleResource object as deleted.
 * @action	get	Retrieve a KalturaScheduleResource object by ID.
 * @action	list	List KalturaScheduleResource objects.
 * @action	update	Update an existing KalturaScheduleResource object.
*/
function KalturaScheduleResourceService(client){
	this.init(client);
}
KalturaScheduleResourceService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaScheduleResource object.
 * @param	scheduleResource	KalturaScheduleResource		 (optional).
 * @return	KalturaScheduleResource.
 */
KalturaScheduleResourceService.prototype.add = function(callback, scheduleResource){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleResource", toParams(scheduleResource));
	this.client.queueServiceActionCall("schedule_scheduleresource", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new bulk upload batch job.
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadCsvJobData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaScheduleResourceService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData){
	if(!bulkUploadData)
		bulkUploadData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	this.client.queueServiceActionCall("schedule_scheduleresource", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaScheduleResource object as deleted.
 * @param	scheduleResourceId	int		 (optional).
 * @return	KalturaScheduleResource.
 * @return	.
 */
KalturaScheduleResourceService.prototype.deleteAction = function(callback, scheduleResourceId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.queueServiceActionCall("schedule_scheduleresource", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaScheduleResource object by ID.
 * @param	scheduleResourceId	int		 (optional).
 * @return	KalturaScheduleResource.
 * @return	.
 */
KalturaScheduleResourceService.prototype.get = function(callback, scheduleResourceId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.queueServiceActionCall("schedule_scheduleresource", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaScheduleResource objects.
 * @param	filter	KalturaScheduleResourceFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaScheduleResourceListResponse.
 */
KalturaScheduleResourceService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("schedule_scheduleresource", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaScheduleResource object.
 * @param	scheduleResourceId	int		 (optional).
 * @param	scheduleResource	KalturaScheduleResource		Id (optional).
 * @return	KalturaScheduleResource.
 * @return	.
 */
KalturaScheduleResourceService.prototype.update = function(callback, scheduleResourceId, scheduleResource){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.addParam(kparams, "scheduleResource", toParams(scheduleResource));
	this.client.queueServiceActionCall("schedule_scheduleresource", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: scheduleEventResource.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaScheduleEventResource object.
 * @action	delete	Mark the KalturaScheduleEventResource object as deleted.
 * @action	get	Retrieve a KalturaScheduleEventResource object by ID.
 * @action	list	List KalturaScheduleEventResource objects.
 * @action	update	Update an existing KalturaScheduleEventResource object.
*/
function KalturaScheduleEventResourceService(client){
	this.init(client);
}
KalturaScheduleEventResourceService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaScheduleEventResource object.
 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional).
 * @return	KalturaScheduleEventResource.
 */
KalturaScheduleEventResourceService.prototype.add = function(callback, scheduleEventResource){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventResource", toParams(scheduleEventResource));
	this.client.queueServiceActionCall("schedule_scheduleeventresource", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaScheduleEventResource object as deleted.
 * @param	scheduleEventId	int		 (optional).
 * @param	scheduleResourceId	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaScheduleEventResourceService.prototype.deleteAction = function(callback, scheduleEventId, scheduleResourceId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.queueServiceActionCall("schedule_scheduleeventresource", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaScheduleEventResource object by ID.
 * @param	scheduleEventId	int		 (optional).
 * @param	scheduleResourceId	int		 (optional).
 * @return	KalturaScheduleEventResource.
 * @return	.
 */
KalturaScheduleEventResourceService.prototype.get = function(callback, scheduleEventId, scheduleResourceId){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.queueServiceActionCall("schedule_scheduleeventresource", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaScheduleEventResource objects.
 * @param	filter	KalturaScheduleEventResourceFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @param	filterBlackoutConflicts	bool		 (optional, default: true).
 * @return	KalturaScheduleEventResourceListResponse.
 */
KalturaScheduleEventResourceService.prototype.listAction = function(callback, filter, pager, filterBlackoutConflicts){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	if(!filterBlackoutConflicts)
		filterBlackoutConflicts = true;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "filterBlackoutConflicts", filterBlackoutConflicts);
	this.client.queueServiceActionCall("schedule_scheduleeventresource", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaScheduleEventResource object.
 * @param	scheduleEventId	int		 (optional).
 * @param	scheduleResourceId	int		 (optional).
 * @param	scheduleEventResource	KalturaScheduleEventResource		 (optional).
 * @return	KalturaScheduleEventResource.
 * @return	.
 */
KalturaScheduleEventResourceService.prototype.update = function(callback, scheduleEventId, scheduleResourceId, scheduleEventResource){
	var kparams = new Object();
	this.client.addParam(kparams, "scheduleEventId", scheduleEventId);
	this.client.addParam(kparams, "scheduleResourceId", scheduleResourceId);
	this.client.addParam(kparams, "scheduleEventResource", toParams(scheduleEventResource));
	this.client.queueServiceActionCall("schedule_scheduleeventresource", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: poll.
 * The available service actions:
 * @action	add	Add Action.
 * @action	getVote	Vote Action.
 * @action	getVotes	Get Votes Action.
 * @action	resetVotes	Get resetVotes Action.
 * @action	vote	Vote Action.
*/
function KalturaPollService(client){
	this.init(client);
}
KalturaPollService.inheritsFrom (KalturaServiceBase);
/**
 * Add Action.
 * @param	pollType	string		 (optional, default: SINGLE_ANONYMOUS).
 * @return	string.
 */
KalturaPollService.prototype.add = function(callback, pollType){
	if(!pollType)
		pollType = "SINGLE_ANONYMOUS";
	var kparams = new Object();
	this.client.addParam(kparams, "pollType", pollType);
	this.client.queueServiceActionCall("poll_poll", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Vote Action.
 * @param	pollId	string		 (optional).
 * @param	userId	string		 (optional).
 * @return	string.
 */
KalturaPollService.prototype.getVote = function(callback, pollId, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "pollId", pollId);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("poll_poll", "getVote", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Votes Action.
 * @param	pollId	string		 (optional).
 * @param	answerIds	string		 (optional).
 * @return	string.
 */
KalturaPollService.prototype.getVotes = function(callback, pollId, answerIds){
	var kparams = new Object();
	this.client.addParam(kparams, "pollId", pollId);
	this.client.addParam(kparams, "answerIds", answerIds);
	this.client.queueServiceActionCall("poll_poll", "getVotes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get resetVotes Action.
 * @param	pollId	string		 (optional).
 * @return	.
 */
KalturaPollService.prototype.resetVotes = function(callback, pollId){
	var kparams = new Object();
	this.client.addParam(kparams, "pollId", pollId);
	this.client.queueServiceActionCall("poll_poll", "resetVotes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Vote Action.
 * @param	pollId	string		 (optional).
 * @param	userId	string		 (optional).
 * @param	answerIds	string		 (optional).
 * @return	string.
 */
KalturaPollService.prototype.vote = function(callback, pollId, userId, answerIds){
	var kparams = new Object();
	this.client.addParam(kparams, "pollId", pollId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "answerIds", answerIds);
	this.client.queueServiceActionCall("poll_poll", "vote", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: eSearch.
 * The available service actions:
 * @action	searchCategory	.
 * @action	searchEntry	.
 * @action	searchGroup	.
 * @action	searchUser	.
*/
function KalturaESearchService(client){
	this.init(client);
}
KalturaESearchService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	searchParams	KalturaESearchCategoryParams		 (optional).
 * @param	pager	KalturaPager		 (optional, default: null).
 * @return	KalturaESearchCategoryResponse.
 */
KalturaESearchService.prototype.searchCategory = function(callback, searchParams, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "searchParams", toParams(searchParams));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("elasticsearch_esearch", "searchCategory", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	searchParams	KalturaESearchEntryParams		 (optional).
 * @param	pager	KalturaPager		 (optional, default: null).
 * @return	KalturaESearchEntryResponse.
 */
KalturaESearchService.prototype.searchEntry = function(callback, searchParams, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "searchParams", toParams(searchParams));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("elasticsearch_esearch", "searchEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	searchParams	KalturaESearchGroupParams		 (optional).
 * @param	pager	KalturaPager		 (optional, default: null).
 * @return	KalturaESearchGroupResponse.
 */
KalturaESearchService.prototype.searchGroup = function(callback, searchParams, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "searchParams", toParams(searchParams));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("elasticsearch_esearch", "searchGroup", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	searchParams	KalturaESearchUserParams		 (optional).
 * @param	pager	KalturaPager		 (optional, default: null).
 * @return	KalturaESearchUserResponse.
 */
KalturaESearchService.prototype.searchUser = function(callback, searchParams, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "searchParams", toParams(searchParams));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("elasticsearch_esearch", "searchUser", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: beacon.
 * The available service actions:
 * @action	add	.
 * @action	enhanceSearch	.
 * @action	list	.
 * @action	searchScheduledResource	.
*/
function KalturaBeaconService(client){
	this.init(client);
}
KalturaBeaconService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	beacon	KalturaBeacon		 (optional).
 * @param	shouldLog	int		 (optional, enum: KalturaNullableBoolean).
 * @return	bool.
 */
KalturaBeaconService.prototype.add = function(callback, beacon, shouldLog){
	if(!shouldLog)
		shouldLog = 0;
	var kparams = new Object();
	this.client.addParam(kparams, "beacon", toParams(beacon));
	this.client.addParam(kparams, "shouldLog", shouldLog);
	this.client.queueServiceActionCall("beacon_beacon", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaBeaconEnhanceFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBeaconListResponse.
 */
KalturaBeaconService.prototype.enhanceSearch = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("beacon_beacon", "enhanceSearch", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaBeaconFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBeaconListResponse.
 */
KalturaBeaconService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("beacon_beacon", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	searchParams	KalturaBeaconSearchParams		 (optional).
 * @param	pager	KalturaPager		 (optional, default: null).
 * @return	KalturaBeaconListResponse.
 */
KalturaBeaconService.prototype.searchScheduledResource = function(callback, searchParams, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "searchParams", toParams(searchParams));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("beacon_beacon", "searchScheduledResource", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: vendorCatalogItem.
 * The available service actions:
 * @action	add	Allows you to add an service catalog item.
 * @action	addFromBulkUpload	.
 * @action	delete	Delete vedor catalog item object.
 * @action	get	Retrieve specific catalog item by id.
 * @action	getServeUrl	.
 * @action	list	List KalturaVendorCatalogItem objects.
 * @action	update	Update an existing vedor catalog item object.
 * @action	updateStatus	Update vendor catalog item status by id.
*/
function KalturaVendorCatalogItemService(client){
	this.init(client);
}
KalturaVendorCatalogItemService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add an service catalog item.
 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional).
 * @return	KalturaVendorCatalogItem.
 */
KalturaVendorCatalogItemService.prototype.add = function(callback, vendorCatalogItem){
	var kparams = new Object();
	this.client.addParam(kparams, "vendorCatalogItem", toParams(vendorCatalogItem));
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileData	file		 (optional).
 * @param	bulkUploadData	KalturaBulkUploadJobData		 (optional, default: null).
 * @param	bulkUploadVendorCatalogItemData	KalturaBulkUploadVendorCatalogItemData		 (optional, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaVendorCatalogItemService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadVendorCatalogItemData){
	if(!bulkUploadData)
		bulkUploadData = null;
	if(!bulkUploadVendorCatalogItemData)
		bulkUploadVendorCatalogItemData = null;
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	if (bulkUploadData != null)
		this.client.addParam(kparams, "bulkUploadData", toParams(bulkUploadData));
	if (bulkUploadVendorCatalogItemData != null)
		this.client.addParam(kparams, "bulkUploadVendorCatalogItemData", toParams(bulkUploadVendorCatalogItemData));
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "addFromBulkUpload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete vedor catalog item object.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaVendorCatalogItemService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve specific catalog item by id.
 * @param	id	int		 (optional).
 * @return	KalturaVendorCatalogItem.
 * @return	.
 */
KalturaVendorCatalogItemService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	vendorPartnerId	int		 (optional, default: null).
 * @return	string.
 */
KalturaVendorCatalogItemService.prototype.getServeUrl = function(callback, vendorPartnerId){
	if(!vendorPartnerId)
		vendorPartnerId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "vendorPartnerId", vendorPartnerId);
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "getServeUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaVendorCatalogItem objects.
 * @param	filter	KalturaVendorCatalogItemFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaVendorCatalogItemListResponse.
 */
KalturaVendorCatalogItemService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing vedor catalog item object.
 * @param	id	int		 (optional).
 * @param	vendorCatalogItem	KalturaVendorCatalogItem		 (optional).
 * @return	KalturaVendorCatalogItem.
 * @return	.
 */
KalturaVendorCatalogItemService.prototype.update = function(callback, id, vendorCatalogItem){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "vendorCatalogItem", toParams(vendorCatalogItem));
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update vendor catalog item status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaVendorCatalogItemStatus).
 * @return	KalturaVendorCatalogItem.
 * @return	.
 * @return	.
 */
KalturaVendorCatalogItemService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("reach_vendorcatalogitem", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: reachProfile.
 * The available service actions:
 * @action	add	Allows you to add a partner specific reach profile.
 * @action	delete	Delete vednor profile by id.
 * @action	get	Retrieve specific reach profile by id.
 * @action	list	List KalturaReachProfile objects.
 * @action	syncCredit	sync vendor profile credit.
 * @action	update	Update an existing reach profile object.
 * @action	updateStatus	Update reach profile status by id.
*/
function KalturaReachProfileService(client){
	this.init(client);
}
KalturaReachProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a partner specific reach profile.
 * @param	reachProfile	KalturaReachProfile		 (optional).
 * @return	KalturaReachProfile.
 */
KalturaReachProfileService.prototype.add = function(callback, reachProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "reachProfile", toParams(reachProfile));
	this.client.queueServiceActionCall("reach_reachprofile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete vednor profile by id.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaReachProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_reachprofile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve specific reach profile by id.
 * @param	id	int		 (optional).
 * @return	KalturaReachProfile.
 * @return	.
 */
KalturaReachProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_reachprofile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaReachProfile objects.
 * @param	filter	KalturaReachProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaReachProfileListResponse.
 */
KalturaReachProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("reach_reachprofile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * sync vendor profile credit.
 * @param	reachProfileId	int		 (optional).
 * @return	KalturaReachProfile.
 * @return	.
 */
KalturaReachProfileService.prototype.syncCredit = function(callback, reachProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "reachProfileId", reachProfileId);
	this.client.queueServiceActionCall("reach_reachprofile", "syncCredit", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing reach profile object.
 * @param	id	int		 (optional).
 * @param	reachProfile	KalturaReachProfile		 (optional).
 * @return	KalturaReachProfile.
 * @return	.
 */
KalturaReachProfileService.prototype.update = function(callback, id, reachProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "reachProfile", toParams(reachProfile));
	this.client.queueServiceActionCall("reach_reachprofile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update reach profile status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaReachProfileStatus).
 * @return	KalturaReachProfile.
 * @return	.
 */
KalturaReachProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("reach_reachprofile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: entryVendorTask.
 * The available service actions:
 * @action	abort	Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
 * @action	add	Allows you to add a entry vendor task.
 * @action	approve	Approve entry vendor task for execution..
 * @action	exportToCsv	add batch job that sends an email with a link to download an updated CSV that contains list of users.
 * @action	extendAccessKey	Extend access key in case the existing one has expired..
 * @action	get	Retrieve specific entry vendor task by id.
 * @action	getJobs	get KalturaEntryVendorTask objects for specific vendor partner.
 * @action	getServeUrl	.
 * @action	list	List KalturaEntryVendorTask objects.
 * @action	reject	Reject entry vendor task for execution..
 * @action	serveCsv	Will serve a requested csv.
 * @action	update	Update entry vendor task. Only the properties that were set will be updated..
 * @action	updateJob	Update entry vendor task. Only the properties that were set will be updated..
*/
function KalturaEntryVendorTaskService(client){
	this.init(client);
}
KalturaEntryVendorTaskService.inheritsFrom (KalturaServiceBase);
/**
 * Cancel entry task. will only occur for task in PENDING or PENDING_MODERATION status.
 * @param	id	int		vendor task id (optional).
 * @param	abortReason	string		 (optional, default: null).
 * @return	KalturaEntryVendorTask.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.abort = function(callback, id, abortReason){
	if(!abortReason)
		abortReason = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "abortReason", abortReason);
	this.client.queueServiceActionCall("reach_entryvendortask", "abort", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a entry vendor task.
 * @param	entryVendorTask	KalturaEntryVendorTask		 (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.add = function(callback, entryVendorTask){
	var kparams = new Object();
	this.client.addParam(kparams, "entryVendorTask", toParams(entryVendorTask));
	this.client.queueServiceActionCall("reach_entryvendortask", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve entry vendor task for execution..
 * @param	id	int		vendor task id to approve (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.approve = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_entryvendortask", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * add batch job that sends an email with a link to download an updated CSV that contains list of users.
 * @param	filter	KalturaEntryVendorTaskFilter		A filter used to exclude specific tasks (optional).
 * @return	string.
 */
KalturaEntryVendorTaskService.prototype.exportToCsv = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("reach_entryvendortask", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Extend access key in case the existing one has expired..
 * @param	id	int		vendor task id (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.extendAccessKey = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_entryvendortask", "extendAccessKey", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve specific entry vendor task by id.
 * @param	id	int		 (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_entryvendortask", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * get KalturaEntryVendorTask objects for specific vendor partner.
 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEntryVendorTaskListResponse.
 */
KalturaEntryVendorTaskService.prototype.getJobs = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("reach_entryvendortask", "getJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filterType	string		 (optional, default: null).
 * @param	filterInput	int		 (optional, default: null).
 * @param	status	int		 (optional, default: null).
 * @param	dueDate	string		 (optional, default: null).
 * @return	string.
 */
KalturaEntryVendorTaskService.prototype.getServeUrl = function(callback, filterType, filterInput, status, dueDate){
	if(!filterType)
		filterType = null;
	if(!filterInput)
		filterInput = null;
	if(!status)
		status = null;
	if(!dueDate)
		dueDate = null;
	var kparams = new Object();
	this.client.addParam(kparams, "filterType", filterType);
	this.client.addParam(kparams, "filterInput", filterInput);
	this.client.addParam(kparams, "status", status);
	this.client.addParam(kparams, "dueDate", dueDate);
	this.client.queueServiceActionCall("reach_entryvendortask", "getServeUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaEntryVendorTask objects.
 * @param	filter	KalturaEntryVendorTaskFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEntryVendorTaskListResponse.
 */
KalturaEntryVendorTaskService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("reach_entryvendortask", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject entry vendor task for execution..
 * @param	id	int		vendor task id to reject (optional).
 * @param	rejectReason	string		 (optional, default: null).
 * @return	KalturaEntryVendorTask.
 * @return	.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.reject = function(callback, id, rejectReason){
	if(!rejectReason)
		rejectReason = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "rejectReason", rejectReason);
	this.client.queueServiceActionCall("reach_entryvendortask", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will serve a requested csv.
 * @param	id	string		- the requested file id (optional).
 * @return	string.
 */
KalturaEntryVendorTaskService.prototype.serveCsv = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_entryvendortask", "serveCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry vendor task. Only the properties that were set will be updated..
 * @param	id	int		vendor task id to update (optional).
 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.update = function(callback, id, entryVendorTask){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryVendorTask", toParams(entryVendorTask));
	this.client.queueServiceActionCall("reach_entryvendortask", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry vendor task. Only the properties that were set will be updated..
 * @param	id	int		vendor task id to update (optional).
 * @param	entryVendorTask	KalturaEntryVendorTask		evntry vendor task to update (optional).
 * @return	KalturaEntryVendorTask.
 * @return	.
 */
KalturaEntryVendorTaskService.prototype.updateJob = function(callback, id, entryVendorTask){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryVendorTask", toParams(entryVendorTask));
	this.client.queueServiceActionCall("reach_entryvendortask", "updateJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: PartnerCatalogItem.
 * The available service actions:
 * @action	add	Assign existing catalogItem to specific account.
 * @action	delete	Remove existing catalogItem from specific account.
*/
function KalturaPartnerCatalogItemService(client){
	this.init(client);
}
KalturaPartnerCatalogItemService.inheritsFrom (KalturaServiceBase);
/**
 * Assign existing catalogItem to specific account.
 * @param	id	int		source catalog item to assign to partner (optional).
 * @param	defaultReachProfileId	int		 (optional, default: null).
 * @return	KalturaVendorCatalogItem.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaPartnerCatalogItemService.prototype.add = function(callback, id, defaultReachProfileId){
	if(!defaultReachProfileId)
		defaultReachProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "defaultReachProfileId", defaultReachProfileId);
	this.client.queueServiceActionCall("reach_partnercatalogitem", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Remove existing catalogItem from specific account.
 * @param	id	int		source catalog item to remove (optional).
 * @return	.
 * @return	.
 * @return	.
 */
KalturaPartnerCatalogItemService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("reach_partnercatalogitem", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: searchHistory.
 * The available service actions:
 * @action	delete	.
 * @action	exportToCsv	.
 * @action	list	.
*/
function KalturaSearchHistoryService(client){
	this.init(client);
}
KalturaSearchHistoryService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	searchTerm	string		 (optional).
 * @return	.
 */
KalturaSearchHistoryService.prototype.deleteAction = function(callback, searchTerm){
	var kparams = new Object();
	this.client.addParam(kparams, "searchTerm", searchTerm);
	this.client.queueServiceActionCall("searchhistory_searchhistory", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaESearchHistoryFilter		A filter used to aggregate the search terms (optional).
 * @return	string.
 */
KalturaSearchHistoryService.prototype.exportToCsv = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("searchhistory_searchhistory", "exportToCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaESearchHistoryFilter		 (optional, default: null).
 * @return	KalturaESearchHistoryListResponse.
 */
KalturaSearchHistoryService.prototype.listAction = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("searchhistory_searchhistory", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: zoomVendor.
 * The available service actions:
 * @action	deAuthorization	.
 * @action	fetchRegistrationPage	.
 * @action	get	Retrieve zoom integration setting object by partner id.
 * @action	list	List KalturaZoomIntegrationSetting objects.
 * @action	localRegistrationPage	.
 * @action	oauthValidation	load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 *		 and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
 * @action	preOauthValidation	.
 * @action	recordingComplete	.
 * @action	submitRegistration	.
*/
function KalturaZoomVendorService(client){
	this.init(client);
}
KalturaZoomVendorService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @return	string.
 */
KalturaZoomVendorService.prototype.deAuthorization = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("vendor_zoomvendor", "deAuthorization", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	tokensData	string		 (optional).
 * @param	iv	string		 (optional).
 * @return	.
 */
KalturaZoomVendorService.prototype.fetchRegistrationPage = function(callback, tokensData, iv){
	var kparams = new Object();
	this.client.addParam(kparams, "tokensData", tokensData);
	this.client.addParam(kparams, "iv", iv);
	this.client.queueServiceActionCall("vendor_zoomvendor", "fetchRegistrationPage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve zoom integration setting object by partner id.
 * @param	partnerId	int		 (optional).
 * @return	KalturaZoomIntegrationSetting.
 * @return	.
 */
KalturaZoomVendorService.prototype.get = function(callback, partnerId){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("vendor_zoomvendor", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaZoomIntegrationSetting objects.
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaZoomIntegrationSettingResponse.
 */
KalturaZoomVendorService.prototype.listAction = function(callback, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("vendor_zoomvendor", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	zoomAccountId	string		 (optional).
 * @return	.
 */
KalturaZoomVendorService.prototype.localRegistrationPage = function(callback, zoomAccountId){
	var kparams = new Object();
	this.client.addParam(kparams, "zoomAccountId", zoomAccountId);
	this.client.queueServiceActionCall("vendor_zoomvendor", "localRegistrationPage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * load html page the that will ask the user for its KMC URL, derive the region of the user from it,
 *		 and redirect to the registration page in the correct region, while forwarding the necessary code for registration.
 * @return	.
 */
KalturaZoomVendorService.prototype.oauthValidation = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("vendor_zoomvendor", "oauthValidation", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	string.
 */
KalturaZoomVendorService.prototype.preOauthValidation = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("vendor_zoomvendor", "preOauthValidation", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	KalturaEndpointValidationResponse.
 */
KalturaZoomVendorService.prototype.recordingComplete = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("vendor_zoomvendor", "recordingComplete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	accountId	string		 (optional).
 * @param	integrationSetting	KalturaZoomIntegrationSetting		 (optional).
 * @return	string.
 */
KalturaZoomVendorService.prototype.submitRegistration = function(callback, accountId, integrationSetting){
	var kparams = new Object();
	this.client.addParam(kparams, "accountId", accountId);
	this.client.addParam(kparams, "integrationSetting", toParams(integrationSetting));
	this.client.queueServiceActionCall("vendor_zoomvendor", "submitRegistration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: vendorIntegration.
 * The available service actions:
 * @action	add	Add new integration setting object.
 * @action	delete	Delete integration object by ID.
 * @action	get	Retrieve integration setting object by ID.
 * @action	update	Update an existing vedor catalog item object.
 * @action	updateStatus	Update vendor catalog item status by id.
*/
function KalturaVendorIntegrationService(client){
	this.init(client);
}
KalturaVendorIntegrationService.inheritsFrom (KalturaServiceBase);
/**
 * Add new integration setting object.
 * @param	integration	KalturaIntegrationSetting		 (optional).
 * @param	remoteId	string		 (optional).
 * @return	KalturaIntegrationSetting.
 * @return	.
 */
KalturaVendorIntegrationService.prototype.add = function(callback, integration, remoteId){
	var kparams = new Object();
	this.client.addParam(kparams, "integration", toParams(integration));
	this.client.addParam(kparams, "remoteId", remoteId);
	this.client.queueServiceActionCall("vendor_vendorintegration", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete integration object by ID.
 * @param	integrationId	int		 (optional).
 * @return	KalturaIntegrationSetting.
 * @return	.
 */
KalturaVendorIntegrationService.prototype.deleteAction = function(callback, integrationId){
	var kparams = new Object();
	this.client.addParam(kparams, "integrationId", integrationId);
	this.client.queueServiceActionCall("vendor_vendorintegration", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve integration setting object by ID.
 * @param	integrationId	int		 (optional).
 * @return	KalturaIntegrationSetting.
 * @return	.
 */
KalturaVendorIntegrationService.prototype.get = function(callback, integrationId){
	var kparams = new Object();
	this.client.addParam(kparams, "integrationId", integrationId);
	this.client.queueServiceActionCall("vendor_vendorintegration", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing vedor catalog item object.
 * @param	id	int		 (optional).
 * @param	integrationSetting	KalturaIntegrationSetting		 (optional).
 * @return	KalturaIntegrationSetting.
 * @return	.
 */
KalturaVendorIntegrationService.prototype.update = function(callback, id, integrationSetting){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "integrationSetting", toParams(integrationSetting));
	this.client.queueServiceActionCall("vendor_vendorintegration", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update vendor catalog item status by id.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaVendorIntegrationStatus).
 * @return	KalturaIntegrationSetting.
 * @return	.
 */
KalturaVendorIntegrationService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("vendor_vendorintegration", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: group.
 * The available service actions:
 * @action	add	Adds a new group (user of type group)..
 * @action	clone	clone the group (groupId), and set group id with the neeGroupName..
 * @action	delete	Delete group by ID.
 * @action	get	Retrieves a group object for a specified group ID..
 * @action	list	Lists group  objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
 * @action	update	Update group by ID.
*/
function KalturaGroupService(client){
	this.init(client);
}
KalturaGroupService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new group (user of type group)..
 * @param	group	KalturaGroup		a new group (optional).
 * @return	KalturaGroup.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 * @return	.
 */
KalturaGroupService.prototype.add = function(callback, group){
	var kparams = new Object();
	this.client.addParam(kparams, "group", toParams(group));
	this.client.queueServiceActionCall("group_group", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * clone the group (groupId), and set group id with the neeGroupName..
 * @param	originalGroupId	string		The unique identifier in the partner's system (optional).
 * @param	newGroupId	string		The unique identifier in the partner's system (optional).
 * @param	newGroupName	string		The name of the new cloned group (optional, default: null).
 * @return	KalturaGroup.
 * @return	.
 * @return	.
 */
KalturaGroupService.prototype.cloneAction = function(callback, originalGroupId, newGroupId, newGroupName){
	if(!newGroupName)
		newGroupName = null;
	var kparams = new Object();
	this.client.addParam(kparams, "originalGroupId", originalGroupId);
	this.client.addParam(kparams, "newGroupId", newGroupId);
	this.client.addParam(kparams, "newGroupName", newGroupName);
	this.client.queueServiceActionCall("group_group", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete group by ID.
 * @param	groupId	string		The unique identifier in the partner's system (optional).
 * @return	KalturaGroup.
 * @return	.
 */
KalturaGroupService.prototype.deleteAction = function(callback, groupId){
	var kparams = new Object();
	this.client.addParam(kparams, "groupId", groupId);
	this.client.queueServiceActionCall("group_group", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves a group object for a specified group ID..
 * @param	groupId	string		The unique identifier in the partner's system (optional).
 * @return	KalturaGroup.
 * @return	.
 */
KalturaGroupService.prototype.get = function(callback, groupId){
	var kparams = new Object();
	this.client.addParam(kparams, "groupId", groupId);
	this.client.queueServiceActionCall("group_group", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists group  objects that are associated with an account.
 *		 Blocked users are listed unless you use a filter to exclude them.
 *		 Deleted users are not listed unless you use a filter to include them..
 * @param	filter	KalturaGroupFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaGroupListResponse.
 */
KalturaGroupService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("group_group", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update group by ID.
 * @param	groupId	string		The unique identifier in the partner's system (optional).
 * @param	group	KalturaGroup		Id The unique identifier in the partner's system (optional).
 * @return	KalturaGroup.
 * @return	.
 */
KalturaGroupService.prototype.update = function(callback, groupId, group){
	var kparams = new Object();
	this.client.addParam(kparams, "groupId", groupId);
	this.client.addParam(kparams, "group", toParams(group));
	this.client.queueServiceActionCall("group_group", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: pexip.
 * The available service actions:
 * @action	generateSipUrl	.
 * @action	handleIncomingCall	.
 * @action	listRooms	.
*/
function KalturaPexipService(client){
	this.init(client);
}
KalturaPexipService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	regenerate	bool		 (optional, default: false).
 * @param	sourceType	int		 (optional, enum: KalturaSipSourceType, default: 1).
 * @return	string.
 */
KalturaPexipService.prototype.generateSipUrl = function(callback, entryId, regenerate, sourceType){
	if(!regenerate)
		regenerate = false;
	if(!sourceType)
		sourceType = 1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "regenerate", regenerate);
	this.client.addParam(kparams, "sourceType", sourceType);
	this.client.queueServiceActionCall("sip_pexip", "generateSipUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	.
 */
KalturaPexipService.prototype.handleIncomingCall = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("sip_pexip", "handleIncomingCall", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	offset	int		 (optional).
 * @param	pageSize	int		 (optional, default: 500).
 * @param	activeOnly	bool		 (optional, default: false).
 * @return	array.
 */
KalturaPexipService.prototype.listRooms = function(callback, offset, pageSize, activeOnly){
	if(!offset)
		offset = 0;
	if(!pageSize)
		pageSize = 500;
	if(!activeOnly)
		activeOnly = false;
	var kparams = new Object();
	this.client.addParam(kparams, "offset", offset);
	this.client.addParam(kparams, "pageSize", pageSize);
	this.client.addParam(kparams, "activeOnly", activeOnly);
	this.client.queueServiceActionCall("sip_pexip", "listRooms", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbnail.
 * The available service actions:
 * @action	transform	Retrieves a thumbnail according to the required transformation.
*/
function KalturaThumbnailService(client){
	this.init(client);
}
KalturaThumbnailService.inheritsFrom (KalturaServiceBase);
/**
 * Retrieves a thumbnail according to the required transformation.
 * @param	transformString	string		 (optional).
 * @return	.
 */
KalturaThumbnailService.prototype.transform = function(callback, transformString){
	var kparams = new Object();
	this.client.addParam(kparams, "transformString", transformString);
	this.client.queueServiceActionCall("thumbnail_thumbnail", "transform", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: sso.
 * The available service actions:
 * @action	add	Adds a new sso configuration..
 * @action	delete	Delete sso by ID.
 * @action	get	Retrieves sso object.
 * @action	list	Lists sso objects that are associated with an account..
 * @action	login	Login with SSO, getting redirect url according to application type and partner Id
 *		 or according to application type and domain.
 * @action	update	Update sso by ID.
*/
function KalturaSsoService(client){
	this.init(client);
}
KalturaSsoService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new sso configuration..
 * @param	sso	KalturaSso		a new sso configuration (optional).
 * @return	KalturaSso.
 * @return	.
 */
KalturaSsoService.prototype.add = function(callback, sso){
	var kparams = new Object();
	this.client.addParam(kparams, "sso", toParams(sso));
	this.client.queueServiceActionCall("sso_sso", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete sso by ID.
 * @param	ssoId	int		The unique identifier in the sso's object (optional).
 * @return	KalturaSso.
 * @return	.
 */
KalturaSsoService.prototype.deleteAction = function(callback, ssoId){
	var kparams = new Object();
	this.client.addParam(kparams, "ssoId", ssoId);
	this.client.queueServiceActionCall("sso_sso", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieves sso object.
 * @param	ssoId	int		The unique identifier in the sso's object (optional).
 * @return	KalturaSso.
 * @return	.
 */
KalturaSsoService.prototype.get = function(callback, ssoId){
	var kparams = new Object();
	this.client.addParam(kparams, "ssoId", ssoId);
	this.client.queueServiceActionCall("sso_sso", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Lists sso objects that are associated with an account..
 * @param	filter	KalturaSsoFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		A limit for the number of records to display on a page (optional, default: null).
 * @return	KalturaSsoListResponse.
 */
KalturaSsoService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("sso_sso", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Login with SSO, getting redirect url according to application type and partner Id
 *		 or according to application type and domain.
 * @param	userId	string		 (optional).
 * @param	applicationType	string		 (optional).
 * @param	partnerId	int		 (optional, default: null).
 * @return	string.
 * @return	.
 */
KalturaSsoService.prototype.login = function(callback, userId, applicationType, partnerId){
	if(!partnerId)
		partnerId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "applicationType", applicationType);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("sso_sso", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update sso by ID.
 * @param	ssoId	int		The unique identifier in the sso's object (optional).
 * @param	sso	KalturaSso		Id The unique identifier in the sso's object (optional).
 * @return	KalturaSso.
 * @return	.
 */
KalturaSsoService.prototype.update = function(callback, ssoId, sso){
	var kparams = new Object();
	this.client.addParam(kparams, "ssoId", ssoId);
	this.client.addParam(kparams, "sso", toParams(sso));
	this.client.queueServiceActionCall("sso_sso", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: rating.
 * The available service actions:
 * @action	checkRating	.
 * @action	getRatingCounts	.
 * @action	rate	.
 * @action	removeRating	.
*/
function KalturaRatingService(client){
	this.init(client);
}
KalturaRatingService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	int.
 * @return	.
 */
KalturaRatingService.prototype.checkRating = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("rating_rating", "checkRating", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaRatingCountFilter		 (optional).
 * @return	KalturaRatingCountListResponse.
 * @return	.
 * @return	.
 */
KalturaRatingService.prototype.getRatingCounts = function(callback, filter){
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("rating_rating", "getRatingCounts", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	int.
 * @return	.
 * @return	.
 */
KalturaRatingService.prototype.rate = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("rating_rating", "rate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	bool.
 * @return	.
 * @return	.
 */
KalturaRatingService.prototype.removeRating = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("rating_rating", "removeRating", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: interactivity.
 * The available service actions:
 * @action	add	Add a interactivity object.
 * @action	delete	Delete a interactivity object by entry id.
 * @action	get	Retrieve a interactivity object by entry id.
 * @action	update	Update an existing interactivity object.
*/
function KalturaInteractivityService(client){
	this.init(client);
}
KalturaInteractivityService.inheritsFrom (KalturaServiceBase);
/**
 * Add a interactivity object.
 * @param	entryId	string		 (optional).
 * @param	kalturaInteractivity	KalturaInteractivity		 (optional).
 * @return	KalturaInteractivity.
 */
KalturaInteractivityService.prototype.add = function(callback, entryId, kalturaInteractivity){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "kalturaInteractivity", toParams(kalturaInteractivity));
	this.client.queueServiceActionCall("interactivity_interactivity", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a interactivity object by entry id.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaInteractivityService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("interactivity_interactivity", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a interactivity object by entry id.
 * @param	entryId	string		 (optional).
 * @param	dataFilter	KalturaInteractivityDataFilter		 (optional, default: null).
 * @return	KalturaInteractivity.
 */
KalturaInteractivityService.prototype.get = function(callback, entryId, dataFilter){
	if(!dataFilter)
		dataFilter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (dataFilter != null)
		this.client.addParam(kparams, "dataFilter", toParams(dataFilter));
	this.client.queueServiceActionCall("interactivity_interactivity", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing interactivity object.
 * @param	entryId	string		 (optional).
 * @param	version	int		 (optional).
 * @param	kalturaInteractivity	KalturaInteractivity		 (optional).
 * @return	KalturaInteractivity.
 */
KalturaInteractivityService.prototype.update = function(callback, entryId, version, kalturaInteractivity){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.addParam(kparams, "kalturaInteractivity", toParams(kalturaInteractivity));
	this.client.queueServiceActionCall("interactivity_interactivity", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: volatileInteractivity.
 * The available service actions:
 * @action	add	add a volatile interactivity object.
 * @action	delete	Delete a volatile interactivity object by entry id.
 * @action	get	Retrieve a volatile interactivity object by entry id.
 * @action	update	Update a volatile interactivity object.
*/
function KalturaVolatileInteractivityService(client){
	this.init(client);
}
KalturaVolatileInteractivityService.inheritsFrom (KalturaServiceBase);
/**
 * add a volatile interactivity object.
 * @param	entryId	string		 (optional).
 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional).
 * @return	KalturaVolatileInteractivity.
 */
KalturaVolatileInteractivityService.prototype.add = function(callback, entryId, kalturaVolatileInteractivity){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "kalturaVolatileInteractivity", toParams(kalturaVolatileInteractivity));
	this.client.queueServiceActionCall("interactivity_volatileinteractivity", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a volatile interactivity object by entry id.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaVolatileInteractivityService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("interactivity_volatileinteractivity", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a volatile interactivity object by entry id.
 * @param	entryId	string		 (optional).
 * @return	KalturaVolatileInteractivity.
 */
KalturaVolatileInteractivityService.prototype.get = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("interactivity_volatileinteractivity", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update a volatile interactivity object.
 * @param	entryId	string		 (optional).
 * @param	version	int		 (optional).
 * @param	kalturaVolatileInteractivity	KalturaVolatileInteractivity		 (optional).
 * @return	KalturaVolatileInteractivity.
 */
KalturaVolatileInteractivityService.prototype.update = function(callback, entryId, version, kalturaVolatileInteractivity){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.addParam(kparams, "kalturaVolatileInteractivity", toParams(kalturaVolatileInteractivity));
	this.client.queueServiceActionCall("interactivity_volatileinteractivity", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: virtualEvent.
 * The available service actions:
 * @action	add	Add a new virtual event.
 * @action	delete	Delete a virtual event.
 * @action	get	Retrieve a virtual event by id.
 * @action	list	List virtual events.
 * @action	update	Update an existing virtual event.
*/
function KalturaVirtualEventService(client){
	this.init(client);
}
KalturaVirtualEventService.inheritsFrom (KalturaServiceBase);
/**
 * Add a new virtual event.
 * @param	virtualEvent	KalturaVirtualEvent		 (optional).
 * @return	KalturaVirtualEvent.
 */
KalturaVirtualEventService.prototype.add = function(callback, virtualEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "virtualEvent", toParams(virtualEvent));
	this.client.queueServiceActionCall("virtualevent_virtualevent", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a virtual event.
 * @param	id	int		 (optional).
 * @return	.
 * @return	.
 */
KalturaVirtualEventService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("virtualevent_virtualevent", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a virtual event by id.
 * @param	id	int		 (optional).
 * @return	KalturaVirtualEvent.
 * @return	.
 */
KalturaVirtualEventService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("virtualevent_virtualevent", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List virtual events.
 * @param	filter	KalturaVirtualEventFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaVirtualEventListResponse.
 */
KalturaVirtualEventService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("virtualevent_virtualevent", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing virtual event.
 * @param	id	int		 (optional).
 * @param	virtualEvent	KalturaVirtualEvent		 (optional).
 * @return	KalturaVirtualEvent.
 * @return	.
 */
KalturaVirtualEventService.prototype.update = function(callback, id, virtualEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "virtualEvent", toParams(virtualEvent));
	this.client.queueServiceActionCall("virtualevent_virtualevent", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: userScore.
 * The available service actions:
 * @action	delete	.
 * @action	list	.
 * @action	update	.
*/
function KalturaUserScoreService(client){
	this.init(client);
}
KalturaUserScoreService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	gameObjectId	string		 (optional).
 * @param	gameObjectType	string		 (optional, enum: KalturaGameObjectType).
 * @param	userId	string		 (optional).
 * @return	KalturaUserScorePropertiesResponse.
 */
KalturaUserScoreService.prototype.deleteAction = function(callback, gameObjectId, gameObjectType, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "gameObjectId", gameObjectId);
	this.client.addParam(kparams, "gameObjectType", gameObjectType);
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("game_userscore", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaUserScorePropertiesFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserScorePropertiesResponse.
 */
KalturaUserScoreService.prototype.listAction = function(callback, filter, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("game_userscore", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	gameObjectId	string		 (optional).
 * @param	gameObjectType	string		 (optional, enum: KalturaGameObjectType).
 * @param	userId	string		 (optional).
 * @param	score	int		 (optional).
 * @return	KalturaUserScorePropertiesResponse.
 */
KalturaUserScoreService.prototype.update = function(callback, gameObjectId, gameObjectType, userId, score){
	var kparams = new Object();
	this.client.addParam(kparams, "gameObjectId", gameObjectId);
	this.client.addParam(kparams, "gameObjectType", gameObjectType);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "score", score);
	this.client.queueServiceActionCall("game_userscore", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: webexVendor.
 * The available service actions:
 * @action	fetchRegistrationPage	.
 * @action	list	List KalturaWebexAPIIntegrationSetting objects.
 * @action	oauthValidation	.
 * @action	preOauthValidation	.
 * @action	submitRegistration	.
*/
function KalturaWebexVendorService(client){
	this.init(client);
}
KalturaWebexVendorService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	tokensData	string		 (optional).
 * @param	iv	string		 (optional).
 * @return	.
 */
KalturaWebexVendorService.prototype.fetchRegistrationPage = function(callback, tokensData, iv){
	var kparams = new Object();
	this.client.addParam(kparams, "tokensData", tokensData);
	this.client.addParam(kparams, "iv", iv);
	this.client.queueServiceActionCall("webexapidropfolder_webexvendor", "fetchRegistrationPage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaWebexAPIIntegrationSetting objects.
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaWebexAPIIntegrationSettingResponse.
 */
KalturaWebexVendorService.prototype.listAction = function(callback, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("webexapidropfolder_webexvendor", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	string.
 */
KalturaWebexVendorService.prototype.oauthValidation = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("webexapidropfolder_webexvendor", "oauthValidation", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	.
 */
KalturaWebexVendorService.prototype.preOauthValidation = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("webexapidropfolder_webexvendor", "preOauthValidation", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	accountId	string		 (optional).
 * @param	integrationSetting	KalturaWebexAPIIntegrationSetting		 (optional).
 * @return	string.
 */
KalturaWebexVendorService.prototype.submitRegistration = function(callback, accountId, integrationSetting){
	var kparams = new Object();
	this.client.addParam(kparams, "accountId", accountId);
	this.client.addParam(kparams, "integrationSetting", toParams(integrationSetting));
	this.client.queueServiceActionCall("webexapidropfolder_webexvendor", "submitRegistration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: room.
 * The available service actions:
 * @action	add	.
 * @action	attachRecordedEntry	.
 * @action	delete	.
 * @action	get	.
 * @action	list	.
 * @action	update	.
*/
function KalturaRoomService(client){
	this.init(client);
}
KalturaRoomService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	entry	KalturaRoomEntry		 (optional).
 * @return	KalturaRoomEntry.
 */
KalturaRoomService.prototype.add = function(callback, entry){
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.queueServiceActionCall("room_room", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	roomEntryId	string		 (optional).
 * @param	mediaEntryId	string		 (optional).
 * @return	KalturaMediaEntry.
 */
KalturaRoomService.prototype.attachRecordedEntry = function(callback, roomEntryId, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "roomEntryId", roomEntryId);
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("room_room", "attachRecordedEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	roomId	string		 (optional).
 * @return	.
 */
KalturaRoomService.prototype.deleteAction = function(callback, roomId){
	var kparams = new Object();
	this.client.addParam(kparams, "roomId", roomId);
	this.client.queueServiceActionCall("room_room", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	roomId	string		 (optional).
 * @return	KalturaRoomEntry.
 */
KalturaRoomService.prototype.get = function(callback, roomId){
	var kparams = new Object();
	this.client.addParam(kparams, "roomId", roomId);
	this.client.queueServiceActionCall("room_room", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaRoomEntryFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaRoomEntryListResponse.
 */
KalturaRoomService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("room_room", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	roomId	string		 (optional).
 * @param	room	KalturaRoomEntry		Id (optional).
 * @return	KalturaRoomEntry.
 */
KalturaRoomService.prototype.update = function(callback, roomId, room){
	var kparams = new Object();
	this.client.addParam(kparams, "roomId", roomId);
	this.client.addParam(kparams, "room", toParams(room));
	this.client.queueServiceActionCall("room_room", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

