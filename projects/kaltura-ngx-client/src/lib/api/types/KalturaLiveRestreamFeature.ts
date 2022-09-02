
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveFeature, KalturaLiveFeatureArgs } from './KalturaLiveFeature';

export interface KalturaLiveRestreamFeatureArgs  extends KalturaLiveFeatureArgs {
    primaryUrl? : string;
	secondaryUrl? : string;
	streamKey? : string;
}


export class KalturaLiveRestreamFeature extends KalturaLiveFeature {

    primaryUrl : string;
	secondaryUrl : string;
	streamKey : string;

    constructor(data? : KalturaLiveRestreamFeatureArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveRestreamFeature' },
				primaryUrl : { type : 's' },
				secondaryUrl : { type : 's' },
				streamKey : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveRestreamFeature'] = KalturaLiveRestreamFeature;