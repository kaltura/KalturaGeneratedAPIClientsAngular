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

function KalturaAppTokenStatus(){
}
KalturaAppTokenStatus.DISABLED = 1;
KalturaAppTokenStatus.ACTIVE = 2;
KalturaAppTokenStatus.DELETED = 3;

function KalturaAppearInListType(){
}
KalturaAppearInListType.PARTNER_ONLY = 1;
KalturaAppearInListType.CATEGORY_MEMBERS_ONLY = 3;

function KalturaAssetParamsDeletePolicy(){
}
KalturaAssetParamsDeletePolicy.KEEP = 0;
KalturaAssetParamsDeletePolicy.DELETE = 1;

function KalturaAssetParamsOrigin(){
}
KalturaAssetParamsOrigin.CONVERT = 0;
KalturaAssetParamsOrigin.INGEST = 1;
KalturaAssetParamsOrigin.CONVERT_WHEN_MISSING = 2;

function KalturaAttachmentAssetStatus(){
}
KalturaAttachmentAssetStatus.ERROR = -1;
KalturaAttachmentAssetStatus.QUEUED = 0;
KalturaAttachmentAssetStatus.READY = 2;
KalturaAttachmentAssetStatus.DELETED = 3;
KalturaAttachmentAssetStatus.IMPORTING = 7;
KalturaAttachmentAssetStatus.EXPORTING = 9;

function KalturaAuditTrailChangeXmlNodeType(){
}
KalturaAuditTrailChangeXmlNodeType.CHANGED = 1;
KalturaAuditTrailChangeXmlNodeType.ADDED = 2;
KalturaAuditTrailChangeXmlNodeType.REMOVED = 3;

function KalturaAuditTrailContext(){
}
KalturaAuditTrailContext.CLIENT = -1;
KalturaAuditTrailContext.SCRIPT = 0;
KalturaAuditTrailContext.PS2 = 1;
KalturaAuditTrailContext.API_V3 = 2;

function KalturaAuditTrailFileSyncType(){
}
KalturaAuditTrailFileSyncType.FILE = 1;
KalturaAuditTrailFileSyncType.LINK = 2;
KalturaAuditTrailFileSyncType.URL = 3;

function KalturaAuditTrailStatus(){
}
KalturaAuditTrailStatus.PENDING = 1;
KalturaAuditTrailStatus.READY = 2;
KalturaAuditTrailStatus.FAILED = 3;

function KalturaBatchJobErrorTypes(){
}
KalturaBatchJobErrorTypes.APP = 0;
KalturaBatchJobErrorTypes.RUNTIME = 1;
KalturaBatchJobErrorTypes.HTTP = 2;
KalturaBatchJobErrorTypes.CURL = 3;
KalturaBatchJobErrorTypes.KALTURA_API = 4;
KalturaBatchJobErrorTypes.KALTURA_CLIENT = 5;

function KalturaBatchJobStatus(){
}
KalturaBatchJobStatus.PENDING = 0;
KalturaBatchJobStatus.QUEUED = 1;
KalturaBatchJobStatus.PROCESSING = 2;
KalturaBatchJobStatus.PROCESSED = 3;
KalturaBatchJobStatus.MOVEFILE = 4;
KalturaBatchJobStatus.FINISHED = 5;
KalturaBatchJobStatus.FAILED = 6;
KalturaBatchJobStatus.ABORTED = 7;
KalturaBatchJobStatus.ALMOST_DONE = 8;
KalturaBatchJobStatus.RETRY = 9;
KalturaBatchJobStatus.FATAL = 10;
KalturaBatchJobStatus.DONT_PROCESS = 11;
KalturaBatchJobStatus.FINISHED_PARTIALLY = 12;
KalturaBatchJobStatus.SUSPEND = 13;
KalturaBatchJobStatus.SUSPEND_ALMOST_DONE = 14;

function KalturaBitRateMode(){
}
KalturaBitRateMode.CBR = 1;
KalturaBitRateMode.VBR = 2;

function KalturaBorderStyle(){
}
KalturaBorderStyle.OUTLINE_WITH_SHADOW = 1;
KalturaBorderStyle.OPAQUE_BOX = 3;

function KalturaBulkUploadCsvVersion(){
}
KalturaBulkUploadCsvVersion.V1 = 1;
KalturaBulkUploadCsvVersion.V2 = 2;
KalturaBulkUploadCsvVersion.V3 = 3;

function KalturaCaptionAssetStatus(){
}
KalturaCaptionAssetStatus.ERROR = -1;
KalturaCaptionAssetStatus.QUEUED = 0;
KalturaCaptionAssetStatus.READY = 2;
KalturaCaptionAssetStatus.DELETED = 3;
KalturaCaptionAssetStatus.IMPORTING = 7;
KalturaCaptionAssetStatus.EXPORTING = 9;

function KalturaCaptionsAlignment(){
}
KalturaCaptionsAlignment.BOTTOM_LEFT = 1;
KalturaCaptionsAlignment.BOTTOM_CENTER = 2;
KalturaCaptionsAlignment.BOTTOM_RIGHT = 3;
KalturaCaptionsAlignment.TOP_LEFT = 4;
KalturaCaptionsAlignment.TOP_CENTER = 6;
KalturaCaptionsAlignment.TOP_RIGHT = 7;
KalturaCaptionsAlignment.CENTER_LEFT = 8;
KalturaCaptionsAlignment.CENTER_CENTER = 10;
KalturaCaptionsAlignment.CENTER_RIGHT = 11;

function KalturaCategoryEntryStatus(){
}
KalturaCategoryEntryStatus.PENDING = 1;
KalturaCategoryEntryStatus.ACTIVE = 2;
KalturaCategoryEntryStatus.DELETED = 3;
KalturaCategoryEntryStatus.REJECTED = 4;

function KalturaCategoryStatus(){
}
KalturaCategoryStatus.UPDATING = 1;
KalturaCategoryStatus.ACTIVE = 2;
KalturaCategoryStatus.DELETED = 3;
KalturaCategoryStatus.PURGED = 4;

function KalturaCategoryUserPermissionLevel(){
}
KalturaCategoryUserPermissionLevel.MANAGER = 0;
KalturaCategoryUserPermissionLevel.MODERATOR = 1;
KalturaCategoryUserPermissionLevel.CONTRIBUTOR = 2;
KalturaCategoryUserPermissionLevel.MEMBER = 3;
KalturaCategoryUserPermissionLevel.NONE = 4;

function KalturaCategoryUserStatus(){
}
KalturaCategoryUserStatus.ACTIVE = 1;
KalturaCategoryUserStatus.PENDING = 2;
KalturaCategoryUserStatus.NOT_ACTIVE = 3;
KalturaCategoryUserStatus.DELETED = 4;

function KalturaChapterNamePolicy(){
}
KalturaChapterNamePolicy.BY_ENTRY_ID = 1;
KalturaChapterNamePolicy.BY_ENTRY_NAME = 2;
KalturaChapterNamePolicy.NUMERICAL = 3;

function KalturaChinaCacheAlgorithmType(){
}
KalturaChinaCacheAlgorithmType.SHA1 = 1;
KalturaChinaCacheAlgorithmType.SHA256 = 2;

function KalturaCommercialUseType(){
}
KalturaCommercialUseType.NON_COMMERCIAL_USE = 0;
KalturaCommercialUseType.COMMERCIAL_USE = 1;

function KalturaConfMapsStatus(){
}
KalturaConfMapsStatus.STATUS_DISABLED = 0;
KalturaConfMapsStatus.STATUS_ENABLED = 1;

function KalturaConferenceRoomStatus(){
}
KalturaConferenceRoomStatus.CREATED = 1;
KalturaConferenceRoomStatus.READY = 2;
KalturaConferenceRoomStatus.ENDED = 3;

function KalturaContributionPolicyType(){
}
KalturaContributionPolicyType.ALL = 1;
KalturaContributionPolicyType.MEMBERS_WITH_CONTRIBUTION_PERMISSION = 2;

function KalturaControlPanelCommandStatus(){
}
KalturaControlPanelCommandStatus.PENDING = 1;
KalturaControlPanelCommandStatus.HANDLED = 2;
KalturaControlPanelCommandStatus.DONE = 3;
KalturaControlPanelCommandStatus.FAILED = 4;

function KalturaControlPanelCommandTargetType(){
}
KalturaControlPanelCommandTargetType.DATA_CENTER = 1;
KalturaControlPanelCommandTargetType.SCHEDULER = 2;
KalturaControlPanelCommandTargetType.JOB_TYPE = 3;
KalturaControlPanelCommandTargetType.JOB = 4;
KalturaControlPanelCommandTargetType.BATCH = 5;

function KalturaControlPanelCommandType(){
}
KalturaControlPanelCommandType.KILL = 4;

function KalturaCortexApiDistributionCaptionAction(){
}
KalturaCortexApiDistributionCaptionAction.UPDATE_ACTION = 1;
KalturaCortexApiDistributionCaptionAction.SUBMIT_ACTION = 2;
KalturaCortexApiDistributionCaptionAction.DELETE_ACTION = 3;

function KalturaCountryRestrictionType(){
}
KalturaCountryRestrictionType.RESTRICT_COUNTRY_LIST = 0;
KalturaCountryRestrictionType.ALLOW_COUNTRY_LIST = 1;

function KalturaCuePointStatus(){
}
KalturaCuePointStatus.READY = 1;
KalturaCuePointStatus.DELETED = 2;
KalturaCuePointStatus.HANDLED = 3;
KalturaCuePointStatus.PENDING = 4;

function KalturaDVRStatus(){
}
KalturaDVRStatus.DISABLED = 0;
KalturaDVRStatus.ENABLED = 1;

function KalturaDailymotionDistributionCaptionAction(){
}
KalturaDailymotionDistributionCaptionAction.UPDATE_ACTION = 1;
KalturaDailymotionDistributionCaptionAction.SUBMIT_ACTION = 2;
KalturaDailymotionDistributionCaptionAction.DELETE_ACTION = 3;

function KalturaDailymotionDistributionCaptionFormat(){
}
KalturaDailymotionDistributionCaptionFormat.SRT = 1;
KalturaDailymotionDistributionCaptionFormat.STL = 2;
KalturaDailymotionDistributionCaptionFormat.TT = 3;

function KalturaDailymotionGeoBlockingMapping(){
}
KalturaDailymotionGeoBlockingMapping.DISABLED = 0;
KalturaDailymotionGeoBlockingMapping.ACCESS_CONTROL = 1;
KalturaDailymotionGeoBlockingMapping.METADATA = 2;

function KalturaDeleteFlavorsLogicType(){
}
KalturaDeleteFlavorsLogicType.KEEP_LIST_DELETE_OTHERS = 1;
KalturaDeleteFlavorsLogicType.DELETE_LIST = 2;
KalturaDeleteFlavorsLogicType.DELETE_KEEP_SMALLEST = 3;

function KalturaDeliveryStatus(){
}
KalturaDeliveryStatus.ACTIVE = 0;
KalturaDeliveryStatus.DELETED = 1;
KalturaDeliveryStatus.STAGING_IN = 2;
KalturaDeliveryStatus.STAGING_OUT = 3;

function KalturaDirectoryRestrictionType(){
}
KalturaDirectoryRestrictionType.DONT_DISPLAY = 0;
KalturaDirectoryRestrictionType.DISPLAY_WITH_LINK = 1;

function KalturaDistributeTrigger(){
}
KalturaDistributeTrigger.ENTRY_READY = 1;
KalturaDistributeTrigger.MODERATION_APPROVED = 2;

function KalturaDistributionAction(){
}
KalturaDistributionAction.SUBMIT = 1;
KalturaDistributionAction.UPDATE = 2;
KalturaDistributionAction.DELETE = 3;
KalturaDistributionAction.FETCH_REPORT = 4;

function KalturaDistributionErrorType(){
}
KalturaDistributionErrorType.MISSING_FLAVOR = 1;
KalturaDistributionErrorType.MISSING_THUMBNAIL = 2;
KalturaDistributionErrorType.MISSING_METADATA = 3;
KalturaDistributionErrorType.INVALID_DATA = 4;
KalturaDistributionErrorType.MISSING_ASSET = 5;
KalturaDistributionErrorType.CONDITION_NOT_MET = 6;

function KalturaDistributionFieldRequiredStatus(){
}
KalturaDistributionFieldRequiredStatus.NOT_REQUIRED = 0;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PROVIDER = 1;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PARTNER = 2;
KalturaDistributionFieldRequiredStatus.REQUIRED_FOR_AUTOMATIC_DISTRIBUTION = 3;

function KalturaDistributionProfileActionStatus(){
}
KalturaDistributionProfileActionStatus.DISABLED = 1;
KalturaDistributionProfileActionStatus.AUTOMATIC = 2;
KalturaDistributionProfileActionStatus.MANUAL = 3;

function KalturaDistributionProfileStatus(){
}
KalturaDistributionProfileStatus.DISABLED = 1;
KalturaDistributionProfileStatus.ENABLED = 2;
KalturaDistributionProfileStatus.DELETED = 3;

function KalturaDistributionProtocol(){
}
KalturaDistributionProtocol.FTP = 1;
KalturaDistributionProtocol.SCP = 2;
KalturaDistributionProtocol.SFTP = 3;
KalturaDistributionProtocol.HTTP = 4;
KalturaDistributionProtocol.HTTPS = 5;
KalturaDistributionProtocol.ASPERA = 10;

function KalturaDistributionValidationErrorType(){
}
KalturaDistributionValidationErrorType.CUSTOM_ERROR = 0;
KalturaDistributionValidationErrorType.STRING_EMPTY = 1;
KalturaDistributionValidationErrorType.STRING_TOO_LONG = 2;
KalturaDistributionValidationErrorType.STRING_TOO_SHORT = 3;
KalturaDistributionValidationErrorType.INVALID_FORMAT = 4;

function KalturaDocumentType(){
}
KalturaDocumentType.DOCUMENT = 11;
KalturaDocumentType.SWF = 12;
KalturaDocumentType.PDF = 13;

function KalturaDrmLicenseExpirationPolicy(){
}
KalturaDrmLicenseExpirationPolicy.FIXED_DURATION = 1;
KalturaDrmLicenseExpirationPolicy.ENTRY_SCHEDULING_END = 2;
KalturaDrmLicenseExpirationPolicy.UNLIMITED = 3;

function KalturaDrmPolicyStatus(){
}
KalturaDrmPolicyStatus.ACTIVE = 1;
KalturaDrmPolicyStatus.DELETED = 2;

function KalturaDrmProfileStatus(){
}
KalturaDrmProfileStatus.ACTIVE = 1;
KalturaDrmProfileStatus.DELETED = 2;

function KalturaDropFolderContentFileHandlerMatchPolicy(){
}
KalturaDropFolderContentFileHandlerMatchPolicy.ADD_AS_NEW = 1;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_ADD_AS_NEW = 2;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_KEEP_IN_FOLDER = 3;

function KalturaDropFolderFileDeletePolicy(){
}
KalturaDropFolderFileDeletePolicy.MANUAL_DELETE = 1;
KalturaDropFolderFileDeletePolicy.AUTO_DELETE = 2;
KalturaDropFolderFileDeletePolicy.AUTO_DELETE_WHEN_ENTRY_IS_READY = 3;

function KalturaDropFolderFileStatus(){
}
KalturaDropFolderFileStatus.UPLOADING = 1;
KalturaDropFolderFileStatus.PENDING = 2;
KalturaDropFolderFileStatus.WAITING = 3;
KalturaDropFolderFileStatus.HANDLED = 4;
KalturaDropFolderFileStatus.IGNORE = 5;
KalturaDropFolderFileStatus.DELETED = 6;
KalturaDropFolderFileStatus.PURGED = 7;
KalturaDropFolderFileStatus.NO_MATCH = 8;
KalturaDropFolderFileStatus.ERROR_HANDLING = 9;
KalturaDropFolderFileStatus.ERROR_DELETING = 10;
KalturaDropFolderFileStatus.DOWNLOADING = 11;
KalturaDropFolderFileStatus.ERROR_DOWNLOADING = 12;
KalturaDropFolderFileStatus.PROCESSING = 13;
KalturaDropFolderFileStatus.PARSED = 14;
KalturaDropFolderFileStatus.DETECTED = 15;

function KalturaDropFolderStatus(){
}
KalturaDropFolderStatus.DISABLED = 0;
KalturaDropFolderStatus.ENABLED = 1;
KalturaDropFolderStatus.DELETED = 2;
KalturaDropFolderStatus.ERROR = 3;

function KalturaDryRunFileType(){
}
KalturaDryRunFileType.LIST_RESPONSE = 1;
KalturaDryRunFileType.CSV = 2;

function KalturaESearchItemType(){
}
KalturaESearchItemType.EXACT_MATCH = 1;
KalturaESearchItemType.PARTIAL = 2;
KalturaESearchItemType.STARTS_WITH = 3;
KalturaESearchItemType.EXISTS = 4;
KalturaESearchItemType.RANGE = 5;

function KalturaESearchOperatorType(){
}
KalturaESearchOperatorType.AND_OP = 1;
KalturaESearchOperatorType.OR_OP = 2;
KalturaESearchOperatorType.NOT_OP = 3;

function KalturaEditorType(){
}
KalturaEditorType.SIMPLE = 1;
KalturaEditorType.ADVANCED = 2;

function KalturaEffectType(){
}
KalturaEffectType.VIDEO_FADE_IN = 1;
KalturaEffectType.VIDEO_FADE_OUT = 2;

function KalturaEmailIngestionProfileStatus(){
}
KalturaEmailIngestionProfileStatus.INACTIVE = 0;
KalturaEmailIngestionProfileStatus.ACTIVE = 1;

function KalturaEmailNotificationTemplatePriority(){
}
KalturaEmailNotificationTemplatePriority.HIGH = 1;
KalturaEmailNotificationTemplatePriority.NORMAL = 3;
KalturaEmailNotificationTemplatePriority.LOW = 5;

function KalturaEntryDisplayInSearchType(){
}
KalturaEntryDisplayInSearchType.RECYCLED = -2;
KalturaEntryDisplayInSearchType.SYSTEM = -1;
KalturaEntryDisplayInSearchType.NONE = 0;
KalturaEntryDisplayInSearchType.PARTNER_ONLY = 1;
KalturaEntryDisplayInSearchType.KALTURA_NETWORK = 2;

function KalturaEntryDistributionFlag(){
}
KalturaEntryDistributionFlag.NONE = 0;
KalturaEntryDistributionFlag.SUBMIT_REQUIRED = 1;
KalturaEntryDistributionFlag.DELETE_REQUIRED = 2;
KalturaEntryDistributionFlag.UPDATE_REQUIRED = 3;
KalturaEntryDistributionFlag.ENABLE_REQUIRED = 4;
KalturaEntryDistributionFlag.DISABLE_REQUIRED = 5;

function KalturaEntryDistributionStatus(){
}
KalturaEntryDistributionStatus.PENDING = 0;
KalturaEntryDistributionStatus.QUEUED = 1;
KalturaEntryDistributionStatus.READY = 2;
KalturaEntryDistributionStatus.DELETED = 3;
KalturaEntryDistributionStatus.SUBMITTING = 4;
KalturaEntryDistributionStatus.UPDATING = 5;
KalturaEntryDistributionStatus.DELETING = 6;
KalturaEntryDistributionStatus.ERROR_SUBMITTING = 7;
KalturaEntryDistributionStatus.ERROR_UPDATING = 8;
KalturaEntryDistributionStatus.ERROR_DELETING = 9;
KalturaEntryDistributionStatus.REMOVED = 10;
KalturaEntryDistributionStatus.IMPORT_SUBMITTING = 11;
KalturaEntryDistributionStatus.IMPORT_UPDATING = 12;

function KalturaEntryDistributionSunStatus(){
}
KalturaEntryDistributionSunStatus.BEFORE_SUNRISE = 1;
KalturaEntryDistributionSunStatus.AFTER_SUNRISE = 2;
KalturaEntryDistributionSunStatus.AFTER_SUNSET = 3;

function KalturaEntryModerationStatus(){
}
KalturaEntryModerationStatus.PENDING_MODERATION = 1;
KalturaEntryModerationStatus.APPROVED = 2;
KalturaEntryModerationStatus.REJECTED = 3;
KalturaEntryModerationStatus.DELETED = 4;
KalturaEntryModerationStatus.FLAGGED_FOR_REVIEW = 5;
KalturaEntryModerationStatus.AUTO_APPROVED = 6;

function KalturaEntryServerNodeRecordingStatus(){
}
KalturaEntryServerNodeRecordingStatus.STOPPED = 0;
KalturaEntryServerNodeRecordingStatus.ON_GOING = 1;
KalturaEntryServerNodeRecordingStatus.DONE = 2;
KalturaEntryServerNodeRecordingStatus.DISMISSED = 3;

function KalturaEntryServerNodeStatus(){
}
KalturaEntryServerNodeStatus.ERROR = -1;
KalturaEntryServerNodeStatus.STOPPED = 0;
KalturaEntryServerNodeStatus.PLAYABLE = 1;
KalturaEntryServerNodeStatus.BROADCASTING = 2;
KalturaEntryServerNodeStatus.AUTHENTICATED = 3;
KalturaEntryServerNodeStatus.MARKED_FOR_DELETION = 4;
KalturaEntryServerNodeStatus.TASK_PENDING = 5;
KalturaEntryServerNodeStatus.TASK_QUEUED = 6;
KalturaEntryServerNodeStatus.TASK_PROCESSING = 7;
KalturaEntryServerNodeStatus.TASK_UPLOADING = 8;
KalturaEntryServerNodeStatus.TASK_FINISHED = 9;

function KalturaEntryVendorTaskCreationMode(){
}
KalturaEntryVendorTaskCreationMode.MANUAL = 1;
KalturaEntryVendorTaskCreationMode.AUTOMATIC = 2;

function KalturaEntryVendorTaskStatus(){
}
KalturaEntryVendorTaskStatus.PENDING = 1;
KalturaEntryVendorTaskStatus.READY = 2;
KalturaEntryVendorTaskStatus.PROCESSING = 3;
KalturaEntryVendorTaskStatus.PENDING_MODERATION = 4;
KalturaEntryVendorTaskStatus.REJECTED = 5;
KalturaEntryVendorTaskStatus.ERROR = 6;
KalturaEntryVendorTaskStatus.ABORTED = 7;
KalturaEntryVendorTaskStatus.PENDING_ENTRY_READY = 8;
KalturaEntryVendorTaskStatus.SCHEDULED = 9;

function KalturaEventNotificationDelayedCondition(){
}
KalturaEventNotificationDelayedCondition.NONE = 0;
KalturaEventNotificationDelayedCondition.PENDING_ENTRY_READY = 1;

function KalturaEventNotificationTemplateStatus(){
}
KalturaEventNotificationTemplateStatus.DISABLED = 1;
KalturaEventNotificationTemplateStatus.ACTIVE = 2;
KalturaEventNotificationTemplateStatus.DELETED = 3;

function KalturaFeatureStatusType(){
}
KalturaFeatureStatusType.LOCK_CATEGORY = 1;
KalturaFeatureStatusType.CATEGORY = 2;
KalturaFeatureStatusType.CATEGORY_ENTRY = 3;
KalturaFeatureStatusType.ENTRY = 4;
KalturaFeatureStatusType.CATEGORY_USER = 5;
KalturaFeatureStatusType.USER = 6;

function KalturaFileSyncStatus(){
}
KalturaFileSyncStatus.ERROR = -1;
KalturaFileSyncStatus.PENDING = 1;
KalturaFileSyncStatus.READY = 2;
KalturaFileSyncStatus.DELETED = 3;
KalturaFileSyncStatus.PURGED = 4;

function KalturaFileSyncType(){
}
KalturaFileSyncType.FILE = 1;
KalturaFileSyncType.LINK = 2;
KalturaFileSyncType.URL = 3;

function KalturaFlavorAssetStatus(){
}
KalturaFlavorAssetStatus.ERROR = -1;
KalturaFlavorAssetStatus.QUEUED = 0;
KalturaFlavorAssetStatus.CONVERTING = 1;
KalturaFlavorAssetStatus.READY = 2;
KalturaFlavorAssetStatus.DELETED = 3;
KalturaFlavorAssetStatus.NOT_APPLICABLE = 4;
KalturaFlavorAssetStatus.TEMP = 5;
KalturaFlavorAssetStatus.WAIT_FOR_CONVERT = 6;
KalturaFlavorAssetStatus.IMPORTING = 7;
KalturaFlavorAssetStatus.VALIDATING = 8;
KalturaFlavorAssetStatus.EXPORTING = 9;

function KalturaFlavorReadyBehaviorType(){
}
KalturaFlavorReadyBehaviorType.NO_IMPACT = 0;
KalturaFlavorReadyBehaviorType.INHERIT_FLAVOR_PARAMS = 0;
KalturaFlavorReadyBehaviorType.REQUIRED = 1;
KalturaFlavorReadyBehaviorType.OPTIONAL = 2;

function KalturaGender(){
}
KalturaGender.UNKNOWN = 0;
KalturaGender.MALE = 1;
KalturaGender.FEMALE = 2;

function KalturaGenericDistributionProviderParser(){
}
KalturaGenericDistributionProviderParser.XSL = 1;
KalturaGenericDistributionProviderParser.XPATH = 2;
KalturaGenericDistributionProviderParser.REGEX = 3;

function KalturaGenericDistributionProviderStatus(){
}
KalturaGenericDistributionProviderStatus.ACTIVE = 2;
KalturaGenericDistributionProviderStatus.DELETED = 3;

function KalturaGroupProcessStatus(){
}
KalturaGroupProcessStatus.NONE = 0;
KalturaGroupProcessStatus.PROCESSING = 1;

function KalturaGroupUserCreationMode(){
}
KalturaGroupUserCreationMode.MANUAL = 1;
KalturaGroupUserCreationMode.AUTOMATIC = 2;

function KalturaGroupUserRole(){
}
KalturaGroupUserRole.MEMBER = 1;
KalturaGroupUserRole.MANAGER = 2;

function KalturaGroupUserStatus(){
}
KalturaGroupUserStatus.ACTIVE = 0;
KalturaGroupUserStatus.DELETED = 1;

function KalturaHandleParticipantsMode(){
}
KalturaHandleParticipantsMode.ADD_AS_CO_PUBLISHERS = 0;
KalturaHandleParticipantsMode.ADD_AS_CO_VIEWERS = 1;
KalturaHandleParticipantsMode.IGNORE = 2;
KalturaHandleParticipantsMode.ADD_AS_CO_EDITORS = 3;
KalturaHandleParticipantsMode.ADD_AS_CO_EDITORS_CO_PUBLISHERS = 4;

function KalturaHttpNotificationAuthenticationMethod(){
}
KalturaHttpNotificationAuthenticationMethod.ANYSAFE = -18;
KalturaHttpNotificationAuthenticationMethod.ANY = -17;
KalturaHttpNotificationAuthenticationMethod.BASIC = 1;
KalturaHttpNotificationAuthenticationMethod.DIGEST = 2;
KalturaHttpNotificationAuthenticationMethod.GSSNEGOTIATE = 4;
KalturaHttpNotificationAuthenticationMethod.NTLM = 8;

function KalturaHttpNotificationMethod(){
}
KalturaHttpNotificationMethod.GET = 1;
KalturaHttpNotificationMethod.POST = 2;
KalturaHttpNotificationMethod.PUT = 3;
KalturaHttpNotificationMethod.DELETE = 4;

function KalturaHttpNotificationSslVersion(){
}
KalturaHttpNotificationSslVersion.V2 = 2;
KalturaHttpNotificationSslVersion.V3 = 3;

function KalturaInheritanceType(){
}
KalturaInheritanceType.INHERIT = 1;
KalturaInheritanceType.MANUAL = 2;

function KalturaIpAddressRestrictionType(){
}
KalturaIpAddressRestrictionType.RESTRICT_LIST = 0;
KalturaIpAddressRestrictionType.ALLOW_LIST = 1;

function KalturaKafkaNotificationFormat(){
}
KalturaKafkaNotificationFormat.JSON = 1;
KalturaKafkaNotificationFormat.AVRO = 2;

function KalturaLicenseType(){
}
KalturaLicenseType.UNKNOWN = -1;
KalturaLicenseType.NONE = 0;
KalturaLicenseType.COPYRIGHTED = 1;
KalturaLicenseType.PUBLIC_DOMAIN = 2;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION = 3;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE = 4;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES = 5;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL = 6;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE = 7;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES = 8;
KalturaLicenseType.GFDL = 9;
KalturaLicenseType.GPL = 10;
KalturaLicenseType.AFFERO_GPL = 11;
KalturaLicenseType.LGPL = 12;
KalturaLicenseType.BSD = 13;
KalturaLicenseType.APACHE = 14;
KalturaLicenseType.MOZILLA = 15;

function KalturaLimitFlavorsRestrictionType(){
}
KalturaLimitFlavorsRestrictionType.RESTRICT_LIST = 0;
KalturaLimitFlavorsRestrictionType.ALLOW_LIST = 1;

function KalturaLivePublishStatus(){
}
KalturaLivePublishStatus.DISABLED = 0;
KalturaLivePublishStatus.ENABLED = 1;

function KalturaLiveReportExportType(){
}
KalturaLiveReportExportType.PARTNER_TOTAL_ALL = 1;
KalturaLiveReportExportType.PARTNER_TOTAL_LIVE = 2;
KalturaLiveReportExportType.ENTRY_TIME_LINE_ALL = 11;
KalturaLiveReportExportType.ENTRY_TIME_LINE_LIVE = 12;
KalturaLiveReportExportType.LOCATION_ALL = 21;
KalturaLiveReportExportType.LOCATION_LIVE = 22;
KalturaLiveReportExportType.SYNDICATION_ALL = 31;
KalturaLiveReportExportType.SYNDICATION_LIVE = 32;

function KalturaLiveStatsEventType(){
}
KalturaLiveStatsEventType.LIVE = 1;
KalturaLiveStatsEventType.DVR = 2;

function KalturaLiveStreamBroadcastStatus(){
}
KalturaLiveStreamBroadcastStatus.OFFLINE = 1;
KalturaLiveStreamBroadcastStatus.PREVIEW = 2;
KalturaLiveStreamBroadcastStatus.LIVE = 3;

function KalturaMailJobStatus(){
}
KalturaMailJobStatus.PENDING = 1;
KalturaMailJobStatus.SENT = 2;
KalturaMailJobStatus.ERROR = 3;
KalturaMailJobStatus.QUEUED = 4;

function KalturaMediaType(){
}
KalturaMediaType.VIDEO = 1;
KalturaMediaType.IMAGE = 2;
KalturaMediaType.AUDIO = 5;
KalturaMediaType.LIVE_STREAM_FLASH = 201;
KalturaMediaType.LIVE_STREAM_WINDOWS_MEDIA = 202;
KalturaMediaType.LIVE_STREAM_REAL_MEDIA = 203;
KalturaMediaType.LIVE_STREAM_QUICKTIME = 204;

function KalturaMetadataProfileCreateMode(){
}
KalturaMetadataProfileCreateMode.API = 1;
KalturaMetadataProfileCreateMode.KMC = 2;
KalturaMetadataProfileCreateMode.APP = 3;

function KalturaMetadataProfileStatus(){
}
KalturaMetadataProfileStatus.ACTIVE = 1;
KalturaMetadataProfileStatus.DEPRECATED = 2;
KalturaMetadataProfileStatus.TRANSFORMING = 3;

function KalturaMetadataStatus(){
}
KalturaMetadataStatus.VALID = 1;
KalturaMetadataStatus.INVALID = 2;
KalturaMetadataStatus.DELETED = 3;

function KalturaModerationFlagType(){
}
KalturaModerationFlagType.SEXUAL_CONTENT = 1;
KalturaModerationFlagType.VIOLENT_REPULSIVE = 2;
KalturaModerationFlagType.HARMFUL_DANGEROUS = 3;
KalturaModerationFlagType.SPAM_COMMERCIALS = 4;
KalturaModerationFlagType.COPYRIGHT = 5;
KalturaModerationFlagType.TERMS_OF_USE_VIOLATION = 6;

function KalturaMrssExtensionMode(){
}
KalturaMrssExtensionMode.APPEND = 1;
KalturaMrssExtensionMode.REPLACE = 2;

function KalturaNotificationObjectType(){
}
KalturaNotificationObjectType.ENTRY = 1;
KalturaNotificationObjectType.KSHOW = 2;
KalturaNotificationObjectType.USER = 3;
KalturaNotificationObjectType.BATCH_JOB = 4;

function KalturaNotificationStatus(){
}
KalturaNotificationStatus.PENDING = 1;
KalturaNotificationStatus.SENT = 2;
KalturaNotificationStatus.ERROR = 3;
KalturaNotificationStatus.SHOULD_RESEND = 4;
KalturaNotificationStatus.ERROR_RESENDING = 5;
KalturaNotificationStatus.SENT_SYNCH = 6;
KalturaNotificationStatus.QUEUED = 7;

function KalturaNotificationType(){
}
KalturaNotificationType.ENTRY_ADD = 1;
KalturaNotificationType.ENTR_UPDATE_PERMISSIONS = 2;
KalturaNotificationType.ENTRY_DELETE = 3;
KalturaNotificationType.ENTRY_BLOCK = 4;
KalturaNotificationType.ENTRY_UPDATE = 5;
KalturaNotificationType.ENTRY_UPDATE_THUMBNAIL = 6;
KalturaNotificationType.ENTRY_UPDATE_MODERATION = 7;
KalturaNotificationType.USER_ADD = 21;
KalturaNotificationType.USER_BANNED = 26;

function KalturaNullableBoolean(){
}
KalturaNullableBoolean.NULL_VALUE = -1;
KalturaNullableBoolean.FALSE_VALUE = 0;
KalturaNullableBoolean.TRUE_VALUE = 1;

function KalturaPartnerAuthenticationType(){
}
KalturaPartnerAuthenticationType.PASSWORD_ONLY = 0;
KalturaPartnerAuthenticationType.TWO_FACTOR_AUTH = 1;
KalturaPartnerAuthenticationType.SSO = 2;

function KalturaPartnerGroupType(){
}
KalturaPartnerGroupType.PUBLISHER = 1;
KalturaPartnerGroupType.VAR_GROUP = 2;
KalturaPartnerGroupType.GROUP = 3;
KalturaPartnerGroupType.TEMPLATE = 4;

function KalturaPartnerStatus(){
}
KalturaPartnerStatus.DELETED = 0;
KalturaPartnerStatus.ACTIVE = 1;
KalturaPartnerStatus.BLOCKED = 2;
KalturaPartnerStatus.FULL_BLOCK = 3;
KalturaPartnerStatus.READ_ONLY = 4;

function KalturaPartnerType(){
}
KalturaPartnerType.KMC = 1;
KalturaPartnerType.WIKI = 100;
KalturaPartnerType.WORDPRESS = 101;
KalturaPartnerType.DRUPAL = 102;
KalturaPartnerType.DEKIWIKI = 103;
KalturaPartnerType.MOODLE = 104;
KalturaPartnerType.COMMUNITY_EDITION = 105;
KalturaPartnerType.JOOMLA = 106;
KalturaPartnerType.BLACKBOARD = 107;
KalturaPartnerType.SAKAI = 108;
KalturaPartnerType.ADMIN_CONSOLE = 109;

function KalturaPermissionStatus(){
}
KalturaPermissionStatus.ACTIVE = 1;
KalturaPermissionStatus.BLOCKED = 2;
KalturaPermissionStatus.DELETED = 3;

function KalturaPermissionType(){
}
KalturaPermissionType.NORMAL = 1;
KalturaPermissionType.SPECIAL_FEATURE = 2;
KalturaPermissionType.PLUGIN = 3;
KalturaPermissionType.PARTNER_GROUP = 4;

function KalturaPlayReadyAnalogVideoOPL(){
}
KalturaPlayReadyAnalogVideoOPL.MIN_100 = 100;
KalturaPlayReadyAnalogVideoOPL.MIN_150 = 150;
KalturaPlayReadyAnalogVideoOPL.MIN_200 = 200;

function KalturaPlayReadyCompressedDigitalVideoOPL(){
}
KalturaPlayReadyCompressedDigitalVideoOPL.MIN_400 = 400;
KalturaPlayReadyCompressedDigitalVideoOPL.MIN_500 = 500;

function KalturaPlayReadyDigitalAudioOPL(){
}
KalturaPlayReadyDigitalAudioOPL.MIN_100 = 100;
KalturaPlayReadyDigitalAudioOPL.MIN_150 = 150;
KalturaPlayReadyDigitalAudioOPL.MIN_200 = 200;
KalturaPlayReadyDigitalAudioOPL.MIN_250 = 250;
KalturaPlayReadyDigitalAudioOPL.MIN_300 = 300;

function KalturaPlayReadyLicenseRemovalPolicy(){
}
KalturaPlayReadyLicenseRemovalPolicy.FIXED_FROM_EXPIRATION = 1;
KalturaPlayReadyLicenseRemovalPolicy.ENTRY_SCHEDULING_END = 2;
KalturaPlayReadyLicenseRemovalPolicy.NONE = 3;

function KalturaPlayReadyMinimumLicenseSecurityLevel(){
}
KalturaPlayReadyMinimumLicenseSecurityLevel.NON_COMMERCIAL_QUALITY = 150;
KalturaPlayReadyMinimumLicenseSecurityLevel.COMMERCIAL_QUALITY = 2000;

function KalturaPlayReadyUncompressedDigitalVideoOPL(){
}
KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_100 = 100;
KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_250 = 250;
KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_270 = 270;
KalturaPlayReadyUncompressedDigitalVideoOPL.MIN_300 = 300;

function KalturaPlaylistType(){
}
KalturaPlaylistType.STATIC_LIST = 3;
KalturaPlaylistType.DYNAMIC = 10;
KalturaPlaylistType.EXTERNAL = 101;
KalturaPlaylistType.PATH = 102;

function KalturaPrivacyType(){
}
KalturaPrivacyType.ALL = 1;
KalturaPrivacyType.AUTHENTICATED_USERS = 2;
KalturaPrivacyType.MEMBERS_ONLY = 3;

function KalturaQuestionType(){
}
KalturaQuestionType.MULTIPLE_CHOICE_ANSWER = 1;
KalturaQuestionType.TRUE_FALSE = 2;
KalturaQuestionType.REFLECTION_POINT = 3;
KalturaQuestionType.MULTIPLE_ANSWER_QUESTION = 4;
KalturaQuestionType.FILL_IN_BLANK = 5;
KalturaQuestionType.HOT_SPOT = 6;
KalturaQuestionType.GO_TO = 7;
KalturaQuestionType.OPEN_QUESTION = 8;

