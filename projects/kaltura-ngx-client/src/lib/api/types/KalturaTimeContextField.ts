
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerField, KalturaIntegerFieldArgs } from './KalturaIntegerField';

export interface KalturaTimeContextFieldArgs  extends KalturaIntegerFieldArgs {
    offset? : number;
}


export class KalturaTimeContextField extends KalturaIntegerField {

    offset : number;

    constructor(data? : KalturaTimeContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeContextField' },
				offset : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTimeContextField'] = KalturaTimeContextField;