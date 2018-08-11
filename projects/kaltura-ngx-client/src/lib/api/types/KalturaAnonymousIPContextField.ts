
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaAnonymousIPContextFieldArgs  extends KalturaStringFieldArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaAnonymousIPContextField extends KalturaStringField {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaAnonymousIPContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnonymousIPContextField' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAnonymousIPContextField'] = KalturaAnonymousIPContextField;