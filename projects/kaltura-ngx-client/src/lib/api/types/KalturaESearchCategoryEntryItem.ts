
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryEntryFieldName } from './KalturaESearchCategoryEntryFieldName';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchCategoryEntryItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    fieldName? : KalturaESearchCategoryEntryFieldName;
	categoryEntryStatus? : KalturaCategoryEntryStatus;
}


export class KalturaESearchCategoryEntryItem extends KalturaESearchAbstractEntryItem {

    fieldName : KalturaESearchCategoryEntryFieldName;
	categoryEntryStatus : KalturaCategoryEntryStatus;

    constructor(data? : KalturaESearchCategoryEntryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryEntryItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCategoryEntryFieldName, subType : 'KalturaESearchCategoryEntryFieldName' },
				categoryEntryStatus : { type : 'en', subTypeConstructor : KalturaCategoryEntryStatus, subType : 'KalturaCategoryEntryStatus' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCategoryEntryItem'] = KalturaESearchCategoryEntryItem;