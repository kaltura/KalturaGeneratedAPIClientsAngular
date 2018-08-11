
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem, KalturaPluginReplacementOptionsItemArgs } from './KalturaPluginReplacementOptionsItem';

export interface KalturaMetadataReplacementOptionsItemArgs  extends KalturaPluginReplacementOptionsItemArgs {
    shouldCopyMetadata? : boolean;
}


export class KalturaMetadataReplacementOptionsItem extends KalturaPluginReplacementOptionsItem {

    shouldCopyMetadata : boolean;

    constructor(data? : KalturaMetadataReplacementOptionsItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataReplacementOptionsItem' },
				shouldCopyMetadata : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMetadataReplacementOptionsItem'] = KalturaMetadataReplacementOptionsItem;