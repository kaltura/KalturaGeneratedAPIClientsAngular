
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaESearchMetadataOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    xpath? : string;
	metadataProfileId? : number;
}


export class KalturaESearchMetadataOrderByItem extends KalturaESearchOrderByItem {

    xpath : string;
	metadataProfileId : number;

    constructor(data? : KalturaESearchMetadataOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchMetadataOrderByItem' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchMetadataOrderByItem'] = KalturaESearchMetadataOrderByItem;