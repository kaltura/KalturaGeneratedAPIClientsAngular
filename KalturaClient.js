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
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
}
KalturaClient.inheritsFrom (KalturaClientBase);
KalturaClient.prototype.apiVersion = "21.11.0";
/**
 * Manage access control profiles
 * @param KalturaAccessControlProfileService
 */
KalturaClient.prototype.accessControlProfile = null;
/**
 * Add & Manage Access Controls
 * @param KalturaAccessControlService
 */
KalturaClient.prototype.accessControl = null;
/**
 * Manage details for the administrative user
 * @param KalturaAdminUserService
 */
KalturaClient.prototype.adminUser = null;
/**
 * api for getting analytics data
 * @param KalturaAnalyticsService
 */
KalturaClient.prototype.analytics = null;
/**
 * Manage application authentication tokens
 * @param KalturaAppTokenService
 */
KalturaClient.prototype.appToken = null;
/**
 * Base Entry Service
 * @param KalturaBaseEntryService
 */
KalturaClient.prototype.baseEntry = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads using CSV files.
 *	 This service manages only entry bulk uploads.
 * @param KalturaBulkUploadService
 */
KalturaClient.prototype.bulkUpload = null;
/**
 * Add & Manage CategoryEntry - assign entry to category
 * @param KalturaCategoryEntryService
 */
KalturaClient.prototype.categoryEntry = null;
/**
 * Add & Manage Categories
 * @param KalturaCategoryService
 */
KalturaClient.prototype.category = null;
/**
 * Add & Manage CategoryUser - membership of a user in a category
 * @param KalturaCategoryUserService
 */
KalturaClient.prototype.categoryUser = null;
/**
 * Manage the connection between Conversion Profiles and Asset Params
 * @param KalturaConversionProfileAssetParamsService
 */
KalturaClient.prototype.conversionProfileAssetParams = null;
/**
 * Add & Manage Conversion Profiles
 * @param KalturaConversionProfileService
 */
KalturaClient.prototype.conversionProfile = null;
/**
 * Data service lets you manage data content (textual content)
 * @param KalturaDataService
 */
KalturaClient.prototype.data = null;
/**
 * delivery service is used to control delivery objects
 * @param KalturaDeliveryProfileService
 */
KalturaClient.prototype.deliveryProfile = null;
/**
 * EmailIngestionProfile service lets you manage email ingestion profile records
 * @param KalturaEmailIngestionProfileService
 */
KalturaClient.prototype.EmailIngestionProfile = null;
/**
 * Base class for entry server node
 * @param KalturaEntryServerNodeService
 */
KalturaClient.prototype.entryServerNode = null;
/**
 * Export CSV service is used to manage CSV exports of objects
 * @param KalturaExportcsvService
 */
KalturaClient.prototype.exportcsv = null;
/**
 * Manage file assets
 * @param KalturaFileAssetService
 */
KalturaClient.prototype.fileAsset = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param KalturaFlavorAssetService
 */
KalturaClient.prototype.flavorAsset = null;
/**
 * Flavor Params Output service
 * @param KalturaFlavorParamsOutputService
 */
KalturaClient.prototype.flavorParamsOutput = null;
/**
 * Add & Manage Flavor Params
 * @param KalturaFlavorParamsService
 */
KalturaClient.prototype.flavorParams = null;
/**
 * Add & Manage GroupUser
 * @param KalturaGroupUserService
 */
KalturaClient.prototype.groupUser = null;
/**
 * Manage live channel segments
 * @param KalturaLiveChannelSegmentService
 */
KalturaClient.prototype.liveChannelSegment = null;
/**
 * Live Channel service lets you manage live channels
 * @param KalturaLiveChannelService
 */
KalturaClient.prototype.liveChannel = null;
/**
 * 
 * @param KalturaLiveReportsService
 */
KalturaClient.prototype.liveReports = null;
/**
 * Stats Service
 * @param KalturaLiveStatsService
 */
KalturaClient.prototype.liveStats = null;
/**
 * Live Stream service lets you manage live stream entries
 * @param KalturaLiveStreamService
 */
KalturaClient.prototype.liveStream = null;
/**
 * Media Info service
 * @param KalturaMediaInfoService
 */
KalturaClient.prototype.mediaInfo = null;
/**
 * Media service lets you upload and manage media files (images / videos & audio)
 * @param KalturaMediaService
 */
