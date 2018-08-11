
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadPluginDataArgs  extends KalturaObjectBaseArgs {
    field? : string;
	value? : string;
}


export class KalturaBulkUploadPluginData extends KalturaObjectBase {

    field : string;
	value : string;

    constructor(data? : KalturaBulkUploadPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadPluginData' },
				field : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadPluginData'] = KalturaBulkUploadPluginData;