
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaParseMultiLanguageCaptionAssetJobDataArgs  extends KalturaJobDataArgs {
    multiLanaguageCaptionAssetId? : string;
	entryId? : string;
	fileLocation? : string;
	fileEncryptionKey? : string;
}


export class KalturaParseMultiLanguageCaptionAssetJobData extends KalturaJobData {

    multiLanaguageCaptionAssetId : string;
	entryId : string;
	fileLocation : string;
	fileEncryptionKey : string;

    constructor(data? : KalturaParseMultiLanguageCaptionAssetJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaParseMultiLanguageCaptionAssetJobData' },
				multiLanaguageCaptionAssetId : { type : 's' },
				entryId : { type : 's' },
				fileLocation : { type : 's' },
				fileEncryptionKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaParseMultiLanguageCaptionAssetJobData',KalturaParseMultiLanguageCaptionAssetJobData);