KalturaClient.prototype.media = null;
/**
 * A Mix is an XML unique format invented by Kaltura, it allows the user to create a mix of videos and images, in and out points, transitions, text overlays, soundtrack, effects and much more...
 *	 Mixing service lets you create a new mix, manage its metadata and make basic manipulations.
 * @param KalturaMixingService
 */
KalturaClient.prototype.mixing = null;
/**
 * Notification Service
 * @param KalturaNotificationService
 */
KalturaClient.prototype.notification = null;
/**
 * partner service allows you to change/manage your partner personal details and settings as well
 * @param KalturaPartnerService
 */
KalturaClient.prototype.partner = null;
/**
 * PermissionItem service lets you create and manage permission items
 * @param KalturaPermissionItemService
 */
KalturaClient.prototype.permissionItem = null;
/**
 * Permission service lets you create and manage user permissions
 * @param KalturaPermissionService
 */
KalturaClient.prototype.permission = null;
/**
 * Playlist service lets you create,manage and play your playlists
 *	 Playlists could be static (containing a fixed list of entries) or dynamic (based on a filter)
 * @param KalturaPlaylistService
 */
KalturaClient.prototype.playlist = null;
/**
 * api for getting reports data by the report type and some inputFilter
 * @param KalturaReportService
 */
KalturaClient.prototype.report = null;
/**
 * Manage response profiles
 * @param KalturaResponseProfileService
 */
KalturaClient.prototype.responseProfile = null;
/**
 * Expose the schema definitions for syndication MRSS, bulk upload XML and other schema types.
 * @param KalturaSchemaService
 */
KalturaClient.prototype.schema = null;
/**
 * Search service allows you to search for media in various media providers
 *	 This service is being used mostly by the CW component
 * @param KalturaSearchService
 */
KalturaClient.prototype.search = null;
/**
 * Server Node service
 * @param KalturaServerNodeService
 */
KalturaClient.prototype.serverNode = null;
/**
 * Session service
 * @param KalturaSessionService
 */
KalturaClient.prototype.session = null;
/**
 * Stats Service
 * @param KalturaStatsService
 */
KalturaClient.prototype.stats = null;
/**
 * The Storage Profile service allows you to export your Kaltura content to external storage volumes.
 *	 This service is disabled by default, please contact your account manager if you wish to enable it for your partner.
 * @param KalturaStorageProfileService
 */
KalturaClient.prototype.storageProfile = null;
/**
 * Add & Manage Syndication Feeds
 * @param KalturaSyndicationFeedService
 */
KalturaClient.prototype.syndicationFeed = null;
/**
 * System service is used for internal system helpers & to retrieve system level information
 * @param KalturaSystemService
 */
KalturaClient.prototype.system = null;
/**
 * Retrieve information and invoke actions on Thumb Asset
 * @param KalturaThumbAssetService
 */
KalturaClient.prototype.thumbAsset = null;
/**
 * Thumbnail Params Output service
 * @param KalturaThumbParamsOutputService
 */
KalturaClient.prototype.thumbParamsOutput = null;
/**
 * Add & Manage Thumb Params
 * @param KalturaThumbParamsService
 */
KalturaClient.prototype.thumbParams = null;
/**
 * UiConf service lets you create and manage your UIConfs for the various flash components
 *	 This service is used by the KMC-ApplicationStudio
 * @param KalturaUiConfService
 */
KalturaClient.prototype.uiConf = null;
/**
 * 
 * @param KalturaUploadService
 */
KalturaClient.prototype.upload = null;
/**
 * 
 * @param KalturaUploadTokenService
 */
KalturaClient.prototype.uploadToken = null;
/**
 * Manage application based roles for user
 * @param KalturaUserAppRoleService
 */
KalturaClient.prototype.userAppRole = null;
/**
 * 
 * @param KalturaUserEntryService
 */
KalturaClient.prototype.userEntry = null;
/**
 * UserRole service lets you create and manage user roles
 * @param KalturaUserRoleService
 */
KalturaClient.prototype.userRole = null;
/**
 * Manage partner users on Kaltura's side
 *	 The userId in kaltura is the unique ID in the partner's system, and the [partnerId,Id] couple are unique key in kaltura's DB
 * @param KalturaUserService
 */
KalturaClient.prototype.user = null;
/**
 * widget service for full widget management
 * @param KalturaWidgetService
 */
