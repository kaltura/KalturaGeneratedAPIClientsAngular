
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmSchemeName } from './KalturaDrmSchemeName';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';

export interface KalturaDrmPlaybackPluginDataArgs  extends KalturaPluginDataArgs {
    scheme? : KalturaDrmSchemeName;
	licenseURL? : string;
}


export class KalturaDrmPlaybackPluginData extends KalturaPluginData {

    scheme : KalturaDrmSchemeName;
	licenseURL : string;

    constructor(data? : KalturaDrmPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmPlaybackPluginData' },
				scheme : { type : 'es', subTypeConstructor : KalturaDrmSchemeName, subType : 'KalturaDrmSchemeName' },
				licenseURL : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmPlaybackPluginData',KalturaDrmPlaybackPluginData);
