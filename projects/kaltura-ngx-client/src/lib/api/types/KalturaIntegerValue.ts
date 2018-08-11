
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaIntegerValueArgs  extends KalturaValueArgs {
    value? : number;
}


export class KalturaIntegerValue extends KalturaValue {

    value : number;

    constructor(data? : KalturaIntegerValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegerValue' },
				value : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIntegerValue'] = KalturaIntegerValue;