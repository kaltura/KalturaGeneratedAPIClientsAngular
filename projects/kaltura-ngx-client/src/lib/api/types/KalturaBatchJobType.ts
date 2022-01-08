

export enum KalturaBatchJobType {
    bulkdownload = '19',
	bulkupload = '4',
	captureThumb = '30',
	chunkedEncodeJobScheduler = '44',
	cleanup = '17',
	clipConcat = '47',
	concat = '35',
	convert = '0',
	convertCaptionAsset = 'caption.convertcaptionasset',
	convertCollection = '22',
	convertLiveSegment = '36',
	convertProfile = '10',
	copy = '34',
	copyCaptions = '43',
	copyCuePoints = '48',
	copyPartner = '37',
	dbCleanup = '20',
	delete = '2',
	deleteFile = '31',
	distributionDelete = 'contentDistribution.DistributionDelete',
	distributionDisable = 'contentDistribution.DistributionDisable',
	distributionEnable = 'contentDistribution.DistributionEnable',
	distributionFetchReport = 'contentDistribution.DistributionFetchReport',
	distributionSubmit = 'contentDistribution.DistributionSubmit',
	distributionSync = 'contentDistribution.DistributionSync',
	distributionUpdate = 'contentDistribution.DistributionUpdate',
	download = '6',
	dropFolderContentProcessor = 'dropFolder.DropFolderContentProcessor',
	dropFolderWatcher = 'dropFolder.DropFolderWatcher',
	dvdcreator = '5',
	emailIngestion = '26',
	entryVendorTaskCsv = 'reach.EntryVendorTasksCsv',
	eventNotificationHandler = 'eventNotification.EventNotificationHandler',
	exportCsv = '49',
	extractMedia = '14',
	filesyncImport = '29',
	flatten = '3',
	import = '1',
	index = '32',
	indexTags = 'tagSearch.IndexTagsByPrivacyContext',
	integration = 'integration.Integration',
	liveEntryArchive = '51',
	liveReportExport = '40',
	liveToVod = '42',
	mail = '15',
	metadataImport = '27',
	metadataTransform = '28',
	moveCategoryEntries = '33',
	notification = '16',
	ooconvert = '7',
	parseCaptionAsset = 'captionSearch.parseCaptionAsset',
	parseMultiLanguageCaptionAsset = 'caption.parsemultilanguagecaptionasset',
	postconvert = '11',
	provisionDelete = '24',
	provisionProvide = '21',
	reachJobCleaner = '56',
	recalculateCache = '41',
	reportExport = '50',
	scheduledTask = 'scheduledTask.ScheduledTask',
	schedulerHelper = '18',
	serverNodeMonitor = '45',
	storageDelete = '25',
	storageExport = '23',
	storagePeriodicDeleteLocal = '55',
	storagePeriodicExport = '53',
	storagePeriodicPurge = '54',
	storageUpdate = '52',
	syncCategoryPrivacyContext = '39',
	syncReachCreditTask = 'reach.SyncReachCreditTask',
	tagResolve = 'tagSearch.TagResolve',
	usersCsv = '46',
	validateLiveMediaServers = '38',
	virusScan = 'virusScan.VirusScan',
	widevineRepositorySync = 'widevine.WidevineRepositorySync'
}