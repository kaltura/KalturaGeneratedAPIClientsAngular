
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';

export interface KalturaESearchMetadataItemDataArgs  extends KalturaESearchItemDataArgs {
    xpath? : string;
	metadataProfileId? : number;
	metadataFieldId? : number;
	valueText? : string;
	valueInt? : number;
}


export class KalturaESearchMetadataItemData extends KalturaESearchItemData {

    xpath : string;
	metadataProfileId : number;
	metadataFieldId : number;
	valueText : string;
	valueInt : number;

    constructor(data? : KalturaESearchMetadataItemDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchMetadataItemData' },
				xpath : { type : 's' },
				metadataProfileId : { type : 'n' },
				metadataFieldId : { type : 'n' },
				valueText : { type : 's' },
				valueInt : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchMetadataItemData',KalturaESearchMetadataItemData);
