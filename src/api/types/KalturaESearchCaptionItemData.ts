
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';

export interface KalturaESearchCaptionItemDataArgs  extends KalturaESearchItemDataArgs {
    line? : string;
	startsAt? : number;
	endsAt? : number;
	language? : string;
	captionAssetId? : string;
	label? : string;
}


export class KalturaESearchCaptionItemData extends KalturaESearchItemData {

    line : string;
	startsAt : number;
	endsAt : number;
	language : string;
	captionAssetId : string;
	label : string;

    constructor(data? : KalturaESearchCaptionItemDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCaptionItemData' },
				line : { type : 's' },
				startsAt : { type : 'n' },
				endsAt : { type : 'n' },
				language : { type : 's' },
				captionAssetId : { type : 's' },
				label : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCaptionItemData',KalturaESearchCaptionItemData);
