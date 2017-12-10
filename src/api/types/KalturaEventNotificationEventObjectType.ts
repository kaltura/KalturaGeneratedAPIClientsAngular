

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaEventNotificationEventObjectType extends KalturaObjectBase {
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

    static accesscontrol = new KalturaEventNotificationEventObjectType('9');
	static adCuePoint = new KalturaEventNotificationEventObjectType('adCuePointEventNotifications.AdCuePoint');
	static annotation = new KalturaEventNotificationEventObjectType('annotationEventNotifications.Annotation');
	static asset = new KalturaEventNotificationEventObjectType('3');
	static attachmentAsset = new KalturaEventNotificationEventObjectType('attachmentAssetEventNotifications.AttachmentAsset');
	static batchjob = new KalturaEventNotificationEventObjectType('10');
	static bulkuploadresult = new KalturaEventNotificationEventObjectType('11');
	static captionAsset = new KalturaEventNotificationEventObjectType('captionAssetEventNotifications.CaptionAsset');
	static category = new KalturaEventNotificationEventObjectType('2');
	static categoryentry = new KalturaEventNotificationEventObjectType('37');
	static categorykuser = new KalturaEventNotificationEventObjectType('12');
	static codeCuePoint = new KalturaEventNotificationEventObjectType('codeCuePointEventNotifications.CodeCuePoint');
	static conversionprofile2 = new KalturaEventNotificationEventObjectType('14');
	static cuePoint = new KalturaEventNotificationEventObjectType('cuePointEventNotifications.CuePoint');
	static distributionProfile = new KalturaEventNotificationEventObjectType('contentDistributionEventNotifications.DistributionProfile');
	static dropFolder = new KalturaEventNotificationEventObjectType('dropFolderEventNotifications.DropFolder');
	static dropFolderFile = new KalturaEventNotificationEventObjectType('dropFolderEventNotifications.DropFolderFile');
	static entry = new KalturaEventNotificationEventObjectType('1');
	static entryDistribution = new KalturaEventNotificationEventObjectType('contentDistributionEventNotifications.EntryDistribution');
	static flavorasset = new KalturaEventNotificationEventObjectType('4');
	static flavorparams = new KalturaEventNotificationEventObjectType('15');
	static flavorparamsconversionprofile = new KalturaEventNotificationEventObjectType('16');
	static flavorparamsoutput = new KalturaEventNotificationEventObjectType('17');
	static genericsyndicationfeed = new KalturaEventNotificationEventObjectType('18');
	static kuser = new KalturaEventNotificationEventObjectType('8');
	static kusertouserrole = new KalturaEventNotificationEventObjectType('19');
	static liveStream = new KalturaEventNotificationEventObjectType('38');
	static metadata = new KalturaEventNotificationEventObjectType('metadataEventNotifications.Metadata');
	static partner = new KalturaEventNotificationEventObjectType('20');
	static permission = new KalturaEventNotificationEventObjectType('21');
	static permissionitem = new KalturaEventNotificationEventObjectType('22');
	static permissiontopermissionitem = new KalturaEventNotificationEventObjectType('23');
	static scheduler = new KalturaEventNotificationEventObjectType('24');
	static schedulerconfig = new KalturaEventNotificationEventObjectType('25');
	static schedulerstatus = new KalturaEventNotificationEventObjectType('26');
	static schedulerworker = new KalturaEventNotificationEventObjectType('27');
	static storageprofile = new KalturaEventNotificationEventObjectType('28');
	static syndicationfeed = new KalturaEventNotificationEventObjectType('29');
	static thumbasset = new KalturaEventNotificationEventObjectType('5');
	static thumbparams = new KalturaEventNotificationEventObjectType('31');
	static thumbparamsoutput = new KalturaEventNotificationEventObjectType('32');
	static transcriptAsset = new KalturaEventNotificationEventObjectType('transcriptAssetEventNotifications.TranscriptAsset');
	static uploadtoken = new KalturaEventNotificationEventObjectType('33');
	static userlogindata = new KalturaEventNotificationEventObjectType('34');
	static userrole = new KalturaEventNotificationEventObjectType('35');
	static widget = new KalturaEventNotificationEventObjectType('36');
}
KalturaTypesFactory.registerType('KalturaEventNotificationEventObjectType',KalturaEventNotificationEventObjectType);