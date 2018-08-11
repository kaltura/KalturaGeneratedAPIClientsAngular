
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaESearchItemDataResult } from './KalturaESearchItemDataResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchResultArgs  extends KalturaObjectBaseArgs {
    highlight? : KalturaESearchHighlight[];
	itemsData? : KalturaESearchItemDataResult[];
}


export class KalturaESearchResult extends KalturaObjectBase {

    highlight : KalturaESearchHighlight[];
	itemsData : KalturaESearchItemDataResult[];

    constructor(data? : KalturaESearchResultArgs)
    {
        super(data);
        if (typeof this.highlight === 'undefined') this.highlight = [];
		if (typeof this.itemsData === 'undefined') this.itemsData = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchResult' },
				highlight : { type : 'a', subTypeConstructor : KalturaESearchHighlight, subType : 'KalturaESearchHighlight' },
				itemsData : { type : 'a', subTypeConstructor : KalturaESearchItemDataResult, subType : 'KalturaESearchItemDataResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchResult'] = KalturaESearchResult;