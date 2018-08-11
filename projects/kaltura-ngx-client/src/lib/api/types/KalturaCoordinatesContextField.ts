
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaCoordinatesContextFieldArgs  extends KalturaStringFieldArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaCoordinatesContextField extends KalturaStringField {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaCoordinatesContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCoordinatesContextField' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCoordinatesContextField'] = KalturaCoordinatesContextField;