function KalturaQuizOutputType(){
}
KalturaQuizOutputType.PDF = 1;

function KalturaReachProfileContentDeletionPolicy(){
}
KalturaReachProfileContentDeletionPolicy.DO_NOTHING = 1;
KalturaReachProfileContentDeletionPolicy.DELETE_ONCE_PROCESSED = 2;
KalturaReachProfileContentDeletionPolicy.DELETE_AFTER_WEEK = 3;
KalturaReachProfileContentDeletionPolicy.DELETE_AFTER_MONTH = 4;
KalturaReachProfileContentDeletionPolicy.DELETE_AFTER_THREE_MONTHS = 5;

function KalturaReachProfileStatus(){
}
KalturaReachProfileStatus.DISABLED = 1;
KalturaReachProfileStatus.ACTIVE = 2;
KalturaReachProfileStatus.DELETED = 3;

function KalturaReachProfileType(){
}
KalturaReachProfileType.FREE_TRIAL = 1;
KalturaReachProfileType.PAID = 2;

function KalturaRecordStatus(){
}
KalturaRecordStatus.DISABLED = 0;
KalturaRecordStatus.APPENDED = 1;
KalturaRecordStatus.PER_SESSION = 2;

function KalturaRecordingFileType(){
}
KalturaRecordingFileType.UNDEFINED = 0;
KalturaRecordingFileType.VIDEO = 1;
KalturaRecordingFileType.CHAT = 2;
KalturaRecordingFileType.TRANSCRIPT = 3;
KalturaRecordingFileType.AUDIO = 4;
KalturaRecordingFileType.CC = 5;

function KalturaRecordingStatus(){
}
KalturaRecordingStatus.STOPPED = 0;
KalturaRecordingStatus.PAUSED = 1;
KalturaRecordingStatus.ACTIVE = 2;
KalturaRecordingStatus.DISABLED = 3;

function KalturaRecordingType(){
}
KalturaRecordingType.MEETING = 0;
KalturaRecordingType.WEBINAR = 1;

function KalturaReportExportItemType(){
}
KalturaReportExportItemType.TABLE = 1;
KalturaReportExportItemType.TOTAL = 2;
KalturaReportExportItemType.GRAPH = 3;

function KalturaResponseProfileStatus(){
}
KalturaResponseProfileStatus.DISABLED = 1;
KalturaResponseProfileStatus.ENABLED = 2;
KalturaResponseProfileStatus.DELETED = 3;

function KalturaResponseProfileType(){
}
KalturaResponseProfileType.INCLUDE_FIELDS = 1;
KalturaResponseProfileType.EXCLUDE_FIELDS = 2;

function KalturaResponseType(){
}
KalturaResponseType.RESPONSE_TYPE_JSON = 1;
KalturaResponseType.RESPONSE_TYPE_XML = 2;
KalturaResponseType.RESPONSE_TYPE_PHP = 3;
KalturaResponseType.RESPONSE_TYPE_PHP_ARRAY = 4;
KalturaResponseType.RESPONSE_TYPE_HTML = 7;
KalturaResponseType.RESPONSE_TYPE_MRSS = 8;
KalturaResponseType.RESPONSE_TYPE_JSONP = 9;

function KalturaRoomType(){
}
KalturaRoomType.ROOM = 1;
KalturaRoomType.BREAKOUT = 2;

function KalturaScheduleEventClassificationType(){
}
KalturaScheduleEventClassificationType.PUBLIC_EVENT = 1;
KalturaScheduleEventClassificationType.PRIVATE_EVENT = 2;
KalturaScheduleEventClassificationType.CONFIDENTIAL_EVENT = 3;

function KalturaScheduleEventConflictType(){
}
KalturaScheduleEventConflictType.RESOURCE_CONFLICT = 1;
KalturaScheduleEventConflictType.BLACKOUT_CONFLICT = 2;
KalturaScheduleEventConflictType.BOTH = 3;

function KalturaScheduleEventRecurrenceType(){
}
KalturaScheduleEventRecurrenceType.NONE = 0;
KalturaScheduleEventRecurrenceType.RECURRING = 1;
KalturaScheduleEventRecurrenceType.RECURRENCE = 2;

function KalturaScheduleEventStatus(){
}
KalturaScheduleEventStatus.CANCELLED = 1;
KalturaScheduleEventStatus.ACTIVE = 2;
KalturaScheduleEventStatus.DELETED = 3;

function KalturaScheduleEventType(){
}
KalturaScheduleEventType.RECORD = 1;
KalturaScheduleEventType.LIVE_STREAM = 2;
KalturaScheduleEventType.BLACKOUT = 3;
KalturaScheduleEventType.MEETING = 4;
KalturaScheduleEventType.LIVE_REDIRECT = 5;
KalturaScheduleEventType.VOD = 6;

function KalturaScheduleResourceStatus(){
}
KalturaScheduleResourceStatus.DISABLED = 1;
KalturaScheduleResourceStatus.ACTIVE = 2;
KalturaScheduleResourceStatus.DELETED = 3;

function KalturaScheduledTaskAddOrRemoveType(){
}
KalturaScheduledTaskAddOrRemoveType.ADD = 1;
KalturaScheduledTaskAddOrRemoveType.REMOVE = 2;
KalturaScheduledTaskAddOrRemoveType.MOVE = 3;

function KalturaScheduledTaskProfileStatus(){
}
KalturaScheduledTaskProfileStatus.DISABLED = 1;
KalturaScheduledTaskProfileStatus.ACTIVE = 2;
KalturaScheduledTaskProfileStatus.DELETED = 3;
KalturaScheduledTaskProfileStatus.SUSPENDED = 4;
KalturaScheduledTaskProfileStatus.DRY_RUN_ONLY = 5;

function KalturaSchedulerStatusType(){
}
KalturaSchedulerStatusType.RUNNING_BATCHES_COUNT = 1;
KalturaSchedulerStatusType.RUNNING_BATCHES_CPU = 2;
KalturaSchedulerStatusType.RUNNING_BATCHES_MEMORY = 3;
KalturaSchedulerStatusType.RUNNING_BATCHES_NETWORK = 4;
KalturaSchedulerStatusType.RUNNING_BATCHES_DISC_IO = 5;
KalturaSchedulerStatusType.RUNNING_BATCHES_DISC_SPACE = 6;
KalturaSchedulerStatusType.RUNNING_BATCHES_IS_RUNNING = 7;
KalturaSchedulerStatusType.RUNNING_BATCHES_LAST_EXECUTION_TIME = 8;

function KalturaScoreType(){
}
KalturaScoreType.HIGHEST = 1;
KalturaScoreType.LOWEST = 2;
KalturaScoreType.LATEST = 3;
KalturaScoreType.FIRST = 4;
KalturaScoreType.AVERAGE = 5;

function KalturaSearchOperatorType(){
}
KalturaSearchOperatorType.SEARCH_AND = 1;
KalturaSearchOperatorType.SEARCH_OR = 2;

function KalturaSearchProviderType(){
}
KalturaSearchProviderType.FLICKR = 3;
KalturaSearchProviderType.YOUTUBE = 4;
KalturaSearchProviderType.MYSPACE = 7;
KalturaSearchProviderType.PHOTOBUCKET = 8;
KalturaSearchProviderType.JAMENDO = 9;
KalturaSearchProviderType.CCMIXTER = 10;
KalturaSearchProviderType.NYPL = 11;
KalturaSearchProviderType.CURRENT = 12;
KalturaSearchProviderType.MEDIA_COMMONS = 13;
KalturaSearchProviderType.KALTURA = 20;
KalturaSearchProviderType.KALTURA_USER_CLIPS = 21;
KalturaSearchProviderType.ARCHIVE_ORG = 22;
KalturaSearchProviderType.KALTURA_PARTNER = 23;
KalturaSearchProviderType.METACAFE = 24;
KalturaSearchProviderType.SEARCH_PROXY = 28;
KalturaSearchProviderType.PARTNER_SPECIFIC = 100;

function KalturaServerNodeStatus(){
}
KalturaServerNodeStatus.ACTIVE = 1;
KalturaServerNodeStatus.DISABLED = 2;
KalturaServerNodeStatus.DELETED = 3;
KalturaServerNodeStatus.NOT_REGISTERED = 4;
KalturaServerNodeStatus.NOT_OPERATIONAL = 5;

function KalturaSessionType(){
}
KalturaSessionType.USER = 0;
KalturaSessionType.ADMIN = 2;

function KalturaShortLinkStatus(){
}
KalturaShortLinkStatus.DISABLED = 1;
KalturaShortLinkStatus.ENABLED = 2;
KalturaShortLinkStatus.DELETED = 3;

function KalturaSipSourceType(){
}
KalturaSipSourceType.PICTURE_IN_PICTURE = 1;
KalturaSipSourceType.TALKING_HEADS = 2;
KalturaSipSourceType.SCREEN_SHARE = 3;

function KalturaSiteRestrictionType(){
}
KalturaSiteRestrictionType.RESTRICT_SITE_LIST = 0;
KalturaSiteRestrictionType.ALLOW_SITE_LIST = 1;

function KalturaSsoStatus(){
}
KalturaSsoStatus.DISABLED = 1;
KalturaSsoStatus.ACTIVE = 2;
KalturaSsoStatus.DELETED = 3;

function KalturaStatsEventType(){
}
KalturaStatsEventType.WIDGET_LOADED = 1;
KalturaStatsEventType.MEDIA_LOADED = 2;
KalturaStatsEventType.PLAY = 3;
KalturaStatsEventType.PLAY_REACHED_25 = 4;
KalturaStatsEventType.PLAY_REACHED_50 = 5;
KalturaStatsEventType.PLAY_REACHED_75 = 6;
KalturaStatsEventType.PLAY_REACHED_100 = 7;
KalturaStatsEventType.OPEN_EDIT = 8;
KalturaStatsEventType.OPEN_VIRAL = 9;
KalturaStatsEventType.OPEN_DOWNLOAD = 10;
KalturaStatsEventType.OPEN_REPORT = 11;
KalturaStatsEventType.BUFFER_START = 12;
KalturaStatsEventType.BUFFER_END = 13;
KalturaStatsEventType.OPEN_FULL_SCREEN = 14;
KalturaStatsEventType.CLOSE_FULL_SCREEN = 15;
KalturaStatsEventType.REPLAY = 16;
KalturaStatsEventType.SEEK = 17;
KalturaStatsEventType.OPEN_UPLOAD = 18;
KalturaStatsEventType.SAVE_PUBLISH = 19;
KalturaStatsEventType.CLOSE_EDITOR = 20;
KalturaStatsEventType.PRE_BUMPER_PLAYED = 21;
KalturaStatsEventType.POST_BUMPER_PLAYED = 22;
KalturaStatsEventType.BUMPER_CLICKED = 23;
KalturaStatsEventType.PREROLL_STARTED = 24;
KalturaStatsEventType.MIDROLL_STARTED = 25;
KalturaStatsEventType.POSTROLL_STARTED = 26;
KalturaStatsEventType.OVERLAY_STARTED = 27;
KalturaStatsEventType.PREROLL_CLICKED = 28;
KalturaStatsEventType.MIDROLL_CLICKED = 29;
KalturaStatsEventType.POSTROLL_CLICKED = 30;
KalturaStatsEventType.OVERLAY_CLICKED = 31;
KalturaStatsEventType.PREROLL_25 = 32;
KalturaStatsEventType.PREROLL_50 = 33;
KalturaStatsEventType.PREROLL_75 = 34;
KalturaStatsEventType.MIDROLL_25 = 35;
KalturaStatsEventType.MIDROLL_50 = 36;
KalturaStatsEventType.MIDROLL_75 = 37;
KalturaStatsEventType.POSTROLL_25 = 38;
KalturaStatsEventType.POSTROLL_50 = 39;
KalturaStatsEventType.POSTROLL_75 = 40;

function KalturaStatsFeatureType(){
}
KalturaStatsFeatureType.NONE = 0;
KalturaStatsFeatureType.RELATED = 1;

function KalturaStatsKmcEventType(){
}
KalturaStatsKmcEventType.CONTENT_PAGE_VIEW = 1001;
KalturaStatsKmcEventType.CONTENT_ADD_PLAYLIST = 1010;
KalturaStatsKmcEventType.CONTENT_EDIT_PLAYLIST = 1011;
KalturaStatsKmcEventType.CONTENT_DELETE_PLAYLIST = 1012;
KalturaStatsKmcEventType.CONTENT_EDIT_ENTRY = 1013;
KalturaStatsKmcEventType.CONTENT_CHANGE_THUMBNAIL = 1014;
KalturaStatsKmcEventType.CONTENT_ADD_TAGS = 1015;
KalturaStatsKmcEventType.CONTENT_REMOVE_TAGS = 1016;
KalturaStatsKmcEventType.CONTENT_ADD_ADMIN_TAGS = 1017;
KalturaStatsKmcEventType.CONTENT_REMOVE_ADMIN_TAGS = 1018;
KalturaStatsKmcEventType.CONTENT_DOWNLOAD = 1019;
KalturaStatsKmcEventType.CONTENT_APPROVE_MODERATION = 1020;
KalturaStatsKmcEventType.CONTENT_REJECT_MODERATION = 1021;
KalturaStatsKmcEventType.CONTENT_BULK_UPLOAD = 1022;
KalturaStatsKmcEventType.CONTENT_ADMIN_KCW_UPLOAD = 1023;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_PARTNER_INFO = 1030;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_LOGIN_INFO = 1031;
KalturaStatsKmcEventType.ACCOUNT_CONTACT_US_USAGE = 1032;
KalturaStatsKmcEventType.ACCOUNT_UPDATE_SERVER_SETTINGS = 1033;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_OVERVIEW = 1034;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL = 1035;
KalturaStatsKmcEventType.ACCOUNT_TRANSCODING_SETTINGS = 1036;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_UPGRADE = 1037;
KalturaStatsKmcEventType.ACCOUNT_SAVE_SERVER_SETTINGS = 1038;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL_DELETE = 1039;
KalturaStatsKmcEventType.ACCOUNT_SAVE_TRANSCODING_SETTINGS = 1040;
KalturaStatsKmcEventType.LOGIN = 1041;
KalturaStatsKmcEventType.DASHBOARD_IMPORT_CONTENT = 1042;
KalturaStatsKmcEventType.DASHBOARD_UPDATE_CONTENT = 1043;
KalturaStatsKmcEventType.DASHBOARD_ACCOUNT_CONTACT_US = 1044;
KalturaStatsKmcEventType.DASHBOARD_VIEW_REPORTS = 1045;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYER = 1046;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYLIST = 1047;
KalturaStatsKmcEventType.DASHBOARD_CUSTOMIZE_PLAYERS = 1048;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO = 1050;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_PLAYLIST = 1051;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST = 1052;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO = 1053;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_PLAYLIST = 1054;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST = 1055;
KalturaStatsKmcEventType.APP_STUDIO_DUPLICATE_PLAYER = 1056;
KalturaStatsKmcEventType.CONTENT_CONTENT_GO_TO_PAGE = 1057;
KalturaStatsKmcEventType.CONTENT_DELETE_ITEM = 1058;
KalturaStatsKmcEventType.CONTENT_DELETE_MIX = 1059;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB = 1070;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB = 1071;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB = 1072;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS = 1073;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS = 1074;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS = 1075;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTENT = 1076;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DROPOFF = 1077;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS = 1078;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS = 1079;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN = 1080;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION = 1081;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN = 1082;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF = 1083;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN = 1084;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN = 1085;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY = 1086;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY = 1087;
KalturaStatsKmcEventType.CONTENT_ENTRY_DRILLDOWN = 1088;
KalturaStatsKmcEventType.CONTENT_OPEN_PREVIEW_AND_EMBED = 1089;

function KalturaStorageProfileDeliveryStatus(){
}
KalturaStorageProfileDeliveryStatus.ACTIVE = 1;
KalturaStorageProfileDeliveryStatus.BLOCKED = 2;

function KalturaStorageProfileReadyBehavior(){
}
KalturaStorageProfileReadyBehavior.NO_IMPACT = 0;
KalturaStorageProfileReadyBehavior.REQUIRED = 1;

function KalturaStorageProfileStatus(){
}
KalturaStorageProfileStatus.DISABLED = 1;
KalturaStorageProfileStatus.AUTOMATIC = 2;
KalturaStorageProfileStatus.MANUAL = 3;

function KalturaSyndicationFeedStatus(){
}
KalturaSyndicationFeedStatus.DELETED = -1;
KalturaSyndicationFeedStatus.ACTIVE = 1;

function KalturaSyndicationFeedType(){
}
KalturaSyndicationFeedType.GOOGLE_VIDEO = 1;
KalturaSyndicationFeedType.YAHOO = 2;
KalturaSyndicationFeedType.ITUNES = 3;
KalturaSyndicationFeedType.TUBE_MOGUL = 4;
KalturaSyndicationFeedType.KALTURA = 5;
KalturaSyndicationFeedType.KALTURA_XSLT = 6;
KalturaSyndicationFeedType.ROKU_DIRECT_PUBLISHER = 7;
KalturaSyndicationFeedType.OPERA_TV_SNAP = 8;

function KalturaThumbAssetStatus(){
}
KalturaThumbAssetStatus.ERROR = -1;
KalturaThumbAssetStatus.QUEUED = 0;
KalturaThumbAssetStatus.CAPTURING = 1;
KalturaThumbAssetStatus.READY = 2;
KalturaThumbAssetStatus.DELETED = 3;
KalturaThumbAssetStatus.IMPORTING = 7;
KalturaThumbAssetStatus.EXPORTING = 9;

function KalturaThumbCropType(){
}
KalturaThumbCropType.RESIZE = 1;
KalturaThumbCropType.RESIZE_WITH_PADDING = 2;
KalturaThumbCropType.CROP = 3;
KalturaThumbCropType.CROP_FROM_TOP = 4;
KalturaThumbCropType.RESIZE_WITH_FORCE = 5;

function KalturaThumbCuePointSubType(){
}
KalturaThumbCuePointSubType.SLIDE = 1;
KalturaThumbCuePointSubType.CHAPTER = 2;

function KalturaTvinciAssetsType(){
}
KalturaTvinciAssetsType.REGULAR = 1;
KalturaTvinciAssetsType.VIRTUAL = 2;

function KalturaTwoFactorAuthenticationMode(){
}
KalturaTwoFactorAuthenticationMode.ALL = 0;
KalturaTwoFactorAuthenticationMode.ADMIN_USERS_ONLY = 1;
KalturaTwoFactorAuthenticationMode.NON_ADMIN_USERS_ONLY = 2;

function KalturaUiConfCreationMode(){
}
KalturaUiConfCreationMode.WIZARD = 2;
KalturaUiConfCreationMode.ADVANCED = 3;
KalturaUiConfCreationMode.SYSTEM = 4;

function KalturaUiConfObjType(){
}
KalturaUiConfObjType.PLAYER = 1;
KalturaUiConfObjType.CONTRIBUTION_WIZARD = 2;
KalturaUiConfObjType.SIMPLE_EDITOR = 3;
KalturaUiConfObjType.ADVANCED_EDITOR = 4;
KalturaUiConfObjType.PLAYLIST = 5;
KalturaUiConfObjType.APP_STUDIO = 6;
KalturaUiConfObjType.KRECORD = 7;
KalturaUiConfObjType.PLAYER_V3 = 8;
KalturaUiConfObjType.KMC_ACCOUNT = 9;
KalturaUiConfObjType.KMC_ANALYTICS = 10;
KalturaUiConfObjType.KMC_CONTENT = 11;
KalturaUiConfObjType.KMC_DASHBOARD = 12;
KalturaUiConfObjType.KMC_LOGIN = 13;
KalturaUiConfObjType.PLAYER_SL = 14;
KalturaUiConfObjType.CLIENTSIDE_ENCODER = 15;
KalturaUiConfObjType.KMC_GENERAL = 16;
KalturaUiConfObjType.KMC_ROLES_AND_PERMISSIONS = 17;
KalturaUiConfObjType.CLIPPER = 18;
KalturaUiConfObjType.KSR = 19;
KalturaUiConfObjType.KUPLOAD = 20;
KalturaUiConfObjType.WEBCASTING = 21;
KalturaUiConfObjType.SAP = 22;
KalturaUiConfObjType.REELS = 23;

function KalturaUpdateMethodType(){
}
KalturaUpdateMethodType.MANUAL = 0;
KalturaUpdateMethodType.AUTOMATIC = 1;

function KalturaUploadErrorCode(){
}
KalturaUploadErrorCode.NO_ERROR = 0;
KalturaUploadErrorCode.GENERAL_ERROR = 1;
KalturaUploadErrorCode.PARTIAL_UPLOAD = 2;

function KalturaUploadTokenStatus(){
}
KalturaUploadTokenStatus.PENDING = 0;
KalturaUploadTokenStatus.PARTIAL_UPLOAD = 1;
KalturaUploadTokenStatus.FULL_UPLOAD = 2;
KalturaUploadTokenStatus.CLOSED = 3;
KalturaUploadTokenStatus.TIMED_OUT = 4;
KalturaUploadTokenStatus.DELETED = 5;

function KalturaUserAgentRestrictionType(){
}
KalturaUserAgentRestrictionType.RESTRICT_LIST = 0;
KalturaUserAgentRestrictionType.ALLOW_LIST = 1;

function KalturaUserEntryPermissionLevel(){
}
KalturaUserEntryPermissionLevel.SPEAKER = 1;
KalturaUserEntryPermissionLevel.ROOM_MODERATOR = 2;
KalturaUserEntryPermissionLevel.ATTENDEE = 3;
KalturaUserEntryPermissionLevel.ADMIN = 4;
KalturaUserEntryPermissionLevel.PREVIEW_ONLY = 5;
KalturaUserEntryPermissionLevel.CHAT_MODERATOR = 6;
KalturaUserEntryPermissionLevel.PANELIST = 7;

function KalturaUserJoinPolicyType(){
}
KalturaUserJoinPolicyType.AUTO_JOIN = 1;
KalturaUserJoinPolicyType.REQUEST_TO_JOIN = 2;
KalturaUserJoinPolicyType.NOT_ALLOWED = 3;

function KalturaUserMode(){
}
KalturaUserMode.NONE = 0;
KalturaUserMode.PROTECTED_USER = 1;

function KalturaUserRoleStatus(){
}
KalturaUserRoleStatus.ACTIVE = 1;
KalturaUserRoleStatus.BLOCKED = 2;
KalturaUserRoleStatus.DELETED = 3;

function KalturaUserStatus(){
}
KalturaUserStatus.BLOCKED = 0;
KalturaUserStatus.ACTIVE = 1;
KalturaUserStatus.DELETED = 2;

function KalturaUserType(){
}
KalturaUserType.USER = 0;
KalturaUserType.GROUP = 1;

function KalturaVendorCatalogItemOutputFormat(){
}
KalturaVendorCatalogItemOutputFormat.SRT = 1;
KalturaVendorCatalogItemOutputFormat.DFXP = 2;
KalturaVendorCatalogItemOutputFormat.VTT = 3;

function KalturaVendorCatalogItemStage(){
}
KalturaVendorCatalogItemStage.PRODUCTION = 1;
KalturaVendorCatalogItemStage.QA = 2;

function KalturaVendorCatalogItemStatus(){
}
KalturaVendorCatalogItemStatus.DEPRECATED = 1;
KalturaVendorCatalogItemStatus.ACTIVE = 2;
KalturaVendorCatalogItemStatus.DELETED = 3;

function KalturaVendorIntegrationStatus(){
}
KalturaVendorIntegrationStatus.DISABLED = 1;
KalturaVendorIntegrationStatus.ACTIVE = 2;
KalturaVendorIntegrationStatus.DELETED = 3;

function KalturaVendorServiceFeature(){
}
KalturaVendorServiceFeature.CAPTIONS = 1;
KalturaVendorServiceFeature.TRANSLATION = 2;
KalturaVendorServiceFeature.ALIGNMENT = 3;
KalturaVendorServiceFeature.AUDIO_DESCRIPTION = 4;
KalturaVendorServiceFeature.CHAPTERING = 5;
KalturaVendorServiceFeature.INTELLIGENT_TAGGING = 6;
KalturaVendorServiceFeature.DUBBING = 7;
KalturaVendorServiceFeature.LIVE_CAPTION = 8;
KalturaVendorServiceFeature.EXTENDED_AUDIO_DESCRIPTION = 9;
KalturaVendorServiceFeature.CLIPS = 10;
KalturaVendorServiceFeature.LIVE_TRANSLATION = 11;
KalturaVendorServiceFeature.QUIZ = 12;
KalturaVendorServiceFeature.SUMMARY = 13;
KalturaVendorServiceFeature.VIDEO_ANALYSIS = 14;

function KalturaVendorServiceTurnAroundTime(){
}
KalturaVendorServiceTurnAroundTime.BEST_EFFORT = -1;
KalturaVendorServiceTurnAroundTime.IMMEDIATE = 0;
KalturaVendorServiceTurnAroundTime.ONE_BUSINESS_DAY = 1;
KalturaVendorServiceTurnAroundTime.TWO_BUSINESS_DAYS = 2;
KalturaVendorServiceTurnAroundTime.THREE_BUSINESS_DAYS = 3;
KalturaVendorServiceTurnAroundTime.FOUR_BUSINESS_DAYS = 4;
KalturaVendorServiceTurnAroundTime.FIVE_BUSINESS_DAYS = 5;
KalturaVendorServiceTurnAroundTime.SIX_BUSINESS_DAYS = 6;
KalturaVendorServiceTurnAroundTime.SEVEN_BUSINESS_DAYS = 7;
KalturaVendorServiceTurnAroundTime.THIRTY_MINUTES = 1800;
KalturaVendorServiceTurnAroundTime.TWO_HOURS = 7200;
KalturaVendorServiceTurnAroundTime.THREE_HOURS = 10800;
KalturaVendorServiceTurnAroundTime.SIX_HOURS = 21600;
KalturaVendorServiceTurnAroundTime.EIGHT_HOURS = 28800;
KalturaVendorServiceTurnAroundTime.TWELVE_HOURS = 43200;
KalturaVendorServiceTurnAroundTime.TWENTY_FOUR_HOURS = 86400;
KalturaVendorServiceTurnAroundTime.FORTY_EIGHT_HOURS = 172800;
KalturaVendorServiceTurnAroundTime.FOUR_DAYS = 345600;
KalturaVendorServiceTurnAroundTime.FIVE_DAYS = 432000;
KalturaVendorServiceTurnAroundTime.TEN_DAYS = 864000;

function KalturaVendorServiceType(){
}
KalturaVendorServiceType.HUMAN = 1;
KalturaVendorServiceType.MACHINE = 2;

function KalturaVendorTaskProcessingRegion(){
}
KalturaVendorTaskProcessingRegion.US = 1;
KalturaVendorTaskProcessingRegion.EU = 2;
KalturaVendorTaskProcessingRegion.CA = 3;

function KalturaVendorVideoAnalysisType(){
}
KalturaVendorVideoAnalysisType.OCR = 1;

function KalturaViewMode(){
}
KalturaViewMode.PREVIEW = 0;
KalturaViewMode.ALLOW_ALL = 1;

function KalturaVirtualEventStatus(){
}
KalturaVirtualEventStatus.ACTIVE = 2;
KalturaVirtualEventStatus.DELETED = 3;

function KalturaVirtualScheduleEventSubType(){
}
KalturaVirtualScheduleEventSubType.AGENDA = 1;
KalturaVirtualScheduleEventSubType.REGISTRATION = 2;
KalturaVirtualScheduleEventSubType.MAIN_EVENT = 3;

function KalturaVirusFoundAction(){
}
KalturaVirusFoundAction.NONE = 0;
KalturaVirusFoundAction.DELETE = 1;
KalturaVirusFoundAction.CLEAN_NONE = 2;
KalturaVirusFoundAction.CLEAN_DELETE = 3;

function KalturaVirusScanJobResult(){
}
KalturaVirusScanJobResult.SCAN_ERROR = 1;
KalturaVirusScanJobResult.FILE_IS_CLEAN = 2;
KalturaVirusScanJobResult.FILE_WAS_CLEANED = 3;
KalturaVirusScanJobResult.FILE_INFECTED = 4;

function KalturaVirusScanProfileStatus(){
}
KalturaVirusScanProfileStatus.DISABLED = 1;
KalturaVirusScanProfileStatus.ENABLED = 2;
KalturaVirusScanProfileStatus.DELETED = 3;

function KalturaWebexAPIGroupParticipationType(){
}
KalturaWebexAPIGroupParticipationType.NO_CLASSIFICATION = 0;
KalturaWebexAPIGroupParticipationType.OPT_IN = 1;
KalturaWebexAPIGroupParticipationType.OPT_OUT = 2;

function KalturaWebexAPIUsersMatching(){
}
KalturaWebexAPIUsersMatching.DO_NOT_MODIFY = 0;
KalturaWebexAPIUsersMatching.ADD_POSTFIX = 1;
KalturaWebexAPIUsersMatching.REMOVE_POSTFIX = 2;

function KalturaWidevineRepositorySyncMode(){
}
KalturaWidevineRepositorySyncMode.MODIFY = 0;

function KalturaWidgetSecurityType(){
}
KalturaWidgetSecurityType.NONE = 1;
KalturaWidgetSecurityType.TIMEHASH = 2;

function KalturaYahooDistributionProcessFeedActionStatus(){
}
KalturaYahooDistributionProcessFeedActionStatus.MANUAL = 0;
KalturaYahooDistributionProcessFeedActionStatus.AUTOMATIC = 1;

function KalturaYouTubeApiDistributionCaptionAction(){
}
KalturaYouTubeApiDistributionCaptionAction.UPDATE_ACTION = 1;
KalturaYouTubeApiDistributionCaptionAction.SUBMIT_ACTION = 2;
KalturaYouTubeApiDistributionCaptionAction.DELETE_ACTION = 3;

function KalturaZoomGroupParticipationType(){
}
KalturaZoomGroupParticipationType.NO_CLASSIFICATION = 0;
KalturaZoomGroupParticipationType.OPT_IN = 1;
KalturaZoomGroupParticipationType.OPT_OUT = 2;

function KalturaZoomUsersMatching(){
}
KalturaZoomUsersMatching.DO_NOT_MODIFY = 0;
KalturaZoomUsersMatching.ADD_POSTFIX = 1;
KalturaZoomUsersMatching.REMOVE_POSTFIX = 2;
KalturaZoomUsersMatching.CMS_MATCHING = 3;

function KalturaAccessControlOrderBy(){
}
KalturaAccessControlOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAccessControlOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaAccessControlProfileOrderBy(){
}
KalturaAccessControlProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAccessControlProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAccessControlProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAccessControlProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaActivitiBusinessProcessServerOrderBy(){
}
KalturaActivitiBusinessProcessServerOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaActivitiBusinessProcessServerOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaActivitiBusinessProcessServerOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaActivitiBusinessProcessServerOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaActivitiBusinessProcessServerProtocol(){
}
KalturaActivitiBusinessProcessServerProtocol.HTTP = "http";
KalturaActivitiBusinessProcessServerProtocol.HTTPS = "https";

function KalturaAdCuePointOrderBy(){
}
KalturaAdCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAdCuePointOrderBy.DURATION_ASC = "+duration";
KalturaAdCuePointOrderBy.END_TIME_ASC = "+endTime";
KalturaAdCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaAdCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaAdCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaAdCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAdCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAdCuePointOrderBy.DURATION_DESC = "-duration";
KalturaAdCuePointOrderBy.END_TIME_DESC = "-endTime";
KalturaAdCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaAdCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaAdCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaAdCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAdProtocolType(){
}
KalturaAdProtocolType.CUSTOM = "0";
KalturaAdProtocolType.VAST = "1";
KalturaAdProtocolType.VAST_2_0 = "2";
KalturaAdProtocolType.VPAID = "3";

function KalturaAdType(){
}
KalturaAdType.VIDEO = "1";
KalturaAdType.OVERLAY = "2";

function KalturaAdminUserOrderBy(){
}
KalturaAdminUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAdminUserOrderBy.ID_ASC = "+id";
KalturaAdminUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAdminUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAdminUserOrderBy.ID_DESC = "-id";
KalturaAdminUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAkamaiUniversalStreamType(){
}
KalturaAkamaiUniversalStreamType.HD_IPHONE_IPAD_LIVE = "HD iPhone/iPad Live";
KalturaAkamaiUniversalStreamType.UNIVERSAL_STREAMING_LIVE = "Universal Streaming Live";

function KalturaAmazonS3StorageProfileFilesPermissionLevel(){
}
KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_AUTHENTICATED_READ = "authenticated-read";
KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PRIVATE = "private";
KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PUBLIC_READ = "public-read";
KalturaAmazonS3StorageProfileFilesPermissionLevel.ACL_PUBLIC_READ_WRITE = "public-read-write";

function KalturaAmazonS3StorageProfileOrderBy(){
}
KalturaAmazonS3StorageProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAmazonS3StorageProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAmazonS3StorageProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAmazonS3StorageProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAnnotationOrderBy(){
}
KalturaAnnotationOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAnnotationOrderBy.DURATION_ASC = "+duration";
KalturaAnnotationOrderBy.END_TIME_ASC = "+endTime";
KalturaAnnotationOrderBy.INT_ID_ASC = "+intId";
KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaAnnotationOrderBy.START_TIME_ASC = "+startTime";
KalturaAnnotationOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaAnnotationOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAnnotationOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAnnotationOrderBy.DURATION_DESC = "-duration";
KalturaAnnotationOrderBy.END_TIME_DESC = "-endTime";
KalturaAnnotationOrderBy.INT_ID_DESC = "-intId";
KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaAnnotationOrderBy.START_TIME_DESC = "-startTime";
KalturaAnnotationOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaAnnotationOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAnswerCuePointOrderBy(){
}
KalturaAnswerCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAnswerCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaAnswerCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaAnswerCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaAnswerCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaAnswerCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAnswerCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAnswerCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaAnswerCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaAnswerCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaAnswerCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaAnswerCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaApiActionPermissionItemOrderBy(){
}
KalturaApiActionPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiActionPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiActionPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiActionPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaApiParameterPermissionItemAction(){
}
KalturaApiParameterPermissionItemAction.USAGE = "all";
KalturaApiParameterPermissionItemAction.INSERT = "insert";
KalturaApiParameterPermissionItemAction.READ = "read";
KalturaApiParameterPermissionItemAction.UPDATE = "update";

function KalturaApiParameterPermissionItemOrderBy(){
}
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiParameterPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiParameterPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAppTokenHashType(){
}
KalturaAppTokenHashType.MD5 = "MD5";
KalturaAppTokenHashType.SHA1 = "SHA1";
KalturaAppTokenHashType.SHA256 = "SHA256";
KalturaAppTokenHashType.SHA512 = "SHA512";

function KalturaAppTokenOrderBy(){
}
KalturaAppTokenOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAppTokenOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAppTokenOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAppTokenOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAssetOrderBy(){
}
KalturaAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaAssetOrderBy.SIZE_ASC = "+size";
KalturaAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaAssetOrderBy.SIZE_DESC = "-size";
KalturaAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAssetParamsOrderBy(){
}

function KalturaAssetParamsOutputOrderBy(){
}

function KalturaAssetType(){
}
KalturaAssetType.ATTACHMENT = "attachment.Attachment";
KalturaAssetType.CAPTION = "caption.Caption";
KalturaAssetType.DOCUMENT = "document.Document";
KalturaAssetType.IMAGE = "document.Image";
KalturaAssetType.PDF = "document.PDF";
KalturaAssetType.SWF = "document.SWF";
KalturaAssetType.TIMED_THUMB_ASSET = "thumbCuePoint.timedThumb";
KalturaAssetType.TRANSCRIPT = "transcript.Transcript";
KalturaAssetType.WIDEVINE_FLAVOR = "widevine.WidevineFlavor";
KalturaAssetType.FLAVOR = "1";
KalturaAssetType.THUMBNAIL = "2";
KalturaAssetType.LIVE = "3";

function KalturaAttUverseDistributionProfileOrderBy(){
}
KalturaAttUverseDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAttUverseDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAttUverseDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAttUverseDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAttUverseDistributionProviderOrderBy(){
}

function KalturaAttachmentAssetOrderBy(){
}
KalturaAttachmentAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAttachmentAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaAttachmentAssetOrderBy.SIZE_ASC = "+size";
KalturaAttachmentAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAttachmentAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAttachmentAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaAttachmentAssetOrderBy.SIZE_DESC = "-size";
KalturaAttachmentAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAttachmentType(){
}
KalturaAttachmentType.TEXT = "1";
KalturaAttachmentType.MEDIA = "2";
KalturaAttachmentType.DOCUMENT = "3";
KalturaAttachmentType.JSON = "4";

function KalturaAudioCodec(){
}
KalturaAudioCodec.NONE = "";
KalturaAudioCodec.AAC = "aac";
KalturaAudioCodec.AACHE = "aache";
KalturaAudioCodec.AC3 = "ac3";
KalturaAudioCodec.AMRNB = "amrnb";
KalturaAudioCodec.COPY = "copy";
KalturaAudioCodec.EAC3 = "eac3";
KalturaAudioCodec.MP3 = "mp3";
KalturaAudioCodec.MPEG2 = "mpeg2";
KalturaAudioCodec.PCM = "pcm";
KalturaAudioCodec.VORBIS = "vorbis";
KalturaAudioCodec.WMA = "wma";
KalturaAudioCodec.WMAPRO = "wmapro";

function KalturaAuditTrailAction(){
}
KalturaAuditTrailAction.CHANGED = "CHANGED";
KalturaAuditTrailAction.CONTENT_VIEWED = "CONTENT_VIEWED";
KalturaAuditTrailAction.COPIED = "COPIED";
KalturaAuditTrailAction.CREATED = "CREATED";
KalturaAuditTrailAction.DELETED = "DELETED";
KalturaAuditTrailAction.FILE_SYNC_CREATED = "FILE_SYNC_CREATED";
KalturaAuditTrailAction.RELATION_ADDED = "RELATION_ADDED";
KalturaAuditTrailAction.RELATION_REMOVED = "RELATION_REMOVED";
KalturaAuditTrailAction.VIEWED = "VIEWED";

