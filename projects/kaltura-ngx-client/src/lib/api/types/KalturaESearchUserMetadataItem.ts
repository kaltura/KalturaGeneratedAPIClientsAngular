
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractUserItem, KalturaESearchAbstractUserItemArgs } from './KalturaESearchAbstractUserItem';

export interface KalturaESearchUserMetadataItemArgs  extends KalturaESearchAbstractUserItemArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
}


export class KalturaESearchUserMetadataItem extends KalturaESearchAbstractUserItem {

    xpath : string;
	metadataProfileId : number;
	metadataFieldId : number;

    constructor(data? : KalturaESearchUserMetadataItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserMetadataItem' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' },
				metadataFieldId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchUserMetadataItem'] = KalturaESearchUserMetadataItem;