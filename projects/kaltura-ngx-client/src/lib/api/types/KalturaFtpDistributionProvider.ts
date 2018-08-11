
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaFtpDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    
}


export class KalturaFtpDistributionProvider extends KalturaDistributionProvider {

    

    constructor(data? : KalturaFtpDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpDistributionProvider'] = KalturaFtpDistributionProvider;