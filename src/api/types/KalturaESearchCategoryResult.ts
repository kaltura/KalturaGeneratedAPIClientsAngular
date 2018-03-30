
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategory } from './KalturaCategory';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchCategoryResultArgs  extends KalturaESearchResultArgs {
    object? : KalturaCategory;
}


export class KalturaESearchCategoryResult extends KalturaESearchResult {

    object : KalturaCategory;

    constructor(data? : KalturaESearchCategoryResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryResult' },
				object : { type : 'o', subTypeConstructor : KalturaCategory, subType : 'KalturaCategory' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryResult',KalturaESearchCategoryResult);