function KalturaAuditTrailObjectType(){
}
KalturaAuditTrailObjectType.BATCH_JOB = "BatchJob";
KalturaAuditTrailObjectType.EMAIL_INGESTION_PROFILE = "EmailIngestionProfile";
KalturaAuditTrailObjectType.FILE_SYNC = "FileSync";
KalturaAuditTrailObjectType.KSHOW_KUSER = "KshowKuser";
KalturaAuditTrailObjectType.METADATA = "Metadata";
KalturaAuditTrailObjectType.METADATA_PROFILE = "MetadataProfile";
KalturaAuditTrailObjectType.PARTNER = "Partner";
KalturaAuditTrailObjectType.PERMISSION = "Permission";
KalturaAuditTrailObjectType.REACH_PROFILE = "ReachProfile";
KalturaAuditTrailObjectType.UPLOAD_TOKEN = "UploadToken";
KalturaAuditTrailObjectType.USER_LOGIN_DATA = "UserLoginData";
KalturaAuditTrailObjectType.USER_ROLE = "UserRole";
KalturaAuditTrailObjectType.ACCESS_CONTROL = "accessControl";
KalturaAuditTrailObjectType.CATEGORY = "category";
KalturaAuditTrailObjectType.CATEGORY_ENTRY = "categoryEntry";
KalturaAuditTrailObjectType.CONVERSION_PROFILE_2 = "conversionProfile2";
KalturaAuditTrailObjectType.ENTRY = "entry";
KalturaAuditTrailObjectType.FLAVOR_ASSET = "flavorAsset";
KalturaAuditTrailObjectType.FLAVOR_PARAMS = "flavorParams";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_CONVERSION_PROFILE = "flavorParamsConversionProfile";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_OUTPUT = "flavorParamsOutput";
KalturaAuditTrailObjectType.KSHOW = "kshow";
KalturaAuditTrailObjectType.KUSER = "kuser";
KalturaAuditTrailObjectType.MEDIA_INFO = "mediaInfo";
KalturaAuditTrailObjectType.MODERATION = "moderation";
KalturaAuditTrailObjectType.ROUGHCUT = "roughcutEntry";
KalturaAuditTrailObjectType.SYNDICATION = "syndicationFeed";
KalturaAuditTrailObjectType.THUMBNAIL_ASSET = "thumbAsset";
KalturaAuditTrailObjectType.THUMBNAIL_PARAMS = "thumbParams";
KalturaAuditTrailObjectType.THUMBNAIL_PARAMS_OUTPUT = "thumbParamsOutput";
KalturaAuditTrailObjectType.UI_CONF = "uiConf";
KalturaAuditTrailObjectType.WIDGET = "widget";

function KalturaAuditTrailOrderBy(){
}
KalturaAuditTrailOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAuditTrailOrderBy.PARSED_AT_ASC = "+parsedAt";
KalturaAuditTrailOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAuditTrailOrderBy.PARSED_AT_DESC = "-parsedAt";

function KalturaAvnDistributionProfileOrderBy(){
}
KalturaAvnDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAvnDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAvnDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAvnDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAvnDistributionProviderOrderBy(){
}

function KalturaBaseEntryCloneOptions(){
}
KalturaBaseEntryCloneOptions.AD_CUE_POINTS = "adCuePoint.AD_CUE_POINTS";
KalturaBaseEntryCloneOptions.ANNOTATION_CUE_POINTS = "annotation.ANNOTATION_CUE_POINTS";
KalturaBaseEntryCloneOptions.CODE_CUE_POINTS = "codeCuePoint.CODE_CUE_POINTS";
KalturaBaseEntryCloneOptions.SESSION_CUE_POINTS = "sessionCuePoint.SESSION_CUE_POINTS";
KalturaBaseEntryCloneOptions.THUMB_CUE_POINTS = "thumbCuePoint.THUMB_CUE_POINTS";
KalturaBaseEntryCloneOptions.USERS = "1";
KalturaBaseEntryCloneOptions.CATEGORIES = "2";
KalturaBaseEntryCloneOptions.CHILD_ENTRIES = "3";
KalturaBaseEntryCloneOptions.ACCESS_CONTROL = "4";
KalturaBaseEntryCloneOptions.METADATA = "5";
KalturaBaseEntryCloneOptions.FLAVORS = "6";
KalturaBaseEntryCloneOptions.CAPTIONS = "7";

function KalturaBaseEntryCompareAttribute(){
}
KalturaBaseEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaBaseEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaBaseEntryCompareAttribute.END_DATE = "endDate";
KalturaBaseEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaBaseEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaBaseEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaBaseEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaBaseEntryCompareAttribute.RANK = "rank";
KalturaBaseEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaBaseEntryCompareAttribute.START_DATE = "startDate";
KalturaBaseEntryCompareAttribute.STATUS = "status";
KalturaBaseEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaBaseEntryCompareAttribute.TYPE = "type";
KalturaBaseEntryCompareAttribute.UPDATED_AT = "updatedAt";

function KalturaBaseEntryMatchAttribute(){
}
KalturaBaseEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaBaseEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaBaseEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaBaseEntryMatchAttribute.DESCRIPTION = "description";
KalturaBaseEntryMatchAttribute.GROUP_ID = "groupId";
KalturaBaseEntryMatchAttribute.ID = "id";
KalturaBaseEntryMatchAttribute.NAME = "name";
KalturaBaseEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaBaseEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaBaseEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaBaseEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaBaseEntryMatchAttribute.TAGS = "tags";
KalturaBaseEntryMatchAttribute.USER_ID = "userId";

function KalturaBaseEntryOrderBy(){
}
KalturaBaseEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaBaseEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaBaseEntryOrderBy.NAME_ASC = "+name";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaBaseEntryOrderBy.RANK_ASC = "+rank";
KalturaBaseEntryOrderBy.RECENT_ASC = "+recent";
KalturaBaseEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaBaseEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaBaseEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaBaseEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaBaseEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaBaseEntryOrderBy.NAME_DESC = "-name";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaBaseEntryOrderBy.RANK_DESC = "-rank";
KalturaBaseEntryOrderBy.RECENT_DESC = "-recent";
KalturaBaseEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaBaseEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaBaseEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBaseEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaBaseSyndicationFeedOrderBy(){
}
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaBaseSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaBaseSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBaseUserOrderBy(){
}
KalturaBaseUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseUserOrderBy.ID_ASC = "+id";
KalturaBaseUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseUserOrderBy.ID_DESC = "-id";
KalturaBaseUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBatchJobObjectType(){
}
KalturaBatchJobObjectType.ENTRY_DISTRIBUTION = "contentDistribution.EntryDistribution";
KalturaBatchJobObjectType.DROP_FOLDER_FILE = "dropFolderXmlBulkUpload.DropFolderFile";
KalturaBatchJobObjectType.METADATA = "metadata.Metadata";
KalturaBatchJobObjectType.METADATA_PROFILE = "metadata.MetadataProfile";
KalturaBatchJobObjectType.SCHEDULED_TASK_PROFILE = "scheduledTask.ScheduledTaskProfile";
KalturaBatchJobObjectType.ENTRY = "1";
KalturaBatchJobObjectType.CATEGORY = "2";
KalturaBatchJobObjectType.FILE_SYNC = "3";
KalturaBatchJobObjectType.ASSET = "4";
KalturaBatchJobObjectType.USER = "5";

function KalturaBatchJobOrderBy(){
}
KalturaBatchJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBatchJobOrderBy.ESTIMATED_EFFORT_ASC = "+estimatedEffort";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaBatchJobOrderBy.FINISH_TIME_ASC = "+finishTime";
KalturaBatchJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaBatchJobOrderBy.PRIORITY_ASC = "+priority";
KalturaBatchJobOrderBy.QUEUE_TIME_ASC = "+queueTime";
KalturaBatchJobOrderBy.STATUS_ASC = "+status";
KalturaBatchJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBatchJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBatchJobOrderBy.ESTIMATED_EFFORT_DESC = "-estimatedEffort";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaBatchJobOrderBy.FINISH_TIME_DESC = "-finishTime";
KalturaBatchJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";
KalturaBatchJobOrderBy.PRIORITY_DESC = "-priority";
KalturaBatchJobOrderBy.QUEUE_TIME_DESC = "-queueTime";
KalturaBatchJobOrderBy.STATUS_DESC = "-status";
KalturaBatchJobOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBatchJobType(){
}
KalturaBatchJobType.CONVERT = "0";
KalturaBatchJobType.REACH_INTERNAL_QUEUE_HANDLER = "ReachInternal.ReachInternalQueueHandler";
KalturaBatchJobType.CONVERT_CAPTION_ASSET = "caption.convertcaptionasset";
KalturaBatchJobType.PARSE_MULTI_LANGUAGE_CAPTION_ASSET = "caption.parsemultilanguagecaptionasset";
KalturaBatchJobType.PARSE_CAPTION_ASSET = "captionSearch.parseCaptionAsset";
KalturaBatchJobType.DISTRIBUTION_DELETE = "contentDistribution.DistributionDelete";
KalturaBatchJobType.DISTRIBUTION_DISABLE = "contentDistribution.DistributionDisable";
KalturaBatchJobType.DISTRIBUTION_ENABLE = "contentDistribution.DistributionEnable";
KalturaBatchJobType.DISTRIBUTION_FETCH_REPORT = "contentDistribution.DistributionFetchReport";
KalturaBatchJobType.DISTRIBUTION_SUBMIT = "contentDistribution.DistributionSubmit";
KalturaBatchJobType.DISTRIBUTION_SYNC = "contentDistribution.DistributionSync";
KalturaBatchJobType.DISTRIBUTION_UPDATE = "contentDistribution.DistributionUpdate";
KalturaBatchJobType.DROP_FOLDER_CONTENT_PROCESSOR = "dropFolder.DropFolderContentProcessor";
KalturaBatchJobType.DROP_FOLDER_WATCHER = "dropFolder.DropFolderWatcher";
KalturaBatchJobType.EVENT_NOTIFICATION_HANDLER = "eventNotification.EventNotificationHandler";
KalturaBatchJobType.INTEGRATION = "integration.Integration";
KalturaBatchJobType.ENTRY_VENDOR_TASK_CSV = "reach.EntryVendorTasksCsv";
KalturaBatchJobType.SYNC_REACH_CREDIT_TASK = "reach.SyncReachCreditTask";
KalturaBatchJobType.SCHEDULED_TASK = "scheduledTask.ScheduledTask";
KalturaBatchJobType.SEARCH_TERM_CSV = "searchHistory.searchTermsCsv";
KalturaBatchJobType.INDEX_TAGS = "tagSearch.IndexTagsByPrivacyContext";
KalturaBatchJobType.TAG_RESOLVE = "tagSearch.TagResolve";
KalturaBatchJobType.VIRUS_SCAN = "virusScan.VirusScan";
KalturaBatchJobType.WIDEVINE_REPOSITORY_SYNC = "widevine.WidevineRepositorySync";
KalturaBatchJobType.IMPORT = "1";
KalturaBatchJobType.DELETE = "2";
KalturaBatchJobType.FLATTEN = "3";
KalturaBatchJobType.BULKUPLOAD = "4";
KalturaBatchJobType.DVDCREATOR = "5";
KalturaBatchJobType.DOWNLOAD = "6";
KalturaBatchJobType.OOCONVERT = "7";
KalturaBatchJobType.CONVERT_PROFILE = "10";
KalturaBatchJobType.POSTCONVERT = "11";
KalturaBatchJobType.EXTRACT_MEDIA = "14";
KalturaBatchJobType.MAIL = "15";
KalturaBatchJobType.NOTIFICATION = "16";
KalturaBatchJobType.CLEANUP = "17";
KalturaBatchJobType.SCHEDULER_HELPER = "18";
KalturaBatchJobType.BULKDOWNLOAD = "19";
KalturaBatchJobType.DB_CLEANUP = "20";
KalturaBatchJobType.PROVISION_PROVIDE = "21";
KalturaBatchJobType.CONVERT_COLLECTION = "22";
KalturaBatchJobType.STORAGE_EXPORT = "23";
KalturaBatchJobType.PROVISION_DELETE = "24";
KalturaBatchJobType.STORAGE_DELETE = "25";
KalturaBatchJobType.EMAIL_INGESTION = "26";
KalturaBatchJobType.METADATA_IMPORT = "27";
KalturaBatchJobType.METADATA_TRANSFORM = "28";
KalturaBatchJobType.FILESYNC_IMPORT = "29";
KalturaBatchJobType.CAPTURE_THUMB = "30";
KalturaBatchJobType.DELETE_FILE = "31";
KalturaBatchJobType.INDEX = "32";
KalturaBatchJobType.MOVE_CATEGORY_ENTRIES = "33";
KalturaBatchJobType.COPY = "34";
KalturaBatchJobType.CONCAT = "35";
KalturaBatchJobType.CONVERT_LIVE_SEGMENT = "36";
KalturaBatchJobType.COPY_PARTNER = "37";
KalturaBatchJobType.VALIDATE_LIVE_MEDIA_SERVERS = "38";
KalturaBatchJobType.SYNC_CATEGORY_PRIVACY_CONTEXT = "39";
KalturaBatchJobType.LIVE_REPORT_EXPORT = "40";
KalturaBatchJobType.RECALCULATE_CACHE = "41";
KalturaBatchJobType.LIVE_TO_VOD = "42";
KalturaBatchJobType.COPY_CAPTIONS = "43";
KalturaBatchJobType.CHUNKED_ENCODE_JOB_SCHEDULER = "44";
KalturaBatchJobType.SERVER_NODE_MONITOR = "45";
KalturaBatchJobType.USERS_CSV = "46";
KalturaBatchJobType.CLIP_CONCAT = "47";
KalturaBatchJobType.COPY_CUE_POINTS = "48";
KalturaBatchJobType.EXPORT_CSV = "49";
KalturaBatchJobType.REPORT_EXPORT = "50";
KalturaBatchJobType.LIVE_ENTRY_ARCHIVE = "51";
KalturaBatchJobType.STORAGE_UPDATE = "52";
KalturaBatchJobType.STORAGE_PERIODIC_EXPORT = "53";
KalturaBatchJobType.STORAGE_PERIODIC_PURGE = "54";
KalturaBatchJobType.STORAGE_PERIODIC_DELETE_LOCAL = "55";
KalturaBatchJobType.REACH_JOB_CLEANER = "56";
KalturaBatchJobType.MULTI_CLIP_CONCAT = "57";

function KalturaBeaconIndexType(){
}
KalturaBeaconIndexType.LOG = "Log";
KalturaBeaconIndexType.STATE = "State";

function KalturaBeaconObjectTypes(){
}
KalturaBeaconObjectTypes.SCHEDULE_RESOURCE_BEACON = "1";
KalturaBeaconObjectTypes.ENTRY_SERVER_NODE_BEACON = "2";
KalturaBeaconObjectTypes.SERVER_NODE_BEACON = "3";
KalturaBeaconObjectTypes.ENTRY_BEACON = "4";

function KalturaBeaconOrderBy(){
}
KalturaBeaconOrderBy.OBJECT_ID_ASC = "+objectId";
KalturaBeaconOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBeaconOrderBy.OBJECT_ID_DESC = "-objectId";
KalturaBeaconOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBeaconScheduledResourceFieldName(){
}
KalturaBeaconScheduledResourceFieldName.EVENT_TYPE = "event_type";
KalturaBeaconScheduledResourceFieldName.IS_LOG = "is_log";
KalturaBeaconScheduledResourceFieldName.OBJECT_ID = "object_id";
KalturaBeaconScheduledResourceFieldName.RECORDING = "recording";
KalturaBeaconScheduledResourceFieldName.RESOURCE_NAME = "resource_name";
KalturaBeaconScheduledResourceFieldName.STATUS = "status";
KalturaBeaconScheduledResourceFieldName.UPDATED_AT = "updated_at";

function KalturaBeaconScheduledResourceOrderByFieldName(){
}
KalturaBeaconScheduledResourceOrderByFieldName.STATUS = "app_status";
KalturaBeaconScheduledResourceOrderByFieldName.RECORDING = "recording_phase";
KalturaBeaconScheduledResourceOrderByFieldName.RESOURCE_NAME = "resource_Name";
KalturaBeaconScheduledResourceOrderByFieldName.UPDATED_AT = "updated_at";

function KalturaBulkUploadAction(){
}
KalturaBulkUploadAction.CANCEL = "scheduleBulkUpload.CANCEL";
KalturaBulkUploadAction.ADD = "1";
KalturaBulkUploadAction.UPDATE = "2";
KalturaBulkUploadAction.DELETE = "3";
KalturaBulkUploadAction.REPLACE = "4";
KalturaBulkUploadAction.TRANSFORM_XSLT = "5";
KalturaBulkUploadAction.ADD_OR_UPDATE = "6";
KalturaBulkUploadAction.ACTIVATE = "7";
KalturaBulkUploadAction.REJECT = "8";
KalturaBulkUploadAction.UPDATE_STATUS = "9";

function KalturaBulkUploadObjectType(){
}
KalturaBulkUploadObjectType.JOB = "bulkUploadFilter.JOB";
KalturaBulkUploadObjectType.SCHEDULE_EVENT = "scheduleBulkUpload.SCHEDULE_EVENT";
KalturaBulkUploadObjectType.SCHEDULE_RESOURCE = "scheduleBulkUpload.SCHEDULE_RESOURCE";
KalturaBulkUploadObjectType.ENTRY = "1";
KalturaBulkUploadObjectType.CATEGORY = "2";
KalturaBulkUploadObjectType.USER = "3";
KalturaBulkUploadObjectType.CATEGORY_USER = "4";
KalturaBulkUploadObjectType.CATEGORY_ENTRY = "5";
KalturaBulkUploadObjectType.USER_ENTRY = "6";
KalturaBulkUploadObjectType.VENDOR_CATALOG_ITEM = "7";

function KalturaBulkUploadOrderBy(){
}

function KalturaBulkUploadResultStatus(){
}
KalturaBulkUploadResultStatus.ERROR = "1";
KalturaBulkUploadResultStatus.OK = "2";
KalturaBulkUploadResultStatus.IN_PROGRESS = "3";

function KalturaBulkUploadType(){
}
KalturaBulkUploadType.CSV = "bulkUploadCsv.CSV";
KalturaBulkUploadType.FILTER = "bulkUploadFilter.FILTER";
KalturaBulkUploadType.XML = "bulkUploadXml.XML";
KalturaBulkUploadType.DROP_FOLDER_XML = "dropFolderXmlBulkUpload.DROP_FOLDER_XML";
KalturaBulkUploadType.ICAL = "scheduleBulkUpload.ICAL";
KalturaBulkUploadType.DROP_FOLDER_ICAL = "scheduleDropFolder.DROP_FOLDER_ICAL";

function KalturaBusinessProcessAbortNotificationTemplateOrderBy(){
}
KalturaBusinessProcessAbortNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBusinessProcessAbortNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaBusinessProcessAbortNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBusinessProcessAbortNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBusinessProcessAbortNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaBusinessProcessAbortNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBusinessProcessNotificationTemplateOrderBy(){
}
KalturaBusinessProcessNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBusinessProcessNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaBusinessProcessNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBusinessProcessNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBusinessProcessNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaBusinessProcessNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBusinessProcessProvider(){
}
KalturaBusinessProcessProvider.ACTIVITI = "activitiBusinessProcessNotification.Activiti";

function KalturaBusinessProcessServerOrderBy(){
}
KalturaBusinessProcessServerOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBusinessProcessServerOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBusinessProcessServerOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBusinessProcessServerOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBusinessProcessServerStatus(){
}
KalturaBusinessProcessServerStatus.DISABLED = "1";
KalturaBusinessProcessServerStatus.ENABLED = "2";
KalturaBusinessProcessServerStatus.DELETED = "3";

function KalturaBusinessProcessSignalNotificationTemplateOrderBy(){
}
KalturaBusinessProcessSignalNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBusinessProcessSignalNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaBusinessProcessSignalNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBusinessProcessSignalNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBusinessProcessSignalNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaBusinessProcessSignalNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBusinessProcessStartNotificationTemplateOrderBy(){
}
KalturaBusinessProcessStartNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBusinessProcessStartNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaBusinessProcessStartNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBusinessProcessStartNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBusinessProcessStartNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaBusinessProcessStartNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCameraScheduleResourceOrderBy(){
}
KalturaCameraScheduleResourceOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCameraScheduleResourceOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCameraScheduleResourceOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCameraScheduleResourceOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCaptionAssetOrderBy(){
}
KalturaCaptionAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCaptionAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaCaptionAssetOrderBy.SIZE_ASC = "+size";
KalturaCaptionAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCaptionAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCaptionAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaCaptionAssetOrderBy.SIZE_DESC = "-size";
KalturaCaptionAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCaptionAssetUsage(){
}
KalturaCaptionAssetUsage.CAPTION = "0";
KalturaCaptionAssetUsage.EXTENDED_AUDIO_DESCRIPTION = "1";

function KalturaCaptionParamsOrderBy(){
}

function KalturaCaptionSource(){
}
KalturaCaptionSource.UNKNOWN = "0";
KalturaCaptionSource.ZOOM = "1";
KalturaCaptionSource.WEBEX = "2";

function KalturaCaptionType(){
}
KalturaCaptionType.SRT = "1";
KalturaCaptionType.DFXP = "2";
KalturaCaptionType.WEBVTT = "3";
KalturaCaptionType.CAP = "4";
KalturaCaptionType.SCC = "5";

function KalturaCatalogItemLanguage(){
}
KalturaCatalogItemLanguage.AF = "Afrikaans";
KalturaCatalogItemLanguage.AR = "Arabic";
KalturaCatalogItemLanguage.AUTO_DETECT = "Auto Detect";
KalturaCatalogItemLanguage.AZ = "Azerbaijani";
KalturaCatalogItemLanguage.BA = "Bashkir";
KalturaCatalogItemLanguage.EU = "Basque";
KalturaCatalogItemLanguage.BN = "Bengali (Bangla)";
KalturaCatalogItemLanguage.BS = "Bosnian";
KalturaCatalogItemLanguage.BG = "Bulgarian";
KalturaCatalogItemLanguage.MY = "Burmese";
KalturaCatalogItemLanguage.BE = "Byelorussian (Belarusian)";
KalturaCatalogItemLanguage.KM = "Cambodian";
KalturaCatalogItemLanguage.YUE = "Cantonese";
KalturaCatalogItemLanguage.CA = "Catalan";
KalturaCatalogItemLanguage.ZH = "Chinese";
KalturaCatalogItemLanguage.HR = "Croatian";
KalturaCatalogItemLanguage.CS = "Czech";
KalturaCatalogItemLanguage.DA = "Danish";
KalturaCatalogItemLanguage.NL = "Dutch";
KalturaCatalogItemLanguage.EN = "English";
KalturaCatalogItemLanguage.EN_US = "English (American)";
KalturaCatalogItemLanguage.EN_AU = "English (Australian)";
KalturaCatalogItemLanguage.EN_GB = "English (British)";
KalturaCatalogItemLanguage.EO = "Esperanto";
KalturaCatalogItemLanguage.ET = "Estonian";
KalturaCatalogItemLanguage.FA = "Farsi";
KalturaCatalogItemLanguage.FI = "Finnish";
KalturaCatalogItemLanguage.FR = "French";
KalturaCatalogItemLanguage.FR_CA = "French (Canada)";
KalturaCatalogItemLanguage.GD = "Gaelic (Scottish)";
KalturaCatalogItemLanguage.GL = "Galician";
KalturaCatalogItemLanguage.KA = "Georgian";
KalturaCatalogItemLanguage.DE = "German";
KalturaCatalogItemLanguage.EL = "Greek";
KalturaCatalogItemLanguage.GU = "Gujarati";
KalturaCatalogItemLanguage.HE = "Hebrew";
KalturaCatalogItemLanguage.HI = "Hindi";
KalturaCatalogItemLanguage.HU = "Hungarian";
KalturaCatalogItemLanguage.IS = "Icelandic";
KalturaCatalogItemLanguage.IN = "Indonesian";
KalturaCatalogItemLanguage.IA = "Interlingua";
KalturaCatalogItemLanguage.GA = "Irish";
KalturaCatalogItemLanguage.IT = "Italian";
KalturaCatalogItemLanguage.JA = "Japanese";
KalturaCatalogItemLanguage.JV = "Javanese";
KalturaCatalogItemLanguage.KN = "Kannada";
KalturaCatalogItemLanguage.KK = "Kazakh";
KalturaCatalogItemLanguage.KO = "Korean";
KalturaCatalogItemLanguage.LO = "Laothian";
KalturaCatalogItemLanguage.LV = "Latvian (Lettish)";
KalturaCatalogItemLanguage.LT = "Lithuanian";
KalturaCatalogItemLanguage.MK = "Macedonian";
KalturaCatalogItemLanguage.MS = "Malay";
KalturaCatalogItemLanguage.ML = "Malayalam";
KalturaCatalogItemLanguage.CMN = "Mandarin Chinese";
KalturaCatalogItemLanguage.MR = "Marathi";
KalturaCatalogItemLanguage.MN = "Mongolian";
KalturaCatalogItemLanguage.NE = "Nepali";
KalturaCatalogItemLanguage.NO = "Norwegian";
KalturaCatalogItemLanguage.FA_IR = "Persian (Iran)";
KalturaCatalogItemLanguage.PL = "Polish";
KalturaCatalogItemLanguage.PT = "Portuguese";
KalturaCatalogItemLanguage.PT_BR = "Portuguese (Brazil)";
KalturaCatalogItemLanguage.PA = "Punjabi";
KalturaCatalogItemLanguage.RO = "Romanian";
KalturaCatalogItemLanguage.RU = "Russian";
KalturaCatalogItemLanguage.SR = "Serbian";
KalturaCatalogItemLanguage.ZH_CN = "Simplified Chinese";
KalturaCatalogItemLanguage.SI = "Sinhalese";
KalturaCatalogItemLanguage.SK = "Slovak";
KalturaCatalogItemLanguage.SK_SK = "Slovakian";
KalturaCatalogItemLanguage.SL = "Slovenian";
KalturaCatalogItemLanguage.ES = "Spanish";
KalturaCatalogItemLanguage.ES_XL = "Spanish (Latin America)";
KalturaCatalogItemLanguage.SU = "Sundanese";
KalturaCatalogItemLanguage.SW = "Swahili (Kiswahili)";
KalturaCatalogItemLanguage.SV = "Swedish";
KalturaCatalogItemLanguage.TL = "Tagalog";
KalturaCatalogItemLanguage.ZH_TW = "Taiwanese Mandarin";
KalturaCatalogItemLanguage.TA = "Tamil";
KalturaCatalogItemLanguage.TE = "Telugu";
KalturaCatalogItemLanguage.TH = "Thai";
KalturaCatalogItemLanguage.ZH_HK = "Traditional Chinese";
KalturaCatalogItemLanguage.TR = "Turkish";
KalturaCatalogItemLanguage.UG = "Uighur";
KalturaCatalogItemLanguage.UK = "Ukrainian";
KalturaCatalogItemLanguage.UR = "Urdu";
KalturaCatalogItemLanguage.UZ = "Uzbek";
KalturaCatalogItemLanguage.VI = "Vietnamese";
KalturaCatalogItemLanguage.CY = "Welsh";
KalturaCatalogItemLanguage.XH = "Xhosa";
KalturaCatalogItemLanguage.ZU = "Zulu";

function KalturaCategoryEntryAdvancedOrderBy(){
}
KalturaCategoryEntryAdvancedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryEntryAdvancedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaCategoryEntryOrderBy(){
}
KalturaCategoryEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryEntryOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaCategoryIdentifierField(){
}
KalturaCategoryIdentifierField.FULL_NAME = "fullName";
KalturaCategoryIdentifierField.ID = "id";
KalturaCategoryIdentifierField.REFERENCE_ID = "referenceId";

function KalturaCategoryOrderBy(){
}
KalturaCategoryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryOrderBy.DEPTH_ASC = "+depth";
KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_ASC = "+directEntriesCount";
KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_ASC = "+directSubCategoriesCount";
KalturaCategoryOrderBy.ENTRIES_COUNT_ASC = "+entriesCount";
KalturaCategoryOrderBy.FULL_NAME_ASC = "+fullName";
KalturaCategoryOrderBy.MEMBERS_COUNT_ASC = "+membersCount";
KalturaCategoryOrderBy.NAME_ASC = "+name";
KalturaCategoryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCategoryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCategoryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCategoryOrderBy.DEPTH_DESC = "-depth";
KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_DESC = "-directEntriesCount";
KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_DESC = "-directSubCategoriesCount";
KalturaCategoryOrderBy.ENTRIES_COUNT_DESC = "-entriesCount";
KalturaCategoryOrderBy.FULL_NAME_DESC = "-fullName";
KalturaCategoryOrderBy.MEMBERS_COUNT_DESC = "-membersCount";
KalturaCategoryOrderBy.NAME_DESC = "-name";
KalturaCategoryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaCategoryOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCategoryUserOrderBy(){
}
KalturaCategoryUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCategoryUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCategoryUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCielo24Fidelity(){
}
KalturaCielo24Fidelity.MECHANICAL = "MECHANICAL";
KalturaCielo24Fidelity.PREMIUM = "PREMIUM";
KalturaCielo24Fidelity.PROFESSIONAL = "PROFESSIONAL";

function KalturaCielo24Priority(){
}
KalturaCielo24Priority.PRIORITY = "PRIORITY";
KalturaCielo24Priority.STANDARD = "STANDARD";

function KalturaCloneComponentSelectorType(){
}
KalturaCloneComponentSelectorType.INCLUDE_COMPONENT = "0";
KalturaCloneComponentSelectorType.EXCLUDE_COMPONENT = "1";

function KalturaCodeCuePointOrderBy(){
}
KalturaCodeCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCodeCuePointOrderBy.DURATION_ASC = "+duration";
KalturaCodeCuePointOrderBy.END_TIME_ASC = "+endTime";
KalturaCodeCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCodeCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaCodeCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaCodeCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCodeCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCodeCuePointOrderBy.DURATION_DESC = "-duration";
KalturaCodeCuePointOrderBy.END_TIME_DESC = "-endTime";
KalturaCodeCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaCodeCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaCodeCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaCodeCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaComcastMrssDistributionProfileOrderBy(){
}
KalturaComcastMrssDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaComcastMrssDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaComcastMrssDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaComcastMrssDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaComcastMrssDistributionProviderOrderBy(){
}

function KalturaConditionType(){
}
KalturaConditionType.ABC_WATERMARK = "abcScreenersWatermarkAccessControl.abcWatermark";
KalturaConditionType.EVENT_NOTIFICATION_FIELD = "eventNotification.BooleanField";
KalturaConditionType.EVENT_NOTIFICATION_OBJECT_CHANGED = "eventNotification.ObjectChanged";
KalturaConditionType.METADATA_FIELD_CHANGED = "metadata.FieldChanged";
KalturaConditionType.METADATA_FIELD_COMPARE = "metadata.FieldCompare";
KalturaConditionType.METADATA_FIELD_MATCH = "metadata.FieldMatch";
KalturaConditionType.EVENT_CATEGORY_ENTRY = "reach.CategoryEntry";
KalturaConditionType.AUTHENTICATED = "1";
KalturaConditionType.COUNTRY = "2";
KalturaConditionType.IP_ADDRESS = "3";
KalturaConditionType.SITE = "4";
KalturaConditionType.USER_AGENT = "5";
KalturaConditionType.FIELD_MATCH = "6";
KalturaConditionType.FIELD_COMPARE = "7";
KalturaConditionType.ASSET_PROPERTIES_COMPARE = "8";
KalturaConditionType.USER_ROLE = "9";
KalturaConditionType.GEO_DISTANCE = "10";
KalturaConditionType.OR_OPERATOR = "11";
KalturaConditionType.HASH = "12";
KalturaConditionType.DELIVERY_PROFILE = "13";
KalturaConditionType.ACTIVE_EDGE_VALIDATE = "14";
KalturaConditionType.ANONYMOUS_IP = "15";
KalturaConditionType.ASSET_TYPE = "16";
KalturaConditionType.BOOLEAN = "17";
KalturaConditionType.HTTP_HEADER = "18";
KalturaConditionType.ENTRY_SCHEDULED = "19";
KalturaConditionType.ACTION_NAME = "20";
KalturaConditionType.URL_AUTH_PARAMS = "21";

function KalturaConfMapsSourceLocation(){
}
KalturaConfMapsSourceLocation.FS = "FileSystem";
KalturaConfMapsSourceLocation.DB = "database";

function KalturaConferenceServerNodeOrderBy(){
}
KalturaConferenceServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConferenceServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaConferenceServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaConferenceServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaConferenceServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaConferenceServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaConfigurableDistributionProfileOrderBy(){
}
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaContainerFormat(){
}
KalturaContainerFormat._3GP = "3gp";
KalturaContainerFormat.APPLEHTTP = "applehttp";
KalturaContainerFormat.AVI = "avi";
KalturaContainerFormat.BIF = "bif";
KalturaContainerFormat.BMP = "bmp";
KalturaContainerFormat.COPY = "copy";
KalturaContainerFormat.FLV = "flv";
KalturaContainerFormat.HLS = "hls";
KalturaContainerFormat.ISMA = "isma";
KalturaContainerFormat.ISMV = "ismv";
KalturaContainerFormat.JPG = "jpg";
KalturaContainerFormat.M2TS = "m2ts";
KalturaContainerFormat.M4V = "m4v";
KalturaContainerFormat.MKV = "mkv";
KalturaContainerFormat.MOV = "mov";
KalturaContainerFormat.MP3 = "mp3";
KalturaContainerFormat.MP4 = "mp4";
KalturaContainerFormat.MPEG = "mpeg";
KalturaContainerFormat.MPEGTS = "mpegts";
KalturaContainerFormat.MXF = "mxf";
KalturaContainerFormat.OGG = "ogg";
KalturaContainerFormat.OGV = "ogv";
KalturaContainerFormat.PDF = "pdf";
KalturaContainerFormat.PNG = "png";
KalturaContainerFormat.SWF = "swf";
KalturaContainerFormat.WAV = "wav";
KalturaContainerFormat.WEBM = "webm";
KalturaContainerFormat.WMA = "wma";
KalturaContainerFormat.WMV = "wmv";
KalturaContainerFormat.WVM = "wvm";

function KalturaContextType(){
}
KalturaContextType.PLAY = "1";
KalturaContextType.DOWNLOAD = "2";
KalturaContextType.THUMBNAIL = "3";
KalturaContextType.METADATA = "4";
KalturaContextType.EXPORT = "5";
KalturaContextType.SERVE = "6";

function KalturaControlPanelCommandOrderBy(){
}
KalturaControlPanelCommandOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaControlPanelCommandOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaConversionProfileAssetParamsOrderBy(){
}

function KalturaConversionProfileOrderBy(){
}
KalturaConversionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConversionProfileOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaConversionProfileStatus(){
}
KalturaConversionProfileStatus.DISABLED = "1";
KalturaConversionProfileStatus.ENABLED = "2";
KalturaConversionProfileStatus.DELETED = "3";

function KalturaConversionProfileType(){
}
KalturaConversionProfileType.MEDIA = "1";
KalturaConversionProfileType.LIVE_STREAM = "2";

function KalturaCortexApiDistributionProfileOrderBy(){
}
KalturaCortexApiDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCortexApiDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCortexApiDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCortexApiDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCortexApiDistributionProviderOrderBy(){
}

function KalturaCrossKalturaDistributionProfileOrderBy(){
}
KalturaCrossKalturaDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCrossKalturaDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCrossKalturaDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCrossKalturaDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCrossKalturaDistributionProviderOrderBy(){
}

function KalturaCuePointOrderBy(){
}
KalturaCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCuePointType(){
}
KalturaCuePointType.AD = "adCuePoint.Ad";
KalturaCuePointType.ANNOTATION = "annotation.Annotation";
KalturaCuePointType.CODE = "codeCuePoint.Code";
KalturaCuePointType.EVENT = "eventCuePoint.Event";
KalturaCuePointType.QUIZ_ANSWER = "quiz.QUIZ_ANSWER";
KalturaCuePointType.QUIZ_QUESTION = "quiz.QUIZ_QUESTION";
KalturaCuePointType.SESSION = "sessionCuePoint.Session";
KalturaCuePointType.THUMB = "thumbCuePoint.Thumb";

function KalturaDailymotionDistributionProfileOrderBy(){
}
KalturaDailymotionDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDailymotionDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDailymotionDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDailymotionDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDailymotionDistributionProviderOrderBy(){
}

function KalturaDataEntryCompareAttribute(){
}
KalturaDataEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaDataEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaDataEntryCompareAttribute.END_DATE = "endDate";
KalturaDataEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaDataEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaDataEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaDataEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaDataEntryCompareAttribute.RANK = "rank";
KalturaDataEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaDataEntryCompareAttribute.START_DATE = "startDate";
KalturaDataEntryCompareAttribute.STATUS = "status";
KalturaDataEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaDataEntryCompareAttribute.TYPE = "type";
KalturaDataEntryCompareAttribute.UPDATED_AT = "updatedAt";

function KalturaDataEntryMatchAttribute(){
}
KalturaDataEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaDataEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaDataEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaDataEntryMatchAttribute.DESCRIPTION = "description";
KalturaDataEntryMatchAttribute.GROUP_ID = "groupId";
KalturaDataEntryMatchAttribute.ID = "id";
KalturaDataEntryMatchAttribute.NAME = "name";
KalturaDataEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaDataEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaDataEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaDataEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaDataEntryMatchAttribute.TAGS = "tags";
KalturaDataEntryMatchAttribute.USER_ID = "userId";

