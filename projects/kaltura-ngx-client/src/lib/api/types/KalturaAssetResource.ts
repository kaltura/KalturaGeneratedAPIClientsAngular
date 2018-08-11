
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaAssetResourceArgs  extends KalturaContentResourceArgs {
    assetId? : string;
}


export class KalturaAssetResource extends KalturaContentResource {

    assetId : string;

    constructor(data? : KalturaAssetResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetResource' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetResource'] = KalturaAssetResource;