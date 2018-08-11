
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaSyndicationDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaSyndicationDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaSyndicationDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSyndicationDistributionProvider'] = KalturaSyndicationDistributionProvider;