KalturaClient.prototype.widget = null;
/**
 * Metadata service
 * @param KalturaMetadataService
 */
KalturaClient.prototype.metadata = null;
/**
 * Metadata Profile service
 * @param KalturaMetadataProfileService
 */
KalturaClient.prototype.metadataProfile = null;
/**
 * Document service lets you upload and manage document files
 * @param KalturaDocumentsService
 */
KalturaClient.prototype.documents = null;
/**
 * Annotation service - Video Annotation
 * @param KalturaAnnotationService
 */
KalturaClient.prototype.annotation = null;
/**
 * Aspera service
 * @param KalturaAsperaService
 */
KalturaClient.prototype.aspera = null;
/**
 * Att Uverse Service
 * @param KalturaAttUverseService
 */
KalturaClient.prototype.attUverse = null;
/**
 * Retrieve information and invoke actions on attachment Asset
 * @param KalturaAttachmentAssetService
 */
KalturaClient.prototype.attachmentAsset = null;
/**
 * The Audit Trail service allows you to keep track of changes made to various Kaltura objects. 
 *	 This service is disabled by default.
 * @param KalturaAuditTrailService
 */
KalturaClient.prototype.auditTrail = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads
 * @param KalturaBulkService
 */
KalturaClient.prototype.bulk = null;
/**
 * 
 * @param KalturaBumperService
 */
KalturaClient.prototype.bumper = null;
/**
 * Retrieve information and invoke actions on caption Asset
 * @param KalturaCaptionAssetService
 */
KalturaClient.prototype.captionAsset = null;
/**
 * Add & Manage Caption Params
 * @param KalturaCaptionParamsService
 */
KalturaClient.prototype.captionParams = null;
/**
 * Search caption asset items
 * @param KalturaCaptionAssetItemService
 */
KalturaClient.prototype.captionAssetItem = null;
/**
 * Distribution Profile service
 * @param KalturaDistributionProfileService
 */
KalturaClient.prototype.distributionProfile = null;
/**
 * Entry Distribution service
 * @param KalturaEntryDistributionService
 */
KalturaClient.prototype.entryDistribution = null;
/**
 * Distribution Provider service
 * @param KalturaDistributionProviderService
 */
KalturaClient.prototype.distributionProvider = null;
/**
 * Generic Distribution Provider service
 * @param KalturaGenericDistributionProviderService
 */
KalturaClient.prototype.genericDistributionProvider = null;
/**
 * Generic Distribution Provider Actions service
 * @param KalturaGenericDistributionProviderActionService
 */
KalturaClient.prototype.genericDistributionProviderAction = null;
/**
 * Cue Point service
 * @param KalturaCuePointService
 */
KalturaClient.prototype.cuePoint = null;
/**
 * DropFolder service lets you create and manage drop folders
 * @param KalturaDropFolderService
 */
KalturaClient.prototype.dropFolder = null;
/**
 * DropFolderFile service lets you create and manage drop folder files
 * @param KalturaDropFolderFileService
 */
KalturaClient.prototype.dropFolderFile = null;
/**
 * Event notification template service lets you create and manage event notification templates
 * @param KalturaEventNotificationTemplateService
 */
KalturaClient.prototype.eventNotificationTemplate = null;
/**
 * Kaltura Sharepoint Extension Service
 * @param KalturaSharepointExtensionService
 */
KalturaClient.prototype.sharepointExtension = null;
/**
 * Allows user to 'like' or 'unlike' and entry
 * @param KalturaLikeService
 */
KalturaClient.prototype.like = null;
/**
 * Ndn Service
 * @param KalturaNdnService
 */
KalturaClient.prototype.ndn = null;
/**
 * Short link service
 * @param KalturaShortLinkService
 */
KalturaClient.prototype.shortLink = null;
/**
 * Synacor HBO Service
 * @param KalturaSynacorHboService
 */
KalturaClient.prototype.synacorHbo = null;
/**
 * Search object tags
 * @param KalturaTagService
 */
KalturaClient.prototype.tag = null;
/**
 * Time Warner Service
 * @param KalturaTimeWarnerService
 */
KalturaClient.prototype.timeWarner = null;
/**
 * Uverse Click To Order Service
 * @param KalturaUverseClickToOrderService
 */
KalturaClient.prototype.uverseClickToOrder = null;
/**
 * Uverse Service
 * @param KalturaUverseService
 */
