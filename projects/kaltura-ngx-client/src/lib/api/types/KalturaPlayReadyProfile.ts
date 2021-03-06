
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';

export interface KalturaPlayReadyProfileArgs  extends KalturaDrmProfileArgs {
    keySeed? : string;
}


export class KalturaPlayReadyProfile extends KalturaDrmProfile {

    keySeed : string;

    constructor(data? : KalturaPlayReadyProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyProfile' },
				keySeed : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayReadyProfile'] = KalturaPlayReadyProfile;