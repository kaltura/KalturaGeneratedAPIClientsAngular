
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchGroupFieldName } from './KalturaESearchGroupFieldName';
import { KalturaESearchAbstractUserItem, KalturaESearchAbstractUserItemArgs } from './KalturaESearchAbstractUserItem';

export interface KalturaESearchGroupItemArgs  extends KalturaESearchAbstractUserItemArgs {
    fieldName? : KalturaESearchGroupFieldName;
}


export class KalturaESearchGroupItem extends KalturaESearchAbstractUserItem {

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