KalturaClient.prototype.uverse = null;
/**
 * Utility service for the Multi-publishers console
 * @param KalturaVarConsoleService
 */
KalturaClient.prototype.varConsole = null;
/**
 * Virus scan profile service
 * @param KalturaVirusScanProfileService
 */
KalturaClient.prototype.virusScanProfile = null;
/**
 * External media service lets you upload and manage embed codes and external playable content
 * @param KalturaExternalMediaService
 */
KalturaClient.prototype.externalMedia = null;
/**
 * 
 * @param KalturaDrmPolicyService
 */
KalturaClient.prototype.drmPolicy = null;
/**
 * 
 * @param KalturaDrmProfileService
 */
KalturaClient.prototype.drmProfile = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param KalturaDrmLicenseAccessService
 */
KalturaClient.prototype.drmLicenseAccess = null;
/**
 * WidevineDrmService serves as a license proxy to a Widevine license server
 * @param KalturaWidevineDrmService
 */
KalturaClient.prototype.widevineDrm = null;
/**
 * Schedule task service lets you create and manage scheduled task profiles
 * @param KalturaScheduledTaskProfileService
 */
KalturaClient.prototype.scheduledTaskProfile = null;
/**
 * 
 * @param KalturaPlayReadyDrmService
 */
KalturaClient.prototype.playReadyDrm = null;
/**
 * Unicorn Service
 * @param KalturaUnicornService
 */
KalturaClient.prototype.unicorn = null;
/**
 * Integration service lets you dispatch integration tasks
 * @param KalturaIntegrationService
 */
KalturaClient.prototype.integration = null;
/**
 * Business-process case service lets you get information about processes
 * @param KalturaBusinessProcessCaseService
 */
KalturaClient.prototype.businessProcessCase = null;
/**
 * Allows user to handle quizzes
 * @param KalturaQuizService
 */
KalturaClient.prototype.quiz = null;
/**
 * The ScheduleEvent service enables you to create and manage (update, delete, retrieve, etc.) scheduled recording events.
 * @param KalturaScheduleEventService
 */
KalturaClient.prototype.scheduleEvent = null;
/**
 * The ScheduleResource service enables you to create and manage (update, delete, retrieve, etc.) the resources required for scheduled events (cameras, capture devices, etc.).
 * @param KalturaScheduleResourceService
 */
KalturaClient.prototype.scheduleResource = null;
/**
 * The ScheduleEventResource service enables you create and manage (update, delete, retrieve, etc.) the connections between recording events and the resources required for these events (cameras, capture devices, etc.).
 * @param KalturaScheduleEventResourceService
 */
KalturaClient.prototype.scheduleEventResource = null;
/**
 * Poll service
 *	 The poll service works against the cache entirely no DB instance should be used here
 * @param KalturaPollService
 */
KalturaClient.prototype.poll = null;
/**
 * 
 * @param KalturaESearchService
 */
KalturaClient.prototype.eSearch = null;
/**
 * Sending beacons on objects
 * @param KalturaBeaconService
 */
KalturaClient.prototype.beacon = null;
/**
 * Vendor Catalog Item Service
 * @param KalturaVendorCatalogItemService
 */
KalturaClient.prototype.vendorCatalogItem = null;
/**
 * Reach Profile Service
 * @param KalturaReachProfileService
 */
KalturaClient.prototype.reachProfile = null;
/**
 * Entry Vendor Task Service
 * @param KalturaEntryVendorTaskService
 */
KalturaClient.prototype.entryVendorTask = null;
/**
 * Partner Catalog Item Service
 * @param KalturaPartnerCatalogItemService
 */
KalturaClient.prototype.PartnerCatalogItem = null;
/**
 * 
 * @param KalturaSearchHistoryService
 */
KalturaClient.prototype.searchHistory = null;
/**
 * 
 * @param KalturaZoomVendorService
 */
KalturaClient.prototype.zoomVendor = null;
/**
 * 
 * @param KalturaVendorIntegrationService
 */
KalturaClient.prototype.vendorIntegration = null;
/**
 * 
 * @param KalturaGroupService
 */
KalturaClient.prototype.group = null;
/**
 * 
 * @param KalturaPexipService
 */
KalturaClient.prototype.pexip = null;
/**
 * 
 * @param KalturaThumbnailService
 */
