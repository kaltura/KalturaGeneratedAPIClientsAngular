
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileAkamaiHttpArgs  extends KalturaDeliveryProfileArgs {
    useIntelliseek? : boolean;
}


export class KalturaDeliveryProfileAkamaiHttp extends KalturaDeliveryProfile {

    useIntelliseek : boolean;

    constructor(data? : KalturaDeliveryProfileAkamaiHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileAkamaiHttp' },
				useIntelliseek : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeliveryProfileAkamaiHttp',KalturaDeliveryProfileAkamaiHttp);
