
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaMetadataFieldArgs  extends KalturaStringFieldArgs {
    xPath? : string;
	profileId? : number;
	profileSystemName? : string;
}


export class KalturaMetadataField extends KalturaStringField {

    xPath : string;
	profileId : number;
	profileSystemName : string;

    constructor(data? : KalturaMetadataFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataField' },
				xPath : { type : 's' },
				profileId : { type : 'n' },
				profileSystemName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataField',KalturaMetadataField);
