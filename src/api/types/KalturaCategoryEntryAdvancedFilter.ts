
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryEntryAdvancedOrderBy } from './KalturaCategoryEntryAdvancedOrderBy';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaCategoryEntryAdvancedFilterArgs  extends KalturaSearchItemArgs {
    categoriesMatchOr? : string;
	categoryEntryStatusIn? : string;
	orderBy? : KalturaCategoryEntryAdvancedOrderBy;
	categoryIdEqual? : number;
}


export class KalturaCategoryEntryAdvancedFilter extends KalturaSearchItem {

    categoriesMatchOr : string;
	categoryEntryStatusIn : string;
	orderBy : KalturaCategoryEntryAdvancedOrderBy;
	categoryIdEqual : number;

    constructor(data? : KalturaCategoryEntryAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryAdvancedFilter' },
				categoriesMatchOr : { type : 's' },
				categoryEntryStatusIn : { type : 's' },
				orderBy : { type : 'es', subTypeConstructor : KalturaCategoryEntryAdvancedOrderBy, subType : 'KalturaCategoryEntryAdvancedOrderBy' },
				categoryIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntryAdvancedFilter',KalturaCategoryEntryAdvancedFilter);
