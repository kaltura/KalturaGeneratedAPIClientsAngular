
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileAkamaiAppleHttpManifestArgs  extends KalturaDeliveryProfileArgs {
    supportClipping? : boolean;
}


export class KalturaDeliveryProfileAkamaiAppleHttpManifest extends KalturaDeliveryProfile {

    supportClipping : boolean;

    constructor(data? : KalturaDeliveryProfileAkamaiAppleHttpManifestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiAppleHttpManifest' },
				supportClipping : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiAppleHttpManifest'] = KalturaDeliveryProfileAkamaiAppleHttpManifest;