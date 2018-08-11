
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter, KalturaDeliveryProfileFilterArgs } from './KalturaDeliveryProfileFilter';

export interface KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs  extends KalturaDeliveryProfileFilterArgs {
    
}


export class KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter extends KalturaDeliveryProfileFilter {

    

    constructor(data? : KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter'] = KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter;