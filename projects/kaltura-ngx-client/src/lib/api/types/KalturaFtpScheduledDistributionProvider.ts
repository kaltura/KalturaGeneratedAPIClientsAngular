
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionProvider, KalturaFtpDistributionProviderArgs } from './KalturaFtpDistributionProvider';

export interface KalturaFtpScheduledDistributionProviderArgs  extends KalturaFtpDistributionProviderArgs {
    
}


export class KalturaFtpScheduledDistributionProvider extends KalturaFtpDistributionProvider {

    

    constructor(data? : KalturaFtpScheduledDistributionProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpScheduledDistributionProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFtpScheduledDistributionProvider'] = KalturaFtpScheduledDistributionProvider;