function KalturaDataEntryOrderBy(){
}
KalturaDataEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDataEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaDataEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDataEntryOrderBy.NAME_ASC = "+name";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDataEntryOrderBy.RANK_ASC = "+rank";
KalturaDataEntryOrderBy.RECENT_ASC = "+recent";
KalturaDataEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaDataEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaDataEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDataEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaDataEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDataEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaDataEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDataEntryOrderBy.NAME_DESC = "-name";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaDataEntryOrderBy.RANK_DESC = "-rank";
KalturaDataEntryOrderBy.RECENT_DESC = "-recent";
KalturaDataEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaDataEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaDataEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDataEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy(){
}
KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileAkamaiAppleHttpManifestOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileAkamaiHdsOrderBy(){
}
KalturaDeliveryProfileAkamaiHdsOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileAkamaiHdsOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileAkamaiHdsOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileAkamaiHdsOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileAkamaiHttpOrderBy(){
}
KalturaDeliveryProfileAkamaiHttpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileAkamaiHttpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileAkamaiHttpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileAkamaiHttpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileGenericAppleHttpOrderBy(){
}
KalturaDeliveryProfileGenericAppleHttpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileGenericAppleHttpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileGenericAppleHttpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileGenericAppleHttpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileGenericHdsOrderBy(){
}
KalturaDeliveryProfileGenericHdsOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileGenericHdsOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileGenericHdsOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileGenericHdsOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileGenericHttpOrderBy(){
}
KalturaDeliveryProfileGenericHttpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileGenericHttpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileGenericHttpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileGenericHttpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileGenericRtmpOrderBy(){
}
KalturaDeliveryProfileGenericRtmpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileGenericRtmpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileGenericRtmpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileGenericRtmpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileGenericSilverLightOrderBy(){
}
KalturaDeliveryProfileGenericSilverLightOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileGenericSilverLightOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileGenericSilverLightOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileGenericSilverLightOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileLiveAppleHttpOrderBy(){
}
KalturaDeliveryProfileLiveAppleHttpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileLiveAppleHttpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileLiveAppleHttpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileLiveAppleHttpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileOrderBy(){
}
KalturaDeliveryProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileRtmpOrderBy(){
}
KalturaDeliveryProfileRtmpOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryProfileRtmpOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryProfileRtmpOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryProfileRtmpOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDeliveryProfileType(){
}
KalturaDeliveryProfileType.EDGE_CAST_HTTP = "edgeCast.EDGE_CAST_HTTP";
KalturaDeliveryProfileType.EDGE_CAST_RTMP = "edgeCast.EDGE_CAST_RTMP";
KalturaDeliveryProfileType.KONTIKI_HTTP = "kontiki.KONTIKI_HTTP";
KalturaDeliveryProfileType.UPLYNK_HTTP = "uplynk.UPLYNK_HTTP";
KalturaDeliveryProfileType.UPLYNK_RTMP = "uplynk.UPLYNK_RTMP";
KalturaDeliveryProfileType.VELOCIX_HDS = "velocix.VELOCIX_HDS";
KalturaDeliveryProfileType.VELOCIX_HLS = "velocix.VELOCIX_HLS";
KalturaDeliveryProfileType.APPLE_HTTP = "1";
KalturaDeliveryProfileType.HDS = "3";
KalturaDeliveryProfileType.HTTP = "4";
KalturaDeliveryProfileType.RTMP = "5";
KalturaDeliveryProfileType.RTSP = "6";
KalturaDeliveryProfileType.SILVER_LIGHT = "7";
KalturaDeliveryProfileType.AKAMAI_HLS_DIRECT = "10";
KalturaDeliveryProfileType.AKAMAI_HLS_MANIFEST = "11";
KalturaDeliveryProfileType.AKAMAI_HD = "12";
KalturaDeliveryProfileType.AKAMAI_HDS = "13";
KalturaDeliveryProfileType.AKAMAI_HTTP = "14";
KalturaDeliveryProfileType.AKAMAI_RTMP = "15";
KalturaDeliveryProfileType.AKAMAI_RTSP = "16";
KalturaDeliveryProfileType.AKAMAI_SS = "17";
KalturaDeliveryProfileType.GENERIC_HLS = "21";
KalturaDeliveryProfileType.GENERIC_HDS = "23";
KalturaDeliveryProfileType.GENERIC_HTTP = "24";
KalturaDeliveryProfileType.GENERIC_HLS_MANIFEST = "25";
KalturaDeliveryProfileType.GENERIC_HDS_MANIFEST = "26";
KalturaDeliveryProfileType.GENERIC_SS = "27";
KalturaDeliveryProfileType.GENERIC_RTMP = "28";
KalturaDeliveryProfileType.LEVEL3_HLS = "31";
KalturaDeliveryProfileType.LEVEL3_HTTP = "34";
KalturaDeliveryProfileType.LEVEL3_RTMP = "35";
KalturaDeliveryProfileType.LIMELIGHT_HTTP = "44";
KalturaDeliveryProfileType.LIMELIGHT_RTMP = "45";
KalturaDeliveryProfileType.LOCAL_PATH_APPLE_HTTP = "51";
KalturaDeliveryProfileType.LOCAL_PATH_HDS = "53";
KalturaDeliveryProfileType.LOCAL_PATH_HTTP = "54";
KalturaDeliveryProfileType.LOCAL_PATH_RTMP = "55";
KalturaDeliveryProfileType.VOD_PACKAGER_HLS = "61";
KalturaDeliveryProfileType.VOD_PACKAGER_HDS = "63";
KalturaDeliveryProfileType.VOD_PACKAGER_MSS = "67";
KalturaDeliveryProfileType.VOD_PACKAGER_DASH = "68";
KalturaDeliveryProfileType.VOD_PACKAGER_HLS_MANIFEST = "69";
KalturaDeliveryProfileType.LIVE_HLS = "1001";
KalturaDeliveryProfileType.LIVE_HDS = "1002";
KalturaDeliveryProfileType.LIVE_DASH = "1003";
KalturaDeliveryProfileType.LIVE_RTMP = "1005";
KalturaDeliveryProfileType.LIVE_HLS_TO_MULTICAST = "1006";
KalturaDeliveryProfileType.LIVE_PACKAGER_HLS = "1007";
KalturaDeliveryProfileType.LIVE_PACKAGER_HDS = "1008";
KalturaDeliveryProfileType.LIVE_PACKAGER_DASH = "1009";
KalturaDeliveryProfileType.LIVE_PACKAGER_MSS = "1010";
KalturaDeliveryProfileType.LIVE_AKAMAI_HDS = "1013";

function KalturaDeliveryServerNodeOrderBy(){
}
KalturaDeliveryServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDeliveryServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaDeliveryServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDeliveryServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDeliveryServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaDeliveryServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDistributionProfileOrderBy(){
}
KalturaDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDistributionProviderOrderBy(){
}

function KalturaDistributionProviderType(){
}
KalturaDistributionProviderType.ATT_UVERSE = "attUverseDistribution.ATT_UVERSE";
KalturaDistributionProviderType.AVN = "avnDistribution.AVN";
KalturaDistributionProviderType.COMCAST_MRSS = "comcastMrssDistribution.COMCAST_MRSS";
KalturaDistributionProviderType.CORTEX_API = "cortexApiDistribution.CORTEX_API";
KalturaDistributionProviderType.CROSS_KALTURA = "crossKalturaDistribution.CROSS_KALTURA";
KalturaDistributionProviderType.DAILYMOTION = "dailymotionDistribution.DAILYMOTION";
KalturaDistributionProviderType.DOUBLECLICK = "doubleClickDistribution.DOUBLECLICK";
KalturaDistributionProviderType.FACEBOOK = "facebookDistribution.FACEBOOK";
KalturaDistributionProviderType.FREEWHEEL = "freewheelDistribution.FREEWHEEL";
KalturaDistributionProviderType.FREEWHEEL_GENERIC = "freewheelGenericDistribution.FREEWHEEL_GENERIC";
KalturaDistributionProviderType.FTP = "ftpDistribution.FTP";
KalturaDistributionProviderType.FTP_SCHEDULED = "ftpDistribution.FTP_SCHEDULED";
KalturaDistributionProviderType.HULU = "huluDistribution.HULU";
KalturaDistributionProviderType.IDETIC = "ideticDistribution.IDETIC";
KalturaDistributionProviderType.METRO_PCS = "metroPcsDistribution.METRO_PCS";
KalturaDistributionProviderType.MSN = "msnDistribution.MSN";
KalturaDistributionProviderType.NDN = "ndnDistribution.NDN";
KalturaDistributionProviderType.PODCAST = "podcastDistribution.PODCAST";
KalturaDistributionProviderType.PUSH_TO_NEWS = "pushToNewsDistribution.PUSH_TO_NEWS";
KalturaDistributionProviderType.QUICKPLAY = "quickPlayDistribution.QUICKPLAY";
KalturaDistributionProviderType.SYNACOR_HBO = "synacorHboDistribution.SYNACOR_HBO";
KalturaDistributionProviderType.TIME_WARNER = "timeWarnerDistribution.TIME_WARNER";
KalturaDistributionProviderType.TVCOM = "tvComDistribution.TVCOM";
KalturaDistributionProviderType.TVINCI = "tvinciDistribution.TVINCI";
KalturaDistributionProviderType.UNICORN = "unicornDistribution.UNICORN";
KalturaDistributionProviderType.UVERSE_CLICK_TO_ORDER = "uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER";
KalturaDistributionProviderType.UVERSE = "uverseDistribution.UVERSE";
KalturaDistributionProviderType.VERIZON_VCAST = "verizonVcastDistribution.VERIZON_VCAST";
KalturaDistributionProviderType.YAHOO = "yahooDistribution.YAHOO";
KalturaDistributionProviderType.YOUTUBE = "youTubeDistribution.YOUTUBE";
KalturaDistributionProviderType.YOUTUBE_API = "youtubeApiDistribution.YOUTUBE_API";
KalturaDistributionProviderType.GENERIC = "1";
KalturaDistributionProviderType.SYNDICATION = "2";

function KalturaDocumentEntryCompareAttribute(){
}
KalturaDocumentEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaDocumentEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaDocumentEntryCompareAttribute.END_DATE = "endDate";
KalturaDocumentEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaDocumentEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaDocumentEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaDocumentEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaDocumentEntryCompareAttribute.RANK = "rank";
KalturaDocumentEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaDocumentEntryCompareAttribute.START_DATE = "startDate";
KalturaDocumentEntryCompareAttribute.STATUS = "status";
KalturaDocumentEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaDocumentEntryCompareAttribute.TYPE = "type";
KalturaDocumentEntryCompareAttribute.UPDATED_AT = "updatedAt";

function KalturaDocumentEntryMatchAttribute(){
}
KalturaDocumentEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaDocumentEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaDocumentEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaDocumentEntryMatchAttribute.DESCRIPTION = "description";
KalturaDocumentEntryMatchAttribute.GROUP_ID = "groupId";
KalturaDocumentEntryMatchAttribute.ID = "id";
KalturaDocumentEntryMatchAttribute.NAME = "name";
KalturaDocumentEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaDocumentEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaDocumentEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaDocumentEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaDocumentEntryMatchAttribute.TAGS = "tags";
KalturaDocumentEntryMatchAttribute.USER_ID = "userId";

function KalturaDocumentEntryOrderBy(){
}
KalturaDocumentEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDocumentEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDocumentEntryOrderBy.NAME_ASC = "+name";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDocumentEntryOrderBy.RANK_ASC = "+rank";
KalturaDocumentEntryOrderBy.RECENT_ASC = "+recent";
KalturaDocumentEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaDocumentEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaDocumentEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDocumentEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaDocumentEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDocumentEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDocumentEntryOrderBy.NAME_DESC = "-name";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaDocumentEntryOrderBy.RANK_DESC = "-rank";
KalturaDocumentEntryOrderBy.RECENT_DESC = "-recent";
KalturaDocumentEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaDocumentEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaDocumentEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDocumentEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaDocumentFlavorParamsOrderBy(){
}

function KalturaDocumentFlavorParamsOutputOrderBy(){
}

function KalturaDoubleClickDistributionProfileOrderBy(){
}
KalturaDoubleClickDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDoubleClickDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDoubleClickDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDoubleClickDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDoubleClickDistributionProviderOrderBy(){
}

function KalturaDrmLicenseScenario(){
}
KalturaDrmLicenseScenario.NONE = "0";
KalturaDrmLicenseScenario.PROTECTION = "playReady.PROTECTION";
KalturaDrmLicenseScenario.PURCHASE = "playReady.PURCHASE";
KalturaDrmLicenseScenario.RENTAL = "playReady.RENTAL";
KalturaDrmLicenseScenario.SUBSCRIPTION = "playReady.SUBSCRIPTION";

function KalturaDrmLicenseType(){
}
KalturaDrmLicenseType.NON_PERSISTENT = "playReady.NON_PERSISTENT";
KalturaDrmLicenseType.PERSISTENT = "playReady.PERSISTENT";

function KalturaDrmPolicyOrderBy(){
}

function KalturaDrmProfileOrderBy(){
}
KalturaDrmProfileOrderBy.ID_ASC = "+id";
KalturaDrmProfileOrderBy.NAME_ASC = "+name";
KalturaDrmProfileOrderBy.ID_DESC = "-id";
KalturaDrmProfileOrderBy.NAME_DESC = "-name";

function KalturaDrmProviderType(){
}
KalturaDrmProviderType.FAIRPLAY = "fairplay.FAIRPLAY";
KalturaDrmProviderType.PLAY_READY = "playReady.PLAY_READY";
KalturaDrmProviderType.WIDEVINE = "widevine.WIDEVINE";
KalturaDrmProviderType.CENC = "1";

function KalturaDrmSchemeName(){
}
KalturaDrmSchemeName.PLAYREADY_CENC = "drm.PLAYREADY_CENC";
KalturaDrmSchemeName.WIDEVINE_CENC = "drm.WIDEVINE_CENC";
KalturaDrmSchemeName.FAIRPLAY = "fairplay.FAIRPLAY";
KalturaDrmSchemeName.PLAYREADY = "playReady.PLAYREADY";
KalturaDrmSchemeName.WIDEVINE = "widevine.WIDEVINE";

function KalturaDropFolderErrorCode(){
}
KalturaDropFolderErrorCode.ERROR_CONNECT = "1";
KalturaDropFolderErrorCode.ERROR_AUTENTICATE = "2";
KalturaDropFolderErrorCode.ERROR_GET_PHISICAL_FILE_LIST = "3";
KalturaDropFolderErrorCode.ERROR_GET_DB_FILE_LIST = "4";
KalturaDropFolderErrorCode.DROP_FOLDER_APP_ERROR = "5";
KalturaDropFolderErrorCode.CONTENT_MATCH_POLICY_UNDEFINED = "6";
KalturaDropFolderErrorCode.MISSING_CONFIG = "7";

function KalturaDropFolderFileErrorCode(){
}
KalturaDropFolderFileErrorCode.ERROR_ADDING_BULK_UPLOAD = "dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD";
KalturaDropFolderFileErrorCode.ERROR_ADD_CONTENT_RESOURCE = "dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE";
KalturaDropFolderFileErrorCode.ERROR_IN_BULK_UPLOAD = "dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD";
KalturaDropFolderFileErrorCode.ERROR_WRITING_TEMP_FILE = "dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_CHECKSUM = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_SIZE = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE";
KalturaDropFolderFileErrorCode.MALFORMED_XML_FILE = "dropFolderXmlBulkUpload.MALFORMED_XML_FILE";
KalturaDropFolderFileErrorCode.XML_FILE_SIZE_EXCEED_LIMIT = "dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT";
KalturaDropFolderFileErrorCode.ERROR_UPDATE_ENTRY = "1";
KalturaDropFolderFileErrorCode.ERROR_ADD_ENTRY = "2";
KalturaDropFolderFileErrorCode.FLAVOR_NOT_FOUND = "3";
KalturaDropFolderFileErrorCode.FLAVOR_MISSING_IN_FILE_NAME = "4";
KalturaDropFolderFileErrorCode.SLUG_REGEX_NO_MATCH = "5";
KalturaDropFolderFileErrorCode.ERROR_READING_FILE = "6";
KalturaDropFolderFileErrorCode.ERROR_DOWNLOADING_FILE = "7";
KalturaDropFolderFileErrorCode.ERROR_UPDATE_FILE = "8";
KalturaDropFolderFileErrorCode.ERROR_ADDING_CONTENT_PROCESSOR = "10";
KalturaDropFolderFileErrorCode.ERROR_IN_CONTENT_PROCESSOR = "11";
KalturaDropFolderFileErrorCode.ERROR_DELETING_FILE = "12";
KalturaDropFolderFileErrorCode.FILE_NO_MATCH = "13";

function KalturaDropFolderFileHandlerType(){
}
KalturaDropFolderFileHandlerType.TR_RDS = "TrRdsSyncDropFolder.TR_RDS";
KalturaDropFolderFileHandlerType.XML = "dropFolderXmlBulkUpload.XML";
KalturaDropFolderFileHandlerType.ICAL = "scheduleDropFolder.ICAL";
KalturaDropFolderFileHandlerType.CONTENT = "1";

function KalturaDropFolderFileOrderBy(){
}
KalturaDropFolderFileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderFileOrderBy.FILE_NAME_ASC = "+fileName";
KalturaDropFolderFileOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC = "+fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.ID_ASC = "+id";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_ASC = "+parsedFlavor";
KalturaDropFolderFileOrderBy.PARSED_SLUG_ASC = "+parsedSlug";
KalturaDropFolderFileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderFileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderFileOrderBy.FILE_NAME_DESC = "-fileName";
KalturaDropFolderFileOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC = "-fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.ID_DESC = "-id";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_DESC = "-parsedFlavor";
KalturaDropFolderFileOrderBy.PARSED_SLUG_DESC = "-parsedSlug";
KalturaDropFolderFileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderOrderBy(){
}
KalturaDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderOrderBy.ID_ASC = "+id";
KalturaDropFolderOrderBy.NAME_ASC = "+name";
KalturaDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderOrderBy.ID_DESC = "-id";
KalturaDropFolderOrderBy.NAME_DESC = "-name";
KalturaDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderType(){
}
KalturaDropFolderType.AP_FEED = "ApFeedDropFolder.AP_FEED";
KalturaDropFolderType.FEED = "FeedDropFolder.FEED";
KalturaDropFolderType.MS_TEAMS = "MicrosoftTeamsDropFolder.MS_TEAMS";
KalturaDropFolderType.S3DROPFOLDER = "S3DropFolder.S3DROPFOLDER";
KalturaDropFolderType.TR_RDS_COMPANY = "TrRdsSyncDropFolder.TR_RDS_COMPANY";
KalturaDropFolderType.TR_RDS_TMCTERM = "TrRdsSyncDropFolder.TR_RDS_TMCTERM";
KalturaDropFolderType.WEBEX_API = "WebexAPIDropFolder.WEBEX_API";
KalturaDropFolderType.WEBEX = "WebexDropFolder.WEBEX";
KalturaDropFolderType.ZOOM = "ZoomDropFolder.ZOOM";
KalturaDropFolderType.LOCAL = "1";
KalturaDropFolderType.FTP = "2";
KalturaDropFolderType.SCP = "3";
KalturaDropFolderType.SFTP = "4";
KalturaDropFolderType.S3 = "6";

function KalturaDurationType(){
}
KalturaDurationType.LONG = "long";
KalturaDurationType.MEDIUM = "medium";
KalturaDurationType.NOT_AVAILABLE = "notavailable";
KalturaDurationType.SHORT = "short";

function KalturaESearchCaptionFieldName(){
}
KalturaESearchCaptionFieldName.CAPTION_ASSET_ID = "caption_asset_id";
KalturaESearchCaptionFieldName.CONTENT = "content";
KalturaESearchCaptionFieldName.END_TIME = "end_time";
KalturaESearchCaptionFieldName.LABEL = "label";
KalturaESearchCaptionFieldName.LANGUAGE = "language";
KalturaESearchCaptionFieldName.START_TIME = "start_time";

function KalturaESearchCategoryAggregateByFieldName(){
}
KalturaESearchCategoryAggregateByFieldName.CATEGORY_NAME = "category_name";

function KalturaESearchCategoryEntryFieldName(){
}
KalturaESearchCategoryEntryFieldName.ANCESTOR_ID = "ancestor_id";
KalturaESearchCategoryEntryFieldName.ANCESTOR_NAME = "ancestor_name";
KalturaESearchCategoryEntryFieldName.FULL_IDS = "full_ids";
KalturaESearchCategoryEntryFieldName.ID = "id";
KalturaESearchCategoryEntryFieldName.NAME = "name";

function KalturaESearchCategoryFieldName(){
}
KalturaESearchCategoryFieldName.CONTRIBUTION_POLICY = "contribution_policy";
KalturaESearchCategoryFieldName.CREATED_AT = "created_at";
KalturaESearchCategoryFieldName.DEPTH = "depth";
KalturaESearchCategoryFieldName.DESCRIPTION = "description";
KalturaESearchCategoryFieldName.DIRECT_ENTRIES_COUNT = "direct_entries_count";
KalturaESearchCategoryFieldName.DIRECT_SUB_CATEGORIES_COUNT = "direct_sub_categories_count";
KalturaESearchCategoryFieldName.DISPLAY_IN_SEARCH = "display_in_search";
KalturaESearchCategoryFieldName.ENTRIES_COUNT = "entries_count";
KalturaESearchCategoryFieldName.FULL_IDS = "full_ids";
KalturaESearchCategoryFieldName.FULL_NAME = "full_name";
KalturaESearchCategoryFieldName.ID = "id";
KalturaESearchCategoryFieldName.INHERITANCE_TYPE = "inheritance_type";
KalturaESearchCategoryFieldName.INHERITED_PARENT_ID = "inherited_parent_id";
KalturaESearchCategoryFieldName.MEMBERS_COUNT = "members_count";
KalturaESearchCategoryFieldName.MODERATION = "moderation";
KalturaESearchCategoryFieldName.NAME = "name";
KalturaESearchCategoryFieldName.PARENT_ID = "parent_id";
KalturaESearchCategoryFieldName.PENDING_ENTRIES_COUNT = "pending_entries_count";
KalturaESearchCategoryFieldName.PENDING_MEMBERS_COUNT = "pending_members_count";
KalturaESearchCategoryFieldName.PRIVACY = "privacy";
KalturaESearchCategoryFieldName.PRIVACY_CONTEXT = "privacy_context";
KalturaESearchCategoryFieldName.PRIVACY_CONTEXTS = "privacy_contexts";
KalturaESearchCategoryFieldName.REFERENCE_ID = "reference_id";
KalturaESearchCategoryFieldName.TAGS = "tags";
KalturaESearchCategoryFieldName.UPDATED_AT = "updated_at";
KalturaESearchCategoryFieldName.USER_ID = "user_id";

function KalturaESearchCategoryOrderByFieldName(){
}
KalturaESearchCategoryOrderByFieldName.CREATED_AT = "created_at";
KalturaESearchCategoryOrderByFieldName.ENTRIES_COUNT = "entries_count";
KalturaESearchCategoryOrderByFieldName.MEMBERS_COUNT = "members_count";
KalturaESearchCategoryOrderByFieldName.NAME = "name";
KalturaESearchCategoryOrderByFieldName.UPDATED_AT = "updated_at";

function KalturaESearchCategoryUserFieldName(){
}
KalturaESearchCategoryUserFieldName.USER_ID = "user_id";

function KalturaESearchCuePointAggregateByFieldName(){
}
KalturaESearchCuePointAggregateByFieldName.TAGS = "tags";
KalturaESearchCuePointAggregateByFieldName.TYPE = "type";

function KalturaESearchCuePointFieldName(){
}
KalturaESearchCuePointFieldName.ANSWERS = "answers";
KalturaESearchCuePointFieldName.END_TIME = "end_time";
KalturaESearchCuePointFieldName.EXPLANATION = "explanation";
KalturaESearchCuePointFieldName.HINT = "hint";
KalturaESearchCuePointFieldName.ID = "id";
KalturaESearchCuePointFieldName.NAME = "name";
KalturaESearchCuePointFieldName.QUESTION = "question";
KalturaESearchCuePointFieldName.START_TIME = "start_time";
KalturaESearchCuePointFieldName.SUB_TYPE = "sub_type";
KalturaESearchCuePointFieldName.TAGS = "tags";
KalturaESearchCuePointFieldName.TEXT = "text";
KalturaESearchCuePointFieldName.TYPE = "type";

function KalturaESearchEntryAggregateByFieldName(){
}
KalturaESearchEntryAggregateByFieldName.ACCESS_CONTROL_PROFILE = "access_control_profile_id";
KalturaESearchEntryAggregateByFieldName.ENTRY_TYPE = "entry_type";
KalturaESearchEntryAggregateByFieldName.MEDIA_TYPE = "media_type";
KalturaESearchEntryAggregateByFieldName.TAGS = "tags";

function KalturaESearchEntryFieldName(){
}
KalturaESearchEntryFieldName.ACCESS_CONTROL_ID = "access_control_id";
KalturaESearchEntryFieldName.ADMIN_TAGS = "admin_tags";
KalturaESearchEntryFieldName.BROADCAST_ENTRY_ID = "broadcast_entry_id";
KalturaESearchEntryFieldName.CAPTIONS_CONTENT = "captions_content";
KalturaESearchEntryFieldName.CONVERSION_PROFILE_ID = "conversion_profile_id";
KalturaESearchEntryFieldName.CREATED_AT = "created_at";
KalturaESearchEntryFieldName.CREATOR_ID = "creator_kuser_id";
KalturaESearchEntryFieldName.CREDIT = "credit";
KalturaESearchEntryFieldName.DESCRIPTION = "description";
KalturaESearchEntryFieldName.DISPLAY_IN_SEARCH = "display_in_search";
KalturaESearchEntryFieldName.END_DATE = "end_date";
KalturaESearchEntryFieldName.ENTITLED_USER_EDIT = "entitled_kusers_edit";
KalturaESearchEntryFieldName.ENTITLED_USER_PUBLISH = "entitled_kusers_publish";
KalturaESearchEntryFieldName.ENTITLED_USER_VIEW = "entitled_kusers_view";
KalturaESearchEntryFieldName.ENTRY_TYPE = "entry_type";
KalturaESearchEntryFieldName.EXTERNAL_SOURCE_TYPE = "external_source_type";
KalturaESearchEntryFieldName.ID = "id";
KalturaESearchEntryFieldName.IS_LIVE = "is_live";
KalturaESearchEntryFieldName.IS_QUIZ = "is_quiz";
KalturaESearchEntryFieldName.USER_ID = "kuser_id";
KalturaESearchEntryFieldName.LAST_PLAYED_AT = "last_played_at";
KalturaESearchEntryFieldName.LENGTH_IN_MSECS = "length_in_msecs";
KalturaESearchEntryFieldName.MEDIA_TYPE = "media_type";
KalturaESearchEntryFieldName.MODERATION_STATUS = "moderation_status";
KalturaESearchEntryFieldName.NAME = "name";
KalturaESearchEntryFieldName.PARENT_ENTRY_ID = "parent_id";
KalturaESearchEntryFieldName.PARTNER_SORT_VALUE = "partner_sort_value";
KalturaESearchEntryFieldName.PLAYS = "plays";
KalturaESearchEntryFieldName.PUSH_PUBLISH = "push_publish";
KalturaESearchEntryFieldName.RANK = "rank";
KalturaESearchEntryFieldName.RECORDED_ENTRY_ID = "recorded_entry_id";
KalturaESearchEntryFieldName.RECYCLED_AT = "recycled_at";
KalturaESearchEntryFieldName.REDIRECT_ENTRY_ID = "redirect_entry_id";
KalturaESearchEntryFieldName.REFERENCE_ID = "reference_id";
KalturaESearchEntryFieldName.ROOM_TYPE = "room_type";
KalturaESearchEntryFieldName.ROOT_ID = "root_id";
KalturaESearchEntryFieldName.SITE_URL = "site_url";
KalturaESearchEntryFieldName.SOURCE_TYPE = "source_type";
KalturaESearchEntryFieldName.START_DATE = "start_date";
KalturaESearchEntryFieldName.TAGS = "tags";
KalturaESearchEntryFieldName.TEMPLATE_ENTRY_ID = "template_entry_id";
KalturaESearchEntryFieldName.UPDATED_AT = "updated_at";
KalturaESearchEntryFieldName.USER_NAMES = "user_names";
KalturaESearchEntryFieldName.VOTES = "votes";

function KalturaESearchEntryOrderByFieldName(){
}
KalturaESearchEntryOrderByFieldName.CREATED_AT = "created_at";
KalturaESearchEntryOrderByFieldName.END_DATE = "end_date";
KalturaESearchEntryOrderByFieldName.LAST_PLAYED_AT = "last_played_at";
KalturaESearchEntryOrderByFieldName.NAME = "name";
KalturaESearchEntryOrderByFieldName.PLAYS = "plays";
KalturaESearchEntryOrderByFieldName.PLAYS_LAST_1_DAY = "plays_last_1_day";
KalturaESearchEntryOrderByFieldName.PLAYS_LAST_30_DAYS = "plays_last_30_days";
KalturaESearchEntryOrderByFieldName.PLAYS_LAST_7_DAYS = "plays_last_7_days";
KalturaESearchEntryOrderByFieldName.RANK = "rank";
KalturaESearchEntryOrderByFieldName.RECYCLED_AT = "recycled_at";
KalturaESearchEntryOrderByFieldName.START_DATE = "start_date";
KalturaESearchEntryOrderByFieldName.UPDATED_AT = "updated_at";
KalturaESearchEntryOrderByFieldName.VIEWS = "views";
KalturaESearchEntryOrderByFieldName.VIEWS_LAST_1_DAY = "views_last_1_day";
KalturaESearchEntryOrderByFieldName.VIEWS_LAST_30_DAYS = "views_last_30_days";
KalturaESearchEntryOrderByFieldName.VIEWS_LAST_7_DAYS = "views_last_7_days";
KalturaESearchEntryOrderByFieldName.VOTES = "votes";

function KalturaESearchGroupFieldName(){
}
KalturaESearchGroupFieldName.CAPABILITIES = "capabilities";
KalturaESearchGroupFieldName.COMPANY = "company";
KalturaESearchGroupFieldName.COUNTRY = "country";
KalturaESearchGroupFieldName.CREATED_AT = "created_at";
KalturaESearchGroupFieldName.EMAIL = "email";
KalturaESearchGroupFieldName.EXTERNAL_ID = "external_id";
KalturaESearchGroupFieldName.FIRST_NAME = "first_name";
KalturaESearchGroupFieldName.FULL_NAME = "full_name";
KalturaESearchGroupFieldName.GROUP_IDS = "group_ids";
KalturaESearchGroupFieldName.IS_ADMIN = "is_admin";
KalturaESearchGroupFieldName.IS_HASHED = "is_hashed";
KalturaESearchGroupFieldName.LAST_NAME = "last_name";
KalturaESearchGroupFieldName.LOGIN_ENABLED = "login_enabled";
KalturaESearchGroupFieldName.PERMISSION_NAMES = "permission_names";
KalturaESearchGroupFieldName.ROLE_IDS = "role_ids";
KalturaESearchGroupFieldName.SCREEN_NAME = "screen_name";
KalturaESearchGroupFieldName.TAGS = "tags";
KalturaESearchGroupFieldName.TITLE = "title";
KalturaESearchGroupFieldName.UPDATED_AT = "updated_at";
KalturaESearchGroupFieldName.USER_ID = "user_id";

function KalturaESearchGroupOrderByFieldName(){
}
KalturaESearchGroupOrderByFieldName.CREATED_AT = "created_at";
KalturaESearchGroupOrderByFieldName.FULL_NAME = "full_name";
KalturaESearchGroupOrderByFieldName.MEMBERS_COUNT = "members_count";
KalturaESearchGroupOrderByFieldName.USER_ID = "puser_id";
KalturaESearchGroupOrderByFieldName.SCREEN_NAME = "screen_name";
KalturaESearchGroupOrderByFieldName.UPDATED_AT = "updated_at";

function KalturaESearchHistoryAggregateFieldName(){
}
KalturaESearchHistoryAggregateFieldName.SEARCH_TERM = "search_term";

function KalturaESearchLanguage(){
}
KalturaESearchLanguage.ARABIC = "Arabic";
KalturaESearchLanguage.BASQUE = "Basque";
KalturaESearchLanguage.BRAZILIAN = "Brazilian";
KalturaESearchLanguage.BULGARIAN = "Bulgarian";
KalturaESearchLanguage.CATALAN = "Catalan";
KalturaESearchLanguage.CHINESE = "Chinese";
KalturaESearchLanguage.CZECH = "Czech";
KalturaESearchLanguage.DANISH = "Danish";
KalturaESearchLanguage.DUTCH = "Dutch";
KalturaESearchLanguage.ENGLISH = "English";
KalturaESearchLanguage.FINNISH = "Finnish";
KalturaESearchLanguage.FRENCH = "French";
KalturaESearchLanguage.GALICIAN = "Galician";
KalturaESearchLanguage.GERMAN = "German";
KalturaESearchLanguage.GREEK = "Greek";
KalturaESearchLanguage.HINDI = "Hindi";
KalturaESearchLanguage.HUNGRIAN = "Hungarian";
KalturaESearchLanguage.INDONESIAN = "Indonesian";
KalturaESearchLanguage.ITALIAN = "Italian";
KalturaESearchLanguage.JAPANESE = "Japanese";
KalturaESearchLanguage.KOREAN = "Korean";
KalturaESearchLanguage.LATVIAN = "Latvian";
KalturaESearchLanguage.LITHUANIAN = "Lithuanian";
KalturaESearchLanguage.NORWEGIAN = "Norwegian";
KalturaESearchLanguage.PERSIAN = "Persian";
KalturaESearchLanguage.PORTUGUESE = "Prtuguese";
KalturaESearchLanguage.ROMANIAN = "Romanian";
KalturaESearchLanguage.RUSSIAN = "Russian";
KalturaESearchLanguage.SORANI = "Sorani";
KalturaESearchLanguage.SPANISH = "Spanish";
KalturaESearchLanguage.SWEDISH = "Swedish";
KalturaESearchLanguage.THAI = "Thai";
KalturaESearchLanguage.TURKISH = "Turkish";

function KalturaESearchMetadataAggregateByFieldName(){
}

function KalturaESearchSortOrder(){
}
KalturaESearchSortOrder.ORDER_BY_ASC = "asc";
KalturaESearchSortOrder.ORDER_BY_DESC = "desc";

function KalturaESearchUserFieldName(){
}
KalturaESearchUserFieldName.CAPABILITIES = "capabilities";
KalturaESearchUserFieldName.COMPANY = "company";
KalturaESearchUserFieldName.COUNTRY = "country";
KalturaESearchUserFieldName.CREATED_AT = "created_at";
KalturaESearchUserFieldName.EMAIL = "email";
KalturaESearchUserFieldName.EXTERNAL_ID = "external_id";
KalturaESearchUserFieldName.FIRST_NAME = "first_name";
KalturaESearchUserFieldName.FULL_NAME = "full_name";
KalturaESearchUserFieldName.GROUP_IDS = "group_ids";
KalturaESearchUserFieldName.IS_ADMIN = "is_admin";
KalturaESearchUserFieldName.IS_HASHED = "is_hashed";
KalturaESearchUserFieldName.LAST_NAME = "last_name";
KalturaESearchUserFieldName.LOGIN_ENABLED = "login_enabled";
KalturaESearchUserFieldName.PERMISSION_NAMES = "permission_names";
KalturaESearchUserFieldName.ROLE_IDS = "role_ids";
KalturaESearchUserFieldName.SCREEN_NAME = "screen_name";
KalturaESearchUserFieldName.TAGS = "tags";
KalturaESearchUserFieldName.TITLE = "title";
KalturaESearchUserFieldName.UPDATED_AT = "updated_at";
KalturaESearchUserFieldName.USER_ID = "user_id";
KalturaESearchUserFieldName.TYPE = "user_type";

function KalturaESearchUserOrderByFieldName(){
}
KalturaESearchUserOrderByFieldName.CREATED_AT = "created_at";
KalturaESearchUserOrderByFieldName.FULL_NAME = "full_name";
KalturaESearchUserOrderByFieldName.USER_ID = "puser_id";
KalturaESearchUserOrderByFieldName.SCREEN_NAME = "screen_name";
KalturaESearchUserOrderByFieldName.UPDATED_AT = "updated_at";

function KalturaEdgeServerNodeOrderBy(){
}
KalturaEdgeServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEdgeServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaEdgeServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEdgeServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEdgeServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaEdgeServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEmailNotificationFormat(){
}
KalturaEmailNotificationFormat.HTML = "1";
KalturaEmailNotificationFormat.TEXT = "2";

function KalturaEmailNotificationRecipientProviderType(){
}
KalturaEmailNotificationRecipientProviderType.STATIC_LIST = "1";
KalturaEmailNotificationRecipientProviderType.CATEGORY = "2";
KalturaEmailNotificationRecipientProviderType.USER = "3";
KalturaEmailNotificationRecipientProviderType.GROUP = "4";

function KalturaEmailNotificationTemplateOrderBy(){
}
KalturaEmailNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEmailNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEmailNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEmailNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEntryApplication(){
}
KalturaEntryApplication.KMC = "0";
KalturaEntryApplication.KMS = "1";
KalturaEntryApplication.KAF = "2";
KalturaEntryApplication.PITCH = "3";
KalturaEntryApplication.KMS_GO = "4";
KalturaEntryApplication.WEBCAST_APP = "5";
KalturaEntryApplication.PERSONAL_CAPTURE = "6";
KalturaEntryApplication.KALTURA_MEETING = "7";
KalturaEntryApplication.EP = "8";

function KalturaEntryDistributionOrderBy(){
}
KalturaEntryDistributionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_ASC = "+submittedAt";
KalturaEntryDistributionOrderBy.SUNRISE_ASC = "+sunrise";
KalturaEntryDistributionOrderBy.SUNSET_ASC = "+sunset";
KalturaEntryDistributionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryDistributionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_DESC = "-submittedAt";
KalturaEntryDistributionOrderBy.SUNRISE_DESC = "-sunrise";
KalturaEntryDistributionOrderBy.SUNSET_DESC = "-sunset";
KalturaEntryDistributionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEntryIdentifierField(){
}
KalturaEntryIdentifierField.ID = "id";
KalturaEntryIdentifierField.REFERENCE_ID = "referenceId";

function KalturaEntryReplacementStatus(){
}
KalturaEntryReplacementStatus.NONE = "0";
KalturaEntryReplacementStatus.APPROVED_BUT_NOT_READY = "1";
KalturaEntryReplacementStatus.READY_BUT_NOT_APPROVED = "2";
KalturaEntryReplacementStatus.NOT_READY_AND_NOT_APPROVED = "3";
KalturaEntryReplacementStatus.FAILED = "4";

function KalturaEntryScheduleEventOrderBy(){
}
KalturaEntryScheduleEventOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryScheduleEventOrderBy.END_DATE_ASC = "+endDate";
KalturaEntryScheduleEventOrderBy.PRIORITY_ASC = "+priority";
KalturaEntryScheduleEventOrderBy.START_DATE_ASC = "+startDate";
KalturaEntryScheduleEventOrderBy.SUMMARY_ASC = "+summary";
KalturaEntryScheduleEventOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryScheduleEventOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryScheduleEventOrderBy.END_DATE_DESC = "-endDate";
KalturaEntryScheduleEventOrderBy.PRIORITY_DESC = "-priority";
KalturaEntryScheduleEventOrderBy.START_DATE_DESC = "-startDate";
KalturaEntryScheduleEventOrderBy.SUMMARY_DESC = "-summary";
KalturaEntryScheduleEventOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEntryServerNodeOrderBy(){
}
KalturaEntryServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEntryServerNodeType(){
}
KalturaEntryServerNodeType.LIVE_PRIMARY = "0";
KalturaEntryServerNodeType.LIVE_BACKUP = "1";
KalturaEntryServerNodeType.LIVE_CLIPPING_TASK = "2";

