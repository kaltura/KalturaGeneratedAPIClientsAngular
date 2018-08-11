
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCaptionFieldName } from './KalturaESearchCaptionFieldName';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';

export interface KalturaESearchCaptionItemArgs  extends KalturaESearchEntryAbstractNestedItemArgs {
    fieldName? : KalturaESearchCaptionFieldName;
}


export class KalturaESearchCaptionItem extends KalturaESearchEntryAbstractNestedItem {

    fieldName : KalturaESearchCaptionFieldName;

    constructor(data? : KalturaESearchCaptionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCaptionItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCaptionFieldName, subType : 'KalturaESearchCaptionFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCaptionItem'] = KalturaESearchCaptionItem;