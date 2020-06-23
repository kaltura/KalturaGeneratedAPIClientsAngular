
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaInteractivityDataFieldsFilter, KalturaInteractivityDataFieldsFilterArgs } from './KalturaInteractivityDataFieldsFilter';

export interface KalturaInteractivityNodeFilterArgs  extends KalturaInteractivityDataFieldsFilterArgs {
    
}


export class KalturaInteractivityNodeFilter extends KalturaInteractivityDataFieldsFilter {

    

    constructor(data? : KalturaInteractivityNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivityNodeFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivityNodeFilter'] = KalturaInteractivityNodeFilter;