
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaInteractivityDataFieldsFilterArgs  extends KalturaObjectBaseArgs {
    fields? : string;
}


export class KalturaInteractivityDataFieldsFilter extends KalturaObjectBase {

    fields : string;

    constructor(data? : KalturaInteractivityDataFieldsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivityDataFieldsFilter' },
				fields : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivityDataFieldsFilter'] = KalturaInteractivityDataFieldsFilter;