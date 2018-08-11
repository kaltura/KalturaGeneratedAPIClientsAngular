
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaParseCaptionAssetJobDataArgs  extends KalturaJobDataArgs {
    captionAssetId? : string;
}


export class KalturaParseCaptionAssetJobData extends KalturaJobData {

    captionAssetId : string;

    constructor(data? : KalturaParseCaptionAssetJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaParseCaptionAssetJobData' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaParseCaptionAssetJobData'] = KalturaParseCaptionAssetJobData;