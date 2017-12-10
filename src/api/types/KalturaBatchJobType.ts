

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBatchJobType extends KalturaObjectBase {
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

    static bulkdownload = new KalturaBatchJobType('19');
	static bulkupload = new KalturaBatchJobType('4');
	static captureThumb = new KalturaBatchJobType('30');
	static chunkedEncodeJobScheduler = new KalturaBatchJobType('44');
	static cleanup = new KalturaBatchJobType('17');
	static concat = new KalturaBatchJobType('35');
	static convert = new KalturaBatchJobType('0');
	static convertCollection = new KalturaBatchJobType('22');
	static convertLiveSegment = new KalturaBatchJobType('36');
	static convertProfile = new KalturaBatchJobType('10');
	static copy = new KalturaBatchJobType('34');
	static copyCaptions = new KalturaBatchJobType('43');
	static copyPartner = new KalturaBatchJobType('37');
	static dbCleanup = new KalturaBatchJobType('20');
	static delete = new KalturaBatchJobType('2');
	static deleteFile = new KalturaBatchJobType('31');
	static distributionDelete = new KalturaBatchJobType('contentDistribution.DistributionDelete');
	static distributionDisable = new KalturaBatchJobType('contentDistribution.DistributionDisable');
	static distributionEnable = new KalturaBatchJobType('contentDistribution.DistributionEnable');
	static distributionFetchReport = new KalturaBatchJobType('contentDistribution.DistributionFetchReport');
	static distributionSubmit = new KalturaBatchJobType('contentDistribution.DistributionSubmit');
	static distributionSync = new KalturaBatchJobType('contentDistribution.DistributionSync');
	static distributionUpdate = new KalturaBatchJobType('contentDistribution.DistributionUpdate');
	static download = new KalturaBatchJobType('6');
	static dropFolderContentProcessor = new KalturaBatchJobType('dropFolder.DropFolderContentProcessor');
	static dropFolderWatcher = new KalturaBatchJobType('dropFolder.DropFolderWatcher');
	static dvdcreator = new KalturaBatchJobType('5');
	static emailIngestion = new KalturaBatchJobType('26');
	static eventNotificationHandler = new KalturaBatchJobType('eventNotification.EventNotificationHandler');
	static extractMedia = new KalturaBatchJobType('14');
	static filesyncImport = new KalturaBatchJobType('29');
	static flatten = new KalturaBatchJobType('3');
	static import = new KalturaBatchJobType('1');
	static index = new KalturaBatchJobType('32');
	static indexTags = new KalturaBatchJobType('tagSearch.IndexTagsByPrivacyContext');
	static integration = new KalturaBatchJobType('integration.Integration');
	static liveReportExport = new KalturaBatchJobType('40');
	static liveToVod = new KalturaBatchJobType('42');
	static mail = new KalturaBatchJobType('15');
	static metadataImport = new KalturaBatchJobType('27');
	static metadataTransform = new KalturaBatchJobType('28');
	static moveCategoryEntries = new KalturaBatchJobType('33');
	static notification = new KalturaBatchJobType('16');
	static ooconvert = new KalturaBatchJobType('7');
	static parseCaptionAsset = new KalturaBatchJobType('captionSearch.parseCaptionAsset');
	static parseMultiLanguageCaptionAsset = new KalturaBatchJobType('caption.parsemultilanguagecaptionasset');
	static postconvert = new KalturaBatchJobType('11');
	static provisionDelete = new KalturaBatchJobType('24');
	static provisionProvide = new KalturaBatchJobType('21');
	static recalculateCache = new KalturaBatchJobType('41');
	static scheduledTask = new KalturaBatchJobType('scheduledTask.ScheduledTask');
	static schedulerHelper = new KalturaBatchJobType('18');
	static storageDelete = new KalturaBatchJobType('25');
	static storageExport = new KalturaBatchJobType('23');
	static syncCategoryPrivacyContext = new KalturaBatchJobType('39');
	static tagResolve = new KalturaBatchJobType('tagSearch.TagResolve');
	static validateLiveMediaServers = new KalturaBatchJobType('38');
	static virusScan = new KalturaBatchJobType('virusScan.VirusScan');
	static widevineRepositorySync = new KalturaBatchJobType('widevine.WidevineRepositorySync');
}
KalturaTypesFactory.registerType('KalturaBatchJobType',KalturaBatchJobType);