function KalturaEntryStatus(){
}
KalturaEntryStatus.ERROR_IMPORTING = "-2";
KalturaEntryStatus.ERROR_CONVERTING = "-1";
KalturaEntryStatus.IMPORT = "0";
KalturaEntryStatus.INFECTED = "virusScan.Infected";
KalturaEntryStatus.SCAN_FAILURE = "virusScan.ScanFailure";
KalturaEntryStatus.PRECONVERT = "1";
KalturaEntryStatus.READY = "2";
KalturaEntryStatus.DELETED = "3";
KalturaEntryStatus.PENDING = "4";
KalturaEntryStatus.MODERATE = "5";
KalturaEntryStatus.BLOCKED = "6";
KalturaEntryStatus.NO_CONTENT = "7";

function KalturaEntryType(){
}
KalturaEntryType.AUTOMATIC = "-1";
KalturaEntryType.CONFERENCE_ENTRY_SERVER = "conference.CONFERENCE_ENTRY_SERVER";
KalturaEntryType.EXTERNAL_MEDIA = "externalMedia.externalMedia";
KalturaEntryType.ROOM = "room.room";
KalturaEntryType.SIP_ENTRY_SERVER = "sip.SIP_ENTRY_SERVER";
KalturaEntryType.MEDIA_CLIP = "1";
KalturaEntryType.MIX = "2";
KalturaEntryType.PLAYLIST = "5";
KalturaEntryType.DATA = "6";
KalturaEntryType.LIVE_STREAM = "7";
KalturaEntryType.LIVE_CHANNEL = "8";
KalturaEntryType.DOCUMENT = "10";

function KalturaEntryVendorTaskOrderBy(){
}
KalturaEntryVendorTaskOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryVendorTaskOrderBy.EXPECTED_FINISH_TIME_ASC = "+expectedFinishTime";
KalturaEntryVendorTaskOrderBy.FINISH_TIME_ASC = "+finishTime";
KalturaEntryVendorTaskOrderBy.ID_ASC = "+id";
KalturaEntryVendorTaskOrderBy.PRICE_ASC = "+price";
KalturaEntryVendorTaskOrderBy.QUEUE_TIME_ASC = "+queueTime";
KalturaEntryVendorTaskOrderBy.STATUS_ASC = "+status";
KalturaEntryVendorTaskOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryVendorTaskOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryVendorTaskOrderBy.EXPECTED_FINISH_TIME_DESC = "-expectedFinishTime";
KalturaEntryVendorTaskOrderBy.FINISH_TIME_DESC = "-finishTime";
KalturaEntryVendorTaskOrderBy.ID_DESC = "-id";
KalturaEntryVendorTaskOrderBy.PRICE_DESC = "-price";
KalturaEntryVendorTaskOrderBy.QUEUE_TIME_DESC = "-queueTime";
KalturaEntryVendorTaskOrderBy.STATUS_DESC = "-status";
KalturaEntryVendorTaskOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEsearchGroupUserFieldName(){
}
KalturaEsearchGroupUserFieldName.GROUP_IDS = "group_ids";

function KalturaEventCuePointOrderBy(){
}
KalturaEventCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEventCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaEventCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaEventCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaEventCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaEventCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEventCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEventCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaEventCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaEventCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaEventCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaEventCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEventNotificationEventObjectType(){
}
KalturaEventNotificationEventObjectType.AD_CUE_POINT = "adCuePointEventNotifications.AdCuePoint";
KalturaEventNotificationEventObjectType.ANNOTATION = "annotationEventNotifications.Annotation";
KalturaEventNotificationEventObjectType.ATTACHMENT_ASSET = "attachmentAssetEventNotifications.AttachmentAsset";
KalturaEventNotificationEventObjectType.CAPTION_ASSET = "captionAssetEventNotifications.CaptionAsset";
KalturaEventNotificationEventObjectType.CODE_CUE_POINT = "codeCuePointEventNotifications.CodeCuePoint";
KalturaEventNotificationEventObjectType.DISTRIBUTION_PROFILE = "contentDistributionEventNotifications.DistributionProfile";
KalturaEventNotificationEventObjectType.ENTRY_DISTRIBUTION = "contentDistributionEventNotifications.EntryDistribution";
KalturaEventNotificationEventObjectType.CUE_POINT = "cuePointEventNotifications.CuePoint";
KalturaEventNotificationEventObjectType.DROP_FOLDER = "dropFolderEventNotifications.DropFolder";
KalturaEventNotificationEventObjectType.DROP_FOLDER_FILE = "dropFolderEventNotifications.DropFolderFile";
KalturaEventNotificationEventObjectType.METADATA = "metadataEventNotifications.Metadata";
KalturaEventNotificationEventObjectType.TRANSCRIPT_ASSET = "transcriptAssetEventNotifications.TranscriptAsset";
KalturaEventNotificationEventObjectType.VIRTUAL_EVENT = "virtualEventEventNotifications.VirtualEvent";
KalturaEventNotificationEventObjectType.ENTRY = "1";
KalturaEventNotificationEventObjectType.CATEGORY = "2";
KalturaEventNotificationEventObjectType.ASSET = "3";
KalturaEventNotificationEventObjectType.FLAVORASSET = "4";
KalturaEventNotificationEventObjectType.THUMBASSET = "5";
KalturaEventNotificationEventObjectType.KUSER = "8";
KalturaEventNotificationEventObjectType.ACCESSCONTROL = "9";
KalturaEventNotificationEventObjectType.BATCHJOB = "10";
KalturaEventNotificationEventObjectType.BULKUPLOADRESULT = "11";
KalturaEventNotificationEventObjectType.CATEGORYKUSER = "12";
KalturaEventNotificationEventObjectType.CONVERSIONPROFILE2 = "14";
KalturaEventNotificationEventObjectType.FLAVORPARAMS = "15";
KalturaEventNotificationEventObjectType.FLAVORPARAMSCONVERSIONPROFILE = "16";
KalturaEventNotificationEventObjectType.FLAVORPARAMSOUTPUT = "17";
KalturaEventNotificationEventObjectType.GENERICSYNDICATIONFEED = "18";
KalturaEventNotificationEventObjectType.KUSERTOUSERROLE = "19";
KalturaEventNotificationEventObjectType.PARTNER = "20";
KalturaEventNotificationEventObjectType.PERMISSION = "21";
KalturaEventNotificationEventObjectType.PERMISSIONITEM = "22";
KalturaEventNotificationEventObjectType.PERMISSIONTOPERMISSIONITEM = "23";
KalturaEventNotificationEventObjectType.SCHEDULER = "24";
KalturaEventNotificationEventObjectType.SCHEDULERCONFIG = "25";
KalturaEventNotificationEventObjectType.SCHEDULERSTATUS = "26";
KalturaEventNotificationEventObjectType.SCHEDULERWORKER = "27";
KalturaEventNotificationEventObjectType.STORAGEPROFILE = "28";
KalturaEventNotificationEventObjectType.SYNDICATIONFEED = "29";
KalturaEventNotificationEventObjectType.THUMBPARAMS = "31";
KalturaEventNotificationEventObjectType.THUMBPARAMSOUTPUT = "32";
KalturaEventNotificationEventObjectType.UPLOADTOKEN = "33";
KalturaEventNotificationEventObjectType.USERLOGINDATA = "34";
KalturaEventNotificationEventObjectType.USERROLE = "35";
KalturaEventNotificationEventObjectType.WIDGET = "36";
KalturaEventNotificationEventObjectType.CATEGORYENTRY = "37";
KalturaEventNotificationEventObjectType.LIVE_STREAM = "38";
KalturaEventNotificationEventObjectType.SERVER_NODE = "39";
KalturaEventNotificationEventObjectType.ENTRY_SERVER_NODE = "40";
KalturaEventNotificationEventObjectType.REACH_PROFILE = "41";
KalturaEventNotificationEventObjectType.ENTRY_VENDOR_TASK = "42";

function KalturaEventNotificationEventType(){
}
KalturaEventNotificationEventType.INTEGRATION_JOB_CLOSED = "integrationEventNotifications.INTEGRATION_JOB_CLOSED";
KalturaEventNotificationEventType.BATCH_JOB_STATUS = "1";
KalturaEventNotificationEventType.OBJECT_ADDED = "2";
KalturaEventNotificationEventType.OBJECT_CHANGED = "3";
KalturaEventNotificationEventType.OBJECT_COPIED = "4";
KalturaEventNotificationEventType.OBJECT_CREATED = "5";
KalturaEventNotificationEventType.OBJECT_DATA_CHANGED = "6";
KalturaEventNotificationEventType.OBJECT_DELETED = "7";
KalturaEventNotificationEventType.OBJECT_ERASED = "8";
KalturaEventNotificationEventType.OBJECT_READY_FOR_REPLACMENT = "9";
KalturaEventNotificationEventType.OBJECT_SAVED = "10";
KalturaEventNotificationEventType.OBJECT_UPDATED = "11";
KalturaEventNotificationEventType.OBJECT_REPLACED = "12";
KalturaEventNotificationEventType.OBJECT_READY_FOR_INDEX = "13";

function KalturaEventNotificationTemplateOrderBy(){
}
KalturaEventNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEventNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaEventNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEventNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEventNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaEventNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEventNotificationTemplateType(){
}
KalturaEventNotificationTemplateType.BOOLEAN = "booleanNotification.Boolean";
KalturaEventNotificationTemplateType.BPM_ABORT = "businessProcessNotification.BusinessProcessAbort";
KalturaEventNotificationTemplateType.BPM_SIGNAL = "businessProcessNotification.BusinessProcessSignal";
KalturaEventNotificationTemplateType.BPM_START = "businessProcessNotification.BusinessProcessStart";
KalturaEventNotificationTemplateType.EMAIL = "emailNotification.Email";
KalturaEventNotificationTemplateType.HTTP = "httpNotification.Http";
KalturaEventNotificationTemplateType.KAFKA = "kafkaNotification.Kafka";
KalturaEventNotificationTemplateType.PUSH = "pushNotification.Push";

function KalturaEventType(){
}
KalturaEventType.BROADCAST_START = "1";
KalturaEventType.BROADCAST_END = "2";

function KalturaExternalMediaEntryCompareAttribute(){
}
KalturaExternalMediaEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaExternalMediaEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaExternalMediaEntryCompareAttribute.END_DATE = "endDate";
KalturaExternalMediaEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaExternalMediaEntryCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaExternalMediaEntryCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaExternalMediaEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaExternalMediaEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaExternalMediaEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaExternalMediaEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaExternalMediaEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaExternalMediaEntryCompareAttribute.PLAYS = "plays";
KalturaExternalMediaEntryCompareAttribute.RANK = "rank";
KalturaExternalMediaEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaExternalMediaEntryCompareAttribute.START_DATE = "startDate";
KalturaExternalMediaEntryCompareAttribute.STATUS = "status";
KalturaExternalMediaEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaExternalMediaEntryCompareAttribute.TYPE = "type";
KalturaExternalMediaEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaExternalMediaEntryCompareAttribute.VIEWS = "views";

function KalturaExternalMediaEntryMatchAttribute(){
}
KalturaExternalMediaEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaExternalMediaEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaExternalMediaEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaExternalMediaEntryMatchAttribute.DESCRIPTION = "description";
KalturaExternalMediaEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaExternalMediaEntryMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaExternalMediaEntryMatchAttribute.GROUP_ID = "groupId";
KalturaExternalMediaEntryMatchAttribute.ID = "id";
KalturaExternalMediaEntryMatchAttribute.NAME = "name";
KalturaExternalMediaEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaExternalMediaEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaExternalMediaEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaExternalMediaEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaExternalMediaEntryMatchAttribute.TAGS = "tags";
KalturaExternalMediaEntryMatchAttribute.USER_ID = "userId";

function KalturaExternalMediaEntryOrderBy(){
}
KalturaExternalMediaEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaExternalMediaEntryOrderBy.DURATION_ASC = "+duration";
KalturaExternalMediaEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaExternalMediaEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaExternalMediaEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaExternalMediaEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaExternalMediaEntryOrderBy.NAME_ASC = "+name";
KalturaExternalMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaExternalMediaEntryOrderBy.PLAYS_ASC = "+plays";
KalturaExternalMediaEntryOrderBy.RANK_ASC = "+rank";
KalturaExternalMediaEntryOrderBy.RECENT_ASC = "+recent";
KalturaExternalMediaEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaExternalMediaEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaExternalMediaEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaExternalMediaEntryOrderBy.VIEWS_ASC = "+views";
KalturaExternalMediaEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaExternalMediaEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaExternalMediaEntryOrderBy.DURATION_DESC = "-duration";
KalturaExternalMediaEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaExternalMediaEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaExternalMediaEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaExternalMediaEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaExternalMediaEntryOrderBy.NAME_DESC = "-name";
KalturaExternalMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaExternalMediaEntryOrderBy.PLAYS_DESC = "-plays";
KalturaExternalMediaEntryOrderBy.RANK_DESC = "-rank";
KalturaExternalMediaEntryOrderBy.RECENT_DESC = "-recent";
KalturaExternalMediaEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaExternalMediaEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaExternalMediaEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaExternalMediaEntryOrderBy.VIEWS_DESC = "-views";
KalturaExternalMediaEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaExternalMediaSourceType(){
}
KalturaExternalMediaSourceType.INTERCALL = "InterCall";
KalturaExternalMediaSourceType.YOUTUBE = "YouTube";

function KalturaFacebookDistributionProfileOrderBy(){
}
KalturaFacebookDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFacebookDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFacebookDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFacebookDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFacebookDistributionProviderOrderBy(){
}

function KalturaFileAssetObjectType(){
}
KalturaFileAssetObjectType.UI_CONF = "2";
KalturaFileAssetObjectType.ENTRY = "3";

function KalturaFileAssetOrderBy(){
}
KalturaFileAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFileAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFileAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFileAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFileAssetStatus(){
}
KalturaFileAssetStatus.PENDING = "0";
KalturaFileAssetStatus.UPLOADING = "1";
KalturaFileAssetStatus.READY = "2";
KalturaFileAssetStatus.DELETED = "3";
KalturaFileAssetStatus.ERROR = "4";

function KalturaFileSyncObjectType(){
}
KalturaFileSyncObjectType.DISTRIBUTION_PROFILE = "contentDistribution.DistributionProfile";
KalturaFileSyncObjectType.ENTRY_DISTRIBUTION = "contentDistribution.EntryDistribution";
KalturaFileSyncObjectType.GENERIC_DISTRIBUTION_ACTION = "contentDistribution.GenericDistributionAction";
KalturaFileSyncObjectType.EMAIL_NOTIFICATION_TEMPLATE = "emailNotification.EmailNotificationTemplate";
KalturaFileSyncObjectType.HTTP_NOTIFICATION_TEMPLATE = "httpNotification.HttpNotificationTemplate";
KalturaFileSyncObjectType.ENTRY = "1";
KalturaFileSyncObjectType.UICONF = "2";
KalturaFileSyncObjectType.BATCHJOB = "3";
KalturaFileSyncObjectType.ASSET = "4";
KalturaFileSyncObjectType.FLAVOR_ASSET = "4";
KalturaFileSyncObjectType.METADATA = "5";
KalturaFileSyncObjectType.METADATA_PROFILE = "6";
KalturaFileSyncObjectType.SYNDICATION_FEED = "7";
KalturaFileSyncObjectType.CONVERSION_PROFILE = "8";
KalturaFileSyncObjectType.FILE_ASSET = "9";

function KalturaFileSyncOrderBy(){
}
KalturaFileSyncOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFileSyncOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaFileSyncOrderBy.READY_AT_ASC = "+readyAt";
KalturaFileSyncOrderBy.SYNC_TIME_ASC = "+syncTime";
KalturaFileSyncOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFileSyncOrderBy.VERSION_ASC = "+version";
KalturaFileSyncOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFileSyncOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaFileSyncOrderBy.READY_AT_DESC = "-readyAt";
KalturaFileSyncOrderBy.SYNC_TIME_DESC = "-syncTime";
KalturaFileSyncOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaFileSyncOrderBy.VERSION_DESC = "-version";

function KalturaFlavorAssetOrderBy(){
}
KalturaFlavorAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFlavorAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaFlavorAssetOrderBy.SIZE_ASC = "+size";
KalturaFlavorAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFlavorAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFlavorAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaFlavorAssetOrderBy.SIZE_DESC = "-size";
KalturaFlavorAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFlavorParamsOrderBy(){
}

function KalturaFlavorParamsOutputOrderBy(){
}

function KalturaFreewheelDistributionProfileOrderBy(){
}
KalturaFreewheelDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFreewheelDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFreewheelDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFreewheelDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFreewheelDistributionProviderOrderBy(){
}

function KalturaFreewheelGenericDistributionProfileOrderBy(){
}
KalturaFreewheelGenericDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFreewheelGenericDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFreewheelGenericDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFreewheelGenericDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFreewheelGenericDistributionProviderOrderBy(){
}

function KalturaFtpDistributionProfileOrderBy(){
}
KalturaFtpDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFtpDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFtpDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFtpDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFtpDistributionProviderOrderBy(){
}

function KalturaFtpDropFolderOrderBy(){
}
KalturaFtpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFtpDropFolderOrderBy.ID_ASC = "+id";
KalturaFtpDropFolderOrderBy.NAME_ASC = "+name";
KalturaFtpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFtpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFtpDropFolderOrderBy.ID_DESC = "-id";
KalturaFtpDropFolderOrderBy.NAME_DESC = "-name";
KalturaFtpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFtpScheduledDistributionProviderOrderBy(){
}

function KalturaGameObjectType(){
}
KalturaGameObjectType.LEADERBOARD = "1";

function KalturaGenericDistributionProfileOrderBy(){
}
KalturaGenericDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderActionOrderBy(){
}
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderOrderBy(){
}
KalturaGenericDistributionProviderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericSyndicationFeedOrderBy(){
}
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericXsltSyndicationFeedOrderBy(){
}
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGeoCoderType(){
}
KalturaGeoCoderType.KALTURA = "1";
KalturaGeoCoderType.MAX_MIND = "2";
KalturaGeoCoderType.DIGITAL_ELEMENT = "3";

function KalturaGoogleSyndicationFeedAdultValues(){
}
KalturaGoogleSyndicationFeedAdultValues.NO = "No";
KalturaGoogleSyndicationFeedAdultValues.YES = "Yes";

function KalturaGoogleVideoSyndicationFeedOrderBy(){
}
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGroupUserOrderBy(){
}
KalturaGroupUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGroupUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGroupUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGroupUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaHttpNotificationCertificateType(){
}
KalturaHttpNotificationCertificateType.DER = "DER";
KalturaHttpNotificationCertificateType.ENG = "ENG";
KalturaHttpNotificationCertificateType.PEM = "PEM";

function KalturaHttpNotificationSslKeyType(){
}
KalturaHttpNotificationSslKeyType.DER = "DER";
KalturaHttpNotificationSslKeyType.ENG = "ENG";
KalturaHttpNotificationSslKeyType.PEM = "PEM";

function KalturaHttpNotificationTemplateOrderBy(){
}
KalturaHttpNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaHttpNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaHttpNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaHttpNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaHttpNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaHttpNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaHuluDistributionProfileOrderBy(){
}
KalturaHuluDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaHuluDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaHuluDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaHuluDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaHuluDistributionProviderOrderBy(){
}

function KalturaITunesSyndicationFeedAdultValues(){
}
KalturaITunesSyndicationFeedAdultValues.CLEAN = "clean";
KalturaITunesSyndicationFeedAdultValues.NO = "no";
KalturaITunesSyndicationFeedAdultValues.YES = "yes";

function KalturaITunesSyndicationFeedCategories(){
}
KalturaITunesSyndicationFeedCategories.ARTS = "Arts";
KalturaITunesSyndicationFeedCategories.ARTS_DESIGN = "Arts/Design";
KalturaITunesSyndicationFeedCategories.ARTS_FASHION_BEAUTY = "Arts/Fashion &amp; Beauty";
KalturaITunesSyndicationFeedCategories.ARTS_FOOD = "Arts/Food";
KalturaITunesSyndicationFeedCategories.ARTS_LITERATURE = "Arts/Literature";
KalturaITunesSyndicationFeedCategories.ARTS_PERFORMING_ARTS = "Arts/Performing Arts";
KalturaITunesSyndicationFeedCategories.ARTS_VISUAL_ARTS = "Arts/Visual Arts";
KalturaITunesSyndicationFeedCategories.BUSINESS = "Business";
KalturaITunesSyndicationFeedCategories.BUSINESS_BUSINESS_NEWS = "Business/Business News";
KalturaITunesSyndicationFeedCategories.BUSINESS_CAREERS = "Business/Careers";
KalturaITunesSyndicationFeedCategories.BUSINESS_INVESTING = "Business/Investing";
KalturaITunesSyndicationFeedCategories.BUSINESS_MANAGEMENT_MARKETING = "Business/Management &amp; Marketing";
KalturaITunesSyndicationFeedCategories.BUSINESS_SHOPPING = "Business/Shopping";
KalturaITunesSyndicationFeedCategories.COMEDY = "Comedy";
KalturaITunesSyndicationFeedCategories.EDUCATION = "Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_TECHNOLOGY = "Education/Education Technology";
KalturaITunesSyndicationFeedCategories.EDUCATION_HIGHER_EDUCATION = "Education/Higher Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_K_12 = "Education/K-12";
KalturaITunesSyndicationFeedCategories.EDUCATION_LANGUAGE_COURSES = "Education/Language Courses";
KalturaITunesSyndicationFeedCategories.EDUCATION_TRAINING = "Education/Training";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES = "Games &amp; Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AUTOMOTIVE = "Games &amp; Hobbies/Automotive";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AVIATION = "Games &amp; Hobbies/Aviation";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_HOBBIES = "Games &amp; Hobbies/Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_OTHER_GAMES = "Games &amp; Hobbies/Other Games";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_VIDEO_GAMES = "Games &amp; Hobbies/Video Games";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS = "Government &amp; Organizations";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_LOCAL = "Government &amp; Organizations/Local";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NATIONAL = "Government &amp; Organizations/National";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NON_PROFIT = "Government &amp; Organizations/Non-Profit";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_REGIONAL = "Government &amp; Organizations/Regional";
KalturaITunesSyndicationFeedCategories.HEALTH = "Health";
KalturaITunesSyndicationFeedCategories.HEALTH_ALTERNATIVE_HEALTH = "Health/Alternative Health";
KalturaITunesSyndicationFeedCategories.HEALTH_FITNESS_NUTRITION = "Health/Fitness &amp; Nutrition";
KalturaITunesSyndicationFeedCategories.HEALTH_SELF_HELP = "Health/Self-Help";
KalturaITunesSyndicationFeedCategories.HEALTH_SEXUALITY = "Health/Sexuality";
KalturaITunesSyndicationFeedCategories.KIDS_FAMILY = "Kids &amp; Family";
KalturaITunesSyndicationFeedCategories.MUSIC = "Music";
KalturaITunesSyndicationFeedCategories.NEWS_POLITICS = "News &amp; Politics";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY = "Religion &amp; Spirituality";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_BUDDHISM = "Religion &amp; Spirituality/Buddhism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_CHRISTIANITY = "Religion &amp; Spirituality/Christianity";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_HINDUISM = "Religion &amp; Spirituality/Hinduism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_ISLAM = "Religion &amp; Spirituality/Islam";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_JUDAISM = "Religion &amp; Spirituality/Judaism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_OTHER = "Religion &amp; Spirituality/Other";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_SPIRITUALITY = "Religion &amp; Spirituality/Spirituality";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE = "Science &amp; Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_MEDICINE = "Science &amp; Medicine/Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_NATURAL_SCIENCES = "Science &amp; Medicine/Natural Sciences";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_SOCIAL_SCIENCES = "Science &amp; Medicine/Social Sciences";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE = "Society &amp; Culture";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_HISTORY = "Society &amp; Culture/History";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PERSONAL_JOURNALS = "Society &amp; Culture/Personal Journals";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PHILOSOPHY = "Society &amp; Culture/Philosophy";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PLACES_TRAVEL = "Society &amp; Culture/Places &amp; Travel";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION = "Sports &amp; Recreation";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_AMATEUR = "Sports &amp; Recreation/Amateur";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL = "Sports &amp; Recreation/College &amp; High School";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_OUTDOOR = "Sports &amp; Recreation/Outdoor";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_PROFESSIONAL = "Sports &amp; Recreation/Professional";
KalturaITunesSyndicationFeedCategories.TV_FILM = "TV &amp; Film";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY = "Technology";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_GADGETS = "Technology/Gadgets";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_PODCASTING = "Technology/Podcasting";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_SOFTWARE_HOW_TO = "Technology/Software How-To";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_TECH_NEWS = "Technology/Tech News";

function KalturaITunesSyndicationFeedOrderBy(){
}
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaITunesSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaITunesSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaITunesSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaITunesSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaIdeticDistributionProfileOrderBy(){
}
KalturaIdeticDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaIdeticDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaIdeticDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaIdeticDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaIdeticDistributionProviderOrderBy(){
}

function KalturaImageFlavorParamsOrderBy(){
}

function KalturaImageFlavorParamsOutputOrderBy(){
}

function KalturaIntegrationProviderType(){
}
KalturaIntegrationProviderType.CIELO24 = "cielo24.Cielo24";
KalturaIntegrationProviderType.DEXTER = "dexterIntegration.Dexter";
KalturaIntegrationProviderType.EXAMPLE = "exampleIntegration.Example";
KalturaIntegrationProviderType.VOICEBASE = "voicebase.Voicebase";

function KalturaIntegrationTriggerType(){
}
KalturaIntegrationTriggerType.BPM_EVENT_NOTIFICATION = "bpmEventNotificationIntegration.BpmEventNotification";
KalturaIntegrationTriggerType.MANUAL = "1";

