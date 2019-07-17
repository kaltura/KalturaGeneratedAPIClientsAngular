
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaConvertCaptionAssetJobDataArgs  extends KalturaJobDataArgs {
    captionAssetId? : string;
	fileLocation? : string;
	fileEncryptionKey? : string;
	fromType? : string;
	toType? : string;
}


export class KalturaConvertCaptionAssetJobData extends KalturaJobData {

    captionAssetId : string;
	fileLocation : string;
	fileEncryptionKey : string;
	fromType : string;
	toType : string;

    constructor(data? : KalturaConvertCaptionAssetJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertCaptionAssetJobData' },
				captionAssetId : { type : 's' },
				fileLocation : { type : 's' },
				fileEncryptionKey : { type : 's' },
				fromType : { type : 's' },
				toType : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConvertCaptionAssetJobData'] = KalturaConvertCaptionAssetJobData;