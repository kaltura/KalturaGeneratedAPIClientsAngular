
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryIdentifierField } from './KalturaCategoryIdentifierField';
import { KalturaObjectIdentifier, KalturaObjectIdentifierArgs } from './KalturaObjectIdentifier';

export interface KalturaCategoryIdentifierArgs  extends KalturaObjectIdentifierArgs {
    identifier? : KalturaCategoryIdentifierField;
}


export class KalturaCategoryIdentifier extends KalturaObjectIdentifier {

    identifier : KalturaCategoryIdentifierField;

    constructor(data? : KalturaCategoryIdentifierArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryIdentifier' },
				identifier : { type : 'es', subTypeConstructor : KalturaCategoryIdentifierField, subType : 'KalturaCategoryIdentifierField' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryIdentifier'] = KalturaCategoryIdentifier;