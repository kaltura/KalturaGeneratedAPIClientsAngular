
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaCrossKalturaDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaCrossKalturaDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaCrossKalturaDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrossKalturaDistributionProvider'] = KalturaCrossKalturaDistributionProvider;