function KalturaKafkaNotificationTemplateOrderBy(){
}
KalturaKafkaNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaKafkaNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaKafkaNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaKafkaNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaKafkaNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaKafkaNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaKontikiStorageProfileOrderBy(){
}
KalturaKontikiStorageProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaKontikiStorageProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaKontikiStorageProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaKontikiStorageProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaLanguage(){
}
KalturaLanguage.ABQ = "Abaza";
KalturaLanguage.AB = "Abkhazian";
KalturaLanguage.ABE = "Abnaki Western";
KalturaLanguage.ABU = "Abure";
KalturaLanguage.ACN = "Achang";
KalturaLanguage.ACE = "Achinese";
KalturaLanguage.ACT = "Achterhooks";
KalturaLanguage.ACV = "Achumawi";
KalturaLanguage.ADJ = "Adioukrou";
KalturaLanguage.ADY = "Adyghe; Adygei";
KalturaLanguage.ADT = "Adynyamathanha";
KalturaLanguage.AAL = "Afade";
KalturaLanguage.AA = "Afar";
KalturaLanguage.AF = "Afrikaans";
KalturaLanguage.AGQ = "Aghem";
KalturaLanguage.AGX = "Aghul";
KalturaLanguage.AGU = "Aguacateco";
KalturaLanguage.AGR = "Aguaruna";
KalturaLanguage.AIN = "Ainu (Japan)";
KalturaLanguage.AKK = "Akkadian";
KalturaLanguage.AKL = "Aklanon";
KalturaLanguage.AKU = "Akum";
KalturaLanguage.AKZ = "Alabama";
KalturaLanguage.SQ = "Albanian";
KalturaLanguage.ALN = "Albanian (Gheg)";
KalturaLanguage.ALS = "Albanian (Tosk)";
KalturaLanguage.ALE = "Aleut";
KalturaLanguage.ALG = "Algonquian languages";
KalturaLanguage.ALQ = "Algonquin";
KalturaLanguage.ALT = "Altai (Southern)";
KalturaLanguage.AM = "Amharic";
KalturaLanguage.RME = "Angloromani";
KalturaLanguage.APJ = "Apache (Jicarilla)";
KalturaLanguage.APW = "Apache (Western)";
KalturaLanguage.AR = "Arabic";
KalturaLanguage.ARB = "Arabic (standard)";
KalturaLanguage.B_T = "Arabic Tunisian Spoken";
KalturaLanguage.ARC = "Aramaic";
KalturaLanguage.SAM = "Aramaic Samaritan";
KalturaLanguage.ARP = "Arapaho";
KalturaLanguage.ARN = "Araucanian";
KalturaLanguage.ARI = "Arikara";
KalturaLanguage.HY = "Armenian";
KalturaLanguage.RUP = "Aromanian";
KalturaLanguage.AS_ = "Assamese";
KalturaLanguage.ASB = "Assiniboine";
KalturaLanguage.AII = "Assyrian Neo-Aramaic";
KalturaLanguage.AST = "Asturian";
KalturaLanguage.ATH = "Athapascan languages";
KalturaLanguage.ATJ = "Atikamekw";
KalturaLanguage.AWA = "Awadhi";
KalturaLanguage.AY = "Aymara";
KalturaLanguage.AZ = "Azerbaijani";
KalturaLanguage.BCR = "Babine";
KalturaLanguage.BFQ = "Badaga";
KalturaLanguage.BDJ = "Bai";
KalturaLanguage.BAN = "Balinese";
KalturaLanguage.BCC = "Balochi Southern";
KalturaLanguage.BFT = "Balti";
KalturaLanguage.BAL = "Baluchi";
KalturaLanguage.BAS = "Basa (Cameroon)";
KalturaLanguage.BA = "Bashkir";
KalturaLanguage.EU = "Basque";
KalturaLanguage.BAR = "Bavarian";
KalturaLanguage.BEA = "Beaver";
KalturaLanguage.BEJ = "Beja";
KalturaLanguage.BEM = "Bemba (Zambia)";
KalturaLanguage.BN = "Bengali (Bangla)";
KalturaLanguage.BEW = "Betawi";
KalturaLanguage.KAP = "Bezhta";
KalturaLanguage.BHB = "Bhili";
KalturaLanguage.BHO = "Bhojpuri";
KalturaLanguage.DZ = "Bhutani";
KalturaLanguage.BH = "Bihari";
KalturaLanguage.BIK = "Bikol";
KalturaLanguage.BIN = "Bini";
KalturaLanguage.BPY = "Bishnupriya Manipuri";
KalturaLanguage.BI = "Bislama";
KalturaLanguage.BS = "Bosnian";
KalturaLanguage.BR = "Breton";
KalturaLanguage.BUG = "Buginese";
KalturaLanguage.BG = "Bulgarian";
KalturaLanguage.BUA = "Buriat";
KalturaLanguage.MY = "Burmese";
KalturaLanguage.BE = "Byelorussian (Belarusian)";
KalturaLanguage.CAD = "Caddo";
KalturaLanguage.KM = "Cambodian";
KalturaLanguage.YUE = "Cantonese";
KalturaLanguage.CRX = "Carrier";
KalturaLanguage.CAF = "Carrier Southern";
KalturaLanguage.CA = "Catalan";
KalturaLanguage.CHC = "Catawba";
KalturaLanguage.CAY = "Cayuga";
KalturaLanguage.CEB = "Cebuano";
KalturaLanguage.CHG = "Chagatai";
KalturaLanguage.CLD = "Chaldean Neo-Aramaic";
KalturaLanguage.CHR = "Cherokee";
KalturaLanguage.CHY = "Cheyenne";
KalturaLanguage.CIC = "Chickasaw";
KalturaLanguage.CLC = "Chilcotin";
KalturaLanguage.ZH = "Chinese";
KalturaLanguage.CHN = "Chinook jargon";
KalturaLanguage.CHP = "Chipewyan";
KalturaLanguage.CIW = "Chippewa";
KalturaLanguage.CHO = "Choctaw";
KalturaLanguage.CAA = "Chor";
KalturaLanguage.CKT = "Chukot";
KalturaLanguage.CIM = "Cimbrian";
KalturaLanguage.CLM = "Clallam Klallam";
KalturaLanguage.COJ = "Cochimi";
KalturaLanguage.COC = "Cocopa";
KalturaLanguage.KSH = "Colognian";
KalturaLanguage.COM = "Comanche";
KalturaLanguage.SWB = "Comorian";
KalturaLanguage.COO = "Comox";
KalturaLanguage.COP = "Coptic";
KalturaLanguage.CO = "Corsican";
KalturaLanguage.CR = "Cree";
KalturaLanguage.MUS = "Creek";
KalturaLanguage.CRH = "Crimean Tatar";
KalturaLanguage.HR = "Croatian";
KalturaLanguage.CUP = "Cupeo";
KalturaLanguage.CS = "Czech";
KalturaLanguage.DAK = "Dakota";
KalturaLanguage.DA = "Danish";
KalturaLanguage.DAR = "Dargwa";
KalturaLanguage.PRD = "Dari (Persian)";
KalturaLanguage.GBZ = "Dari Zoroastrian";
KalturaLanguage.DHV = "Dehu";
KalturaLanguage.DEL = "Delaware";
KalturaLanguage.DIN = "Dinka";
KalturaLanguage.DOI = "Dogri (generic)";
KalturaLanguage.DGR = "Dogrib";
KalturaLanguage.DLG = "Dolgan";
KalturaLanguage.DOH = "Dong";
KalturaLanguage.DUA = "Duala";
KalturaLanguage.DNG = "Dungan";
KalturaLanguage.NL = "Dutch";
KalturaLanguage.DYU = "Dyula";
KalturaLanguage.EEE = "E";
KalturaLanguage.EGL = "Emilian";
KalturaLanguage.EN = "English";
KalturaLanguage.EN_US = "English (American)";
KalturaLanguage.EN_AU = "English (Australian)";
KalturaLanguage.EN_GB = "English (British)";
KalturaLanguage.ENM = "English Middle (1100-1500)";
KalturaLanguage.MYV = "Erzya";
KalturaLanguage.EO = "Esperanto";
KalturaLanguage.ET = "Estonian";
KalturaLanguage.EVE = "Even";
KalturaLanguage.EVN = "Evenki";
KalturaLanguage.FO = "Faeroese";
KalturaLanguage.FAX = "Fala";
KalturaLanguage.FAN = "Fang (Equatorial Guinea)";
KalturaLanguage.FA = "Farsi";
KalturaLanguage.FJ = "Fiji";
KalturaLanguage.FIL = "Filipino";
KalturaLanguage.FI = "Finnish";
KalturaLanguage.FIT = "Finnish (Tornedalen)";
KalturaLanguage.FON = "Fon";
KalturaLanguage.FRP = "Franco-Prove";
KalturaLanguage.FRK = "Frankish";
KalturaLanguage.FR = "French";
KalturaLanguage.FR_CA = "French (Canada)";
KalturaLanguage.FY = "Frisian";
KalturaLanguage.FRR = "Frisian Northern";
KalturaLanguage.FUR = "Friulian";
KalturaLanguage.FVR = "Fur";
KalturaLanguage.GAA = "Ga";
KalturaLanguage.GV = "Gaelic (Manx)";
KalturaLanguage.GD = "Gaelic (Scottish)";
KalturaLanguage.GAG = "Gagauz";
KalturaLanguage.GL = "Galician";
KalturaLanguage.GAN = "Gan";
KalturaLanguage.GEZ = "Geez";
KalturaLanguage.KA = "Georgian";
KalturaLanguage.DE = "German";
KalturaLanguage.GEH = "German Hutterite";
KalturaLanguage.PDC = "German Pennsylvania";
KalturaLanguage.GIL = "Gilbertese";
KalturaLanguage.NIV = "Gilyak Nivkh";
KalturaLanguage.GIT = "Gitxsan";
KalturaLanguage.EL = "Greek";
KalturaLanguage.GRC = "Greek Ancient (to 1453)";
KalturaLanguage.KL = "Greenlandic";
KalturaLanguage.GN = "Guarani";
KalturaLanguage.GU = "Gujarati";
KalturaLanguage.GWI = "Gwichin";
KalturaLanguage.HAI = "Haida";
KalturaLanguage.HNN = "Hainanese";
KalturaLanguage.HAS = "Haisla";
KalturaLanguage.HAK = "Hakka";
KalturaLanguage.HUR = "Halkomelem";
KalturaLanguage.HAA = "Han";
KalturaLanguage.HNI = "Hani";
KalturaLanguage.HA = "Hausa";
KalturaLanguage.HAW = "Hawaiian";
KalturaLanguage.HE = "Hebrew";
KalturaLanguage.IW = "Hebrew";
KalturaLanguage.HEI = "Heiltsuk";
KalturaLanguage.HID = "Hidatsa";
KalturaLanguage.HIL = "Hiligaynon";
KalturaLanguage.HI = "Hindi";
KalturaLanguage.HMN = "Hmong";
KalturaLanguage.HKK = "Hokkien";
KalturaLanguage.HOP = "Hopi";
KalturaLanguage.CZH = "Huizhou Chinese";
KalturaLanguage.HU = "Hungarian";
KalturaLanguage.IS = "Icelandic";
KalturaLanguage.KPO = "Ikposo";
KalturaLanguage.ILO = "Iloko";
KalturaLanguage.SMN = "Inari Sami";
KalturaLanguage.IN = "Indonesian";
KalturaLanguage.ID = "Indonesian";
KalturaLanguage.IZH = "Ingrian";
KalturaLanguage.INH = "Ingush";
KalturaLanguage.IA = "Interlingua";
KalturaLanguage.IE = "Interlingue";
KalturaLanguage.IKT = "Inuinnaqtun";
KalturaLanguage.IU = "Inuktitut";
KalturaLanguage.IK = "Inupiak";
KalturaLanguage.GA = "Irish";
KalturaLanguage.IRO = "Iroquoian languages";
KalturaLanguage.IT = "Italian";
KalturaLanguage.ITL = "Itelmen";
KalturaLanguage.JA = "Japanese";
KalturaLanguage.JV = "Javanese";
KalturaLanguage.CJY = "Jinyu Chinese";
KalturaLanguage.KAJ = "Jju";
KalturaLanguage.JCT = "Judeo-Crimean Tatar";
KalturaLanguage.JGE = "Judeo-Georgian";
KalturaLanguage.JUT = "Jutish";
KalturaLanguage.KBD = "Kabardian";
KalturaLanguage.KEA = "Kabuverdianu";
KalturaLanguage.KAB = "Kabyle";
KalturaLanguage.KFR = "Kachchi";
KalturaLanguage.KJV = "Kaikavian literary language (Kajkavian)";
KalturaLanguage.XAL = "Kalmyk Oirat";
KalturaLanguage.KN = "Kannada";
KalturaLanguage.KSK = "Kansa";
KalturaLanguage.KRC = "Karachay-Balkar";
KalturaLanguage.KIM = "Karagas";
KalturaLanguage.KDR = "Karaim";
KalturaLanguage.KAA = "Karakalpak";
KalturaLanguage.KRL = "Karelian";
KalturaLanguage.KS = "Kashmiri";
KalturaLanguage.CSB = "Kashubian";
KalturaLanguage.KKZ = "Kaska";
KalturaLanguage.KAW = "Kawi";
KalturaLanguage.KK = "Kazakh";
KalturaLanguage.KJH = "Khakas";
KalturaLanguage.KLJ = "Khalaj Turkic";
KalturaLanguage.KCA = "Khanty";
KalturaLanguage.KHA = "Khasi";
KalturaLanguage.KXM = "Khmer Northern";
KalturaLanguage.KIC = "Kickapoo";
KalturaLanguage.RW = "Kinyarwanda (Ruanda)";
KalturaLanguage.KIO = "Kiowa";
KalturaLanguage.KY = "Kirghiz";
KalturaLanguage.RN = "Kirundi (Rundi)";
KalturaLanguage.TLH = "Klingon tlhIngan-Hol";
KalturaLanguage.KFA = "Kodava";
KalturaLanguage.KOI = "Komi-Permyak";
KalturaLanguage.KOK = "Konkani (generic)";
KalturaLanguage.KNN = "Konkani (specific)";
KalturaLanguage.GOM = "Konkani Goan";
KalturaLanguage.KO = "Korean";
KalturaLanguage.KPY = "Koryak";
KalturaLanguage.KOS = "Kosraean";
KalturaLanguage.AVK = "Kotava";
KalturaLanguage.KPE = "Kpelle";
KalturaLanguage.DIH = "Kumiai";
KalturaLanguage.KUM = "Kumyk";
KalturaLanguage.KU = "Kurdish";
KalturaLanguage.KUT = "Kutenai";
KalturaLanguage.KWK = "Kwakiutl";
KalturaLanguage.GDM = "Laal";
KalturaLanguage.LLD = "Ladin";
KalturaLanguage.LAD = "Ladino";
KalturaLanguage.LAH = "Lahnda";
KalturaLanguage.LHU = "Lahu";
KalturaLanguage.LBE = "Lak";
KalturaLanguage.LKI = "Laki";
KalturaLanguage.LKT = "Lakota";
KalturaLanguage.LO = "Laothian";
KalturaLanguage.LA = "Latin";
KalturaLanguage.LV = "Latvian (Lettish)";
KalturaLanguage.LZZ = "Laz";
KalturaLanguage.LEZ = "Lezghian";
KalturaLanguage.LIJ = "Ligurian";
KalturaLanguage.LIL = "Lillooet";
KalturaLanguage.LIF = "Limbu";
KalturaLanguage.LI = "Limburgish ( Limburger)";
KalturaLanguage.LN = "Lingala";
KalturaLanguage.LT = "Lithuanian";
KalturaLanguage.JBO = "Lojban";
KalturaLanguage.LOM = "Loma (Liberia)";
KalturaLanguage.LMO = "Lombard";
KalturaLanguage.NDS = "Low German Low Saxon";
KalturaLanguage.LOZ = "Lozi";
KalturaLanguage.LUA = "Luba-Lulua";
KalturaLanguage.LUQ = "Lucumi";
KalturaLanguage.LUD = "Ludian";
KalturaLanguage.SMJ = "Lule Sami";
KalturaLanguage.LUN = "Lunda";
KalturaLanguage.LUO = "Luo (Kenya and Tanzania)";
KalturaLanguage.LUT = "Lushootseed";
KalturaLanguage.LB = "Luxembourgish (Letzeburgesch)";
KalturaLanguage.MK = "Macedonian";
KalturaLanguage.MAD = "Madurese";
KalturaLanguage.MAG = "Magahi";
KalturaLanguage.MAI = "Maithili";
KalturaLanguage.MG = "Malagasy";
KalturaLanguage.MS = "Malay";
KalturaLanguage.ML = "Malayalam";
KalturaLanguage.PQM = "Malecite-Passamaquoddy";
KalturaLanguage.MT = "Maltese";
KalturaLanguage.MNC = "Manchu";
KalturaLanguage.MID = "Mandaic";
KalturaLanguage.MHQ = "Mandan";
KalturaLanguage.CMN = "Mandarin Chinese";
KalturaLanguage.MNS = "Mansi";
KalturaLanguage.MI = "Maori";
KalturaLanguage.MRW = "Maranao";
KalturaLanguage.MR = "Marathi";
KalturaLanguage.CHM = "Mari (Russia)";
KalturaLanguage.MWR = "Marwari";
KalturaLanguage.MAS = "Masai";
KalturaLanguage.MFY = "Mayo";
KalturaLanguage.MNI = "Meitei";
KalturaLanguage.MEN = "Mende (Sierra Leone)";
KalturaLanguage.MEZ = "Menominee";
KalturaLanguage.CRG = "Michif";
KalturaLanguage.MIC = "Micmac";
KalturaLanguage.MNP = "Min Bei Chinese";
KalturaLanguage.CDO = "Min Dong Chinese";
KalturaLanguage.MIN = "Minangkabau";
KalturaLanguage.XMF = "Mingrelian";
KalturaLanguage.MWL = "Mirandese";
KalturaLanguage.MOH = "Mohawk";
KalturaLanguage.MDF = "Moksha";
KalturaLanguage.MO = "Moldavian";
KalturaLanguage.MNW = "Mon";
KalturaLanguage.MN = "Mongolian";
KalturaLanguage.MOE = "Montagnais";
KalturaLanguage.MFE = "Morisyen";
KalturaLanguage.MOS = "Mossi";
KalturaLanguage.MXI = "Mozarabic";
KalturaLanguage.MU = "Multilingual";
KalturaLanguage.MTQ = "Muong";
KalturaLanguage.NAQ = "Nama (Namibia)";
KalturaLanguage.GLD = "Nanai";
KalturaLanguage.NSK = "Naskapi";
KalturaLanguage.NA = "Nauru";
KalturaLanguage.NAP = "Neapolitan";
KalturaLanguage.NE = "Nepali";
KalturaLanguage.NEW_ = "Newari Nepal Bhasa";
KalturaLanguage.NIO = "Nganasan";
KalturaLanguage.NCG = "Nisgaa";
KalturaLanguage.NIU = "Niuean";
KalturaLanguage.ZXX = "No linguistic content";
KalturaLanguage.NOG = "Nogai";
KalturaLanguage.NON = "Norse Old";
KalturaLanguage.NSO = "Northern Sotho Pedi Sepedi";
KalturaLanguage.NO = "Norwegian";
KalturaLanguage.NOV = "Novial";
KalturaLanguage.NYM = "Nyamwezi";
KalturaLanguage.NYO = "Nyoro";
KalturaLanguage.NYS = "Nyungah";
KalturaLanguage.OC = "Occitan";
KalturaLanguage.OJC = "Ojibwa Central";
KalturaLanguage.OJG = "Ojibwa Eastern";
KalturaLanguage.OJB = "Ojibwa Northwestern";
KalturaLanguage.OJS = "Ojibwa Severn";
KalturaLanguage.OJW = "Ojibwa Western";
KalturaLanguage.OJ = "Ojibwe, Ojibwa";
KalturaLanguage.OKA = "Okanagan";
KalturaLanguage.RYU = "Okinawan Central";
KalturaLanguage.ANG = "Old English";
KalturaLanguage.ONE = "Oneida";
KalturaLanguage.ONO = "Onondaga";
KalturaLanguage.OR_ = "Oriya";
KalturaLanguage.OM = "Oromo (Afan, Galla)";
KalturaLanguage.OTW = "Ottawa";
KalturaLanguage.PPI = "Paipai";
KalturaLanguage.PAU = "Palauan";
KalturaLanguage.PAM = "Pampanga";
KalturaLanguage.PAG = "Pangasinan";
KalturaLanguage.PAP = "Papiamento";
KalturaLanguage.PS = "Pashto (Pushto)";
KalturaLanguage.PRP = "Persian";
KalturaLanguage.PRS = "Persian (Dari)";
KalturaLanguage.FA_IR = "Persian (Iran)";
KalturaLanguage.PFL = "Pfaelzisch";
KalturaLanguage.PCD = "Picard";
KalturaLanguage.PMS = "Piedmontese";
KalturaLanguage.MYP = "Pirah";
KalturaLanguage.PIH = "Pitcairn-Norfolk";
KalturaLanguage.PDT = "Plautdietsch";
KalturaLanguage.PL = "Polish";
KalturaLanguage.PNT = "Pontic";
KalturaLanguage.PT = "Portuguese";
KalturaLanguage.PT_BR = "Portuguese (Brazil)";
KalturaLanguage.POT = "Potawatomi";
KalturaLanguage.PRG = "Prussian";
KalturaLanguage.FUC = "Pulaar";
KalturaLanguage.PA = "Punjabi";
KalturaLanguage.QXQ = "Qashqai";
KalturaLanguage.ALC = "Qawasqar";
KalturaLanguage.QU = "Quechua";
KalturaLanguage.QUC = "Quich Central";
KalturaLanguage.RAP = "Rapanui";
KalturaLanguage.RAR = "Rarotongan";
KalturaLanguage.QTZ = "Reserved for local use.";
KalturaLanguage.RM = "Rhaeto-Romance";
KalturaLanguage.RGN = "Romagnol";
KalturaLanguage.RMF = "Romani Kalo Finnish";
KalturaLanguage.RMO = "Romani Sinte";
KalturaLanguage.RO = "Romanian";
KalturaLanguage.RUO = "Romanian Istro";
KalturaLanguage.RUQ = "Romanian Megleno";
KalturaLanguage.ROM = "Romany";
KalturaLanguage.RCF = "Runion Creole French";
KalturaLanguage.RU = "Russian";
KalturaLanguage.RUE = "Rusyn";
KalturaLanguage.ACF = "Saint Lucian Creole French";
KalturaLanguage.SAH = "Sakha";
KalturaLanguage.SLR = "Salar";
KalturaLanguage.STR = "Salish Straits";
KalturaLanguage.SAL = "Salishan languages";
KalturaLanguage.SJD = "Sami Kildin";
KalturaLanguage.SMI = "Sami languages";
KalturaLanguage.SM = "Samoan";
KalturaLanguage.SG = "Sangro";
KalturaLanguage.SA = "Sanskrit";
KalturaLanguage.SAT = "Santali";
KalturaLanguage.SRM = "Saramaccan";
KalturaLanguage.SDC = "Sardinian Sassarese";
KalturaLanguage.STQ = "Saterland Frisian";
KalturaLanguage.SXU = "Saxon Upper";
KalturaLanguage.SCO = "Scots";
KalturaLanguage.SEC = "Sechelt";
KalturaLanguage.TRV = "Seediq";
KalturaLanguage.SEK = "Sekani";
KalturaLanguage.SEL = "Selkup";
KalturaLanguage.SEE = "Seneca";
KalturaLanguage.SR = "Serbian";
KalturaLanguage.SH = "Serbo-Croatian";
KalturaLanguage.SEI = "Seri";
KalturaLanguage.ST = "Sesotho";
KalturaLanguage.TN = "Setswana";
KalturaLanguage.SJW = "Shawnee";
KalturaLanguage.SN = "Shona";
KalturaLanguage.CJS = "Shor";
KalturaLanguage.SHH = "Shoshoni";
KalturaLanguage.SHS = "Shuswap";
KalturaLanguage.SCN = "Sicilian";
KalturaLanguage.SID = "Sidamo";
KalturaLanguage.BLA = "Siksika";
KalturaLanguage.SZL = "Silesian";
KalturaLanguage.ZH_CN = "Simplified Chinese";
KalturaLanguage.SD = "Sindhi";
KalturaLanguage.SI = "Sinhalese";
KalturaLanguage.SS = "Siswati";
KalturaLanguage.SMS = "Skolt Sami";
KalturaLanguage.SCS = "Slavey North";
KalturaLanguage.XSL = "Slavey South";
KalturaLanguage.SK = "Slovak";
KalturaLanguage.SK_SK = "Slovakian";
KalturaLanguage.SL = "Slovenian";
KalturaLanguage.SO = "Somali";
KalturaLanguage.SNK = "Soninke";
KalturaLanguage.DSB = "Sorbian Lower";
KalturaLanguage.HSB = "Sorbian Upper";
KalturaLanguage.SMA = "Southern Sami";
KalturaLanguage.TCE = "Southern Tutchone";
KalturaLanguage.ES = "Spanish";
KalturaLanguage.ES_XL = "Spanish (Latin America)";
KalturaLanguage.SRN = "Sranan";
KalturaLanguage.STO = "Stoney";
KalturaLanguage.XSV = "Sudovian";
KalturaLanguage.SUX = "Sumerian";
KalturaLanguage.SU = "Sundanese";
KalturaLanguage.SVA = "Svan";
KalturaLanguage.SWG = "Swabian";
KalturaLanguage.SW = "Swahili (Kiswahili)";
KalturaLanguage.SV = "Swedish";
KalturaLanguage.SWL = "Swedish Sign Language";
KalturaLanguage.GSW = "Swiss German Alemannic Alsatian";
KalturaLanguage.SYR = "Syriac";
KalturaLanguage.TAB = "Tabassaran";
KalturaLanguage.SHY = "Tachawit";
KalturaLanguage.SHI = "Tachelhit";
KalturaLanguage.TL = "Tagalog";
KalturaLanguage.TBW = "Tagbanwa";
KalturaLanguage.TGX = "Tagish";
KalturaLanguage.THT = "Tahltan";
KalturaLanguage.TDD = "Tai Na";
KalturaLanguage.ZH_TW = "Taiwanese Mandarin";
KalturaLanguage.TG = "Tajik";
KalturaLanguage.TLY = "Talysh";
KalturaLanguage.TTQ = "Tamajaq Tawallammat";
KalturaLanguage.TAQ = "Tamasheq";
KalturaLanguage.TZM = "Tamazight Central Atlas";
KalturaLanguage.TA = "Tamil";
KalturaLanguage.TAR = "Tarahumara Central";
KalturaLanguage.TTT = "Tat Muslim";
KalturaLanguage.TT = "Tatar";
KalturaLanguage.TE = "Telugu";
KalturaLanguage.TEO = "Teo Chew";
KalturaLanguage.TET = "Tetum";
KalturaLanguage.TH = "Thai";
KalturaLanguage.NOD = "Thai (Northern)";
KalturaLanguage.TTS = "Thai Northeastern";
KalturaLanguage.THP = "Thompson";
KalturaLanguage.BO = "Tibetan";
KalturaLanguage.TIG = "Tigre";
KalturaLanguage.TI = "Tigrinya";
KalturaLanguage.TLI = "Tlingit";
KalturaLanguage.TCX = "Toda";
KalturaLanguage.OOD = "Tohono Oodham";
KalturaLanguage.TPI = "Tok Pisin";
KalturaLanguage.TO = "Tonga";
KalturaLanguage.TOG = "Tonga (Nyasa)";
KalturaLanguage.ZH_HK = "Traditional Chinese";
KalturaLanguage.DDO = "Tsez";
KalturaLanguage.TSI = "Tsimshian";
KalturaLanguage.TS = "Tsonga";
KalturaLanguage.TCY = "Tulu";
KalturaLanguage.TUM = "Tumbuka";
KalturaLanguage.MZB = "Tumzabt";
KalturaLanguage.TPN = "Tupinamb";
KalturaLanguage.TUV = "Turkana";
KalturaLanguage.TR = "Turkish";
KalturaLanguage.OTA = "Turkish Ottoman";
KalturaLanguage.TK = "Turkmen";
KalturaLanguage.TUS = "Tuscarora";
KalturaLanguage.TVL = "Tuvalu";
KalturaLanguage.TYV = "Tuvinian";
KalturaLanguage.TW = "Twi";
KalturaLanguage.UBY = "Ubykh";
KalturaLanguage.UDI = "Udi";
KalturaLanguage.UDM = "Udmurt";
KalturaLanguage.UG = "Uighur";
KalturaLanguage.UK = "Ukrainian";
KalturaLanguage.UN = "Undefined";
KalturaLanguage.UR = "Urdu";
KalturaLanguage.UUM = "Urum";
KalturaLanguage.UZ = "Uzbek";
KalturaLanguage.VEC = "Venetian";
KalturaLanguage.VEP = "Veps";
KalturaLanguage.VI = "Vietnamese";
KalturaLanguage.VO = "Volapuk";
KalturaLanguage.VOR = "Voro";
KalturaLanguage.VOT = "Votic";
KalturaLanguage.VRO = "Vro";
KalturaLanguage.AUC = "Waorani";
KalturaLanguage.WAR = "Waray (Philippines)";
KalturaLanguage.CY = "Welsh";
KalturaLanguage.PES = "Western Farsi";
KalturaLanguage.AMW = "Western Neo-Aramaic";
KalturaLanguage.WIY = "Wiyot";
KalturaLanguage.WO = "Wolof";
KalturaLanguage.WUU = "Wu Chinese";
KalturaLanguage.WYM = "Wymysorys";
KalturaLanguage.XH = "Xhosa";
KalturaLanguage.AME = "Yanesha";
KalturaLanguage.YI = "Yiddish";
KalturaLanguage.JI = "Yiddish";
KalturaLanguage.YO = "Yoruba";
KalturaLanguage.ZAI = "Zapotec Isthmus";
KalturaLanguage.DJE = "Zarma";
KalturaLanguage.ZU = "Zulu";

function KalturaLanguageCode(){
}
KalturaLanguageCode.AA = "aa";
KalturaLanguageCode.AB = "ab";
KalturaLanguageCode.AF = "af";
KalturaLanguageCode.ALG = "alg";
KalturaLanguageCode.AM = "am";
KalturaLanguageCode.AR = "ar";
KalturaLanguageCode.AS_ = "as";
KalturaLanguageCode.ATH = "ath";
KalturaLanguageCode.AY = "ay";
KalturaLanguageCode.AZ = "az";
KalturaLanguageCode.BA = "ba";
KalturaLanguageCode.BE = "be";
KalturaLanguageCode.BG = "bg";
KalturaLanguageCode.BH = "bh";
KalturaLanguageCode.BI = "bi";
KalturaLanguageCode.BLA = "bla";
KalturaLanguageCode.BN = "bn";
KalturaLanguageCode.BO = "bo";
KalturaLanguageCode.BR = "br";
KalturaLanguageCode.CA = "ca";
KalturaLanguageCode.CO = "co";
KalturaLanguageCode.CR = "cr";
KalturaLanguageCode.CRG = "crg";
KalturaLanguageCode.CS = "cs";
KalturaLanguageCode.CY = "cy";
KalturaLanguageCode.DA = "da";
KalturaLanguageCode.DE = "de";
KalturaLanguageCode.DZ = "dz";
KalturaLanguageCode.EL = "el";
KalturaLanguageCode.EN = "en";
KalturaLanguageCode.EN_GB = "en_gb";
KalturaLanguageCode.EN_US = "en_us";
KalturaLanguageCode.EO = "eo";
KalturaLanguageCode.ES = "es";
KalturaLanguageCode.ES_XL = "es_xl";
KalturaLanguageCode.ET = "et";
KalturaLanguageCode.EU = "eu";
KalturaLanguageCode.FA = "fa";
KalturaLanguageCode.FI = "fi";
KalturaLanguageCode.FJ = "fj";
KalturaLanguageCode.FO = "fo";
KalturaLanguageCode.FR = "fr";
KalturaLanguageCode.FR_CA = "fr_ca";
KalturaLanguageCode.FY = "fy";
KalturaLanguageCode.GA = "ga";
KalturaLanguageCode.GD = "gd";
KalturaLanguageCode.GL = "gl";
KalturaLanguageCode.GN = "gn";
KalturaLanguageCode.GU = "gu";
KalturaLanguageCode.GV = "gv";
KalturaLanguageCode.HA = "ha";
KalturaLanguageCode.HE = "he";
KalturaLanguageCode.HI = "hi";
KalturaLanguageCode.HR = "hr";
KalturaLanguageCode.HU = "hu";
KalturaLanguageCode.HY = "hy";
KalturaLanguageCode.IA = "ia";
KalturaLanguageCode.ID = "id";
KalturaLanguageCode.IE = "ie";
KalturaLanguageCode.IK = "ik";
KalturaLanguageCode.IKT = "ikt";
KalturaLanguageCode.IN = "in";
KalturaLanguageCode.IRO = "iro";
KalturaLanguageCode.IS = "is";
KalturaLanguageCode.IT = "it";
KalturaLanguageCode.IU = "iu";
KalturaLanguageCode.IW = "iw";
KalturaLanguageCode.JA = "ja";
KalturaLanguageCode.JI = "ji";
KalturaLanguageCode.JV = "jv";
KalturaLanguageCode.KA = "ka";
KalturaLanguageCode.KK = "kk";
KalturaLanguageCode.KL = "kl";
KalturaLanguageCode.KM = "km";
KalturaLanguageCode.KN = "kn";
KalturaLanguageCode.KO = "ko";
KalturaLanguageCode.KS = "ks";
KalturaLanguageCode.KU = "ku";
KalturaLanguageCode.KY = "ky";
KalturaLanguageCode.LA = "la";
KalturaLanguageCode.LB = "lb";
KalturaLanguageCode.LI = "li";
KalturaLanguageCode.LN = "ln";
KalturaLanguageCode.LO = "lo";
KalturaLanguageCode.LT = "lt";
KalturaLanguageCode.LV = "lv";
KalturaLanguageCode.MG = "mg";
KalturaLanguageCode.MI = "mi";
KalturaLanguageCode.MIC = "mic";
KalturaLanguageCode.MK = "mk";
KalturaLanguageCode.ML = "ml";
KalturaLanguageCode.MN = "mn";
KalturaLanguageCode.MO = "mo";
KalturaLanguageCode.MOE = "moe";
KalturaLanguageCode.MR = "mr";
KalturaLanguageCode.MS = "ms";
KalturaLanguageCode.MT = "mt";
KalturaLanguageCode.MU = "mu";
KalturaLanguageCode.MY = "my";
KalturaLanguageCode.NA = "na";
KalturaLanguageCode.NE = "ne";
KalturaLanguageCode.NL = "nl";
KalturaLanguageCode.NO = "no";
KalturaLanguageCode.OC = "oc";
KalturaLanguageCode.OJ = "oj";
KalturaLanguageCode.OJS = "ojs";
KalturaLanguageCode.OJW = "ojw";
KalturaLanguageCode.OKA = "oka";
KalturaLanguageCode.OM = "om";
KalturaLanguageCode.OR_ = "or";
KalturaLanguageCode.PA = "pa";
KalturaLanguageCode.PL = "pl";
KalturaLanguageCode.PS = "ps";
KalturaLanguageCode.PT = "pt";
KalturaLanguageCode.PT_BR = "pt_br";
KalturaLanguageCode.QU = "qu";
KalturaLanguageCode.RM = "rm";
KalturaLanguageCode.RN = "rn";
KalturaLanguageCode.RO = "ro";
KalturaLanguageCode.RU = "ru";
KalturaLanguageCode.RW = "rw";
KalturaLanguageCode.SA = "sa";
KalturaLanguageCode.SAL = "sal";
KalturaLanguageCode.SD = "sd";
KalturaLanguageCode.SG = "sg";
KalturaLanguageCode.SH = "sh";
KalturaLanguageCode.SI = "si";
KalturaLanguageCode.SK = "sk";
KalturaLanguageCode.SL = "sl";
KalturaLanguageCode.SM = "sm";
KalturaLanguageCode.SMI = "smi";
KalturaLanguageCode.SN = "sn";
KalturaLanguageCode.SO = "so";
KalturaLanguageCode.SQ = "sq";
KalturaLanguageCode.SR = "sr";
KalturaLanguageCode.SS = "ss";
KalturaLanguageCode.ST = "st";
KalturaLanguageCode.SU = "su";
KalturaLanguageCode.SV = "sv";
KalturaLanguageCode.SW = "sw";
KalturaLanguageCode.TA = "ta";
KalturaLanguageCode.TCE = "tce";
KalturaLanguageCode.TE = "te";
KalturaLanguageCode.TG = "tg";
KalturaLanguageCode.TH = "th";
KalturaLanguageCode.TI = "ti";
KalturaLanguageCode.TK = "tk";
KalturaLanguageCode.TL = "tl";
KalturaLanguageCode.TN = "tn";
KalturaLanguageCode.TO = "to";
KalturaLanguageCode.TR = "tr";
KalturaLanguageCode.TS = "ts";
KalturaLanguageCode.TT = "tt";
KalturaLanguageCode.TW = "tw";
KalturaLanguageCode.UG = "ug";
KalturaLanguageCode.UK = "uk";
KalturaLanguageCode.UN = "un";
KalturaLanguageCode.UR = "ur";
KalturaLanguageCode.UZ = "uz";
KalturaLanguageCode.VI = "vi";
KalturaLanguageCode.VO = "vo";
KalturaLanguageCode.WO = "wo";
KalturaLanguageCode.XH = "xh";
KalturaLanguageCode.YI = "yi";
KalturaLanguageCode.YO = "yo";
KalturaLanguageCode.ZH = "zh";
KalturaLanguageCode.ZH_TW = "zh_tw";
KalturaLanguageCode.ZU = "zu";
KalturaLanguageCode.ZXX = "zxx";

function KalturaLikeOrderBy(){
}

function KalturaLiveAssetOrderBy(){
}
KalturaLiveAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaLiveAssetOrderBy.SIZE_ASC = "+size";
KalturaLiveAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaLiveAssetOrderBy.SIZE_DESC = "-size";
KalturaLiveAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaLiveChannelCompareAttribute(){
}
KalturaLiveChannelCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaLiveChannelCompareAttribute.CREATED_AT = "createdAt";
KalturaLiveChannelCompareAttribute.END_DATE = "endDate";
KalturaLiveChannelCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaLiveChannelCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaLiveChannelCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaLiveChannelCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaLiveChannelCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaLiveChannelCompareAttribute.MS_DURATION = "msDuration";
KalturaLiveChannelCompareAttribute.PARTNER_ID = "partnerId";
KalturaLiveChannelCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaLiveChannelCompareAttribute.PLAYS = "plays";
KalturaLiveChannelCompareAttribute.RANK = "rank";
KalturaLiveChannelCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaLiveChannelCompareAttribute.START_DATE = "startDate";
KalturaLiveChannelCompareAttribute.STATUS = "status";
KalturaLiveChannelCompareAttribute.TOTAL_RANK = "totalRank";
KalturaLiveChannelCompareAttribute.TYPE = "type";
KalturaLiveChannelCompareAttribute.UPDATED_AT = "updatedAt";
KalturaLiveChannelCompareAttribute.VIEWS = "views";

function KalturaLiveChannelMatchAttribute(){
}
KalturaLiveChannelMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaLiveChannelMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaLiveChannelMatchAttribute.CREATOR_ID = "creatorId";
KalturaLiveChannelMatchAttribute.DESCRIPTION = "description";
KalturaLiveChannelMatchAttribute.DURATION_TYPE = "durationType";
KalturaLiveChannelMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaLiveChannelMatchAttribute.GROUP_ID = "groupId";
KalturaLiveChannelMatchAttribute.ID = "id";
KalturaLiveChannelMatchAttribute.NAME = "name";
KalturaLiveChannelMatchAttribute.REFERENCE_ID = "referenceId";
KalturaLiveChannelMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaLiveChannelMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaLiveChannelMatchAttribute.SEARCH_TEXT = "searchText";
KalturaLiveChannelMatchAttribute.TAGS = "tags";
KalturaLiveChannelMatchAttribute.USER_ID = "userId";

function KalturaLiveChannelOrderBy(){
}
KalturaLiveChannelOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveChannelOrderBy.DURATION_ASC = "+duration";
KalturaLiveChannelOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveChannelOrderBy.FIRST_BROADCAST_ASC = "+firstBroadcast";
KalturaLiveChannelOrderBy.LAST_BROADCAST_ASC = "+lastBroadcast";
KalturaLiveChannelOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaLiveChannelOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveChannelOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveChannelOrderBy.NAME_ASC = "+name";
KalturaLiveChannelOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveChannelOrderBy.PLAYS_ASC = "+plays";
KalturaLiveChannelOrderBy.RANK_ASC = "+rank";
KalturaLiveChannelOrderBy.RECENT_ASC = "+recent";
KalturaLiveChannelOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveChannelOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveChannelOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveChannelOrderBy.VIEWS_ASC = "+views";
KalturaLiveChannelOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveChannelOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveChannelOrderBy.DURATION_DESC = "-duration";
KalturaLiveChannelOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveChannelOrderBy.FIRST_BROADCAST_DESC = "-firstBroadcast";
KalturaLiveChannelOrderBy.LAST_BROADCAST_DESC = "-lastBroadcast";
KalturaLiveChannelOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaLiveChannelOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveChannelOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveChannelOrderBy.NAME_DESC = "-name";
KalturaLiveChannelOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveChannelOrderBy.PLAYS_DESC = "-plays";
KalturaLiveChannelOrderBy.RANK_DESC = "-rank";
KalturaLiveChannelOrderBy.RECENT_DESC = "-recent";
KalturaLiveChannelOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveChannelOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveChannelOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveChannelOrderBy.VIEWS_DESC = "-views";
KalturaLiveChannelOrderBy.WEIGHT_DESC = "-weight";

function KalturaLiveChannelSegmentOrderBy(){
}
KalturaLiveChannelSegmentOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveChannelSegmentOrderBy.START_TIME_ASC = "+startTime";
KalturaLiveChannelSegmentOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveChannelSegmentOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveChannelSegmentOrderBy.START_TIME_DESC = "-startTime";
KalturaLiveChannelSegmentOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaLiveChannelSegmentStatus(){
}
KalturaLiveChannelSegmentStatus.ACTIVE = "2";
KalturaLiveChannelSegmentStatus.DELETED = "3";

function KalturaLiveChannelSegmentTriggerType(){
}
KalturaLiveChannelSegmentTriggerType.CHANNEL_RELATIVE = "1";
KalturaLiveChannelSegmentTriggerType.ABSOLUTE_TIME = "2";
KalturaLiveChannelSegmentTriggerType.SEGMENT_START_RELATIVE = "3";
KalturaLiveChannelSegmentTriggerType.SEGMENT_END_RELATIVE = "4";

function KalturaLiveChannelSegmentType(){
}
KalturaLiveChannelSegmentType.VIDEO_AND_AUDIO = "1";

function KalturaLiveEntryCompareAttribute(){
}
KalturaLiveEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaLiveEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaLiveEntryCompareAttribute.END_DATE = "endDate";
KalturaLiveEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaLiveEntryCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaLiveEntryCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaLiveEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaLiveEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaLiveEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaLiveEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaLiveEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaLiveEntryCompareAttribute.PLAYS = "plays";
KalturaLiveEntryCompareAttribute.RANK = "rank";
KalturaLiveEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaLiveEntryCompareAttribute.START_DATE = "startDate";
KalturaLiveEntryCompareAttribute.STATUS = "status";
KalturaLiveEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaLiveEntryCompareAttribute.TYPE = "type";
KalturaLiveEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaLiveEntryCompareAttribute.VIEWS = "views";

function KalturaLiveEntryMatchAttribute(){
}
KalturaLiveEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaLiveEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaLiveEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaLiveEntryMatchAttribute.DESCRIPTION = "description";
KalturaLiveEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaLiveEntryMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaLiveEntryMatchAttribute.GROUP_ID = "groupId";
KalturaLiveEntryMatchAttribute.ID = "id";
KalturaLiveEntryMatchAttribute.NAME = "name";
KalturaLiveEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaLiveEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaLiveEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaLiveEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaLiveEntryMatchAttribute.TAGS = "tags";
KalturaLiveEntryMatchAttribute.USER_ID = "userId";

function KalturaLiveEntryOrderBy(){
}
KalturaLiveEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveEntryOrderBy.FIRST_BROADCAST_ASC = "+firstBroadcast";
KalturaLiveEntryOrderBy.LAST_BROADCAST_ASC = "+lastBroadcast";
KalturaLiveEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaLiveEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveEntryOrderBy.NAME_ASC = "+name";
KalturaLiveEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveEntryOrderBy.RECENT_ASC = "+recent";
KalturaLiveEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveEntryOrderBy.FIRST_BROADCAST_DESC = "-firstBroadcast";
KalturaLiveEntryOrderBy.LAST_BROADCAST_DESC = "-lastBroadcast";
KalturaLiveEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaLiveEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveEntryOrderBy.NAME_DESC = "-name";
KalturaLiveEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveEntryOrderBy.RECENT_DESC = "-recent";
KalturaLiveEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaLiveEntryScheduleResourceOrderBy(){
}
KalturaLiveEntryScheduleResourceOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveEntryScheduleResourceOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveEntryScheduleResourceOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveEntryScheduleResourceOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaLiveParamsOrderBy(){
}

function KalturaLiveReportOrderBy(){
}
KalturaLiveReportOrderBy.NAME_ASC = "+name";
KalturaLiveReportOrderBy.AUDIENCE_DESC = "-audience";
KalturaLiveReportOrderBy.EVENT_TIME_DESC = "-eventTime";
KalturaLiveReportOrderBy.PLAYS_DESC = "-plays";

function KalturaLiveReportType(){
}
KalturaLiveReportType.ENTRY_GEO_TIME_LINE = "ENTRY_GEO_TIME_LINE";
KalturaLiveReportType.ENTRY_SYNDICATION_TOTAL = "ENTRY_SYNDICATION_TOTAL";
KalturaLiveReportType.ENTRY_TIME_LINE = "ENTRY_TIME_LINE";
KalturaLiveReportType.ENTRY_TOTAL = "ENTRY_TOTAL";
KalturaLiveReportType.PARTNER_TOTAL = "PARTNER_TOTAL";

function KalturaLiveStreamAdminEntryCompareAttribute(){
}
KalturaLiveStreamAdminEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaLiveStreamAdminEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaLiveStreamAdminEntryCompareAttribute.END_DATE = "endDate";
KalturaLiveStreamAdminEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaLiveStreamAdminEntryCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaLiveStreamAdminEntryCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaLiveStreamAdminEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaLiveStreamAdminEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaLiveStreamAdminEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaLiveStreamAdminEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaLiveStreamAdminEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaLiveStreamAdminEntryCompareAttribute.PLAYS = "plays";
KalturaLiveStreamAdminEntryCompareAttribute.RANK = "rank";
KalturaLiveStreamAdminEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaLiveStreamAdminEntryCompareAttribute.START_DATE = "startDate";
KalturaLiveStreamAdminEntryCompareAttribute.STATUS = "status";
KalturaLiveStreamAdminEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaLiveStreamAdminEntryCompareAttribute.TYPE = "type";
KalturaLiveStreamAdminEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaLiveStreamAdminEntryCompareAttribute.VIEWS = "views";

function KalturaLiveStreamAdminEntryMatchAttribute(){
}
KalturaLiveStreamAdminEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaLiveStreamAdminEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaLiveStreamAdminEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaLiveStreamAdminEntryMatchAttribute.DESCRIPTION = "description";
KalturaLiveStreamAdminEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaLiveStreamAdminEntryMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaLiveStreamAdminEntryMatchAttribute.GROUP_ID = "groupId";
KalturaLiveStreamAdminEntryMatchAttribute.ID = "id";
KalturaLiveStreamAdminEntryMatchAttribute.NAME = "name";
KalturaLiveStreamAdminEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaLiveStreamAdminEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaLiveStreamAdminEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaLiveStreamAdminEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaLiveStreamAdminEntryMatchAttribute.TAGS = "tags";
KalturaLiveStreamAdminEntryMatchAttribute.USER_ID = "userId";

function KalturaLiveStreamAdminEntryOrderBy(){
}
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamAdminEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamAdminEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveStreamAdminEntryOrderBy.FIRST_BROADCAST_ASC = "+firstBroadcast";
KalturaLiveStreamAdminEntryOrderBy.LAST_BROADCAST_ASC = "+lastBroadcast";
KalturaLiveStreamAdminEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamAdminEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamAdminEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamAdminEntryOrderBy.RECENT_ASC = "+recent";
KalturaLiveStreamAdminEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamAdminEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamAdminEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamAdminEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveStreamAdminEntryOrderBy.FIRST_BROADCAST_DESC = "-firstBroadcast";
KalturaLiveStreamAdminEntryOrderBy.LAST_BROADCAST_DESC = "-lastBroadcast";
KalturaLiveStreamAdminEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamAdminEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamAdminEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamAdminEntryOrderBy.RECENT_DESC = "-recent";
KalturaLiveStreamAdminEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamAdminEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaLiveStreamEntryCompareAttribute(){
}
KalturaLiveStreamEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaLiveStreamEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaLiveStreamEntryCompareAttribute.END_DATE = "endDate";
KalturaLiveStreamEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaLiveStreamEntryCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaLiveStreamEntryCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaLiveStreamEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaLiveStreamEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaLiveStreamEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaLiveStreamEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaLiveStreamEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaLiveStreamEntryCompareAttribute.PLAYS = "plays";
KalturaLiveStreamEntryCompareAttribute.RANK = "rank";
KalturaLiveStreamEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaLiveStreamEntryCompareAttribute.START_DATE = "startDate";
KalturaLiveStreamEntryCompareAttribute.STATUS = "status";
KalturaLiveStreamEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaLiveStreamEntryCompareAttribute.TYPE = "type";
KalturaLiveStreamEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaLiveStreamEntryCompareAttribute.VIEWS = "views";

function KalturaLiveStreamEntryMatchAttribute(){
}
KalturaLiveStreamEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaLiveStreamEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaLiveStreamEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaLiveStreamEntryMatchAttribute.DESCRIPTION = "description";
KalturaLiveStreamEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaLiveStreamEntryMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaLiveStreamEntryMatchAttribute.GROUP_ID = "groupId";
KalturaLiveStreamEntryMatchAttribute.ID = "id";
KalturaLiveStreamEntryMatchAttribute.NAME = "name";
KalturaLiveStreamEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaLiveStreamEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaLiveStreamEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaLiveStreamEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaLiveStreamEntryMatchAttribute.TAGS = "tags";
KalturaLiveStreamEntryMatchAttribute.USER_ID = "userId";

