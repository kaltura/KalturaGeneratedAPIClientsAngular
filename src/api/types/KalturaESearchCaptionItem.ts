
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCaptionFieldName } from './KalturaESearchCaptionFieldName';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchCaptionItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    fieldName? : KalturaESearchCaptionFieldName;
}


export class KalturaESearchCaptionItem extends KalturaESearchAbstractEntryItem {

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

KalturaTypesFactory.registerType('KalturaESearchCaptionItem',KalturaESearchCaptionItem);
