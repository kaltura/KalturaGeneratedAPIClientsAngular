
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRelatedFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaRelatedFilter extends KalturaFilter {

    

    constructor(data? : KalturaRelatedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRelatedFilter'] = KalturaRelatedFilter;