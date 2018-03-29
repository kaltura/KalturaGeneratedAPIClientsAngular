
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchHighlight } from './KalturaESearchHighlight';
import { KalturaESearchItemDataResult } from './KalturaESearchItemDataResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchResultArgs  extends KalturaObjectBaseArgs {
    object? : KalturaObjectBase;
	highlight? : KalturaESearchHighlight[];
	itemsData? : KalturaESearchItemDataResult[];
}


export class KalturaESearchResult extends KalturaObjectBase {

    object : KalturaObjectBase;
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
				object : { type : 'o', subTypeConstructor : KalturaObjectBase, subType : 'KalturaObjectBase' },
				highlight : { type : 'a', subTypeConstructor : KalturaESearchHighlight, subType : 'KalturaESearchHighlight' },
				itemsData : { type : 'a', subTypeConstructor : KalturaESearchItemDataResult, subType : 'KalturaESearchItemDataResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchResult',KalturaESearchResult);
