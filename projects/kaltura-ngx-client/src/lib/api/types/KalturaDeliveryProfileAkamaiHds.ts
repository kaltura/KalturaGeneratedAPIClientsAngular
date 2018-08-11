
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileAkamaiHdsArgs  extends KalturaDeliveryProfileArgs {
    supportClipping? : boolean;
}


export class KalturaDeliveryProfileAkamaiHds extends KalturaDeliveryProfile {

    supportClipping : boolean;

    constructor(data? : KalturaDeliveryProfileAkamaiHdsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHds' },
				supportClipping : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileAkamaiHds'] = KalturaDeliveryProfileAkamaiHds;