
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPlaybackPluginData, KalturaDrmPlaybackPluginDataArgs } from './KalturaDrmPlaybackPluginData';

export interface KalturaFairPlayPlaybackPluginDataArgs  extends KalturaDrmPlaybackPluginDataArgs {
    certificate? : string;
}


export class KalturaFairPlayPlaybackPluginData extends KalturaDrmPlaybackPluginData {

    certificate : string;

    constructor(data? : KalturaFairPlayPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFairPlayPlaybackPluginData' },
				certificate : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFairPlayPlaybackPluginData'] = KalturaFairPlayPlaybackPluginData;