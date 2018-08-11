
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaShortLinkBaseFilter, KalturaShortLinkBaseFilterArgs } from './KalturaShortLinkBaseFilter';

export interface KalturaShortLinkFilterArgs  extends KalturaShortLinkBaseFilterArgs {
    
}


export class KalturaShortLinkFilter extends KalturaShortLinkBaseFilter {

    

    constructor(data? : KalturaShortLinkFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaShortLinkFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaShortLinkFilter'] = KalturaShortLinkFilter;