KalturaClient.prototype.thumbnail = null;
/**
 * 
 * @param KalturaSsoService
 */
KalturaClient.prototype.sso = null;
/**
 * Allows user to manipulate their entry rating
 * @param KalturaRatingService
 */
KalturaClient.prototype.rating = null;
/**
 * 
 * @param KalturaInteractivityService
 */
KalturaClient.prototype.interactivity = null;
/**
 * 
 * @param KalturaVolatileInteractivityService
 */
KalturaClient.prototype.volatileInteractivity = null;
/**
 * 
 * @param KalturaVirtualEventService
 */
KalturaClient.prototype.virtualEvent = null;
/**
 * 
 * @param KalturaUserScoreService
 */
KalturaClient.prototype.userScore = null;
/**
 * 
 * @param KalturaWebexVendorService
 */
KalturaClient.prototype.webexVendor = null;
/**
 * 
 * @param KalturaRoomService
 */
KalturaClient.prototype.room = null;
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
	//initialize client services:
	this.accessControlProfile = new KalturaAccessControlProfileService(this);
	this.accessControl = new KalturaAccessControlService(this);
	this.adminUser = new KalturaAdminUserService(this);
	this.analytics = new KalturaAnalyticsService(this);
	this.appToken = new KalturaAppTokenService(this);
	this.baseEntry = new KalturaBaseEntryService(this);
	this.bulkUpload = new KalturaBulkUploadService(this);
	this.categoryEntry = new KalturaCategoryEntryService(this);
	this.category = new KalturaCategoryService(this);
	this.categoryUser = new KalturaCategoryUserService(this);
	this.conversionProfileAssetParams = new KalturaConversionProfileAssetParamsService(this);
	this.conversionProfile = new KalturaConversionProfileService(this);
	this.data = new KalturaDataService(this);
	this.deliveryProfile = new KalturaDeliveryProfileService(this);
	this.EmailIngestionProfile = new KalturaEmailIngestionProfileService(this);
	this.entryServerNode = new KalturaEntryServerNodeService(this);
	this.exportcsv = new KalturaExportcsvService(this);
	this.fileAsset = new KalturaFileAssetService(this);
	this.flavorAsset = new KalturaFlavorAssetService(this);
	this.flavorParamsOutput = new KalturaFlavorParamsOutputService(this);
	this.flavorParams = new KalturaFlavorParamsService(this);
	this.groupUser = new KalturaGroupUserService(this);
	this.liveChannelSegment = new KalturaLiveChannelSegmentService(this);
	this.liveChannel = new KalturaLiveChannelService(this);
	this.liveReports = new KalturaLiveReportsService(this);
	this.liveStats = new KalturaLiveStatsService(this);
	this.liveStream = new KalturaLiveStreamService(this);
	this.mediaInfo = new KalturaMediaInfoService(this);
	this.media = new KalturaMediaService(this);
	this.mixing = new KalturaMixingService(this);
	this.notification = new KalturaNotificationService(this);
	this.partner = new KalturaPartnerService(this);
	this.permissionItem = new KalturaPermissionItemService(this);
	this.permission = new KalturaPermissionService(this);
	this.playlist = new KalturaPlaylistService(this);
	this.report = new KalturaReportService(this);
	this.responseProfile = new KalturaResponseProfileService(this);
	this.schema = new KalturaSchemaService(this);
	this.search = new KalturaSearchService(this);
	this.serverNode = new KalturaServerNodeService(this);
	this.session = new KalturaSessionService(this);
	this.stats = new KalturaStatsService(this);
	this.storageProfile = new KalturaStorageProfileService(this);
	this.syndicationFeed = new KalturaSyndicationFeedService(this);
	this.system = new KalturaSystemService(this);
	this.thumbAsset = new KalturaThumbAssetService(this);
	this.thumbParamsOutput = new KalturaThumbParamsOutputService(this);
	this.thumbParams = new KalturaThumbParamsService(this);
	this.uiConf = new KalturaUiConfService(this);
	this.upload = new KalturaUploadService(this);
	this.uploadToken = new KalturaUploadTokenService(this);
	this.userAppRole = new KalturaUserAppRoleService(this);
	this.userEntry = new KalturaUserEntryService(this);
	this.userRole = new KalturaUserRoleService(this);
	this.user = new KalturaUserService(this);
	this.widget = new KalturaWidgetService(this);
	this.metadata = new KalturaMetadataService(this);
	this.metadataProfile = new KalturaMetadataProfileService(this);
	this.documents = new KalturaDocumentsService(this);
	this.annotation = new KalturaAnnotationService(this);
	this.aspera = new KalturaAsperaService(this);
	this.attUverse = new KalturaAttUverseService(this);
	this.attachmentAsset = new KalturaAttachmentAssetService(this);
	this.auditTrail = new KalturaAuditTrailService(this);
	this.bulk = new KalturaBulkService(this);
	this.bumper = new KalturaBumperService(this);
	this.captionAsset = new KalturaCaptionAssetService(this);
	this.captionParams = new KalturaCaptionParamsService(this);
	this.captionAssetItem = new KalturaCaptionAssetItemService(this);
	this.distributionProfile = new KalturaDistributionProfileService(this);
	this.entryDistribution = new KalturaEntryDistributionService(this);
	this.distributionProvider = new KalturaDistributionProviderService(this);
	this.genericDistributionProvider = new KalturaGenericDistributionProviderService(this);
	this.genericDistributionProviderAction = new KalturaGenericDistributionProviderActionService(this);
	this.cuePoint = new KalturaCuePointService(this);
	this.dropFolder = new KalturaDropFolderService(this);
	this.dropFolderFile = new KalturaDropFolderFileService(this);
	this.eventNotificationTemplate = new KalturaEventNotificationTemplateService(this);
	this.sharepointExtension = new KalturaSharepointExtensionService(this);
	this.like = new KalturaLikeService(this);
	this.ndn = new KalturaNdnService(this);
	this.shortLink = new KalturaShortLinkService(this);
	this.synacorHbo = new KalturaSynacorHboService(this);
	this.tag = new KalturaTagService(this);
	this.timeWarner = new KalturaTimeWarnerService(this);
	this.uverseClickToOrder = new KalturaUverseClickToOrderService(this);
	this.uverse = new KalturaUverseService(this);
	this.varConsole = new KalturaVarConsoleService(this);
	this.virusScanProfile = new KalturaVirusScanProfileService(this);
	this.externalMedia = new KalturaExternalMediaService(this);
	this.drmPolicy = new KalturaDrmPolicyService(this);
	this.drmProfile = new KalturaDrmProfileService(this);
	this.drmLicenseAccess = new KalturaDrmLicenseAccessService(this);
	this.widevineDrm = new KalturaWidevineDrmService(this);
	this.scheduledTaskProfile = new KalturaScheduledTaskProfileService(this);
	this.playReadyDrm = new KalturaPlayReadyDrmService(this);
	this.unicorn = new KalturaUnicornService(this);
	this.integration = new KalturaIntegrationService(this);
	this.businessProcessCase = new KalturaBusinessProcessCaseService(this);
	this.quiz = new KalturaQuizService(this);
	this.scheduleEvent = new KalturaScheduleEventService(this);
	this.scheduleResource = new KalturaScheduleResourceService(this);
	this.scheduleEventResource = new KalturaScheduleEventResourceService(this);
	this.poll = new KalturaPollService(this);
	this.eSearch = new KalturaESearchService(this);
	this.beacon = new KalturaBeaconService(this);
	this.vendorCatalogItem = new KalturaVendorCatalogItemService(this);
	this.reachProfile = new KalturaReachProfileService(this);
	this.entryVendorTask = new KalturaEntryVendorTaskService(this);
	this.PartnerCatalogItem = new KalturaPartnerCatalogItemService(this);
	this.searchHistory = new KalturaSearchHistoryService(this);
	this.zoomVendor = new KalturaZoomVendorService(this);
	this.vendorIntegration = new KalturaVendorIntegrationService(this);
	this.group = new KalturaGroupService(this);
	this.pexip = new KalturaPexipService(this);
	this.thumbnail = new KalturaThumbnailService(this);
	this.sso = new KalturaSsoService(this);
	this.rating = new KalturaRatingService(this);
	this.interactivity = new KalturaInteractivityService(this);
	this.volatileInteractivity = new KalturaVolatileInteractivityService(this);
	this.virtualEvent = new KalturaVirtualEventService(this);
	this.userScore = new KalturaUserScoreService(this);
	this.webexVendor = new KalturaWebexVendorService(this);
	this.room = new KalturaRoomService(this);
}