function KalturaLiveStreamEntryOrderBy(){
}
KalturaLiveStreamEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveStreamEntryOrderBy.FIRST_BROADCAST_ASC = "+firstBroadcast";
KalturaLiveStreamEntryOrderBy.LAST_BROADCAST_ASC = "+lastBroadcast";
KalturaLiveStreamEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamEntryOrderBy.RECENT_ASC = "+recent";
KalturaLiveStreamEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveStreamEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveStreamEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveStreamEntryOrderBy.FIRST_BROADCAST_DESC = "-firstBroadcast";
KalturaLiveStreamEntryOrderBy.LAST_BROADCAST_DESC = "-lastBroadcast";
KalturaLiveStreamEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveStreamEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamEntryOrderBy.RECENT_DESC = "-recent";
KalturaLiveStreamEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveStreamEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaLiveStreamScheduleEventOrderBy(){
}
KalturaLiveStreamScheduleEventOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamScheduleEventOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveStreamScheduleEventOrderBy.PRIORITY_ASC = "+priority";
KalturaLiveStreamScheduleEventOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveStreamScheduleEventOrderBy.SUMMARY_ASC = "+summary";
KalturaLiveStreamScheduleEventOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamScheduleEventOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamScheduleEventOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveStreamScheduleEventOrderBy.PRIORITY_DESC = "-priority";
KalturaLiveStreamScheduleEventOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveStreamScheduleEventOrderBy.SUMMARY_DESC = "-summary";
KalturaLiveStreamScheduleEventOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaLocationScheduleResourceOrderBy(){
}
KalturaLocationScheduleResourceOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLocationScheduleResourceOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLocationScheduleResourceOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLocationScheduleResourceOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMailType(){
}
KalturaMailType.MAIL_TYPE_KALTURA_NEWSLETTER = "10";
KalturaMailType.MAIL_TYPE_ADDED_TO_FAVORITES = "11";
KalturaMailType.MAIL_TYPE_ADDED_TO_CLIP_FAVORITES = "12";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_PROFILE = "13";
KalturaMailType.MAIL_TYPE_CLIP_ADDED_YOUR_KALTURA = "20";
KalturaMailType.MAIL_TYPE_VIDEO_ADDED = "21";
KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED = "22";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_YOUR_FAVORITES = "23";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA = "24";
KalturaMailType.MAIL_TYPE_CLIP_ADDED = "30";
KalturaMailType.MAIL_TYPE_VIDEO_CREATED = "31";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES = "32";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_CONTRIBUTED = "33";
KalturaMailType.MAIL_TYPE_CLIP_CONTRIBUTED = "40";
KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED = "41";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES_SUBSCRIBED = "42";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_SUBSCRIBED = "43";
KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM = "50";
KalturaMailType.MAIL_TYPE_PASSWORD_RESET = "51";
KalturaMailType.MAIL_TYPE_LOGIN_MAIL_RESET = "52";
KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE = "54";
KalturaMailType.MAIL_TYPE_VIDEO_READY = "60";
KalturaMailType.MAIL_TYPE_VIDEO_IS_READY = "62";
KalturaMailType.MAIL_TYPE_BULK_DOWNLOAD_READY = "63";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_FINISHED = "64";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_FAILED = "65";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_ABORTED = "66";
KalturaMailType.MAIL_TYPE_NOTIFY_ERR = "70";
KalturaMailType.MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM = "80";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE = "81";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED = "82";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED = "83";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED = "84";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER = "85";
KalturaMailType.MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM = "86";
KalturaMailType.MAIL_TYPE_EXTENDED_FREE_TRIAL_ENDS_WARNING = "87";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD = "110";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS = "111";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD = "112";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED = "113";
KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_SUCCESS = "130";
KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_FAILURE = "131";
KalturaMailType.MAIL_TYPE_LIVE_REPORT_EXPORT_ABORT = "132";
KalturaMailType.MAIL_TYPE_USERS_CSV = "133";
KalturaMailType.MAIL_TYPE_OBJECTS_CSV = "135";
KalturaMailType.MAIL_TYPE_REPORT_EXPORT_SUCCESS = "136";
KalturaMailType.MAIL_TYPE_REPORT_EXPORT_FAILURE = "137";
KalturaMailType.MAIL_TYPE_REPORT_EXPORT_ABORT = "138";
KalturaMailType.MAIL_TYPE_SIP_FAILURE = "139";

function KalturaMatchConditionType(){
}
KalturaMatchConditionType.MATCH_ANY = "1";
KalturaMatchConditionType.MATCH_ALL = "2";

function KalturaMediaEntryCompareAttribute(){
}
KalturaMediaEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaMediaEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaMediaEntryCompareAttribute.END_DATE = "endDate";
KalturaMediaEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaMediaEntryCompareAttribute.MEDIA_DATE = "mediaDate";
KalturaMediaEntryCompareAttribute.MEDIA_TYPE = "mediaType";
KalturaMediaEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaMediaEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaMediaEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaMediaEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaMediaEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaMediaEntryCompareAttribute.PLAYS = "plays";
KalturaMediaEntryCompareAttribute.RANK = "rank";
KalturaMediaEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaMediaEntryCompareAttribute.START_DATE = "startDate";
KalturaMediaEntryCompareAttribute.STATUS = "status";
KalturaMediaEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaMediaEntryCompareAttribute.TYPE = "type";
KalturaMediaEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaMediaEntryCompareAttribute.VIEWS = "views";

function KalturaMediaEntryMatchAttribute(){
}
KalturaMediaEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaMediaEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaMediaEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaMediaEntryMatchAttribute.DESCRIPTION = "description";
KalturaMediaEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaMediaEntryMatchAttribute.FLAVOR_PARAMS_IDS = "flavorParamsIds";
KalturaMediaEntryMatchAttribute.GROUP_ID = "groupId";
KalturaMediaEntryMatchAttribute.ID = "id";
KalturaMediaEntryMatchAttribute.NAME = "name";
KalturaMediaEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaMediaEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaMediaEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaMediaEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaMediaEntryMatchAttribute.TAGS = "tags";
KalturaMediaEntryMatchAttribute.USER_ID = "userId";

function KalturaMediaEntryOrderBy(){
}
KalturaMediaEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMediaEntryOrderBy.DURATION_ASC = "+duration";
KalturaMediaEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaMediaEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaMediaEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaMediaEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMediaEntryOrderBy.NAME_ASC = "+name";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMediaEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMediaEntryOrderBy.RANK_ASC = "+rank";
KalturaMediaEntryOrderBy.RECENT_ASC = "+recent";
KalturaMediaEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaMediaEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaMediaEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMediaEntryOrderBy.VIEWS_ASC = "+views";
KalturaMediaEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaMediaEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMediaEntryOrderBy.DURATION_DESC = "-duration";
KalturaMediaEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaMediaEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaMediaEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaMediaEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMediaEntryOrderBy.NAME_DESC = "-name";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaMediaEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMediaEntryOrderBy.RANK_DESC = "-rank";
KalturaMediaEntryOrderBy.RECENT_DESC = "-recent";
KalturaMediaEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaMediaEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaMediaEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMediaEntryOrderBy.VIEWS_DESC = "-views";
KalturaMediaEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaMediaFlavorParamsOrderBy(){
}

function KalturaMediaFlavorParamsOutputOrderBy(){
}

function KalturaMediaInfoOrderBy(){
}

function KalturaMediaParserType(){
}
KalturaMediaParserType.MEDIAINFO = "0";
KalturaMediaParserType.REMOTE_MEDIAINFO = "remoteMediaInfo.RemoteMediaInfo";
KalturaMediaParserType.FFMPEG = "1";

function KalturaMediaServerNodeOrderBy(){
}
KalturaMediaServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMediaServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaMediaServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMediaServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMediaServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaMediaServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetadataObjectType(){
}
KalturaMetadataObjectType.AD_CUE_POINT = "adCuePointMetadata.AdCuePoint";
KalturaMetadataObjectType.ANNOTATION = "annotationMetadata.Annotation";
KalturaMetadataObjectType.CODE_CUE_POINT = "codeCuePointMetadata.CodeCuePoint";
KalturaMetadataObjectType.ANSWER_CUE_POINT = "quiz.AnswerCuePoint";
KalturaMetadataObjectType.QUESTION_CUE_POINT = "quiz.QuestionCuePoint";
KalturaMetadataObjectType.THUMB_CUE_POINT = "thumbCuePointMetadata.thumbCuePoint";
KalturaMetadataObjectType.ENTRY = "1";
KalturaMetadataObjectType.CATEGORY = "2";
KalturaMetadataObjectType.USER = "3";
KalturaMetadataObjectType.PARTNER = "4";
KalturaMetadataObjectType.DYNAMIC_OBJECT = "5";
KalturaMetadataObjectType.USER_ENTRY = "6";

function KalturaMetadataOrderBy(){
}
KalturaMetadataOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_ASC = "+metadataProfileVersion";
KalturaMetadataOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataOrderBy.VERSION_ASC = "+version";
KalturaMetadataOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_DESC = "-metadataProfileVersion";
KalturaMetadataOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMetadataOrderBy.VERSION_DESC = "-version";

function KalturaMetadataProfileOrderBy(){
}
KalturaMetadataProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetroPcsDistributionProfileOrderBy(){
}
KalturaMetroPcsDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetroPcsDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetroPcsDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetroPcsDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetroPcsDistributionProviderOrderBy(){
}

function KalturaMixEntryCompareAttribute(){
}
KalturaMixEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaMixEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaMixEntryCompareAttribute.END_DATE = "endDate";
KalturaMixEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaMixEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaMixEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaMixEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaMixEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaMixEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaMixEntryCompareAttribute.PLAYS = "plays";
KalturaMixEntryCompareAttribute.RANK = "rank";
KalturaMixEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaMixEntryCompareAttribute.START_DATE = "startDate";
KalturaMixEntryCompareAttribute.STATUS = "status";
KalturaMixEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaMixEntryCompareAttribute.TYPE = "type";
KalturaMixEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaMixEntryCompareAttribute.VIEWS = "views";

function KalturaMixEntryMatchAttribute(){
}
KalturaMixEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaMixEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaMixEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaMixEntryMatchAttribute.DESCRIPTION = "description";
KalturaMixEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaMixEntryMatchAttribute.GROUP_ID = "groupId";
KalturaMixEntryMatchAttribute.ID = "id";
KalturaMixEntryMatchAttribute.NAME = "name";
KalturaMixEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaMixEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaMixEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaMixEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaMixEntryMatchAttribute.TAGS = "tags";
KalturaMixEntryMatchAttribute.USER_ID = "userId";

function KalturaMixEntryOrderBy(){
}
KalturaMixEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMixEntryOrderBy.DURATION_ASC = "+duration";
KalturaMixEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaMixEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaMixEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMixEntryOrderBy.NAME_ASC = "+name";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMixEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMixEntryOrderBy.RANK_ASC = "+rank";
KalturaMixEntryOrderBy.RECENT_ASC = "+recent";
KalturaMixEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaMixEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaMixEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMixEntryOrderBy.VIEWS_ASC = "+views";
KalturaMixEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaMixEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMixEntryOrderBy.DURATION_DESC = "-duration";
KalturaMixEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaMixEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaMixEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMixEntryOrderBy.NAME_DESC = "-name";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaMixEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMixEntryOrderBy.RANK_DESC = "-rank";
KalturaMixEntryOrderBy.RECENT_DESC = "-recent";
KalturaMixEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaMixEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaMixEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMixEntryOrderBy.VIEWS_DESC = "-views";
KalturaMixEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaModerationFlagStatus(){
}
KalturaModerationFlagStatus.PENDING = "1";
KalturaModerationFlagStatus.MODERATED = "2";

function KalturaModerationObjectType(){
}
KalturaModerationObjectType.ENTRY = "2";
KalturaModerationObjectType.USER = "3";

function KalturaMsnDistributionProfileOrderBy(){
}
KalturaMsnDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMsnDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMsnDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMsnDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMsnDistributionProviderOrderBy(){
}

function KalturaNdnDistributionProfileOrderBy(){
}
KalturaNdnDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaNdnDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaNdnDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaNdnDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaNdnDistributionProviderOrderBy(){
}

function KalturaObjectFilterEngineType(){
}
KalturaObjectFilterEngineType.ENTRY = "1";
KalturaObjectFilterEngineType.ENTRY_VENDOR_TASK = "2";
KalturaObjectFilterEngineType.RECYCLE_BIN_CLEANUP = "3";

function KalturaObjectTaskType(){
}
KalturaObjectTaskType.DISTRIBUTE = "scheduledTaskContentDistribution.Distribute";
KalturaObjectTaskType.DISPATCH_EVENT_NOTIFICATION = "scheduledTaskEventNotification.DispatchEventNotification";
KalturaObjectTaskType.EXECUTE_METADATA_XSLT = "scheduledTaskMetadata.ExecuteMetadataXslt";
KalturaObjectTaskType.DELETE_ENTRY = "1";
KalturaObjectTaskType.MODIFY_CATEGORIES = "2";
KalturaObjectTaskType.DELETE_ENTRY_FLAVORS = "3";
KalturaObjectTaskType.CONVERT_ENTRY_FLAVORS = "4";
KalturaObjectTaskType.DELETE_LOCAL_CONTENT = "5";
KalturaObjectTaskType.STORAGE_EXPORT = "6";
KalturaObjectTaskType.MODIFY_ENTRY = "7";
KalturaObjectTaskType.MAIL_NOTIFICATION = "8";
KalturaObjectTaskType.RECYCLE_BIN_CLEANUP = "9";

function KalturaPartnerOrderBy(){
}
KalturaPartnerOrderBy.ADMIN_EMAIL_ASC = "+adminEmail";
KalturaPartnerOrderBy.ADMIN_NAME_ASC = "+adminName";
KalturaPartnerOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPartnerOrderBy.ID_ASC = "+id";
KalturaPartnerOrderBy.NAME_ASC = "+name";
KalturaPartnerOrderBy.STATUS_ASC = "+status";
KalturaPartnerOrderBy.WEBSITE_ASC = "+website";
KalturaPartnerOrderBy.ADMIN_EMAIL_DESC = "-adminEmail";
KalturaPartnerOrderBy.ADMIN_NAME_DESC = "-adminName";
KalturaPartnerOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPartnerOrderBy.ID_DESC = "-id";
KalturaPartnerOrderBy.NAME_DESC = "-name";
KalturaPartnerOrderBy.STATUS_DESC = "-status";
KalturaPartnerOrderBy.WEBSITE_DESC = "-website";

function KalturaPdfFlavorParamsOrderBy(){
}

function KalturaPdfFlavorParamsOutputOrderBy(){
}

function KalturaPermissionItemOrderBy(){
}
KalturaPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionItemOrderBy.ID_ASC = "+id";
KalturaPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionItemOrderBy.ID_DESC = "-id";
KalturaPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPermissionItemType(){
}
KalturaPermissionItemType.API_ACTION_ITEM = "kApiActionPermissionItem";
KalturaPermissionItemType.API_PARAMETER_ITEM = "kApiParameterPermissionItem";

function KalturaPermissionOrderBy(){
}
KalturaPermissionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionOrderBy.ID_ASC = "+id";
KalturaPermissionOrderBy.NAME_ASC = "+name";
KalturaPermissionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionOrderBy.ID_DESC = "-id";
KalturaPermissionOrderBy.NAME_DESC = "-name";
KalturaPermissionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPlayReadyAnalogVideoOPId(){
}
KalturaPlayReadyAnalogVideoOPId.EXPLICIT_ANALOG_TV = "2098DE8D-7DDD-4BAB-96C6-32EBB6FABEA3";
KalturaPlayReadyAnalogVideoOPId.BEST_EFFORT_EXPLICIT_ANALOG_TV = "225CD36F-F132-49EF-BA8C-C91EA28E4369";
KalturaPlayReadyAnalogVideoOPId.IMAGE_CONSTRAINT_VIDEO = "811C5110-46C8-4C6E-8163-C0482A15D47E";
KalturaPlayReadyAnalogVideoOPId.AGC_AND_COLOR_STRIPE = "C3FD11C6-F8B7-4D20-B008-1DB17D61F2DA";
KalturaPlayReadyAnalogVideoOPId.IMAGE_CONSTRAINT_MONITOR = "D783A191-E083-4BAF-B2DA-E69F910B3772";

function KalturaPlayReadyCopyEnablerType(){
}
KalturaPlayReadyCopyEnablerType.CSS = "3CAF2814-A7AB-467C-B4DF-54ACC56C66DC";
KalturaPlayReadyCopyEnablerType.PRINTER = "3CF2E054-F4D5-46cd-85A6-FCD152AD5FBE";
KalturaPlayReadyCopyEnablerType.DEVICE = "6848955D-516B-4EB0-90E8-8F6D5A77B85F";
KalturaPlayReadyCopyEnablerType.CLIPBOARD = "6E76C588-C3A9-47ea-A875-546D5209FF38";
KalturaPlayReadyCopyEnablerType.SDC = "79F78A0D-0B69-401e-8A90-8BEF30BCE192";
KalturaPlayReadyCopyEnablerType.SDC_PREVIEW = "81BD9AD4-A720-4ea1-B510-5D4E6FFB6A4D";
KalturaPlayReadyCopyEnablerType.AACS = "C3CF56E0-7FF2-4491-809F-53E21D3ABF07";
KalturaPlayReadyCopyEnablerType.HELIX = "CCB0B4E3-8B46-409e-A998-82556E3F5AF4";
KalturaPlayReadyCopyEnablerType.CPRM = "CDD801AD-A577-48DB-950E-46D5F1592FAE";
KalturaPlayReadyCopyEnablerType.PC = "CE480EDE-516B-40B3-90E1-D6CFC47630C5";
KalturaPlayReadyCopyEnablerType.SDC_LIMITED = "E6785609-64CC-4bfa-B82D-6B619733B746";
KalturaPlayReadyCopyEnablerType.ORANGE_BOOK_CD = "EC930B7D-1F2D-4682-A38B-8AB977721D0D";

function KalturaPlayReadyDigitalAudioOPId(){
}
KalturaPlayReadyDigitalAudioOPId.SCMS = "6D5CFA59-C250-4426-930E-FAC72C8FCFA6";

function KalturaPlayReadyPlayEnablerType(){
}
KalturaPlayReadyPlayEnablerType.HELIX = "002F9772-38A0-43E5-9F79-0F6361DCC62A";
KalturaPlayReadyPlayEnablerType.HDCP_WIVU = "1B4542E3-B5CF-4C99-B3BA-829AF46C92F8";
KalturaPlayReadyPlayEnablerType.AIRPLAY = "5ABF0F0D-DC29-4B82-9982-FD8E57525BFC";
KalturaPlayReadyPlayEnablerType.UNKNOWN = "786627D8-C2A6-44BE-8F88-08AE255B01A";
KalturaPlayReadyPlayEnablerType.HDCP_MIRACAST = "A340C256-0941-4D4C-AD1D-0B6735C0CB24";
KalturaPlayReadyPlayEnablerType.UNKNOWN_520 = "B621D91F-EDCC-4035-8D4B-DC71760D43E9";
KalturaPlayReadyPlayEnablerType.DTCP = "D685030B-0F4F-43A6-BBAD-356F1EA0049A";

function KalturaPlayReadyPolicyOrderBy(){
}

function KalturaPlayReadyProfileOrderBy(){
}
KalturaPlayReadyProfileOrderBy.ID_ASC = "+id";
KalturaPlayReadyProfileOrderBy.NAME_ASC = "+name";
KalturaPlayReadyProfileOrderBy.ID_DESC = "-id";
KalturaPlayReadyProfileOrderBy.NAME_DESC = "-name";

function KalturaPlayableEntryCompareAttribute(){
}
KalturaPlayableEntryCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaPlayableEntryCompareAttribute.CREATED_AT = "createdAt";
KalturaPlayableEntryCompareAttribute.END_DATE = "endDate";
KalturaPlayableEntryCompareAttribute.LAST_PLAYED_AT = "lastPlayedAt";
KalturaPlayableEntryCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaPlayableEntryCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaPlayableEntryCompareAttribute.MS_DURATION = "msDuration";
KalturaPlayableEntryCompareAttribute.PARTNER_ID = "partnerId";
KalturaPlayableEntryCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaPlayableEntryCompareAttribute.PLAYS = "plays";
KalturaPlayableEntryCompareAttribute.RANK = "rank";
KalturaPlayableEntryCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaPlayableEntryCompareAttribute.START_DATE = "startDate";
KalturaPlayableEntryCompareAttribute.STATUS = "status";
KalturaPlayableEntryCompareAttribute.TOTAL_RANK = "totalRank";
KalturaPlayableEntryCompareAttribute.TYPE = "type";
KalturaPlayableEntryCompareAttribute.UPDATED_AT = "updatedAt";
KalturaPlayableEntryCompareAttribute.VIEWS = "views";

function KalturaPlayableEntryMatchAttribute(){
}
KalturaPlayableEntryMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaPlayableEntryMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaPlayableEntryMatchAttribute.CREATOR_ID = "creatorId";
KalturaPlayableEntryMatchAttribute.DESCRIPTION = "description";
KalturaPlayableEntryMatchAttribute.DURATION_TYPE = "durationType";
KalturaPlayableEntryMatchAttribute.GROUP_ID = "groupId";
KalturaPlayableEntryMatchAttribute.ID = "id";
KalturaPlayableEntryMatchAttribute.NAME = "name";
KalturaPlayableEntryMatchAttribute.REFERENCE_ID = "referenceId";
KalturaPlayableEntryMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaPlayableEntryMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaPlayableEntryMatchAttribute.SEARCH_TEXT = "searchText";
KalturaPlayableEntryMatchAttribute.TAGS = "tags";
KalturaPlayableEntryMatchAttribute.USER_ID = "userId";

function KalturaPlayableEntryOrderBy(){
}
KalturaPlayableEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlayableEntryOrderBy.DURATION_ASC = "+duration";
KalturaPlayableEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaPlayableEntryOrderBy.LAST_PLAYED_AT_ASC = "+lastPlayedAt";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlayableEntryOrderBy.NAME_ASC = "+name";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlayableEntryOrderBy.PLAYS_ASC = "+plays";
KalturaPlayableEntryOrderBy.RANK_ASC = "+rank";
KalturaPlayableEntryOrderBy.RECENT_ASC = "+recent";
KalturaPlayableEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaPlayableEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaPlayableEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlayableEntryOrderBy.VIEWS_ASC = "+views";
KalturaPlayableEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaPlayableEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlayableEntryOrderBy.DURATION_DESC = "-duration";
KalturaPlayableEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaPlayableEntryOrderBy.LAST_PLAYED_AT_DESC = "-lastPlayedAt";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlayableEntryOrderBy.NAME_DESC = "-name";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaPlayableEntryOrderBy.PLAYS_DESC = "-plays";
KalturaPlayableEntryOrderBy.RANK_DESC = "-rank";
KalturaPlayableEntryOrderBy.RECENT_DESC = "-recent";
KalturaPlayableEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaPlayableEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaPlayableEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlayableEntryOrderBy.VIEWS_DESC = "-views";
KalturaPlayableEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaPlaybackProtocol(){
}
KalturaPlaybackProtocol.APPLE_HTTP = "applehttp";
KalturaPlaybackProtocol.APPLE_HTTP_TO_MC = "applehttp_to_mc";
KalturaPlaybackProtocol.AUTO = "auto";
KalturaPlaybackProtocol.DOWNLOAD = "download";
KalturaPlaybackProtocol.AKAMAI_HD = "hdnetwork";
KalturaPlaybackProtocol.AKAMAI_HDS = "hdnetworkmanifest";
KalturaPlaybackProtocol.HDS = "hds";
KalturaPlaybackProtocol.HLS = "hls";
KalturaPlaybackProtocol.HTTP = "http";
KalturaPlaybackProtocol.MPEG_DASH = "mpegdash";
KalturaPlaybackProtocol.MULTICAST_SL = "multicast_silverlight";
KalturaPlaybackProtocol.RTMP = "rtmp";
KalturaPlaybackProtocol.RTSP = "rtsp";
KalturaPlaybackProtocol.SILVER_LIGHT = "sl";
KalturaPlaybackProtocol.URL = "url";

function KalturaPlaylistCompareAttribute(){
}
KalturaPlaylistCompareAttribute.ACCESS_CONTROL_ID = "accessControlId";
KalturaPlaylistCompareAttribute.CREATED_AT = "createdAt";
KalturaPlaylistCompareAttribute.END_DATE = "endDate";
KalturaPlaylistCompareAttribute.MODERATION_COUNT = "moderationCount";
KalturaPlaylistCompareAttribute.MODERATION_STATUS = "moderationStatus";
KalturaPlaylistCompareAttribute.PARTNER_ID = "partnerId";
KalturaPlaylistCompareAttribute.PARTNER_SORT_VALUE = "partnerSortValue";
KalturaPlaylistCompareAttribute.RANK = "rank";
KalturaPlaylistCompareAttribute.REPLACEMENT_STATUS = "replacementStatus";
KalturaPlaylistCompareAttribute.START_DATE = "startDate";
KalturaPlaylistCompareAttribute.STATUS = "status";
KalturaPlaylistCompareAttribute.TOTAL_RANK = "totalRank";
KalturaPlaylistCompareAttribute.TYPE = "type";
KalturaPlaylistCompareAttribute.UPDATED_AT = "updatedAt";

function KalturaPlaylistMatchAttribute(){
}
KalturaPlaylistMatchAttribute.ADMIN_TAGS = "adminTags";
KalturaPlaylistMatchAttribute.CATEGORIES_IDS = "categoriesIds";
KalturaPlaylistMatchAttribute.CREATOR_ID = "creatorId";
KalturaPlaylistMatchAttribute.DESCRIPTION = "description";
KalturaPlaylistMatchAttribute.GROUP_ID = "groupId";
KalturaPlaylistMatchAttribute.ID = "id";
KalturaPlaylistMatchAttribute.NAME = "name";
KalturaPlaylistMatchAttribute.REFERENCE_ID = "referenceId";
KalturaPlaylistMatchAttribute.REPLACED_ENTRY_ID = "replacedEntryId";
KalturaPlaylistMatchAttribute.REPLACING_ENTRY_ID = "replacingEntryId";
KalturaPlaylistMatchAttribute.SEARCH_TEXT = "searchText";
KalturaPlaylistMatchAttribute.TAGS = "tags";
KalturaPlaylistMatchAttribute.USER_ID = "userId";

function KalturaPlaylistOrderBy(){
}
KalturaPlaylistOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlaylistOrderBy.END_DATE_ASC = "+endDate";
KalturaPlaylistOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlaylistOrderBy.NAME_ASC = "+name";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlaylistOrderBy.RANK_ASC = "+rank";
KalturaPlaylistOrderBy.RECENT_ASC = "+recent";
KalturaPlaylistOrderBy.START_DATE_ASC = "+startDate";
KalturaPlaylistOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaPlaylistOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlaylistOrderBy.WEIGHT_ASC = "+weight";
KalturaPlaylistOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlaylistOrderBy.END_DATE_DESC = "-endDate";
KalturaPlaylistOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlaylistOrderBy.NAME_DESC = "-name";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaPlaylistOrderBy.RANK_DESC = "-rank";
KalturaPlaylistOrderBy.RECENT_DESC = "-recent";
KalturaPlaylistOrderBy.START_DATE_DESC = "-startDate";
KalturaPlaylistOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaPlaylistOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlaylistOrderBy.WEIGHT_DESC = "-weight";

function KalturaPodcastDistributionProfileOrderBy(){
}
KalturaPodcastDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPodcastDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPodcastDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPodcastDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPodcastDistributionProviderOrderBy(){
}

function KalturaPushNotificationCommandType(){
}
KalturaPushNotificationCommandType.CLEAR_QUEUE = "CLEAR_QUEUE";

function KalturaPushNotificationTemplateOrderBy(){
}
KalturaPushNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPushNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaPushNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPushNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPushNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaPushNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaQuestionCuePointOrderBy(){
}
KalturaQuestionCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaQuestionCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaQuestionCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaQuestionCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaQuestionCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaQuestionCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaQuestionCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaQuestionCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaQuestionCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaQuestionCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaQuestionCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaQuestionCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaQuickPlayDistributionProfileOrderBy(){
}
KalturaQuickPlayDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaQuickPlayDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaQuickPlayDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaQuickPlayDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaQuickPlayDistributionProviderOrderBy(){
}

function KalturaQuizUserEntryOrderBy(){
}
KalturaQuizUserEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaQuizUserEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaQuizUserEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaQuizUserEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaRatingCountOrderBy(){
}

function KalturaReachProfileOrderBy(){
}
KalturaReachProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaReachProfileOrderBy.ID_ASC = "+id";
KalturaReachProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaReachProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaReachProfileOrderBy.ID_DESC = "-id";
KalturaReachProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaReachVendorEngineType(){
}
KalturaReachVendorEngineType.OPEN_CALAIS = "OpenCalaisReachVendor.OPEN_CALAIS";
KalturaReachVendorEngineType.HELLO_WORLD = "ReachInternal.HELLO_WORLD";

function KalturaRecordScheduleEventOrderBy(){
}
KalturaRecordScheduleEventOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaRecordScheduleEventOrderBy.END_DATE_ASC = "+endDate";
KalturaRecordScheduleEventOrderBy.PRIORITY_ASC = "+priority";
KalturaRecordScheduleEventOrderBy.START_DATE_ASC = "+startDate";
KalturaRecordScheduleEventOrderBy.SUMMARY_ASC = "+summary";
KalturaRecordScheduleEventOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaRecordScheduleEventOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaRecordScheduleEventOrderBy.END_DATE_DESC = "-endDate";
KalturaRecordScheduleEventOrderBy.PRIORITY_DESC = "-priority";
KalturaRecordScheduleEventOrderBy.START_DATE_DESC = "-startDate";
KalturaRecordScheduleEventOrderBy.SUMMARY_DESC = "-summary";
KalturaRecordScheduleEventOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaRemoteDropFolderOrderBy(){
}
KalturaRemoteDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaRemoteDropFolderOrderBy.ID_ASC = "+id";
KalturaRemoteDropFolderOrderBy.NAME_ASC = "+name";
KalturaRemoteDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaRemoteDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaRemoteDropFolderOrderBy.ID_DESC = "-id";
KalturaRemoteDropFolderOrderBy.NAME_DESC = "-name";
KalturaRemoteDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaReportInterval(){
}
KalturaReportInterval.DAYS = "days";
KalturaReportInterval.HOURS = "hours";
KalturaReportInterval.MINUTES = "minutes";
KalturaReportInterval.MONTHS = "months";
KalturaReportInterval.TEN_MINUTES = "ten_minutes";
KalturaReportInterval.TEN_SECONDS = "ten_seconds";
KalturaReportInterval.YEARS = "years";

