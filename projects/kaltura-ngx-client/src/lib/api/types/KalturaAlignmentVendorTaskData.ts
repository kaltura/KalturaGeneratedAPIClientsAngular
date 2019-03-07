
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaAlignmentVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    textTranscriptAssetId? : string;
	jsonTranscriptAssetId? : string;
	captionAssetId? : string;
}


export class KalturaAlignmentVendorTaskData extends KalturaVendorTaskData {

    textTranscriptAssetId : string;
	jsonTranscriptAssetId : string;
	captionAssetId : string;

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
				jsonTranscriptAssetId : { type : 's' },
				captionAssetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAlignmentVendorTaskData'] = KalturaAlignmentVendorTaskData;