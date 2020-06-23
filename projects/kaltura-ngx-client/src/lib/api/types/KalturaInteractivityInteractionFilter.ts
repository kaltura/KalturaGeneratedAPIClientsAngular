
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaInteractivityDataFieldsFilter, KalturaInteractivityDataFieldsFilterArgs } from './KalturaInteractivityDataFieldsFilter';

export interface KalturaInteractivityInteractionFilterArgs  extends KalturaInteractivityDataFieldsFilterArgs {
    
}


export class KalturaInteractivityInteractionFilter extends KalturaInteractivityDataFieldsFilter {

    

    constructor(data? : KalturaInteractivityInteractionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivityInteractionFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivityInteractionFilter'] = KalturaInteractivityInteractionFilter;