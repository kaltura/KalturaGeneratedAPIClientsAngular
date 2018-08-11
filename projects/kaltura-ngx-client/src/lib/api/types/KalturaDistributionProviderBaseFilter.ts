
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDistributionProviderBaseFilterArgs  extends KalturaFilterArgs {
    typeEqual? : KalturaDistributionProviderType;
	typeIn? : string;
}


export class KalturaDistributionProviderBaseFilter extends KalturaFilter {

    typeEqual : KalturaDistributionProviderType;
	typeIn : string;

    constructor(data? : KalturaDistributionProviderBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionProviderBaseFilter' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaDistributionProviderType, subType : 'KalturaDistributionProviderType' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionProviderBaseFilter'] = KalturaDistributionProviderBaseFilter;