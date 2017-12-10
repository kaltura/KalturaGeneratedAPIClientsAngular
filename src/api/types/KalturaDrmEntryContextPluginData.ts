
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';

export interface KalturaDrmEntryContextPluginDataArgs  extends KalturaPluginDataArgs {
    flavorData? : string;
}


export class KalturaDrmEntryContextPluginData extends KalturaPluginData {

    flavorData : string;

    constructor(data? : KalturaDrmEntryContextPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmEntryContextPluginData' },
				flavorData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmEntryContextPluginData',KalturaDrmEntryContextPluginData);
