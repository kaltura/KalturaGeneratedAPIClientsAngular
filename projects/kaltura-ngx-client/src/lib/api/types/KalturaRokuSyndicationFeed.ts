
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConstantXsltSyndicationFeed, KalturaConstantXsltSyndicationFeedArgs } from './KalturaConstantXsltSyndicationFeed';

export interface KalturaRokuSyndicationFeedArgs  extends KalturaConstantXsltSyndicationFeedArgs {
    
}


export class KalturaRokuSyndicationFeed extends KalturaConstantXsltSyndicationFeed {

    

    constructor(data? : KalturaRokuSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRokuSyndicationFeed' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRokuSyndicationFeed'] = KalturaRokuSyndicationFeed;