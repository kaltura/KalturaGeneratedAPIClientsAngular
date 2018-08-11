
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaStringValueArgs  extends KalturaValueArgs {
    value? : string;
}


export class KalturaStringValue extends KalturaValue {

    value : string;

    constructor(data? : KalturaStringValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStringValue' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStringValue'] = KalturaStringValue;