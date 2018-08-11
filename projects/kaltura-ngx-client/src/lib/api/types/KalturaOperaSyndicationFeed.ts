
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConstantXsltSyndicationFeed, KalturaConstantXsltSyndicationFeedArgs } from './KalturaConstantXsltSyndicationFeed';

export interface KalturaOperaSyndicationFeedArgs  extends KalturaConstantXsltSyndicationFeedArgs {
    
}


export class KalturaOperaSyndicationFeed extends KalturaConstantXsltSyndicationFeed {

    

    constructor(data? : KalturaOperaSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOperaSyndicationFeed' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOperaSyndicationFeed'] = KalturaOperaSyndicationFeed;