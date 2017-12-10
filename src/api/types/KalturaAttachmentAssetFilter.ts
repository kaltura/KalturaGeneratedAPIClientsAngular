
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttachmentAssetBaseFilter, KalturaAttachmentAssetBaseFilterArgs } from './KalturaAttachmentAssetBaseFilter';

export interface KalturaAttachmentAssetFilterArgs  extends KalturaAttachmentAssetBaseFilterArgs {
    
}


export class KalturaAttachmentAssetFilter extends KalturaAttachmentAssetBaseFilter {

    

    constructor(data? : KalturaAttachmentAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttachmentAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttachmentAssetFilter',KalturaAttachmentAssetFilter);
