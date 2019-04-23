
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEsearchGroupUserFieldName } from './KalturaEsearchGroupUserFieldName';
import { KalturaGroupUserCreationMode } from './KalturaGroupUserCreationMode';
import { KalturaESearchAbstractUserItem, KalturaESearchAbstractUserItemArgs } from './KalturaESearchAbstractUserItem';

export interface KalturaESearchGroupUserItemArgs  extends KalturaESearchAbstractUserItemArgs {
    fieldName? : KalturaEsearchGroupUserFieldName;
	creationMode? : KalturaGroupUserCreationMode;
}


export class KalturaESearchGroupUserItem extends KalturaESearchAbstractUserItem {

    fieldName : KalturaEsearchGroupUserFieldName;
	creationMode : KalturaGroupUserCreationMode;

    constructor(data? : KalturaESearchGroupUserItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupUserItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaEsearchGroupUserFieldName, subType : 'KalturaEsearchGroupUserFieldName' },
				creationMode : { type : 'en', subTypeConstructor : KalturaGroupUserCreationMode, subType : 'KalturaGroupUserCreationMode' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupUserItem'] = KalturaESearchGroupUserItem;