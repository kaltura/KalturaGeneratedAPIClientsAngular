
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveFeature, KalturaLiveFeatureArgs } from './KalturaLiveFeature';

export interface KalturaLiveCaptionFeatureArgs  extends KalturaLiveFeatureArgs {
    mediaUrl? : string;
	mediaKey? : string;
	captionUrl? : string;
	captionToken? : string;
}


export class KalturaLiveCaptionFeature extends KalturaLiveFeature {

    mediaUrl : string;
	mediaKey : string;
	captionUrl : string;
	captionToken : string;

    constructor(data? : KalturaLiveCaptionFeatureArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveCaptionFeature' },
				mediaUrl : { type : 's' },
				mediaKey : { type : 's' },
				captionUrl : { type : 's' },
				captionToken : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveCaptionFeature'] = KalturaLiveCaptionFeature;