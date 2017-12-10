
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmPlaybackPluginData } from './KalturaDrmPlaybackPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackSourceArgs  extends KalturaObjectBaseArgs {
    deliveryProfileId? : string;
	format? : string;
	protocols? : string;
	flavorIds? : string;
	url? : string;
	drm? : KalturaDrmPlaybackPluginData[];
}


export class KalturaPlaybackSource extends KalturaObjectBase {

    deliveryProfileId : string;
	format : string;
	protocols : string;
	flavorIds : string;
	url : string;
	drm : KalturaDrmPlaybackPluginData[];

    constructor(data? : KalturaPlaybackSourceArgs)
    {
        super(data);
        if (typeof this.drm === 'undefined') this.drm = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackSource' },
				deliveryProfileId : { type : 's' },
				format : { type : 's' },
				protocols : { type : 's' },
				flavorIds : { type : 's' },
				url : { type : 's' },
				drm : { type : 'a', subTypeConstructor : KalturaDrmPlaybackPluginData, subType : 'KalturaDrmPlaybackPluginData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackSource',KalturaPlaybackSource);
