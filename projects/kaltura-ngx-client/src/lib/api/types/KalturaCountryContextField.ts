
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaCountryContextFieldArgs  extends KalturaStringFieldArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaCountryContextField extends KalturaStringField {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaCountryContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCountryContextField' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCountryContextField'] = KalturaCountryContextField;