
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileBaseFilter, KalturaScheduledTaskProfileBaseFilterArgs } from './KalturaScheduledTaskProfileBaseFilter';

export interface KalturaScheduledTaskProfileFilterArgs  extends KalturaScheduledTaskProfileBaseFilterArgs {
    
}


export class KalturaScheduledTaskProfileFilter extends KalturaScheduledTaskProfileBaseFilter {

    

    constructor(data? : KalturaScheduledTaskProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledTaskProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScheduledTaskProfileFilter'] = KalturaScheduledTaskProfileFilter;