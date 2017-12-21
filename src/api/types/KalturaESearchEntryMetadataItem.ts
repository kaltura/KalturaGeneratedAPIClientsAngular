
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchEntryMetadataItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
}


export class KalturaESearchEntryMetadataItem extends KalturaESearchAbstractEntryItem {

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

KalturaTypesFactory.registerType('KalturaESearchEntryMetadataItem',KalturaESearchEntryMetadataItem);
