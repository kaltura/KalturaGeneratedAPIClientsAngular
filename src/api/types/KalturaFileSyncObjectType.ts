

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaFileSyncObjectType extends KalturaObjectBase {
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

    static asset = new KalturaFileSyncObjectType('4');
	static batchjob = new KalturaFileSyncObjectType('3');
	static conversionProfile = new KalturaFileSyncObjectType('8');
	static distributionProfile = new KalturaFileSyncObjectType('contentDistribution.DistributionProfile');
	static emailNotificationTemplate = new KalturaFileSyncObjectType('emailNotification.EmailNotificationTemplate');
	static entry = new KalturaFileSyncObjectType('1');
	static entryDistribution = new KalturaFileSyncObjectType('contentDistribution.EntryDistribution');
	static fileAsset = new KalturaFileSyncObjectType('9');
	static flavorAsset = new KalturaFileSyncObjectType('4');
	static genericDistributionAction = new KalturaFileSyncObjectType('contentDistribution.GenericDistributionAction');
	static httpNotificationTemplate = new KalturaFileSyncObjectType('httpNotification.HttpNotificationTemplate');
	static metadata = new KalturaFileSyncObjectType('5');
	static metadataProfile = new KalturaFileSyncObjectType('6');
	static syndicationFeed = new KalturaFileSyncObjectType('7');
	static uiconf = new KalturaFileSyncObjectType('2');
}
KalturaTypesFactory.registerType('KalturaFileSyncObjectType',KalturaFileSyncObjectType);