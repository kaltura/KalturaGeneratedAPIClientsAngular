
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCuePointFieldName } from './KalturaESearchCuePointFieldName';
import { KalturaESearchEntryAbstractNestedItem, KalturaESearchEntryAbstractNestedItemArgs } from './KalturaESearchEntryAbstractNestedItem';

export interface KalturaESearchCuePointItemArgs  extends KalturaESearchEntryAbstractNestedItemArgs {
    fieldName? : KalturaESearchCuePointFieldName;
}


export class KalturaESearchCuePointItem extends KalturaESearchEntryAbstractNestedItem {

    fieldName : KalturaESearchCuePointFieldName;

    constructor(data? : KalturaESearchCuePointItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCuePointItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCuePointFieldName, subType : 'KalturaESearchCuePointFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCuePointItem'] = KalturaESearchCuePointItem;