function KalturaReportOrderBy(){
}
KalturaReportOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaReportOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaReportType(){
}
KalturaReportType.QUIZ = "quiz.QUIZ";
KalturaReportType.QUIZ_AGGREGATE_BY_QUESTION = "quiz.QUIZ_AGGREGATE_BY_QUESTION";
KalturaReportType.QUIZ_USER_AGGREGATE_BY_QUESTION = "quiz.QUIZ_USER_AGGREGATE_BY_QUESTION";
KalturaReportType.QUIZ_USER_PERCENTAGE = "quiz.QUIZ_USER_PERCENTAGE";
KalturaReportType.TOP_CONTENT = "1";
KalturaReportType.CONTENT_DROPOFF = "2";
KalturaReportType.CONTENT_INTERACTIONS = "3";
KalturaReportType.MAP_OVERLAY = "4";
KalturaReportType.TOP_CONTRIBUTORS = "5";
KalturaReportType.TOP_SYNDICATION = "6";
KalturaReportType.CONTENT_CONTRIBUTIONS = "7";
KalturaReportType.USER_ENGAGEMENT = "11";
KalturaReportType.SPECIFIC_USER_ENGAGEMENT = "12";
KalturaReportType.USER_TOP_CONTENT = "13";
KalturaReportType.USER_CONTENT_DROPOFF = "14";
KalturaReportType.USER_CONTENT_INTERACTIONS = "15";
KalturaReportType.APPLICATIONS = "16";
KalturaReportType.USER_USAGE = "17";
KalturaReportType.SPECIFIC_USER_USAGE = "18";
KalturaReportType.VAR_USAGE = "19";
KalturaReportType.TOP_CREATORS = "20";
KalturaReportType.PLATFORMS = "21";
KalturaReportType.OPERATING_SYSTEM = "22";
KalturaReportType.BROWSERS = "23";
KalturaReportType.LIVE = "24";
KalturaReportType.TOP_PLAYBACK_CONTEXT = "25";
KalturaReportType.VPAAS_USAGE = "26";
KalturaReportType.ENTRY_USAGE = "27";
KalturaReportType.REACH_USAGE = "28";
KalturaReportType.TOP_CUSTOM_VAR1 = "29";
KalturaReportType.MAP_OVERLAY_CITY = "30";
KalturaReportType.OPERATING_SYSTEM_FAMILIES = "32";
KalturaReportType.BROWSERS_FAMILIES = "33";
KalturaReportType.USER_ENGAGEMENT_TIMELINE = "34";
KalturaReportType.UNIQUE_USERS_PLAY = "35";
KalturaReportType.MAP_OVERLAY_COUNTRY = "36";
KalturaReportType.MAP_OVERLAY_REGION = "37";
KalturaReportType.TOP_CONTENT_CREATOR = "38";
KalturaReportType.TOP_CONTENT_CONTRIBUTORS = "39";
KalturaReportType.APP_DOMAIN_UNIQUE_ACTIVE_USERS = "40";
KalturaReportType.TOP_SOURCES = "41";
KalturaReportType.VPAAS_USAGE_MULTI = "42";
KalturaReportType.PERCENTILES = "43";
KalturaReportType.CONTENT_REPORT_REASONS = "44";
KalturaReportType.PLAYER_RELATED_INTERACTIONS = "45";
KalturaReportType.PLAYBACK_RATE = "46";
KalturaReportType.TOP_USER_CONTENT = "47";
KalturaReportType.USER_HIGHLIGHTS = "48";
KalturaReportType.USER_INTERACTIVE_VIDEO = "49";
KalturaReportType.INTERACTIVE_VIDEO_TOP_NODES = "50";
KalturaReportType.LATEST_PLAYED_ENTRIES = "51";
KalturaReportType.CATEGORY_HIGHLIGHTS = "52";
KalturaReportType.SUB_CATEGORIES = "53";
KalturaReportType.INTERACTIVE_VIDEO_NODE_TOP_HOTSPOTS = "54";
KalturaReportType.INTERCATIVE_VIDEO_NODE_SWITCH_TOP_HOTSPOTS = "55";
KalturaReportType.INTERACTIVE_VIDEO_HOTSPOT_CLICKED_PERCENTILES = "56";
KalturaReportType.INTERACTIVE_VIDEO_NODE_SWITCH_HOTSPOT_CLICKED_PERCENTILES = "57";
KalturaReportType.TOP_CUSTOM_VAR2 = "58";
KalturaReportType.TOP_CUSTOM_VAR3 = "59";
KalturaReportType.SELF_SERVE_USAGE = "60";
KalturaReportType.FLAVOR_PARAMS_TRANSCODING_USAGE = "61";
KalturaReportType.PLAYER_HIGHLIGHTS = "62";
KalturaReportType.PARTNER_USAGE_HIGHLIGHTS = "63";
KalturaReportType.CDN_BANDWIDTH_USAGE = "64";
KalturaReportType.REACH_CATALOG_USAGE = "65";
KalturaReportType.REACH_PROFILE_USAGE = "66";
KalturaReportType.SELF_SERVE_BANDWIDTH = "67";
KalturaReportType.PARTNER_USAGE = "201";
KalturaReportType.MAP_OVERLAY_COUNTRY_REALTIME = "10001";
KalturaReportType.MAP_OVERLAY_REGION_REALTIME = "10002";
KalturaReportType.MAP_OVERLAY_CITY_REALTIME = "10003";
KalturaReportType.PLATFORMS_REALTIME = "10004";
KalturaReportType.USERS_OVERVIEW_REALTIME = "10005";
KalturaReportType.QOS_OVERVIEW_REALTIME = "10006";
KalturaReportType.DISCOVERY_REALTIME = "10007";
KalturaReportType.ENTRY_LEVEL_USERS_DISCOVERY_REALTIME = "10008";
KalturaReportType.ENTRY_LEVEL_USERS_STATUS_REALTIME = "10009";
KalturaReportType.PLATFORMS_DISCOVERY_REALTIME = "10010";
KalturaReportType.PLAYBACK_TYPE_REALTIME = "10011";
KalturaReportType.CONTENT_REALTIME = "10012";
KalturaReportType.DISCOVERY_VIEW_REALTIME = "10013";
KalturaReportType.TOP_ENDED_BROADCAST_ENTRIES = "10014";
KalturaReportType.TOP_LIVE_NOW_ENTRIES = "10015";
KalturaReportType.LIVE_MEETING_USERS_OVERVIEW_REALTIME = "10016";
KalturaReportType.CONTENT_DROPOFF_VPAAS = "20001";
KalturaReportType.TOP_SYNDICATION_VPAAS = "20002";
KalturaReportType.USER_TOP_CONTENT_VPAAS = "20003";
KalturaReportType.USER_USAGE_VPAAS = "20004";
KalturaReportType.PLATFORMS_VPAAS = "20005";
KalturaReportType.OPERATING_SYSTEM_VPAAS = "20006";
KalturaReportType.BROWSERS_VPAAS = "20007";
KalturaReportType.OPERATING_SYSTEM_FAMILIES_VPAAS = "20008";
KalturaReportType.BROWSERS_FAMILIES_VPAAS = "20009";
KalturaReportType.USER_ENGAGEMENT_TIMELINE_VPAAS = "20010";
KalturaReportType.UNIQUE_USERS_PLAY_VPAAS = "20011";
KalturaReportType.MAP_OVERLAY_COUNTRY_VPAAS = "20012";
KalturaReportType.MAP_OVERLAY_REGION_VPAAS = "20013";
KalturaReportType.MAP_OVERLAY_CITY_VPAAS = "20014";
KalturaReportType.TOP_CONTENT_CREATOR_VPAAS = "20015";
KalturaReportType.TOP_CONTENT_CONTRIBUTORS_VPAAS = "20016";
KalturaReportType.TOP_SOURCES_VPAAS = "20017";
KalturaReportType.CONTENT_REPORT_REASONS_VPAAS = "20018";
KalturaReportType.PLAYER_RELATED_INTERACTIONS_VPAAS = "20019";
KalturaReportType.PLAYBACK_RATE_VPAAS = "20020";
KalturaReportType.PARTNER_USAGE_VPAAS = "20021";
KalturaReportType.TOP_PLAYBACK_CONTEXT_VPAAS = "20022";
KalturaReportType.SELF_SERVE_USAGE_VPAAS = "20023";
KalturaReportType.QOE_OVERVIEW = "30001";
KalturaReportType.QOE_EXPERIENCE = "30002";
KalturaReportType.QOE_EXPERIENCE_PLATFORMS = "30003";
KalturaReportType.QOE_EXPERIENCE_COUNTRY = "30004";
KalturaReportType.QOE_EXPERIENCE_REGION = "30005";
KalturaReportType.QOE_EXPERIENCE_CITY = "30006";
KalturaReportType.QOE_EXPERIENCE_BROWSERS_FAMILIES = "30007";
KalturaReportType.QOE_EXPERIENCE_BROWSERS = "30008";
KalturaReportType.QOE_EXPERIENCE_OPERATING_SYSTEM_FAMILIES = "30009";
KalturaReportType.QOE_EXPERIENCE_OPERATING_SYSTEM = "30010";
KalturaReportType.QOE_EXPERIENCE_PLAYER_VERSION = "30011";
KalturaReportType.QOE_EXPERIENCE_ENTRY = "30012";
KalturaReportType.QOE_EXPERIENCE_ISP = "30013";
KalturaReportType.QOE_ENGAGEMENT = "30014";
KalturaReportType.QOE_ENGAGEMENT_PLATFORMS = "30015";
KalturaReportType.QOE_ENGAGEMENT_COUNTRY = "30016";
KalturaReportType.QOE_ENGAGEMENT_REGION = "30017";
KalturaReportType.QOE_ENGAGEMENT_CITY = "30018";
KalturaReportType.QOE_ENGAGEMENT_BROWSERS_FAMILIES = "30019";
KalturaReportType.QOE_ENGAGEMENT_BROWSERS = "30020";
KalturaReportType.QOE_ENGAGEMENT_OPERATING_SYSTEM_FAMILIES = "30021";
KalturaReportType.QOE_ENGAGEMENT_OPERATING_SYSTEM = "30022";
KalturaReportType.QOE_ENGAGEMENT_PLAYER_VERSION = "30023";
KalturaReportType.QOE_ENGAGEMENT_ENTRY = "30024";
KalturaReportType.QOE_ENGAGEMENT_ISP = "30025";
KalturaReportType.QOE_STREAM_QUALITY = "30026";
KalturaReportType.QOE_STREAM_QUALITY_PLATFORMS = "30027";
KalturaReportType.QOE_STREAM_QUALITY_COUNTRY = "30028";
KalturaReportType.QOE_STREAM_QUALITY_REGION = "30029";
KalturaReportType.QOE_STREAM_QUALITY_CITY = "30030";
KalturaReportType.QOE_STREAM_QUALITY_BROWSERS_FAMILIES = "30031";
KalturaReportType.QOE_STREAM_QUALITY_BROWSERS = "30032";
KalturaReportType.QOE_STREAM_QUALITY_OPERATING_SYSTEM_FAMILIES = "30033";
KalturaReportType.QOE_STREAM_QUALITY_OPERATING_SYSTEM = "30034";
KalturaReportType.QOE_STREAM_QUALITY_PLAYER_VERSION = "30035";
KalturaReportType.QOE_STREAM_QUALITY_ENTRY = "30036";
KalturaReportType.QOE_STREAM_QUALITY_ISP = "30037";
KalturaReportType.QOE_ERROR_TRACKING = "30038";
KalturaReportType.QOE_ERROR_TRACKING_CODES = "30039";
KalturaReportType.QOE_ERROR_TRACKING_PLATFORMS = "30040";
KalturaReportType.QOE_ERROR_TRACKING_BROWSERS_FAMILIES = "30041";
KalturaReportType.QOE_ERROR_TRACKING_BROWSERS = "30042";
KalturaReportType.QOE_ERROR_TRACKING_OPERATING_SYSTEM_FAMILIES = "30043";
KalturaReportType.QOE_ERROR_TRACKING_OPERATING_SYSTEM = "30044";
KalturaReportType.QOE_ERROR_TRACKING_PLAYER_VERSION = "30045";
KalturaReportType.QOE_ERROR_TRACKING_ENTRY = "30046";
KalturaReportType.QOE_VOD_SESSION_FLOW = "30047";
KalturaReportType.QOE_LIVE_SESSION_FLOW = "30048";
KalturaReportType.QOE_EXPERIENCE_CUSTOM_VAR1 = "30049";
KalturaReportType.QOE_EXPERIENCE_CUSTOM_VAR2 = "30050";
KalturaReportType.QOE_EXPERIENCE_CUSTOM_VAR3 = "30051";
KalturaReportType.QOE_ENGAGEMENT_CUSTOM_VAR1 = "30052";
KalturaReportType.QOE_ENGAGEMENT_CUSTOM_VAR2 = "30053";
KalturaReportType.QOE_ENGAGEMENT_CUSTOM_VAR3 = "30054";
KalturaReportType.QOE_STREAM_QUALITY_CUSTOM_VAR1 = "30055";
KalturaReportType.QOE_STREAM_QUALITY_CUSTOM_VAR2 = "30056";
KalturaReportType.QOE_STREAM_QUALITY_CUSTOM_VAR3 = "30057";
KalturaReportType.QOE_ERROR_TRACKING_CUSTOM_VAR1 = "30058";
KalturaReportType.QOE_ERROR_TRACKING_CUSTOM_VAR2 = "30059";
KalturaReportType.QOE_ERROR_TRACKING_CUSTOM_VAR3 = "30060";
KalturaReportType.QOE_EXPERIENCE_APPLICATION_VERSION = "30061";
KalturaReportType.QOE_ENGAGEMENT_APPLICATION_VERSION = "30062";
KalturaReportType.QOE_STREAM_QUALITY_APPLICATION_VERSION = "30063";
KalturaReportType.QOE_ERROR_TRACKING_APPLICATION_VERSION = "30064";
KalturaReportType.HIGHLIGHTS_WEBCAST = "40001";
KalturaReportType.ENGAGEMENT_WEBCAST = "40002";
KalturaReportType.QUALITY_WEBCAST = "40003";
KalturaReportType.MAP_OVERLAY_COUNTRY_WEBCAST = "40004";
KalturaReportType.MAP_OVERLAY_REGION_WEBCAST = "40005";
KalturaReportType.MAP_OVERLAY_CITY_WEBCAST = "40006";
KalturaReportType.PLATFORMS_WEBCAST = "40007";
KalturaReportType.TOP_DOMAINS_WEBCAST = "40008";
KalturaReportType.TOP_USERS_WEBCAST = "40009";
KalturaReportType.ENGAGEMENT_BREAKDOWN_WEBCAST = "40010";
KalturaReportType.ENGAGMENT_TIMELINE_WEBCAST = "40011";
KalturaReportType.ENGAGEMENT_TOOLS_WEBCAST = "40012";
KalturaReportType.REACTIONS_BREAKDOWN_WEBCAST = "40013";
KalturaReportType.VE_HIGHLIGHTS = "50000";
KalturaReportType.VE_REGISTERED_PLATFORMS = "50001";
KalturaReportType.VE_REGISTERED_INDUSTRY = "50002";
KalturaReportType.VE_REGISTERED_ROLES = "50003";
KalturaReportType.VE_REGISTERED_COUNTRIES = "50004";
KalturaReportType.VE_REGISTERED_WORLD_REGIONS = "50005";
KalturaReportType.VE_USER_HIGHLIGHTS = "50006";
KalturaReportType.VE_ATTENDANCE_HIGHLIGHTS = "50007";
KalturaReportType.VE_REGISTERED_COMPANIES = "50008";
KalturaReportType.EP_WEBCAST_HIGHLIGHTS = "60001";
KalturaReportType.EP_WEBCAST_UNIQUE_USERS = "60002";
KalturaReportType.EP_WEBCAST_ENGAGEMENT = "60003";
KalturaReportType.EP_WEBCAST_ENGAGEMENT_TIMELINE = "60004";
KalturaReportType.EP_WEBCAST_TOP_RECORDING = "60005";
KalturaReportType.EP_WEBCAST_TOP_PLATFORMS = "60006";
KalturaReportType.EP_WEBCAST_MAP_OVERLAY_COUNTRY = "60007";
KalturaReportType.EP_WEBCAST_MAP_OVERLAY_REGION = "60008";
KalturaReportType.EP_WEBCAST_MAP_OVERLAY_CITY = "60009";
KalturaReportType.EP_WEBCAST_LIVE_USER_ENGAGEMENT = "60010";
KalturaReportType.EP_WEBCAST_LIVE_USER_ENGAGEMENT_LEVEL = "60011";
KalturaReportType.EP_WEBCAST_VOD_USER_TOP_CONTENT = "60012";
KalturaReportType.EP_WEBCAST_VOD_LIVE_USERS_ENGAGEMENT = "60013";
KalturaReportType.EP_ATTENDEES = "60014";
KalturaReportType.EP_VIEWTIME = "60015";
KalturaReportType.EP_TOP_MOMENTS = "60016";
KalturaReportType.EP_TOP_SESSIONS = "60017";
KalturaReportType.EP_WEBCAST_ENGAGEMENT_OVER_TIME = "60018";
KalturaReportType.CNC_PARTICIPATION = "70001";

function KalturaResetPassLinkType(){
}
KalturaResetPassLinkType.KMC = "1";
KalturaResetPassLinkType.KMS = "2";
KalturaResetPassLinkType.KME = "3";
KalturaResetPassLinkType.EP = "4";
KalturaResetPassLinkType.KME_NR = "5";

function KalturaResponseProfileOrderBy(){
}
KalturaResponseProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaResponseProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaResponseProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaResponseProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaRoomEntryOrderBy(){
}
KalturaRoomEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaRoomEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaRoomEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaRoomEntryOrderBy.NAME_ASC = "+name";
KalturaRoomEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaRoomEntryOrderBy.RANK_ASC = "+rank";
KalturaRoomEntryOrderBy.RECENT_ASC = "+recent";
KalturaRoomEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaRoomEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaRoomEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaRoomEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaRoomEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaRoomEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaRoomEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaRoomEntryOrderBy.NAME_DESC = "-name";
KalturaRoomEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaRoomEntryOrderBy.RANK_DESC = "-rank";
KalturaRoomEntryOrderBy.RECENT_DESC = "-recent";
KalturaRoomEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaRoomEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaRoomEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaRoomEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaRuleActionType(){
}
KalturaRuleActionType.DRM_POLICY = "drm.DRM_POLICY";
KalturaRuleActionType.ADD_ENTRY_VENDOR_TASK = "reach.ADD_ENTRY_VENDOR_TASK";
KalturaRuleActionType.BLOCK = "1";
KalturaRuleActionType.PREVIEW = "2";
KalturaRuleActionType.LIMIT_FLAVORS = "3";
KalturaRuleActionType.ADD_TO_STORAGE = "4";
KalturaRuleActionType.LIMIT_DELIVERY_PROFILES = "5";
KalturaRuleActionType.SERVE_FROM_REMOTE_SERVER = "6";
KalturaRuleActionType.REQUEST_HOST_REGEX = "7";
KalturaRuleActionType.LIMIT_THUMBNAIL_CAPTURE = "8";

function KalturaScheduleEventOrderBy(){
}
KalturaScheduleEventOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScheduleEventOrderBy.END_DATE_ASC = "+endDate";
KalturaScheduleEventOrderBy.PRIORITY_ASC = "+priority";
KalturaScheduleEventOrderBy.START_DATE_ASC = "+startDate";
KalturaScheduleEventOrderBy.SUMMARY_ASC = "+summary";
KalturaScheduleEventOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScheduleEventOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScheduleEventOrderBy.END_DATE_DESC = "-endDate";
KalturaScheduleEventOrderBy.PRIORITY_DESC = "-priority";
KalturaScheduleEventOrderBy.START_DATE_DESC = "-startDate";
KalturaScheduleEventOrderBy.SUMMARY_DESC = "-summary";
KalturaScheduleEventOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaScheduleEventRecurrenceDay(){
}
KalturaScheduleEventRecurrenceDay.FRIDAY = "FR";
KalturaScheduleEventRecurrenceDay.MONDAY = "MO";
KalturaScheduleEventRecurrenceDay.SATURDAY = "SA";
KalturaScheduleEventRecurrenceDay.SUNDAY = "SU";
KalturaScheduleEventRecurrenceDay.THURSDAY = "TH";
KalturaScheduleEventRecurrenceDay.TUESDAY = "TU";
KalturaScheduleEventRecurrenceDay.WEDNESDAY = "WE";

function KalturaScheduleEventRecurrenceFrequency(){
}
KalturaScheduleEventRecurrenceFrequency.DAILY = "days";
KalturaScheduleEventRecurrenceFrequency.HOURLY = "hours";
KalturaScheduleEventRecurrenceFrequency.MINUTELY = "minutes";
KalturaScheduleEventRecurrenceFrequency.MONTHLY = "months";
KalturaScheduleEventRecurrenceFrequency.SECONDLY = "seconds";
KalturaScheduleEventRecurrenceFrequency.WEEKLY = "weeks";
KalturaScheduleEventRecurrenceFrequency.YEARLY = "years";

function KalturaScheduleEventResourceOrderBy(){
}
KalturaScheduleEventResourceOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScheduleEventResourceOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScheduleEventResourceOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScheduleEventResourceOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaScheduleResourceOrderBy(){
}
KalturaScheduleResourceOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScheduleResourceOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScheduleResourceOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScheduleResourceOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaScheduledTaskProfileOrderBy(){
}
KalturaScheduledTaskProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScheduledTaskProfileOrderBy.ID_ASC = "+id";
KalturaScheduledTaskProfileOrderBy.LAST_EXECUTION_STARTED_AT_ASC = "+lastExecutionStartedAt";
KalturaScheduledTaskProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScheduledTaskProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScheduledTaskProfileOrderBy.ID_DESC = "-id";
KalturaScheduledTaskProfileOrderBy.LAST_EXECUTION_STARTED_AT_DESC = "-lastExecutionStartedAt";
KalturaScheduledTaskProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSchemaType(){
}
KalturaSchemaType.BULK_UPLOAD_RESULT_XML = "bulkUploadXml.bulkUploadResultXML";
KalturaSchemaType.BULK_UPLOAD_XML = "bulkUploadXml.bulkUploadXML";
KalturaSchemaType.INGEST_API = "cuePoint.ingestAPI";
KalturaSchemaType.SERVE_API = "cuePoint.serveAPI";
KalturaSchemaType.DROP_FOLDER_XML = "dropFolderXmlBulkUpload.dropFolderXml";
KalturaSchemaType.SYNDICATION = "syndication";

function KalturaScpDropFolderOrderBy(){
}
KalturaScpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScpDropFolderOrderBy.ID_ASC = "+id";
KalturaScpDropFolderOrderBy.NAME_ASC = "+name";
KalturaScpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScpDropFolderOrderBy.ID_DESC = "-id";
KalturaScpDropFolderOrderBy.NAME_DESC = "-name";
KalturaScpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSearchConditionComparison(){
}
KalturaSearchConditionComparison.EQUAL = "1";
KalturaSearchConditionComparison.GREATER_THAN = "2";
KalturaSearchConditionComparison.GREATER_THAN_OR_EQUAL = "3";
KalturaSearchConditionComparison.LESS_THAN = "4";
KalturaSearchConditionComparison.LESS_THAN_OR_EQUAL = "5";
KalturaSearchConditionComparison.NOT_EQUAL = "6";

function KalturaServerNodeOrderBy(){
}
KalturaServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaServerNodeType(){
}
KalturaServerNodeType.CONFERENCE_SERVER = "conference.CONFERENCE_SERVER";
KalturaServerNodeType.LIVE_CLUSTER_MEDIA_SERVER = "liveCluster.LIVE_CLUSTER_MEDIA_SERVER";
KalturaServerNodeType.SIP_SERVER = "sip.SIP_SERVER";
KalturaServerNodeType.WOWZA_MEDIA_SERVER = "wowza.WOWZA_MEDIA_SERVER";
KalturaServerNodeType.EDGE = "1";

function KalturaSessionCuePointOrderBy(){
}
KalturaSessionCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSessionCuePointOrderBy.END_TIME_ASC = "+endTime";
KalturaSessionCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaSessionCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaSessionCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaSessionCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaSessionCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSessionCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSessionCuePointOrderBy.END_TIME_DESC = "-endTime";
KalturaSessionCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaSessionCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaSessionCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaSessionCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaSessionCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSftpDropFolderOrderBy(){
}
KalturaSftpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSftpDropFolderOrderBy.ID_ASC = "+id";
KalturaSftpDropFolderOrderBy.NAME_ASC = "+name";
KalturaSftpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSftpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSftpDropFolderOrderBy.ID_DESC = "-id";
KalturaSftpDropFolderOrderBy.NAME_DESC = "-name";
KalturaSftpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaShortLinkOrderBy(){
}
KalturaShortLinkOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaShortLinkOrderBy.EXPIRES_AT_ASC = "+expiresAt";
KalturaShortLinkOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaShortLinkOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaShortLinkOrderBy.EXPIRES_AT_DESC = "-expiresAt";
KalturaShortLinkOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSipServerNodeOrderBy(){
}
KalturaSipServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSipServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaSipServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSipServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSipServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaSipServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSourceType(){
}
KalturaSourceType.LIMELIGHT_LIVE = "limeLight.LIVE_STREAM";
KalturaSourceType.VELOCIX_LIVE = "velocix.VELOCIX_LIVE";
KalturaSourceType.FILE = "1";
KalturaSourceType.WEBCAM = "2";
KalturaSourceType.URL = "5";
KalturaSourceType.SEARCH_PROVIDER = "6";
KalturaSourceType.AKAMAI_LIVE = "29";
KalturaSourceType.MANUAL_LIVE_STREAM = "30";
KalturaSourceType.AKAMAI_UNIVERSAL_LIVE = "31";
KalturaSourceType.LIVE_STREAM = "32";
KalturaSourceType.LIVE_CHANNEL = "33";
KalturaSourceType.RECORDED_LIVE = "34";
KalturaSourceType.CLIP = "35";
KalturaSourceType.KALTURA_RECORDED_LIVE = "36";
KalturaSourceType.LECTURE_CAPTURE = "37";
KalturaSourceType.LIVE_STREAM_ONTEXTDATA_CAPTIONS = "42";

function KalturaSshDropFolderOrderBy(){
}
KalturaSshDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSshDropFolderOrderBy.ID_ASC = "+id";
KalturaSshDropFolderOrderBy.NAME_ASC = "+name";
KalturaSshDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSshDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSshDropFolderOrderBy.ID_DESC = "-id";
KalturaSshDropFolderOrderBy.NAME_DESC = "-name";
KalturaSshDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaStorageProfileOrderBy(){
}
KalturaStorageProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaStorageProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaStorageProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaStorageProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaStorageProfileProtocol(){
}
KalturaStorageProfileProtocol.KONTIKI = "kontiki.KONTIKI";
KalturaStorageProfileProtocol.KALTURA_DC = "0";
KalturaStorageProfileProtocol.FTP = "1";
KalturaStorageProfileProtocol.SCP = "2";
KalturaStorageProfileProtocol.SFTP = "3";
KalturaStorageProfileProtocol.S3 = "6";
KalturaStorageProfileProtocol.LOCAL = "7";

function KalturaSummaryWritingStyleTaskData(){
}
KalturaSummaryWritingStyleTaskData.CASUAL = "casual";
KalturaSummaryWritingStyleTaskData.FORMAL = "formal";

function KalturaSwfFlavorParamsOrderBy(){
}

function KalturaSwfFlavorParamsOutputOrderBy(){
}

function KalturaSynacorHboDistributionProfileOrderBy(){
}
KalturaSynacorHboDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSynacorHboDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSynacorHboDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSynacorHboDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSynacorHboDistributionProviderOrderBy(){
}

function KalturaSyndicationDistributionProfileOrderBy(){
}
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSyndicationFeedEntriesOrderBy(){
}
KalturaSyndicationFeedEntriesOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSyndicationFeedEntriesOrderBy.RECENT = "recent";

function KalturaTVComDistributionProfileOrderBy(){
}
KalturaTVComDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTVComDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTVComDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTVComDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTVComDistributionProviderOrderBy(){
}

function KalturaTaggedObjectType(){
}
KalturaTaggedObjectType.ENTRY = "1";
KalturaTaggedObjectType.CATEGORY = "2";
KalturaTaggedObjectType.LIVESTREAMENTRY = "3";

function KalturaThumbAssetOrderBy(){
}
KalturaThumbAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaThumbAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaThumbAssetOrderBy.SIZE_ASC = "+size";
KalturaThumbAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaThumbAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaThumbAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaThumbAssetOrderBy.SIZE_DESC = "-size";
KalturaThumbAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaThumbCuePointOrderBy(){
}
KalturaThumbCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaThumbCuePointOrderBy.INT_ID_ASC = "+intId";
KalturaThumbCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaThumbCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaThumbCuePointOrderBy.TRIGGERED_AT_ASC = "+triggeredAt";
KalturaThumbCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaThumbCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaThumbCuePointOrderBy.INT_ID_DESC = "-intId";
KalturaThumbCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaThumbCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaThumbCuePointOrderBy.TRIGGERED_AT_DESC = "-triggeredAt";
KalturaThumbCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaThumbParamsOrderBy(){
}

function KalturaThumbParamsOutputOrderBy(){
}

function KalturaTimeWarnerDistributionProfileOrderBy(){
}
KalturaTimeWarnerDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTimeWarnerDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTimeWarnerDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTimeWarnerDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTimeWarnerDistributionProviderOrderBy(){
}

function KalturaTimedThumbAssetOrderBy(){
}
KalturaTimedThumbAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTimedThumbAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaTimedThumbAssetOrderBy.SIZE_ASC = "+size";
KalturaTimedThumbAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTimedThumbAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTimedThumbAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaTimedThumbAssetOrderBy.SIZE_DESC = "-size";
KalturaTimedThumbAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTranscriptAssetOrderBy(){
}
KalturaTranscriptAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTranscriptAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaTranscriptAssetOrderBy.SIZE_ASC = "+size";
KalturaTranscriptAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTranscriptAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTranscriptAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaTranscriptAssetOrderBy.SIZE_DESC = "-size";
KalturaTranscriptAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTranscriptProviderType(){
}
KalturaTranscriptProviderType.CIELO24 = "cielo24.Cielo24";
KalturaTranscriptProviderType.VOICEBASE = "voicebase.Voicebase";

function KalturaTubeMogulSyndicationFeedCategories(){
}
KalturaTubeMogulSyndicationFeedCategories.ANIMALS_AND_PETS = "Animals &amp; Pets";
KalturaTubeMogulSyndicationFeedCategories.ARTS_AND_ANIMATION = "Arts &amp; Animation";
KalturaTubeMogulSyndicationFeedCategories.AUTOS = "Autos";
KalturaTubeMogulSyndicationFeedCategories.COMEDY = "Comedy";
KalturaTubeMogulSyndicationFeedCategories.COMMERCIALS_PROMOTIONAL = "Commercials/Promotional";
KalturaTubeMogulSyndicationFeedCategories.ENTERTAINMENT = "Entertainment";
KalturaTubeMogulSyndicationFeedCategories.FAMILY_AND_KIDS = "Family &amp; Kids";
KalturaTubeMogulSyndicationFeedCategories.HOW_TO_INSTRUCTIONAL_DIY = "How To/Instructional/DIY";
KalturaTubeMogulSyndicationFeedCategories.MUSIC = "Music";
KalturaTubeMogulSyndicationFeedCategories.NEWS_AND_BLOGS = "News &amp; Blogs";
KalturaTubeMogulSyndicationFeedCategories.SCIENCE_AND_TECHNOLOGY = "Science &amp; Technology";
KalturaTubeMogulSyndicationFeedCategories.SPORTS = "Sports";
KalturaTubeMogulSyndicationFeedCategories.TRAVEL_AND_PLACES = "Travel &amp; Places";
KalturaTubeMogulSyndicationFeedCategories.VIDEO_GAMES = "Video Games";
KalturaTubeMogulSyndicationFeedCategories.VLOGS_PEOPLE = "Vlogs &amp; People";

function KalturaTubeMogulSyndicationFeedOrderBy(){
}
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTvinciDistributionProfileOrderBy(){
}
KalturaTvinciDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTvinciDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTvinciDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTvinciDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTvinciDistributionProviderOrderBy(){
}

function KalturaTypeOfSummaryTaskData(){
}
KalturaTypeOfSummaryTaskData.CONCISE = "concise";
KalturaTypeOfSummaryTaskData.DETAILED = "detailed";
KalturaTypeOfSummaryTaskData.EXTENSIVE = "extensive";

function KalturaUiConfOrderBy(){
}
KalturaUiConfOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUiConfOrderBy.ID_ASC = "+id";
KalturaUiConfOrderBy.NAME_ASC = "+name";
KalturaUiConfOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUiConfOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUiConfOrderBy.ID_DESC = "-id";
KalturaUiConfOrderBy.NAME_DESC = "-name";
KalturaUiConfOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUnicornDistributionProfileOrderBy(){
}
KalturaUnicornDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUnicornDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUnicornDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUnicornDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUnicornDistributionProviderOrderBy(){
}

function KalturaUploadTokenOrderBy(){
}
KalturaUploadTokenOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUploadTokenOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUserCapabilityType(){
}
KalturaUserCapabilityType.SYNCED_GROUP = "0";

function KalturaUserEntryExtendedStatus(){
}
KalturaUserEntryExtendedStatus.SYNC_STATUS_ERROR = "quiz.SYNC_STATUS_ERROR";
KalturaUserEntryExtendedStatus.SYNC_STATUS_SUCCESS = "quiz.SYNC_STATUS_SUCCESS";
KalturaUserEntryExtendedStatus.PLAYBACK_COMPLETE = "viewHistory.PLAYBACK_COMPLETE";
KalturaUserEntryExtendedStatus.PLAYBACK_STARTED = "viewHistory.PLAYBACK_STARTED";
KalturaUserEntryExtendedStatus.VIEWED = "viewHistory.VIEWED";

function KalturaUserEntryOrderBy(){
}
KalturaUserEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUserEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUserEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUserEntryStatus(){
}
KalturaUserEntryStatus.QUIZ_SUBMITTED = "quiz.3";
KalturaUserEntryStatus.ACTIVE = "1";
KalturaUserEntryStatus.DELETED = "2";
KalturaUserEntryStatus.RECYCLED = "3";

function KalturaUserEntryType(){
}
KalturaUserEntryType.PERMISSION_LEVEL = "entryPermissionLevel.PERMISSION_LEVEL";
KalturaUserEntryType.QUIZ = "quiz.QUIZ";
KalturaUserEntryType.REGISTRATION = "registration.REGISTRATION";
KalturaUserEntryType.VIEW_HISTORY = "viewHistory.VIEW_HISTORY";
KalturaUserEntryType.WATCH_LATER = "watchLater.WATCH_LATER";

function KalturaUserLoginDataOrderBy(){
}

function KalturaUserOrderBy(){
}
KalturaUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserOrderBy.ID_ASC = "+id";
KalturaUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUserOrderBy.ID_DESC = "-id";
KalturaUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUserRoleOrderBy(){
}
KalturaUserRoleOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserRoleOrderBy.ID_ASC = "+id";
KalturaUserRoleOrderBy.NAME_ASC = "+name";
KalturaUserRoleOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUserRoleOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUserRoleOrderBy.ID_DESC = "-id";
KalturaUserRoleOrderBy.NAME_DESC = "-name";
KalturaUserRoleOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUverseClickToOrderDistributionProfileOrderBy(){
}
KalturaUverseClickToOrderDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUverseClickToOrderDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUverseClickToOrderDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUverseClickToOrderDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUverseClickToOrderDistributionProviderOrderBy(){
}

function KalturaUverseDistributionProfileOrderBy(){
}
KalturaUverseDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUverseDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUverseDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUverseDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUverseDistributionProviderOrderBy(){
}

function KalturaVendorCaptionsCatalogItemOrderBy(){
}
KalturaVendorCaptionsCatalogItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVendorCaptionsCatalogItemOrderBy.ID_ASC = "+id";
KalturaVendorCaptionsCatalogItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVendorCaptionsCatalogItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVendorCaptionsCatalogItemOrderBy.ID_DESC = "-id";
KalturaVendorCaptionsCatalogItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVendorCatalogItemOrderBy(){
}
KalturaVendorCatalogItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVendorCatalogItemOrderBy.ID_ASC = "+id";
KalturaVendorCatalogItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVendorCatalogItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVendorCatalogItemOrderBy.ID_DESC = "-id";
KalturaVendorCatalogItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVendorCatalogItemPriceFunction(){
}
KalturaVendorCatalogItemPriceFunction.PRICE_PER_HOUR = "kReachUtils::calcPricePerHour";
KalturaVendorCatalogItemPriceFunction.PRICE_PER_MINUTE = "kReachUtils::calcPricePerMinute";
KalturaVendorCatalogItemPriceFunction.PRICE_PER_SECOND = "kReachUtils::calcPricePerSecond";

function KalturaVendorCreditRecurrenceFrequency(){
}
KalturaVendorCreditRecurrenceFrequency.DAILY = "day";
KalturaVendorCreditRecurrenceFrequency.MONTHLY = "month";
KalturaVendorCreditRecurrenceFrequency.WEEKLY = "week";
KalturaVendorCreditRecurrenceFrequency.YEARLY = "year";

function KalturaVendorTranslationCatalogItemOrderBy(){
}
KalturaVendorTranslationCatalogItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVendorTranslationCatalogItemOrderBy.ID_ASC = "+id";
KalturaVendorTranslationCatalogItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVendorTranslationCatalogItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVendorTranslationCatalogItemOrderBy.ID_DESC = "-id";
KalturaVendorTranslationCatalogItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVerizonVcastDistributionProfileOrderBy(){
}
KalturaVerizonVcastDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVerizonVcastDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVerizonVcastDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVerizonVcastDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVerizonVcastDistributionProviderOrderBy(){
}

function KalturaVideoCodec(){
}
KalturaVideoCodec.NONE = "";
KalturaVideoCodec.APCH = "apch";
KalturaVideoCodec.APCN = "apcn";
KalturaVideoCodec.APCO = "apco";
KalturaVideoCodec.APCS = "apcs";
KalturaVideoCodec.AV1 = "av1";
KalturaVideoCodec.COPY = "copy";
KalturaVideoCodec.DNXHD = "dnxhd";
KalturaVideoCodec.DV = "dv";
KalturaVideoCodec.FLV = "flv";
KalturaVideoCodec.H263 = "h263";
KalturaVideoCodec.H264 = "h264";
KalturaVideoCodec.H264B = "h264b";
KalturaVideoCodec.H264H = "h264h";
KalturaVideoCodec.H264M = "h264m";
KalturaVideoCodec.H265 = "h265";
KalturaVideoCodec.MPEG2 = "mpeg2";
KalturaVideoCodec.MPEG4 = "mpeg4";
KalturaVideoCodec.THEORA = "theora";
KalturaVideoCodec.VP6 = "vp6";
KalturaVideoCodec.VP8 = "vp8";
KalturaVideoCodec.VP9 = "vp9";
KalturaVideoCodec.WMV2 = "wmv2";
KalturaVideoCodec.WMV3 = "wmv3";
KalturaVideoCodec.WVC1A = "wvc1a";

function KalturaVirtualEventOrderBy(){
}
KalturaVirtualEventOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVirtualEventOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVirtualEventOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVirtualEventOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVirusScanEngineType(){
}
KalturaVirusScanEngineType.CLAMAV_SCAN_ENGINE = "clamAVScanEngine.ClamAV";
KalturaVirusScanEngineType.SYMANTEC_SCAN_DIRECT_ENGINE = "symantecScanEngine.SymantecScanDirectEngine";
KalturaVirusScanEngineType.SYMANTEC_SCAN_ENGINE = "symantecScanEngine.SymantecScanEngine";
KalturaVirusScanEngineType.SYMANTEC_SCAN_JAVA_ENGINE = "symantecScanEngine.SymantecScanJavaEngine";

function KalturaVirusScanProfileOrderBy(){
}
KalturaVirusScanProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVirusScanProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaWebexDropFolderFileOrderBy(){
}
KalturaWebexDropFolderFileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWebexDropFolderFileOrderBy.FILE_NAME_ASC = "+fileName";
KalturaWebexDropFolderFileOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaWebexDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC = "+fileSizeLastSetAt";
KalturaWebexDropFolderFileOrderBy.ID_ASC = "+id";
KalturaWebexDropFolderFileOrderBy.PARSED_FLAVOR_ASC = "+parsedFlavor";
KalturaWebexDropFolderFileOrderBy.PARSED_SLUG_ASC = "+parsedSlug";
KalturaWebexDropFolderFileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaWebexDropFolderFileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaWebexDropFolderFileOrderBy.FILE_NAME_DESC = "-fileName";
KalturaWebexDropFolderFileOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaWebexDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC = "-fileSizeLastSetAt";
KalturaWebexDropFolderFileOrderBy.ID_DESC = "-id";
KalturaWebexDropFolderFileOrderBy.PARSED_FLAVOR_DESC = "-parsedFlavor";
KalturaWebexDropFolderFileOrderBy.PARSED_SLUG_DESC = "-parsedSlug";
KalturaWebexDropFolderFileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaWebexDropFolderOrderBy(){
}
KalturaWebexDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWebexDropFolderOrderBy.ID_ASC = "+id";
KalturaWebexDropFolderOrderBy.NAME_ASC = "+name";
KalturaWebexDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaWebexDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaWebexDropFolderOrderBy.ID_DESC = "-id";
KalturaWebexDropFolderOrderBy.NAME_DESC = "-name";
KalturaWebexDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaWidevineFlavorAssetOrderBy(){
}
KalturaWidevineFlavorAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWidevineFlavorAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaWidevineFlavorAssetOrderBy.SIZE_ASC = "+size";
KalturaWidevineFlavorAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaWidevineFlavorAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaWidevineFlavorAssetOrderBy.DELETED_AT_DESC = "-deletedAt";
KalturaWidevineFlavorAssetOrderBy.SIZE_DESC = "-size";
KalturaWidevineFlavorAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaWidevineFlavorParamsOrderBy(){
}

function KalturaWidevineFlavorParamsOutputOrderBy(){
}

function KalturaWidevineProfileOrderBy(){
}
KalturaWidevineProfileOrderBy.ID_ASC = "+id";
KalturaWidevineProfileOrderBy.NAME_ASC = "+name";
KalturaWidevineProfileOrderBy.ID_DESC = "-id";
KalturaWidevineProfileOrderBy.NAME_DESC = "-name";

function KalturaWidgetOrderBy(){
}
KalturaWidgetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWidgetOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaWowzaMediaServerNodeOrderBy(){
}
KalturaWowzaMediaServerNodeOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWowzaMediaServerNodeOrderBy.HEARTBEAT_TIME_ASC = "+heartbeatTime";
KalturaWowzaMediaServerNodeOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaWowzaMediaServerNodeOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaWowzaMediaServerNodeOrderBy.HEARTBEAT_TIME_DESC = "-heartbeatTime";
KalturaWowzaMediaServerNodeOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYahooDistributionProfileOrderBy(){
}
KalturaYahooDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYahooDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYahooDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYahooDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYahooDistributionProviderOrderBy(){
}

function KalturaYahooSyndicationFeedAdultValues(){
}
KalturaYahooSyndicationFeedAdultValues.ADULT = "adult";
KalturaYahooSyndicationFeedAdultValues.NON_ADULT = "nonadult";

function KalturaYahooSyndicationFeedCategories(){
}
KalturaYahooSyndicationFeedCategories.ACTION = "Action";
KalturaYahooSyndicationFeedCategories.ANIMALS = "Animals";
KalturaYahooSyndicationFeedCategories.ART_AND_ANIMATION = "Art &amp; Animation";
KalturaYahooSyndicationFeedCategories.COMMERCIALS = "Commercials";
KalturaYahooSyndicationFeedCategories.ENTERTAINMENT_AND_TV = "Entertainment &amp; TV";
KalturaYahooSyndicationFeedCategories.FAMILY = "Family";
KalturaYahooSyndicationFeedCategories.FOOD = "Food";
KalturaYahooSyndicationFeedCategories.FUNNY_VIDEOS = "Funny Videos";
KalturaYahooSyndicationFeedCategories.GAMES = "Games";
KalturaYahooSyndicationFeedCategories.HEALTH_AND_BEAUTY = "Health &amp; Beauty";
KalturaYahooSyndicationFeedCategories.HOW_TO = "How-To";
KalturaYahooSyndicationFeedCategories.MOVIES_AND_SHORTS = "Movies &amp; Shorts";
KalturaYahooSyndicationFeedCategories.MUSIC = "Music";
KalturaYahooSyndicationFeedCategories.NEWS_AND_POLITICS = "News &amp; Politics";
KalturaYahooSyndicationFeedCategories.PEOPLE_AND_VLOGS = "People &amp; Vlogs";
KalturaYahooSyndicationFeedCategories.PRODUCTS_AND_TECH = "Products &amp; Tech.";
KalturaYahooSyndicationFeedCategories.SCIENCE_AND_ENVIRONMENT = "Science &amp; Environment";
KalturaYahooSyndicationFeedCategories.SPORTS = "Sports";
KalturaYahooSyndicationFeedCategories.TRANSPORTATION = "Transportation";
KalturaYahooSyndicationFeedCategories.TRAVEL = "Travel";

function KalturaYahooSyndicationFeedOrderBy(){
}
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYahooSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaYahooSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYahooSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaYahooSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYouTubeDistributionFeedSpecVersion(){
}
KalturaYouTubeDistributionFeedSpecVersion.VERSION_1 = "1";
KalturaYouTubeDistributionFeedSpecVersion.VERSION_2 = "2";
KalturaYouTubeDistributionFeedSpecVersion.VERSION_3 = "3";

function KalturaYouTubeDistributionProfileOrderBy(){
}
KalturaYouTubeDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYouTubeDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYouTubeDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYouTubeDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYouTubeDistributionProviderOrderBy(){
}

function KalturaYoutubeApiDistributionProfileOrderBy(){
}
KalturaYoutubeApiDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYoutubeApiDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYoutubeApiDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYoutubeApiDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYoutubeApiDistributionProviderOrderBy(){
}

function KalturaSecureHashingAlgo(){
}
KalturaSecureHashingAlgo.SHA_1 = 1;
KalturaSecureHashingAlgo.SHA_256 = 2;
KalturaSecureHashingAlgo.SHA_512 = 3;
