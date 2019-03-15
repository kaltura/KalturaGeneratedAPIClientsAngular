
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractGroupItem, KalturaESearchAbstractGroupItemArgs } from './KalturaESearchAbstractGroupItem';

export interface KalturaESearchGroupMetadataItemArgs  extends KalturaESearchAbstractGroupItemArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
}


export class KalturaESearchGroupMetadataItem extends KalturaESearchAbstractGroupItem {

    xpath : string;
	metadataProfileId : number;
	metadataFieldId : number;

    constructor(data? : KalturaESearchGroupMetadataItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupMetadataItem' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' },
				metadataFieldId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupMetadataItem'] = KalturaESearchGroupMetadataItem;