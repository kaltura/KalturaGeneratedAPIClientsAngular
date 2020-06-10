
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorTaskDataCaptionAsset, KalturaVendorTaskDataCaptionAssetArgs } from './KalturaVendorTaskDataCaptionAsset';

export interface KalturaAlignmentVendorTaskDataArgs  extends KalturaVendorTaskDataCaptionAssetArgs {
    textTranscriptAssetId? : string;
	jsonTranscriptAssetId? : string;
}


export class KalturaAlignmentVendorTaskData extends KalturaVendorTaskDataCaptionAsset {

    textTranscriptAssetId : string;
	jsonTranscriptAssetId : string;

    constructor(data? : KalturaAlignmentVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAlignmentVendorTaskData' },
				textTranscriptAssetId : { type : 's' },
				jsonTranscriptAssetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAlignmentVendorTaskData'] = KalturaAlignmentVendorTaskData;