
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchGroupFieldName } from './KalturaESearchGroupFieldName';
import { KalturaESearchAbstractGroupItem, KalturaESearchAbstractGroupItemArgs } from './KalturaESearchAbstractGroupItem';

export interface KalturaESearchGroupItemArgs  extends KalturaESearchAbstractGroupItemArgs {
    fieldName? : KalturaESearchGroupFieldName;
}


export class KalturaESearchGroupItem extends KalturaESearchAbstractGroupItem {

    fieldName : KalturaESearchGroupFieldName;

    constructor(data? : KalturaESearchGroupItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchGroupFieldName, subType : 'KalturaESearchGroupFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupItem'] = KalturaESearchGroupItem;