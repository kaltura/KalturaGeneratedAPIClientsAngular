
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlProfileBaseFilter, KalturaAccessControlProfileBaseFilterArgs } from './KalturaAccessControlProfileBaseFilter';

export interface KalturaAccessControlProfileFilterArgs  extends KalturaAccessControlProfileBaseFilterArgs {
    
}


export class KalturaAccessControlProfileFilter extends KalturaAccessControlProfileBaseFilter {

    

    constructor(data? : KalturaAccessControlProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlProfileFilter'] = KalturaAccessControlProfileFilter;