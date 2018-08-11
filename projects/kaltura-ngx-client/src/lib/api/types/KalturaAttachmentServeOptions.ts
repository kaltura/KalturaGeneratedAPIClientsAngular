
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetServeOptions, KalturaAssetServeOptionsArgs } from './KalturaAssetServeOptions';

export interface KalturaAttachmentServeOptionsArgs  extends KalturaAssetServeOptionsArgs {
    
}


export class KalturaAttachmentServeOptions extends KalturaAssetServeOptions {

    

    constructor(data? : KalturaAttachmentServeOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttachmentServeOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAttachmentServeOptions'] = KalturaAttachmentServeOptions;