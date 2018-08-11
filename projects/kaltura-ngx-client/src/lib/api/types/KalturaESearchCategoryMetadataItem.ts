
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';

export interface KalturaESearchCategoryMetadataItemArgs  extends KalturaESearchAbstractCategoryItemArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
}


export class KalturaESearchCategoryMetadataItem extends KalturaESearchAbstractCategoryItem {

    xpath : string;
	metadataProfileId : number;
	metadataFieldId : number;

    constructor(data? : KalturaESearchCategoryMetadataItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryMetadataItem' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' },
				metadataFieldId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCategoryMetadataItem'] = KalturaESearchCategoryMetadataItem;