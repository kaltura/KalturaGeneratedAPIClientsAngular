
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRequestConfigurationArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	ks? : string;
	language? : string;
	responseProfile? : KalturaBaseResponseProfile;
}


export class KalturaRequestConfiguration extends KalturaObjectBase {

    partnerId : number;
	ks : string;
	language : string;
	responseProfile : KalturaBaseResponseProfile;

    constructor(data? : KalturaRequestConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRequestConfiguration' },
				partnerId : { type : 'n' },
				ks : { type : 's' },
				language : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRequestConfiguration'] = KalturaRequestConfiguration;