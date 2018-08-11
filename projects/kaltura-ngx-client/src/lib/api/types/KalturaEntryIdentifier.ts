
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryIdentifierField } from './KalturaEntryIdentifierField';
import { KalturaObjectIdentifier, KalturaObjectIdentifierArgs } from './KalturaObjectIdentifier';

export interface KalturaEntryIdentifierArgs  extends KalturaObjectIdentifierArgs {
    identifier? : KalturaEntryIdentifierField;
}


export class KalturaEntryIdentifier extends KalturaObjectIdentifier {

    identifier : KalturaEntryIdentifierField;

    constructor(data? : KalturaEntryIdentifierArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryIdentifier' },
				identifier : { type : 'es', subTypeConstructor : KalturaEntryIdentifierField, subType : 'KalturaEntryIdentifierField' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryIdentifier'] = KalturaEntryIdentifier;