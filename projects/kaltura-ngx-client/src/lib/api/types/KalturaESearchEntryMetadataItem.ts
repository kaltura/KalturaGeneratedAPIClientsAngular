
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';

export interface KalturaESearchEntryMetadataItemArgs  extends KalturaESearchEntryAbstractNestedItemArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
}


export class KalturaESearchEntryMetadataItem extends KalturaESearchEntryAbstractNestedItem {

    xpath : string;
	metadataProfileId : number;
	metadataFieldId : number;

    constructor(data? : KalturaESearchEntryMetadataItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryMetadataItem' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' },
				metadataFieldId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryMetadataItem'] = KalturaESearchEntryMetadataItem;