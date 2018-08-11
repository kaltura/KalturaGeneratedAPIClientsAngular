
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirusScanProfileBaseFilter, KalturaVirusScanProfileBaseFilterArgs } from './KalturaVirusScanProfileBaseFilter';

export interface KalturaVirusScanProfileFilterArgs  extends KalturaVirusScanProfileBaseFilterArgs {
    
}


export class KalturaVirusScanProfileFilter extends KalturaVirusScanProfileBaseFilter {

    

    constructor(data? : KalturaVirusScanProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirusScanProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirusScanProfileFilter'] = KalturaVirusScanProfileFilter;