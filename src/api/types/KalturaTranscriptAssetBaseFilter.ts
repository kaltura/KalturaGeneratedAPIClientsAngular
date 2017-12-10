
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttachmentAssetFilter, KalturaAttachmentAssetFilterArgs } from './KalturaAttachmentAssetFilter';

export interface KalturaTranscriptAssetBaseFilterArgs  extends KalturaAttachmentAssetFilterArgs {
    
}


export class KalturaTranscriptAssetBaseFilter extends KalturaAttachmentAssetFilter {

    

    constructor(data? : KalturaTranscriptAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranscriptAssetBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTranscriptAssetBaseFilter',KalturaTranscriptAssetBaseFilter);
