
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlBaseFilter, KalturaAccessControlBaseFilterArgs } from './KalturaAccessControlBaseFilter';

export interface KalturaAccessControlFilterArgs  extends KalturaAccessControlBaseFilterArgs {
    
}


export class KalturaAccessControlFilter extends KalturaAccessControlBaseFilter {

    

    constructor(data? : KalturaAccessControlFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlFilter'] = KalturaAccessControlFilter;