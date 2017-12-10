
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';

export interface KalturaFairplayEntryContextPluginDataArgs  extends KalturaPluginDataArgs {
    publicCertificate? : string;
}


export class KalturaFairplayEntryContextPluginData extends KalturaPluginData {

    publicCertificate : string;

    constructor(data? : KalturaFairplayEntryContextPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFairplayEntryContextPluginData' },
				publicCertificate : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFairplayEntryContextPluginData',KalturaFairplayEntryContextPluginData);
