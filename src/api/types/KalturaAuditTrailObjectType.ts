

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAuditTrailObjectType extends KalturaObjectBase {
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

    static accessControl = new KalturaAuditTrailObjectType('accessControl');
	static batchJob = new KalturaAuditTrailObjectType('BatchJob');
	static category = new KalturaAuditTrailObjectType('category');
	static conversionProfile2 = new KalturaAuditTrailObjectType('conversionProfile2');
	static emailIngestionProfile = new KalturaAuditTrailObjectType('EmailIngestionProfile');
	static entry = new KalturaAuditTrailObjectType('entry');
	static fileSync = new KalturaAuditTrailObjectType('FileSync');
	static flavorAsset = new KalturaAuditTrailObjectType('flavorAsset');
	static flavorParams = new KalturaAuditTrailObjectType('flavorParams');
	static flavorParamsConversionProfile = new KalturaAuditTrailObjectType('flavorParamsConversionProfile');
	static flavorParamsOutput = new KalturaAuditTrailObjectType('flavorParamsOutput');
	static kshow = new KalturaAuditTrailObjectType('kshow');
	static kshowKuser = new KalturaAuditTrailObjectType('KshowKuser');
	static kuser = new KalturaAuditTrailObjectType('kuser');
	static mediaInfo = new KalturaAuditTrailObjectType('mediaInfo');
	static metadata = new KalturaAuditTrailObjectType('Metadata');
	static metadataProfile = new KalturaAuditTrailObjectType('MetadataProfile');
	static moderation = new KalturaAuditTrailObjectType('moderation');
	static partner = new KalturaAuditTrailObjectType('Partner');
	static permission = new KalturaAuditTrailObjectType('Permission');
	static roughcut = new KalturaAuditTrailObjectType('roughcutEntry');
	static syndication = new KalturaAuditTrailObjectType('syndicationFeed');
	static thumbnailAsset = new KalturaAuditTrailObjectType('thumbAsset');
	static thumbnailParams = new KalturaAuditTrailObjectType('thumbParams');
	static thumbnailParamsOutput = new KalturaAuditTrailObjectType('thumbParamsOutput');
	static uiConf = new KalturaAuditTrailObjectType('uiConf');
	static uploadToken = new KalturaAuditTrailObjectType('UploadToken');
	static userLoginData = new KalturaAuditTrailObjectType('UserLoginData');
	static userRole = new KalturaAuditTrailObjectType('UserRole');
	static widget = new KalturaAuditTrailObjectType('widget');
}
KalturaTypesFactory.registerType('KalturaAuditTrailObjectType',KalturaAuditTrailObjectType);