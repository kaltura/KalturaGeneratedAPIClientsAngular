
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerBaseFilter, KalturaPartnerBaseFilterArgs } from './KalturaPartnerBaseFilter';

export interface KalturaPartnerFilterArgs  extends KalturaPartnerBaseFilterArgs {
    
}


export class KalturaPartnerFilter extends KalturaPartnerBaseFilter {

    

    constructor(data? : KalturaPartnerFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPartnerFilter'] = KalturaPartnerFilter;