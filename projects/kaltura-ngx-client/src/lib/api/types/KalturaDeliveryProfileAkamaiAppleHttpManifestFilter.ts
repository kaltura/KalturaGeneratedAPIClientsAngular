
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter, KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs } from './KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter';

export interface KalturaDeliveryProfileAkamaiAppleHttpManifestFilterArgs  extends KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilterArgs {
    
}


export class KalturaDeliveryProfileAkamaiAppleHttpManifestFilter extends KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter {

    

    constructor(data? : KalturaDeliveryProfileAkamaiAppleHttpManifestFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiAppleHttpManifestFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiAppleHttpManifestFilter'] = KalturaDeliveryProfileAkamaiAppleHttpManifestFilter;