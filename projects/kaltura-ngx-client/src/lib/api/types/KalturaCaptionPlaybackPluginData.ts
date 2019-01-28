
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionPlaybackPluginDataArgs  extends KalturaObjectBaseArgs {
    label? : string;
	format? : string;
	language? : string;
	webVttUrl? : string;
	url? : string;
	isDefault? : boolean;
	languageCode? : string;
}


export class KalturaCaptionPlaybackPluginData extends KalturaObjectBase {

    label : string;
	format : string;
	language : string;
	webVttUrl : string;
	url : string;
	isDefault : boolean;
	languageCode : string;

    constructor(data? : KalturaCaptionPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionPlaybackPluginData' },
				label : { type : 's' },
				format : { type : 's' },
				language : { type : 's' },
				webVttUrl : { type : 's' },
				url : { type : 's' },
				isDefault : { type : 'b' },
				languageCode : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionPlaybackPluginData'] = KalturaCaptionPlaybackPluginData;