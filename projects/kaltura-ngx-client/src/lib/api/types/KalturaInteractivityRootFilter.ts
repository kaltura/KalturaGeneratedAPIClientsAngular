
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaInteractivityDataFieldsFilter, KalturaInteractivityDataFieldsFilterArgs } from './KalturaInteractivityDataFieldsFilter';

export interface KalturaInteractivityRootFilterArgs  extends KalturaInteractivityDataFieldsFilterArgs {
    
}


export class KalturaInteractivityRootFilter extends KalturaInteractivityDataFieldsFilter {

    

    constructor(data? : KalturaInteractivityRootFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivityRootFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivityRootFilter'] = KalturaInteractivityRootFilter;